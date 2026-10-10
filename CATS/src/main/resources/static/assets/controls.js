/* Paper controls keep their original form fields, so filtering and drafts stay ordinary HTML. */
(() => {
  'use strict';

  const selects = [];
  const dates = [];
  const enhanced = new WeakSet();
  let openControl = null;
  let controlId = 0;
  let positionFrame = 0;
  const monthName = new Intl.DateTimeFormat('en-GB', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
  const spokenDate = new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
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
    if (window.CATS_ICONS) return window.CATS_ICONS.icon(name);
    const paths = {
      chevronDown: '<path d="m7 10 5 5 5-5"/>',
      chevronLeft: '<path d="m14 7-5 5 5 5"/>',
      chevronRight: '<path d="m10 7 5 5-5 5"/>',
      check: '<path d="m5 12 4 4 10-10"/>',
      calendar: '<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v4m8-4v4M4 10h16"/>',
    };
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`;
  }

  function button(className, label, iconName) {
    const node = element('button', className);
    node.type = 'button';
    if (iconName) {
      node.innerHTML = icon(iconName);
      node.setAttribute('aria-label', label);
    } else node.textContent = label;
    return node;
  }

  function fieldLabel(field) {
    if (field.hasAttribute('aria-label')) return field.getAttribute('aria-label');
    const label = field.labels?.[0];
    if (!label) return 'Choose an option';
    const copy = label.cloneNode(true);
    copy
      .querySelectorAll('select, input, .application-label-note')
      .forEach((node) => node.remove());
    return copy.textContent.replace(/\s+/g, ' ').trim();
  }

  function closeControl(restoreFocus = false) {
    if (!openControl) return;
    const control = openControl;
    openControl = null;
    control.panel.hidden = true;
    control.trigger.setAttribute('aria-expanded', 'false');
    control.trigger.removeAttribute('aria-activedescendant');
    if (restoreFocus && control.trigger.isConnected) control.trigger.focus({ preventScroll: true });
  }

  function positionControl(control) {
    if (!control || control.panel.hidden) return;
    if (!control.anchor.getClientRects().length) {
      closeControl();
      return;
    }
    const rect = control.anchor.getBoundingClientRect();
    if (rect.bottom <= 0 || rect.top >= window.innerHeight) {
      closeControl();
      return;
    }
    const margin = 12;
    const gap = 6;
    const availableWidth = window.innerWidth - margin * 2;
    const preferredWidth = control.kind === 'date' ? 306 : Math.max(rect.width, control.width);
    const width = Math.min(preferredWidth, availableWidth);
    control.panel.style.width = `${width}px`;
    const below = window.innerHeight - rect.bottom - margin - gap;
    const above = rect.top - margin - gap;
    const desiredHeight = control.kind === 'date' ? 380 : Math.min(control.panel.scrollHeight, 210);
    const showAbove = below < desiredHeight && above > below;
    const availableHeight = Math.max(96, showAbove ? above : below);
    control.panel.style.maxHeight = `${Math.min(control.kind === 'date' ? 410 : 288, availableHeight)}px`;
    const height = control.panel.getBoundingClientRect().height;
    const alignedLeft = control.alignEnd ? rect.right - width : rect.left;
    const left = Math.max(margin, Math.min(alignedLeft, window.innerWidth - width - margin));
    const top = showAbove ? rect.top - height - gap : rect.bottom + gap;
    control.panel.style.left = `${left}px`;
    control.panel.style.top = `${Math.max(margin, top)}px`;
  }

  function open(control) {
    closeControl();
    openControl = control;
    control.panel.hidden = false;
    control.trigger.setAttribute('aria-expanded', 'true');
    positionControl(control);
  }

  function announceChange(field) {
    field.dispatchEvent(new Event('input', { bubbles: true }));
    field.dispatchEvent(new Event('change', { bubbles: true }));
  }

  function enhanceSelect(select) {
    if (enhanced.has(select)) return;
    enhanced.add(select);
    const label = fieldLabel(select);
    const id = `paper-select-${++controlId}`;
    const wrapper = element('span', 'paper-select');
    const trigger = button('paper-select-trigger', '');
    trigger.id = `${id}-trigger`;
    trigger.setAttribute('role', 'combobox');
    trigger.setAttribute('aria-haspopup', 'listbox');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('aria-controls', id);
    const value = element('span', 'paper-select-value');
    trigger.append(value);
    const arrow = element('span', 'paper-select-arrow');
    arrow.innerHTML = icon('chevronDown');
    trigger.append(arrow);
    const panel = element('div', 'paper-popover paper-options');
    panel.id = id;
    panel.hidden = true;
    panel.setAttribute('role', 'listbox');
    panel.setAttribute('aria-label', label);
    select.before(wrapper);
    wrapper.append(select, trigger);
    select.classList.add('paper-select-native');
    select.hidden = true;
    select.tabIndex = -1;
    // Clicking the visible label should focus the replacement control.
    if (select.labels?.[0]) select.labels[0].htmlFor = trigger.id;
    (select.closest('dialog') || document.body).append(panel);

    let options = [];
    let optionNodes = [];
    let optionSignature = '';
    const control = {
      kind: 'select',
      anchor: wrapper.closest('.select-field') || wrapper,
      trigger,
      panel,
      width: 160,
      alignEnd: Boolean(wrapper.closest('.sort-field')),
      sync,
    };
    let activeIndex = Math.max(0, select.selectedIndex);
    let search = '';
    let searchTime = 0;

    function refreshOptions() {
      const next = [...select.options];
      const signature = JSON.stringify(
        next.map((option) => [option.value, option.textContent, option.disabled]),
      );
      if (signature === optionSignature) return;
      optionSignature = signature;
      options = next;
      panel.replaceChildren();
      optionNodes = options.map((option, index) => {
        const node = element('div', 'paper-option');
        node.id = `${id}-option-${index}`;
        node.setAttribute('role', 'option');
        node.setAttribute('aria-disabled', String(option.disabled));
        node.append(element('span', '', option.textContent));
        const check = element('span', 'paper-option-check');
        check.innerHTML = icon('check');
        node.append(check);
        panel.append(node);
        node.addEventListener('pointerdown', (event) => event.preventDefault());
        node.addEventListener('click', () => choose(index));
        node.addEventListener('pointermove', () => {
          if (!option.disabled) setActive(index, false);
        });
        return node;
      });
    }

    function sync() {
      refreshOptions();
      value.textContent = select.selectedOptions[0]?.textContent || 'Choose an option';
      trigger.setAttribute('aria-label', `${label}: ${value.textContent}`);
      trigger.disabled = select.disabled;
      trigger.setAttribute('aria-invalid', select.getAttribute('aria-invalid') || 'false');
      optionNodes.forEach((node, index) => {
        node.setAttribute('aria-selected', String(index === select.selectedIndex));
      });
      if (openControl === control) positionControl(control);
    }

    function setActive(index, scroll = true) {
      if (index < 0 || index >= options.length || options[index].disabled) return;
      activeIndex = index;
      optionNodes.forEach((node, i) => node.classList.toggle('is-active', i === index));
      trigger.setAttribute('aria-activedescendant', optionNodes[index].id);
      if (scroll) optionNodes[index].scrollIntoView({ block: 'nearest' });
    }

    function move(direction) {
      let index = activeIndex + direction;
      while (index >= 0 && index < options.length) {
        if (!options[index].disabled) {
          setActive(index);
          break;
        }
        index += direction;
      }
    }

    function showOptions() {
      sync();
      open(control);
      setActive(Math.max(0, select.selectedIndex));
    }

    function choose(index) {
      if (options[index].disabled) return;
      select.selectedIndex = index;
      sync();
      closeControl(true);
      announceChange(select);
    }

    trigger.addEventListener('click', () => {
      if (openControl === control) closeControl();
      else showOptions();
    });
    trigger.addEventListener('keydown', (event) => {
      const isOpen = openControl === control;
      if (event.key === 'Tab') {
        closeControl();
        return;
      }
      if (event.key === 'Escape') {
        if (isOpen) event.preventDefault();
        closeControl(true);
        return;
      }
      if (['ArrowDown', 'ArrowUp', 'Home', 'End', 'Enter', ' '].includes(event.key)) {
        event.preventDefault();
        if (!isOpen) showOptions();
        else if (event.key === 'Enter' || event.key === ' ') choose(activeIndex);
        else if (event.key === 'ArrowDown') move(1);
        else if (event.key === 'ArrowUp') move(-1);
        if (event.key === 'Home') setActive(options.findIndex((option) => !option.disabled));
        if (event.key === 'End') {
          const last = options.findLastIndex((option) => !option.disabled);
          setActive(last);
        }
        return;
      }
      if (event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey) {
        event.preventDefault();
        if (!isOpen) showOptions();
        const now = Date.now();
        search = now - searchTime > 600 ? event.key : search + event.key;
        searchTime = now;
        let match = options.findIndex(
          (option) =>
            !option.disabled &&
            option.textContent.trim().toLowerCase().startsWith(search.toLowerCase()),
        );
        // Repeating a letter cycles through matching options, as a native select does.
        if (match < 0 && [...search].every((letter) => letter === search[0])) {
          const order = options.map((_, index) => (activeIndex + index + 1) % options.length);
          match =
            order.find(
              (index) =>
                !options[index].disabled &&
                options[index].textContent.trim().toLowerCase().startsWith(event.key.toLowerCase()),
            ) ?? -1;
        }
        setActive(match);
      }
    });
    select.addEventListener('change', sync);
    sync();
    selects.push(control);
  }

  function parseDate(value) {
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
    if (!match || Number(match[1]) < 1) return null;
    const [year, month, day] = match.slice(1).map(Number);
    const date = new Date(0);
    date.setUTCFullYear(year, month - 1, day);
    date.setUTCHours(0, 0, 0, 0);
    return date.getUTCFullYear() === year &&
      date.getUTCMonth() === month - 1 &&
      date.getUTCDate() === day
      ? date
      : null;
  }

  function isoDate(date) {
    return date.toISOString().slice(0, 10);
  }

  function today() {
    const now = new Date();
    return parseDate(
      `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`,
    );
  }

  function addDays(date, count) {
    const next = new Date(date);
    next.setUTCDate(next.getUTCDate() + count);
    return next;
  }

  function addMonths(date, count) {
    const next = new Date(date);
    const day = next.getUTCDate();
    next.setUTCDate(1);
    next.setUTCMonth(next.getUTCMonth() + count);
    const last = new Date(next);
    last.setUTCMonth(last.getUTCMonth() + 1, 0);
    next.setUTCDate(Math.min(day, last.getUTCDate()));
    return next;
  }

  function enhanceDate(input) {
    if (enhanced.has(input)) return;
    enhanced.add(input);
    const label = fieldLabel(input);
    const id = `paper-calendar-${++controlId}`;
    const wrapper = element('div', 'paper-date');
    const trigger = button('paper-date-trigger', `Choose ${label.toLowerCase()}`, 'calendar');
    trigger.setAttribute('aria-haspopup', 'dialog');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('aria-controls', id);
    const help = element(
      'span',
      'sr-only',
      'Enter a date as YYYY-MM-DD, or choose one from the calendar.',
    );
    help.id = `${id}-help`;
    input.type = 'text';
    input.placeholder = 'YYYY-MM-DD';
    input.maxLength = 10;
    input.pattern = '\\d{4}-\\d{2}-\\d{2}';
    input.autocomplete = 'off';
    input.spellcheck = false;
    input.setAttribute(
      'aria-describedby',
      `${input.getAttribute('aria-describedby') || ''} ${help.id}`.trim(),
    );
    input.before(wrapper);
    wrapper.append(input, trigger, help);

    const panel = element('div', 'paper-popover paper-calendar');
    panel.id = id;
    panel.hidden = true;
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', `Choose ${label.toLowerCase()}`);
    const header = element('div', 'paper-calendar-header');
    const previous = button('paper-calendar-nav', 'Previous month', 'chevronLeft');
    const next = button('paper-calendar-nav', 'Next month', 'chevronRight');
    const title = element('p', 'paper-calendar-title');
    title.id = `${id}-month`;
    title.setAttribute('aria-live', 'polite');
    header.append(previous, title, next);
    const grid = element('div', 'paper-calendar-grid');
    grid.setAttribute('role', 'grid');
    grid.setAttribute('aria-labelledby', title.id);
    const footer = element('div', 'paper-calendar-footer');
    const chooseToday = button('', 'Today');
    const clear = button('', 'Clear');
    footer.append(chooseToday, clear);
    panel.append(header, grid, footer);
    (input.closest('dialog') || document.body).append(panel);
    const control = { kind: 'date', anchor: wrapper, trigger, panel, sync };
    let activeDate = parseDate(input.value) || today();
    let visibleMonth = new Date(activeDate);

    function allowed(date) {
      const min = parseDate(input.min);
      const max = parseDate(input.max);
      const year = date.getUTCFullYear();
      return year >= 1 && year <= 9999 && (!min || date >= min) && (!max || date <= max);
    }

    function sync() {
      wrapper.classList.toggle('is-invalid', input.getAttribute('aria-invalid') === 'true');
      trigger.disabled = input.disabled;
      if (openControl === control) {
        activeDate = parseDate(input.value) || activeDate;
        visibleMonth = new Date(activeDate);
        renderCalendar();
      }
    }

    function renderCalendar(focusDay = false) {
      title.textContent = monthName.format(visibleMonth);
      previous.disabled = addMonths(visibleMonth, -1).getUTCFullYear() < 1;
      next.disabled = addMonths(visibleMonth, 1).getUTCFullYear() > 9999;
      grid.replaceChildren();
      const weekdays = element('div', 'paper-calendar-weekdays');
      weekdays.setAttribute('role', 'row');
      ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].forEach((day) => {
        const heading = element('span', '', day);
        heading.setAttribute('role', 'columnheader');
        weekdays.append(heading);
      });
      grid.append(weekdays);
      const first = new Date(visibleMonth);
      first.setUTCDate(1);
      const mondayOffset = (first.getUTCDay() + 6) % 7;
      const gridStart = addDays(first, -mondayOffset);
      const selected = parseDate(input.value);
      const todayValue = isoDate(today());
      let focusTarget = null;
      for (let week = 0; week < 6; week++) {
        const row = element('div', 'paper-calendar-week');
        row.setAttribute('role', 'row');
        for (let day = 0; day < 7; day++) {
          const date = addDays(gridStart, week * 7 + day);
          const value = isoDate(date);
          const cell = element('div', 'paper-calendar-cell');
          cell.setAttribute('role', 'gridcell');
          cell.setAttribute(
            'aria-selected',
            String(Boolean(selected && value === isoDate(selected))),
          );
          const dayButton = button('paper-calendar-day', String(date.getUTCDate()));
          dayButton.setAttribute('aria-label', spokenDate.format(date));
          dayButton.disabled = !allowed(date);
          dayButton.classList.toggle(
            'is-other-month',
            date.getUTCMonth() !== visibleMonth.getUTCMonth(),
          );
          dayButton.classList.toggle(
            'is-selected',
            Boolean(selected && value === isoDate(selected)),
          );
          if (value === todayValue) dayButton.setAttribute('aria-current', 'date');
          dayButton.tabIndex = value === isoDate(activeDate) && !dayButton.disabled ? 0 : -1;
          if (dayButton.tabIndex === 0) focusTarget = dayButton;
          dayButton.addEventListener('click', () => choose(date));
          dayButton.addEventListener('keydown', (event) => navigateDays(event, date));
          cell.append(dayButton);
          row.append(cell);
        }
        grid.append(row);
      }
      chooseToday.disabled = !allowed(today());
      positionControl(control);
      if (focusDay) (focusTarget || previous).focus({ preventScroll: true });
    }

    function choose(date) {
      input.value = date ? isoDate(date) : '';
      announceChange(input);
      sync();
      closeControl(true);
    }

    function navigateDays(event, date) {
      let destination;
      const steps = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 };
      if (event.key in steps) destination = addDays(date, steps[event.key]);
      if (event.key === 'Home') destination = addDays(date, -((date.getUTCDay() + 6) % 7));
      if (event.key === 'End') destination = addDays(date, 6 - ((date.getUTCDay() + 6) % 7));
      if (event.key === 'PageUp') destination = addMonths(date, event.shiftKey ? -12 : -1);
      if (event.key === 'PageDown') destination = addMonths(date, event.shiftKey ? 12 : 1);
      if (!destination) return;
      event.preventDefault();
      if (!allowed(destination)) return;
      activeDate = destination;
      visibleMonth = new Date(destination);
      renderCalendar(true);
    }

    trigger.addEventListener('click', () => {
      if (openControl === control) {
        closeControl(true);
        return;
      }
      activeDate = parseDate(input.value) || today();
      visibleMonth = new Date(activeDate);
      renderCalendar();
      open(control);
      renderCalendar(true);
    });
    previous.addEventListener('click', () => {
      visibleMonth = addMonths(visibleMonth, -1);
      activeDate = new Date(visibleMonth);
      renderCalendar();
    });
    next.addEventListener('click', () => {
      visibleMonth = addMonths(visibleMonth, 1);
      activeDate = new Date(visibleMonth);
      renderCalendar();
    });
    chooseToday.addEventListener('click', () => choose(today()));
    clear.addEventListener('click', () => choose(null));
    panel.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeControl(true);
      }
      if (event.key === 'Tab') {
        const stops = [...panel.querySelectorAll('button:not(:disabled)')].filter(
          (node) => node.tabIndex >= 0,
        );
        const leaving = event.shiftKey ? event.target === stops[0] : event.target === stops.at(-1);
        if (leaving) {
          event.preventDefault();
          closeControl();
          (event.shiftKey ? input : trigger).focus({ preventScroll: true });
        }
      }
    });
    input.addEventListener('input', sync);
    input.addEventListener('change', sync);
    // Validation messages are assigned by the application form, not by the picker.
    new MutationObserver(sync).observe(input, {
      attributes: true,
      attributeFilter: ['aria-invalid', 'disabled'],
    });
    sync();
    dates.push(control);
  }

  function enhance(root = document) {
    for (const collection of [selects, dates]) {
      for (let index = collection.length - 1; index >= 0; index--) {
        const control = collection[index];
        if (!control.trigger.isConnected) {
          if (openControl === control) closeControl();
          control.panel.remove();
          collection.splice(index, 1);
        }
      }
    }
    root.querySelectorAll('select').forEach(enhanceSelect);
    root.querySelectorAll('input[type="date"], input[data-paper-date]').forEach(enhanceDate);
  }
  enhance();
  ['design-start-date', 'design-end-date'].forEach((id) => {
    const input = document.getElementById(id);
    if (input) enhanceDate(input);
  });
  document.addEventListener('pointerdown', (event) => {
    if (
      openControl &&
      !openControl.panel.contains(event.target) &&
      !openControl.anchor.contains(event.target)
    ) {
      closeControl();
    }
  });
  document.addEventListener('keydown', (event) => {
    if (openControl && event.key === 'Escape') {
      event.preventDefault();
      closeControl(true);
    }
  });
  document.addEventListener('focusin', (event) => {
    if (
      openControl &&
      !openControl.panel.contains(event.target) &&
      !openControl.anchor.contains(event.target)
    ) {
      closeControl();
    }
  });
  function schedulePosition() {
    cancelAnimationFrame(positionFrame);
    positionFrame = requestAnimationFrame(() => positionControl(openControl));
  }
  window.addEventListener('resize', schedulePosition);
  window.addEventListener('scroll', schedulePosition, true);
  window.addEventListener('popstate', () => closeControl());
  window.CATS_CONTROLS = {
    enhance,
    sync() {
      [...selects, ...dates].forEach((control) => control.sync());
    },
    close: closeControl,
  };
})();
