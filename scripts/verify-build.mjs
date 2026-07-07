import { readFile, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const ditherScriptTag = '<script type="module" src="./assets/dither/dither-landing.js"></script>';
const minBundleBytes = 500_000;

const requiredFiles = [
  'dist/index.html',
  'dist/assets/dither/dither-landing.js',
  'dist/assets/dither/dither-landing.css',
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
if (!distHtml.includes(ditherScriptTag)) {
  fail('dist/index.html does not load ./assets/dither/dither-landing.js.');
}

if (!distHtml.includes('id="site-dither-root"')) {
  fail('dist/index.html is missing the persistent #site-dither-root background mount.');
}

const ditherBundlePath = join(root, 'dist/assets/dither/dither-landing.js');
const ditherBundleStats = await stat(ditherBundlePath);
if (ditherBundleStats.size < minBundleBytes) {
  fail(`dist/assets/dither/dither-landing.js is too small (${ditherBundleStats.size} bytes).`);
}

const ditherBundle = await readFile(ditherBundlePath, 'utf8');
if (!ditherBundle.includes('frameloop:"always"') && !ditherBundle.includes('frameloop: "always"')) {
  fail('Dither bundle does not include frameloop="always".');
}

if (!ditherBundle.includes('getElapsedTime')) {
  fail('Dither bundle does not include the useFrame time update path.');
}

if (!ditherBundle.includes('site-dither-root')) {
  fail('Dither bundle does not mount the persistent site background root.');
}

console.log(`Verified Dither bundle: ${ditherBundleStats.size} bytes.`);
