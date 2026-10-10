CATS login depth gallery
=======================

This is a local adaptation of Codrops Depth Gallery, not a course-data module.
The Java login form and its server-generated CSRF token remain in login.html.
The gallery is used on both /login and /admin/login. No CDN or Vite server is
needed to run CATS. All three textures and the compiled JavaScript are local.

Upstream program
----------------
Repository: https://github.com/houmahani/codrops-depth-gallery
Pinned commit: 28190e0920df887f069524c3863db397af34c1c8
License: MIT, Copyright (c) 2009 - 2025 Codrops.
Full upstream license: LICENSE-CODROPS.txt.
Three.js: 0.183.0, MIT. Full license: LICENSE-THREE.txt.

The Gallery, Scroll and Background classes and the two GLSL shaders preserve
the upstream depth-plane blending, camera easing, velocity response, parallax
and animated shader background. src/login-gallery.js adapts their input and
lifecycle to a login-side pane. Demo debug UI, global scroll capture, demo labels
and pointer trails are not included.

Local adaptations
-----------------
- Pointer coordinates and wheel listeners belong to the artwork surface only.
- Wheel input at either depth boundary is released to page scrolling.
- On stacked mobile layouts vertical scrolling is preserved. Horizontal touch
  swipes and a focused gallery's arrow keys change artwork. Clicking the circle,
  Enter or Space cycles through the three illustrations. There are no arrow buttons.
- Reduced motion uses the same local illustrations without an animation loop.
- WebGL or texture failures retain an accessible static illustration gallery.
- Rendering pauses outside the viewport and while the page is hidden.
- Navigation releases GPU resources and cancels late asynchronous image loads.
- The open circular surface uses blue, green and lilac artwork/shader families.
  The sign-in form is on the left. Captions and counters are screen-reader-only;
  no attribution strip or rectangular artwork card is drawn on the page.

Original artwork
----------------
The three textures are original, editable CATS SVG illustrations:

/assets/login-gallery-images/discover-courses.svg (Discover courses)
/assets/login-gallery-images/course-request.svg (Make a request)
/assets/login-gallery-images/learning-progress.svg (Keep learning)

They illustrate course discovery, an application and learning progress. Their
content is illustrative, not a real request, schedule or student record. SVGs
contain local vector paths and text; no external images, scripts or fonts are
loaded. The original demo's flower images and Lummi.ai artwork are not included.

Build
-----
Use Node 22.x (at least 22.12). From this source directory:

  npm ci --ignore-scripts
  npm run build

package-lock.json pins the dependencies. Vite and vite-plugin-glsl are build-only.
Copy dist/login-gallery.js (and its source map, if desired) one directory up to
/assets, and copy login-gallery.css to /assets/login-gallery.css. Keep the images
in the sibling login-gallery-images directory. No node_modules is distributed.
The editable artwork originals are in artwork/. After changing an SVG, copy it
to that sibling login-gallery-images directory; no Java or bundle rebuild is
needed unless its filename or the gallery behavior also changes.
The readable source is the maintenance entry point; do not edit the bundle.

Read-only verification hooks
---------------------------
figure[data-login-gallery] exposes data-gallery-state="loading|ready|fallback".
"ready" means textures loaded and a WebGL frame rendered successfully.
Reduced motion or a rendering failure uses "fallback". data-gallery-item is a
1-based selected item number. Captions and counters are accessible, visually hidden DOM.
No renderer internals, authentication data or application data are exposed.
