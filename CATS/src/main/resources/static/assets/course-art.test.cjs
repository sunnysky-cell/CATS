const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { test } = require('node:test');

const context = vm.createContext({ window: {} });
for (const file of ['sketches.js', 'course-art.js', 'courses.js']) {
  vm.runInContext(fs.readFileSync(path.join(__dirname, file), 'utf8'), context);
}
const { CATS_COURSE_ART: art, CATS_SKETCHES: sketches, CATS_COURSES: courses } = context.window;

test('Every sample course has an explicit supported subject and a drawing', () => {
  for (const course of courses) {
    const selected = art.resolve(course);
    assert.equal(selected.subject, course.subject);
    assert.notEqual(selected.illustration, 'general');
    assert.match(selected.svg, /<svg\b/);
  }
  for (const theme of art.themes) {
    for (const name of theme.illustrations) assert.ok(Object.hasOwn(sketches, name));
  }
});

test('A new course ID or edited title does not need a new drawing', () => {
  const original = art.resolve(courses.find((course) => course.subject === 'data'));
  const added = art.resolve({
    id: 'spreadsheet-essentials',
    title: 'Spreadsheet Essentials',
    subject: 'data',
  });
  assert.equal(added.svg, original.svg);
});

test('Missing and unsupported subjects use a neutral book', () => {
  for (const subject of [undefined, null, '', 'art-history', 'constructor', '__proto__']) {
    const selected = art.resolve({ subject, illustration: 'security' });
    assert.equal(selected.illustration, 'general');
    assert.equal(selected.svg, sketches.general);
  }
});

test('Course titles and delivery categories do not guess a subject', () => {
  const selected = art.resolve({ title: 'AI Cloud Security', category: 'certification' });
  assert.equal(selected.illustration, 'general');
});

test('An illustration from a different subject cannot override the default', () => {
  for (const illustration of ['security', 'hero', 'constructor', '<svg onload="invalid">']) {
    assert.equal(art.resolve({ subject: 'ai', illustration }).illustration, 'ai');
  }
});
