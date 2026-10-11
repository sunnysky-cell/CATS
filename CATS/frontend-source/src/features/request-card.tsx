import {
  Ban,
  BookOpen,
  CalendarDays,
  Check,
  Clock3,
  ExternalLink,
  FileQuestion,
  Trash2,
  UserRound,
  X,
} from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogTitle,
  MorphingDialogSubtitle,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogClose,
} from '@/components/motion-primitives/morphing-dialog';
import type { ApplicationRecord, WorkspaceIdentity } from '@/business/types';
import { dateLabel, decimalLabel, initials, statusLabel } from '@/business/format';
import { requestHref } from '@/business/snapshot';

interface RequestCardProps {
  record: ApplicationRecord;
  identity: WorkspaceIdentity;
  selected: boolean;
  reducedMotion: boolean;
  studentCount: number;
  onToggle(id: string): void;
  onStudent(record: ApplicationRecord): void;
}

export function RequestCard({
  record,
  identity,
  selected,
  reducedMotion,
  studentCount,
  onToggle,
  onStudent,
}: RequestCardProps) {
  const StatusIcon =
    record.status === 'REJECTED'
      ? X
      : record.status === 'CANCELLED'
        ? Ban
        : record.status === 'DELETED'
          ? Trash2
          : ['APPROVED', 'COMPLETED'].includes(record.status)
            ? Check
            : ['APPLIED', 'UPDATED'].includes(record.status)
              ? Clock3
              : FileQuestion;
  return (
    <MorphingDialog
      transition={
        reducedMotion ? { duration: 0 } : { type: 'spring', bounce: 0.08, duration: 0.35 }
      }
    >
      <Card
        className={`cw-request-card ${selected ? 'cw-selected' : ''}`}
        data-record-id={record.id}
        data-request-status={record.status}
      >
        <div className="cw-card-band">
          <BookOpen aria-hidden="true" />
          <span>{record.category || 'Category not set'}</span>
          <span className="cw-reference">#{record.id}</span>
        </div>
        <CardContent className="cw-card-main">
          <MorphingDialogTrigger
            className="cw-card-open"
            aria-label={`Preview request ${record.id}: ${record.title || 'Untitled request'}`}
          >
            <MorphingDialogTitle className="cw-card-title">
              {record.title || 'Untitled request'}
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="cw-provider">
              {record.provider || 'Provider not recorded'}
            </MorphingDialogSubtitle>
          </MorphingDialogTrigger>
          {identity.role === 'MANAGER' && (
            <HoverCard>
              <HoverCardTrigger asChild>
                <button
                  type="button"
                  className="cw-student"
                  onClick={() => onStudent(record)}
                >
                  <span
                    className="cw-avatar"
                    aria-hidden="true"
                  >
                    {initials(record.learner)}
                  </span>
                  {record.learner || 'Name not recorded'}
                </button>
              </HoverCardTrigger>
              <HoverCardContent className="cw-hover">
                <strong>{record.learner || 'Name not recorded'}</strong>
                <p>Employee ID {record.applicantId || 'not recorded'}</p>
                <p>
                  {studentCount} {studentCount === 1 ? 'request' : 'requests'} in this snapshot
                </p>
                <span>Click to view this information.</span>
              </HoverCardContent>
            </HoverCard>
          )}
          <dl className="cw-card-facts">
            <div>
              <dt>
                <CalendarDays aria-hidden="true" />
                Course starts
              </dt>
              <dd>{dateLabel(record.start)}</dd>
            </div>
            <div>
              <dt>Course fee</dt>
              <dd>{record.fee == null ? 'Not recorded' : `S$${decimalLabel(record.fee)}`}</dd>
            </div>
            <div>
              <dt>Training days</dt>
              <dd>{decimalLabel(record.days)}</dd>
            </div>
          </dl>
        </CardContent>
        <CardFooter className="cw-card-footer">
          <span
            className="cw-status"
            data-status={record.status}
          >
            <StatusIcon aria-hidden="true" />
            {statusLabel(record.status)}
          </span>
          <div className="cw-compare">
            <Tooltip>
              <TooltipTrigger asChild>
                <Checkbox
                  id={`compare-${record.id}`}
                  checked={selected}
                  onCheckedChange={() => onToggle(record.id)}
                  aria-label={`Select request ${record.id} for comparison`}
                />
              </TooltipTrigger>
              <TooltipContent>
                Compare existing requests. No application is submitted.
              </TooltipContent>
            </Tooltip>
            <label htmlFor={`compare-${record.id}`}>Compare</label>
          </div>
        </CardFooter>
      </Card>
      <MorphingDialogContainer>
        <MorphingDialogContent className="cw-detail">
          <div className="cw-detail-heading">
            <span className="cw-reference">REQUEST #{record.id}</span>
            <MorphingDialogClose className="cw-dialog-close" />
          </div>
          <MorphingDialogTitle className="cw-detail-title">
            {record.title || 'Untitled request'}
          </MorphingDialogTitle>
          <MorphingDialogSubtitle className="cw-provider">
            {record.provider || 'Provider not recorded'}
          </MorphingDialogSubtitle>
          <span
            className="cw-status"
            data-status={record.status}
          >
            {statusLabel(record.status)}
          </span>
          <dl className="cw-detail-facts">
            <div>
              <dt>Category</dt>
              <dd>{record.category || 'Not recorded'}</dd>
            </div>
            {identity.role === 'MANAGER' && (
              <div>
                <dt>
                  <UserRound aria-hidden="true" />
                  Employee
                </dt>
                <dd>
                  {record.learner || 'Name not recorded'}{' '}
                  {record.applicantId ? `(ID ${record.applicantId})` : ''}
                </dd>
              </div>
            )}
            <div>
              <dt>Course starts</dt>
              <dd>{dateLabel(record.start)}</dd>
            </div>
            <div>
              <dt>Course ends</dt>
              <dd>{dateLabel(record.end)}</dd>
            </div>
            <div>
              <dt>Request created</dt>
              <dd>{dateLabel(record.created)}</dd>
            </div>
            <div>
              <dt>Course fee</dt>
              <dd>{record.fee == null ? 'Not recorded' : `S$${decimalLabel(record.fee)}`}</dd>
            </div>
            <div>
              <dt>Training days</dt>
              <dd>{decimalLabel(record.days)}</dd>
            </div>
          </dl>
          <p className="cw-boundary">
            A read-only preview of the current Java request. Review decisions and changes are made
            on its original page.
          </p>
          <Button
            asChild
            className="cw-primary"
          >
            <a href={requestHref(identity, record)}>
              Open original request
              <ExternalLink aria-hidden="true" />
            </a>
          </Button>
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}
