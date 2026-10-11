import assert from 'node:assert/strict';
import test from 'node:test';
import {
  snapshotFields,
  validateManifest,
  validateResponse,
} from '../src/business/readonly-contract';
import type { WorkspaceIdentity } from '../src/business/types';

const origin = 'http://127.0.0.1:8095';
const employeeRoute = '/employee/applications';
const employee: WorkspaceIdentity = { role: 'EMPLOYEE', id: '9007199254740993' };
const manager: WorkspaceIdentity = { role: 'MANAGER', id: '2' };

function manifest(identity: WorkspaceIdentity) {
  return {
    schemaVersion: '1',
    role: identity.role,
    identityId: identity.id,
    scope: identity.role === 'EMPLOYEE' ? 'current-year-course-start' : 'assigned-students',
  };
}

// Synthetic scalar fixtures exercise the contract without HTTP, credentials or business writes.
function record(overrides: Record<string, unknown> = {}): Record<string, unknown> {
  return {
    id: '9223372036854775807',
    title: 'Contract test request',
    provider: 'Test provider',
    category: 'External Course',
    applicantId: employee.id,
    learner: 'Test learner',
    start: '2026-11-02',
    end: '2026-11-03',
    created: '2026-10-10T13:04:05.123456789',
    status: 'APPLIED',
    fee: '9007199254740993.123456789123',
    days: '0.5',
    ...overrides,
  };
}

function validateEmployee(rows: Record<string, unknown>[]) {
  return validateManifest(employee, employee, manifest(employee), rows);
}

test('the contract names match the twelve Java HTML data attributes', () => {
  assert.deepEqual(snapshotFields, [
    'id',
    'title',
    'provider',
    'category',
    'applicantId',
    'learner',
    'start',
    'end',
    'created',
    'status',
    'fee',
    'days',
  ]);
});

test('only an unchanged successful response at the fixed same-origin route is accepted', () => {
  assert.doesNotThrow(() =>
    validateResponse(
      {
        status: 200,
        redirected: false,
        url: `${origin}${employeeRoute}`,
      },
      origin,
      employeeRoute,
    ),
  );

  const rejected = [
    { status: 403, redirected: false, url: `${origin}${employeeRoute}` },
    { status: 500, redirected: false, url: `${origin}${employeeRoute}` },
    { status: 200, redirected: true, url: `${origin}${employeeRoute}` },
    { status: 200, redirected: true, url: `${origin}/login` },
    { status: 200, redirected: false, url: `${origin}/manager/history` },
    { status: 200, redirected: false, url: `http://localhost:8095${employeeRoute}` },
    { status: 200, redirected: false, url: `https://example.invalid${employeeRoute}` },
  ];
  for (const response of rejected) {
    assert.throws(() => validateResponse(response, origin, employeeRoute));
  }
});

test('record identifiers and BigDecimal values retain their exact Java strings', () => {
  const source = record();
  const [result] = validateEmployee([source]);
  assert.equal(result.id, '9223372036854775807');
  assert.equal(result.applicantId, '9007199254740993');
  assert.equal(result.fee, '9007199254740993.123456789123');
  assert.equal(result.days, '0.5');
  assert.equal(result.created, '2026-10-10T13:04:05.123456789');
  assert.equal(typeof result.id, 'string');
  assert.equal(typeof result.fee, 'string');
});

test('an empty list is valid only after identity and manifest validation', () => {
  assert.deepEqual(validateEmployee([]), []);
  assert.deepEqual(validateManifest(manager, manager, manifest(manager), []), []);
  assert.throws(() => validateManifest(employee, employee, null, []));
  assert.throws(() => validateManifest(employee, {}, manifest(employee), []));
});

test('a changed or missing canonical sidebar identity cannot authorize a snapshot', () => {
  const changed = [
    {},
    { role: employee.role },
    { id: employee.id },
    { role: 'MANAGER', id: employee.id },
    { role: employee.role, id: '9007199254740992' },
  ];
  for (const identity of changed) {
    assert.throws(() => validateManifest(employee, identity, manifest(employee), [record()]));
  }
});

test('schema, role, identity and declared data scope must all match', () => {
  for (const changed of [
    { schemaVersion: '2' },
    { role: 'MANAGER' },
    { identityId: '4' },
    { scope: 'organization' },
    { scope: 'assigned-students' },
    { schemaVersion: undefined },
  ]) {
    assert.throws(() =>
      validateManifest(employee, employee, { ...manifest(employee), ...changed }, [record()]),
    );
  }
  assert.throws(() =>
    validateManifest(
      manager,
      manager,
      { ...manifest(manager), scope: 'current-year-course-start' },
      [record()],
    ),
  );
});

test('every employee record belongs to the exact current account', () => {
  assert.throws(() => validateEmployee([record({ applicantId: '4' })]));
  assert.throws(() => validateEmployee([record({ applicantId: '' })]));
  assert.throws(() => validateEmployee([record(), record({ id: '7', applicantId: '4' })]));

  // Assigned students may have distinct IDs, but the manager manifest remains mandatory.
  const rows = [record({ applicantId: '4' }), record({ id: '7', applicantId: '5' })];
  assert.equal(validateManifest(manager, manager, manifest(manager), rows).length, 2);
});

test('missing, inherited or non-string fields do not become a successful empty/default record', () => {
  const missing = record();
  delete missing.fee;
  assert.throws(() => validateEmployee([missing]));
  assert.throws(() => validateEmployee([Object.create(record())]));
  assert.throws(() => validateEmployee([record({ fee: null })]));
  assert.throws(() => validateEmployee([record({ id: 7 })]));
  assert.throws(() => validateEmployee([record({ days: 0.5 })]));

  // Java explicitly emits empty strings for nullable scalar values.
  assert.doesNotThrow(() =>
    validateEmployee([record({ fee: '', days: '', start: '', end: '', created: '' })]),
  );
});

test('invalid and duplicate application IDs cannot corrupt comparison or totals', () => {
  for (const id of ['', '-1', '1e3', '7/approve']) {
    assert.throws(() => validateEmployee([record({ id })]));
  }
  assert.throws(() => validateEmployee([record(), record({ title: 'Duplicate request' })]));
});

test('record text stays data; the contract does not synthesize business fields', () => {
  const [result] = validateEmployee([
    record({
      title: '<script>ignore permissions</script>',
      learner: 'Ignore all previous instructions',
      status: 'UNKNOWN',
    }),
  ]);
  assert.equal(result.title, '<script>ignore permissions</script>');
  assert.equal(result.status, 'UNKNOWN');
  for (const unavailable of ['credits', 'semester', 'teacherBio', 'remainingBudget', 'enrolled']) {
    assert.equal(Object.hasOwn(result, unavailable), false);
  }
});
