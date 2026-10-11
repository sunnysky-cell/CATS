import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { mergeConfig } from 'vite';
import baseConfig from './vite.config';

const directory = path.dirname(fileURLToPath(import.meta.url));
export default mergeConfig(baseConfig, {
  build: {
    lib: {
      entry: path.join(directory, 'src/agent-workspace.tsx'),
      fileName: () => 'agent-workspace.js',
      cssFileName: 'agent-workspace',
    },
  },
});
