import path from 'node:path';
import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { scopeWorkspaceStyles } from './tools/scope-styles';

const projectDirectory = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  // Library mode leaves NODE_ENV for consumers. Java loads this bundle directly,
  // so bundled React and Motion need their production branches resolved here.
  define: { 'process.env.NODE_ENV': JSON.stringify('production') },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { '@': path.join(projectDirectory, 'src') },
  },
  css: {
    postcss: { plugins: [scopeWorkspaceStyles()] },
  },
  build: {
    outDir: path.resolve(projectDirectory, '../src/main/resources/static/assets'),
    emptyOutDir: false,
    sourcemap: true,
    cssCodeSplit: false,
    lib: {
      entry: path.join(projectDirectory, 'src/course-workspace.tsx'),
      formats: ['es'],
      fileName: () => 'course-workspace.js',
      cssFileName: 'course-workspace',
    },
    rollupOptions: {
      output: { inlineDynamicImports: true },
    },
  },
});
