import { readFile, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const grainientScriptTag = '<script type="module" src="./assets/grainient/grainient-projects.js"></script>';
const minGrainientBundleBytes = 2_000;
const projectPages = [
  'regression-lab.html',
  'auto-claims.html',
  'joblink-tracker.html',
];

const requiredFiles = [
  'dist/index.html',
  'dist/hero-disc-poster.jpg',
  'dist/assets/grainient/grainient-projects.js',
  ...projectPages.map((page) => `dist/${page}`),
];

const excludedDeployFiles = [
  'dist/cinematic-base.jpg',
  'dist/cinematic-poster.jpg',
  'dist/hero-frame.png',
  'dist/intro-dither.png',
  'dist/intro-dither.webm',
  'dist/y2k-poster.jpg',
  'dist/assets/project-visuals/auto-claims-age-distribution.png',
  'dist/assets/project-visuals/auto-claims-average.png',
  'dist/assets/project-visuals/auto-claims-rate.png',
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

for (const file of excludedDeployFiles) {
  try {
    await stat(join(root, file));
    fail(`${file} is an unreferenced asset and should not be deployed.`);
  } catch (error) {
    if (error?.code !== 'ENOENT') throw error;
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

if (distHtml.includes('cdn.tailwindcss.com') || distHtml.includes('cdnjs.cloudflare.com/ajax/libs/gsap')) {
  fail('dist/index.html still loads an unused render-blocking library.');
}

if (distHtml.includes('<link rel="preload" href="./hero.mp4"')) {
  fail('dist/index.html still eagerly preloads the background video.');
}

if (!distHtml.includes('id="hero-video" muted playsinline preload="metadata"')) {
  fail('dist/index.html does not use metadata-only preload for the main background video.');
}

if (!distHtml.includes('class="soft-panel-video" muted playsinline preload="none"')) {
  fail('dist/index.html does not defer the decorative panel video.');
}

for (const removedVideoScrubToken of [
  'requestVideoSync',
  'syncVideoToScroll',
  'syncSoftPanelFrame',
]) {
  if (distHtml.includes(removedVideoScrubToken)) {
    fail(`dist/index.html still contains expensive scroll-video seeking: ${removedVideoScrubToken}`);
  }
}

if (!distHtml.includes('const scrollSeekInterval = coarsePointerQuery.matches ? 90 : 60')) {
  fail('dist/index.html is missing the rate-limited scroll-video seek interval.');
}

if (!distHtml.includes("window.addEventListener('scroll', requestScrollScrub")) {
  fail('dist/index.html is missing scroll-controlled background-video motion.');
}

if (distHtml.includes('video.play()')) {
  fail('dist/index.html continuously plays the background video instead of tying it to scroll.');
}

if (distHtml.includes("softPanelVideo.load()")) {
  fail('dist/index.html still starts a second video decoder for the decorative panel.');
}

if (/<video class="soft-panel-video"[\s\S]*?<source[\s\S]*?<\/video>/.test(distHtml)) {
  fail('dist/index.html still gives the decorative panel a second video source.');
}

if (distHtml.includes("I'm always curious about how people use data in their everyday work.")) {
  fail('dist/index.html still includes the removed contact footer sentence.');
}

if (distHtml.includes('poster="./cinematic-base.jpg"')) {
  fail('dist/index.html still uses the gray geometric image as a video poster.');
}

for (const removedIntroToken of [
  'id="intro-overlay"',
  'id="intro-dither-root"',
  'assets/dither/',
  'class="portfolio-page intro-active"',
  'portfolio:intro-complete',
]) {
  if (distHtml.includes(removedIntroToken)) {
    fail(`dist/index.html still contains removed intro code: ${removedIntroToken}`);
  }
}

const grainientBundlePath = join(root, 'dist/assets/grainient/grainient-projects.js');
const grainientBundleStats = await stat(grainientBundlePath);
if (grainientBundleStats.size < minGrainientBundleBytes) {
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
