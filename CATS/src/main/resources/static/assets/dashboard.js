/* The dashboard reads the existing, authorised HTML lists. It never submits decisions. */
(() => {
  'use strict';

  const dashboard = document.querySelector('#cats-dashboard');
  // The React workspace owns its snapshot request. Keep this version as a fallback.
  if (dashboard?.querySelector('[data-course-workspace]')) return;
  const workspace = dashboard?.querySelector('[data-dashboard-requests]');
  if (!workspace) return;

  const data = window.CATS_INSIGHTS_DATA;
  const identity = { role: dashboard.dataset.role, id: dashboard.dataset.userId };
  const sources = {
    EMPLOYEE: {
      route: '/employee/applications',
      marker: '#cats-student-data',
      row: '[data-dashboard-record]',
      identityField: 'userId',
      scope: 'current-year-course-start',
      detail: '/employee/applications/',
    },
    MANAGER: {
      route: '/manager/history',
      marker: '#cats-manager-data',
      row: '[data-insight-record]',
      identityField: 'managerId',
      scope: 'assigned-students',
      detail: '/manager/applications/',
    },
  };
  const source = sources[identity.role];
  const stateLabels = {
    APPLIED: ['Awaiting review', 'clock'],
    UPDATED: ['Updated · awaiting review', 'clock'],
    APPROVED: ['Approved', 'checkCircle'],
    COMPLETED: ['Completed', 'completed'],
    REJECTED: ['Rejected', 'rejected'],
    CANCELLED: ['Cancelled', 'cancelled'],
    DELETED: ['Deleted', 'trash'],
  };
  const pageSize = 9;
  const ui = {};
  for (const name of [
    'summary',
    'filters',
    'search',
    'status',
    'reset',
    'message',
    'error',
    'errorText',
    'retry',
    'cards',
    'empty',
    'emptyTitle',
    'emptyText',
    'pagination',
    'pageLabel',
    'previous',
    'next',
    'snapshot',
    'sidebar',
    'students',
    'queueCount',
    'statusOverview',
    'upcoming',
  ]) {
    const attribute = name.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
    ui[name] = dashboard.querySelector(`[data-dashboard-${attribute}]`);
  }
  let records = [];
  let matching = [];
  let page = 1;
  let loaded = false;
  let loading = false;
  let searchTimer;
  let selectedStudentId = '';
  const dayFormat = new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  });

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function icon(name) {
    const node = element('span', 'dashboard-icon');
    node.setAttribute('aria-hidden', 'true');
    // Only local icon-library markup goes through innerHTML; record values use textContent.
    if (window.CATS_ICONS) node.innerHTML = window.CATS_ICONS.icon(name);
    return node;
  }

  function avatar(name) {
    const node = element('span', 'user-avatar');
    node.dataset.avatarName = name;
    node.setAttribute('aria-hidden', 'true');
    return node;
  }

  function accountMatches(documentToCheck) {
    const account = documentToCheck.querySelector('.sidebar-identity[data-cats-role]');
    return (
      account?.dataset.catsRole === identity.role && account.dataset.catsUserId === identity.id
    );
  }

  function readSnapshot(html) {
    const responseDocument = new DOMParser().parseFromString(html, 'text/html');
    if (!accountMatches(responseDocument)) {
      throw new Error(
        'Your session has changed or expired. Open the request list to sign in again.',
      );
    }
    const manifest = responseDocument.querySelector(source.marker);
    if (
      !manifest ||
      manifest.dataset.schemaVersion !== String(data.schemaVersion) ||
      manifest.dataset.role !== identity.role ||
      manifest.dataset[source.identityField] !== identity.id ||
      manifest.dataset.scope !== source.scope
    ) {
      throw new Error(
        'The service returned an unexpected request snapshot. Open the request list to check it.',
      );
    }
    const rows = Array.from(manifest.querySelectorAll(source.row), (row) => {
      const record = {};
      for (const field of data.fields) {
        if (!Object.hasOwn(row.dataset, field)) {
          throw new Error(
            'A request is missing a required snapshot field. Open the request list to check it.',
          );
        }
        record[field] = row.dataset[field];
      }
      return record;
    });
    const normalised = data.normalize(rows);
    if (
      identity.role === 'EMPLOYEE' &&
      normalised.some((record) => record.applicantId !== identity.id)
    ) {
      throw new Error(
        'The returned requests do not match this account. Open the request list to check your session.',
      );
    }
    return data.sort(normalised, { field: 'created', direction: 'desc' });
  }

  function dateLabel(value) {
    return value ? dayFormat.format(new Date(`${value.slice(0, 10)}T00:00:00Z`)) : 'Not recorded';
  }

  function decimalLabel(value) {
    if (value == null) return 'Not recorded';
    const [integer, fraction] = value.split('.');
    const grouped = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return fraction === undefined ? grouped : `${grouped}.${fraction}`;
  }

  function detailRow(list, label, value, iconName) {
    const row = element('div');
    const term = element('dt');
    if (iconName) term.append(icon(iconName));
    term.append(document.createTextNode(label));
    row.append(term, element('dd', '', value));
    list.append(row);
  }

  function courseCard(record, position) {
    const card = element('article', `dashboard-course-card dashboard-tone-${position % 5}`);
    const band = element('div', 'dashboard-card-band');
    band.append(icon('reader'), element('span', '', record.category || 'Category not set'));
    band.append(element('span', 'dashboard-reference', `#${record.id}`));
    const body = element('div', 'dashboard-card-body');
    body.append(element('h3', '', record.title || 'Untitled request'));
    body.append(element('p', 'dashboard-provider', record.provider || 'Provider not recorded'));
    if (identity.role === 'MANAGER') {
      const student = element('p', 'dashboard-student');
      student.append(
        avatar(record.learner || ''),
        document.createTextNode(record.learner || 'Employee name not recorded'),
      );
      body.append(student);
    }
    const details = element('dl', 'dashboard-card-details');
    detailRow(
      details,
      'Course dates',
      `${dateLabel(record.start)} – ${dateLabel(record.end)}`,
      'calendar',
    );
    detailRow(details, 'Requested', dateLabel(record.created), 'clock');
    detailRow(details, 'Course fee', decimalLabel(record.fee), 'receipt');
    body.append(details);

    const footer = element('div', 'dashboard-card-footer');
    const [label, iconName] = stateLabels[record.status] || ['Status not recorded', 'fileText'];
    const status = element('span', 'dashboard-card-status');
    status.dataset.requestStatus = record.status;
    status.append(icon(iconName), document.createTextNode(label));
    const link = element('a', 'dashboard-detail-link', 'View request');
    link.href = `${source.detail}${record.id}`;
    link.setAttribute(
      'aria-label',
      `View request #${record.id}: ${record.title || 'Untitled request'}`,
    );
    link.append(icon('arrowRight'));
    footer.append(status, link);
    card.append(band, body, footer);
    return card;
  }

  function renderSummary() {
    const summary = data.aggregate(matching);
    const values = [
      [summary.count, 'Matching requests'],
      [summary.pending, 'Awaiting review'],
      identity.role === 'MANAGER'
        ? [summary.students, 'Employees with requests']
        : [summary.accepted, 'Approved or completed'],
    ];
    const fragment = document.createDocumentFragment();
    for (const [value, label] of values) {
      const item = element('div', 'dashboard-summary-item');
      item.append(element('strong', '', value.toLocaleString('en-GB')), element('span', '', label));
      fragment.append(item);
    }
    ui.summary.replaceChildren(fragment);
  }

  function renderSidebar() {
    const summary = data.aggregate(records);
    if (identity.role === 'MANAGER') {
      const students = new Map();
      for (const record of records) {
        if (!record.applicantId) continue;
        const student = students.get(record.applicantId) || {
          id: record.applicantId,
          name: record.learner || 'Name not recorded',
          count: 0,
        };
        student.count += 1;
        students.set(record.applicantId, student);
      }
      const fragment = document.createDocumentFragment();
      const ordered = [...students.values()].sort(
        (a, b) => b.count - a.count || a.name.localeCompare(b.name, 'en'),
      );
      for (const student of ordered.slice(0, 8)) {
        const row = element('button', 'dashboard-student-row');
        row.type = 'button';
        row.dataset.studentId = student.id;
        row.setAttribute('aria-pressed', String(selectedStudentId === student.id));
        row.append(avatar(student.name));
        const detail = element('span', 'dashboard-student-detail');
        detail.append(
          element('strong', '', student.name),
          element('span', '', `${student.count} ${student.count === 1 ? 'request' : 'requests'}`),
        );
        row.append(detail, icon('arrowRight'));
        row.addEventListener('click', () => {
          selectedStudentId = selectedStudentId === student.id ? '' : student.id;
          applyFilters();
          ui.students.querySelectorAll('[data-student-id]').forEach((button) => {
            button.setAttribute(
              'aria-pressed',
              String(button.dataset.studentId === selectedStudentId),
            );
          });
        });
        fragment.append(row);
      }
      if (!ordered.length)
        fragment.append(
          element('p', 'dashboard-side-empty', 'No employees with requests in this snapshot.'),
        );
      if (ordered.length > 8)
        fragment.append(
          element(
            'p',
            'dashboard-side-note',
            `Showing 8 of ${ordered.length} employees with requests. Open Learning insights for the full list.`,
          ),
        );
      ui.students.replaceChildren(fragment);
      ui.queueCount.textContent = `${summary.pending} ${summary.pending === 1 ? 'request awaits' : 'requests await'} review in this snapshot.`;
    } else {
      const fragment = document.createDocumentFragment();
      for (const { status, count } of summary.statuses) {
        if (!count) continue;
        const [label, iconName] = stateLabels[status] || ['Status not recorded', 'fileText'];
        const row = element('div', 'dashboard-overview-row');
        row.dataset.requestStatus = status;
        row.append(
          icon(iconName),
          element('span', '', label),
          element('strong', '', count.toLocaleString('en-GB')),
        );
        fragment.append(row);
      }
      const unknownCount =
        records.length - summary.statuses.reduce((sum, item) => sum + item.count, 0);
      if (unknownCount) {
        const row = element('div', 'dashboard-overview-row');
        row.append(
          icon('fileText'),
          element('span', '', 'Status not recorded'),
          element('strong', '', unknownCount.toLocaleString('en-GB')),
        );
        fragment.append(row);
      }
      if (!records.length)
        fragment.append(element('p', 'dashboard-side-empty', 'No current-year requests.'));
      ui.statusOverview.replaceChildren(fragment);
      // Java exposes course dates, not a server clock. Name the browser-local date used here.
      const now = new Date();
      const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
      const upcoming = data.sort(
        records.filter(
          (record) => record.status === 'APPROVED' && record.start && record.start >= today,
        ),
        { field: 'start', direction: 'asc' },
      )[0];
      const content = document.createDocumentFragment();
      if (upcoming) {
        content.append(
          element('h3', '', upcoming.title || 'Untitled request'),
          element('p', '', upcoming.provider || 'Provider not recorded'),
        );
        content.append(element('p', 'dashboard-upcoming-date', dateLabel(upcoming.start)));
        const link = element('a', 'text-link', 'View approved request');
        link.href = `${source.detail}${upcoming.id}`;
        link.append(icon('arrowRight'));
        content.append(link);
      } else
        content.append(
          element(
            'p',
            'dashboard-side-empty',
            'No approved course starts today or later in this snapshot.',
          ),
        );
      content.append(
        element(
          'p',
          'dashboard-side-note',
          'Based on course start dates and today on this device.',
        ),
      );
      ui.upcoming.replaceChildren(content);
    }
    ui.sidebar.hidden = false;
    window.CATS_AVATARS?.enhance(dashboard);
  }

  function renderPage() {
    const pages = Math.max(1, Math.ceil(matching.length / pageSize));
    page = Math.min(Math.max(1, page), pages);
    const offset = (page - 1) * pageSize;
    const fragment = document.createDocumentFragment();
    matching.slice(offset, offset + pageSize).forEach((record, index) => {
      fragment.append(courseCard(record, offset + index));
    });
    ui.cards.replaceChildren(fragment);
    window.CATS_AVATARS?.enhance(ui.cards);
    ui.empty.hidden = matching.length > 0;
    ui.emptyTitle.textContent = records.length
      ? 'No matching requests'
      : 'No requests in this snapshot';
    ui.emptyText.textContent = records.length
      ? 'Try another keyword or clear the status filter.'
      : identity.role === 'EMPLOYEE'
        ? 'You have no applications for courses starting in the current year. Create an application when you are ready.'
        : 'Your assigned employees have no course requests in the current snapshot.';
    ui.pagination.hidden = matching.length <= pageSize;
    ui.previous.disabled = page === 1;
    ui.next.disabled = page === pages;
    ui.pageLabel.textContent = `Showing ${offset + 1}–${Math.min(offset + pageSize, matching.length)} of ${matching.length.toLocaleString('en-GB')} matching requests`;
    ui.message.textContent = `${matching.length.toLocaleString('en-GB')} ${matching.length === 1 ? 'request' : 'requests'}${matching.length !== records.length ? ` match · ${records.length.toLocaleString('en-GB')} loaded` : ' loaded'}`;
  }

  function applyFilters() {
    if (!loaded) return;
    const search = ui.search.value.trim();
    const status = ui.status.value;
    matching = data.filter(records, {
      search,
      status: status ? status.split(',') : '',
      applicantId: selectedStudentId,
    });
    ui.reset.hidden = !search && !status && !selectedStudentId;
    page = 1;
    renderPage();
    renderSummary();
  }

  function showError(message) {
    loaded = false;
    ui.errorText.textContent = message;
    ui.error.hidden = false;
    ui.message.hidden = true;
    for (const name of ['summary', 'filters', 'empty', 'pagination', 'snapshot', 'sidebar']) {
      ui[name].hidden = true;
    }
    ui.cards.replaceChildren();
  }

  async function load() {
    if (loading) return;
    if (!data || !source || !/^\d+$/.test(identity.id || '') || !accountMatches(document)) {
      showError(
        'The dashboard cannot verify this account. Open the request list to check your session.',
      );
      return;
    }
    loading = true;
    ui.retry.disabled = true;
    ui.error.hidden = true;
    ui.message.hidden = false;
    ui.message.textContent = 'Loading your request snapshot…';
    workspace.setAttribute('aria-busy', 'true');
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      // Role routes are fixed. Redirects, changed identities and malformed snapshots are errors, not empty lists.
      const response = await fetch(source.route, {
        method: 'GET',
        credentials: 'same-origin',
        cache: 'no-store',
        headers: { Accept: 'text/html' },
        signal: controller.signal,
      });
      const location = new URL(response.url);
      if (location.origin !== window.location.origin || location.pathname !== source.route) {
        throw new Error(
          'Your session has changed or expired. Open the request list to sign in again.',
        );
      }
      if (response.status !== 200) {
        throw new Error(
          `The service could not load your requests (${response.status}). Try again or open the request list.`,
        );
      }
      records = readSnapshot(await response.text());
      loaded = true;
      matching = records;
      ui.summary.hidden = false;
      ui.filters.hidden = records.length === 0;
      ui.snapshot.hidden = false;
      const time = new Intl.DateTimeFormat('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }).format(new Date());
      ui.snapshot.textContent = `Snapshot loaded ${time} · ${identity.role === 'EMPLOYEE' ? 'Courses starting in the current server year' : 'Assigned employees only'} · Card pages use the loaded records.`;
      window.CATS_CONTROLS?.enhance(workspace);
      renderSidebar();
      applyFilters();
    } catch (error) {
      showError(
        error.name === 'AbortError'
          ? 'The service is taking too long to respond. Try again or open the request list.'
          : error instanceof TypeError
            ? 'The request list could not be reached. Check the service, then try again.'
            : error.message,
      );
    } finally {
      clearTimeout(timeout);
      workspace.removeAttribute('aria-busy');
      loading = false;
      ui.retry.disabled = false;
    }
  }

  ui.search.addEventListener('input', () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(applyFilters, 120);
  });
  ui.status.addEventListener('change', applyFilters);
  ui.reset.addEventListener('click', () => {
    clearTimeout(searchTimer);
    ui.search.value = '';
    ui.status.value = '';
    selectedStudentId = '';
    ui.students
      ?.querySelectorAll('[data-student-id]')
      .forEach((button) => button.setAttribute('aria-pressed', 'false'));
    window.CATS_CONTROLS?.sync();
    applyFilters();
    ui.search.focus();
  });
  ui.previous.addEventListener('click', () => {
    page -= 1;
    renderPage();
  });
  ui.next.addEventListener('click', () => {
    page += 1;
    renderPage();
  });
  ui.retry.addEventListener('click', load);
  load();
})();
