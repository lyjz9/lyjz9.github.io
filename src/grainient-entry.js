import { Mesh, Program, Renderer, Triangle, Vec2 } from 'ogl';

const settings = {
  color1: '#9e5d9c',
  color2: '#2777ff',
  color3: '#a89bb5',
  timeSpeed: 0.3,
  colorBalance: -0.08,
  warpStrength: 1.0,
  warpFrequency: 5.0,
  warpSpeed: 2.2,
  warpAmplitude: 50.0,
  blendAngle: 4,
  blendSoftness: 0.18,
  rotationAmount: 500.0,
  noiseScale: 2.0,
  grainAmount: 0.07,
  grainScale: 2.0,
  grainAnimated: false,
  contrast: 1.5,
  gamma: 1.0,
  saturation: 0.85,
  centerX: 0.0,
  centerY: 0.0,
  zoom: 0.7,
};

const vertex = `
attribute vec2 uv;
attribute vec2 position;
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragment = `
precision highp float;

uniform vec2 uResolution;
uniform float uTime;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform float uTimeSpeed;
uniform float uColorBalance;
uniform float uWarpStrength;
uniform float uWarpFrequency;
uniform float uWarpSpeed;
uniform float uWarpAmplitude;
uniform float uBlendAngle;
uniform float uBlendSoftness;
uniform float uRotationAmount;
uniform float uNoiseScale;
uniform float uGrainAmount;
uniform float uGrainScale;
uniform float uGrainAnimated;
uniform float uContrast;
uniform float uGamma;
uniform float uSaturation;
uniform float uCenterX;
uniform float uCenterY;
uniform float uZoom;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);

  return mix(
    mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float value = 0.0;
  float amplitude = 0.5;
  mat2 rot = mat2(0.8, -0.6, 0.6, 0.8);

  for (int i = 0; i < 5; i++) {
    value += amplitude * noise(p);
    p = rot * p * 2.05 + 17.0;
    amplitude *= 0.5;
  }

  return value;
}

vec3 adjustColor(vec3 color) {
  color = (color - 0.5) * uContrast + 0.5;
  float luminance = dot(color, vec3(0.299, 0.587, 0.114));
  color = mix(vec3(luminance), color, uSaturation);
  color = pow(max(color, 0.0), vec3(1.0 / max(uGamma, 0.001)));
  return clamp(color, 0.0, 1.0);
}

