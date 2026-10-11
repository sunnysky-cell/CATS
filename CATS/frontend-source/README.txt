CATS frontend source
====================

Source code for three React pages. The built files sit in
src/main/resources/static/assets:

  course-workspace.js / .css     src/course-workspace.tsx
  calendar-workspace.js / .css   src/calendar-workspace.tsx
  agent-workspace.js / .css      src/agent-workspace.tsx

The Thymeleaf pages load the built files. You don't need Node to run CATS.


Origin
------
A teammate built these pages and sent us the source on 2026-10-10
(handoff package CATS-Academy-Handoff-20261010, folder ui/components-source).
On 2026-10-11 we copied it here and changed three things:

1. Wording. After the merge we had edited 22 labels in the built
   agent-workspace.js and course-workspace.js: "student" to "employee" and
   "teacher" to "manager". We made the same 22 edits in src/.
2. Paths. vite.config.ts, tools/verify-build.mjs and tests/agent-data.test.ts
   pointed at ../static/assets from the handoff layout. They now point at
   ../src/main/resources/static/assets.
3. We left out provenance/*-source.html, saved copies of the shadcn/ui,
   motion-primitives and sonner websites. provenance/registry/ and
   provenance/licenses/ record where each component came from.


Check
-----
A rebuild from this folder gives the same three .js files as the ones in the
repository, byte for byte.

The committed .css files carry 17 unused Tailwind classes (.m-0, .mt-2 and
others) that came from the website copies. If you rebuild, those classes go
away. No page uses them.


Build
-----
Needs Node 22.12 or later.

  npm ci
  npm run build        writes the bundles to ../src/main/resources/static/assets
  npm test             21 unit tests
  npm run typecheck

Git ignores node_modules/.


Third-party code
----------------
src/components/ui/ comes from shadcn/ui and src/components/motion-primitives/
from motion-primitives, both MIT. ../THIRD-PARTY-LICENSES.txt lists every
library in the bundles. provenance/README.md (in Chinese) explains how the
teammate installed and adapted each component.

agentREADME.txt is the teammate's own note on the agent page. It keeps the old
student/teacher wording.
