import { BarChart3 } from 'lucide-react';
import type { RequestSummary } from './data-tools';

export function DemandChart({ summary }: { summary: RequestSummary }) {
  const groups = summary.courses.slice(0, 6);
  const maximum = Math.max(1, ...groups.map((group) => group.count));
  const description = groups
    .map((group) => `${group.title}, ${group.provider}, ${group.category}: ${group.count} requests`)
    .join('; ');
  return (
    <figure className="ad-chart">
      <header>
        <BarChart3 aria-hidden="true" />
        <div>
          <h3>Course demand</h3>
          <p>Top course groups in the current results</p>
        </div>
      </header>
      {groups.length ? (
        <div
          className="ad-chart-plot"
          tabIndex={0}
          aria-label="Course demand chart, scroll horizontally on small screens"
        >
          <svg
            viewBox={`0 0 640 ${groups.length * 57 + 12}`}
            role="img"
            aria-label={description}
          >
            {groups.map((group, index) => (
              <g
                key={group.key}
                transform={`translate(0 ${index * 57})`}
              >
                <text
                  x="0"
                  y="17"
                  className="ad-chart-label"
                >
                  {group.title.length > 39 ? group.title.slice(0, 36) + '…' : group.title}
                </text>
                <text
                  x="0"
                  y="35"
                  className="ad-chart-provider"
                >
                  {group.provider.length > 42 ? group.provider.slice(0, 39) + '…' : group.provider}
                </text>
                <rect
                  x="310"
                  y="8"
                  width="270"
                  height="22"
                  rx="3"
                  className="ad-chart-track"
                />
                <rect
                  x="310"
                  y="8"
                  width={Math.max(2, (group.count / maximum) * 270)}
                  height="22"
                  rx="3"
                  className="ad-chart-bar"
                />
                <text
                  x="632"
                  y="24"
                  textAnchor="end"
                  className="ad-chart-value"
                >
                  {group.count.toLocaleString('en')}
                </text>
              </g>
            ))}
          </svg>
        </div>
      ) : (
        <p className="ad-chart-empty">No matching requests to compare.</p>
      )}
      <figcaption>
        Groups use the request’s course title, provider and category. Counts represent requests, not
        course capacity.
      </figcaption>
    </figure>
  );
}
