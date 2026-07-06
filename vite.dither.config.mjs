import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'assets/dither',
    emptyOutDir: true,
    lib: {
      entry: 'src/dither-entry.jsx',
      formats: ['es'],
      fileName: () => 'dither-landing.js',
    },
    rollupOptions: {
      output: {
        assetFileNames: 'dither-landing[extname]',
      },
    },
  },
});
