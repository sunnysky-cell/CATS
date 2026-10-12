/*
 * CATS assistant demo. It reads the same authorised HTML pages the user can open
 * (home allowance, application lists, request details) and applies fixed rules.
 * It never submits, approves or changes anything; Managers make every decision.
 */
(() => {
  'use strict';

  const panel = document.querySelector('[data-agent-chat-panel]');
  const opener = document.querySelector('[data-agent-chat-open]');
  if (!panel || !opener) return;

  const ACTIVE = ['APPLIED', 'UPDATED', 'APPROVED', 'COMPLETED'];
  const PENDING = ['APPLIED', 'UPDATED'];
  // Statuses CATS checks for date overlaps when an employee submits (CourseApplicationService).
  const OVERLAP_CHECKED = ['APPLIED', 'UPDATED', 'APPROVED'];
  const FEE_ANOMALY_RATIO = 1.5;
  const SOON_DAYS = 7;
  const NEAR_LIMIT = 0.8;
  const MIN_JUSTIFICATION = 60;
  const MAX_REVIEWED = 12;

  /* ---------- Reading CATS pages (GET only) ---------- */

  const loadPage = async (route) => {
    const response = await fetch(route, { credentials: 'same-origin', headers: { Accept: 'text/html' } });
    // A redirect (e.g. to /login) means the page was not available to this user.
    if (!response.ok || new URL(response.url).pathname !== route) throw new Error(`Could not read ${route}`);
    return new DOMParser().parseFromString(await response.text(), 'text/html');
  };

  const readRecords = (doc, selector) =>
    [...doc.querySelectorAll(selector)].map((row) => ({
      id: row.dataset.id,
      title: row.dataset.title || 'Untitled course',
      provider: row.dataset.provider || '',
      category: row.dataset.category || '',
      applicantId: row.dataset.applicantId || '',
      learner: row.dataset.learner || '',
      start: row.dataset.start || '',
      end: row.dataset.end || '',
      status: row.dataset.status || '',
      fee: Number(row.dataset.fee) || 0,
      days: Number(row.dataset.days) || 0,
    }));

  const readAllowance = async () => {
    const doc = await loadPage('/home');
    const values = doc.querySelectorAll('.dashboard-allowance-value strong');
    if (values.length < 2) return null;
    const number = (node) => Number(node.textContent.replace(/,/g, ''));
    return {
      year: doc.querySelector('.dashboard-entitlement-year')?.textContent.trim() || String(new Date().getFullYear()),
      days: number(values[0]),
      budget: number(values[1]),
    };
  };

  // Manager request page: "Days: 3.0 / 10.0    Budget used: 1200.00 / 2000.00" plus the justification.
  const readRequestDetail = async (id) => {
    const doc = await loadPage(`/manager/applications/${id}`);
    const usageTerm = [...doc.querySelectorAll('dt')].find((dt) => /used so far/i.test(dt.textContent));
    const usageText = usageTerm?.nextElementSibling?.textContent || '';
    const match = usageText.match(/Days:\s*([\d.]+)\s*\/\s*([\d.]+).*?Budget used:\s*([\d.]+)\s*\/\s*([\d.]+)/s);
    const objective = doc.querySelector('[aria-labelledby="learning-objective-title"]');
    return {
      usage: match && {
        usedDays: Number(match[1]),
        entitledDays: Number(match[2]),
        usedBudget: Number(match[3]),
        annualBudget: Number(match[4]),
      },
      justification: objective?.querySelector('p')?.textContent.trim() || '',
      hasSharingPlan: Boolean(objective?.querySelector('div p')?.textContent.trim()),
    };
  };

  /* ---------- Shared rule helpers ---------- */

  const toDate = (value) => (value ? new Date(`${value}T00:00:00`) : null);
  const todayIso = () => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  };
  const isWeekend = (value) => [0, 6].includes(toDate(value)?.getDay());
  const overlaps = (a, b) => a.start && a.end && b.start && b.end && a.start <= b.end && b.start <= a.end;
  const formatDate = (value) =>
    toDate(value)?.toLocaleDateString('en-SG', { day: 'numeric', month: 'short', year: 'numeric' }) || value;
  const dateRange = (item) => (item.start === item.end ? formatDate(item.start) : `${formatDate(item.start)} – ${formatDate(item.end)}`);
  const money = (amount) => `S$${amount.toLocaleString('en-SG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  const daysLabel = (n) => `${n} day${n === 1 ? '' : 's'}`;

  // Weekdays only; public holidays are checked by CATS when the request is saved.
  const estimateDays = (start, end, halfDay) => {
    if (!start || !end || end < start) return 0;
    if (halfDay) return 0.5;
    let count = 0;
    for (let day = toDate(start); day <= toDate(end); day.setDate(day.getDate() + 1)) {
      if (![0, 6].includes(day.getDay())) count += 1;
    }
    return count;
  };

  const daysUntil = (value) => Math.round((toDate(value) - toDate(todayIso())) / 864e5);

  // Employee preview of the date rules CATS enforces on submission, so problems show before Submit.
  const dateFlags = (item, others) => {
    const flags = [];
    if (item.start && item.start <= todayIso()) flags.push(`Must start after today (${formatDate(item.start)} is too early).`);
    if (isWeekend(item.start) || isWeekend(item.end)) flags.push('Starts or ends on a weekend.');
    others
      .filter((other) => other.id !== item.id && OVERLAP_CHECKED.includes(other.status) && overlaps(item, other))
      .forEach((other) => flags.push(`Dates overlap your “${other.title}” (${dateRange(other)}, ${other.status.toLowerCase()}).`));
    return flags;
  };

  /* ---------- Employee: justification drafting and allowance check ---------- */

  const readApplicationForm = () => {
    const form = document.querySelector('form textarea[name="justification"]')?.form;
    if (!form) return null;
    const field = (name) => form.elements.namedItem(name);
    const category = field('category.id');
    const start = field('startDate')?.value || '';
    const end = field('endDate')?.value || '';
    const halfDay = Boolean(field('halfDay')?.checked);
    return {
      id: location.pathname.match(/\/employee\/applications\/(\d+)\/edit/)?.[1] || null,
      title: field('courseTitle')?.value.trim() || '',
      provider: field('trainingProvider')?.value.trim() || '',
      category: category?.selectedOptions?.[0]?.value ? category.selectedOptions[0].textContent.trim() : '',
      start,
      end,
      fee: Number(field('courseFee')?.value) || 0,
      days: estimateDays(start, end, halfDay),
      notes: field('justification')?.value.trim() || '',
      justificationField: field('justification'),
      sharingField: field('workDissemination'),
    };
  };

  const allowanceFlags = (course, allowance) => {
    if (!allowance) return [];
    const flags = [];
    if (course.days > allowance.days)
      flags.push(`Needs ${daysLabel(course.days)} but you have ${daysLabel(allowance.days)} left in ${allowance.year}.`);
    if (course.fee > allowance.budget)
      flags.push(`Costs ${money(course.fee)} but your remaining budget is ${money(allowance.budget)}.`);
    return flags;
  };

  const loadEmployeeContext = () =>
    Promise.all([
      readAllowance().catch(() => null),
      loadPage('/employee/applications')
        .then((doc) => readRecords(doc, '[data-dashboard-record]'))
        .catch(() => []),
    ]);

  const openFormReply = (what) => ({
    text: `Open New application and fill in the course title, provider and dates first. Then ask me again and I will ${what} using your details and remaining allowance.`,
    actions: [{ label: 'Open application form', href: '/employee/applications/new', icon: 'arrowRight' }],
  });

  const draftJustification = async () => {
    const course = readApplicationForm();
    if (!course) return openFormReply('write a justification');
    const missing = [
      !course.title && 'course title',
      !course.start && 'start date',
      !course.end && 'end date',
    ].filter(Boolean);
    if (missing.length) return { text: `Please fill in the ${missing.join(', ')} on the form first, then ask me again.` };

    const [allowance, records] = await loadEmployeeContext();
    const flags = [...allowanceFlags(course, allowance), ...dateFlags(course, records)];
    // "External Course" → "external course", "Internal Training" → "internal training course".
    const kind = course.category.toLowerCase();
    const courseKind = !kind ? 'course' : /course$/.test(kind) ? kind : `${kind} course`;
    const sentences = [
      `I am applying to attend “${course.title}”${course.provider ? ` by ${course.provider}` : ''} from ${formatDate(course.start)} to ${formatDate(course.end)}.`,
      `This ${courseKind} builds practical skills I can apply directly in my current role, helping me deliver my work with better quality and less rework.`,
    ];
    // Keep the employee's own notes: they know the work context best.
    if (course.notes && course.notes.length < 400) sentences.push(`In particular, it supports my current work: ${course.notes.replace(/[.\s]+$/, '')}.`);
    if (allowance && !flags.some((flag) => /left in|remaining budget/.test(flag))) {
      sentences.push(
        `The course needs about ${daysLabel(course.days)}${course.fee ? ` and costs ${money(course.fee)}` : ''}, which fits within my remaining ${daysLabel(allowance.days)} and ${money(allowance.budget)} training budget for ${allowance.year}.`,
      );
    }
    if (!flags.some((flag) => /overlap/.test(flag))) sentences.push('The dates do not clash with my other pending or approved training.');
    const justification = sentences.join(' ');
    const sharing =
      'After the course I will run a short knowledge-sharing session for my team and share my notes and materials, so the learning benefits the wider team.';

    return {
      text: flags.length
        ? 'Here is a draft based on your form and allowance. CATS will reject the application when you submit unless you fix these points first:'
        : 'Here is a draft based on your form and remaining allowance. Your request looks within limits.',
      flags,
      draft: { justification, sharing },
      // A plain-data action so the message can be saved; the button fills whichever form is open.
      actions: [{ label: 'Use in form', icon: 'check', done: 'Added to form', fillDraft: true }],
    };
  };

  const fillDraft = (draft) => {
    const course = readApplicationForm();
    if (!course) return false;
    const fill = (field, value) => {
      if (!field) return;
      field.value = value.slice(0, Number(field.maxLength) > 0 ? field.maxLength : value.length);
      field.dispatchEvent(new Event('input', { bubbles: true }));
    };
    fill(course.justificationField, draft.justification);
    if (course.sharingField && !course.sharingField.value.trim()) fill(course.sharingField, draft.sharing);
    course.justificationField?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return true;
  };

  const checkAllowance = async () => {
    const [allowance, records] = await loadEmployeeContext();
    if (!allowance) return { text: 'Your training allowance has not been set for this year yet. Please ask your administrator to set it up.' };
    const pending = records.filter((record) => PENDING.includes(record.status)).length;
    const summary = `You have ${daysLabel(allowance.days)} and ${money(allowance.budget)} left for ${allowance.year}${pending ? ` (this already counts ${pending} request${pending === 1 ? '' : 's'} awaiting review)` : ''}.`;
    const course = readApplicationForm();
    if (!course || !course.start || !course.end) {
      return { text: `${summary} Open the application form with your course dates and I can check a specific course for you.` };
    }
    const flags = [...allowanceFlags(course, allowance), ...dateFlags(course, records)];
    const after = `After “${course.title || 'this course'}” (about ${daysLabel(course.days)}${course.fee ? `, ${money(course.fee)}` : ''}) you would have ${daysLabel(allowance.days - course.days)} and ${money(allowance.budget - course.fee)} left.`;
    return {
      text: `${summary} ${after}${flags.length ? '' : ' This course fits your allowance and dates.'}`,
      flags,
    };
  };

  /* ---------- Manager: review suggestions and suspicious flags ---------- */

  // CATS already rejects past or non-working dates, over-limit requests and overlaps with the
  // employee's own requests at submission, so the Manager checks cover what submission cannot see.
  const assessRequest = (request, allRequests, detail) => {
    const flags = [];
    if (request.start && request.start <= todayIso())
      flags.push(`Start date ${formatDate(request.start)} has passed while the request was waiting for review.`);

    // Team calendar: who else on this team is already approved for training in the same period.
    const away = allRequests.filter(
      (other) => other.applicantId !== request.applicantId && other.status === 'APPROVED' && overlaps(request, other),
    );
    if (away.length) {
      const names = [...new Set(away.map((other) => other.learner || 'A teammate'))];
      flags.push(`Team calendar: ${names.join(', ')} ${names.length === 1 ? 'is' : 'are'} already approved for training on overlapping dates (${away.map((other) => `“${other.title}”, ${dateRange(other)}`).join('; ')}).`);
    }

    const peers = allRequests.filter((other) => other.id !== request.id && other.category === request.category && other.fee > 0);
    if (request.fee > 0 && peers.length >= 2) {
      const average = peers.reduce((sum, other) => sum + other.fee, 0) / peers.length;
      if (request.fee > average * FEE_ANOMALY_RATIO)
        flags.push(`Fee ${money(request.fee)} is ${(request.fee / average).toFixed(1)}× the ${request.category || 'category'} average (${money(average)}).`);
    }
    const sameCourse = allRequests.find(
      (other) =>
        other.id !== request.id &&
        other.applicantId === request.applicantId &&
        ACTIVE.includes(other.status) &&
        other.title.trim().toLowerCase() === request.title.trim().toLowerCase(),
    );
    if (sameCourse) flags.push(`Same course requested before (#${sameCourse.id}, ${sameCourse.status.toLowerCase()}).`);

    const notes = [];
    const startsIn = request.start ? daysUntil(request.start) : null;
    if (startsIn !== null && startsIn > 0 && startsIn <= SOON_DAYS)
      notes.push(`Starts in ${daysLabel(startsIn)}. Decide soon so the employee can register.`);
    const usage = detail?.usage;
    if (usage && usage.entitledDays > 0 && usage.usedDays / usage.entitledDays >= NEAR_LIMIT)
      notes.push(`Uses most of the training days: ${usage.usedDays} of ${usage.entitledDays} including this request.`);
    if (usage && usage.annualBudget > 0 && usage.usedBudget / usage.annualBudget >= NEAR_LIMIT)
      notes.push(`Uses most of the budget: ${money(usage.usedBudget)} of ${money(usage.annualBudget)} including this request.`);
    if (detail) {
      if (detail.justification.length < MIN_JUSTIFICATION)
        notes.push(`Justification is brief (${detail.justification.length} characters). Ask how it helps their work.`);
      if (!detail.hasSharingPlan) notes.push('No plan to share the learning with the team.');
    } else {
      notes.push('Could not open the request details; check the allowance on the request page.');
    }

    const tone = flags.length ? 'risk' : notes.length ? 'check' : 'ok';
    return {
      title: request.title,
      meta: [request.learner, dateRange(request), request.fee ? money(request.fee) : ''].filter(Boolean).join(' · '),
      verdict: { risk: 'Needs attention', check: 'Approve after a quick check', ok: 'Suggest approve' }[tone],
      advice: {
        risk: 'hold this request and ask the employee about the flagged points before deciding',
        check: 'it can be approved once you have checked the notes below',
        ok: 'approve; nothing unusual was found',
      }[tone],
      tone,
      flags,
      notes,
      href: `/manager/applications/${request.id}`,
    };
  };

  const loadManagerRequests = async () => readRecords(await loadPage('/manager/history'), '[data-insight-record]');

  const reviewPending = async (onlySuspicious) => {
    const requests = await loadManagerRequests();
    const pending = requests.filter((request) => PENDING.includes(request.status)).slice(0, MAX_REVIEWED);
    if (!pending.length) return { text: 'There are no requests awaiting your review right now.' };
    const details = await Promise.all(pending.map((request) => readRequestDetail(request.id).catch(() => null)));
    const items = pending.map((request, index) => assessRequest(request, requests, details[index]));
    const risky = items.filter((item) => item.tone === 'risk');
    const shown = onlySuspicious ? risky : [...risky, ...items.filter((item) => item.tone !== 'risk')];
    const count = (n, word) => `${n} ${word}${n === 1 ? '' : 's'}`;
    const text = onlySuspicious
      ? risky.length
        ? `I checked ${count(pending.length, 'pending request')}. ${count(risky.length, 'request')} ${risky.length === 1 ? 'needs' : 'need'} a closer look:`
        : `I checked ${count(pending.length, 'pending request')} for team calendar clashes, expired dates, unusual fees and repeated courses. Nothing looks suspicious.`
      : `${count(pending.length, 'request')} awaiting your review. ${risky.length ? `${risky.length} need${risky.length === 1 ? 's' : ''} attention; ` : ''}my suggestions are below. The decision is still yours.`;
    return { text, items: shown };
  };

  const analyseCurrentRequest = async () => {
    const id = location.pathname.match(/^\/manager\/applications\/(\d+)\/?$/)?.[1];
    if (!id) {
      const reply = await reviewPending(false);
      return { ...reply, text: `Open a request to analyse it in detail. Meanwhile, here is your review queue. ${reply.text}` };
    }
    const [requests, detail] = await Promise.all([loadManagerRequests(), readRequestDetail(id)]);
    const request = requests.find((item) => item.id === id);
    if (!request) return { text: 'I could not find this request in your review history.' };
    const item = assessRequest(request, requests, detail);
    const strengths = [];
    if (detail.justification.length >= MIN_JUSTIFICATION) strengths.push('the justification explains the purpose in some detail');
    if (detail.hasSharingPlan) strengths.push('there is a plan to share the learning');
    if (detail.usage)
      strengths.push(`it stays within the allowance (${detail.usage.usedDays}/${detail.usage.entitledDays} days, ${money(detail.usage.usedBudget)}/${money(detail.usage.annualBudget)})`);
    return {
      text: `My suggestion: ${item.advice}.${strengths.length ? ` On the plus side, ${strengths.join('; ')}.` : ''} Record your own decision on this page.`,
      items: [{ ...item, href: null }],
    };
  };

  // Demo only: the upload button is a placeholder and does not read or send files.
  const RECOMMEND_PATTERN = /suggestion|suggest me|recommend|advice|advise|建议|推荐/;
  const recommendReply = {
    text: 'Sure! To suggest courses that suit you, please upload your CV or other personal files, such as certificates or your latest performance review. I will match your skills and goals with the CATS course catalog and your remaining training allowance.',
    actions: [{ label: 'Upload CV or files', icon: 'plus' }],
  };

  /* ---------- Assistants per role ---------- */

  const assistants = {
    EMPLOYEE: {
      name: 'Employee assistant',
      note: 'Live data · Suggestions only',
      greeting: 'Hi! I can draft your application justification from your course details and allowance, check your remaining days and budget, or explain claims.',
      prompts: ['Can you give me some suggestions?', 'Help me write my justification', 'Do I have enough days and budget?', 'How do I apply for a course?', 'How do fee claims work?'],
      reply(message) {
        if (RECOMMEND_PATTERN.test(message)) return recommendReply;
        if (/justif|reason|explain my|write|draft|理由|解释|说明|写/.test(message)) return draftJustification();
        if (/enough|afford|budget|remaining|allowance|left|预算|余额|剩余|额度|够/.test(message)) return checkAllowance();
        if (/claim|reimburse|fee|receipt|报销|费用/.test(message))
          return 'For a fee claim, open My fee claims and start a new claim for an approved course. Add the amount and receipt details, then submit it for your Manager to review.';
        if (/status|track|history|application|申请|进度/.test(message) && !/apply for/.test(message))
          return 'You can check the latest decision and course details on My applications. A submitted request stays pending until your Manager reviews it.';
        if (/course|apply|报名|课程/.test(message))
          return {
            text: 'Open New application, add the course name, provider, dates and estimated fee, then ask me to draft your justification. I will check it against your allowance before you submit.',
            actions: [{ label: 'Open application form', href: '/employee/applications/new', icon: 'arrowRight' }],
          };
        return 'I can draft your justification, check your remaining allowance, or explain applications and claims. Try one of the suggested questions.';
      },
    },
    MANAGER: {
      name: 'Manager assistant',
      note: 'Live data · Suggestions only',
      greeting: 'Hello! I can review your pending requests, flag anything unusual (limits, date clashes, fees) and suggest a decision. You make the final call.',
      prompts: ['Can you give me some suggestions?', 'Review my pending requests', 'Flag suspicious requests', 'Analyse this request', 'What should I check before approving?'],
      reply(message) {
        if (RECOMMEND_PATTERN.test(message)) return recommendReply;
        if (/analy|this request|this one|这个|这条|分析/.test(message)) return analyseCurrentRequest();
        if (/suspicious|flag|risk|unusual|fraud|可疑|风险|异常/.test(message)) return reviewPending(true);
        if (/pending|queue|awaiting|review my|待审|待处理/.test(message)) return reviewPending(false);
        if (/approve|check|criteria|决定|审批/.test(message))
          return 'CATS already rejects past or weekend dates, over-limit requests and clashes with the employee’s own training when they submit. I check what it cannot: whether teammates are already approved for training on the same dates, whether the start date passed while the request waited, whether the fee is unusually high for its category or the course was requested before, and whether the justification explains the work benefit. Ask me to review your pending requests to see this applied.';
        if (/report|trend|demand|insight|分析|总结/.test(message))
          return 'Learning insights lets you filter assigned requests and compare course demand, dates and application status.';
        return 'I can review your pending requests, flag suspicious ones, or analyse the request you have open. Try a suggested question.';
      },
    },
    ADMIN: {
      name: 'Admin assistant',
      note: 'Admin support · Demo replies',
      greeting: 'Welcome! I can point you to account, course category and public holiday settings.',
      prompts: ['How do I add a course category?', 'Where are user accounts managed?', 'How do I update public holidays?'],
      reply(message) {
        if (/categor|category|类别|分类/.test(message))
          return 'Open Categories from the navigation to add or edit a course category. You can also deactivate categories that should no longer appear in new applications.';
        if (/user|account|people|用户|账号/.test(message))
          return 'Open People & access to manage CATS accounts and their roles. Check a person’s role and reporting relationship before saving changes.';
        if (/holiday|calendar|假期|日历/.test(message))
          return 'Use Public holidays to maintain non-working dates, and Training calendar to review approved course dates. Changes to holidays affect working-day calculations.';
        return 'I can help with user accounts, course categories, and public holidays. Try a suggested question to see this admin demo.';
      },
    },
  };

  const assistant = assistants[panel.dataset.currentRole];
  if (!assistant) return;

  /* ---------- Chat UI ---------- */

  const messages = panel.querySelector('[data-agent-messages]');
  const suggestions = panel.querySelector('[data-agent-suggestions]');
  const helpList = panel.querySelector('[data-agent-help-list]');
  const quickList = panel.querySelector('[data-agent-quick-list]');
  const form = panel.querySelector('[data-agent-chat-form]');
  const input = form.querySelector('textarea');
  const pages = [...panel.querySelectorAll('[data-agent-page]')];
  const views = [...panel.querySelectorAll('[data-agent-view]')];
  const conversations = [{ from: 'assistant', text: assistant.greeting }];
  let activePage = 'home';
  let previousFocus = null;
  let typing = false;

  // The conversation survives page changes in this tab (sessionStorage), keyed per user so a
  // different account signing in on the same tab starts fresh. Storage can be unavailable
  // (private mode, blocked site data); the chat then simply resets on each page.
  const storageKey = `cats-agent-chat:${panel.dataset.currentUser || 'anonymous'}:${panel.dataset.currentRole}`;
  const MAX_STORED_MESSAGES = 50;
  const loadState = () => {
    try {
      return JSON.parse(window.sessionStorage.getItem(storageKey)) || null;
    } catch {
      return null;
    }
  };
  const saveState = () => {
    try {
      window.sessionStorage.setItem(
        storageKey,
        JSON.stringify({ open: !panel.hidden, page: activePage, conversations: conversations.slice(-MAX_STORED_MESSAGES) }),
      );
    } catch {
      /* storage unavailable: the chat still works on this page */
    }
  };
  const iconMarkup = (name) => window.CATS_ICONS?.icon(name) || '';

  panel.querySelector('[data-agent-name]').textContent = assistant.name;
  panel.querySelector('[data-agent-role-note]').textContent = assistant.note;

  const element = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  };
  const withIcon = (node, name) => {
    const icon = element('span', 'agent-chat-inline-icon');
    icon.setAttribute('aria-hidden', 'true');
    icon.innerHTML = iconMarkup(name);
    node.prepend(icon);
    return node;
  };

  const renderList = (items, className, iconName) => {
    const list = element('ul', className);
    items.forEach((text) => list.append(withIcon(element('li', '', text), iconName)));
    return list;
  };

  const renderReviewItem = (item) => {
    const card = element('li', `agent-chat-review-item is-${item.tone}`);
    const head = element('div', 'agent-chat-review-head');
    head.append(element('strong', '', item.title), element('span', 'agent-chat-verdict', item.verdict));
    card.append(head, element('small', 'agent-chat-review-meta', item.meta));
    if (item.flags.length) card.append(renderList(item.flags, 'agent-chat-flags', 'rejected'));
    if (item.notes.length) card.append(renderList(item.notes, 'agent-chat-notes', 'clock'));
    if (item.href) {
      const link = element('a', 'agent-chat-review-link', 'Open request');
      link.href = item.href;
      card.append(link);
    }
    return card;
  };

  const renderAction = (action, message) => {
    if (action.href) {
      const link = element('a', 'agent-chat-action', action.label);
      link.href = action.href;
      return action.icon ? withIcon(link, action.icon) : link;
    }
    const button = element('button', 'agent-chat-action', action.label);
    button.type = 'button';
    if (!action.fillDraft) return action.icon ? withIcon(button, action.icon) : button;
    if (action.used) {
      button.disabled = true;
      button.textContent = action.done;
    } else if (!readApplicationForm()) {
      // Restored on a page without the application form.
      button.disabled = true;
      button.title = 'Open the application form to use this draft';
    }
    button.addEventListener('click', () => {
      if (!fillDraft(message.draft)) return;
      action.used = true;
      button.disabled = true;
      button.textContent = action.done || action.label;
      saveState();
    });
    return action.icon && !action.used ? withIcon(button, action.icon) : button;
  };

  const renderConversation = () => {
    messages.replaceChildren();
    conversations.forEach((message) => {
      const rich = Boolean(message.items || message.draft);
      const row = element('article', `agent-chat-message agent-chat-message-${message.from}${rich ? ' is-rich' : ''}`);
      if (message.from === 'assistant') {
        const avatar = element('span', 'agent-chat-avatar');
        avatar.setAttribute('aria-hidden', 'true');
        avatar.innerHTML = iconMarkup('assistant');
        row.append(avatar);
      }
      const bubble = element('div', 'agent-chat-bubble');
      bubble.append(
        element('span', 'agent-chat-message-label', message.from === 'user' ? 'You' : assistant.name),
        element('p', '', message.text),
      );
      if (message.flags?.length) bubble.append(renderList(message.flags, 'agent-chat-flags', 'rejected'));
      if (message.draft) {
        const draft = element('div', 'agent-chat-draft');
        draft.append(element('span', 'agent-chat-draft-label', 'Justification'), element('p', '', message.draft.justification));
        draft.append(element('span', 'agent-chat-draft-label', 'Sharing with the team'), element('p', '', message.draft.sharing));
        bubble.append(draft);
      }
      if (message.items?.length) {
        const list = element('ul', 'agent-chat-review');
        message.items.forEach((item) => list.append(renderReviewItem(item)));
        bubble.append(list);
      }
      if (message.actions?.length) {
        const actions = element('div', 'agent-chat-actions');
        message.actions.forEach((action) => actions.append(renderAction(action, message)));
        bubble.append(actions);
      }
      row.append(bubble);
      messages.append(row);
    });
    if (typing) {
      const row = element('div', 'agent-chat-message agent-chat-message-assistant agent-chat-typing');
      row.setAttribute('aria-label', `${assistant.name} is typing`);
      row.innerHTML = `<span class="agent-chat-avatar" aria-hidden="true">${iconMarkup('assistant')}</span><div class="agent-chat-bubble"><i></i><i></i><i></i></div>`;
      messages.append(row);
    }
    messages.scrollTop = messages.scrollHeight;
    const lastMessage = conversations[conversations.length - 1];
    panel.querySelector('[data-agent-recent-title]').textContent = conversations.length > 1 ? assistant.name : 'Start a conversation';
    panel.querySelector('[data-agent-recent-preview]').textContent = lastMessage.text;
  };

  const showPage = (page) => {
    activePage = page;
    views.forEach((view) => { view.hidden = view.dataset.agentView !== page; });
    pages.forEach((tab) => {
      const selected = tab.dataset.agentPage === page;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
    });
    if (page === 'messages') {
      renderConversation();
      updateSuggestionFade();
    }
    saveState();
  };

  // The chip row scrolls sideways; a mouse wheel only scrolls vertically, so translate it.
  function updateSuggestionFade() {
    const max = suggestions.scrollWidth - suggestions.clientWidth;
    suggestions.classList.toggle('can-scroll-left', suggestions.scrollLeft > 2);
    suggestions.classList.toggle('can-scroll-right', suggestions.scrollLeft < max - 2);
  }
  suggestions.addEventListener(
    'wheel',
    (event) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return; // trackpads already scroll sideways
      if (suggestions.scrollWidth <= suggestions.clientWidth) return;
      event.preventDefault();
      suggestions.scrollLeft += event.deltaY;
    },
    { passive: false },
  );
  suggestions.addEventListener('scroll', updateSuggestionFade, { passive: true });
  window.addEventListener('resize', updateSuggestionFade);

  const resizeInput = () => {
    input.style.height = '';
    if (!input.value || !input.scrollHeight) return;
    input.style.height = 'auto';
    input.style.height = `${Math.min(input.scrollHeight, 120)}px`;
  };

  const send = async (value) => {
    const text = value.trim();
    if (!text) return;
    conversations.push({ from: 'user', text });
    saveState();
    input.value = '';
    resizeInput();
    typing = true;
    showPage('messages');
    const started = Date.now();
    let reply;
    try {
      reply = await assistant.reply(text.toLowerCase());
    } catch {
      reply = 'Sorry, I could not read your CATS records just now. Refresh the page and try again.';
    }
    // Keep the typing indicator visible briefly so instant replies do not flash.
    await new Promise((resolve) => window.setTimeout(resolve, Math.max(0, 700 - (Date.now() - started))));
    typing = false;
    conversations.push({ from: 'assistant', ...(typeof reply === 'string' ? { text: reply } : reply) });
    saveState();
    if (!panel.hidden && activePage === 'messages') renderConversation();
  };

  assistant.prompts.forEach((prompt) => {
    const suggestion = document.createElement('button');
    suggestion.type = 'button';
    suggestion.textContent = prompt;
    suggestion.addEventListener('click', () => send(prompt));
    suggestions.append(suggestion);

    [helpList, quickList].forEach((list) => {
      if (!list) return;
      const helpItem = document.createElement('button');
      helpItem.type = 'button';
      helpItem.className = 'agent-chat-help-item';
      helpItem.innerHTML = `<span></span><span aria-hidden="true">${iconMarkup('chevronRight')}</span>`;
      helpItem.firstElementChild.textContent = prompt;
      helpItem.addEventListener('click', () => send(prompt));
      list.append(helpItem);
    });
  });

  opener.addEventListener('click', (event) => {
    event.preventDefault();
    previousFocus = opener;
    panel.hidden = false;
    opener.setAttribute('aria-expanded', 'true');
    showPage('home');
    panel.querySelector('[data-agent-chat-close]').focus();
  });

  const close = () => {
    panel.hidden = true;
    saveState();
    opener.setAttribute('aria-expanded', 'false');
    previousFocus?.focus();
  };

  panel.querySelector('[data-agent-chat-close]').addEventListener('click', close);
  document.addEventListener('keydown', (event) => {
    if (!panel.hidden && event.key === 'Escape') close();
    if (panel.hidden || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    if (!panel.contains(document.activeElement.closest?.('[data-agent-page]'))) return;
    event.preventDefault();
    const current = pages.findIndex((tab) => tab.dataset.agentPage === activePage);
    const next = (current + (event.key === 'ArrowRight' ? 1 : -1) + pages.length) % pages.length;
    showPage(pages[next].dataset.agentPage);
    pages[next].focus();
  });
  pages.forEach((tab) => tab.addEventListener('click', () => showPage(tab.dataset.agentPage)));
  panel.querySelectorAll('[data-agent-open-messages]').forEach((button) =>
    button.addEventListener('click', () => { showPage('messages'); input.focus(); }),
  );
  panel.querySelectorAll('[data-agent-page-link]').forEach((button) =>
    button.addEventListener('click', () => showPage(button.dataset.agentPageLink)),
  );
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    send(input.value);
    input.focus();
  });
  input.addEventListener('input', resizeInput);
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      form.requestSubmit();
    }
  });

  const saved = loadState();
  if (Array.isArray(saved?.conversations) && saved.conversations.length) {
    conversations.splice(0, conversations.length, ...saved.conversations);
  }
  renderConversation();
  showPage('home');
  // Reopen where the user left off, e.g. after following "Open request" from the chat.
  if (saved?.open) {
    panel.hidden = false;
    opener.setAttribute('aria-expanded', 'true');
    showPage(views.some((view) => view.dataset.agentView === saved.page) ? saved.page : 'home');
  }
})();
