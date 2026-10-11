export const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export function isoDate(year: number, month: number, day: number): string {
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}
export function isCalendarDate(value: unknown): value is string {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const [year, month, day] = value.split('-').map(Number);
  if (year < 1900 || year > 2200 || month < 1 || month > 12 || day < 1) return false;
  const date = new Date(Date.UTC(year, month - 1, day));
  return (
    date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day
  );
}
export function utcDate(value: string): Date {
  if (!isCalendarDate(value)) throw new Error('The calendar returned an invalid date.');
  const [year, month, day] = value.split('-').map(Number);
  return new Date(Date.UTC(year, month - 1, day));
}
export function todayDate(): string {
  const now = new Date();
  return isoDate(now.getFullYear(), now.getMonth() + 1, now.getDate());
}
export function readableDate(value: string, includeWeekday = false): string {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    ...(includeWeekday ? { weekday: 'long' as const } : {}),
    timeZone: 'UTC',
  }).format(utcDate(value));
}
export function shiftMonth(
  year: number,
  month: number,
  offset: number,
): { year: number; month: number } {
  const date = new Date(Date.UTC(year, month - 1 + offset, 1));
  return { year: date.getUTCFullYear(), month: date.getUTCMonth() + 1 };
}
export function monthHref(year: number, month: number): string {
  return `/training-calendar?year=${year}&month=${month}`;
}
export function monthCells(
  year: number,
  month: number,
): { date: string; day: number; current: boolean }[] {
  const first = new Date(Date.UTC(year, month - 1, 1));
  const offset = (first.getUTCDay() + 6) % 7;
  const days = new Date(Date.UTC(year, month, 0)).getUTCDate();
  const count = Math.max(35, Math.ceil((offset + days) / 7) * 7);
  return Array.from({ length: count }, (_, index) => {
    const date = new Date(Date.UTC(year, month - 1, index - offset + 1));
    return {
      date: isoDate(date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate()),
      day: date.getUTCDate(),
      current: date.getUTCMonth() === month - 1,
    };
  });
}
