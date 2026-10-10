/* Progressive enhancement of Java's assigned-employee snapshot. No approval writes. */
(() => {
  'use strict';
  const root = document.getElementById('cats-manager-data');
  const data = window.CATS_INSIGHTS_DATA;
  if (!root || !data) return;
  const find = (selector) => root.querySelector(selector);
  const form = find('[data-insight-filters]');
  const tbody = find('[data-insight-records]');
  const originalRows = [...tbody.querySelectorAll('[data-insight-record]')];
  const rows = new Map(originalRows.map((row) => [row.dataset.id, row]));
  const number = new Intl.NumberFormat('en');
  const state = {
    page: 1,
    pageSize: 25,
    sort: { field: 'created', direction: 'desc' },
    courseKey: '',
    month: '',
  };
  let records;
  let filtered = [];
  let debounce;

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function icon(name, fallback = 'fileText') {
    const node = element('span', 'insight-state-icon');
    node.setAttribute('aria-hidden', 'true');
    const icons = window.CATS_ICONS;
    if (icons) {
      const glyph = icons.icon(name);
      node.innerHTML = glyph.includes('<path') ? glyph : icons.icon(fallback);
    }
    return node;
  }

  function plural(count, word) {
    return `${number.format(count)} ${word}${count === 1 ? '' : 's'}`;
  }

  function label(status) {
    return status
      .toLowerCase()
      .replace(/_/g, ' ')
      .replace(/^./, (letter) => letter.toUpperCase());
  }

  function control(name) {
    return form.elements.namedItem(name);
  }

  function options() {
    return {
      search: control('search').value,
      status:
        control('status').value === 'PENDING' ? ['APPLIED', 'UPDATED'] : control('status').value,
      category: control('category').value,
      applicantId: control('applicantId').value,
      dateField: control('dateField').value,
      from: control('from').value,
      to: control('to').value,
      courseKey: state.courseKey,
      month: state.month,
    };
  }

  function validRange() {
    const from = control('from');
    const to = control('to');
    const error = find('[data-insight-filter-error]');
    const invalid = [from, to].find(
      (input) => input.validity.badInput || (input.value && !data.date(input.value)),
    );
    const reversed = from.value && to.value && from.value > to.value;
    error.hidden = !invalid && !reversed;
    error.textContent = invalid
      ? 'Enter a complete, valid date. Results remain at the last valid selection.'
      : reversed
        ? 'The end date must be on or after the start date. Results remain at the last valid selection.'
        : '';
    if (!error.hidden) find('[data-insight-export]').disabled = true;
    for (const input of [from, to]) {
      if (invalid === input || reversed) input.setAttribute('aria-invalid', 'true');
      else input.removeAttribute('aria-invalid');
    }
    window.CATS_CONTROLS?.sync();
    return error.hidden;
  }

  function populateFilters() {
    const categories = new Set();
    const students = new Map();
    for (const record of records) {
      if (record.category) categories.add(record.category);
      if (record.applicantId) students.set(record.applicantId, record.learner || 'Unnamed employee');
    }
    [...categories]
      .sort((a, b) => a.localeCompare(b, 'en'))
      .forEach((category) => control('category').add(new Option(category, category)));
    [...students]
      .sort((a, b) => a[1].localeCompare(b[1], 'en') || a[0].localeCompare(b[0]))
      .forEach(([id, name]) => control('applicantId').add(new Option(`${name} · #${id}`, id)));
    if (records.some((record) => record.status === 'UNKNOWN'))
      control('status').add(new Option('Unknown', 'UNKNOWN'));
    window.CATS_CONTROLS?.sync();
  }

  function renderDemand(summary) {
    const container = find('[data-insight-demand]');
    container.replaceChildren();
    if (!summary.count) {
      container.append(element('p', 'insight-empty', 'No course groups match this selection.'));
      return;
    }
    const max = summary.courses[0].count;
    summary.courses.slice(0, 8).forEach((course, index) => {
      const button = element('button', 'insight-course');
      button.type = 'button';
      button.dataset.courseKey = course.key;
      button.setAttribute('aria-pressed', String(state.courseKey === course.key));
      button.title = `${course.title || 'Untitled course'} — ${course.provider || 'Provider not recorded'} — ${course.category || 'Category not recorded'}: ${plural(course.count, 'request')}. Click to filter.`;
      const text = element('span', 'insight-course-copy');
      text.append(
        element('span', 'insight-course-title', course.title || 'Untitled course'),
        element(
          'span',
          'insight-course-provider',
          `${course.provider || 'Provider not recorded'} · ${course.category || 'Category not recorded'}`,
        ),
      );
      const bar = element('span', 'insight-course-bar');
      bar.style.setProperty('--bar-size', `${(course.count / max) * 100}%`);
      bar.style.setProperty('--bar-ratio', String(course.count / max));
      bar.setAttribute('aria-hidden', 'true');
      button.append(
        element('span', 'insight-rank', String(index + 1).padStart(2, '0')),
        text,
        element('span', 'insight-course-count', number.format(course.count)),
        bar,
      );
      container.append(button);
    });
  }

  function monthName(month, short = false) {
    return new Intl.DateTimeFormat('en', {
      month: short ? 'short' : 'long',
      year: 'numeric',
      timeZone: 'UTC',
    }).format(new Date(`${month}-01T00:00:00Z`));
  }

  function monthWindow(months) {
    if (!months.length) return [];
    const counts = new Map(months.map(({ month, count }) => [month, count]));
    const first = months[0].month;
    let [year, month] = months.at(-1).month.split('-').map(Number);
    const result = [];
    // At most twelve calendar months. Zero gaps are explicit within the loaded snapshot.
    for (let index = 0; index < 12; index++) {
      const key = `${String(year).padStart(4, '0')}-${String(month).padStart(2, '0')}`;
      if (key < first) break;
      result.unshift({ month: key, count: counts.get(key) || 0 });
      if (--month === 0) {
        month = 12;
        year--;
      }
    }
    return result;
  }

  function svgNode(tag, attributes) {
    const node = document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (const [name, value] of Object.entries(attributes)) node.setAttribute(name, String(value));
    return node;
  }

  function renderTrend(summary) {
    const container = find('[data-insight-trend]');
    container.replaceChildren();
    const byStart = control('dateField').value === 'start';
    find('[data-insight-trend-label]').textContent = byStart
      ? 'Course starts by month'
      : 'Requests by month';
    find('[data-insight-trend-caption]').textContent = byStart
      ? 'Grouped by course start date'
      : 'Grouped by request creation date';
    const months = monthWindow(summary.months);
    const missing = summary.undated
      ? ` ${plural(summary.undated, 'request')} without this date excluded from the chart.`
      : '';
    const optionsValue = options();
    const hasDateFilter = Boolean(optionsValue.from || optionsValue.to || optionsValue.month);
    const context = data.filter(records, { ...optionsValue, from: '', to: '', month: '' });
    const missingBeforeDateFilter = context.filter(
      (record) => !data.recordDate(record, optionsValue.dateField),
    ).length;
    const excluded = hasDateFilter
      ? ` Requests without the selected date are excluded by the date filter (${number.format(missingBeforeDateFilter)} in the other filters).`
      : '';
    find('[data-insight-trend-note]').textContent =
      `Latest twelve calendar months within the dated selection. Months between records with no requests are shown as zero.${missing}${excluded}`;
    if (!months.length) {
      container.append(element('p', 'insight-empty', 'No dated requests in this selection.'));
      return;
    }
    const svg = svgNode('svg', {
      viewBox: '0 0 600 192',
      class: 'insight-trend-svg',
      'aria-hidden': 'true',
    });
    const max = Math.max(1, ...months.map(({ count }) => count));
    for (const fraction of [0, 0.5, 1]) {
      const y = 163 - fraction * 135;
      svg.append(svgNode('line', { x1: 30, x2: 575, y1: y, y2: y, class: 'insight-grid-line' }));
    }
    const points = months.map((item, index) => ({
      ...item,
      x: months.length === 1 ? 300 : 30 + (index / (months.length - 1)) * 545,
      y: 163 - (item.count / max) * 135,
    }));
    if (points.length > 1)
      svg.append(
        svgNode('path', {
          d: points.map(({ x, y }, index) => `${index ? 'L' : 'M'} ${x} ${y}`).join(' '),
          class: 'insight-trend-line',
        }),
      );
    points.forEach(({ x, y, count, month }) => {
      const point = svgNode('circle', {
        cx: x,
        cy: y,
        r: 5,
        class: 'insight-trend-point',
        'data-month': month,
      });
      const tooltip = svgNode('title', {});
      tooltip.textContent = `${monthName(month)}: ${plural(count, 'request')}`;
      point.append(tooltip);
      svg.append(point);
      const text = svgNode('text', {
        x,
        y: Math.max(16, y - 13),
        'text-anchor': 'middle',
        class: 'insight-point-count',
      });
      text.textContent = number.format(count);
      svg.append(text);
    });
    const buttons = element('div', 'insight-months');
    buttons.style.setProperty('--month-count', months.length);
    months.forEach(({ month, count }) => {
      const button = element('button', 'insight-month');
      button.type = 'button';
      button.dataset.month = month;
      button.setAttribute('aria-pressed', String(state.month === month));
      button.title = `${monthName(month)}: ${plural(count, 'request')}. Click to filter.`;
      button.setAttribute('aria-label', button.title);
      button.append(
        element('span', '', monthName(month, true).split(' ')[0]),
        element('small', '', month.slice(0, 4)),
        element('span', 'insight-month-count', number.format(count)),
      );
      buttons.append(button);
    });
    container.append(svg, buttons);
  }

  function renderStatuses(summary) {
    const container = find('[data-insight-statuses]');
    container.replaceChildren();
    const counts = new Map(summary.statuses.map(({ status, count }) => [status, count]));
    const groups = [
      ['PENDING', 'Pending review', summary.pending],
      ...['APPROVED', 'COMPLETED', 'REJECTED', 'CANCELLED', 'DELETED'].map((status) => [
        status,
        label(status),
        counts.get(status) || 0,
      ]),
    ];
    if (counts.get('UNKNOWN')) groups.push(['UNKNOWN', 'Unknown', counts.get('UNKNOWN')]);
    const statusIcons = {
      PENDING: 'clock',
      APPROVED: 'check',
      COMPLETED: 'reader',
      REJECTED: 'close',
      CANCELLED: 'arrowLeft',
      DELETED: 'archive',
      UNKNOWN: 'fileText',
    };
    groups.forEach(([status, text, count]) => {
      const button = element('button', 'insight-status');
      button.type = 'button';
      button.dataset.statusFilter = status;
      button.setAttribute('aria-pressed', String(control('status').value === status));
      button.title = `${text}: ${plural(count, 'request')} of ${number.format(summary.count)} in this selection. Click to filter.`;
      button.append(
        icon(statusIcons[status]),
        element('span', 'insight-status-label', text),
        element('span', 'insight-status-count', number.format(count)),
      );
      const bar = element('span', 'insight-status-bar');
      bar.style.setProperty('--bar-size', `${summary.count ? (count / summary.count) * 100 : 0}%`);
      bar.style.setProperty('--bar-ratio', String(summary.count ? count / summary.count : 0));
      bar.setAttribute('aria-hidden', 'true');
      button.append(bar);
      container.append(button);
    });
  }

  function renderSelections() {
    const container = find('[data-insight-selections]');
    container.replaceChildren();
    const course = records.find((record) => record.courseKey === state.courseKey);
    for (const [name, value] of [
      ['courseKey', course ? `Course group: ${course.title || 'Untitled course'}` : ''],
      ['month', state.month ? `Month: ${monthName(state.month)}` : ''],
    ]) {
      if (!value) continue;
      const button = element('button', 'insight-selection', `${value} · Clear`);
      button.type = 'button';
      button.dataset.clearSelection = name;
      container.append(button);
    }
  }

  function renderPage() {
    const pages = Math.max(1, Math.ceil(filtered.length / state.pageSize));
    state.page = Math.min(state.page, pages);
    const start = (state.page - 1) * state.pageSize;
    const pageRows = filtered
      .slice(start, start + state.pageSize)
      .map((record) => rows.get(record.id));
    if (pageRows.length) tbody.replaceChildren(...pageRows);
    else {
      const row = element('tr');
      const cell = element(
        'td',
        'empty',
        records.length
          ? 'No requests match these filters. Reset filters to see all assigned records.'
          : 'No course requests are available for your assigned employees.',
      );
      cell.colSpan = 8;
      row.append(cell);
      tbody.replaceChildren(row);
    }
    find('[data-insight-record-count]').textContent =
      `${plural(filtered.length, 'matching request')} · ${filtered.length ? `${number.format(start + 1)}–${number.format(Math.min(start + state.pageSize, filtered.length))} shown` : '0 shown'}`;
    find('[data-insight-page-label]').textContent = `Page ${state.page} of ${pages}`;
    find('[data-insight-previous]').disabled = state.page <= 1;
    find('[data-insight-next]').disabled = state.page >= pages;
    find('[data-insight-export]').disabled =
      filtered.length === 0 || !find('[data-insight-filter-error]').hidden;
    root.querySelectorAll('[data-insight-sort]').forEach((button) => {
      button
        .closest('th')
        .setAttribute(
          'aria-sort',
          button.dataset.insightSort === state.sort.field
            ? state.sort.direction === 'asc'
              ? 'ascending'
              : 'descending'
            : 'none',
        );
      button.title = `Sort by ${button.textContent.trim()}`;
    });
  }

  function refresh() {
    if (!validRange()) return;
    filtered = data.sort(data.filter(records, options()), state.sort);
    const summary = data.aggregate(filtered, { dateField: control('dateField').value });
    find('[data-insight-summary]').textContent =
      `${plural(summary.count, 'request')} · ${plural(summary.students, 'employee')} · ${plural(summary.courses.length, 'course group')}`;
    renderDemand(summary);
    renderTrend(summary);
    renderStatuses(summary);
    renderSelections();
    renderPage();
  }

  function changed() {
    clearTimeout(debounce);
    const active = document.activeElement;
    const attribute = [
      'data-course-key',
      'data-month',
      'data-status-filter',
      'data-clear-selection',
    ].find((name) => active?.hasAttribute(name));
    const value = attribute ? active.getAttribute(attribute) : '';
    state.page = 1;
    refresh();
    if (attribute) {
      const replacement = [...root.querySelectorAll(`[${attribute}]`)].find(
        (node) => node.getAttribute(attribute) === value,
      );
      (replacement || form.querySelector('[type=reset]')).focus({ preventScroll: true });
    }
  }

  try {
    records = data.normalize(originalRows.map((row) => row.dataset));
    populateFilters();
    refresh();
    root.querySelectorAll('[data-insight-enhancement]').forEach((node) => {
      node.hidden = false;
    });
    find('[data-insight-fallback]').hidden = true;
    find('[data-insight-snapshot]').textContent =
      `Page snapshot loaded ${new Intl.DateTimeFormat('en', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date())}. Counts include all matching current states; employees are distinct recorded IDs.`;
  } catch (error) {
    console.error('Learning insights could not read its scalar data manifest.', error);
    find('[data-insight-fallback]').textContent =
      'Insights are unavailable. All records returned by Java are listed below.';
    return;
  }

  // This read-only form uses range validation, rather than the shared POST-form validator.
  document.addEventListener(
    'submit',
    (event) => {
      if (event.target !== form) return;
      event.preventDefault();
      event.stopPropagation();
      changed();
    },
    true,
  );
  form.addEventListener('input', (event) => {
    if (!['search', 'from', 'to'].includes(event.target.name)) return;
    if (['from', 'to'].includes(event.target.name)) state.month = '';
    clearTimeout(debounce);
    debounce = setTimeout(changed, 140);
  });
  form.addEventListener('change', (event) => {
    if (['dateField', 'from', 'to'].includes(event.target.name)) state.month = '';
    changed();
  });
  form.addEventListener('reset', () => {
    state.courseKey = '';
    state.month = '';
    setTimeout(() => {
      window.CATS_CONTROLS?.sync();
      changed();
    }, 0);
  });
  find('#insight-page-size').addEventListener('change', (event) => {
    state.pageSize = [25, 50, 100].includes(Number(event.target.value))
      ? Number(event.target.value)
      : 25;
    state.page = 1;
    renderPage();
  });
  root.addEventListener('click', (event) => {
    const target = event.target.closest(
      '[data-course-key],[data-month],[data-status-filter],[data-clear-selection],[data-insight-sort],[data-insight-previous],[data-insight-next]',
    );
    if (!target) return;
    if (target.hasAttribute('data-insight-sort')) {
      const field = target.dataset.insightSort;
      state.sort = {
        field,
        direction: state.sort.field === field && state.sort.direction === 'asc' ? 'desc' : 'asc',
      };
    } else if (
      target.hasAttribute('data-insight-previous') ||
      target.hasAttribute('data-insight-next')
    ) {
      state.page += target.hasAttribute('data-insight-previous') ? -1 : 1;
      renderPage();
      find('#history-title').scrollIntoView({ block: 'start' });
      return;
    } else if (target.dataset.courseKey)
      state.courseKey =
        state.courseKey === target.dataset.courseKey ? '' : target.dataset.courseKey;
    else if (target.dataset.month)
      state.month = state.month === target.dataset.month ? '' : target.dataset.month;
    else if (target.dataset.statusFilter) {
      const status = target.dataset.statusFilter;
      control('status').value = control('status').value === status ? '' : status;
      window.CATS_CONTROLS?.sync();
    } else if (target.dataset.clearSelection) state[target.dataset.clearSelection] = '';
    changed();
  });
  find('[data-insight-export]').addEventListener('click', () => {
    changed();
    if (!validRange() || !filtered.length) return;
    const blob = new Blob(['\uFEFF', data.toCsv(filtered)], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = element('a');
    link.href = url;
    link.download = `cats-assigned-requests-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
})();
