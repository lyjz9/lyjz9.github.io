import './Dither.css';

const mount = document.getElementById('intro-dither-root');

const WAVE_COLOR = [0.403921568627451, 0.17254901960784313, 0.5294117647058824];
const COLOR_NUM = 5.2;
const PIXEL_SIZE = 2;
const WAVE_AMPLITUDE = 0.33;
const WAVE_FREQUENCY = 2.4;
const WAVE_SPEED = 0.04;

const bayer8 = [
  0, 48, 12, 60, 3, 51, 15, 63,
  32, 16, 44, 28, 35, 19, 47, 31,
  8, 56, 4, 52, 11, 59, 7, 55,
  40, 24, 36, 20, 43, 27, 39, 23,
  2, 50, 14, 62, 1, 49, 13, 61,
  34, 18, 46, 30, 33, 17, 45, 29,
  10, 58, 6, 54, 9, 57, 5, 53,
  42, 26, 38, 22, 41, 25, 37, 21
].map((value) => value / 64 - 0.25);

const quantize = (value, threshold) => {
  const step = 1 / (COLOR_NUM - 1);
  const biased = Math.max(0, Math.min(1, value + threshold * step - 0.2));
  return Math.round(biased * (COLOR_NUM - 1)) / (COLOR_NUM - 1);
};

const makeFallback = (root) => {
  const fallback = document.createElement('div');
  fallback.className = 'dither-css-fallback';
  fallback.setAttribute('aria-hidden', 'true');
  root.appendChild(fallback);
  return () => fallback.remove();
};

const startDither = (root) => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d', { alpha: false });

  if (!ctx) {
    return makeFallback(root);
  }

  canvas.className = 'dither-canvas';
  canvas.setAttribute('aria-hidden', 'true');
  root.appendChild(canvas);

  const buffer = document.createElement('canvas');
  const bufferCtx = buffer.getContext('2d', { alpha: false });
  if (!bufferCtx) {
    canvas.remove();
    return makeFallback(root);
  }

  let rafId = 0;
  let width = 0;
  let height = 0;
  let imageData = null;
  let startTime = performance.now();
  const waveColor = WAVE_COLOR.map((value) => Math.round(value * 255));

  const resize = () => {
    const rect = root.getBoundingClientRect();
    width = Math.max(1, Math.ceil(rect.width / PIXEL_SIZE));
    height = Math.max(1, Math.ceil(rect.height / PIXEL_SIZE));
    buffer.width = width;
    buffer.height = height;
    canvas.width = Math.max(1, Math.ceil(rect.width));
    canvas.height = Math.max(1, Math.ceil(rect.height));
    imageData = bufferCtx.createImageData(width, height);
    ctx.imageSmoothingEnabled = false;
  };

  const wave = (x, y, time) => {
    const nx = (x / width - 0.5) * (width / height);
    const ny = y / height - 0.5;
    const drift = time * WAVE_SPEED;
    const base =
      Math.sin((nx * 3.3 + ny * 2.1 + drift * 8.0) * WAVE_FREQUENCY) +
      Math.sin((nx * -2.2 + ny * 4.8 - drift * 6.0) * (WAVE_FREQUENCY * 0.72)) +
      Math.cos((Math.hypot(nx * 1.25, ny) * 7.4 - drift * 10.0));
    const detail =
      Math.sin((nx * 18.0 + time * 0.18)) *
      Math.cos((ny * 15.0 - time * 0.12)) *
      WAVE_AMPLITUDE;
    return Math.max(0, Math.min(1, 0.42 + base * 0.16 + detail * 0.34));
  };

  const render = (now) => {
    const time = (now - startTime) / 1000;
    const pixels = imageData.data;

    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        const index = (y * width + x) * 4;
        const threshold = bayer8[(y % 8) * 8 + (x % 8)];
        const value = wave(x, y, time);
        const blueSpark = Math.max(0, Math.sin((x * 0.095) + (y * 0.04) - time * 0.9)) * 42;
        const intensity = quantize(value, threshold);
        pixels[index] = Math.round(waveColor[0] * intensity);
        pixels[index + 1] = Math.round(waveColor[1] * intensity);
        pixels[index + 2] = Math.round((waveColor[2] + blueSpark) * intensity);
        pixels[index + 3] = 255;
      }
    }

    bufferCtx.putImageData(imageData, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(buffer, 0, 0, canvas.width, canvas.height);
    rafId = window.requestAnimationFrame(render);
  };

  const stop = () => {
    window.cancelAnimationFrame(rafId);
    window.removeEventListener('resize', resize);
    canvas.remove();
  };

  resize();
  window.addEventListener('resize', resize, { passive: true });
  rafId = window.requestAnimationFrame(render);
  return stop;
};

if (mount) {
  const stop = startDither(mount);
  window.addEventListener('portfolio:intro-complete', stop, { once: true });
}
