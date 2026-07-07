import React from 'react';
import { createRoot } from 'react-dom/client';
import Dither from './Dither.jsx';

const ditherProps = {
  waveColor: [0.403921568627451, 0.17254901960784313, 0.5294117647058824],
  disableAnimation: false,
  enableMouseInteraction: true,
  mouseRadius: 0.1,
  colorNum: 5.2,
  pixelSize: 2,
  waveAmplitude: 0.33,
  waveFrequency: 2.4,
  waveSpeed: 0.04
};

const mountDither = (id, { unmountOnIntroComplete = false } = {}) => {
  const mount = document.getElementById(id);
  if (!mount) return;

  const root = createRoot(mount);

  root.render(<Dither {...ditherProps} />);

  if (!unmountOnIntroComplete) return;

  window.addEventListener('portfolio:intro-complete', () => {
    root.unmount();
  }, { once: true });
};

mountDither('intro-dither-root', { unmountOnIntroComplete: true });
mountDither('site-dither-root');
