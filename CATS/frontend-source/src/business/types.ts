export type WorkspaceRole = 'EMPLOYEE' | 'MANAGER';
export type RequestStatus =
  | 'APPLIED'
  | 'UPDATED'
  | 'APPROVED'
  | 'COMPLETED'
  | 'REJECTED'
  | 'CANCELLED'
  | 'DELETED';

export interface ApplicationRecord {
  id: string;
  title: string;
  provider: string;
  category: string;
  applicantId: string | null;
  learner: string;
  start: string | null;
  end: string | null;
  created: string | null;
  status: string;
  fee: string | null;
  days: string | null;
}

export interface WorkspaceIdentity {
  role: WorkspaceRole;
  id: string;
}

export interface RequestSnapshot {
  records: ApplicationRecord[];
  loadedAt: Date;
  scope: string;
}

export interface InsightsData {
  schemaVersion: number;
  fields: string[];
  normalize(records: Record<string, string>[]): ApplicationRecord[];
  sort(
    records: ApplicationRecord[],
    options: { field: string; direction: string },
  ): ApplicationRecord[];
  filter(
    records: ApplicationRecord[],
    options: { search?: string; status?: string[]; category?: string },
  ): ApplicationRecord[];
  sumDecimals(values: Array<string | null>): string | null;
}

declare global {
  interface Window {
    CATS_INSIGHTS_DATA?: InsightsData;
    CATS_COURSE_ART?: {
      resolve(course: { subject: string; category: string; title: string }): { svg: string };
    };
  }
}
