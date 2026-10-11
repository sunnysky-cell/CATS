CATS Agent desk — source and handoff notes
=========================================

Purpose
-------
The authenticated /agent-demo page demonstrates three read-only workflows:
Find awaiting review, Compare course demand, and Export current results.
Prompts select a supported workflow; they do not call a language model.
Search/status/category controls refine the work list. Decisions remain on
the original Java review form. This workspace does not make business POSTs.

Datasets
--------
Example mode defaults to 5,000 synthetic requests and also offers 20,000 and
50,000. The fixed generator uses numeric-string IDs, explicitly sample
names/providers, decimal-string fees/days, and all seven application states.
These records are never sent to Java and have no real detail/approval URL.

Live MANAGER mode reads GET /manager/history, assigned students only.
Live EMPLOYEE mode reads GET /employee/applications, the current server-year
course-start scope for that account. ADMIN has example mode only.
Each live run fetches a fresh snapshot with credentials same-origin and a
15-second limit. Non-200/login redirects, identity/schema/scope violations
and missing fields are errors, never an empty successful dataset.

The shared business/snapshot.ts and readonly-contract.ts validate the
canonical sidebar role/user ID against the mount, response and manifest.
Only these 12 scalar fields are parsed: id, title, provider, category,
applicantId, learner, start, end, created, status, fee, days. Long IDs remain
strings; Java LocalDateTime retains its date semantics; decimal totals use
the shared insights-data.js scaled-BigInt implementation.

Execution and results
---------------------
Each Run executes read -> filter -> aggregate, and export when requested.
Operation times use performance.now and exclude rendering. The query step
includes live network/manifest validation or sample generation on first use.
The filter step scans the whole selected snapshot. Course grouping uses
title+provider+category, not a Course entity or a capacity measure.
Awaiting review means APPLIED or UPDATED; accepted means APPROVED/COMPLETED.
Distinct students are counted by applicantId, never by display name.

All matching rows feed statistics, chart and CSV. Only 50 rows are rendered
per page. This is client pagination over one loaded snapshot; it does not
prove Java server-side pagination or production large-data throughput.
CSV uses the shared quoted-field encoder with formula-prefix protection.
When importing CSV into a spreadsheet, set Application ID and Student ID
columns to Text so its automatic number detection does not shorten Long IDs.
The Stop control aborts the live GET and checks cancellation between steps.
Synchronous filtering/aggregation finish their current operation before a
new UI event can be handled. A stopped run does not submit or undo decisions.

Files and build
---------------
src/agent-workspace.tsx: mount, layout and coordinator.
src/agent/use-workflow.ts: actual operation runner, timeout and cancellation.
src/agent/sample-data.ts: deterministic, separate example generator.
src/agent/workflows.ts: bounded intents and request filters.
src/agent/data-tools.ts: shared aggregate/CSV bridge and download.
src/agent/*: chart, filters, detail dialog, table and operation disclosures.
src/agent-workspace.css: scoped blue/paper styling and reduced motion.
vite.agent.config.ts: shares the existing component build configuration.

With Node 22.12+ and installed package-lock dependencies, from this folder:
  node node_modules/typescript/bin/tsc --noEmit
  node node_modules/tsx/dist/cli.mjs --test tests/agent-data.test.ts
  node node_modules/vite/bin/vite.js build --config vite.agent.config.ts

Production outputs are ../static/assets/agent-workspace.js, .css and .js.map.
No additional web server, CDN or browser-held Java credentials are needed.
The existing MCP bridge is separate: its four real read-only tools remain
available to an external configured host. This page does not claim that a
model is connected or that it has invoked those MCP tools.

QA hooks
--------
The mount has data-agent-state=idle|running|ready|error,
data-agent-dataset=sample|live, data-sample-size and data-match-count.
Use the three prompts, expand operation steps, vary size/filters, move pages,
open a request detail and export. Live detail links point to original forms;
sample details cannot open a real request. Dialogs support Escape/focus
return, mobile charts/tables scroll inside their region, and reduced motion
removes spinning/rolling animations.
