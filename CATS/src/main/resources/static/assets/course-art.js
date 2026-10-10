/* Course subjects choose illustrations; course IDs and titles do not. */
(() => {
  'use strict';

  // The first illustration is the default. Add reviewed variants to the same subject.
  const themes = Object.freeze(
    [
      { id: 'ai', label: 'Artificial intelligence', illustrations: ['ai'] },
      { id: 'data', label: 'Data & analytics', illustrations: ['data'] },
      { id: 'cloud', label: 'Cloud computing', illustrations: ['cloud'] },
      { id: 'projects', label: 'Project management', illustrations: ['projects'] },
      { id: 'security', label: 'Cybersecurity', illustrations: ['security'] },
      { id: 'leadership', label: 'Leadership & communication', illustrations: ['leadership'] },
      { id: 'general', label: 'General learning', illustrations: ['general'] },
    ].map((theme) =>
      Object.freeze({ ...theme, illustrations: Object.freeze(theme.illustrations) }),
    ),
  );
  const fallback = themes.find((theme) => theme.id === 'general');

  function resolve(course) {
    const theme = themes.find((entry) => entry.id === course?.subject) || fallback;
    // A requested variant must belong to the course's subject.
    const requested = course?.illustration;
    let illustration = theme.illustrations.includes(requested) ? requested : theme.illustrations[0];
    if (!Object.hasOwn(window.CATS_SKETCHES, illustration)) illustration = 'general';
    return {
      subject: theme.id,
      illustration,
      svg: window.CATS_SKETCHES[illustration],
    };
  }

  window.CATS_COURSE_ART = Object.freeze({ themes, resolve });
})();
