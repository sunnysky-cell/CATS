import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { dateLabel, decimalLabel, statusLabel } from '@/business/format';
import type { ApplicationRecord } from '@/business/types';

export function ResultTable({
  records,
  page,
  onPage,
  onDetail,
}: {
  records: ApplicationRecord[];
  page: number;
  onPage(page: number): void;
  onDetail(record: ApplicationRecord): void;
}) {
  const pages = Math.max(1, Math.ceil(records.length / 50));
  const currentPage = Math.min(page, pages);
  const start = (currentPage - 1) * 50;
  return (
    <div className="ad-list">
      <div className="ad-table-scroll">
        <table>
          <caption className="sr-only">Matching requests. Fifty rows per page.</caption>
          <thead>
            <tr>
              <th scope="col">Course / reference</th>
              <th scope="col">Employee</th>
              <th scope="col">Status</th>
              <th scope="col">Start date</th>
              <th
                scope="col"
                className="ad-numeric"
              >
                Fee
              </th>
              <th
                scope="col"
                className="ad-numeric"
              >
                Days
              </th>
            </tr>
          </thead>
          <tbody>
            {records.slice(start, start + 50).map((record) => (
              <tr key={record.id}>
                <td>
                  <button
                    type="button"
                    className="ad-course-link"
                    onClick={() => onDetail(record)}
                  >
                    {record.title || 'Untitled course'}
                  </button>
                  <small>
                    {record.provider || 'Provider not recorded'} · #{record.id}
                  </small>
                </td>
                <td>{record.learner || 'Not recorded'}</td>
                <td>
                  <span
                    className="ad-status"
                    data-request-status={record.status}
                  >
                    {statusLabel(record.status)}
                  </span>
                </td>
                <td>{dateLabel(record.start)}</td>
                <td className="ad-numeric">{decimalLabel(record.fee)}</td>
                <td className="ad-numeric">{decimalLabel(record.days)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {records.length === 0 && (
        <div className="ad-empty">
          <h3>No requests match these filters</h3>
          <p>Reset your search, status or category to see the other records.</p>
        </div>
      )}
      <footer className="ad-pagination">
        <p>
          {records.length
            ? `${start + 1}–${Math.min(start + 50, records.length)} of ${records.length.toLocaleString('en')} requests`
            : '0 matching requests'}
          <small>Client paging · 50 rows per page</small>
        </p>
        <nav aria-label="Result pages">
          <Button
            variant="outline"
            size="sm"
            aria-label="Previous result page"
            disabled={currentPage === 1}
            onClick={() => onPage(currentPage - 1)}
          >
            <ChevronLeft aria-hidden="true" />
          </Button>
          <span>
            Page {currentPage} of {pages}
          </span>
          <Button
            variant="outline"
            size="sm"
            aria-label="Next result page"
            disabled={currentPage >= pages}
            onClick={() => onPage(currentPage + 1)}
          >
            <ChevronRight aria-hidden="true" />
          </Button>
        </nav>
      </footer>
    </div>
  );
}
