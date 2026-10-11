import { useEffect, useMemo, useRef, useState } from 'react';
import { toast } from 'sonner';
import { ArrowLeft, ArrowRight, BookOpen, ExternalLink, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { RequestCard } from './request-card';
import { WorkspaceFilters, statusGroups, type StatusFilter } from './workspace-filters';
import { insightsData, sources } from '@/business/snapshot';
import type { ApplicationRecord, RequestSnapshot, WorkspaceIdentity } from '@/business/types';

const PAGE_SIZE = 9;

export function RequestList({
  identity,
  snapshot,
  loading,
  error,
  reducedMotion,
  selectedIds,
  onToggle,
  onStudent,
  retry,
}: {
  identity: WorkspaceIdentity;
  snapshot: RequestSnapshot | null;
  loading: boolean;
  error: string | null;
  reducedMotion: boolean;
  selectedIds: Set<string>;
  onToggle(id: string): void;
  onStudent(record: ApplicationRecord): void;
  retry(): void;
}) {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState<StatusFilter>('all');
  const [category, setCategory] = useState('all');
  const [page, setPage] = useState(1);
  const filterSnapshot = useRef<Date | null>(null);
  const records = snapshot?.records || [];
  const categories = useMemo(
    () =>
      [...new Set(records.map((record) => record.category).filter(Boolean))].sort((a, b) =>
        a.localeCompare(b, 'en'),
      ),
    [records],
  );
  const matching = useMemo(
    () =>
      snapshot
        ? insightsData().filter(records, {
            search,
            status: statusGroups[status],
            category: category === 'all' ? '' : category,
          })
        : [],
    [snapshot, search, status, category],
  );
  const studentCounts = useMemo(() => {
    const counts = new Map<string, number>();
    records.forEach((record) => {
      if (record.applicantId)
        counts.set(record.applicantId, (counts.get(record.applicantId) || 0) + 1);
    });
    return counts;
  }, [records]);
  const pageCount = Math.max(1, Math.ceil(matching.length / PAGE_SIZE));
  const visiblePage = Math.min(page, pageCount);
  const visible = matching.slice((visiblePage - 1) * PAGE_SIZE, visiblePage * PAGE_SIZE);
  const pending = records.filter((record) => ['APPLIED', 'UPDATED'].includes(record.status)).length;
  useEffect(() => {
    setPage(1);
  }, [search, status, category]);
  useEffect(() => {
    if (!snapshot) return;
    if (filterSnapshot.current !== snapshot.loadedAt) {
      filterSnapshot.current = snapshot.loadedAt;
      return;
    }
    const timer = window.setTimeout(
      () =>
        toast.info(
          `${matching.length} ${matching.length === 1 ? 'request matches' : 'requests match'} these filters.`,
          { id: 'cw-filter-result' },
        ),
      350,
    );
    return () => window.clearTimeout(timer);
  }, [snapshot, search, status, category, matching.length]);
  function reset() {
    setSearch('');
    setStatus('all');
    setCategory('all');
    toast.info('Request filters reset.', { id: 'cw-filter-result' });
  }
  const toggleRequest = onToggle;
  const setStudent = onStudent;
  return (
    <>
      {loading ? (
        <div
          className="cw-loading"
          aria-label="Loading request snapshot"
          role="status"
        >
          <p>Loading your current requests…</p>
          <div className="cw-card-grid">
            {[0, 1, 2].map((id) => (
              <div
                className="cw-skeleton-card"
                key={id}
              >
                <Skeleton className="cw-skeleton-band" />
                <Skeleton className="cw-skeleton-title" />
                <Skeleton className="cw-skeleton-line" />
                <Skeleton className="cw-skeleton-line" />
              </div>
            ))}
          </div>
        </div>
      ) : error ? (
        <div
          className="cw-error"
          role="alert"
        >
          <h3>Requests could not be loaded</h3>
          <p>{error}</p>
          <div className="cw-error-actions">
            <Button
              className="cw-primary"
              onClick={retry}
            >
              <RefreshCw aria-hidden="true" />
              Retry
            </Button>
            <Button
              asChild
              variant="outline"
              className="cw-secondary"
            >
              <a href={sources[identity.role].route}>
                Open original request list
                <ExternalLink aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      ) : (
        <>
          <div className="cw-snapshot-line">
            <span>
              {records.length} {records.length === 1 ? 'loaded request' : 'loaded requests'} ·{' '}
              {pending} awaiting review
            </span>
            <span>
              Snapshot{' '}
              {snapshot?.loadedAt.toLocaleTimeString('en-GB', {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={retry}
              aria-label="Refresh request snapshot"
            >
              <RefreshCw aria-hidden="true" />
              Refresh
            </Button>
          </div>
          <WorkspaceFilters
            search={search}
            status={status}
            category={category}
            categories={categories}
            reducedMotion={reducedMotion}
            onSearch={setSearch}
            onStatus={setStatus}
            onCategory={setCategory}
            onReset={reset}
          />
          <div
            className="cw-results-line"
            role="status"
            aria-live="polite"
          >
            <span>
              {matching.length} matching {matching.length === 1 ? 'request' : 'requests'}
            </span>
            <a href={sources[identity.role].route}>
              Open original list
              <ExternalLink aria-hidden="true" />
            </a>
          </div>
          {matching.length ? (
            <>
              <div className="cw-card-grid">
                {visible.map((record) => (
                  <RequestCard
                    key={record.id}
                    record={record}
                    identity={identity}
                    selected={selectedIds.has(record.id)}
                    reducedMotion={reducedMotion}
                    studentCount={
                      record.applicantId ? studentCounts.get(record.applicantId) || 0 : 0
                    }
                    onToggle={toggleRequest}
                    onStudent={setStudent}
                  />
                ))}
              </div>
              <div className="cw-pagination">
                <p>
                  Showing {(visiblePage - 1) * PAGE_SIZE + 1}–
                  {Math.min(visiblePage * PAGE_SIZE, matching.length)} of {matching.length}. Paging
                  this loaded snapshot.
                </p>
                <div>
                  <Button
                    variant="outline"
                    className="cw-secondary"
                    disabled={visiblePage === 1}
                    onClick={() => setPage(visiblePage - 1)}
                    aria-label="Previous request page"
                  >
                    <ArrowLeft aria-hidden="true" />
                  </Button>
                  <span>
                    Page {visiblePage} of {pageCount}
                  </span>
                  <Button
                    variant="outline"
                    className="cw-secondary"
                    disabled={visiblePage === pageCount}
                    onClick={() => setPage(visiblePage + 1)}
                    aria-label="Next request page"
                  >
                    <ArrowRight aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="cw-empty">
              <BookOpen aria-hidden="true" />
              <h3>{records.length ? 'No matching requests' : 'No requests in this snapshot'}</h3>
              <p>
                {records.length
                  ? 'Try another search or reset your filters.'
                  : identity.role === 'MANAGER'
                    ? 'No application records were returned for your assigned employees.'
                    : 'No course requests were returned for courses starting in the current server year.'}
              </p>
              {records.length > 0 && (
                <Button
                  variant="outline"
                  className="cw-secondary"
                  onClick={reset}
                >
                  Reset filters
                </Button>
              )}
            </div>
          )}
        </>
      )}
    </>
  );
}
