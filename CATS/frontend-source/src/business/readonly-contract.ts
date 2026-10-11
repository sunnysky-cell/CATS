import type { WorkspaceIdentity } from './types';

export const snapshotFields = [
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
] as const;

export interface SnapshotManifest {
  schemaVersion?: string;
  role?: string;
  identityId?: string;
  scope?: string;
}

export function validateResponse(
  response: { status: number; redirected: boolean; url: string },
  origin: string,
  route: string,
): void {
  const url = new URL(response.url, origin);
  if (
    response.status !== 200 ||
    response.redirected ||
    url.origin !== origin ||
    url.pathname !== route
  )
    throw new Error('The request snapshot could not be loaded. Your session may have expired.');
}

export function validateManifest(
  expected: WorkspaceIdentity,
  responseIdentity: { role?: string; id?: string },
  manifest: SnapshotManifest | null,
  rows: Record<string, unknown>[],
): Record<string, string>[] {
  if (responseIdentity.role !== expected.role || responseIdentity.id !== expected.id)
    throw new Error('Your session has changed or expired. Open the request list to sign in again.');
  const scope = expected.role === 'EMPLOYEE' ? 'current-year-course-start' : 'assigned-students';
  if (
    !manifest ||
    manifest.schemaVersion !== '1' ||
    manifest.role !== expected.role ||
    manifest.identityId !== expected.id ||
    manifest.scope !== scope
  )
    throw new Error(
      'The service returned an unexpected request snapshot. Open the original request list to check it.',
    );
  const ids = new Set<string>();
  for (const row of rows) {
    for (const field of snapshotFields) {
      if (!Object.hasOwn(row, field) || typeof row[field] !== 'string')
        throw new Error(
          'A request is missing a required snapshot field. Open the original request list to check it.',
        );
    }
    const id = row.id as string;
    if (!/^\d+$/.test(id) || ids.has(id))
      throw new Error('The application snapshot contains invalid or duplicate record IDs.');
    ids.add(id);
    if (expected.role === 'EMPLOYEE' && row.applicantId !== expected.id)
      throw new Error(
        'The returned requests do not belong to this account. Open the original request list.',
      );
  }
  // Long identifiers and decimal values remain the exact strings emitted by Java.
  return rows as Record<string, string>[];
}
