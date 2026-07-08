import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'assets/grainient',
    emptyOutDir: true,
    minify: 'esbuild',
    lib: {
      entry: 'src/grainient-entry.js',
      formats: ['es'],
      fileName: () => 'grainient-projects.js',
    },
  },
});
