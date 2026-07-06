import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  build: {
    outDir: 'assets/dither',
    emptyOutDir: true,
    minify: 'esbuild',
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
