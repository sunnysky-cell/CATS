/* Shared by the browser and the read-only Agent bridge. No network calls or writes. */
(function (root, factory) {
  'use strict';
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.CATS_INSIGHTS_DATA = api;
})(typeof globalThis === 'object' ? globalThis : this, function () {
  'use strict';

  const statuses = [
    'APPLIED',
    'UPDATED',
    'APPROVED',
    'COMPLETED',
    'REJECTED',
    'CANCELLED',
    'DELETED',
  ];
  const fields = [
    'id',
    'title',
    'provider',
    'category',
    'applicantId',
    'learner',
    'start',
    'end',
    'created',
    'status',
    'fee',
    'days',
  ];
  const collator = new Intl.Collator('en', { numeric: true, sensitivity: 'base' });

  function date(value) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value || '')) return null;
    const parsed = new Date(`${value}T00:00:00Z`);
    return Number.isFinite(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value
      ? value
      : null;
  }

  function decimal(value) {
    const text = value == null ? '' : String(value).trim();
    return /^-?\d+(?:\.\d+)?$/.test(text) ? text : null;
  }

  function courseKey(record) {
    return JSON.stringify([record.title, record.provider, record.category]);
  }

  function normalize(records) {
    const ids = new Set();
    return records.map((source) => {
      const id = String(source.id ?? '').trim();
      const applicantId = String(source.applicantId ?? '').trim();
      if (!/^\d+$/.test(id)) throw new Error('An application has an invalid record ID.');
      if (ids.has(id)) throw new Error('The application snapshot contains duplicate record IDs.');
      ids.add(id);
      if (applicantId && !/^\d+$/.test(applicantId))
        throw new Error('An application has an invalid employee ID.');
      const created = String(source.created || '').trim();
      const record = {
        id,
        title: String(source.title || '').trim(),
        provider: String(source.provider || '').trim(),
        category: String(source.category || '').trim(),
        applicantId: applicantId || null,
        learner: String(source.learner || '').trim(),
        start: date(source.start),
        end: date(source.end),
        created:
          date(created.slice(0, 10)) &&
          /^\d{4}-\d{2}-\d{2}T(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d{1,9})?)?$/.test(created)
            ? created
            : null,
        status: String(source.status || 'UNKNOWN')
          .trim()
          .toUpperCase(),
        fee: decimal(source.fee),
        days: decimal(source.days),
      };
      // Index once, rather than joining all display fields on every keystroke.
      Object.defineProperty(record, 'searchText', {
        value: [id, record.title, record.provider, record.category, record.learner]
          .join(' ')
          .toLowerCase(),
      });
      Object.defineProperty(record, 'courseKey', { value: courseKey(record) });
      return record;
    });
  }

  function recordDate(record, dateField) {
    return dateField === 'start' ? record.start : record.created?.slice(0, 10) || null;
  }

  function filter(records, options = {}) {
    if (options.from && !date(options.from)) throw new RangeError('Enter a valid start date.');
    if (options.to && !date(options.to)) throw new RangeError('Enter a valid end date.');
    if (options.from && options.to && options.from > options.to)
      throw new RangeError('The end date must be on or after the start date.');
    if (options.month && !date(`${options.month}-01`))
      throw new RangeError('Enter a valid month in YYYY-MM format.');
    if (options.dateField && !['created', 'start'].includes(options.dateField))
      throw new RangeError('Choose request creation or course start as the date basis.');
    const search = String(options.search || '')
      .trim()
      .toLowerCase();
    const selectedStatuses = Array.isArray(options.status)
      ? options.status
      : options.status
        ? [options.status]
        : [];
    return records.filter((record) => {
      if (
        search &&
        !(
          record.searchText ||
          [record.id, record.title, record.provider, record.category, record.learner]
            .join(' ')
            .toLowerCase()
        ).includes(search)
      )
        return false;
      if (selectedStatuses.length && !selectedStatuses.includes(record.status)) return false;
      if (
        options.category != null &&
        options.category !== '' &&
        record.category !== options.category
      )
        return false;
      if (options.applicantId && record.applicantId !== String(options.applicantId)) return false;
      if (options.courseKey && (record.courseKey || courseKey(record)) !== options.courseKey)
        return false;
      const day = recordDate(record, options.dateField);
      if (options.from && (!day || day < options.from)) return false;
      if (options.to && (!day || day > options.to)) return false;
      if (options.month && (!day || day.slice(0, 7) !== options.month)) return false;
      return true;
    });
  }

  // Decimal totals use scaled integers. BigDecimal values never pass through a float.
  function sumDecimals(values) {
    const valid = values.map(decimal).filter((value) => value !== null);
    if (!valid.length) return null;
    const scale = valid.reduce(
      (maximum, value) => Math.max(maximum, (value.split('.')[1] || '').length),
      0,
    );
    let total = 0n;
    for (const value of valid) {
      const negative = value.startsWith('-');
      const [whole, fraction = ''] = value.replace(/^-/, '').split('.');
      const amount = BigInt(whole + fraction.padEnd(scale, '0'));
      total += negative ? -amount : amount;
    }
    const digits = (total < 0n ? -total : total).toString().padStart(scale + 1, '0');
    return `${total < 0n ? '-' : ''}${scale ? `${digits.slice(0, -scale)}.${digits.slice(-scale)}` : digits}`;
  }

  function aggregate(records, options = {}) {
    const students = new Set();
    const statusCounts = new Map(statuses.map((status) => [status, 0]));
    const courses = new Map();
    const months = new Map();
    let undated = 0;
    for (const record of records) {
      if (record.applicantId) students.add(record.applicantId);
      statusCounts.set(record.status, (statusCounts.get(record.status) || 0) + 1);
      const key = record.courseKey || courseKey(record);
      if (!courses.has(key))
        courses.set(key, {
          key,
          title: record.title,
          provider: record.provider,
          category: record.category,
          count: 0,
        });
      courses.get(key).count++;
      const day = recordDate(record, options.dateField);
      if (day) months.set(day.slice(0, 7), (months.get(day.slice(0, 7)) || 0) + 1);
      else undated++;
    }
    return {
      count: records.length,
      students: students.size,
      courses: [...courses.values()].sort(
        (a, b) =>
          b.count - a.count || collator.compare(a.title, b.title) || collator.compare(a.key, b.key),
      ),
      statuses: [...statusCounts].map(([status, count]) => ({ status, count })),
      months: [...months]
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([month, count]) => ({ month, count })),
      undated,
      pending: (statusCounts.get('APPLIED') || 0) + (statusCounts.get('UPDATED') || 0),
      accepted: (statusCounts.get('APPROVED') || 0) + (statusCounts.get('COMPLETED') || 0),
      fee: sumDecimals(records.map((record) => record.fee)),
      days: sumDecimals(records.map((record) => record.days)),
    };
  }

  function compareDecimals(a, b) {
    if (a === null || b === null) return a === b ? 0 : a === null ? 1 : -1;
    const difference = sumDecimals([a, b.startsWith('-') ? b.slice(1) : `-${b}`]);
    return /^-/.test(difference) ? -1 : /^0(?:\.0+)?$/.test(difference) ? 0 : 1;
  }

  function sort(records, options = {}) {
    const field = fields.includes(options.field) ? options.field : 'created';
    const direction = options.direction === 'asc' ? 1 : -1;
    return [...records].sort((a, b) => {
      const av = a[field],
        bv = b[field];
      // Missing values stay at the end in either direction.
      if (av == null || av === '' || bv == null || bv === '')
        return av === bv ? collator.compare(a.id, b.id) : av == null || av === '' ? 1 : -1;
      let compared;
      if (['fee', 'days'].includes(field)) compared = compareDecimals(av, bv);
      else if (['start', 'end', 'created'].includes(field)) {
        // Java LocalDateTime can omit zero seconds or use differing fractional precision.
        const key = (value) =>
          field === 'created'
            ? value.slice(0, 16) +
              ':' +
              (value.slice(17, 19) || '00') +
              '.' +
              (value.split('.')[1] || '').padEnd(9, '0')
            : value;
        const ak = key(av),
          bk = key(bv);
        compared = ak < bk ? -1 : ak > bk ? 1 : 0;
      } else compared = collator.compare(av, bv);
      return compared * direction || collator.compare(a.id, b.id);
    });
  }

  function csvCell(value, protectFormula = false) {
    let text = value == null ? '' : String(value);
    // Spreadsheet software must treat user-authored titles and names as text.
    if (protectFormula && /^[\s]*[=+\-@]/.test(text)) text = `'${text}`;
    return `"${text.replace(/"/g, '""')}"`;
  }

  function toCsv(records) {
    const header = [
      'Application ID',
      'Course',
      'Provider',
      'Category',
      'Employee ID',
      'Employee',
      'Start date',
      'End date',
      'Created at',
      'Status',
      'Course fee',
      'Training days',
    ];
    return (
      [
        header.map((cell) => csvCell(cell)).join(','),
        ...records.map((record) =>
          fields
            .map((field) =>
              csvCell(record[field], ['title', 'provider', 'category', 'learner'].includes(field)),
            )
            .join(','),
        ),
      ].join('\r\n') + '\r\n'
    );
  }

  return Object.freeze({
    schemaVersion: 1,
    fields,
    statuses,
    normalize,
    date,
    recordDate,
    courseKey,
    filter,
    sort,
    aggregate,
    sumDecimals,
    toCsv,
  });
});
