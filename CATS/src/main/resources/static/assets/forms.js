/* Progressive enhancement only. Requests, ownership and final policy stay on the server. */
(() => {
  'use strict';

  const formatSgd = (value) =>
    `S$${Number.isFinite(Number(value)) ? Number(value).toLocaleString('en-SG', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '0.00'}`;
  const parseIsoDate = (value) => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value || '')) return null;
    const date = new Date(`${value}T00:00:00Z`);
    return Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== value ? null : date;
  };
  const formatDate = (value) => {
    const date = parseIsoDate(value);
    return date
      ? date.toLocaleDateString('en-SG', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
          timeZone: 'UTC',
        })
      : '';
  };
  const countWeekdays = (start, end) => {
    const days = Math.floor((end - start) / 86400000) + 1;
    const weeks = Math.floor(days / 7);
    let weekdays = weeks * 5;
    for (let offset = 0; offset < days % 7; offset++) {
      const day = (start.getUTCDay() + offset) % 7;
      if (day > 0 && day < 6) weekdays++;
    }
    return weekdays;
  };
  const setText = (selector, value, scope = document) => {
    const element = scope.querySelector(selector);
    if (element) element.textContent = value;
  };
  const focusField = (input) => {
    window.CATS_CONTROLS?.close();
    window.CATS_CONTROLS?.sync();
    // A select keeps its submitted value, while its visible combobox owns keyboard focus.
    const target = input.hidden
      ? input.parentElement.querySelector('.paper-select-trigger')
      : input;
    target?.focus();
    target?.scrollIntoView({ block: 'center', behavior: 'auto' });
  };

  document
    .querySelectorAll('[data-application-form],[data-claim-form]')
    .forEach(function initializeBusinessForm(form) {
      // Keep native required/type checks as the fallback when JavaScript is unavailable.
      form.noValidate = true;
      const isApplicationForm = form.hasAttribute('data-application-form');
      const getField = (name) => form.elements.namedItem(name);
      const inputs = [...form.querySelectorAll('input:not([type=hidden]),select,textarea')];
      const touched = new Set();
      let attempted = false;
      const category = getField('category.id');
      const fee = getField('courseFee');
      let previousPaidFee = fee?.value || '';
      let wasFree = false;
      const paidCategory = () => category?.selectedOptions[0]?.dataset.feeRequired === 'true';
      const freeCategory = () =>
        Boolean(category?.value) && category.selectedOptions[0]?.dataset.feeRequired === 'false';

      const updateCategory = () => {
        if (!isApplicationForm || !fee) return;
        const free = freeCategory();
        const paid = paidCategory();
        if (free && !wasFree) {
          previousPaidFee = fee.value;
          fee.value = '0.00';
        } else if (!free && wasFree) {
          fee.value = previousPaidFee;
        }
        wasFree = free;
        fee.readOnly = free;
        fee.required = paid;
        fee.min = paid ? '0.01' : '0';
        const mark = form.querySelector('[data-fee-required-mark]');
        if (mark) mark.hidden = !paid;
        setText(
          '[data-fee-hint]',
          free
            ? 'This category is free. The course fee is fixed at S$0.00.'
            : paid
              ? 'Enter the full course fee. This category requires an amount greater than zero.'
              : 'Choose a category to see its fee requirements.',
          form,
        );
      };

      const labelFor = (input) => {
        const custom = {
          courseTitle: 'Course title',
          'category.id': 'Course category',
          trainingProvider: 'Training provider',
          startDate: 'Start date',
          endDate: 'End date',
          courseFee: 'Course fee',
          justification: 'Course justification',
          claimAmount: 'Claim amount',
          receipt: 'Receipt file name',
          certificate: 'Certificate file name',
        };
        return custom[input.name] || 'This field';
      };
      const validateField = (input) => {
        input.setCustomValidity('');
        let message = '';
        if (input.validity.badInput)
          message =
            input.type === 'number' ? 'Enter a valid amount in SGD.' : 'Enter a valid value.';
        else if (input.required && !input.value.trim()) message = `${labelFor(input)} is required.`;
        else if (input.maxLength > 0 && input.value.length > input.maxLength)
          message = `Use ${input.maxLength} characters or fewer.`;
        else if (
          (input.type === 'date' ||
            input.hasAttribute('data-paper-date') ||
            ['startDate', 'endDate'].includes(input.name)) &&
          input.value
        ) {
          const date = parseIsoDate(input.value);
          if (!date) message = 'Enter a valid date.';
          else if (date.getUTCDay() === 0 || date.getUTCDay() === 6)
            message = 'Choose a working weekday, Monday to Friday.';
          else if (
            input.name === 'endDate' &&
            getField('startDate')?.value &&
            input.value < getField('startDate').value
          )
            message = 'End date cannot be earlier than start date.';
        } else if (input.type === 'number' && input.value !== '') {
          const amount = Number(input.value);
          if (!Number.isFinite(amount)) message = 'Enter a valid amount in SGD.';
          else if ((input.required && amount <= 0) || amount < 0)
            message = input.required
              ? 'Enter an amount greater than zero.'
              : 'The amount cannot be negative.';
          else if (input.max !== '' && amount > Number(input.max))
            message = `The claim cannot exceed the recorded fee of ${formatSgd(input.max)}.`;
          else if (Math.abs(amount * 100 - Math.round(amount * 100)) > 0.000001)
            message = 'Use no more than two decimal places.';
        }
        if (!message && input.validity.stepMismatch)
          message = 'Use no more than two decimal places.';
        if (!message && input.validity.rangeUnderflow)
          message = `Enter a value of ${input.min} or more.`;
        if (!message && input.validity.rangeOverflow)
          message = `Enter a value of ${input.max} or less.`;
        if (!message && input.validity.typeMismatch) message = 'Enter a valid value.';
        input.setCustomValidity(message);
        return message;
      };
      const showFieldError = (input) => {
        const message = validateField(input);
        const error = input.closest('.field')?.querySelector('[data-field-error]');
        input.setAttribute('aria-invalid', String(Boolean(message)));
        if (error) {
          error.textContent = message;
          error.hidden = !message;
        }
        return message;
      };
      const renderErrors = (errors) => {
        const summary = form.querySelector('[data-error-summary]');
        const list = summary?.querySelector('[data-error-list]');
        if (!summary || !list) return;
        list.replaceChildren();
        errors.forEach(({ input, message }) => {
          const item = document.createElement('li');
          const link = document.createElement('a');
          link.href = `#${input.id}`;
          link.textContent = `${labelFor(input)}: ${message}`;
          link.addEventListener('click', (event) => {
            event.preventDefault();
            focusField(input);
          });
          item.append(link);
          list.append(item);
        });
        summary.hidden = !errors.length;
      };
      const updateSummary = () => {
        if (!isApplicationForm) {
          setText('[data-claim-total]', formatSgd(getField('claimAmount')?.value || 0));
          return;
        }
        const start = parseIsoDate(getField('startDate')?.value);
        const end = parseIsoDate(getField('endDate')?.value);
        if (getField('endDate')) {
          if (getField('startDate')?.value) getField('endDate').min = getField('startDate').value;
          else getField('endDate').removeAttribute('min');
        }
        setText(
          '[data-summary="title"]',
          getField('courseTitle')?.value.trim() || 'No course title yet',
        );
        setText(
          '[data-summary="provider"]',
          getField('trainingProvider')?.value.trim() || 'Add a training provider',
        );
        setText(
          '[data-summary="category"]',
          category?.value ? category.selectedOptions[0].textContent.trim() : 'Not selected',
        );
        setText(
          '[data-summary="dates"]',
          start && end
            ? `${formatDate(getField('startDate').value)} to ${formatDate(getField('endDate').value)}`
            : start
              ? `From ${formatDate(getField('startDate').value)}`
              : 'Choose your dates',
        );
        setText(
          '[data-summary="days"]',
          start && end && end >= start
            ? `${countWeekdays(start, end)} before holidays`
            : 'Not calculated',
        );
        setText('[data-summary="fee"]', formatSgd(fee?.value || 0));
        const required = inputs.filter(
          (input) => input.required && !input.readOnly && !input.disabled,
        );
        const completed = required.filter(
          (input) => input.value.trim() && !validateField(input),
        ).length;
        setText('[data-progress-label]', `${completed} of ${required.length} fields`);
        setText(
          '[data-progress-message]',
          completed === required.length
            ? 'All required fields are complete. Review your application before submitting.'
            : 'Complete the required details to submit.',
        );
        const segments = document.querySelector('[data-progress-segments]');
        if (segments) {
          if (segments.children.length !== required.length) {
            segments.replaceChildren(...required.map(() => document.createElement('span')));
          }
          [...segments.children].forEach((segment, index) =>
            segment.classList.toggle('is-complete', index < completed),
          );
        }
        const count = form.querySelector('[data-character-count="justification"]');
        if (count) count.textContent = `${getField('justification')?.value.length || 0} / 2000`;
      };

      const prefillCatalog = () => {
        if (!isApplicationForm || form.dataset.isNew !== 'true') return;
        const courseId = new URLSearchParams(window.location.search).get('course');
        if (!courseId) return;
        const catalog = Array.isArray(window.CATS_COURSES) ? window.CATS_COURSES : [];
        const course = catalog.find((item) => String(item.id) === courseId);
        const note = document.querySelector('[data-catalog-note]');
        if (!course) {
          if (note) {
            note.hidden = false;
            note.textContent =
              'That catalog course is unavailable. Enter your course details below.';
          }
          return;
        }
        // Avoid replacing edits or a server validation response with catalog defaults.
        if (
          ['courseTitle', 'trainingProvider', 'startDate', 'endDate', 'justification'].some(
            (name) => getField(name)?.value.trim(),
          )
        )
          return;
        const values = {
          courseTitle: course.title || course.name || '',
          trainingProvider: course.provider || '',
          startDate: course.startDate || '',
          endDate: course.endDate || '',
          courseFee: course.fee ?? course.courseFee ?? '',
        };
        Object.entries(values).forEach(([name, value]) => {
          if (getField(name)) getField(name).value = String(value);
        });
        const requestedCategory = String(course.categoryName || course.category || '')
          .trim()
          .toLowerCase();
        const option = [...(category?.options || [])].find(
          (item) => item.value && item.textContent.trim().toLowerCase() === requestedCategory,
        );
        if (option) category.value = option.value;
        if (note) {
          note.hidden = false;
          note.textContent = `Course details added from the example catalog. Verify the provider, dates and fee, then add your reason for attending.${option ? '' : ' Choose an available course category before submitting.'}`;
        }
      };
      prefillCatalog();
      updateCategory();
      updateSummary();

      inputs.forEach((input) => {
        input.addEventListener('blur', () => {
          touched.add(input);
          showFieldError(input);
        });
        const update = () => {
          if (input === category) updateCategory();
          updateSummary();
          inputs.forEach((item) => {
            if (attempted || touched.has(item)) showFieldError(item);
          });
          if (attempted)
            renderErrors(
              inputs
                .map((item) => ({ input: item, message: validateField(item) }))
                .filter((item) => item.message),
            );
        };
        input.addEventListener('input', update);
        input.addEventListener('change', update);
      });
      form.addEventListener(
        'submit',
        (event) => {
          if (event.defaultPrevented) return;
          attempted = true;
          updateCategory();
          inputs
            .filter((input) => input.hasAttribute('data-validate-text'))
            .forEach((input) => {
              input.value = input.value.trim();
            });
          const errors = inputs
            .map((input) => ({ input, message: showFieldError(input) }))
            .filter((item) => item.message);
          renderErrors(errors);
          updateSummary();
          if (errors.length) {
            event.preventDefault();
            event.stopImmediatePropagation();
            focusField(errors[0].input);
          }
        },
        true,
      );
    });

  document
    .querySelectorAll('[data-processing-form]')
    .forEach(function initializeSubmitFeedback(form) {
      form.addEventListener(
        'submit',
        (event) => {
          if (event.defaultPrevented) return;
          if (form.dataset.requestSubmitting === 'true') {
            event.preventDefault();
            event.stopImmediatePropagation();
            return;
          }
          form.dataset.requestSubmitting = 'true';
          form.setAttribute('aria-busy', 'true');
          const submitter = event.submitter || form.querySelector('[type=submit]');
          if (submitter) {
            submitter.dataset.originalLabel = submitter.textContent;
            submitter.dataset.submitting = 'true';
            submitter.textContent = 'Submitting...';
            requestAnimationFrame(() => {
              submitter.disabled = true;
            });
          }
          setText('[data-submission-status]', 'Sending your request. Please wait.', form);
        },
        true,
      );
    });
  window.addEventListener('pageshow', () => {
    document
      .querySelectorAll('[data-processing-form]')
      .forEach(function initializeSubmitFeedback(form) {
        delete form.dataset.requestSubmitting;
        form.removeAttribute('aria-busy');
        form.querySelectorAll('[data-original-label]').forEach((button) => {
          button.textContent = button.dataset.originalLabel;
          button.disabled = false;
          delete button.dataset.submitting;
          delete button.dataset.originalLabel;
        });
        setText('[data-submission-status]', '', form);
      });
  });

  document.querySelectorAll('[data-record-view]').forEach(function initializeRecordFilters(view) {
    const rows = [...view.querySelectorAll('[data-record-row]')];
    const search = view.querySelector('[data-record-search]');
    const status = view.querySelector('select[data-record-status]');
    view.querySelectorAll('[data-status-count]').forEach((counter) => {
      const statuses = counter.dataset.statusCount.split(',');
      counter.textContent = String(
        rows.filter((row) => statuses.includes(row.dataset.recordStatus)).length,
      );
    });
    if (!search || !status) return;
    const update = () => {
      const query = search.value.trim().toLowerCase();
      const statuses = status.value ? status.value.split(',') : [];
      let count = 0;
      rows.forEach((row) => {
        const match =
          row.textContent.toLowerCase().includes(query) &&
          (!statuses.length || statuses.includes(row.dataset.recordStatus));
        row.hidden = !match;
        if (match) count++;
      });
      setText(
        '[data-record-results]',
        `${count} of ${rows.length} ${view.dataset.recordView} shown`,
        view,
      );
      const empty = view.querySelector('[data-record-empty]');
      if (empty) empty.hidden = count > 0;
    };
    search.addEventListener('input', update);
    status.addEventListener('change', update);
    view.querySelector('[data-record-reset]')?.addEventListener('click', () => {
      search.value = '';
      status.value = '';
      window.CATS_CONTROLS?.sync();
      update();
      search.focus();
    });
    update();
  });
  document.querySelector('[data-server-errors]')?.focus();
})();
