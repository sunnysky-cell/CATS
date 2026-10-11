import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import postcss from 'postcss';
import selectorParser from 'postcss-selector-parser';

const projectDirectory = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const assetName = process.argv[2] ?? 'course-workspace';
if (!/^[a-z-]+$/.test(assetName)) throw new Error('Expected a simple asset name.');
const assetDirectory = path.resolve(projectDirectory, '../src/main/resources/static/assets');
const css = await fs.readFile(path.join(assetDirectory, `${assetName}.css`), 'utf8');
const javascript = await fs.readFile(path.join(assetDirectory, `${assetName}.js`), 'utf8');
const sourceMap = JSON.parse(
  await fs.readFile(path.join(assetDirectory, `${assetName}.js.map`), 'utf8'),
);
const errors = [];
let scopedRules = 0;

postcss.parse(css).walkRules((rule) => {
  let ancestor = rule.parent;
  while (ancestor) {
    if (
      ancestor.type === 'rule' ||
      (ancestor.type === 'atrule' && /keyframes$/i.test(ancestor.name))
    )
      return;
    ancestor = ancestor.parent;
  }
  selectorParser((selectors) => {
    selectors.each((selector) => {
      if (
        selector.nodes[0]?.type !== 'class' ||
        selector.nodes[0].value !== 'cats-course-workspace'
      ) {
        errors.push(`Unscoped selector: ${selector.toString()}`);
      }
    });
  }).processSync(rule.selector);
  scopedRules += 1;
});
postcss.parse(css).walkAtRules((rule) => {
  if (/keyframes$/i.test(rule.name) && !rule.params.startsWith('cats-workspace-'))
    errors.push(`Unscoped animation: ${rule.params}`);
  if (rule.name === 'property' && !rule.params.startsWith('--cats-workspace-'))
    errors.push(`Unscoped registration: ${rule.params}`);
});
if (/\bfrom\s*["'](?:react|react-dom|https?:)/.test(javascript))
  errors.push('The bundle has an external React or HTTP import.');
if (/\bprocess\.env\b/.test(javascript))
  errors.push('A Node.js environment reference remains in the browser bundle.');
if (
  !Array.isArray(sourceMap.sources) ||
  !sourceMap.sources.some((source) => source.includes('react-dom'))
) {
  errors.push('React DOM is missing from the bundled source map.');
}
if (errors.length) throw new Error(errors.join('\n'));
console.log(
  `${assetName}: ${scopedRules} scoped CSS rules; isolated property registrations and animations; React DOM bundled; source map valid.`,
);
