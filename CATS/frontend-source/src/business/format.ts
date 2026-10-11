import type { ApplicationRecord } from './types';
import { insightsData } from './snapshot';

export const statuses = {
  APPLIED: 'Awaiting review',
  UPDATED: 'Updated, awaiting review',
  APPROVED: 'Approved',
  COMPLETED: 'Completed',
  REJECTED: 'Rejected',
  CANCELLED: 'Cancelled',
  DELETED: 'Deleted',
} as const;

export function statusLabel(status: string): string {
  return statuses[status as keyof typeof statuses] || 'Status not recorded';
}

export function dateLabel(value: string | null): string {
  if (!value) return 'Not recorded';
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(value.slice(0, 10) + 'T00:00:00Z'));
}

export function decimalLabel(value: string | null): string {
  if (value == null) return 'Not recorded';
  const [integer, fraction] = value.split('.');
  const grouped = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return fraction == null ? grouped : `${grouped}.${fraction}`;
}

export function initials(name: string): string {
  const words = name.trim().split(/\s+/).filter(Boolean);
  return (
    words.length > 1 ? words[0][0] + words[words.length - 1][0] : words[0]?.slice(0, 2) || '?'
  ).toUpperCase();
}

export function selectionTotals(records: ApplicationRecord[]) {
  return {
    count: records.length,
    fee: insightsData().sumDecimals(records.map((record) => record.fee)),
    days: insightsData().sumDecimals(records.map((record) => record.days)),
    missingFee: records.filter((record) => record.fee == null).length,
    missingDays: records.filter((record) => record.days == null).length,
  };
}

// Sliding Number uses a Number; preserve exact server decimals if that conversion loses precision.
export function animationNumber(value: string | null): number | null {
  if (value == null) return null;
  const number = Number(value);
  if (
    !Number.isFinite(number) ||
    Math.abs(number) > Number.MAX_SAFE_INTEGER ||
    /e/i.test(String(number))
  )
    return null;
  const difference = insightsData().sumDecimals([value, String(-number)]);
  return difference != null && /^-?0(?:\.0+)?$/.test(difference) ? number : null;
}
