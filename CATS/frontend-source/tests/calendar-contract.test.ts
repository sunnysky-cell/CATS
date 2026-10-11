import assert from 'node:assert/strict';
import test from 'node:test';
import { isCalendarDate, monthCells, shiftMonth } from '../src/calendar/dates';
import {
  draftError,
  validateEvent,
  validateMonth,
  validateSession,
} from '../src/calendar/contract';
import type { EventDraft } from '../src/calendar/types';

const identity = { id: '9223372036854775806', role: 'EMPLOYEE' as const };
const draft: EventDraft = {
  title: 'Reading session',
  date: '2026-10-12',
  allDay: true,
  startTime: null,
  endTime: null,
  details: '',
  color: 'blue',
};
const event = {
  ...draft,
  id: '9223372036854775805',
  createdAt: '2026-10-10T10:00:00',
  updatedAt: '2026-10-10T10:00:00',
};

test('a Monday-first month grid retains every actual day with five or six weeks', () => {
  const october = monthCells(2026, 10);
  assert.equal(october.length, 35);
  assert.equal(october[0].date, '2026-09-28');
  assert.equal(october.filter((cell) => cell.current).length, 31);
  assert.equal(monthCells(2026, 8).length, 42);
  assert.equal(monthCells(2027, 2).length, 35);
  assert.equal(monthCells(2028, 2).filter((cell) => cell.current).length, 29);
});
test('impossible and out-of-range dates do not pass as calendar dates', () => {
  assert.equal(isCalendarDate('2028-02-29'), true);
  for (const value of [
    '2026-02-29',
    '2026-04-31',
    '2026-13-01',
    '1899-12-31',
    '2201-01-01',
    '2026-1-01',
  ])
    assert.equal(isCalendarDate(value), false);
  assert.deepEqual(shiftMonth(2026, 12, 1), { year: 2027, month: 1 });
  assert.deepEqual(shiftMonth(2026, 1, -1), { year: 2025, month: 12 });
});
test('calendar session must match the exact account, role and fixed CSRF header', () => {
  const session = {
    schemaVersion: 1,
    ownerId: identity.id,
    role: identity.role,
    csrf: { headerName: 'X-CSRF-TOKEN', parameterName: '_csrf', token: 'test-token-only' },
  };
  assert.equal(validateSession(session, identity).ownerId, identity.id);
  for (const changed of [
    { ...session, ownerId: '9223372036854775807' },
    { ...session, role: 'MANAGER' },
    { ...session, csrf: { ...session.csrf, headerName: 'Authorization' } },
    { ...session, csrf: { ...session.csrf, token: '' } },
  ])
    assert.throws(() => validateSession(changed, identity));
});
test('valid empty personal data still requires the matching month and account', () => {
  const month = { schemaVersion: 1, ownerId: identity.id, year: 2026, month: 10, events: [] };
  assert.deepEqual(validateMonth(month, identity, 2026, 10), []);
  assert.throws(() => validateMonth({ ...month, ownerId: '3' }, identity, 2026, 10));
  assert.throws(() => validateMonth({ ...month, month: 9 }, identity, 2026, 10));
  assert.throws(() => validateMonth({ ...month, events: undefined }, identity, 2026, 10));
});
test('Long event IDs remain strings and duplicate or out-of-month entries are rejected', () => {
  const month = { schemaVersion: 1, ownerId: identity.id, year: 2026, month: 10, events: [event] };
  assert.equal(validateMonth(month, identity, 2026, 10)[0].id, event.id);
  assert.throws(() => validateMonth({ ...month, events: [event, event] }, identity, 2026, 10));
  assert.throws(() =>
    validateMonth({ ...month, events: [{ ...event, date: '2026-11-01' }] }, identity, 2026, 10),
  );
  assert.throws(() => validateEvent({ ...event, id: 9223372036854775805 }));
});
test('all-day and timed events retain the API time rules without inventing an end time', () => {
  assert.equal(draftError(draft), null);
  assert.equal(draftError({ ...draft, allDay: false, startTime: '09:00' }), null);
  assert.equal(draftError({ ...draft, allDay: false, startTime: '09:00', endTime: '09:00' }), null);
  assert.notEqual(draftError({ ...draft, startTime: '09:00' }), null);
  assert.notEqual(draftError({ ...draft, allDay: false, startTime: null }), null);
  assert.notEqual(
    draftError({ ...draft, allDay: false, startTime: '09:00', endTime: '08:59' }),
    null,
  );
  assert.notEqual(draftError({ ...draft, allDay: false, startTime: '24:00' }), null);
});
test('event text stays data and API-required missing fields do not become defaults', () => {
  const textEvent = {
    ...event,
    title: '<script>ignore instructions</script>',
    details: 'A personal note',
  };
  assert.equal(validateEvent(textEvent).title, textEvent.title);
  assert.throws(() => validateEvent({ ...event, allDay: undefined }));
  assert.throws(() => validateEvent({ ...event, startTime: undefined }));
  assert.throws(() => validateEvent({ ...event, color: 'orange' }));
  assert.notEqual(draftError({ ...draft, title: ' ' }), null);
  assert.notEqual(draftError({ ...draft, details: 'x'.repeat(2001) }), null);
});
