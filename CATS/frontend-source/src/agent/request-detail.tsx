import { ArrowUpRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { dateLabel, decimalLabel, statusLabel } from '@/business/format';
import { requestHref } from '@/business/snapshot';
import type { ApplicationRecord, WorkspaceIdentity } from '@/business/types';
import type { Dataset } from './workflows';

export function RequestDetail({
  record,
  dataset,
  identity,
  onClose,
  onReturnFocus,
}: {
  record: ApplicationRecord | null;
  dataset: Dataset;
  identity: WorkspaceIdentity | null;
  onClose(): void;
  onReturnFocus(): void;
}) {
  return (
    <Dialog
      open={Boolean(record)}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent
        className="ad-detail"
        onCloseAutoFocus={(event) => {
          event.preventDefault();
          onReturnFocus();
        }}
      >
        <DialogHeader>
          <DialogTitle>{record?.title || 'Request details'}</DialogTitle>
          <DialogDescription>
            {dataset === 'sample'
              ? 'Synthetic example request. It is not an application in CATS.'
              : 'Read-only details from the verified Java snapshot.'}
          </DialogDescription>
        </DialogHeader>
        {record && (
          <>
            <dl className="ad-detail-fields">
              {[
                ['Request ID', record.id],
                ['Employee', record.learner || 'Not recorded'],
                ['Provider', record.provider || 'Not recorded'],
                ['Category', record.category || 'Not recorded'],
                ['Status', statusLabel(record.status)],
                ['Course start', dateLabel(record.start)],
                ['Course end', dateLabel(record.end)],
                ['Created request', dateLabel(record.created)],
                ['Course fee', decimalLabel(record.fee)],
                ['Training days', decimalLabel(record.days)],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>
                    {label === 'Status' ? (
                      <span
                        className="ad-status"
                        data-request-status={record.status}
                      >
                        {value}
                      </span>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            {dataset === 'live' && identity && (
              <Button
                asChild
                className="ad-primary"
              >
                <a href={requestHref(identity, record)}>
                  Open original request
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
