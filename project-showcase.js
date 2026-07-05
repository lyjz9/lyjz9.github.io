document.querySelectorAll('[data-graph-viewer]').forEach((viewer) => {
  const image = viewer.querySelector('[data-graph-image]');
  const caption = viewer.querySelector('[data-graph-caption]');
  const readout = viewer.querySelector('[data-graph-readout]');
  const buttons = Array.from(viewer.querySelectorAll('[data-graph-src]'));

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      if (!image || button.classList.contains('is-active')) return;

      image.classList.add('is-switching');

      window.setTimeout(() => {
        image.src = button.dataset.graphSrc;
        image.alt = button.dataset.graphAlt || '';
        if (caption) {
          caption.textContent = button.dataset.graphCaption || '';
        }

        if (readout) {
          readout.textContent = `Now viewing: ${button.dataset.graphLabel || button.textContent.trim()}`;
        }

        image.addEventListener('load', () => image.classList.remove('is-switching'), { once: true });
        window.setTimeout(() => image.classList.remove('is-switching'), 220);
      }, 110);

      buttons.forEach((item) => {
        const isActive = item === button;
        item.classList.toggle('is-active', isActive);
        item.setAttribute('aria-pressed', String(isActive));
      });
    });
  });
});
