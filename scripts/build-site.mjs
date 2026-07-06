import { cp, mkdir, readdir, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const dist = join(root, 'dist');

const excluded = new Set([
  '.git',
  '.github',
  '.vite',
  'dist',
  'node_modules',
  'scripts',
  'src',
  'package.json',
  'package-lock.json',
  'pnpm-lock.yaml',
  'vite.dither.config.mjs',
]);

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

const entries = await readdir(root, { withFileTypes: true });

await Promise.all(entries
  .filter((entry) => !excluded.has(entry.name))
  .map((entry) => cp(join(root, entry.name), join(dist, entry.name), { recursive: true })));

console.log('Built static portfolio into dist/');
