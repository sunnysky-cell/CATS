/* Sample catalog records for the local interactive prototype. */
(() => {
  'use strict';
  const asISO = (date) =>
    `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  const nextWeekday = (offset, duration) => {
    const start = new Date();
    start.setHours(12, 0, 0, 0);
    start.setDate(start.getDate() + offset);
    while ([0, 6].includes(start.getDay())) start.setDate(start.getDate() + 1);
    const end = new Date(start);
    for (let day = 1; day < duration; day++) {
      end.setDate(end.getDate() + 1);
      while ([0, 6].includes(end.getDay())) end.setDate(end.getDate() + 1);
    }
    return { startDate: asISO(start), endDate: asISO(end) };
  };
  const seed = [
    {
      id: 'ai-for-work',
      title: 'AI for Everyday Work',
      subject: 'ai',
      category: 'internal',
      categoryName: 'Internal Training',
      provider: 'CATS Learning Lab (sample)',
      fee: 0,
      days: 1,
      offset: 14,
      level: 'All levels',
      format: 'Live workshop',
      summary: 'Turn AI from a talking point into a practical part of your working day.',
      outcomes: [
        'Build repeatable prompts for everyday tasks.',
        'Check AI outputs for accuracy and sensitive information.',
        'Design one useful workflow for your team.',
      ],
    },
    {
      id: 'data-to-decisions',
      title: 'From Data to Decisions',
      subject: 'data',
      category: 'external',
      categoryName: 'External Course',
      provider: 'Insight Academy (sample)',
      fee: 420,
      days: 2,
      offset: 21,
      level: 'Intermediate',
      format: 'Online, instructor-led',
      summary: 'Find the signal in your data and communicate the decisions it supports.',
      outcomes: [
        'Frame a business question that data can answer.',
        'Build clear visual explanations and useful dashboards.',
        'Present evidence, assumptions, and recommendations.',
      ],
    },
    {
      id: 'cloud-foundations',
      title: 'Cloud Foundations',
      subject: 'cloud',
      category: 'certification',
      categoryName: 'Professional Certification',
      provider: 'Cloud Skills Institute (sample)',
      fee: 650,
      days: 3,
      offset: 28,
      level: 'Foundation',
      format: 'Hybrid workshop',
      summary: 'Build a solid understanding of cloud architecture, services, and operating costs.',
      outcomes: [
        'Compare common cloud service and deployment models.',
        'Explain reliability, access controls, and shared responsibility.',
        'Prepare a structured certification study plan.',
      ],
    },
    {
      id: 'project-delivery',
      title: 'Project Delivery Essentials',
      subject: 'projects',
      category: 'external',
      categoryName: 'External Course',
      provider: 'Delivery School (sample)',
      fee: 360,
      days: 2,
      offset: 35,
      level: 'Foundation',
      format: 'In-person workshop',
      summary:
        'Keep scope, people, and progress aligned from the first brief to the final handover.',
      outcomes: [
        'Define scope, milestones, and a realistic delivery plan.',
        'Manage dependencies, changes, and delivery risks.',
        'Run a concise, useful project review.',
      ],
    },
    {
      id: 'secure-by-design',
      title: 'Secure by Design',
      subject: 'security',
      category: 'certification',
      categoryName: 'Professional Certification',
      provider: 'Security Practice Lab (sample)',
      fee: 540,
      days: 2,
      offset: 42,
      level: 'Intermediate',
      format: 'Online, instructor-led',
      summary: 'Recognize common security risks and make safer decisions throughout a project.',
      outcomes: [
        'Identify threats and choose practical mitigations.',
        'Apply secure handling of access and information.',
        'Map your knowledge to a certification learning path.',
      ],
    },
    {
      id: 'leading-teams',
      title: 'Leading Better Teams',
      subject: 'leadership',
      category: 'internal',
      categoryName: 'Internal Training',
      provider: 'CATS Learning Lab (sample)',
      fee: 0,
      days: 1,
      offset: 49,
      level: 'All levels',
      format: 'Live workshop',
      summary: 'Make feedback, delegation, and everyday team conversations more effective.',
      outcomes: [
        'Set clear expectations and delegate with context.',
        'Give specific feedback that leads to action.',
        'Build a practical plan for your next team conversation.',
      ],
    },
  ];
  window.CATS_COURSES = Object.freeze(
    seed.map(({ offset, ...course }) =>
      Object.freeze({
        ...course,
        ...nextWeekday(offset, course.days),
        outcomes: Object.freeze(course.outcomes),
      }),
    ),
  );
})();
