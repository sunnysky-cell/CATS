import type { ApplicationRecord, InsightsData, RequestSnapshot, WorkspaceIdentity } from './types';
import { snapshotFields, validateManifest, validateResponse } from './readonly-contract';

export const sources = {
  EMPLOYEE: {
    route: '/employee/applications',
    marker: '#cats-student-data',
    row: '[data-dashboard-record]',
    identityField: 'userId',
    scope: 'current-year-course-start',
    detail: '/employee/applications/',
  },
  MANAGER: {
    route: '/manager/history',
    marker: '#cats-manager-data',
    row: '[data-insight-record]',
    identityField: 'managerId',
    scope: 'assigned-students',
    detail: '/manager/applications/',
  },
} as const;

export function readIdentity(root: HTMLElement): WorkspaceIdentity {
  const role = root.dataset.role;
  const id = root.dataset.userId || '';
  if ((role !== 'EMPLOYEE' && role !== 'MANAGER') || !/^\d+$/.test(id))
    throw new Error('This account cannot open the request workspace.');
  const identity: WorkspaceIdentity = { role, id };
  if (!accountMatches(document, identity) || root.dataset.source !== sources[role].route)
    throw new Error('The workspace does not match the current account.');
  return identity;
}

function accountMatches(page: Document, identity: WorkspaceIdentity): boolean {
  const account = page.querySelector<HTMLElement>(
    '.sidebar-identity[data-cats-role][data-cats-user-id]',
  );
  return account?.dataset.catsRole === identity.role && account.dataset.catsUserId === identity.id;
}

export function insightsData(): InsightsData {
  const data = window.CATS_INSIGHTS_DATA;
  if (!data || data.schemaVersion !== 1 || data.fields.length !== 12)
    throw new Error('The request data tools could not be loaded. Open the original request list.');
  return data;
}

// Read only the Java-scoped scalar manifest. Never serialize a User or Hibernate entity.
export function parseSnapshot(html: string, identity: WorkspaceIdentity): ApplicationRecord[] {
  const page = new DOMParser().parseFromString(html, 'text/html');
  const source = sources[identity.role];
  const data = insightsData();
  const responseAccount = page.querySelector<HTMLElement>(
    '.sidebar-identity[data-cats-role][data-cats-user-id]',
  );
  const manifest = page.querySelector<HTMLElement>(source.marker);
  const rows = Array.from(manifest?.querySelectorAll<HTMLElement>(source.row) || [], (row) => {
    const values: Record<string, string> = {};
    for (const field of snapshotFields)
      if (Object.hasOwn(row.dataset, field)) values[field] = row.dataset[field] || '';
    return values;
  });
  const validated = validateManifest(
    identity,
    { role: responseAccount?.dataset.catsRole, id: responseAccount?.dataset.catsUserId },
    manifest
      ? {
          schemaVersion: manifest.dataset.schemaVersion,
          role: manifest.dataset.role,
          identityId: manifest.dataset[source.identityField],
          scope: manifest.dataset.scope,
        }
      : null,
    rows,
  );
  const records = data.normalize(validated);
  return data.sort(records, { field: 'created', direction: 'desc' });
}

export async function loadSnapshot(
  identity: WorkspaceIdentity,
  signal: AbortSignal,
): Promise<RequestSnapshot> {
  const source = sources[identity.role];
  const response = await fetch(source.route, {
    method: 'GET',
    credentials: 'same-origin',
    cache: 'no-store',
    headers: { Accept: 'text/html' },
    signal,
  });
  validateResponse(response, window.location.origin, source.route);
  return {
    records: parseSnapshot(await response.text(), identity),
    loadedAt: new Date(),
    scope: source.scope,
  };
}

export function requestHref(identity: WorkspaceIdentity, record: ApplicationRecord): string {
  return sources[identity.role].detail + record.id;
}
