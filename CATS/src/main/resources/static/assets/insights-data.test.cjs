'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { performance } = require('node:perf_hooks');
const insights = require('./insights-data.js');

function request(id, overrides = {}) {
  return {
    id: String(id),
    title: 'Leading teams',
    provider: 'Learning Institute',
    category: 'Professional',
    applicantId: '90071992547409931',
    learner: 'Alex',
    start: '2026-11-03',
    end: '2026-11-04',
    created: '2026-10-10T09:00:00',
    status: 'APPLIED',
    fee: '120.50',
    days: '1.50',
    ...overrides,
  };
}

test('Long IDs and scalar decimals survive normalization; duplicate IDs fail explicitly', () => {
  const [record] = insights.normalize([
    request('9007199254740993999', { fee: '99999999999999999999.125' }),
  ]);
  assert.equal(record.id, '9007199254740993999');
  assert.equal(record.applicantId, '90071992547409931');
  assert.equal(record.fee, '99999999999999999999.125');
  assert.throws(() => insights.normalize([request(1), request(1)]), /duplicate/);
});

test('date ranges include both boundary dates, preserve local timestamps and reject bad ranges', () => {
  const records = insights.normalize([
    request(1, { created: '2026-10-10T00:01' }),
    request(2, { created: '2026-10-10T23:59:59.999999999' }),
    request(3, { created: null }),
    request(4, { created: '2026-02-30T12:00:00' }),
  ]);
  assert.equal(insights.filter(records).length, 4);
  assert.deepEqual(
    insights.filter(records, { from: '2026-10-10', to: '2026-10-10' }).map((row) => row.id),
    ['1', '2'],
  );
  assert.equal(insights.aggregate(records).undated, 2);
  assert.equal(
    insights.filter(records, { dateField: 'start', from: '2026-11-03', to: '2026-11-03' }).length,
    4,
  );
  assert.throws(() => insights.filter(records, { from: '2026-02-30' }), /valid start date/);
  assert.throws(
    () => insights.filter(records, { from: '2026-12-01', to: '2026-01-01' }),
    /on or after/,
  );
});

test('request timestamps sort chronologically across Java fractional second precision', () => {
  const records = insights.normalize([
    request(1, { created: '2026-10-10T09:00:00.123456' }),
    request(2, { created: '2026-10-10T09:00:00.900' }),
    request(3, { created: '2026-10-10T09:00' }),
    request(4, { created: null }),
  ]);
  assert.deepEqual(
    insights.sort(records, { field: 'created', direction: 'desc' }).map((row) => row.id),
    ['2', '1', '3', '4'],
  );
  assert.deepEqual(
    insights.sort(records, { field: 'created', direction: 'asc' }).map((row) => row.id),
    ['3', '1', '2', '4'],
  );
});

test('course groups and students use identities rather than matching display names', () => {
  const records = insights.normalize([
    request(1),
    request(2, { provider: 'Another provider' }),
    request(3, { category: 'Administrative', applicantId: '90071992547409932' }),
    request(4, { applicantId: null, status: 'COMPLETED' }),
  ]);
  const summary = insights.aggregate(records);
  assert.equal(summary.courses.length, 3);
  assert.equal(summary.students, 2);
  assert.equal(summary.pending, 3);
  assert.equal(summary.accepted, 1);
  assert.equal(
    summary.statuses.reduce((sum, item) => sum + item.count, 0),
    records.length,
  );
});

test('decimal sorting and totals do not round through floating point or argument limits', () => {
  assert.equal(
    insights.sumDecimals(['99999999999999999999.125', '0.875']),
    '100000000000000000000.000',
  );
  const records = insights.normalize([
    request(1, { fee: '1.90' }),
    request(2, { fee: '1.125' }),
    request(3, { fee: null }),
  ]);
  assert.deepEqual(
    insights.sort(records, { field: 'fee', direction: 'asc' }).map((row) => row.id),
    ['2', '1', '3'],
  );
  assert.equal(insights.sumDecimals(Array(150000).fill('0.01')), '1500.00');
});

test('CSV exports all rows, escapes quotes/newlines and neutralizes text formulas', () => {
  const csv = insights.toCsv([
    request(1, {
      title: '  =SUM(1,2)',
      provider: '\t+cmd',
      category: '@category',
      learner: ' -student',
      fee: '-2.50',
    }),
    request(2, { title: 'Quote " and\nnewline' }),
  ]);
  assert.match(csv, /"'  =SUM\(1,2\)"/);
  assert.match(csv, /"'\t\+cmd"/);
  assert.match(csv, /"'@category"/);
  assert.match(csv, /"' -student"/);
  assert.match(csv, /"-2.50"/);
  assert.match(csv, /"Quote "" and\nnewline"/);
  assert.ok(csv.endsWith('\r\n'));
});

test('10,000 synthetic requests support full-selection aggregation, filtering, sorting and export', () => {
  const started = performance.now();
  const source = Array.from({ length: 10000 }, (_, index) =>
    request(index + 1, {
      title: `Course ${index % 20}`,
      provider: `Provider ${index % 3}`,
      category: `Category ${index % 4}`,
      applicantId: String(90071992547409930n + BigInt(index % 1000)),
      created: `2026-${String((index % 12) + 1).padStart(2, '0')}-10T09:00:00`,
      status: insights.statuses[index % insights.statuses.length],
      fee: '100.25',
      days: '0.50',
    }),
  );
  const records = insights.normalize(source);
  const summary = insights.aggregate(records);
  assert.equal(summary.count, 10000);
  assert.equal(summary.students, 1000);
  assert.equal(summary.courses.length, 60);
  assert.equal(summary.months.length, 12);
  assert.equal(summary.pending, 2858);
  assert.equal(summary.fee, '1002500.00');
  assert.equal(summary.days, '5000.00');
  const selection = insights.sort(
    insights.filter(records, { status: 'APPROVED', month: '2026-01' }),
    { field: 'title', direction: 'asc' },
  );
  assert.equal(selection.length, 119);
  assert.equal(insights.aggregate(selection).fee, '11929.75');
  assert.equal(insights.toCsv(selection).split('\r\n').length, 121);
  assert.equal(insights.toCsv(records).split('\r\n').length, 10002);
  console.log(
    `Synthetic 10k logic run: ${(performance.now() - started).toFixed(1)} ms. This does not measure Java, network or initial DOM rendering.`,
  );
});
