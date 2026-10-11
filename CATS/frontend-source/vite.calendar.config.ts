import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import baseConfig from './vite.config';

const projectDirectory = path.dirname(fileURLToPath(import.meta.url));
export default defineConfig({
  ...baseConfig,
  build: {
    ...baseConfig.build,
    lib: {
      entry: path.join(projectDirectory, 'src/calendar-workspace.tsx'),
      formats: ['es'],
      fileName: () => 'calendar-workspace.js',
      cssFileName: 'calendar-workspace',
    },
  },
});
