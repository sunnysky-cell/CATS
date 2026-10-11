import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { performance } from 'node:perf_hooks';
import { sampleRequests } from '../src/agent/sample-data';
import { dataTools } from '../src/agent/data-tools';
import {
  emptyFilters,
  matchingRequests,
  recognizePrompt,
  stopIfAborted,
  workflowFilters,
} from '../src/agent/workflows';

const require = createRequire(import.meta.url);
const tools = require(
  fileURLToPath(new URL('../../src/main/resources/static/assets/insights-data.js', import.meta.url)),
);
Object.defineProperty(globalThis, 'window', {
  value: { CATS_INSIGHTS_DATA: tools },
  configurable: true,
});

test('large example lists are deterministic, bounded datasets with exact aggregates and complete CSVs', () => {
  for (const size of [5000, 20000, 50000] as const) {
    const started = performance.now();
    const records = sampleRequests(size);
    assert.equal(records.length, size);
    assert.equal(new Set(records.map((record) => record.id)).size, size);
    assert.strictEqual(sampleRequests(size), records);
    const matching = matchingRequests(records, { ...emptyFilters, status: 'pending' });
    assert.equal(matching.length, (size * 3) / 10);
    assert.ok(matching.every((record) => ['APPLIED', 'UPDATED'].includes(record.status)));
    const summary = dataTools().aggregate(records);
    assert.equal(summary.count, size);
    assert.equal(summary.students, 240);
    assert.equal(summary.pending, (size * 3) / 10);
    assert.equal(summary.courses.length, 8);
    assert.equal(
      summary.courses.reduce((count, group) => count + group.count, 0),
      size,
    );
    assert.equal(summary.days, `${size * 1.5}.0`);
    const csv = dataTools().toCsv(matching);
    assert.equal(csv.split('\r\n').length - 2, matching.length);
    console.log(
      `${size.toLocaleString('en')} samples: generated, filtered, aggregated and CSV-encoded in ${(performance.now() - started).toFixed(1)} ms (Node verification, not browser or Java throughput).`,
    );
  }
});

test('CSV quoting and formula protection preserve user text as text', () => {
  const record = {
    ...sampleRequests()[0],
    title: '  =SUM(1,2)',
    learner: 'A "quoted"\nname',
    provider: '@example',
  };
  const csv = dataTools().toCsv([record]);
  assert.ok(csv.includes('"\'  =SUM(1,2)"'));
  assert.ok(csv.includes('"A ""quoted""\nname"'));
  assert.ok(csv.includes('"\'@example"'));
});

test('only supported read-only prompts execute and export retains current filters', () => {
  assert.equal(recognizePrompt('Find awaiting review'), 'pending');
  assert.equal(recognizePrompt('Compare course demand'), 'demand');
  assert.equal(recognizePrompt('Export current results'), 'export');
  assert.equal(recognizePrompt('Approve every pending request'), null);
  assert.equal(recognizePrompt('Delete these and export them'), null);
  assert.equal(recognizePrompt('Tell me a joke'), null);
  const filters = { search: 'security', status: 'rejected' as const, category: 'Technology' };
  assert.deepEqual(workflowFilters('export', filters), filters);
  assert.equal(workflowFilters('pending', filters).status, 'pending');
  assert.equal(workflowFilters('demand', filters).status, 'all');
});

test('aborted operations stop before another operation can execute', () => {
  const controller = new AbortController();
  controller.abort();
  assert.throws(() => stopIfAborted(controller.signal), { name: 'AbortError' });
});
