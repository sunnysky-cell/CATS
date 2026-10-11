import { useCallback, useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';
import { loadSnapshot } from '@/business/snapshot';
import type { ApplicationRecord, WorkspaceIdentity } from '@/business/types';
import { dataTools, exportRequests } from './data-tools';
import { sampleRequests, type SampleSize } from './sample-data';
import {
  matchingRequests,
  nextOperation,
  recognizePrompt,
  stopIfAborted,
  workflowFilters,
} from './workflows';
import type { Dataset, Filters } from './workflows';

export interface ToolStep {
  id: string;
  title: string;
  state: 'waiting' | 'running' | 'complete' | 'stopped' | 'error';
  detail: string;
  elapsed?: number;
}

export function useWorkflow(
  identity: WorkspaceIdentity | null,
  dataset: Dataset,
  sampleSize: SampleSize,
) {
  const [records, setRecords] = useState<ApplicationRecord[] | null>(null);
  const [resultDataset, setResultDataset] = useState<Dataset | null>(null);
  const [resultSampleSize, setResultSampleSize] = useState<SampleSize | null>(null);
  const [loadedAt, setLoadedAt] = useState<Date | null>(null);
  const [steps, setSteps] = useState<ToolStep[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const controller = useRef<AbortController | null>(null);
  const generation = useRef(0);

  useEffect(() => {
    generation.current++;
    controller.current?.abort();
    setRecords(null);
    setResultDataset(null);
    setResultSampleSize(null);
    setLoadedAt(null);
    setSteps([]);
    setBusy(false);
    setError('');
    return () => {
      generation.current++;
      controller.current?.abort();
    };
  }, [dataset, sampleSize]);

  const run = useCallback(
    async (prompt: string, current: Filters, updateFilters: (filters: Filters) => void) => {
      const intent = recognizePrompt(prompt);
      if (!intent) {
        toast.info(
          'Choose a query, course-demand comparison or CSV export. Decisions stay on the review page.',
        );
        return;
      }
      const runId = ++generation.current;
      controller.current?.abort();
      const abort = new AbortController();
      controller.current = abort;
      const signal = abort.signal;
      let timedOut = false;
      const timeout = setTimeout(() => {
        timedOut = true;
        abort.abort();
      }, 15000);
      const toastId = toast.loading('Running the read-only workflow…');
      setBusy(true);
      setError('');
      const planned = workflowFilters(intent, current);
      const plan: ToolStep[] = [
        {
          id: 'query',
          title: 'Read requests',
          state: 'waiting',
          detail:
            dataset === 'sample'
              ? 'Use the separate, fixed example dataset.'
              : 'Fetch and verify the current account’s Java-scoped request snapshot.',
        },
        {
          id: 'filter',
          title: 'Apply filters',
          state: 'waiting',
          detail:
            intent === 'pending'
              ? 'Awaiting review includes APPLIED and UPDATED requests, plus your search and category.'
              : intent === 'demand'
                ? 'Compare all statuses within your search and category.'
                : 'Keep the current search, status and category.',
        },
        {
          id: 'analyse',
          title: 'Summarise results',
          state: 'waiting',
          detail:
            'Count distinct employee IDs, group courses by title/provider/category, and sum recorded decimal fees and days.',
        },
        ...(intent === 'export'
          ? [
              {
                id: 'export',
                title: 'Prepare CSV',
                state: 'waiting' as const,
                detail:
                  'Export every matching row, with quoted fields and spreadsheet-formula protection.',
              },
            ]
          : []),
      ];
      setSteps(plan);
      function update(id: string, change: Partial<ToolStep>) {
        if (generation.current === runId)
          setSteps((previous) =>
            previous.map((step) => (step.id === id ? { ...step, ...change } : step)),
          );
      }
      async function operation<T>(
        id: string,
        execute: () => T | Promise<T>,
        detail: (value: T) => string,
      ): Promise<T> {
        update(id, { state: 'running' });
        await nextOperation(signal);
        const started = performance.now();
        const result = await execute();
        stopIfAborted(signal);
        update(id, {
          state: 'complete',
          detail: detail(result),
          elapsed: Math.round((performance.now() - started) * 10) / 10,
        });
        return result;
      }
      try {
        const snapshot = await operation(
          'query',
          async () => {
            if (dataset === 'sample')
              return { records: sampleRequests(sampleSize), loadedAt: new Date() };
            if (!identity) throw new Error('This account has no live request dataset.');
            return loadSnapshot(identity, signal);
          },
          (value) =>
            `${value.records.length.toLocaleString('en')} ${dataset === 'sample' ? 'sample' : 'verified'} requests read. ${dataset === 'sample' ? 'No account data was used.' : identity?.role === 'MANAGER' ? 'Assigned employees only.' : 'Your courses starting in the current server year only.'}`,
        );
        const matching = await operation(
          'filter',
          () => matchingRequests(snapshot.records, planned),
          (value) =>
            `Scanned ${snapshot.records.length.toLocaleString('en')} requests; ${value.length.toLocaleString('en')} match. ${snapshot.records.length - value.length} excluded by the selected filters.`,
        );
        await operation(
          'analyse',
          () => dataTools().aggregate(matching),
          (value) =>
            `${value.count.toLocaleString('en')} requests; ${value.students.toLocaleString('en')} employees with requests; ${value.courses.length} course groups. Totals include recorded values only.`,
        );
        if (intent === 'export')
          await operation(
            'export',
            () => {
              exportRequests(matching, dataset);
              return matching.length;
            },
            (count) =>
              `${count.toLocaleString('en')} matching requests included in the CSV download. Pagination does not limit this export.`,
          );
        if (generation.current !== runId) return;
        updateFilters(planned);
        setRecords(snapshot.records);
        setResultDataset(dataset);
        setResultSampleSize(sampleSize);
        setLoadedAt(snapshot.loadedAt);
        toast.success(
          intent === 'export'
            ? 'CSV prepared from all matching requests.'
            : `${matching.length.toLocaleString('en')} requests found.`,
          { id: toastId },
        );
      } catch (cause) {
        if (generation.current !== runId) {
          toast.dismiss(toastId);
          return;
        }
        const stopped = signal.aborted && !timedOut;
        const message = stopped
          ? 'Workflow stopped. You can run it again.'
          : timedOut
            ? 'The request timed out. Try again or open the original request list.'
            : cause instanceof Error
              ? cause.message
              : 'Requests could not be read. Try again.';
        setSteps((previous) =>
          previous.map((step) =>
            step.state === 'running'
              ? { ...step, state: stopped ? 'stopped' : 'error', detail: message }
              : step,
          ),
        );
        if (!stopped) {
          setError(message);
          setRecords(null);
          setLoadedAt(null);
        }
        toast[stopped ? 'info' : 'error'](message, { id: toastId });
      } finally {
        clearTimeout(timeout);
        if (generation.current === runId) {
          setBusy(false);
          controller.current = null;
        }
      }
    },
    [dataset, identity, sampleSize],
  );

  const resultMatches =
    resultDataset === dataset && (dataset !== 'sample' || resultSampleSize === sampleSize);
  return {
    records: resultMatches ? records : null,
    loadedAt: resultMatches ? loadedAt : null,
    steps,
    busy,
    error,
    run,
    abort: () => controller.current?.abort(),
  };
}
