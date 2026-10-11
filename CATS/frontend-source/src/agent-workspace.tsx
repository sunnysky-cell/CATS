import { Component, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import { MotionConfig, useReducedMotion } from 'motion/react';
import { Toaster, toast } from 'sonner';
import {
  ArrowUpRight,
  BarChart3,
  Download,
  Play,
  Search,
  Settings2,
  ShieldCheck,
  Square,
  WandSparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';
import { SlidingNumber } from '@/components/motion-primitives/sliding-number';
import { decimalLabel } from '@/business/format';
import { sources } from '@/business/snapshot';
import type { ApplicationRecord, WorkspaceIdentity } from '@/business/types';
import { agentIdentity, dataTools, exportRequests } from '@/agent/data-tools';
import {
  examples,
  emptyFilters,
  matchingRequests,
  type Dataset,
  type Filters,
} from '@/agent/workflows';
import { useWorkflow } from '@/agent/use-workflow';
import type { SampleSize } from '@/agent/sample-data';
import { ToolSteps } from '@/agent/tool-steps';
import { ResultFilters } from '@/agent/result-filters';
import { DemandChart } from '@/agent/demand-chart';
import { ResultTable } from '@/agent/result-table';
import { RequestDetail } from '@/agent/request-detail';
import './styles.css';
import './agent-workspace.css';

function DemoSettings() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <Settings2 aria-hidden="true" />
          Demo settings
        </Button>
      </DialogTrigger>
      <DialogContent className="ad-settings">
        <DialogHeader>
          <DialogTitle>About these workflows</DialogTitle>
          <DialogDescription>Demo workflows, not a connected model.</DialogDescription>
        </DialogHeader>
        <p>
          These prompts select one of three predefined read-only workflows: find awaiting-review
          requests, compare course demand, or export the current results. Use the result filters to
          specify a search, status or category.
        </p>
        <p>
          The example dataset offers 5,000, 20,000 or 50,000 fixed synthetic requests. Live mode
          fetches your permitted Java request list and verifies its account, role and scope before
          using it.
        </p>
        <p>
          Queries, calculations and downloads run in this page. No approval, rejection or
          application is submitted. A manager makes decisions on the original review page.
        </p>
        <p>
          The separate Agent access configuration can connect an MCP host to the existing read-only
          query, analysis, detail and export tools.
        </p>
      </DialogContent>
    </Dialog>
  );
}

