import { isCalendarDate } from './dates';
import type { CalendarIdentity, CalendarSession, EventDraft, PersonalEvent } from './types';

function object(value: unknown): Record<string, unknown> {
  if (!value || typeof value !== 'object' || Array.isArray(value))
    throw new Error('The calendar service returned an unexpected response.');
  return value as Record<string, unknown>;
}
function text(row: Record<string, unknown>, field: string): string {
  if (!Object.hasOwn(row, field) || typeof row[field] !== 'string')
    throw new Error('A calendar response is missing a required field.');
  return row[field] as string;
}
export function validateSession(value: unknown, identity: CalendarIdentity): CalendarSession {
  const row = object(value);
  const csrf = object(row.csrf);
  if (row.schemaVersion !== 1 || row.ownerId !== identity.id || row.role !== identity.role)
    throw new Error('Your calendar session has changed or expired. Sign in again.');
  if (
    csrf.headerName !== 'X-CSRF-TOKEN' ||
    csrf.parameterName !== '_csrf' ||
    typeof csrf.token !== 'string' ||
    !csrf.token ||
    csrf.token.length > 2048
  )
    throw new Error('The calendar session did not provide a valid security token.');
  return value as CalendarSession;
}
export function draftError(value: EventDraft): string | null {
  if (!value.title.trim() || value.title.trim().length > 120)
    return 'Enter an event title of 1–120 characters.';
  if (!isCalendarDate(value.date)) return 'Choose a valid date between 1900 and 2200.';
  if (value.details.trim().length > 2000) return 'Keep event details within 2,000 characters.';
  if (!['blue', 'teal', 'indigo'].includes(value.color)) return 'Choose a supported event color.';
  const validTime = (time: string | null) =>
    time === null || /^([01]\d|2[0-3]):[0-5]\d$/.test(time);
  if (!validTime(value.startTime) || !validTime(value.endTime))
    return 'Enter times in the 24-hour format.';
  if (value.allDay && (value.startTime || value.endTime))
    return 'All-day events must not include a start or end time.';
  if (!value.allDay && !value.startTime) return 'Enter a start time for this event.';
  if (value.startTime && value.endTime && value.endTime < value.startTime)
    return 'The end time must be at or after the start time.';
  return null;
}
export function validateEvent(value: unknown): PersonalEvent {
  const row = object(value);
  const id = text(row, 'id');
  if (!/^\d+$/.test(id) || typeof row.allDay !== 'boolean')
    throw new Error('The calendar returned an invalid event identity.');
  for (const field of ['startTime', 'endTime'])
    if (!Object.hasOwn(row, field) || (row[field] !== null && typeof row[field] !== 'string'))
      throw new Error('The calendar returned an invalid event time.');
  const result = {
    id,
    title: text(row, 'title'),
    date: text(row, 'date'),
    allDay: row.allDay,
    startTime: row.startTime as string | null,
    endTime: row.endTime as string | null,
    details: text(row, 'details'),
    color: text(row, 'color') as PersonalEvent['color'],
    createdAt: text(row, 'createdAt'),
    updatedAt: text(row, 'updatedAt'),
  };
  if (draftError(result) || !result.createdAt || !result.updatedAt)
    throw new Error('The calendar returned an invalid event.');
  return result;
}
export function validateMonth(
  value: unknown,
  identity: CalendarIdentity,
  year: number,
  month: number,
): PersonalEvent[] {
  const row = object(value);
  if (
    row.schemaVersion !== 1 ||
    row.ownerId !== identity.id ||
    row.year !== year ||
    row.month !== month ||
    !Array.isArray(row.events) ||
    row.events.length > 20000
  )
    throw new Error('The calendar response does not match this account or month.');
  const events = row.events.map(validateEvent);
  const ids = new Set<string>();
  for (const event of events) {
    if (ids.has(event.id) || !event.date.startsWith(`${year}-${String(month).padStart(2, '0')}-`))
      throw new Error('The calendar returned duplicate events or an event from another month.');
    ids.add(event.id);
  }
  return events.sort(
    (a, b) =>
      a.date.localeCompare(b.date) ||
      (a.startTime || '').localeCompare(b.startTime || '') ||
      a.title.localeCompare(b.title),
  );
}