void main() {
  vec2 frag = gl_FragCoord.xy;
  vec2 uv = frag / uResolution.xy;
  vec2 p = (frag - 0.5 * uResolution.xy) / min(uResolution.x, uResolution.y);
  p -= vec2(uCenterX, uCenterY);
  p *= uZoom;

  float t = uTime * uTimeSpeed;
  float baseNoise = fbm(p * uNoiseScale + vec2(t * 0.18, -t * 0.11));
  vec2 warp = vec2(
    sin((p.y + baseNoise) * uWarpFrequency + t * uWarpSpeed),
    cos((p.x - baseNoise) * uWarpFrequency - t * uWarpSpeed)
  );
  warp *= (uWarpAmplitude / max(uResolution.y, 1.0)) * uWarpStrength;

  vec2 q = p + warp;
  float angle = uBlendAngle + 0.22 * sin(t * 0.3);
  vec2 direction = vec2(cos(angle), sin(angle));
  float blend = dot(q, direction) + uColorBalance + 0.42 * fbm(q * 2.4 + t * 0.35);
  blend = smoothstep(0.5 - uBlendSoftness, 0.5 + uBlendSoftness, blend + 0.5);

  float rotationField = sin((q.x - q.y) * uRotationAmount * 0.012 + t * 1.25 + baseNoise * 4.0);
  float thirdMix = smoothstep(-0.35, 0.85, rotationField + fbm(q * 3.1 - t * 0.2));

  vec3 color = mix(uColor1, uColor2, blend);
  color = mix(color, uColor3, thirdMix * 0.55);

  float grainTime = mix(0.0, t * 80.0, uGrainAnimated);
  float grain = hash(floor(uv * uResolution.xy / max(uGrainScale, 0.001)) + grainTime);
  color += (grain - 0.5) * uGrainAmount;

  gl_FragColor = vec4(adjustColor(color), 1.0);
}
`;

const hexToRgb = (hex) => {
  const value = hex.replace('#', '');
  const int = Number.parseInt(value, 16);
  return [
    ((int >> 16) & 255) / 255,
    ((int >> 8) & 255) / 255,
    (int & 255) / 255,
  ];
};

const startFallback = (root) => {
  root.classList.add('has-grainient-fallback');
};

const mountGrainient = () => {
  const root = document.querySelector('#grainient-bg, .grainient-bg');
  if (!root) return;

  root.innerHTML = '';
  root.classList.add('is-loading');

  let renderer;
  let frameId = 0;

  try {
    renderer = new Renderer({
      alpha: false,
      antialias: false,
      dpr: Math.min(window.devicePixelRatio || 1, 1.5),
    });
  } catch (error) {
    console.warn('Grainient WebGL background fell back to CSS animation.', error);
    startFallback(root);
    return;
  }

  const { gl } = renderer;
  gl.canvas.setAttribute('aria-hidden', 'true');
  gl.clearColor(0.62, 0.36, 0.61, 1);
  root.appendChild(gl.canvas);
  root.classList.remove('is-loading');
  root.classList.add('has-webgl-grainient');

  const uniforms = {
    uResolution: { value: new Vec2(1, 1) },
    uTime: { value: 0 },
    uColor1: { value: hexToRgb(settings.color1) },
    uColor2: { value: hexToRgb(settings.color2) },
    uColor3: { value: hexToRgb(settings.color3) },
    uTimeSpeed: { value: settings.timeSpeed },
    uColorBalance: { value: settings.colorBalance },
    uWarpStrength: { value: settings.warpStrength },
    uWarpFrequency: { value: settings.warpFrequency },
    uWarpSpeed: { value: settings.warpSpeed },
    uWarpAmplitude: { value: settings.warpAmplitude },
    uBlendAngle: { value: settings.blendAngle },
    uBlendSoftness: { value: settings.blendSoftness },
    uRotationAmount: { value: settings.rotationAmount },
    uNoiseScale: { value: settings.noiseScale },
    uGrainAmount: { value: settings.grainAmount },
    uGrainScale: { value: settings.grainScale },
    uGrainAnimated: { value: settings.grainAnimated ? 1 : 0 },
    uContrast: { value: settings.contrast },
    uGamma: { value: settings.gamma },
    uSaturation: { value: settings.saturation },
    uCenterX: { value: settings.centerX },
    uCenterY: { value: settings.centerY },
    uZoom: { value: settings.zoom },
  };

  const geometry = new Triangle(gl);
  const program = new Program(gl, { vertex, fragment, uniforms });
  const mesh = new Mesh(gl, { geometry, program });

  const resize = () => {
    const width = Math.max(root.clientWidth || window.innerWidth, 1);
    const height = Math.max(root.clientHeight || window.innerHeight, 1);
    renderer.setSize(width, height);
    uniforms.uResolution.value.set(gl.canvas.width, gl.canvas.height);
  };

  const animate = (time = 0) => {
    uniforms.uTime.value = time * 0.001;
    renderer.render({ scene: mesh });
    frameId = window.requestAnimationFrame(animate);
  };

  const cleanup = () => {
    window.cancelAnimationFrame(frameId);
    window.removeEventListener('resize', resize);
    gl.getExtension('WEBGL_lose_context')?.loseContext();
    gl.canvas.remove();
  };

  window.addEventListener('resize', resize);
  window.addEventListener('pagehide', cleanup, { once: true });
  resize();
  animate(performance.now());
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountGrainient, { once: true });
} else {
  mountGrainient();
}
