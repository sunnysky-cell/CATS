import { isCalendarDate } from './dates';
import type { CalendarIdentity, CalendarPage, TrainingPeriod } from './types';

export function assertPageIdentity(root: HTMLElement, identity: CalendarIdentity): void {
  const account = document.querySelector<HTMLElement>(
    '.sidebar-identity[data-cats-role][data-cats-user-id]',
  );
  if (
    root.dataset.role !== identity.role ||
    root.dataset.userId !== identity.id ||
    account?.dataset.catsRole !== identity.role ||
    account.dataset.catsUserId !== identity.id
  )
    throw new Error('This calendar no longer matches the current account. Sign in again.');
}
export function readCalendarPage(root: HTMLElement): CalendarPage {
  const role = root.dataset.role;
  const id = root.dataset.userId || '';
  if (!['EMPLOYEE', 'MANAGER', 'ADMIN'].includes(role || '') || !/^\d+$/.test(id))
    throw new Error('The calendar could not verify this account.');
  const identity = { id, role } as CalendarIdentity;
  assertPageIdentity(root, identity);
  const manifest = document.querySelector<HTMLElement>('#cats-calendar-approved-data');
  if (
    !manifest ||
    ['schemaVersion', 'scope', 'year', 'month', 'role', 'userId'].some(
      (field) =>
        !Object.hasOwn(root.dataset, field) || root.dataset[field] !== manifest.dataset[field],
    ) ||
    root.dataset.schemaVersion !== '1' ||
    root.dataset.scope !== 'approved-organization'
  )
    throw new Error('The approved training calendar has an unexpected data scope.');
  const year = Number(root.dataset.year);
  const month = Number(root.dataset.month);
  if (
    !Number.isInteger(year) ||
    year < 1900 ||
    year > 2200 ||
    !Number.isInteger(month) ||
    month < 1 ||
    month > 12
  )
    throw new Error('The calendar month is invalid.');
  const courses = Array.from(
    manifest.querySelectorAll<HTMLElement>('[data-calendar-course]'),
    (row, index) => {
      const fields = ['title', 'provider', 'employee', 'category', 'start', 'end'] as const;
      const period: Record<string, string> = {};
      for (const field of fields) {
        if (!Object.hasOwn(row.dataset, field))
          throw new Error('An approved training period is missing required data.');
        period[field] = row.dataset[field] || '';
      }
      if (!isCalendarDate(period.start) || !isCalendarDate(period.end) || period.end < period.start)
        throw new Error('An approved training period has invalid dates.');
      // This source has no application ID: its row index is only a rendering key.
      return { ...period, key: `training-row-${index}` } as unknown as TrainingPeriod;
    },
  );
  return { identity, year, month, courses };
}
