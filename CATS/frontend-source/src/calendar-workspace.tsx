import {
  Component,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { createRoot } from 'react-dom/client';
import { MotionConfig, useReducedMotion } from 'motion/react';
import { Toaster, toast } from 'sonner';
import { ArrowLeft, ArrowRight, CalendarPlus, Info, RefreshCw, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { SlidingNumber } from '@/components/motion-primitives/sliding-number';
import { calendarApi } from '@/calendar/api';
import { readCalendarPage } from '@/calendar/model';
import { isoDate, monthHref, monthNames, shiftMonth, todayDate } from '@/calendar/dates';
import { EventEditor } from '@/calendar/event-editor';
import { MonthGrid } from '@/calendar/month-grid';
import { Agenda } from '@/calendar/agenda';
import type { CalendarFilter, CalendarPage, EventDraft, PersonalEvent } from '@/calendar/types';
import './styles.css';
import './calendar-workspace.css';

const countFormatter = new Intl.NumberFormat('en-US');

function fallback(visible: boolean) {
  document.querySelectorAll<HTMLElement>('[data-calendar-fallback]').forEach((element) => {
    element.hidden = !visible;
  });
}
function CalendarWorkspace({ root, page }: { root: HTMLElement; page: CalendarPage }) {
  const today = todayDate();
  const [selected, setSelected] = useState(
    today.startsWith(`${page.year}-${String(page.month).padStart(2, '0')}-`)
      ? today
      : isoDate(page.year, page.month, 1),
  );
  const [filter, setFilter] = useState<CalendarFilter>('all');
  const [search, setSearch] = useState('');
  const [events, setEvents] = useState<PersonalEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState('');
  const [editorOpen, setEditorOpen] = useState(false);
  const [editing, setEditing] = useState<PersonalEvent | null>(null);
  const editorTrigger = useRef<HTMLElement | null>(null);
  const requestVersion = useRef(0);
  const pending = useRef<AbortController | null>(null);
  const api = useMemo(() => calendarApi(root, page), [root, page]);
  const reducedMotion = Boolean(useReducedMotion());

  const reload = useCallback(async () => {
    const version = ++requestVersion.current;
    pending.current?.abort();
    const controller = new AbortController();
    pending.current = controller;
    setLoading(true);
    setError('');
    try {
      const rows = await api.load(controller.signal);
      if (version !== requestVersion.current || controller.signal.aborted) return;
      setEvents(rows);
      setLoaded(true);
    } catch (failure) {
      if (version !== requestVersion.current || controller.signal.aborted) return;
      setError(
        failure instanceof Error
          ? failure.message
          : 'Your calendar could not be loaded. Please retry.',
      );
    } finally {
      if (version === requestVersion.current && !controller.signal.aborted) setLoading(false);
    }
  }, [api]);
  useEffect(() => {
    void reload();
    return () => {
      requestVersion.current += 1;
      pending.current?.abort();
    };
  }, [reload]);
  useEffect(() => {
    root.dataset.workspaceState = loading ? 'loading' : error ? 'error' : 'ready';
    fallback(!loaded);
  }, [root, loading, error, loaded]);

  const query = search.trim().toLocaleLowerCase('en');
  const courses = page.courses.filter(
    (course) =>
      filter !== 'personal' &&
      [course.title, course.provider, course.employee, course.category]
        .join(' ')
        .toLocaleLowerCase('en')
        .includes(query),
  );
  const personal = events.filter(
    (event) =>
      filter !== 'training' &&
      `${event.title} ${event.details}`.toLocaleLowerCase('en').includes(query),
  );
  const previous = shiftMonth(page.year, page.month, -1);
  const next = shiftMonth(page.year, page.month, 1);
  const current = new Date();
  const ready = loaded && !loading && !error;

  function openEditor(event: PersonalEvent | null, trigger: HTMLElement) {
    editorTrigger.current = trigger;
    setEditing(event);
    setEditorOpen(true);
  }
  async function save(draft: EventDraft, id?: string) {
    const result = await api.save(draft, id);
    toast.success(id ? 'Personal event updated.' : 'Personal event saved.');
    const [year, month] = result.date.split('-').map(Number);
    if (year !== page.year || month !== page.month) {
      window.location.assign(monthHref(year, month));
      return;
    }
    setSelected(result.date);
    await reload();
  }
  async function remove(id: string) {
    await api.remove(id);
    toast.success('Personal event deleted.');
    await reload();
  }
  return (
    <MotionConfig reducedMotion={reducedMotion ? 'always' : 'user'}>
      <TooltipProvider>
        <div className="calendar-workspace">
          <header className="cal-header">
            <div>
              <p className="cal-eyebrow">Your calendar</p>
              <h2>
                {monthNames[page.month - 1]} {page.year}
              </h2>
            </div>
            <div className="cal-header-actions">
              <nav
                className="cal-month-nav"
                aria-label="Choose calendar month"
              >
                {previous.year >= 1900 ? (
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a
                      href={monthHref(previous.year, previous.month)}
                      aria-label={`Previous month, ${monthNames[previous.month - 1]} ${previous.year}`}
                    >
                      <ArrowLeft size={17} />
                    </a>
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    size="icon"
                    disabled
                    aria-label="Previous month"
                  >
                    <ArrowLeft size={17} />
                  </Button>
                )}
                <Button
                  variant="outline"
                  asChild
                >
                  <a href={monthHref(current.getFullYear(), current.getMonth() + 1)}>Today</a>
                </Button>
                {next.year <= 2200 ? (
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a
                      href={monthHref(next.year, next.month)}
                      aria-label={`Next month, ${monthNames[next.month - 1]} ${next.year}`}
                    >
                      <ArrowRight size={17} />
                    </a>
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    size="icon"
                    disabled
                    aria-label="Next month"
                  >
                    <ArrowRight size={17} />
                  </Button>
                )}
              </nav>
              <Button
                disabled={!ready}
                onClick={(e) => openEditor(null, e.currentTarget)}
              >
                <CalendarPlus
                  size={17}
                  aria-hidden="true"
                />
                Add event
              </Button>
            </div>
          </header>
          <div className="cal-controls">
            <Tabs
              value={filter}
              onValueChange={(value) => setFilter(value as CalendarFilter)}
            >
              <TabsList aria-label="Calendar event type">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="training">Training</TabsTrigger>
                <TabsTrigger value="personal">My events</TabsTrigger>
              </TabsList>
            </Tabs>
            <div className="cal-search">
              <Search
                size={16}
                aria-hidden="true"
              />
              <Input
                type="search"
                aria-label="Search calendar events"
                placeholder="Search this month"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  aria-label="About calendar visibility"
                >
                  <Info size={17} />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="cal-scope-note">
                Approved training is visible across the organization. Personal events are visible
                only to you.
              </TooltipContent>
            </Tooltip>
          </div>
          {error && (
            <div
              className="cal-load-error"
              role="alert"
            >
              <div>
                <strong>Calendar could not be refreshed.</strong>
                <p>{error}</p>
                {loaded && <p>The last loaded events remain below.</p>}
              </div>
              <Button
                variant="outline"
                onClick={() => void reload()}
              >
                <RefreshCw
                  size={15}
                  aria-hidden="true"
                />
                Retry
              </Button>
              <a href="/login">Sign in</a>
            </div>
          )}
          {loading && !loaded ? (
            <div
              className="cal-loading"
              aria-label="Loading your personal calendar"
              aria-busy="true"
            >
              <Skeleton className="cal-loading-title" />
              <Skeleton className="cal-loading-grid" />
            </div>
          ) : (
            loaded && (
              <>
                <div
                  className="cal-summary"
                  aria-live="polite"
                >
                  <div
                    className="cal-visual-count"
                    aria-hidden="true"
                  >
                    <SlidingNumber value={courses.length} />
                  </div>
                  <span className="sr-only">{countFormatter.format(courses.length)}</span> approved
                  training periods
                  <span className="cal-summary-divider">·</span>
                  <div
                    className="cal-visual-count"
                    aria-hidden="true"
                  >
                    <SlidingNumber value={personal.length} />
                  </div>
                  <span className="sr-only">{countFormatter.format(personal.length)}</span> personal
                  events
                  {loading && <span className="cal-refreshing">Refreshing…</span>}
                </div>
                <div
                  className={`cal-layout${loading ? ' is-refreshing' : ''}`}
                  aria-busy={loading}
                >
                  <MonthGrid
                    year={page.year}
                    month={page.month}
                    selected={selected}
                    today={today}
                    courses={courses}
                    events={personal}
                    onSelect={setSelected}
                  />
                  <Agenda
                    date={selected}
                    courses={courses}
                    events={personal}
                    canEdit={ready}
                    onEdit={(event, trigger) => {
                      if (ready) openEditor(event, trigger);
                    }}
                  />
                </div>
                <p className="cal-footer-note">
                  Training markers show approved course periods. Personal events do not change
                  course applications or approvals.
                </p>
              </>
            )
          )}
          <EventEditor
            open={editorOpen}
            date={selected}
            event={editing}
            trigger={editorTrigger.current}
            onClose={() => setEditorOpen(false)}
            onSave={save}
            onDelete={remove}
          />
        </div>
        <Toaster
          theme="light"
          position="bottom-right"
          closeButton
          richColors
        />
      </TooltipProvider>
    </MotionConfig>
  );
}
class CalendarBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch() {
    fallback(true);
  }
  render() {
    return this.state.failed ? (
      <p
        className="cal-load-error"
        role="alert"
      >
        The calendar workspace could not be displayed. Use the original month view below.
      </p>
    ) : (
      this.props.children
    );
  }
}
const root = document.querySelector<HTMLElement>('#cats-calendar-month[data-calendar-workspace]');
if (root) {
  root.classList.add('cats-course-workspace');
  try {
    const page = readCalendarPage(root);
    createRoot(root).render(
      <CalendarBoundary>
        <CalendarWorkspace
          root={root}
          page={page}
        />
      </CalendarBoundary>,
    );
  } catch (failure) {
    fallback(true);
    root.dataset.workspaceState = 'error';
    const message = document.createElement('p');
    message.className = 'cal-load-error';
    message.setAttribute('role', 'alert');
    message.textContent =
      failure instanceof Error ? failure.message : 'The calendar workspace could not be opened.';
    root.append(message);
  }
}
