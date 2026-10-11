import { Search, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { AnimatedBackground } from '@/components/motion-primitives/animated-background';

export type StatusFilter = 'all' | 'pending' | 'accepted' | 'rejected';
export const statusGroups: Record<StatusFilter, string[]> = {
  all: [],
  pending: ['APPLIED', 'UPDATED'],
  accepted: ['APPROVED', 'COMPLETED'],
  rejected: ['REJECTED'],
};
const choices = [
  { id: 'all', label: 'All requests' },
  { id: 'pending', label: 'Awaiting review' },
  { id: 'accepted', label: 'Approved or completed' },
  { id: 'rejected', label: 'Rejected' },
] as const;

export function WorkspaceFilters({
  search,
  status,
  category,
  categories,
  reducedMotion,
  onSearch,
  onStatus,
  onCategory,
  onReset,
}: {
  search: string;
  status: StatusFilter;
  category: string;
  categories: string[];
  reducedMotion: boolean;
  onSearch(value: string): void;
  onStatus(value: StatusFilter): void;
  onCategory(value: string): void;
  onReset(): void;
}) {
  return (
    <div className="cw-filter-area">
      <div className="cw-filter-row">
        <label className="cw-search">
          <Search aria-hidden="true" />
          <Input
            type="search"
            value={search}
            onChange={(event) => onSearch(event.target.value)}
            placeholder="Search title, provider, employee or reference"
            aria-label="Search requests"
          />
        </label>
        <Select
          value={category}
          onValueChange={onCategory}
        >
          <SelectTrigger
            className="cw-category"
            aria-label="Filter request category"
          >
            <SelectValue placeholder="All categories" />
          </SelectTrigger>
          <SelectContent className="cw-select-content">
            <SelectItem value="all">All categories</SelectItem>
            {categories.map((name) => (
              <SelectItem
                key={name}
                value={name}
              >
                {name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
          variant="ghost"
          className="cw-reset"
          disabled={!search && status === 'all' && category === 'all'}
          onClick={onReset}
        >
          <RotateCcw aria-hidden="true" />
          Reset
        </Button>
      </div>
      <div
        className="cw-status-options"
        role="group"
        aria-label="Request status filters"
      >
        <AnimatedBackground
          defaultValue={status}
          onValueChange={(value) => {
            if (value) onStatus(value as StatusFilter);
          }}
          className="cw-animated-background"
          transition={
            reducedMotion ? { duration: 0 } : { type: 'spring', bounce: 0.08, duration: 0.3 }
          }
        >
          {choices.map((choice) => (
            <button
              type="button"
              data-id={choice.id}
              key={choice.id}
              className="cw-status-option"
              aria-pressed={status === choice.id}
              onClick={() => onStatus(choice.id)}
            >
              {choice.label}
            </button>
          ))}
        </AnimatedBackground>
      </div>
    </div>
  );
}
