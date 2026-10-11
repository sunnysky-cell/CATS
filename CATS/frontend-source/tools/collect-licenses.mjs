import { createHash } from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectDirectory = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const lock = JSON.parse(
  await fs.readFile(path.join(projectDirectory, 'package-lock.json'), 'utf8'),
);
const inventory = [];
const notices = [
  'CATS course workspace — runtime dependency notices',
  '',
  'Generated from the exact npm lockfile and installed package license files.',
  'Includes non-development lock entries, including optional runtime dependencies.',
  'The original package authors retain their copyrights.',
  '',
];

for (const [packagePath, metadata] of Object.entries(lock.packages)) {
  if (!packagePath || metadata.dev || !packagePath.includes('node_modules/')) continue;
  const packageDirectory = path.join(projectDirectory, packagePath);
  const packageJson = JSON.parse(
    await fs.readFile(path.join(packageDirectory, 'package.json'), 'utf8'),
  );
  const names = (await fs.readdir(packageDirectory))
    .filter((name) => /^(licen[cs]e|copying|notice)([.-]|$)/i.test(name))
    .sort();
  const licenseFiles = [];
  notices.push(
    '='.repeat(72),
    `${packageJson.name} ${packageJson.version}`,
    `Declared license: ${packageJson.license ?? 'not declared'}`,
    '',
  );

  for (const name of names) {
    const licensePath = path.join(packageDirectory, name);
    if (!(await fs.stat(licensePath)).isFile()) continue;
    const bytes = await fs.readFile(licensePath);
    licenseFiles.push({ name, sha256: createHash('sha256').update(bytes).digest('hex') });
    notices.push(`--- ${name} ---`, bytes.toString('utf8').trim(), '');
  }
  if (!licenseFiles.length) {
    if (packageJson.name === 'react-remove-scroll-bar') {
      const supplementalPath = 'licenses/react-remove-scroll-bar-MIT.txt';
      const bytes = await fs.readFile(path.join(projectDirectory, 'provenance', supplementalPath));
      licenseFiles.push({
        name: supplementalPath,
        sha256: createHash('sha256').update(bytes).digest('hex'),
        source:
          'https://raw.githubusercontent.com/theKashey/react-remove-scroll-bar/master/LICENSE',
      });
      notices.push(
        'The npm package omits its license file. Preserved the upstream repository MIT license (master; not a verified version tag).',
        bytes.toString('utf8').trim(),
        '',
      );
    } else {
      notices.push(
        'No root license file was included in this npm package. See its declared license and repository.',
        '',
      );
    }
  }
  inventory.push({
    name: packageJson.name,
    version: packageJson.version,
    packagePath,
    license: packageJson.license ?? null,
    repository: packageJson.repository ?? null,
    integrity: metadata.integrity ?? null,
    licenseFiles,
  });
}

const provenanceDirectory = path.join(projectDirectory, 'provenance');
await fs.mkdir(provenanceDirectory, { recursive: true });
await fs.writeFile(
  path.join(provenanceDirectory, 'THIRD-PARTY-LICENSES.txt'),
  `${notices.join('\n')}\n`,
);
await fs.writeFile(
  path.join(provenanceDirectory, 'runtime-license-inventory.json'),
  `${JSON.stringify(inventory, null, 2)}\n`,
);
console.log(`Preserved license notices for ${inventory.length} runtime package entries.`);
