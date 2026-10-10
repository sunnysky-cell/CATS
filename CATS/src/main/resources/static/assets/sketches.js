/* Original ink drawings, placed on small pieces of cut paper. */
(() => {
  'use strict';

  const ink = '#345b7f';
  const paper = '#f3f7fb';
  const fold = '#dce6ef';
  const blue = '#547a9d';

  const drawing = (width, height, marks) => `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"
      fill="none" stroke="${ink}" stroke-width="1.8"
      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
      ${marks}
    </svg>`;

  // The cuts vary slightly; their size and visual weight stay consistent.
  const onPaper = (edge, marks) =>
    drawing(200, 180, `<path fill="${paper}" stroke="none" d="${edge}"/>${marks}`);

  window.CATS_SKETCHES = Object.freeze({
    hero: drawing(
      420,
      260,
      `
      <path fill="${paper}" stroke="none" d="m105 34 103-6 97 20 29 60-15 73-67 39-109-6-59-45-8-76 29-59Z"/>
      <path class="sketch-line" fill="${fold}" d="M85 102c45-7 87 0 127 20 35-20 78-29 125-26l-5 90c-46-1-87 9-119 23-40-18-82-25-129-23l1-84Z"/>
      <path class="sketch-line" fill="${paper}" stroke-width="2.1" d="M91 93c44-5 84 2 121 22 38-21 79-29 124-24l-7 85c-43-3-82 6-117 24-37-19-80-27-125-25l4-82Z"/>
      <path class="sketch-line" d="m212 115 0 83M89 180c43-2 84 6 124 24 35-16 74-24 116-23m-210-64c20 1 42 6 61 12m-64 6c18 1 34 5 48 9m-50 8c24 2 47 7 70 16m54-42c19-9 39-15 63-17m-66 34c19-8 36-12 58-14m-58 30c13-6 28-10 42-12"/>
      <path class="sketch-accent" fill="${blue}" stroke="none" d="m184 107 9 3-2 50-5-6-7 4 5-51Z"/>
      <path class="sketch-line" stroke-width="1.2" d="m93 187 8 4m6-3 8 4m6-2 8 4m6-2 8 4m6-1 8 4m6-1 8 4m6 0 8 4m6 0 8 4m53-3 8-3m6 0 8-3m6 0 8-3m6 1 8-3m6 1 8-2"/>
    `,
    ),

    // Connected nodes suggest an AI workflow without using a robot mascot.
    ai: onPaper(
      'm65 32 35-4 34 8 22 24 4 36-15 32-30 16-35-3-28-20-11-32 4-33 20-24Z',
      `
      <g class="sketch-line">
        <path fill="${paper}" d="m66 51 68-2 3 63-70 2-1-63Z"/>
        <path fill="${fold}" d="m67 114 70-2 11 15c-22 5-54 6-81 4l-13-3 13-14Z"/>
        <path stroke-width="1.2" d="m72 121 61-2m-40 7 16-1"/>
        <path d="m83 70 17 14 17-17M100 84l-16 14m16-14 18 13"/>
        <circle cx="83" cy="70" r="4.5" fill="${paper}"/>
        <circle cx="117" cy="67" r="4.5" fill="${paper}"/>
        <circle class="sketch-float" cx="100" cy="84" r="6" fill="${paper}"/>
        <circle cx="84" cy="98" r="4" fill="${paper}"/>
        <circle cx="118" cy="97" r="4" fill="${paper}"/>
      </g>
      <circle class="sketch-accent" cx="100" cy="84" r="2" fill="${blue}" stroke="none"/>
    `,
    ),

    // A folded report with a single observation picked out by hand.
    data: onPaper(
      'm69 31 37-3 30 12 19 26 5 29-12 33-27 17-39-1-28-19-13-28 5-37 23-29Z',
      `
      <g class="sketch-line">
        <path fill="${paper}" d="m63 51 61-5 17 18 4 66-77 6-5-85Z"/>
        <path fill="${fold}" d="m124 46-1 21 18-3-17-18Z"/>
        <path stroke-width="1.2" d="m74 65 29-2m-29 9 19-1M77 87l3 35 52-4m-52-8 48-4m-49-6 49-4"/>
        <path d="m83 109 15-14 14 4 13-17"/>
        <path class="sketch-float" stroke-width="1.4" d="M113 77c8-5 19-3 22 5 3 8-2 16-11 16-9 1-16-6-14-13 1-4 3-7 7-8"/>
        <path stroke-width="1.1" d="m70 130 14-1m6 0 12-1m6 0 11-1"/>
      </g>
      <circle class="sketch-accent" cx="125" cy="82" r="2.4" fill="${blue}" stroke="none"/>
    `,
    ),

    // A cloud rests above a compact pair of server drawers.
    cloud: onPaper(
      'm66 34 38-6 33 11 23 25 1 33-16 29-28 18-38-1-25-20-14-30 7-33 19-26Z',
      `
      <g class="sketch-line">
        <path class="sketch-float" fill="${paper}" d="M72 88c-14 0-21-7-20-17 1-8 7-14 17-14 3-13 12-22 26-21 13 0 22 8 24 20 13-2 23 5 24 15 1 10-7 17-18 17-17 1-35 0-53 0Z"/>
        <path stroke-width="1.3" d="M69 57c6 0 10 3 12 7m38-8c-5 1-9 4-11 8"/>
        <path fill="${paper}" d="m64 103 69-1 1 13-69 2-1-14Z"/>
        <path fill="${paper}" d="m65 121 68-1 1 14-68 1-1-14Z"/>
        <path stroke-width="1.3" d="m74 109 14 0m-13 19 13 0m34-20 3 0m-3 19 3 0M98 90v8"/>
      </g>
      <circle class="sketch-accent" cx="115" cy="109" r="1.7" fill="${blue}" stroke="none"/>
      <circle class="sketch-accent" cx="115" cy="128" r="1.7" fill="${blue}" stroke="none"/>
    `,
    ),

    // The route is drawn directly onto an unfolded planning sheet.
    projects: onPaper(
      'm64 36 39-8 32 9 22 22 7 34-14 33-29 18-34-2-28-15-15-29 4-34 16-28Z',
      `
      <g class="sketch-line">
        <path fill="${paper}" d="m55 59 29-8 29 9 29-6-1 69-29 7-28-8-30 7 1-70Z"/>
        <path stroke-width="1.2" d="m84 51 0 71m29-62-1 70m-50-63 11-3m-11 8 10-3m53 48 10-2"/>
        <path stroke-width="1.5" d="M68 111c0-19 31-7 33-24 1-12 21-8 26-12"/>
        <circle cx="68" cy="111" r="3.4" fill="${paper}"/>
        <circle cx="101" cy="87" r="3.2" fill="${paper}"/>
        <path class="sketch-float" d="m126 77-1-18m0 0c6-1 11 4 16 1l-5 8c-4 2-7-2-11 0"/>
        <path stroke-width="1.1" d="m93 71 5 2m-5 2 5 2m-5 2 5 2"/>
      </g>
      <path class="sketch-accent" stroke="${blue}" stroke-width="1.7" d="m64 112 3 2 5-6"/>
    `,
    ),

    // A small, solid lock. One shaded edge gives it weight without a shadow.
    security: onPaper(
      'm68 31 37-3 29 12 22 22 6 32-13 31-28 18-36 0-27-18-16-30 6-35 20-29Z',
      `
      <g class="sketch-line">
        <path fill="${paper}" d="m68 80 60-2 4 55-62 3-2-56Z"/>
        <path fill="${fold}" d="m128 78 7 5 3 47-6 3-4-55Z"/>
        <path fill="${paper}" d="m77 80-1-22c0-16 10-28 24-29 16 0 28 10 29 26l1 23-9 0-1-22c-1-11-8-18-19-18-10 1-17 8-16 20l1 22-9 0Z"/>
        <path stroke-width="1.1" d="M81 53c2-10 9-17 19-18m33 52 1 9m0 5 1 10m0 5 1 9M75 130l49-2"/>
        <path class="sketch-float" d="M100 95c-5 0-9 3-9 8 0 4 2 6 5 7l-2 11 12-1-3-10c4-1 6-4 6-7 0-5-4-8-9-8Z"/>
      </g>
      <path class="sketch-accent" stroke="${blue}" stroke-width="1.4" d="m76 85 13 0"/>
    `,
    ),

    // Two empty chairs leave room for a conversation.
    leadership: onPaper(
      'm67 32 36-5 33 12 22 22 6 35-13 28-31 19-34-1-28-18-16-29 6-35 19-28Z',
      `
      <g class="sketch-line">
        <path fill="${paper}" d="M54 64c8-4 25-4 33 0l4 37-29 1-8-38Z"/>
        <path d="m60 70 5 22m17-22 3 22m-23 10 35 0-1 7-34-1v-6Zm4 7-7 22m36-21 6 21m-33-22 3 20"/>
        <path fill="${paper}" d="M120 65c8-4 26-3 32 2l-7 35-30-1 5-36Z"/>
        <path d="m124 72-4 22m26-21-4 22m-27 6-7 2 1 7 36-1v-7l-30-1Zm-6 9-6 21m37-20 7 21m-31-22-3 21"/>
        <path fill="${paper}" d="M89 97c0-4 17-6 24-2 7 4-2 9-13 9-7 0-11-3-11-7Z"/>
        <path d="m102 104-1 25m-7 1 15-1"/>
        <path class="sketch-float" fill="${paper}" d="M80 40c0-9 10-15 23-14 14 1 22 7 21 16-1 8-10 13-23 12l-11 8 1-11c-7-2-11-5-11-11Z"/>
        <path stroke-width="1.2" d="m91 37 21 1m-20 6 13 0"/>
      </g>
      <path class="sketch-accent" fill="${blue}" stroke="none" d="m95 91 9 0-1 7c0 2-6 2-7 0l-1-7Z"/>
    `,
    ),

    // A neutral book is safe when a course has no reviewed subject illustration.
    general: onPaper(
      'm65 32 35-4 34 8 22 24 4 36-15 32-30 16-35-3-28-20-11-32 4-33 20-24Z',
      `
      <g class="sketch-line">
        <path fill="${fold}" d="m57 63 44 8 42-10-1 57-41 11-45-9 1-57Z"/>
        <path fill="${paper}" d="M59 54c15-2 29 2 42 10 14-8 27-12 43-12l-3 58c-15 0-27 3-40 11-13-8-27-12-43-12l1-55Z"/>
        <path d="m101 64 0 57"/>
        <path stroke-width="1.2" d="m68 70 22 5m-23 7 24 5m-24 7 19 4m25-23 23-6m-23 19 22-6m-22 18 18-5"/>
      </g>
      <path class="sketch-accent" stroke="${blue}" stroke-width="1.4" d="m120 59-1 21 4-3 3 1 1-20"/>
    `,
    ),
  });
})();
