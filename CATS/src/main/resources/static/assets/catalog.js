/* Curated course notes open a real Java form; no application state is stored here. */
(() => {
  'use strict';
  const catalog = document.querySelector('[data-catalog]');
  if (!catalog) return;
  const courses = window.CATS_COURSES || [];
  const list = catalog.querySelector('[data-course-list]');
  const search = catalog.querySelector('input[type=search]');
  const duration = catalog.querySelector('[data-duration]');
  const fee = catalog.querySelector('[data-fee]');
  const dialog = document.querySelector('[data-course-dialog]');
  const rows = new Map();
  let category = 'all';
  let opener;

  function node(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }
  const amount = (value) =>
    `S$${Number(value).toLocaleString('en-SG', { maximumFractionDigits: 2 })}`;
  function openCourse(course, button) {
    opener = button;
    const values = {
      title: course.title,
      summary: course.summary,
      provider: course.provider,
      category: course.categoryName,
      dates: `${course.startDate} – ${course.endDate}`,
      fee: course.fee ? amount(course.fee) : 'No fee',
    };
    Object.entries(values).forEach(([key, value]) => {
      dialog.querySelector(`[data-course-${key}]`).textContent = value;
    });
    dialog
      .querySelector('[data-course-outcomes]')
      .replaceChildren(...course.outcomes.map((outcome) => node('li', '', outcome)));
    dialog.querySelector('[data-course-apply]').href =
      `/employee/applications/new?course=${encodeURIComponent(course.id)}`;
    dialog.showModal();
  }
  function courseRow(course) {
    const row = node('article', 'course-row');
    const art = node('div', 'course-art');
    art.setAttribute('aria-hidden', 'true');
    art.innerHTML = window.CATS_COURSE_ART.resolve(course).svg;
    const copy = node('div', 'course-copy');
    const heading = node('h2');
    const title = node('button', 'course-title', course.title);
    title.type = 'button';
    title.addEventListener('click', () => openCourse(course, title));
    heading.append(title);
    const meta = node('div', 'course-meta');
    [
      course.categoryName,
      `${course.days} ${course.days === 1 ? 'day' : 'days'}`,
      course.fee ? amount(course.fee) : 'No fee',
    ].forEach((value) => meta.append(node('span', '', value)));
    copy.append(heading, node('p', 'course-summary', course.summary), meta);
    row.append(art, copy);
    return row;
  }
  courses.forEach((course) => rows.set(course.id, courseRow(course)));
  function render() {
    const query = search.value.trim().toLowerCase();
    const matches = courses.filter((course) => {
      const matchesDuration =
        duration.value === 'all' ||
        (duration.value === 'one' ? course.days === 1 : course.days > 1);
      const matchesFee =
        fee.value === 'all' || (fee.value === 'free' ? !course.fee : course.fee > 0);
      return (
        (category === 'all' || category === course.category) &&
        matchesDuration &&
        matchesFee &&
        `${course.title} ${course.summary} ${course.provider}`.toLowerCase().includes(query)
      );
    });
    const ids = new Set(matches.map((course) => course.id));
    courses.forEach((course) => {
      if (!ids.has(course.id)) rows.get(course.id).remove();
    });
    matches.forEach((course, index) => {
      if (list.children[index] !== rows.get(course.id))
        list.insertBefore(rows.get(course.id), list.children[index] || null);
    });
    catalog.querySelector('[data-result-count]').textContent =
      `${matches.length} ${matches.length === 1 ? 'course' : 'courses'}`;
    catalog.querySelector('[data-catalog-empty]').hidden = matches.length > 0;
    catalog.querySelector('[data-reset]').hidden =
      category === 'all' && !query && duration.value === 'all' && fee.value === 'all';
  }
  catalog.querySelectorAll('[data-category]').forEach((button) => {
    button.addEventListener('click', () => {
      category = button.dataset.category;
      catalog
        .querySelectorAll('[data-category]')
        .forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
      render();
    });
  });
  search.addEventListener('input', render);
  duration.addEventListener('change', render);
  fee.addEventListener('change', render);
  catalog.querySelector('[data-reset]').addEventListener('click', () => {
    search.value = '';
    duration.value = 'all';
    fee.value = 'all';
    category = 'all';
    catalog
      .querySelectorAll('[data-category]')
      .forEach((item) =>
        item.setAttribute('aria-pressed', String(item.dataset.category === 'all')),
      );
    window.CATS_CONTROLS?.sync();
    render();
    search.focus();
  });
  dialog.querySelector('[data-course-close]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => opener?.focus({ preventScroll: true }));
  document.addEventListener('keydown', (event) => {
    if (
      event.key === '/' &&
      !catalog.hidden &&
      !dialog.open &&
      !/INPUT|TEXTAREA|SELECT/.test(event.target.tagName)
    ) {
      event.preventDefault();
      search.focus();
    }
  });
  render();
})();
