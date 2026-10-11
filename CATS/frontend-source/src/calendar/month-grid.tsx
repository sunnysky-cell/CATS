import type { KeyboardEvent } from 'react';
import { BookOpen, Circle } from 'lucide-react';
import { monthCells, readableDate, weekdays } from './dates';
import type { PersonalEvent, TrainingPeriod } from './types';

interface GridProps {
  year: number;
  month: number;
  selected: string;
  today: string;
  courses: TrainingPeriod[];
  events: PersonalEvent[];
  onSelect: (date: string) => void;
}
export function MonthGrid({ year, month, selected, today, courses, events, onSelect }: GridProps) {
  const cells = monthCells(year, month);
  const weeks = Array.from({ length: cells.length / 7 }, (_, index) =>
    cells.slice(index * 7, index * 7 + 7),
  );
  function move(e: KeyboardEvent<HTMLButtonElement>, index: number) {
    const offset = (
      {
        ArrowLeft: -1,
        ArrowRight: 1,
        ArrowUp: -7,
        ArrowDown: 7,
        Home: -(index % 7),
        End: 6 - (index % 7),
      } as Record<string, number>
    )[e.key];
    if (offset === undefined) return;
    e.preventDefault();
    const next = cells[index + offset];
    if (!next?.current) return;
    onSelect(next.date);
    document.getElementById(`calendar-day-${next.date}`)?.focus();
  }
  return (
    <div
      className="cal-month-grid"
      role="grid"
      aria-label="Month dates. Use arrow keys to select a day."
    >
      <div
        className="cal-weekday-row"
        role="row"
      >
        {weekdays.map((day) => (
          <span
            role="columnheader"
            key={day}
          >
            {day}
          </span>
        ))}
      </div>
      {weeks.map((week, weekIndex) => (
        <div
          className="cal-week-row"
          role="row"
          key={week[0].date}
        >
          {week.map((cell, dayIndex) => {
            const training = cell.current
              ? courses.filter((course) => course.start <= cell.date && course.end >= cell.date)
              : [];
            const personal = cell.current ? events.filter((event) => event.date === cell.date) : [];
            const chips = [
              ...training.map((course) => ({
                key: course.key,
                title: course.title,
                color: 'training',
                training: true,
              })),
              ...personal.map((event) => ({
                key: `event-${event.id}`,
                title: event.title,
                color: event.color,
                training: false,
              })),
            ];
            return (
              <div
                role="gridcell"
                className="cal-grid-cell"
                key={cell.date}
                aria-selected={cell.current && selected === cell.date}
              >
                {cell.current ? (
                  <button
                    id={`calendar-day-${cell.date}`}
                    type="button"
                    className={`cal-day${selected === cell.date ? ' is-selected' : ''}${today === cell.date ? ' is-today' : ''}`}
                    tabIndex={selected === cell.date ? 0 : -1}
                    aria-current={today === cell.date ? 'date' : undefined}
                    aria-label={`${readableDate(cell.date, true)}. ${training.length} training periods, ${personal.length} personal events.`}
                    onClick={() => onSelect(cell.date)}
                    onKeyDown={(e) => move(e, weekIndex * 7 + dayIndex)}
                  >
                    <span className="cal-day-number">{cell.day}</span>
                    <span
                      className="cal-day-chips"
                      aria-hidden="true"
                    >
                      {chips.slice(0, 2).map((chip) => (
                        <span
                          className={`cal-day-chip cal-color-${chip.color}`}
                          key={chip.key}
                        >
                          {chip.training ? (
                            <BookOpen size={11} />
                          ) : (
                            <Circle
                              size={8}
                              fill="currentColor"
                            />
                          )}
                          <span>{chip.title}</span>
                        </span>
                      ))}
                      {chips.length > 2 && (
                        <span className="cal-more">+{chips.length - 2} more</span>
                      )}
                    </span>
                    <span
                      className="cal-mobile-count"
                      aria-hidden="true"
                    >
                      {chips.length > 0 && (
                        <>
                          <span className="cal-date-dot" />
                          {chips.length}
                        </>
                      )}
                    </span>
                  </button>
                ) : (
                  <span
                    className="cal-outside-day"
                    aria-hidden="true"
                  >
                    {cell.day}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
