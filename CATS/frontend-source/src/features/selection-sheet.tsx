import { ListChecks, ExternalLink, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { SlidingNumber } from '@/components/motion-primitives/sliding-number';
import type { ApplicationRecord, WorkspaceIdentity } from '@/business/types';
import type { ExampleCourse } from '@/business/example-courses';
import { exampleHref } from '@/business/example-courses';
import { requestHref } from '@/business/snapshot';
import { animationNumber, decimalLabel, selectionTotals, statusLabel } from '@/business/format';

function Value({ value, reducedMotion }: { value: string | null; reducedMotion: boolean }) {
  const number = animationNumber(value);
  return (
    <span className="cw-number">
      <span className="sr-only">{decimalLabel(value)}</span>
      <span aria-hidden="true">
        {number == null || reducedMotion ? decimalLabel(value) : <SlidingNumber value={number} />}
      </span>
    </span>
  );
}

export function SelectionSheet({
  records,
  examples,
  identity,
  reducedMotion,
  removeRecord,
  removeExample,
  clear,
}: {
  records: ApplicationRecord[];
  examples: ExampleCourse[];
  identity: WorkspaceIdentity;
  reducedMotion: boolean;
  removeRecord(id: string): void;
  removeExample(id: string): void;
  clear(): void;
}) {
  const count = records.length + examples.length;
  const totals = selectionTotals(records);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="cw-secondary"
        >
          <ListChecks aria-hidden="true" />
          Comparison{' '}
          <span
            className="cw-selection-count"
            aria-hidden="true"
          >
            {reducedMotion ? count : <SlidingNumber value={count} />}
          </span>
          <span className="sr-only">{count} selected items</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        className="cw-sheet"
        side="right"
      >
        <SheetHeader>
          <SheetTitle>Selected for comparison</SheetTitle>
          <SheetDescription>
            This page only. Selecting an item does not apply, approve or save a course.
          </SheetDescription>
        </SheetHeader>
        {count === 0 ? (
          <div className="cw-empty">
            <ListChecks aria-hidden="true" />
            <h3>No items selected</h3>
            <p>Use a card’s Compare checkbox to build a read-only comparison.</p>
          </div>
        ) : (
          <>
            {records.length > 0 && (
              <section className="cw-selection-section">
                <h3>Existing requests</h3>
                <dl className="cw-selection-totals">
                  <div>
                    <dt>Requests</dt>
                    <dd>
                      <Value
                        value={String(totals.count)}
                        reducedMotion={reducedMotion}
                      />
                    </dd>
                  </div>
                  <div>
                    <dt>Recorded fees, S$</dt>
                    <dd>
                      <Value
                        value={totals.fee}
                        reducedMotion={reducedMotion}
                      />
                    </dd>
                  </div>
                  <div>
                    <dt>Recorded training days</dt>
                    <dd>
                      <Value
                        value={totals.days}
                        reducedMotion={reducedMotion}
                      />
                    </dd>
                  </div>
                </dl>
                {(totals.missingFee > 0 || totals.missingDays > 0) && (
                  <p className="cw-boundary">
                    Totals exclude {totals.missingFee} unrecorded fee{' '}
                    {totals.missingFee === 1 ? 'value' : 'values'} and {totals.missingDays}{' '}
                    unrecorded duration {totals.missingDays === 1 ? 'value' : 'values'}.
                  </p>
                )}
                <div className="cw-selection-list">
                  {records.map((record) => (
                    <article key={record.id}>
                      <div>
                        <strong>{record.title || 'Untitled request'}</strong>
                        <span
                          className="cw-status"
                          data-status={record.status}
                        >
                          {statusLabel(record.status)}
                        </span>
                        <a href={requestHref(identity, record)}>
                          Request #{record.id}
                          <ExternalLink aria-hidden="true" />
                        </a>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeRecord(record.id)}
                        aria-label={`Remove request ${record.id} from comparison`}
                      >
                        <X aria-hidden="true" />
                      </Button>
                    </article>
                  ))}
                </div>
              </section>
            )}
            {examples.length > 0 && (
              <section className="cw-selection-section">
                <h3>Example course notes</h3>
                <p className="cw-boundary">
                  Samples are separate from your real requests and are excluded from the totals
                  above.
                </p>
                <div className="cw-selection-list">
                  {examples.map((course) => (
                    <article key={course.id}>
                      <div>
                        <strong>{course.title}</strong>
                        <span>{course.provider}</span>
                        <a href={exampleHref(course)}>
                          Open original application form
                          <ExternalLink aria-hidden="true" />
                        </a>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeExample(course.id)}
                        aria-label={`Remove example ${course.title} from comparison`}
                      >
                        <X aria-hidden="true" />
                      </Button>
                    </article>
                  ))}
                </div>
              </section>
            )}
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="cw-secondary cw-clear-selection"
                >
                  Clear comparison
                </Button>
              </DialogTrigger>
              <DialogContent className="cw-dialog">
                <DialogHeader>
                  <DialogTitle>Clear this comparison?</DialogTitle>
                  <DialogDescription>
                    This removes the selection on this page. Your Java requests stay unchanged.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button
                      variant="outline"
                      className="cw-secondary"
                    >
                      Keep selection
                    </Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button
                      className="cw-primary"
                      onClick={clear}
                    >
                      Clear comparison
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
