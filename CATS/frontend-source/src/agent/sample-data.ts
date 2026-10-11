import type { ApplicationRecord } from '@/business/types';
import { dataTools } from './data-tools';

const courses = [
  ['Practical data analysis', 'Example Learning Studio', 'Data'],
  ['Cloud foundations', 'Example Technology Academy', 'Technology'],
  ['Leading small teams', 'Example People Institute', 'Leadership'],
  ['Project planning essentials', 'Example Learning Studio', 'Management'],
  ['Security awareness', 'Example Technology Academy', 'Technology'],
  ['Responsible use of AI', 'Example People Institute', 'Data'],
  ['Presenting with clarity', 'Example Communication Lab', 'Communication'],
  ['Designing better services', 'Example Design School', 'Design'],
] as const;

const statuses = [
  'APPLIED',
  'APPLIED',
  'UPDATED',
  'APPROVED',
  'APPROVED',
  'COMPLETED',
  'COMPLETED',
  'REJECTED',
  'CANCELLED',
  'DELETED',
];
export type SampleSize = 5000 | 20000 | 50000;
const cache = new Map<SampleSize, ApplicationRecord[]>();

// Fixed synthetic records make this large-list demonstration repeatable and separate from Java.
export function sampleRequests(size: SampleSize = 5000): ApplicationRecord[] {
  const existing = cache.get(size);
  if (existing) return existing;
  const rows = Array.from({ length: size }, (_, index): Record<string, string> => {
    const [title, provider, category] =
      courses[(index * 7 + Math.floor(index / 11)) % courses.length];
    const student = (index * 17) % 240;
    const month = String(1 + ((index * 5) % 12)).padStart(2, '0');
    const day = String(1 + ((index * 3) % 28)).padStart(2, '0');
    return {
      id: String(2500001 + index),
      title,
      provider,
      category,
      applicantId: String(9500001 + student),
      learner: `Sample employee ${String(student + 1).padStart(3, '0')}`,
      start: `2026-${month}-${day}`,
      end: `2026-${month}-${day}`,
      created: `2026-${month}-${day}T${String(index % 24).padStart(2, '0')}:30:00`,
      status: statuses[index % statuses.length],
      fee: `${100 + ((index * 37) % 900)}.${String((index * 13) % 100).padStart(2, '0')}`,
      days: ['0.5', '1.0', '1.5', '2.0', '2.5'][index % 5],
    };
  });
  const records = dataTools().sort(dataTools().normalize(rows), {
    field: 'created',
    direction: 'desc',
  });
  cache.set(size, records);
  return records;
}
