import { createRoot } from 'react-dom/client';
import Dither from './Dither.jsx';

const mount = document.getElementById('intro-dither-root');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (mount) {
  const root = createRoot(mount);

  root.render(
    <Dither
      waveColor={[0.4745098039215686, 0.12549019607843137, 0.12549019607843137]}
      disableAnimation={reducedMotion ? true : false}
      enableMouseInteraction={!reducedMotion}
      mouseRadius={0.1}
      colorNum={6}
      waveAmplitude={0.25}
      waveFrequency={2.3}
      waveSpeed={0.04}
    />
  );

  window.addEventListener('portfolio:intro-complete', () => {
    root.unmount();
  }, { once: true });
}
