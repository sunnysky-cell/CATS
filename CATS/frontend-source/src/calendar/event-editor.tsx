import { useEffect, useId, useRef, useState, type FormEvent } from 'react';
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { draftError } from './contract';
import type { EventColor, EventDraft, PersonalEvent } from './types';

interface EditorProps {
  open: boolean;
  date: string;
  event: PersonalEvent | null;
  trigger: HTMLElement | null;
  onClose: () => void;
  onSave: (draft: EventDraft, id?: string) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
}
const blankDraft = (date: string): EventDraft => ({
  title: '',
  date,
  allDay: true,
  startTime: null,
  endTime: null,
  details: '',
  color: 'blue',
});

export function EventEditor({
  open,
  date,
  event,
  trigger,
  onClose,
  onSave,
  onDelete,
}: EditorProps) {
  const id = useId();
  const [draft, setDraft] = useState<EventDraft>(blankDraft(date));
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [confirmDelete, setConfirmDelete] = useState(false);
  const deleteButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    setDraft(
      event
        ? {
            title: event.title,
            date: event.date,
            allDay: event.allDay,
            startTime: event.startTime,
            endTime: event.endTime,
            details: event.details,
            color: event.color,
          }
        : blankDraft(date),
    );
    setError('');
    setConfirmDelete(false);
  }, [open, date, event]);

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (busy) return;
    const problem = draftError(draft);
    if (problem) {
      setError(problem);
      return;
    }
    setBusy(true);
    setError('');
    try {
      await onSave(draft, event?.id);
      onClose();
    } catch (failure) {
      setError(
        failure instanceof Error ? failure.message : 'This event could not be saved. Please retry.',
      );
    } finally {
      setBusy(false);
    }
  }
  async function remove() {
    if (!event || busy) return;
    setBusy(true);
    setError('');
    try {
      await onDelete(event.id);
      setConfirmDelete(false);
      onClose();
    } catch (failure) {
      setConfirmDelete(false);
      setError(
        failure instanceof Error
          ? failure.message
          : 'This event could not be deleted. Please retry.',
      );
    } finally {
      setBusy(false);
    }
  }
  const field = (name: keyof EventDraft) => `${id}-${name}`;

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        if (!value && !busy) onClose();
      }}
    >
      <DialogContent
        className="cal-editor"
        onEscapeKeyDown={(e) => {
          if (busy) e.preventDefault();
        }}
        onCloseAutoFocus={(e) => {
          e.preventDefault();
          trigger?.focus();
        }}
      >
        <DialogHeader>
          <DialogTitle>{event ? 'Edit personal event' : 'Add personal event'}</DialogTitle>
          <DialogDescription>
            Only your account can access these events. Approved training is managed separately.
          </DialogDescription>
        </DialogHeader>
        <form
          className="cal-event-form"
          onSubmit={submit}
        >
          <fieldset
            disabled={busy}
            className="cal-form-fields"
          >
            <div className="cal-field">
              <label htmlFor={field('title')}>Title</label>
              <Input
                id={field('title')}
                value={draft.title}
                maxLength={120}
                required
                autoComplete="off"
                onChange={(e) => setDraft({ ...draft, title: e.target.value })}
              />
            </div>
            <div className="cal-field">
              <label htmlFor={field('date')}>Date</label>
              <Input
                id={field('date')}
                type="date"
                min="1900-01-01"
                max="2200-12-31"
                value={draft.date}
                required
                onChange={(e) => setDraft({ ...draft, date: e.target.value })}
              />
            </div>
            <div className="cal-all-day">
              <Checkbox
                id={field('allDay')}
                checked={draft.allDay}
                onCheckedChange={(checked) =>
                  setDraft({
                    ...draft,
                    allDay: checked === true,
                    startTime: checked === true ? null : draft.startTime || '09:00',
                    endTime: checked === true ? null : draft.endTime,
                  })
                }
              />
              <label htmlFor={field('allDay')}>All day</label>
            </div>
            {!draft.allDay && (
              <div className="cal-time-fields">
                <div className="cal-field">
                  <label htmlFor={field('startTime')}>Start time</label>
                  <Input
                    id={field('startTime')}
                    type="time"
                    value={draft.startTime || ''}
                    required
                    onChange={(e) => setDraft({ ...draft, startTime: e.target.value || null })}
                  />
                </div>
                <div className="cal-field">
                  <label htmlFor={field('endTime')}>
                    End time <span>(optional)</span>
                  </label>
                  <Input
                    id={field('endTime')}
                    type="time"
                    value={draft.endTime || ''}
                    onChange={(e) => setDraft({ ...draft, endTime: e.target.value || null })}
                  />
                </div>
              </div>
            )}
            <div className="cal-field">
              <label htmlFor={field('details')}>
                Details <span>(optional)</span>
              </label>
              <textarea
                id={field('details')}
                className="cal-textarea"
                value={draft.details}
                rows={3}
                maxLength={2000}
                onChange={(e) => setDraft({ ...draft, details: e.target.value })}
              />
            </div>
            <div className="cal-field">
              <label htmlFor={field('color')}>Color</label>
              <Select
                value={draft.color}
                onValueChange={(color) => setDraft({ ...draft, color: color as EventColor })}
              >
                <SelectTrigger id={field('color')}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="blue">Blue</SelectItem>
                  <SelectItem value="teal">Teal</SelectItem>
                  <SelectItem value="indigo">Indigo</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </fieldset>
          {error && (
            <p
              className="cal-form-error"
              role="alert"
            >
              {error}
            </p>
          )}
          <DialogFooter className="cal-editor-actions">
            {event && (
              <Dialog
                open={confirmDelete}
                onOpenChange={(value) => {
                  if (!busy) setConfirmDelete(value);
                }}
              >
                <DialogTrigger asChild>
                  <Button
                    ref={deleteButton}
                    type="button"
                    variant="ghost"
                    disabled={busy}
                    className="cal-delete-button"
                  >
                    <Trash2
                      size={16}
                      aria-hidden="true"
                    />
                    Delete event
                  </Button>
                </DialogTrigger>
                <DialogContent
                  className="cal-confirm"
                  onEscapeKeyDown={(e) => {
                    if (busy) e.preventDefault();
                  }}
                >
                  <DialogHeader>
                    <DialogTitle>Delete this event?</DialogTitle>
                    <DialogDescription>
                      “{event.title}” will be removed from your personal calendar.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button
                      type="button"
                      variant="outline"
                      disabled={busy}
                      onClick={() => setConfirmDelete(false)}
                    >
                      Keep event
                    </Button>
                    <Button
                      type="button"
                      variant="destructive"
                      disabled={busy}
                      onClick={remove}
                    >
                      {busy ? 'Deleting…' : 'Delete event'}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            )}
            <Button
              type="button"
              variant="outline"
              disabled={busy}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={busy}
            >
              {busy ? 'Saving…' : 'Save event'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
