import { cp, mkdir, readdir, rm } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const dist = join(root, 'dist');

const excluded = new Set([
  '.git',
  '.gitignore',
  '.github',
  '.vite',
  'dist',
  'node_modules',
  'scripts',
  'src',
  'package.json',
  'package-lock.json',
  'pnpm-lock.yaml',
  'README.md',
  'vite.grainient.config.mjs',
  'cinematic-base.jpg',
  'cinematic-poster.jpg',
  'hero-frame.png',
  'intro-dither.png',
  'intro-dither.webm',
  'y2k-poster.jpg',
]);

const excludedDeployPaths = new Set([
  'assets/project-visuals/auto-claims-age-distribution.png',
  'assets/project-visuals/auto-claims-average.png',
  'assets/project-visuals/auto-claims-rate.png',
]);

const shouldCopy = (source) => {
  const deployPath = relative(root, source).replaceAll('\\', '/');
  return !excludedDeployPaths.has(deployPath);
};

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

const entries = await readdir(root, { withFileTypes: true });

await Promise.all(entries
  .filter((entry) => !excluded.has(entry.name))
  .map((entry) => cp(join(root, entry.name), join(dist, entry.name), { recursive: true, filter: shouldCopy })));

console.log('Built static portfolio into dist/');
