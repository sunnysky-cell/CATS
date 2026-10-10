/* Hover for quick access; click and keyboard access remain available on every panel. */
(() => {
  'use strict';
  const triggers = [...document.querySelectorAll('[data-workspace-target]')];
  if (!triggers.length) return;
  let current = null;
  let opener = null;
  let openTimer;
  let closeTimer;
  const canHover = matchMedia('(hover: hover) and (pointer: fine)');

  function cancelTimers() {
    clearTimeout(openTimer);
    clearTimeout(closeTimer);
  }
  function close(restoreFocus = false) {
    cancelTimers();
    if (!current) return;
    current.hidden = true;
    const previousOpener = opener;
    for (const trigger of triggers) trigger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('workspace-open');
    current = null;
    opener = null;
    if (restoreFocus) previousOpener?.focus({ preventScroll: true });
  }
  function open(trigger, focus = false) {
    cancelTimers();
    const panel = document.getElementById(trigger.dataset.workspaceTarget);
    if (!panel) return;
    if (current !== panel) close();
    current = panel;
    opener = trigger;
    panel.hidden = false;
    trigger.setAttribute('aria-expanded', 'true');
    document.body.classList.add('workspace-open');
    if (focus) panel.querySelector('button, a, input, summary')?.focus({ preventScroll: true });
  }
  function scheduleClose() {
    cancelTimers();
    closeTimer = setTimeout(() => {
      if (!current?.contains(document.activeElement)) close();
    }, 220);
  }
  for (const trigger of triggers) {
    trigger.setAttribute('aria-controls', trigger.dataset.workspaceTarget);
    trigger.setAttribute('aria-haspopup', 'dialog');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.addEventListener('pointerenter', (event) => {
      if (!canHover.matches || event.pointerType !== 'mouse') return;
      cancelTimers();
      openTimer = setTimeout(() => open(trigger), 140);
    });
    trigger.addEventListener('pointerleave', scheduleClose);
    trigger.addEventListener('click', (event) => {
      const isButton = trigger.tagName === 'BUTTON';
      const touchFirstTap = !canHover.matches && current?.id !== trigger.dataset.workspaceTarget;
      if (!isButton && !touchFirstTap) return;
      event.preventDefault();
      if (current?.id === trigger.dataset.workspaceTarget && isButton) close(true);
      else open(trigger, true);
    });
    trigger.addEventListener('keydown', (event) => {
      if (event.key !== 'ArrowRight') return;
      event.preventDefault();
      open(trigger, true);
    });
  }
  for (const panel of document.querySelectorAll('.workspace-panel')) {
    panel.addEventListener('pointerenter', cancelTimers);
    panel.addEventListener('pointerleave', scheduleClose);
    panel.addEventListener('focusout', () => {
      clearTimeout(closeTimer);
      closeTimer = setTimeout(() => {
        // A different panel may have opened while focus was moving.
        if (current !== panel) return;
        if (!panel.contains(document.activeElement) && document.activeElement !== opener) close();
      }, 0);
    });
    panel.querySelector('[data-workspace-close]')?.addEventListener('click', () => close(true));
  }
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && current) {
      event.preventDefault();
      close(true);
    }
  });
  document.addEventListener('pointerdown', (event) => {
    if (
      current &&
      !current.contains(event.target) &&
      !event.target.closest('[data-workspace-target]')
    )
      close();
  });

  // These are display preferences only. No applications, decisions or credentials are stored.
  const preferenceKey = 'cats-display-preferences';
  const preferences = { contrast: false, font: false };
  try {
    const saved = JSON.parse(localStorage.getItem(preferenceKey) || '{}');
    for (const name of Object.keys(preferences)) preferences[name] = saved[name] === true;
  } catch {
    // Browsers can disable local storage; the controls still work for this page.
  }
  function applyPreferences() {
    document.documentElement.dataset.displayContrast = preferences.contrast ? 'high' : 'standard';
    document.documentElement.dataset.displayFont = preferences.font ? 'sans' : 'standard';
    document.querySelectorAll('[data-display-preference]').forEach((button) => {
      button.setAttribute('aria-pressed', String(preferences[button.dataset.displayPreference]));
    });
  }
  document.querySelectorAll('[data-display-preference]').forEach((button) => {
    button.addEventListener('click', () => {
      const name = button.dataset.displayPreference;
      if (!Object.hasOwn(preferences, name)) return;
      preferences[name] = !preferences[name];
      applyPreferences();
      try {
        localStorage.setItem(preferenceKey, JSON.stringify(preferences));
      } catch {
        /* Session only. */
      }
    });
  });
  applyPreferences();
})();
