import React from 'react';
import { createRoot } from 'react-dom/client';
import Dither from './Dither.jsx';

const mount = document.getElementById('intro-dither-root');

if (mount && document.documentElement.dataset.introComplete !== 'true') {
  const root = createRoot(mount);
  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  const renderDither = () => {
    const prefersReducedMotion = reducedMotionQuery.matches;
    root.render(
      <Dither
        waveColor={[0.403921568627451, 0.12156862745098039, 0.6745098039215687]}
        disableAnimation={prefersReducedMotion}
        enableMouseInteraction={!prefersReducedMotion}
        mouseRadius={0.2}
        colorNum={5.5}
        waveAmplitude={0.35}
        waveFrequency={3}
        waveSpeed={0.07}
      />
    );
  };

  const stopDither = () => {
    reducedMotionQuery.removeEventListener('change', renderDither);
    root.unmount();
  };

  renderDither();
  reducedMotionQuery.addEventListener('change', renderDither);
  window.addEventListener('portfolio:intro-complete', stopDither, { once: true });
}
