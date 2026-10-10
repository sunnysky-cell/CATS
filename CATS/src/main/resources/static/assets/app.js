/* Shared UI enhancement. Authentication, validation and writes belong to Java. */
(() => {
  'use strict';

  // The icon dock remains available at every width; workspace.js owns its flyout panels.
  document.querySelectorAll('.primary-nav a.active').forEach((link) => {
    link.setAttribute('aria-current', 'page');
  });

  document.querySelectorAll('.password-toggle').forEach((button) => {
    button.addEventListener('click', () => {
      const input = document.getElementById(button.getAttribute('aria-controls'));
      const visible = input.type === 'password';
      input.type = visible ? 'text' : 'password';
      button.textContent = visible ? 'Hide' : 'Show';
      button.setAttribute('aria-pressed', String(visible));
    });
  });
  const illustration = document.querySelector('[data-login-art]');
  if (illustration && window.CATS_SKETCHES) illustration.innerHTML = window.CATS_SKETCHES.general;

  // Text labels stay complete on small screens; no information is hidden to fit a table.
  document.querySelectorAll('table').forEach((table) => {
    const headers = [...table.querySelectorAll('thead th')].map((cell) => cell.textContent.trim());
    table.querySelectorAll('tbody tr').forEach((row) => {
      [...row.children].forEach((cell, index) => {
        if (cell.colSpan === 1 && !cell.dataset.label) cell.dataset.label = headers[index] || '';
      });
    });
  });
  document.querySelectorAll('table[data-searchable="true"]').forEach((table, index) => {
    if (table.closest('[data-record-view]')) return;
    const rows = [...table.querySelectorAll('tbody tr')].filter(
      (row) => !row.querySelector('[colspan]'),
    );
    if (!rows.length) return;
    const tools = document.createElement('div');
    tools.className = 'table-search';
    const label = document.createElement('label');
    label.htmlFor = `record-search-${index}`;
    label.textContent = 'Search records';
    const search = document.createElement('input');
    search.id = label.htmlFor;
    search.type = 'search';
    search.autocomplete = 'off';
    const count = document.createElement('span');
    count.className = 'muted';
    count.setAttribute('role', 'status');
    const clear = document.createElement('button');
    clear.type = 'button';
    clear.className = 'button text';
    clear.textContent = 'Clear search';
    clear.hidden = true;
    tools.append(label, search, count, clear);
    table.parentElement.before(tools);
    function filterRecords() {
      const query = search.value.trim().toLowerCase();
      let matched = 0;
      rows.forEach((row) => {
        // Inline category editors keep their meaningful names in input values.
        const values = [
          ...row.querySelectorAll('input:not([type=hidden]):not([type=checkbox]),select'),
        ].map((input) =>
          input.tagName === 'SELECT' ? input.selectedOptions[0]?.textContent : input.value,
        );
        const matches = `${row.textContent} ${values.join(' ')}`.toLowerCase().includes(query);
        row.hidden = !matches;
        if (matches) matched++;
      });
      count.textContent = `${matched} of ${rows.length} records shown`;
      clear.hidden = !query;
    }
    search.addEventListener('input', filterRecords);
    clear.addEventListener('click', () => {
      search.value = '';
      filterRecords();
      search.focus();
    });
    filterRecords();
  });
  document.querySelectorAll('.status-badge, .status-active, .status-disabled').forEach((status) => {
    const original = status.dataset.status || status.textContent.trim().toUpperCase();
    status.dataset.status = original;
    const label = document.createElement('span');
    label.textContent = original
      .toLowerCase()
      .replace(/_/g, ' ')
      .replace(/^./, (letter) => letter.toUpperCase());
    const mark = document.createElement('span');
    mark.setAttribute('aria-hidden', 'true');
    mark.innerHTML = window.CATS_ICONS?.statusIcon(original) || '';
    status.replaceChildren(mark, label);
  });

  // Browser validation follows the OS language. Render our own English summary for
  // simple forms, while retaining native constraints as the no-JavaScript fallback.
  document
    .querySelectorAll('form:not([data-application-form]):not([data-claim-form])')
    .forEach((form) => {
      form.noValidate = true;
      const inputs = [...form.elements].filter((input) => input.willValidate && !input.disabled);
      function clearError(input) {
        input.removeAttribute('aria-invalid');
        window.CATS_CONTROLS?.sync();
        form.querySelector('[data-native-errors]')?.remove();
      }
      inputs.forEach((input) => {
        input.addEventListener('input', () => clearError(input));
        input.addEventListener('change', () => clearError(input));
      });
      form.addEventListener(
        'submit',
        (event) => {
          const invalid = inputs.filter(
            (input) =>
              !input.validity.valid ||
              (input.required && input.type !== 'password' && !input.value.trim()),
          );
          if (!invalid.length) return;
          event.preventDefault();
          event.stopImmediatePropagation();
          const input = invalid[0];
          const label =
            input
              .closest('.field')
              ?.querySelector('label')
              ?.textContent.trim()
              .replace(/\s+/g, ' ') ||
            input.labels?.[0]?.textContent.trim() ||
            'the highlighted field';
          let summary = form.querySelector('[data-native-errors]');
          if (!summary) {
            summary = document.createElement('p');
            summary.className = 'error';
            summary.dataset.nativeErrors = '';
            summary.setAttribute('role', 'alert');
            form.prepend(summary);
          }
          summary.textContent =
            input.validity.valueMissing || !input.value.trim()
              ? `Please complete ${label.replace(/\s*\*$/, '')}.`
              : `Check ${label.replace(/\s*\*$/, '')} and enter a valid value.`;
          invalid.forEach((field) => field.setAttribute('aria-invalid', 'true'));
          window.CATS_CONTROLS?.close();
          window.CATS_CONTROLS?.sync();
          const target = input.hidden
            ? input.parentElement.querySelector('.paper-select-trigger')
            : input;
          target?.focus();
          target?.scrollIntoView({ block: 'center' });
        },
        true,
      );
    });

  // Confirm the exact native form and submit button, including its formaction and CSRF field.
  // Capturing before forms.js prevents a cancelled confirmation from showing "Submitting".
  let confirmedForm = null;
  let confirmation;
  function confirmSubmission(form, submitter) {
    if (!confirmation) {
      confirmation = document.createElement('dialog');
      confirmation.className = 'paper-dialog confirm-dialog';
      confirmation.innerHTML =
        '<form method="dialog"><h2>Confirm change</h2><p data-confirm-message></p><div class="actions"><button class="button secondary" value="cancel">Keep current</button><button class="button" value="confirm">Confirm</button></div></form>';
      document.body.append(confirmation);
    }
    confirmation.querySelector('[data-confirm-message]').textContent =
      submitter?.dataset.confirm || form.dataset.confirm;
    confirmation.returnValue = '';
    confirmation.showModal();
    confirmation.querySelector('[value=cancel]').focus();
    confirmation.addEventListener(
      'close',
      () => {
        if (confirmation.returnValue === 'confirm') {
          confirmedForm = form;
          form.requestSubmit(submitter || undefined);
        } else submitter?.focus();
      },
      { once: true },
    );
  }
  document.addEventListener(
    'submit',
    (event) => {
      const form = event.target;
      if (!form.dataset.confirm && !event.submitter?.dataset.confirm) return;
      if (confirmedForm === form) {
        confirmedForm = null;
        return;
      }
      event.preventDefault();
      event.stopImmediatePropagation();
      confirmSubmission(form, event.submitter);
    },
    true,
  );
})();
