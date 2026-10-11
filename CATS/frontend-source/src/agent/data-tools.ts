import { insightsData, readIdentity } from '@/business/snapshot';
import type { ApplicationRecord, InsightsData, WorkspaceIdentity } from '@/business/types';

export interface CourseGroup {
  key: string;
  title: string;
  provider: string;
  category: string;
  count: number;
}

export interface RequestSummary {
  count: number;
  students: number;
  pending: number;
  accepted: number;
  fee: string | null;
  days: string | null;
  undated: number;
  courses: CourseGroup[];
  statuses: Array<{ status: string; count: number }>;
  months: Array<{ month: string; count: number }>;
}

interface AgentDataTools extends InsightsData {
  aggregate(records: ApplicationRecord[]): RequestSummary;
  toCsv(records: ApplicationRecord[]): string;
}

export function dataTools(): AgentDataTools {
  const tools = insightsData() as AgentDataTools;
  if (typeof tools.aggregate !== 'function' || typeof tools.toCsv !== 'function')
    throw new Error('The request analysis tools are unavailable. Reload this page.');
  return tools;
}

// Administrators may inspect the synthetic demonstration, never another role's live records.
export function agentIdentity(root: HTMLElement): WorkspaceIdentity | null {
  if (root.dataset.role !== 'ADMIN') return readIdentity(root);
  const account = document.querySelector<HTMLElement>('.sidebar-identity[data-cats-role]');
  if (
    account?.dataset.catsRole !== 'ADMIN' ||
    account.dataset.catsUserId !== root.dataset.userId ||
    !/^\d+$/.test(root.dataset.userId || '') ||
    root.dataset.source !== ''
  )
    throw new Error('The demonstration does not match the current account.');
  return null;
}

export function exportRequests(records: ApplicationRecord[], dataset: 'sample' | 'live') {
  const csv = dataTools().toCsv(records);
  const url = URL.createObjectURL(new Blob(['\uFEFF', csv], { type: 'text/csv;charset=utf-8' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = `cats-${dataset}-requests-${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
