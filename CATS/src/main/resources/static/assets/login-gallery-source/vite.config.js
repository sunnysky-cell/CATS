import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import glsl from 'vite-plugin-glsl';

export default defineConfig({
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  plugins: [glsl()],
  build: {
    target: 'es2022',
    lib: {
      entry: fileURLToPath(new URL('./src/login-gallery.js', import.meta.url)),
      formats: ['es'],
      fileName: () => 'login-gallery.js',
    },
    sourcemap: true,
    minify: 'esbuild',
  },
});
