import { assertPageIdentity } from './model';
import { draftError, validateEvent, validateMonth, validateSession } from './contract';
import type { CalendarPage, EventDraft, PersonalEvent } from './types';

interface CalendarResponse {
  status: number;
  headers: Headers;
  body: string;
}
async function request(
  route: string,
  options: RequestInit,
  outerSignal?: AbortSignal,
): Promise<CalendarResponse> {
  const controller = new AbortController();
  const abort = () => controller.abort();
  if (outerSignal?.aborted) abort();
  outerSignal?.addEventListener('abort', abort, { once: true });
  const timer = window.setTimeout(abort, 15000);
  try {
    const response = await fetch(route, {
      ...options,
      credentials: 'same-origin',
      cache: 'no-store',
      redirect: 'error',
      signal: controller.signal,
    });
    const expected = new URL(route, window.location.origin);
    const actual = new URL(response.url);
    if (
      response.redirected ||
      actual.origin !== expected.origin ||
      actual.pathname !== expected.pathname ||
      actual.search !== expected.search
    )
      throw new Error('The calendar service returned an unexpected location.');
    const body = await response.text();
    if (body.length > 8 * 1024 * 1024)
      throw new Error('The calendar response is too large to display safely.');
    return { status: response.status, headers: response.headers, body };
  } catch (error) {
    if (controller.signal.aborted)
      throw new Error('The calendar request timed out or was interrupted. Please retry.');
    throw error;
  } finally {
    window.clearTimeout(timer);
    outerSignal?.removeEventListener('abort', abort);
  }
}
async function json(response: CalendarResponse, successStatus: number): Promise<unknown> {
  if (!response.headers.get('content-type')?.includes('application/json'))
    throw new Error('The calendar service did not return JSON. Your session may have expired.');
  const text = response.body;
  if (text.length > 8 * 1024 * 1024)
    throw new Error('The calendar response is too large to display safely.');
  let value: unknown;
  try {
    value = JSON.parse(text);
  } catch {
    throw new Error('The calendar service returned unreadable data.');
  }
  if (response.status !== successStatus) {
    if (response.status === 401)
      throw new Error('Your session expired. Sign in again to use your calendar.');
    if (response.status === 403)
      throw new Error('The security token expired. Retry to refresh your session.');
    if (response.status === 404)
      throw new Error('This event is no longer available. Reload the calendar.');
    if (
      response.status === 400 &&
      value &&
      typeof value === 'object' &&
      'message' in value &&
      typeof value.message === 'string'
    )
      throw new Error(value.message);
    throw new Error('The calendar service could not complete this request. Please retry.');
  }
  return value;
}
export function calendarApi(root: HTMLElement, page: CalendarPage) {
  const session = async (signal?: AbortSignal) => {
    assertPageIdentity(root, page.identity);
    const response = await request(
      '/api/calendar/session',
      { method: 'GET', headers: { Accept: 'application/json' } },
      signal,
    );
    const current = validateSession(await json(response, 200), page.identity);
    assertPageIdentity(root, page.identity);
    return current;
  };
  return {
    async load(signal?: AbortSignal): Promise<PersonalEvent[]> {
      await session(signal);
      const response = await request(
        `/api/calendar/events?year=${page.year}&month=${page.month}`,
        { method: 'GET', headers: { Accept: 'application/json' } },
        signal,
      );
      const events = validateMonth(await json(response, 200), page.identity, page.year, page.month);
      assertPageIdentity(root, page.identity);
      return events;
    },
    async save(draft: EventDraft, id?: string): Promise<PersonalEvent> {
      const error = draftError(draft);
      if (error) throw new Error(error);
      if (id && !/^\d+$/.test(id)) throw new Error('This event has an invalid identity.');
      // Refresh the actual login identity and CSRF token immediately before a write.
      const current = await session();
      const route = id ? `/api/calendar/events/${id}` : '/api/calendar/events';
      const response = await request(route, {
        method: id ? 'PUT' : 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          [current.csrf.headerName]: current.csrf.token,
        },
        body: JSON.stringify({
          title: draft.title.trim(),
          date: draft.date,
          allDay: draft.allDay,
          startTime: draft.startTime,
          endTime: draft.endTime,
          details: draft.details.trim(),
          color: draft.color,
        }),
      });
      const event = validateEvent(await json(response, id ? 200 : 201));
      if (id && event.id !== id)
        throw new Error('The saved event has an unexpected identity. Reload the calendar.');
      assertPageIdentity(root, page.identity);
      return event;
    },
    async remove(id: string): Promise<void> {
      if (!/^\d+$/.test(id)) throw new Error('This event has an invalid identity.');
      const current = await session();
      const response = await request(`/api/calendar/events/${id}`, {
        method: 'DELETE',
        headers: { Accept: 'application/json', [current.csrf.headerName]: current.csrf.token },
      });
      if (response.status !== 204) await json(response, 204);
      assertPageIdentity(root, page.identity);
    },
  };
}
