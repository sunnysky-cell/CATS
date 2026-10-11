import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import type { RequestSnapshot, WorkspaceIdentity } from '@/business/types';
import { loadSnapshot } from '@/business/snapshot';

export function useSnapshot(identity: WorkspaceIdentity) {
  const [snapshot, setSnapshot] = useState<RequestSnapshot | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    let active = true;
    let timedOut = false;
    const timeout = window.setTimeout(() => {
      timedOut = true;
      controller.abort();
    }, 15000);
    setLoading(true);
    setError(null);
    setSnapshot(null);
    const notification = toast.loading('Loading your current request snapshot…');
    loadSnapshot(identity, controller.signal)
      .then((value) => {
        window.clearTimeout(timeout);
        if (!active) return;
        if (timedOut)
          throw new Error(
            'The request snapshot took too long to load. Try again or open the original list.',
          );
        setSnapshot(value);
        setLoading(false);
        toast.success(
          `Loaded ${value.records.length} ${value.records.length === 1 ? 'request' : 'requests'}.`,
          { id: notification },
        );
      })
      .catch((reason: unknown) => {
        window.clearTimeout(timeout);
        if (!active) return;
        const message = timedOut
          ? 'The request snapshot took too long to load. Try again or open the original list.'
          : reason instanceof Error
            ? reason.message
            : 'The request snapshot could not be loaded.';
        setError(message);
        setLoading(false);
        toast.error(message, {
          id: notification,
          action: { label: 'Retry', onClick: () => setAttempt((value) => value + 1) },
        });
      });
    return () => {
      active = false;
      window.clearTimeout(timeout);
      controller.abort();
      toast.dismiss(notification);
    };
  }, [identity, attempt]);
  return { snapshot, error, loading, retry: () => setAttempt((value) => value + 1) };
}
