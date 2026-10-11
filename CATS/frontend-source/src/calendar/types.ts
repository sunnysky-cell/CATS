export type CalendarRole = 'EMPLOYEE' | 'MANAGER' | 'ADMIN';
export type EventColor = 'blue' | 'teal' | 'indigo';
export type CalendarFilter = 'all' | 'training' | 'personal';

export interface CalendarIdentity {
  id: string;
  role: CalendarRole;
}
export interface CalendarSession {
  schemaVersion: 1;
  ownerId: string;
  role: CalendarRole;
  csrf: { headerName: 'X-CSRF-TOKEN'; parameterName: '_csrf'; token: string };
}
export interface EventDraft {
  title: string;
  date: string;
  allDay: boolean;
  startTime: string | null;
  endTime: string | null;
  details: string;
  color: EventColor;
}
export interface PersonalEvent extends EventDraft {
  id: string;
  createdAt: string;
  updatedAt: string;
}
export interface TrainingPeriod {
  key: string;
  title: string;
  provider: string;
  employee: string;
  category: string;
  start: string;
  end: string;
}
export interface CalendarPage {
  identity: CalendarIdentity;
  year: number;
  month: number;
  courses: TrainingPeriod[];
}
