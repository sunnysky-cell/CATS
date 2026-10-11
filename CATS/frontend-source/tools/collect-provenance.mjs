import { createHash } from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectDirectory = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const hash = async (relativePath) =>
  createHash('sha256')
    .update(await fs.readFile(path.join(projectDirectory, relativePath)))
    .digest('hex');
const registryDirectory = 'provenance/registry';
const components = [];
for (const name of (await fs.readdir(path.join(projectDirectory, registryDirectory)))
  .filter((name) => name.endsWith('.json'))
  .sort()) {
  const registryPath = `${registryDirectory}/${name}`;
  const item = JSON.parse(await fs.readFile(path.join(projectDirectory, registryPath), 'utf8'));
  const shadcn = name.startsWith('shadcn-');
  const componentName = name.replace(/^shadcn-/, '').replace(/\.json$/, '');
  const files = [];
  for (const file of item.files) {
    const leaf = path.basename(file.path);
    const sourcePath =
      file.type === 'registry:hook'
        ? `src/hooks/${leaf}`
        : `src/components/${shadcn ? 'ui' : 'motion-primitives'}/${leaf}`;
    const cliPath =
      file.type === 'registry:hook'
        ? `provenance/cli-installed/hooks/${leaf}`
        : `provenance/cli-installed/ui/${leaf}`;
    files.push({
      registryPath: file.path,
      sourcePath,
      sha256: await hash(sourcePath),
      cliPath,
      cliSha256: await hash(cliPath),
    });
  }
  components.push({
    name: componentName,
    source: shadcn
      ? `https://ui.shadcn.com/r/styles/new-york-v4/${componentName}.json`
      : `https://motion-primitives.com/c/${componentName}.json`,
    registryPath,
    registrySha256: await hash(registryPath),
    files,
  });
}
const packageJson = JSON.parse(
  await fs.readFile(path.join(projectDirectory, 'package.json'), 'utf8'),
);
await fs.writeFile(
  path.join(projectDirectory, 'provenance/component-sources.json'),
  `${JSON.stringify(
    {
      officialInstallation: {
        cli: 'shadcn@4.21.4',
        result: 'exit 0; 11 shadcn components + 3 Motion components installed',
        sourceLock: 'provenance/installation-package-lock.json',
      },
      observedUpstreamCommits: {
        'shadcn-ui/ui': 'c2a67849be260701852b0977ba15eb5f3a0ce2a4',
        'ibelick/motion-primitives': '120f64f6ca60348e251f929e9c81f11ccbe45eda',
        'emilkowalski/sonner': '8e4662b39255120b62138312058f5d77c0139a5e',
      },
      note: 'Observed repository branch commits do not establish the CDN registry generation commit. Registry bytes and hashes are preserved separately.',
      dependencies: packageJson.dependencies,
      devDependencies: packageJson.devDependencies,
      overrides: packageJson.overrides,
      packageLockSha256: await hash('package-lock.json'),
      components,
    },
    null,
    2,
  )}\n`,
);
console.log(`Preserved source hashes for ${components.length} official registry components.`);