function AgentDesk({ root, identity }: { root: HTMLElement; identity: WorkspaceIdentity | null }) {
  const [dataset, setDataset] = useState<Dataset>('sample');
  const [sampleSize, setSampleSize] = useState<SampleSize>(5000);
  const [prompt, setPrompt] = useState('Find awaiting review');
  const [filters, setFilters] = useState<Filters>(emptyFilters);
  const [page, setPage] = useState(1);
  const [detail, setDetail] = useState<ApplicationRecord | null>(null);
  const promptInput = useRef<HTMLTextAreaElement>(null);
  const detailTrigger = useRef<HTMLElement | null>(null);
  const reducedMotion = Boolean(useReducedMotion());
  const workflow = useWorkflow(identity, dataset, sampleSize);
  const records = workflow.records;
  const matching = useMemo(
    () => (records ? matchingRequests(records, filters) : []),
    [records, filters],
  );
  const summary = useMemo(
    () => (records ? dataTools().aggregate(matching) : null),
    [records, matching],
  );
  const categories = useMemo(
    () => [...new Set(records?.map((record) => record.category).filter(Boolean) || [])].sort(),
    [records],
  );
  const sourceLink = identity ? sources[identity.role].route : '/admin/home';
  const liveLabel =
    identity?.role === 'MANAGER' ? 'Live assigned requests' : 'Live personal requests';

  useEffect(() => {
    root.dataset.agentState = workflow.busy
      ? 'running'
      : workflow.error
        ? 'error'
        : records
          ? 'ready'
          : 'idle';
    root.dataset.agentDataset = dataset;
    root.dataset.matchCount = String(matching.length);
    root.dataset.sampleSize = String(sampleSize);
  }, [root, workflow.busy, workflow.error, dataset, records, matching.length, sampleSize]);

  function changeFilters(next: Filters) {
    setFilters(next);
    setPage(1);
    if (records)
      toast.info(
        `${matchingRequests(records, next).length.toLocaleString('en')} matching requests.`,
        { id: 'ad-filters' },
      );
  }
  function chooseDataset(next: string) {
    setDataset(next as Dataset);
    setFilters(emptyFilters);
    setPage(1);
    setDetail(null);
  }
  function run() {
    void workflow.run(prompt, filters, changeFilters);
  }
  function openDetail(record: ApplicationRecord) {
    detailTrigger.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setDetail(record);
  }
  function download() {
    try {
      exportRequests(matching, dataset);
      toast.success(`CSV prepared: ${matching.length.toLocaleString('en')} matching requests.`);
    } catch {
      toast.error('The CSV could not be prepared. Try again.');
    }
  }

  return (
    <MotionConfig reducedMotion="user">
      <div className="agent-workspace">
        <header className="ad-heading">
          <div>
            <span className="ad-eyebrow">
              <WandSparkles aria-hidden="true" />
              READ-ONLY WORKFLOWS
            </span>
            <h2>Agent desk</h2>
            <p>Give the busy work a little direction.</p>
          </div>
          <DemoSettings />
        </header>
        <div className="ad-dataset-row">
          <Tabs
            value={dataset}
            onValueChange={chooseDataset}
            className="ad-dataset-tabs"
          >
            <TabsList>
              <TabsTrigger
                value="sample"
                disabled={workflow.busy}
              >
                Example dataset
              </TabsTrigger>
              {identity && (
                <TabsTrigger
                  value="live"
                  disabled={workflow.busy}
                >
                  {liveLabel}
                </TabsTrigger>
              )}
            </TabsList>
          </Tabs>
          <span className="ad-permission">
            <ShieldCheck aria-hidden="true" />
            Query · Analyse · Export
          </span>
        </div>
        <div className="ad-workbench">
          <section
            className="ad-command"
            aria-label="Workflow request"
          >
            <div className="ad-command-heading">
              <h3>
                {dataset === 'sample'
                  ? `Example dataset · ${sampleSize.toLocaleString('en')} sample requests`
                  : liveLabel}
              </h3>
              {dataset === 'sample' && (
                <Select
                  value={String(sampleSize)}
                  disabled={workflow.busy}
                  onValueChange={(value) => {
                    setSampleSize(Number(value) as SampleSize);
                    setFilters(emptyFilters);
                    setPage(1);
                    setDetail(null);
                  }}
                >
                  <SelectTrigger
                    className="ad-scale"
                    aria-label="Example dataset size"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="ad-select-content">
                    <SelectItem value="5000">5,000 requests</SelectItem>
                    <SelectItem value="20000">20,000 requests</SelectItem>
                    <SelectItem value="50000">50,000 requests</SelectItem>
                  </SelectContent>
                </Select>
              )}
            </div>
            <p className="ad-scope">
              {dataset === 'sample'
                ? 'A separate demonstration. Names, courses and requests are synthetic.'
                : identity?.role === 'MANAGER'
                  ? 'Only requests from employees assigned to your manager account.'
                  : 'Your requests for courses starting in the current server year.'}
            </p>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                run();
              }}
            >
              <label htmlFor="ad-prompt">What would you like to explore?</label>
              <textarea
                ref={promptInput}
                id="ad-prompt"
                value={prompt}
                onChange={(event) => setPrompt(event.target.value)}
                disabled={workflow.busy}
                rows={2}
                maxLength={250}
                aria-describedby="ad-prompt-note"
              />
              <div className="ad-command-bottom">
                <small id="ad-prompt-note">
                  Choose a workflow below; refine its results with the filters.
                </small>
                {workflow.busy ? (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={workflow.abort}
                  >
                    <Square aria-hidden="true" />
                    Stop workflow
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    disabled={!prompt.trim()}
                    className="ad-primary"
                  >
                    <Play aria-hidden="true" />
                    Run workflow
                  </Button>
                )}
              </div>
            </form>
            <div className="ad-prompt-grid">
              {examples.map((example, index) => {
                const Icon = index === 0 ? Search : index === 1 ? BarChart3 : Download;
                return (
                  <button
                    type="button"
                    key={example.intent}
                    disabled={workflow.busy}
                    className="ad-prompt-choice"
                    onClick={() => {
                      setPrompt(example.prompt);
                      promptInput.current?.focus();
                    }}
                  >
                    <Icon aria-hidden="true" />
                    <strong>{example.prompt}</strong>
                    <span>{example.description}</span>
                  </button>
                );
              })}
            </div>
          </section>
          <ToolSteps
            steps={workflow.steps}
            busy={workflow.busy}
          />
        </div>
        {workflow.error && (
          <div
            className="ad-error"
            role="alert"
          >
            <p>{workflow.error}</p>
            <div>
              <Button
                variant="outline"
                onClick={run}
              >
                Try again
              </Button>
              <a href={sourceLink}>
                Open original request list
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
        )}
        {!records && !workflow.error && (
          <div
            className="ad-results-intro"
            role="status"
          >
            {workflow.busy
              ? 'Reading and analysing the selected dataset…'
              : 'Run a workflow to see requests, course demand and exact recorded totals here.'}
          </div>
        )}
        {records && summary && (
          <section
            className="ad-results"
            aria-label="Workflow results"
            aria-busy={workflow.busy}
          >
            <header className="ad-results-heading">
              <div>
                <h3>Request work list</h3>
                <p>
                  {dataset === 'sample' ? 'Example dataset' : liveLabel} ·{' '}
                  {records.length.toLocaleString('en')} records loaded
                  {workflow.loadedAt
                    ? ` · Read at ${workflow.loadedAt.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}`
                    : ''}
                </p>
              </div>
              <div className="ad-result-actions">
                {identity?.role === 'MANAGER' && (
                  <Button
                    asChild
                    variant="outline"
                  >
                    <a href="/manager/pending">
                      Open review queue
                      <ArrowUpRight aria-hidden="true" />
                    </a>
                  </Button>
                )}
                <Button
                  variant="outline"
                  disabled={workflow.busy || !matching.length}
                  onClick={download}
                >
                  <Download aria-hidden="true" />
                  Export results
                </Button>
              </div>
            </header>
            <ResultFilters
              filters={filters}
              categories={categories}
              disabled={workflow.busy}
              onChange={changeFilters}
            />
            <p className="ad-batch-line">
              Awaiting review: <strong>{summary.pending.toLocaleString('en')}</strong> · Course
              groups: <strong>{summary.courses.length}</strong> · Largest group:{' '}
              <strong>{summary.courses[0]?.count.toLocaleString('en') || '0'} requests</strong> ·
              Last workflow operations:{' '}
              <strong>
                {workflow.steps
                  .reduce((total, step) => total + (step.elapsed || 0), 0)
                  .toLocaleString('en', { maximumFractionDigits: 1 })}{' '}
                ms
              </strong>
            </p>
            <div className="ad-analysis">
              <div className="ad-totals">
                <div>
                  <span>Matching requests</span>
                  <strong>
                    <span aria-hidden="true">
                      {reducedMotion ? (
                        summary.count.toLocaleString('en')
                      ) : (
                        <SlidingNumber value={summary.count} />
                      )}
                    </span>
                    <span className="sr-only">{summary.count.toLocaleString('en')}</span>
                  </strong>
                </div>
                <div>
                  <span>Employees with requests</span>
                  <strong>{summary.students.toLocaleString('en')}</strong>
                </div>
                <div>
                  <span>Recorded course fees</span>
                  <strong>{decimalLabel(summary.fee)}</strong>
                  <small>
                    {matching.filter((record) => record.fee == null).length} without a recorded fee
                  </small>
                </div>
                <div>
                  <span>Recorded training days</span>
                  <strong>{decimalLabel(summary.days)}</strong>
                  <small>
                    {matching.filter((record) => record.days == null).length} without recorded days
                  </small>
                </div>
                <p>
                  Totals cover every matching record, across all pages. Fees have no currency
                  supplied by the source.
                </p>
              </div>
              <DemandChart summary={summary} />
            </div>
            <ResultTable
              records={matching}
              page={page}
              onPage={setPage}
              onDetail={openDetail}
            />
            <p className="ad-data-note">
              {dataset === 'sample'
                ? 'Sample records have no application page and cannot be submitted or approved.'
                : 'This page loads the permitted request snapshot once per workflow. Paging happens in the browser; it is not server-side pagination.'}
            </p>
            <span
              className="sr-only"
              role="status"
              aria-live="polite"
            >
              {summary.count} matching requests. {summary.students} employees with requests.
            </span>
          </section>
        )}
        <RequestDetail
          record={detail}
          dataset={dataset}
          identity={identity}
          onClose={() => setDetail(null)}
          onReturnFocus={() => detailTrigger.current?.focus({ preventScroll: true })}
        />
        <Toaster
          theme="light"
          closeButton
          position="bottom-right"
          toastOptions={{ className: 'ad-toast' }}
        />
      </div>
    </MotionConfig>
  );
}

class AgentBoundary extends Component<
  { root: HTMLElement; children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch() {
    this.props.root.dataset.agentState = 'error';
  }
  render() {
    return this.state.failed ? (
      <p
        className="ad-error"
        role="alert"
      >
        The demonstration could not be displayed. Your original request pages remain available from
        the navigation.
      </p>
    ) : (
      this.props.children
    );
  }
}

document.querySelectorAll<HTMLElement>('[data-agent-workspace]').forEach((root) => {
  root.classList.add('cats-course-workspace');
  try {
    const identity = agentIdentity(root);
    dataTools();
    createRoot(root).render(
      <AgentBoundary root={root}>
        <AgentDesk
          root={root}
          identity={identity}
        />
      </AgentBoundary>,
    );
  } catch {
    root.dataset.agentState = 'error';
    root.textContent =
      'The demonstration could not be opened for this account. Use the original request pages from the navigation.';
  }
});
