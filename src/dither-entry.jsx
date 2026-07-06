import { createRoot } from 'react-dom/client';
import Dither from './Dither.jsx';

const mount = document.getElementById('intro-dither-root');

if (mount) {
  const root = createRoot(mount);

  root.render(
    <Dither
      waveColor={[0.403921568627451, 0.17254901960784313, 0.5294117647058824]}
      disableAnimation={false}
      enableMouseInteraction
      mouseRadius={0.1}
      colorNum={5.2}
      waveAmplitude={0.33}
      waveFrequency={2.4}
      waveSpeed={0.04}
    />
  );

  window.addEventListener('portfolio:intro-complete', () => {
    root.unmount();
  }, { once: true });
}
