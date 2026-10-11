import {
  BookOpen,
  Cloud,
  ExternalLink,
  ListChecks,
  ShieldCheck,
  Sparkles,
  Users,
  ChartNoAxesCombined,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogTitle,
  MorphingDialogSubtitle,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogClose,
} from '@/components/motion-primitives/morphing-dialog';
import { exampleHref, type ExampleCourse } from '@/business/example-courses';

const subjectIcons = {
  ai: Sparkles,
  data: ChartNoAxesCombined,
  cloud: Cloud,
  projects: ListChecks,
  security: ShieldCheck,
  leadership: Users,
};

export function ExampleCard({
  course,
  selected,
  reducedMotion,
  onToggle,
}: {
  course: ExampleCourse;
  selected: boolean;
  reducedMotion: boolean;
  onToggle(id: string): void;
}) {
  const Icon = subjectIcons[course.subject as keyof typeof subjectIcons] || BookOpen;
  // Only the existing local illustration library produces this markup, never record values.
  const artwork = window.CATS_COURSE_ART?.resolve(course).svg;
  return (
    <MorphingDialog
      transition={
        reducedMotion ? { duration: 0 } : { type: 'spring', bounce: 0.08, duration: 0.35 }
      }
    >
      <Card
        className={`cw-request-card cw-example-card ${selected ? 'cw-selected' : ''}`}
        data-example-id={course.id}
      >
        <div className="cw-card-band">
          <Icon aria-hidden="true" />
          <span>{course.categoryName}</span>
          <span className="cw-reference">Example</span>
        </div>
        <CardContent className="cw-card-main">
          {artwork && (
            <div
              className="cw-example-art"
              aria-hidden="true"
              dangerouslySetInnerHTML={{ __html: artwork }}
            />
          )}
          <MorphingDialogTrigger
            className="cw-card-open"
            aria-label={`Preview example course ${course.title}`}
          >
            <MorphingDialogTitle className="cw-card-title">{course.title}</MorphingDialogTitle>
            <MorphingDialogSubtitle className="cw-provider">
              {course.provider}
            </MorphingDialogSubtitle>
          </MorphingDialogTrigger>
          <p className="cw-example-summary">{course.summary}</p>
          <dl className="cw-card-facts">
            <div>
              <dt>Sample fee</dt>
              <dd>{course.fee ? `S$${course.fee}` : 'No fee'}</dd>
            </div>
            <div>
              <dt>Sample duration</dt>
              <dd>
                {course.days} {course.days === 1 ? 'day' : 'days'}
              </dd>
            </div>
          </dl>
        </CardContent>
        <CardFooter className="cw-card-footer">
          <span className="cw-example-note">Illustrative course note</span>
          <div className="cw-compare">
            <Checkbox
              id={`example-${course.id}`}
              checked={selected}
              onCheckedChange={() => onToggle(course.id)}
              aria-label={`Save example ${course.title} to this page's comparison list`}
            />
            <label htmlFor={`example-${course.id}`}>Compare</label>
          </div>
        </CardFooter>
      </Card>
      <MorphingDialogContainer>
        <MorphingDialogContent className="cw-detail">
          <div className="cw-detail-heading">
            <span className="cw-reference">EXAMPLE COURSE</span>
            <MorphingDialogClose className="cw-dialog-close" />
          </div>
          <MorphingDialogTitle className="cw-detail-title">{course.title}</MorphingDialogTitle>
          <MorphingDialogSubtitle className="cw-provider">{course.provider}</MorphingDialogSubtitle>
          <p>{course.summary}</p>
          <dl className="cw-detail-facts">
            <div>
              <dt>Category</dt>
              <dd>{course.categoryName}</dd>
            </div>
            <div>
              <dt>Level</dt>
              <dd>{course.level}</dd>
            </div>
            <div>
              <dt>Format</dt>
              <dd>{course.format}</dd>
            </div>
            <div>
              <dt>Sample fee</dt>
              <dd>{course.fee ? `S$${course.fee}` : 'No fee'}</dd>
            </div>
            <div>
              <dt>Sample duration</dt>
              <dd>
                {course.days} {course.days === 1 ? 'day' : 'days'}
              </dd>
            </div>
          </dl>
          <h3>Example learning outcomes</h3>
          <ul className="cw-outcomes">
            {course.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
          <p className="cw-boundary">
            This is an example, not a live course listing. The original Java form opens with sample
            values for you to verify before submitting.
          </p>
          <Button
            asChild
            className="cw-primary"
          >
            <a href={exampleHref(course)}>
              Use as a form starting point
              <ExternalLink aria-hidden="true" />
            </a>
          </Button>
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}
