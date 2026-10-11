import { Check, ChevronDown, Circle, LoaderCircle, Square, TriangleAlert } from 'lucide-react';
import type { ToolStep } from './use-workflow';

export function ToolSteps({ steps, busy }: { steps: ToolStep[]; busy: boolean }) {
  return (
    <section
      className="ad-steps"
      aria-label="Workflow operations"
      aria-busy={busy}
    >
      <div className="ad-section-label">LAST WORKFLOW</div>
      {steps.length === 0 ? (
        <p className="ad-small-muted">Choose a prompt to see each operation and its result.</p>
      ) : (
        <ol>
          {steps.map((step) => {
            const Icon =
              step.state === 'complete'
                ? Check
                : step.state === 'running'
                  ? LoaderCircle
                  : step.state === 'error'
                    ? TriangleAlert
                    : step.state === 'stopped'
                      ? Square
                      : Circle;
            return (
              <li key={step.id}>
                <details
                  className="ad-step"
                  data-step-state={step.state}
                >
                  <summary>
                    <Icon
                      className={step.state === 'running' ? 'ad-spinning' : ''}
                      aria-hidden="true"
                    />
                    <span>{step.title}</span>
                    <span className="ad-step-state">{step.state}</span>
                    <ChevronDown aria-hidden="true" />
                  </summary>
                  <div className="ad-step-detail">
                    <p>{step.detail}</p>
                    {step.elapsed != null && <small>Operation time: {step.elapsed} ms</small>}
                  </div>
                </details>
              </li>
            );
          })}
        </ol>
      )}
      <span
        className="sr-only"
        role="status"
        aria-live="polite"
      >
        {steps.filter((step) => step.state === 'complete').length} of {steps.length} operations
        complete.
      </span>
    </section>
  );
}
