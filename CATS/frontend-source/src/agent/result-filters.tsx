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
import type { Filters, StatusChoice } from './workflows';

export function ResultFilters({
  filters,
  categories,
  disabled,
  onChange,
}: {
  filters: Filters;
  categories: string[];
  disabled: boolean;
  onChange(filters: Filters): void;
}) {
  return (
    <div className="ad-filters">
      <label className="ad-search">
        <Search aria-hidden="true" />
        <Input
          type="search"
          value={filters.search}
          disabled={disabled}
          placeholder="Search requests"
          aria-label="Search results by title, provider, employee or ID"
          onChange={(event) => onChange({ ...filters, search: event.target.value })}
        />
      </label>
      <Select
        value={filters.status}
        disabled={disabled}
        onValueChange={(status) => onChange({ ...filters, status: status as StatusChoice })}
      >
        <SelectTrigger
          className="ad-filter-select"
          aria-label="Result status"
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="ad-select-content">
          <SelectItem value="all">All statuses</SelectItem>
          <SelectItem value="pending">Awaiting review</SelectItem>
          <SelectItem value="accepted">Approved or completed</SelectItem>
          <SelectItem value="rejected">Rejected</SelectItem>
          <SelectItem value="cancelled">Cancelled</SelectItem>
          <SelectItem value="deleted">Deleted</SelectItem>
        </SelectContent>
      </Select>
      <Select
        value={filters.category}
        disabled={disabled}
        onValueChange={(category) => onChange({ ...filters, category })}
      >
        <SelectTrigger
          className="ad-filter-select"
          aria-label="Result category"
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="ad-select-content">
          <SelectItem value="all">All categories</SelectItem>
          {categories.map((category) => (
            <SelectItem
              key={category}
              value={category}
            >
              {category || 'Uncategorised'}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button
        variant="ghost"
        disabled={
          disabled || (!filters.search && filters.status === 'all' && filters.category === 'all')
        }
        onClick={() => onChange({ search: '', status: 'all', category: 'all' })}
      >
        <RotateCcw aria-hidden="true" />
        Reset
      </Button>
    </div>
  );
}
