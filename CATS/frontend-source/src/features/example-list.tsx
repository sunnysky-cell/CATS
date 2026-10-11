import { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ExampleCard } from './example-card';
import { exampleCourses } from '@/business/example-courses';

export function ExampleList({
  selected,
  reducedMotion,
  onToggle,
}: {
  selected: Set<string>;
  reducedMotion: boolean;
  onToggle(id: string): void;
}) {
  const [search, setSearch] = useState('');
  const examples = exampleCourses.filter((course) =>
    `${course.title} ${course.provider} ${course.summary}`
      .toLowerCase()
      .includes(search.trim().toLowerCase()),
  );
  return (
    <>
      <div className="cw-example-intro">
        <h3>Example course notes</h3>
        <p>
          Six sample ideas, not live availability or approved offerings. Any application opens the
          original form for your review.
        </p>
      </div>
      <label className="cw-search cw-example-search">
        <Search aria-hidden="true" />
        <Input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search examples"
          aria-label="Search example courses"
        />
      </label>
      <p
        className="cw-results-line"
        role="status"
      >
        {examples.length} {examples.length === 1 ? 'example' : 'examples'}
      </p>
      <div className="cw-card-grid">
        {examples.map((course) => (
          <ExampleCard
            key={course.id}
            course={course}
            selected={selected.has(course.id)}
            reducedMotion={reducedMotion}
            onToggle={onToggle}
          />
        ))}
      </div>
      {examples.length === 0 && (
        <div className="cw-empty">
          <h3>No matching examples</h3>
          <Button
            variant="outline"
            className="cw-secondary"
            onClick={() => setSearch('')}
          >
            Clear example search
          </Button>
        </div>
      )}
    </>
  );
}
