const b = document.getElementById("intro-dither-root"), k = [0.403921568627451, 0.17254901960784313, 0.5294117647058824], v = 5.2, A = 2, F = 0.33, C = 2.4, R = 0.04, z = [
  0,
  48,
  12,
  60,
  3,
  51,
  15,
  63,
  32,
  16,
  44,
  28,
  35,
  19,
  47,
  31,
  8,
  56,
  4,
  52,
  11,
  59,
  7,
  55,
  40,
  24,
  36,
  20,
  43,
  27,
  39,
  23,
  2,
  50,
  14,
  62,
  1,
  49,
  13,
  61,
  34,
  18,
  46,
  30,
  33,
  17,
  45,
  29,
  10,
  58,
  6,
  54,
  9,
  57,
  5,
  53,
  42,
  26,
  38,
  22,
  41,
  25,
  37,
  21
].map((e) => e / 64 - 0.25), N = (e, t) => {
  const r = 1 / (v - 1), h = Math.max(0, Math.min(1, e + t * r - 0.2));
  return Math.round(h * (v - 1)) / (v - 1);
}, I = (e) => {
  const t = document.createElement("div");
  return t.className = "dither-css-fallback", t.setAttribute("aria-hidden", "true"), e.appendChild(t), () => t.remove();
}, O = (e) => {
  const t = document.createElement("canvas"), r = t.getContext("2d", { alpha: !1 });
  if (!r)
    return I(e);
  t.className = "dither-canvas", t.setAttribute("aria-hidden", "true"), e.appendChild(t);
  const h = document.createElement("canvas"), m = h.getContext("2d", { alpha: !1 });
  if (!m)
    return t.remove(), I(e);
  let u = 0, c = 0, d = 0, M = null, L = performance.now();
  const w = k.map((o) => Math.round(o * 255)), p = () => {
    const o = e.getBoundingClientRect();
    c = Math.max(1, Math.ceil(o.width / A)), d = Math.max(1, Math.ceil(o.height / A)), h.width = c, h.height = d, t.width = Math.max(1, Math.ceil(o.width)), t.height = Math.max(1, Math.ceil(o.height)), M = m.createImageData(c, d), r.imageSmoothingEnabled = !1;
  }, y = (o, l, s) => {
    const n = (o / c - 0.5) * (c / d), a = l / d - 0.5, i = s * R, E = Math.sin((n * 3.3 + a * 2.1 + i * 8) * C) + Math.sin((n * -2.2 + a * 4.8 - i * 6) * (C * 0.72)) + Math.cos(Math.hypot(n * 1.25, a) * 7.4 - i * 10), f = Math.sin(n * 18 + s * 0.18) * Math.cos(a * 15 - s * 0.12) * F;
    return Math.max(0, Math.min(1, 0.42 + E * 0.16 + f * 0.34));
  }, x = (o) => {
    const l = (o - L) / 1e3, s = M.data;
    for (let n = 0; n < d; n += 1)
      for (let a = 0; a < c; a += 1) {
        const i = (n * c + a) * 4, E = z[n % 8 * 8 + a % 8], f = y(a, n, l), _ = Math.max(0, Math.sin(a * 0.095 + n * 0.04 - l * 0.9)) * 42, g = N(f, E);
        s[i] = Math.round(w[0] * g), s[i + 1] = Math.round(w[1] * g), s[i + 2] = Math.round((w[2] + _) * g), s[i + 3] = 255;
      }
    m.putImageData(M, 0, 0), r.clearRect(0, 0, t.width, t.height), r.drawImage(h, 0, 0, t.width, t.height), u = window.requestAnimationFrame(x);
  }, D = () => {
    window.cancelAnimationFrame(u), window.removeEventListener("resize", p), t.remove();
  };
  return p(), window.addEventListener("resize", p, { passive: !0 }), u = window.requestAnimationFrame(x), D;
};
if (b) {
  const e = O(b);
  window.addEventListener("portfolio:intro-complete", e, { once: !0 });
}
