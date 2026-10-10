/* The local MCP bridge is launched by an agent host, not by this browser. */
(() => {
  'use strict';
  const openers = document.querySelectorAll('[data-agent-open]');
  if (!openers.length) return;

  const dialog = document.createElement('dialog');
  dialog.className = 'paper-dialog agent-dialog';
  dialog.setAttribute('aria-labelledby', 'agent-title');
  // This is fixed interface markup. No course titles or user data are interpolated.
  dialog.innerHTML = `
    <header class="dialog-header">
      <h2 id="agent-title">A little help with the data.</h2>
      <button type="button" class="dialog-close" aria-label="Close agent access">×</button>
    </header>
    <p>Connect an agent to explore course requests, find patterns and prepare exports.
       Every decision stays with you.</p>
    <dl class="agent-permissions">
      <div><dt>Query</dt><dd>Find records within your assigned employees.</dd></div>
      <div><dt>Analyse</dt><dd>Compare course demand, dates and application status.</dd></div>
      <div><dt>Export</dt><dd>Prepare a CSV of the records you select.</dd></div>
      <div><dt>Decide</dt><dd>Review and approve in the application. The agent cannot submit decisions.</dd></div>
    </dl>
    <section class="section">
      <h3>Connect your agent</h3>
      <p>This is a local, read-only MCP bridge over stdio. No agent is connected by this page.</p>
      <ol class="agent-steps">
        <li>Start CATS and install the bridge dependencies: <code>cd mcp</code>, then <code>npm ci</code>.</li>
        <li>Copy the configuration into your MCP host. Replace the folder and account placeholders.</li>
        <li>Use your manager account. Java checks your role and employee assignments.</li>
      </ol>
      <label for="agent-config">MCP host configuration</label>
      <textarea id="agent-config" readonly spellcheck="false" rows="12"></textarea>
      <div class="actions">
        <button type="button" class="button secondary" data-agent-copy>Copy configuration</button>
        <button type="button" class="button text" data-agent-download>Download configuration</button>
      </div>
      <p class="agent-feedback" role="status" aria-live="polite"></p>
      <p class="muted">Credentials stay in your MCP host. Keep its configuration private.
        Setup and data definitions are included in the handoff guide.</p>
    </section>`;
  document.body.append(dialog);
  const field = dialog.querySelector('textarea');
  const feedback = dialog.querySelector('.agent-feedback');
  field.value = JSON.stringify(
    {
      mcpServers: {
        'cats-manager-readonly': {
          command: 'node',
          args: ['<PROJECT_FOLDER>/mcp/src/server.mjs'],
          env: {
            CATS_MCP_BASE_URL: `http://127.0.0.1:${location.port || '8095'}`,
            CATS_MCP_USERNAME: '<manager-account>',
            CATS_MCP_PASSWORD: '<password>',
          },
        },
      },
    },
    null,
    2,
  );

  let opener;
  openers.forEach((button) =>
    button.addEventListener('click', () => {
      opener = button;
      feedback.textContent = '';
      dialog.showModal();
    }),
  );
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => opener?.focus());
  dialog.querySelector('[data-agent-copy]').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(field.value);
      feedback.textContent = 'Copied. Replace the placeholders before connecting.';
    } catch {
      field.focus();
      field.select();
      feedback.textContent = 'Configuration selected. Copy it using your keyboard.';
    }
  });
  dialog.querySelector('[data-agent-download]').addEventListener('click', () => {
    const url = URL.createObjectURL(new Blob([field.value + '\n'], { type: 'application/json' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'cats-mcp-config.json';
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    feedback.textContent = 'Configuration prepared. Replace the placeholders before connecting.';
  });
})();
