(() => {
  'use strict';

  const panel = document.querySelector('[data-agent-chat-panel]');
  const opener = document.querySelector('[data-agent-chat-open]');
  if (!panel || !opener) return;

  const assistants = {
    EMPLOYEE: {
      name: 'Employee assistant',
      note: 'Employee support · Demo replies',
      greeting: 'Hi! I can help you find a course, prepare an application, or understand your claim.',
      prompts: ['How do I apply for a course?', 'Where can I check my application?', 'How do fee claims work?'],
      reply(message) {
        if (/claim|reimburse|fee|receipt|报销|费用/.test(message))
          return 'For a fee claim, open My fee claims and start a new claim for an approved course. Add the amount and receipt details, then submit it for your Manager to review.';
        if (/status|track|history|application|申请|进度/.test(message))
          return 'You can check the latest decision and course details on My applications. A submitted request stays pending until your Manager reviews it.';
        if (/course|apply|报名|课程/.test(message))
          return 'Open Courses and choose New application. Add the course name, provider, dates and estimated fee, then submit it for review. You can check its progress under My applications.';
        return 'I can help with course applications, application status, and fee claims. Try one of the suggested questions to see this employee demo.';
      },
    },
    MANAGER: {
      name: 'Manager assistant',
      note: 'Manager support · Demo replies',
      greeting: 'Hello! I can help you review pending requests or explore your employees’ training activity.',
      prompts: ['What should I check before approving?', 'How do I find pending requests?', 'Summarise the review process'],
      reply(message) {
        if (/approve|review|check|决定|审批/.test(message))
          return 'Before deciding, check the course relevance, dates, estimated cost and the employee’s explanation. Open the request from Awaiting review; the final decision is made by you in CATS.';
        if (/pending|find|where|待审|待处理/.test(message))
          return 'Open Awaiting review to see requests assigned to you. You can open a request for its full details, then record your decision on that page.';
        if (/report|trend|demand|insight|分析|总结/.test(message))
          return 'Learning insights lets you filter assigned requests and compare course demand, dates and application status. This demo can explain the workflow, but it does not read live records.';
        return 'I can help with pending applications, review criteria, and learning insights. Try a suggested question to see this Manager demo.';
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

  const messages = panel.querySelector('[data-agent-messages]');
  const suggestions = panel.querySelector('[data-agent-suggestions]');
  const helpList = panel.querySelector('[data-agent-help-list]');
  const form = panel.querySelector('[data-agent-chat-form]');
  const input = form.querySelector('textarea');
  const pages = [...panel.querySelectorAll('[data-agent-page]')];
  const views = [...panel.querySelectorAll('[data-agent-view]')];
  const conversations = [{ from: 'assistant', text: assistant.greeting }];
  let activePage = 'home';
  let previousFocus = null;

  panel.querySelector('[data-agent-name]').textContent = assistant.name;
  panel.querySelector('[data-agent-thread-title]').textContent = assistant.name;
  panel.querySelector('[data-agent-role-note]').textContent = assistant.note;

  const renderConversation = () => {
    messages.replaceChildren();
    conversations.forEach((message) => {
      const row = document.createElement('article');
      row.className = `agent-chat-message agent-chat-message-${message.from}`;
      const label = document.createElement('span');
      label.className = 'agent-chat-message-label';
      label.textContent = message.from === 'user' ? 'You' : assistant.name;
      const text = document.createElement('p');
      text.textContent = message.text;
      row.append(label, text);
      messages.append(row);
    });
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
    if (page === 'messages') renderConversation();
  };

  const send = (value) => {
    const text = value.trim();
    if (!text) return;
    conversations.push({ from: 'user', text });
    input.value = '';
    showPage('messages');
    window.setTimeout(() => {
      conversations.push({ from: 'assistant', text: assistant.reply(text.toLowerCase()) });
      if (!panel.hidden && activePage === 'messages') renderConversation();
    }, 420);
  };

  assistant.prompts.forEach((prompt) => {
    const suggestion = document.createElement('button');
    suggestion.type = 'button';
    suggestion.textContent = prompt;
    suggestion.addEventListener('click', () => send(prompt));
    suggestions.append(suggestion);

    const helpItem = document.createElement('button');
    helpItem.type = 'button';
    helpItem.className = 'agent-chat-help-item';
    helpItem.innerHTML = '<span></span><span aria-hidden="true">›</span>';
    helpItem.firstElementChild.textContent = prompt;
    helpItem.addEventListener('click', () => send(prompt));
    helpList.append(helpItem);
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
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      form.requestSubmit();
    }
  });

  renderConversation();
  showPage('home');
})();
