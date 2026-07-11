import { readFile, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const ditherScriptTag = '<script type="module" src="./assets/dither/dither-landing.js"></script>';
const grainientScriptTag = '<script type="module" src="./assets/grainient/grainient-projects.js"></script>';
const minBundleBytes = 2_000;
const projectPages = [
  'regression-lab.html',
  'auto-claims.html',
  'joblink-tracker.html',
];

const requiredFiles = [
  'dist/index.html',
  'dist/hero-disc-poster.jpg',
  'dist/assets/dither/dither-landing.js',
  'dist/assets/dither/dither-landing.css',
  'dist/assets/grainient/grainient-projects.js',
  ...projectPages.map((page) => `dist/${page}`),
];

const fail = (message) => {
  console.error(`Build verification failed: ${message}`);
  process.exit(1);
};

for (const file of requiredFiles) {
  try {
    await stat(join(root, file));
  } catch {
    fail(`${file} is missing.`);
  }
}

const distHtml = await readFile(join(root, 'dist/index.html'), 'utf8');
if (!distHtml.includes('class="portfolio-page"')) {
  fail('dist/index.html is missing the route-specific portfolio page class.');
}

if (!distHtml.includes('restorePortfolioBackground')) {
  fail('dist/index.html is missing the portfolio background restore hook.');
}

if (!distHtml.includes('hero-disc-poster.jpg')) {
  fail('dist/index.html is missing the disc background fallback image.');
}

if (distHtml.includes('poster="./cinematic-base.jpg"')) {
  fail('dist/index.html still uses the gray geometric image as a video poster.');
}

if (!distHtml.includes(ditherScriptTag)) {
  fail('dist/index.html does not load ./assets/dither/dither-landing.js.');
}

if (!distHtml.includes('id="intro-dither-root"')) {
  fail('dist/index.html is missing the intro #intro-dither-root mount.');
}

if (distHtml.includes('id="site-dither-root"')) {
  fail('dist/index.html should not mount Dither into the global site background.');
}

const ditherBundlePath = join(root, 'dist/assets/dither/dither-landing.js');
const ditherBundleStats = await stat(ditherBundlePath);
if (ditherBundleStats.size < minBundleBytes) {
  fail(`dist/assets/dither/dither-landing.js is too small (${ditherBundleStats.size} bytes).`);
}

const ditherBundle = await readFile(ditherBundlePath, 'utf8');

if (!ditherBundle.includes('requestAnimationFrame')) {
  fail('Dither bundle does not include an animation frame loop.');
}

if (!ditherBundle.includes('performance.now')) {
  fail('Dither bundle does not include a continuously updated time source.');
}

if (!ditherBundle.includes('intro-dither-root')) {
  fail('Dither bundle does not mount into #intro-dither-root.');
}

if (ditherBundle.includes('site-dither-root')) {
  fail('Dither bundle should only mount into the intro overlay.');
}

console.log(`Verified Dither bundle: ${ditherBundleStats.size} bytes.`);

const grainientBundlePath = join(root, 'dist/assets/grainient/grainient-projects.js');
const grainientBundleStats = await stat(grainientBundlePath);
if (grainientBundleStats.size < minBundleBytes) {
  fail(`dist/assets/grainient/grainient-projects.js is too small (${grainientBundleStats.size} bytes).`);
}

const grainientBundle = await readFile(grainientBundlePath, 'utf8');
if (!grainientBundle.includes('requestAnimationFrame')) {
  fail('Grainient bundle does not include an animation frame loop.');
}

if (!grainientBundle.includes('grainient-bg')) {
  fail('Grainient bundle does not mount into the project page background.');
}

if (!grainientBundle.includes('pageshow') || !grainientBundle.includes('pagehide')) {
  fail('Grainient bundle is missing back-forward cache lifecycle handling.');
}

for (const page of projectPages) {
  const pageHtml = await readFile(join(root, 'dist', page), 'utf8');
  if (!pageHtml.includes('class="project-page"')) {
    fail(`dist/${page} is missing the route-specific project page class.`);
  }

  if (!pageHtml.includes('id="grainient-bg"')) {
    fail(`dist/${page} is missing the #grainient-bg mount.`);
  }

  if (!pageHtml.includes(grainientScriptTag)) {
    fail(`dist/${page} does not load ./assets/grainient/grainient-projects.js.`);
  }
}

console.log(`Verified Grainient project background bundle: ${grainientBundleStats.size} bytes.`);
