import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { initials } from '@/business/format';
import type { ApplicationRecord } from '@/business/types';

export function StudentPreview({
  student,
  records,
  onClose,
  onReturnFocus,
}: {
  student: ApplicationRecord | null;
  records: ApplicationRecord[];
  onClose(): void;
  onReturnFocus(): void;
}) {
  const count = student?.applicantId
    ? records.filter((record) => record.applicantId === student.applicantId).length
    : null;
  return (
    <Dialog
      open={Boolean(student)}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent
        className="cw-dialog"
        onCloseAutoFocus={(event) => {
          event.preventDefault();
          onReturnFocus();
        }}
      >
        <DialogHeader>
          <DialogTitle>
            <span
              className="cw-avatar"
              aria-hidden="true"
            >
              {initials(student?.learner || '')}
            </span>
            {student?.learner || 'Name not recorded'}
          </DialogTitle>
          <DialogDescription>
            Assigned employee information from this request snapshot.
          </DialogDescription>
        </DialogHeader>
        <dl className="cw-detail-facts">
          <div>
            <dt>Employee ID</dt>
            <dd>{student?.applicantId || 'Not recorded'}</dd>
          </div>
          <div>
            <dt>Requests in this snapshot</dt>
            <dd>{count == null ? 'Cannot group without a employee ID' : count}</dd>
          </div>
        </dl>
      </DialogContent>
    </Dialog>
  );
}
