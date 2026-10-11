import type { ApplicationRecord } from '@/business/types';
import { dataTools } from './data-tools';

export type Dataset = 'sample' | 'live';
export type Intent = 'pending' | 'demand' | 'export';
export type StatusChoice = 'all' | 'pending' | 'accepted' | 'rejected' | 'cancelled' | 'deleted';
export interface Filters {
  search: string;
  status: StatusChoice;
  category: string;
}
export const emptyFilters: Filters = { search: '', status: 'all', category: 'all' };
export const examples = [
  {
    intent: 'pending',
    prompt: 'Find awaiting review',
    description: 'Find requests that need a manager’s decision.',
  },
  {
    intent: 'demand',
    prompt: 'Compare course demand',
    description: 'Rank course groups by their request counts.',
  },
  {
    intent: 'export',
    prompt: 'Export current results',
    description: 'Download every request matching your filters.',
  },
] as const;
const statusGroups: Record<StatusChoice, string[]> = {
  all: [],
  pending: ['APPLIED', 'UPDATED'],
  accepted: ['APPROVED', 'COMPLETED'],
  rejected: ['REJECTED'],
  cancelled: ['CANCELLED'],
  deleted: ['DELETED'],
};

// Only these bounded workflows are recognized. This is a demonstration, not an LLM client.
export function recognizePrompt(prompt: string): Intent | null {
  const text = prompt.trim().toLowerCase();
  if (/\b(approve|reject|delete|cancel|submit|enroll)\b/.test(text)) return null;
  if (/\b(export|download|csv)\b/.test(text)) return 'export';
  if (/\b(awaiting|pending|review)\b/.test(text)) return 'pending';
  if (/\b(demand|compare|popular|rank)\b/.test(text)) return 'demand';
  return null;
}

export function workflowFilters(intent: Intent, current: Filters): Filters {
  return intent === 'pending'
    ? { ...current, status: 'pending' }
    : intent === 'demand'
      ? { ...current, status: 'all' }
      : current;
}

export function matchingRequests(records: ApplicationRecord[], filters: Filters) {
  return dataTools().filter(records, {
    search: filters.search,
    status: statusGroups[filters.status],
    category: filters.category === 'all' ? '' : filters.category,
  });
}

export function stopIfAborted(signal: AbortSignal) {
  if (signal.aborted) throw new DOMException('The workflow was stopped.', 'AbortError');
}

// Yield between actual operations so their progress and the Stop control remain usable.
export async function nextOperation(signal: AbortSignal) {
  await new Promise<void>((resolve) => setTimeout(resolve, 0));
  stopIfAborted(signal);
}
