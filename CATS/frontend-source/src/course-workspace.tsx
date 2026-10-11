import { Component, useEffect, useRef, useState, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import { MotionConfig, useReducedMotion } from 'motion/react';
import { Toaster, toast } from 'sonner';
import { Plus, UserRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { TooltipProvider } from '@/components/ui/tooltip';
import { RequestList } from '@/features/request-list';
import { ExampleList } from '@/features/example-list';
import { StudentPreview } from '@/features/student-preview';
import { SelectionSheet } from '@/features/selection-sheet';
import { useSnapshot } from '@/features/use-snapshot';
import { readIdentity } from '@/business/snapshot';
import { exampleCourses } from '@/business/example-courses';
import type { ApplicationRecord, WorkspaceIdentity } from '@/business/types';
import './styles.css';
import './course-workspace.css';

function setFallback(visible: boolean) {
  document.querySelectorAll<HTMLElement>('[data-course-workspace-fallback]').forEach((fallback) => {
    fallback.hidden = !visible;
  });
}

function Workspace({ root, identity }: { root: HTMLElement; identity: WorkspaceIdentity }) {
  const { snapshot, loading, error, retry } = useSnapshot(identity);
  const reducedMotion = Boolean(useReducedMotion());
  const [tab, setTab] = useState(() =>
    identity.role === 'EMPLOYEE' && window.location.hash === '#course-catalog'
      ? 'examples'
      : 'requests',
  );
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [selectedExamples, setSelectedExamples] = useState<Set<string>>(new Set());
  const [student, setStudent] = useState<ApplicationRecord | null>(null);
  const studentTrigger = useRef<HTMLElement | null>(null);
  const records = snapshot?.records || [];
  const compared = records.filter((record) => selectedIds.has(record.id));
  const comparedExamples = exampleCourses.filter((course) => selectedExamples.has(course.id));
  useEffect(() => {
    function followCourseLink() {
      if (identity.role === 'EMPLOYEE' && window.location.hash === '#course-catalog')
        setTab('examples');
    }
    window.addEventListener('hashchange', followCourseLink);
    return () => window.removeEventListener('hashchange', followCourseLink);
  }, [identity.role]);
  useEffect(() => {
    root.dataset.workspaceState = loading ? 'loading' : error ? 'error' : 'ready';
    setFallback(!snapshot || Boolean(error) || loading);
    if (snapshot) root.dataset.snapshotTime = snapshot.loadedAt.toISOString();
  }, [root, snapshot, error, loading]);

  function toggleRequest(id: string) {
    const removing = selectedIds.has(id);
    setSelectedIds((previous) => {
      const next = new Set(previous);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
    toast.info(
      removing
        ? 'Request removed from this comparison.'
        : 'Request added to this comparison. No application was submitted.',
      { id: 'cw-selection' },
    );
  }
  function toggleExample(id: string) {
    const removing = selectedExamples.has(id);
    setSelectedExamples((previous) => {
      const next = new Set(previous);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
    toast.info(
      removing
        ? 'Example removed from this comparison.'
        : 'Example added to this comparison. This is a sample course note.',
      { id: 'cw-selection' },
    );
  }
  function clear() {
    setSelectedIds(new Set());
    setSelectedExamples(new Set());
    toast.info('This comparison has been cleared.');
  }
  function previewStudent(record: ApplicationRecord) {
    studentTrigger.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setStudent(record);
  }
  return (
    <MotionConfig reducedMotion="user">
      <TooltipProvider delayDuration={300}>
        <div className="course-workspace">
          <header className="cw-heading">
            <div>
              <h2>
                {identity.role === 'MANAGER'
                  ? 'Assigned employees’ requests'
                  : 'Your course workspace'}
              </h2>
              <p>
                {identity.role === 'MANAGER'
                  ? 'All requests from assigned employees. Review decisions stay on their original pages.'
                  : 'Real requests for courses starting in the current server year, plus clearly marked example notes.'}
              </p>
            </div>
            <div className="cw-heading-actions">
              <Button
                asChild
                className="cw-primary"
              >
                <a
                  href={
                    identity.role === 'MANAGER' ? '/manager/pending' : '/employee/applications/new'
                  }
                >
                  {identity.role === 'MANAGER' ? (
                    <UserRound aria-hidden="true" />
                  ) : (
                    <Plus aria-hidden="true" />
                  )}
                  {identity.role === 'MANAGER' ? 'Review requests' : 'New application'}
                </a>
              </Button>
              <SelectionSheet
                records={compared}
                examples={comparedExamples}
                identity={identity}
                reducedMotion={reducedMotion}
                removeRecord={toggleRequest}
                removeExample={toggleExample}
                clear={clear}
              />
            </div>
          </header>
          <Tabs
            value={tab}
            onValueChange={setTab}
            className="cw-tabs"
          >
            <TabsList className="cw-tab-list">
              <TabsTrigger value="requests">
                {identity.role === 'MANAGER' ? 'Employee requests' : 'My requests'}
              </TabsTrigger>
              {identity.role === 'EMPLOYEE' && (
                <TabsTrigger value="examples">Example courses</TabsTrigger>
              )}
            </TabsList>
            <TabsContent
              value="requests"
              className="cw-tab-content"
            >
              <RequestList
                identity={identity}
                snapshot={snapshot}
                loading={loading}
                error={error}
                reducedMotion={reducedMotion}
                selectedIds={selectedIds}
                onToggle={toggleRequest}
                onStudent={previewStudent}
                retry={retry}
              />
            </TabsContent>
            {identity.role === 'EMPLOYEE' && (
              <TabsContent
                value="examples"
                className="cw-tab-content"
              >
                <ExampleList
                  selected={selectedExamples}
                  reducedMotion={reducedMotion}
                  onToggle={toggleExample}
                />
              </TabsContent>
            )}
          </Tabs>
          <StudentPreview
            student={student}
            records={records}
            onClose={() => setStudent(null)}
            onReturnFocus={() => studentTrigger.current?.focus({ preventScroll: true })}
          />
          <Toaster
            theme="light"
            position="bottom-right"
            closeButton
            toastOptions={{ className: 'cw-toast' }}
          />
        </div>
      </TooltipProvider>
    </MotionConfig>
  );
}

class WorkspaceBoundary extends Component<
  { children: ReactNode; root: HTMLElement },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch() {
    this.props.root.dataset.workspaceState = 'error';
    setFallback(true);
  }
  render() {
    return this.state.failed ? (
      <p
        className="cw-error"
        role="alert"
      >
        The interactive workspace could not be displayed. Use the original request list below.
      </p>
    ) : (
      this.props.children
    );
  }
}

// React enhances the existing Java /home page. Successful verified data alone hides its fallback.
document.querySelectorAll<HTMLElement>('[data-course-workspace]').forEach((root) => {
  root.classList.add('cats-course-workspace');
  try {
    const identity = readIdentity(root);
    createRoot(root).render(
      <WorkspaceBoundary root={root}>
        <Workspace
          root={root}
          identity={identity}
        />
      </WorkspaceBoundary>,
    );
  } catch {
    root.dataset.workspaceState = 'error';
    root.textContent =
      'The interactive workspace could not be opened. Use the original request list below.';
  }
});
