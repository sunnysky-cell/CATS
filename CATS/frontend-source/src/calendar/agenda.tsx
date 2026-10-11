import { BookOpen, CalendarDays, Pencil } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { readableDate } from './dates';
import type { PersonalEvent, TrainingPeriod } from './types';

export function Agenda({
  date,
  courses,
  events,
  onEdit,
  canEdit,
}: {
  date: string;
  courses: TrainingPeriod[];
  events: PersonalEvent[];
  onEdit: (event: PersonalEvent, trigger: HTMLElement) => void;
  canEdit: boolean;
}) {
  const training = courses.filter((course) => course.start <= date && course.end >= date);
  const personal = events.filter((event) => event.date === date);
  return (
    <section
      className="cal-agenda"
      aria-labelledby="calendar-agenda-title"
    >
      <header>
        <p className="cal-eyebrow">Selected day</p>
        <h3 id="calendar-agenda-title">{readableDate(date, true)}</h3>
      </header>
      <AnimatePresence
        initial={false}
        mode="wait"
      >
        <motion.div
          key={date}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.14 }}
          className="cal-agenda-items"
        >
          {training.length === 0 && personal.length === 0 && (
            <div className="cal-agenda-empty">
              <CalendarDays
                size={26}
                aria-hidden="true"
              />
              <p>No events for this day.</p>
              <span>Choose another date or add a personal event.</span>
            </div>
          )}
          {training.map((course) => (
            <article
              className="cal-agenda-course"
              key={course.key}
            >
              <div className="cal-item-type">
                <BookOpen
                  size={15}
                  aria-hidden="true"
                />
                Approved training
              </div>
              <h4>{course.title}</h4>
              <p>{course.provider}</p>
              <dl>
                <div>
                  <dt>Participant</dt>
                  <dd>{course.employee}</dd>
                </div>
                <div>
                  <dt>Category</dt>
                  <dd>{course.category || 'Unspecified'}</dd>
                </div>
                <div>
                  <dt>Course period</dt>
                  <dd>
                    {readableDate(course.start)} – {readableDate(course.end)}
                  </dd>
                </div>
              </dl>
            </article>
          ))}
          {personal.map((event) => (
            <button
              type="button"
              className={`cal-agenda-event cal-color-${event.color}`}
              disabled={!canEdit}
              key={event.id}
              onClick={(e) => onEdit(event, e.currentTarget)}
              aria-label={`Edit personal event: ${event.title}`}
            >
              <span className="cal-item-type">
                <CalendarDays
                  size={15}
                  aria-hidden="true"
                />
                My event
                <Pencil
                  className="cal-edit-icon"
                  size={14}
                  aria-hidden="true"
                />
              </span>
              <strong>{event.title}</strong>
              <span className="cal-event-time">
                {event.allDay
                  ? 'All day'
                  : `${event.startTime}${event.endTime ? ` – ${event.endTime}` : ''}`}
              </span>
              {event.details && <span className="cal-event-details">{event.details}</span>}
            </button>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
