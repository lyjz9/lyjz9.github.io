function B(e) {
  let t = e[0], i = e[1], s = e[2];
  return Math.sqrt(t * t + i * i + s * s);
}
function W(e, t) {
  return e[0] = t[0], e[1] = t[1], e[2] = t[2], e;
}
function xt(e, t, i, s) {
  return e[0] = t, e[1] = i, e[2] = s, e;
}
function k(e, t, i) {
  return e[0] = t[0] + i[0], e[1] = t[1] + i[1], e[2] = t[2] + i[2], e;
}
function Y(e, t, i) {
  return e[0] = t[0] - i[0], e[1] = t[1] - i[1], e[2] = t[2] - i[2], e;
}
function mt(e, t, i) {
  return e[0] = t[0] * i[0], e[1] = t[1] * i[1], e[2] = t[2] * i[2], e;
}
function yt(e, t, i) {
  return e[0] = t[0] / i[0], e[1] = t[1] / i[1], e[2] = t[2] / i[2], e;
}
function $(e, t, i) {
  return e[0] = t[0] * i, e[1] = t[1] * i, e[2] = t[2] * i, e;
}
function Mt(e, t) {
  let i = t[0] - e[0], s = t[1] - e[1], r = t[2] - e[2];
  return Math.sqrt(i * i + s * s + r * r);
}
function wt(e, t) {
  let i = t[0] - e[0], s = t[1] - e[1], r = t[2] - e[2];
  return i * i + s * s + r * r;
}
function Z(e) {
  let t = e[0], i = e[1], s = e[2];
  return t * t + i * i + s * s;
}
function _t(e, t) {
  return e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e;
}
function At(e, t) {
  return e[0] = 1 / t[0], e[1] = 1 / t[1], e[2] = 1 / t[2], e;
}
function U(e, t) {
  let i = t[0], s = t[1], r = t[2], n = i * i + s * s + r * r;
  return n > 0 && (n = 1 / Math.sqrt(n)), e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e;
}
function ot(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function j(e, t, i) {
  let s = t[0], r = t[1], n = t[2], h = i[0], l = i[1], a = i[2];
  return e[0] = r * a - n * l, e[1] = n * h - s * a, e[2] = s * l - r * h, e;
}
function Et(e, t, i, s) {
  let r = t[0], n = t[1], h = t[2];
  return e[0] = r + s * (i[0] - r), e[1] = n + s * (i[1] - n), e[2] = h + s * (i[2] - h), e;
}
function bt(e, t, i, s, r) {
  const n = Math.exp(-s * r);
  let h = t[0], l = t[1], a = t[2];
  return e[0] = i[0] + (h - i[0]) * n, e[1] = i[1] + (l - i[1]) * n, e[2] = i[2] + (a - i[2]) * n, e;
}
function vt(e, t, i) {
  let s = t[0], r = t[1], n = t[2], h = i[3] * s + i[7] * r + i[11] * n + i[15];
  return h = h || 1, e[0] = (i[0] * s + i[4] * r + i[8] * n + i[12]) / h, e[1] = (i[1] * s + i[5] * r + i[9] * n + i[13]) / h, e[2] = (i[2] * s + i[6] * r + i[10] * n + i[14]) / h, e;
}
function St(e, t, i) {
  let s = t[0], r = t[1], n = t[2], h = i[3] * s + i[7] * r + i[11] * n + i[15];
  return h = h || 1, e[0] = (i[0] * s + i[4] * r + i[8] * n) / h, e[1] = (i[1] * s + i[5] * r + i[9] * n) / h, e[2] = (i[2] * s + i[6] * r + i[10] * n) / h, e;
}
function Ct(e, t, i) {
  let s = t[0], r = t[1], n = t[2];
  return e[0] = s * i[0] + r * i[3] + n * i[6], e[1] = s * i[1] + r * i[4] + n * i[7], e[2] = s * i[2] + r * i[5] + n * i[8], e;
}
function Ft(e, t, i) {
  let s = t[0], r = t[1], n = t[2], h = i[0], l = i[1], a = i[2], c = i[3], f = l * n - a * r, o = a * s - h * n, d = h * r - l * s, u = l * d - a * o, g = a * f - h * d, p = h * o - l * f, x = c * 2;
  return f *= x, o *= x, d *= x, u *= 2, g *= 2, p *= 2, e[0] = s + f + u, e[1] = r + o + g, e[2] = n + d + p, e;
}
const zt = /* @__PURE__ */ (function() {
  const e = [0, 0, 0], t = [0, 0, 0];
  return function(i, s) {
    W(e, i), W(t, s), U(e, e), U(t, t);
    let r = ot(e, t);
    return r > 1 ? 0 : r < -1 ? Math.PI : Math.acos(r);
  };
})();
function Lt(e, t) {
  return e[0] === t[0] && e[1] === t[1] && e[2] === t[2];
}
class T extends Array {
  constructor(t = 0, i = t, s = t) {
    return super(t, i, s), this;
  }
  get x() {
    return this[0];
  }
  get y() {
    return this[1];
  }
  get z() {
    return this[2];
  }
  set x(t) {
    this[0] = t;
  }
  set y(t) {
    this[1] = t;
  }
  set z(t) {
    this[2] = t;
  }
  set(t, i = t, s = t) {
    return t.length ? this.copy(t) : (xt(this, t, i, s), this);
  }
  copy(t) {
    return W(this, t), this;
  }
  add(t, i) {
    return i ? k(this, t, i) : k(this, this, t), this;
  }
  sub(t, i) {
    return i ? Y(this, t, i) : Y(this, this, t), this;
  }
  multiply(t) {
    return t.length ? mt(this, this, t) : $(this, this, t), this;
  }
  divide(t) {
    return t.length ? yt(this, this, t) : $(this, this, 1 / t), this;
  }
  inverse(t = this) {
    return At(this, t), this;
  }
  // Can't use 'length' as Array.prototype uses it
  len() {
    return B(this);
  }
  distance(t) {
    return t ? Mt(this, t) : B(this);
  }
  squaredLen() {
    return Z(this);
  }
  squaredDistance(t) {
    return t ? wt(this, t) : Z(this);
  }
  negate(t = this) {
    return _t(this, t), this;
  }
  cross(t, i) {
    return i ? j(this, t, i) : j(this, this, t), this;
  }
  scale(t) {
    return $(this, this, t), this;
  }
  normalize() {
    return U(this, this), this;
  }
  dot(t) {
    return ot(this, t);
  }
  equals(t) {
    return Lt(this, t);
  }
  applyMatrix3(t) {
    return Ct(this, this, t), this;
  }
  applyMatrix4(t) {
    return vt(this, this, t), this;
  }
  scaleRotateMatrix4(t) {
    return St(this, this, t), this;
  }
  applyQuaternion(t) {
    return Ft(this, this, t), this;
  }
  angle(t) {
    return zt(this, t);
  }
  lerp(t, i) {
    return Et(this, this, t, i), this;
  }
  smoothLerp(t, i, s) {
    return bt(this, this, t, i, s), this;
  }
  clone() {
    return new T(this[0], this[1], this[2]);
  }
  fromArray(t, i = 0) {
    return this[0] = t[i], this[1] = t[i + 1], this[2] = t[i + 2], this;
  }
  toArray(t = [], i = 0) {
    return t[i] = this[0], t[i + 1] = this[1], t[i + 2] = this[2], t;
  }
  transformDirection(t) {
    const i = this[0], s = this[1], r = this[2];
    return this[0] = t[0] * i + t[4] * s + t[8] * r, this[1] = t[1] * i + t[5] * s + t[9] * r, this[2] = t[2] * i + t[6] * s + t[10] * r, this.normalize();
  }
}
const Q = /* @__PURE__ */ new T();
let Rt = 1, Tt = 1, H = !1;
class Ot {
  constructor(t, i = {}) {
    t.canvas || console.error("gl not passed as first argument to Geometry"), this.gl = t, this.attributes = i, this.id = Rt++, this.VAOs = {}, this.drawRange = { start: 0, count: 0 }, this.instancedCount = 0, this.gl.renderer.bindVertexArray(null), this.gl.renderer.currentGeometry = null, this.glState = this.gl.renderer.state;
    for (let s in i)
      this.addAttribute(s, i[s]);
  }
  addAttribute(t, i) {
    if (this.attributes[t] = i, i.id = Tt++, i.size = i.size || 1, i.type = i.type || (i.data.constructor === Float32Array ? this.gl.FLOAT : i.data.constructor === Uint16Array ? this.gl.UNSIGNED_SHORT : this.gl.UNSIGNED_INT), i.target = t === "index" ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER, i.normalized = i.normalized || !1, i.stride = i.stride || 0, i.offset = i.offset || 0, i.count = i.count || (i.stride ? i.data.byteLength / i.stride : i.data.length / i.size), i.divisor = i.instanced || 0, i.needsUpdate = !1, i.usage = i.usage || this.gl.STATIC_DRAW, i.buffer || this.updateAttribute(i), i.divisor) {
      if (this.isInstanced = !0, this.instancedCount && this.instancedCount !== i.count * i.divisor)
        return console.warn("geometry has multiple instanced buffers of different length"), this.instancedCount = Math.min(this.instancedCount, i.count * i.divisor);
      this.instancedCount = i.count * i.divisor;
    } else t === "index" ? this.drawRange.count = i.count : this.attributes.index || (this.drawRange.count = Math.max(this.drawRange.count, i.count));
  }
  updateAttribute(t) {
    const i = !t.buffer;
    i && (t.buffer = this.gl.createBuffer()), this.glState.boundBuffer !== t.buffer && (this.gl.bindBuffer(t.target, t.buffer), this.glState.boundBuffer = t.buffer), i ? this.gl.bufferData(t.target, t.data, t.usage) : this.gl.bufferSubData(t.target, 0, t.data), t.needsUpdate = !1;
  }
  setIndex(t) {
    this.addAttribute("index", t);
  }
  setDrawRange(t, i) {
    this.drawRange.start = t, this.drawRange.count = i;
  }
  setInstancedCount(t) {
    this.instancedCount = t;
  }
  createVAO(t) {
    this.VAOs[t.attributeOrder] = this.gl.renderer.createVertexArray(), this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]), this.bindAttributes(t);
  }
  bindAttributes(t) {
    t.attributeLocations.forEach((i, { name: s, type: r }) => {
      if (!this.attributes[s]) {
        console.warn(`active attribute ${s} not being supplied`);
        return;
      }
      const n = this.attributes[s];
      this.gl.bindBuffer(n.target, n.buffer), this.glState.boundBuffer = n.buffer;
      let h = 1;
      r === 35674 && (h = 2), r === 35675 && (h = 3), r === 35676 && (h = 4);
      const l = n.size / h, a = h === 1 ? 0 : h * h * 4, c = h === 1 ? 0 : h * 4;
      for (let f = 0; f < h; f++)
        this.gl.vertexAttribPointer(i + f, l, n.type, n.normalized, n.stride + a, n.offset + f * c), this.gl.enableVertexAttribArray(i + f), this.gl.renderer.vertexAttribDivisor(i + f, n.divisor);
    }), this.attributes.index && this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.attributes.index.buffer);
  }
  draw({ program: t, mode: i = this.gl.TRIANGLES }) {
    this.gl.renderer.currentGeometry !== `${this.id}_${t.attributeOrder}` && (this.VAOs[t.attributeOrder] || this.createVAO(t), this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]), this.gl.renderer.currentGeometry = `${this.id}_${t.attributeOrder}`), t.attributeLocations.forEach((r, { name: n }) => {
      const h = this.attributes[n];
      h.needsUpdate && this.updateAttribute(h);
    });
    let s = 2;
    this.attributes.index?.type === this.gl.UNSIGNED_INT && (s = 4), this.isInstanced ? this.attributes.index ? this.gl.renderer.drawElementsInstanced(
      i,
      this.drawRange.count,
      this.attributes.index.type,
      this.attributes.index.offset + this.drawRange.start * s,
      this.instancedCount
    ) : this.gl.renderer.drawArraysInstanced(i, this.drawRange.start, this.drawRange.count, this.instancedCount) : this.attributes.index ? this.gl.drawElements(
      i,
      this.drawRange.count,
      this.attributes.index.type,
      this.attributes.index.offset + this.drawRange.start * s
    ) : this.gl.drawArrays(i, this.drawRange.start, this.drawRange.count);
  }
  getPosition() {
    const t = this.attributes.position;
    if (t.data) return t;
    if (!H)
      return console.warn("No position buffer data found to compute bounds"), H = !0;
  }
  computeBoundingBox(t) {
    t || (t = this.getPosition());
    const i = t.data, s = t.size;
    this.bounds || (this.bounds = {
      min: new T(),
      max: new T(),
      center: new T(),
      scale: new T(),
      radius: 1 / 0
    });
    const r = this.bounds.min, n = this.bounds.max, h = this.bounds.center, l = this.bounds.scale;
    r.set(1 / 0), n.set(-1 / 0);
    for (let a = 0, c = i.length; a < c; a += s) {
      const f = i[a], o = i[a + 1], d = i[a + 2];
      r.x = Math.min(f, r.x), r.y = Math.min(o, r.y), r.z = Math.min(d, r.z), n.x = Math.max(f, n.x), n.y = Math.max(o, n.y), n.z = Math.max(d, n.z);
    }
    l.sub(n, r), h.add(r, n).divide(2);
  }
  computeBoundingSphere(t) {
    t || (t = this.getPosition());
    const i = t.data, s = t.size;
    this.bounds || this.computeBoundingBox(t);
    let r = 0;
    for (let n = 0, h = i.length; n < h; n += s)
      Q.fromArray(i, n), r = Math.max(r, this.bounds.center.squaredDistance(Q));
    this.bounds.radius = Math.sqrt(r);
  }
  remove() {
    for (let t in this.VAOs)
      this.gl.renderer.deleteVertexArray(this.VAOs[t]), delete this.VAOs[t];
    for (let t in this.attributes)
      this.gl.deleteBuffer(this.attributes[t].buffer), delete this.attributes[t];
  }
}
let Bt = 1;
const K = {};
class qt {
  constructor(t, {
    vertex: i,
    fragment: s,
    uniforms: r = {},
    transparent: n = !1,
    cullFace: h = t.BACK,
    frontFace: l = t.CCW,
    depthTest: a = !0,
    depthWrite: c = !0,
    depthFunc: f = t.LEQUAL
  } = {}) {
    t.canvas || console.error("gl not passed as first argument to Program"), this.gl = t, this.uniforms = r, this.id = Bt++, i || console.warn("vertex shader not supplied"), s || console.warn("fragment shader not supplied"), this.transparent = n, this.cullFace = h, this.frontFace = l, this.depthTest = a, this.depthWrite = c, this.depthFunc = f, this.blendFunc = {}, this.blendEquation = {}, this.stencilFunc = {}, this.stencilOp = {}, this.transparent && !this.blendFunc.src && (this.gl.renderer.premultipliedAlpha ? this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA) : this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA)), this.vertexShader = t.createShader(t.VERTEX_SHADER), this.fragmentShader = t.createShader(t.FRAGMENT_SHADER), this.program = t.createProgram(), t.attachShader(this.program, this.vertexShader), t.attachShader(this.program, this.fragmentShader), this.setShaders({ vertex: i, fragment: s });
  }
  setShaders({ vertex: t, fragment: i }) {
    if (t && (this.gl.shaderSource(this.vertexShader, t), this.gl.compileShader(this.vertexShader), this.gl.getShaderInfoLog(this.vertexShader) !== "" && console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${J(t)}`)), i && (this.gl.shaderSource(this.fragmentShader, i), this.gl.compileShader(this.fragmentShader), this.gl.getShaderInfoLog(this.fragmentShader) !== "" && console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${J(i)}`)), this.gl.linkProgram(this.program), !this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS))
      return console.warn(this.gl.getProgramInfoLog(this.program));
    this.uniformLocations = /* @__PURE__ */ new Map();
    let s = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_UNIFORMS);
    for (let h = 0; h < s; h++) {
      let l = this.gl.getActiveUniform(this.program, h);
      this.uniformLocations.set(l, this.gl.getUniformLocation(this.program, l.name));
      const a = l.name.match(/(\w+)/g);
      l.uniformName = a[0], l.nameComponents = a.slice(1);
    }
    this.attributeLocations = /* @__PURE__ */ new Map();
    const r = [], n = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_ATTRIBUTES);
    for (let h = 0; h < n; h++) {
      const l = this.gl.getActiveAttrib(this.program, h), a = this.gl.getAttribLocation(this.program, l.name);
      a !== -1 && (r[a] = l.name, this.attributeLocations.set(l, a));
    }
    this.attributeOrder = r.join("");
  }
  setBlendFunc(t, i, s, r) {
    this.blendFunc.src = t, this.blendFunc.dst = i, this.blendFunc.srcAlpha = s, this.blendFunc.dstAlpha = r, t && (this.transparent = !0);
  }
  setBlendEquation(t, i) {
    this.blendEquation.modeRGB = t, this.blendEquation.modeAlpha = i;
  }
  setStencilFunc(t, i, s) {
    this.stencilRef = i, this.stencilFunc.func = t, this.stencilFunc.ref = i, this.stencilFunc.mask = s;
  }
  setStencilOp(t, i, s) {
    this.stencilOp.stencilFail = t, this.stencilOp.depthFail = i, this.stencilOp.depthPass = s;
  }
  applyState() {
    this.depthTest ? this.gl.renderer.enable(this.gl.DEPTH_TEST) : this.gl.renderer.disable(this.gl.DEPTH_TEST), this.cullFace ? this.gl.renderer.enable(this.gl.CULL_FACE) : this.gl.renderer.disable(this.gl.CULL_FACE), this.blendFunc.src ? this.gl.renderer.enable(this.gl.BLEND) : this.gl.renderer.disable(this.gl.BLEND), this.cullFace && this.gl.renderer.setCullFace(this.cullFace), this.gl.renderer.setFrontFace(this.frontFace), this.gl.renderer.setDepthMask(this.depthWrite), this.gl.renderer.setDepthFunc(this.depthFunc), this.blendFunc.src && this.gl.renderer.setBlendFunc(this.blendFunc.src, this.blendFunc.dst, this.blendFunc.srcAlpha, this.blendFunc.dstAlpha), this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB, this.blendEquation.modeAlpha), this.stencilFunc.func || this.stencilOp.stencilFail ? this.gl.renderer.enable(this.gl.STENCIL_TEST) : this.gl.renderer.disable(this.gl.STENCIL_TEST), this.gl.renderer.setStencilFunc(this.stencilFunc.func, this.stencilFunc.ref, this.stencilFunc.mask), this.gl.renderer.setStencilOp(this.stencilOp.stencilFail, this.stencilOp.depthFail, this.stencilOp.depthPass);
  }
  use({ flipFaces: t = !1 } = {}) {
    let i = -1;
    this.gl.renderer.state.currentProgram === this.id || (this.gl.useProgram(this.program), this.gl.renderer.state.currentProgram = this.id), this.uniformLocations.forEach((r, n) => {
      let h = this.uniforms[n.uniformName];
      for (const l of n.nameComponents) {
        if (!h) break;
        if (l in h)
          h = h[l];
        else {
          if (Array.isArray(h.value))
            break;
          h = void 0;
          break;
        }
      }
      if (!h)
        return tt(`Active uniform ${n.name} has not been supplied`);
      if (h && h.value === void 0)
        return tt(`${n.name} uniform is missing a value parameter`);
      if (h.value.texture)
        return i = i + 1, h.value.update(i), I(this.gl, n.type, r, i);
      if (h.value.length && h.value[0].texture) {
        const l = [];
        return h.value.forEach((a) => {
          i = i + 1, a.update(i), l.push(i);
        }), I(this.gl, n.type, r, l);
      }
      I(this.gl, n.type, r, h.value);
    }), this.applyState(), t && this.gl.renderer.setFrontFace(this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW);
  }
  remove() {
    this.gl.deleteProgram(this.program);
  }
}
function I(e, t, i, s) {
  s = s.length ? $t(s) : s;
  const r = e.renderer.state.uniformLocations.get(i);
  if (s.length)
    if (r === void 0 || r.length !== s.length)
      e.renderer.state.uniformLocations.set(i, s.slice(0));
    else {
      if (It(r, s)) return;
      r.set ? r.set(s) : Nt(r, s), e.renderer.state.uniformLocations.set(i, r);
    }
  else {
    if (r === s) return;
    e.renderer.state.uniformLocations.set(i, s);
  }
  switch (t) {
    case 5126:
      return s.length ? e.uniform1fv(i, s) : e.uniform1f(i, s);
    // FLOAT
    case 35664:
      return e.uniform2fv(i, s);
    // FLOAT_VEC2
    case 35665:
      return e.uniform3fv(i, s);
    // FLOAT_VEC3
    case 35666:
      return e.uniform4fv(i, s);
    // FLOAT_VEC4
    case 35670:
    // BOOL
    case 5124:
    // INT
    case 35678:
    // SAMPLER_2D
    case 36306:
    // U_SAMPLER_2D
    case 35680:
    // SAMPLER_CUBE
    case 36289:
      return s.length ? e.uniform1iv(i, s) : e.uniform1i(i, s);
    // SAMPLER_CUBE
    case 35671:
    // BOOL_VEC2
    case 35667:
      return e.uniform2iv(i, s);
    // INT_VEC2
    case 35672:
    // BOOL_VEC3
    case 35668:
      return e.uniform3iv(i, s);
    // INT_VEC3
    case 35673:
    // BOOL_VEC4
    case 35669:
      return e.uniform4iv(i, s);
    // INT_VEC4
    case 35674:
      return e.uniformMatrix2fv(i, !1, s);
    // FLOAT_MAT2
    case 35675:
      return e.uniformMatrix3fv(i, !1, s);
    // FLOAT_MAT3
    case 35676:
      return e.uniformMatrix4fv(i, !1, s);
  }
}
function J(e) {
  let t = e.split(`
`);
  for (let i = 0; i < t.length; i++)
    t[i] = i + 1 + ": " + t[i];
  return t.join(`
`);
}
function $t(e) {
  const t = e.length, i = e[0].length;
  if (i === void 0) return e;
  const s = t * i;
  let r = K[s];
  r || (K[s] = r = new Float32Array(s));
  for (let n = 0; n < t; n++) r.set(e[n], n * i);
  return r;
}
function It(e, t) {
  if (e.length !== t.length) return !1;
  for (let i = 0, s = e.length; i < s; i++)
    if (e[i] !== t[i]) return !1;
  return !0;
}
function Nt(e, t) {
  for (let i = 0, s = e.length; i < s; i++)
    e[i] = t[i];
}
let N = 0;
function tt(e) {
  N > 100 || (console.warn(e), N++, N > 100 && console.warn("More than 100 program warnings - stopping logs."));
}
const D = /* @__PURE__ */ new T();
let Dt = 1;
class Pt {
  constructor({
    canvas: t = document.createElement("canvas"),
    width: i = 300,
    height: s = 150,
    dpr: r = 1,
    alpha: n = !1,
    depth: h = !0,
    stencil: l = !1,
    antialias: a = !1,
    premultipliedAlpha: c = !1,
    preserveDrawingBuffer: f = !1,
    powerPreference: o = "default",
    autoClear: d = !0,
    webgl: u = 2
  } = {}) {
    const g = { alpha: n, depth: h, stencil: l, antialias: a, premultipliedAlpha: c, preserveDrawingBuffer: f, powerPreference: o };
    this.dpr = r, this.alpha = n, this.color = !0, this.depth = h, this.stencil = l, this.premultipliedAlpha = c, this.autoClear = d, this.id = Dt++, u === 2 && (this.gl = t.getContext("webgl2", g)), this.isWebgl2 = !!this.gl, this.gl || (this.gl = t.getContext("webgl", g)), this.gl || console.error("unable to create webgl context"), this.gl.renderer = this, this.setSize(i, s), this.state = {}, this.state.blendFunc = { src: this.gl.ONE, dst: this.gl.ZERO }, this.state.blendEquation = { modeRGB: this.gl.FUNC_ADD }, this.state.cullFace = !1, this.state.frontFace = this.gl.CCW, this.state.depthMask = !0, this.state.depthFunc = this.gl.LEQUAL, this.state.premultiplyAlpha = !1, this.state.flipY = !1, this.state.unpackAlignment = 4, this.state.framebuffer = null, this.state.viewport = { x: 0, y: 0, width: null, height: null }, this.state.textureUnits = [], this.state.activeTextureUnit = 0, this.state.boundBuffer = null, this.state.uniformLocations = /* @__PURE__ */ new Map(), this.state.currentProgram = null, this.extensions = {}, this.isWebgl2 ? (this.getExtension("EXT_color_buffer_float"), this.getExtension("OES_texture_float_linear")) : (this.getExtension("OES_texture_float"), this.getExtension("OES_texture_float_linear"), this.getExtension("OES_texture_half_float"), this.getExtension("OES_texture_half_float_linear"), this.getExtension("OES_element_index_uint"), this.getExtension("OES_standard_derivatives"), this.getExtension("EXT_sRGB"), this.getExtension("WEBGL_depth_texture"), this.getExtension("WEBGL_draw_buffers")), this.getExtension("WEBGL_compressed_texture_astc"), this.getExtension("EXT_texture_compression_bptc"), this.getExtension("WEBGL_compressed_texture_s3tc"), this.getExtension("WEBGL_compressed_texture_etc1"), this.getExtension("WEBGL_compressed_texture_pvrtc"), this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"), this.vertexAttribDivisor = this.getExtension("ANGLE_instanced_arrays", "vertexAttribDivisor", "vertexAttribDivisorANGLE"), this.drawArraysInstanced = this.getExtension("ANGLE_instanced_arrays", "drawArraysInstanced", "drawArraysInstancedANGLE"), this.drawElementsInstanced = this.getExtension("ANGLE_instanced_arrays", "drawElementsInstanced", "drawElementsInstancedANGLE"), this.createVertexArray = this.getExtension("OES_vertex_array_object", "createVertexArray", "createVertexArrayOES"), this.bindVertexArray = this.getExtension("OES_vertex_array_object", "bindVertexArray", "bindVertexArrayOES"), this.deleteVertexArray = this.getExtension("OES_vertex_array_object", "deleteVertexArray", "deleteVertexArrayOES"), this.drawBuffers = this.getExtension("WEBGL_draw_buffers", "drawBuffers", "drawBuffersWEBGL"), this.parameters = {}, this.parameters.maxTextureUnits = this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS), this.parameters.maxAnisotropy = this.getExtension("EXT_texture_filter_anisotropic") ? this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0;
  }
  setSize(t, i) {
    this.width = t, this.height = i, this.gl.canvas.width = t * this.dpr, this.gl.canvas.height = i * this.dpr, this.gl.canvas.style && Object.assign(this.gl.canvas.style, {
      width: t + "px",
      height: i + "px"
    });
  }
  setViewport(t, i, s = 0, r = 0) {
    this.state.viewport.width === t && this.state.viewport.height === i || (this.state.viewport.width = t, this.state.viewport.height = i, this.state.viewport.x = s, this.state.viewport.y = r, this.gl.viewport(s, r, t, i));
  }
  setScissor(t, i, s = 0, r = 0) {
    this.gl.scissor(s, r, t, i);
  }
  enable(t) {
    this.state[t] !== !0 && (this.gl.enable(t), this.state[t] = !0);
  }
  disable(t) {
    this.state[t] !== !1 && (this.gl.disable(t), this.state[t] = !1);
  }
  setBlendFunc(t, i, s, r) {
    this.state.blendFunc.src === t && this.state.blendFunc.dst === i && this.state.blendFunc.srcAlpha === s && this.state.blendFunc.dstAlpha === r || (this.state.blendFunc.src = t, this.state.blendFunc.dst = i, this.state.blendFunc.srcAlpha = s, this.state.blendFunc.dstAlpha = r, s !== void 0 ? this.gl.blendFuncSeparate(t, i, s, r) : this.gl.blendFunc(t, i));
  }
  setBlendEquation(t, i) {
    t = t || this.gl.FUNC_ADD, !(this.state.blendEquation.modeRGB === t && this.state.blendEquation.modeAlpha === i) && (this.state.blendEquation.modeRGB = t, this.state.blendEquation.modeAlpha = i, i !== void 0 ? this.gl.blendEquationSeparate(t, i) : this.gl.blendEquation(t));
  }
  setCullFace(t) {
    this.state.cullFace !== t && (this.state.cullFace = t, this.gl.cullFace(t));
  }
  setFrontFace(t) {
    this.state.frontFace !== t && (this.state.frontFace = t, this.gl.frontFace(t));
  }
  setDepthMask(t) {
    this.state.depthMask !== t && (this.state.depthMask = t, this.gl.depthMask(t));
  }
  setDepthFunc(t) {
    this.state.depthFunc !== t && (this.state.depthFunc = t, this.gl.depthFunc(t));
  }
  setStencilMask(t) {
    this.state.stencilMask !== t && (this.state.stencilMask = t, this.gl.stencilMask(t));
  }
  setStencilFunc(t, i, s) {
    this.state.stencilFunc === t && this.state.stencilRef === i && this.state.stencilFuncMask === s || (this.state.stencilFunc = t || this.gl.ALWAYS, this.state.stencilRef = i || 0, this.state.stencilFuncMask = s || 0, this.gl.stencilFunc(t || this.gl.ALWAYS, i || 0, s || 0));
  }
  setStencilOp(t, i, s) {
    this.state.stencilFail === t && this.state.stencilDepthFail === i && this.state.stencilDepthPass === s || (this.state.stencilFail = t, this.state.stencilDepthFail = i, this.state.stencilDepthPass = s, this.gl.stencilOp(t, i, s));
  }
  activeTexture(t) {
    this.state.activeTextureUnit !== t && (this.state.activeTextureUnit = t, this.gl.activeTexture(this.gl.TEXTURE0 + t));
  }
  bindFramebuffer({ target: t = this.gl.FRAMEBUFFER, buffer: i = null } = {}) {
    this.state.framebuffer !== i && (this.state.framebuffer = i, this.gl.bindFramebuffer(t, i));
  }
  getExtension(t, i, s) {
    return i && this.gl[i] ? this.gl[i].bind(this.gl) : (this.extensions[t] || (this.extensions[t] = this.gl.getExtension(t)), i ? this.extensions[t] ? this.extensions[t][s].bind(this.extensions[t]) : null : this.extensions[t]);
  }
  sortOpaque(t, i) {
    return t.renderOrder !== i.renderOrder ? t.renderOrder - i.renderOrder : t.program.id !== i.program.id ? t.program.id - i.program.id : t.zDepth !== i.zDepth ? t.zDepth - i.zDepth : i.id - t.id;
  }
  sortTransparent(t, i) {
    return t.renderOrder !== i.renderOrder ? t.renderOrder - i.renderOrder : t.zDepth !== i.zDepth ? i.zDepth - t.zDepth : i.id - t.id;
  }
  sortUI(t, i) {
    return t.renderOrder !== i.renderOrder ? t.renderOrder - i.renderOrder : t.program.id !== i.program.id ? t.program.id - i.program.id : i.id - t.id;
  }
  getRenderList({ scene: t, camera: i, frustumCull: s, sort: r }) {
    let n = [];
    if (i && s && i.updateFrustum(), t.traverse((h) => {
      if (!h.visible) return !0;
      h.draw && (s && h.frustumCulled && i && !i.frustumIntersectsMesh(h) || n.push(h));
    }), r) {
      const h = [], l = [], a = [];
      n.forEach((c) => {
        c.program.transparent ? c.program.depthTest ? l.push(c) : a.push(c) : h.push(c), c.zDepth = 0, !(c.renderOrder !== 0 || !c.program.depthTest || !i) && (c.worldMatrix.getTranslation(D), D.applyMatrix4(i.projectionViewMatrix), c.zDepth = D.z);
      }), h.sort(this.sortOpaque), l.sort(this.sortTransparent), a.sort(this.sortUI), n = h.concat(l, a);
    }
    return n;
  }
  render({ scene: t, camera: i, target: s = null, update: r = !0, sort: n = !0, frustumCull: h = !0, clear: l }) {
    s === null ? (this.bindFramebuffer(), this.setViewport(this.width * this.dpr, this.height * this.dpr)) : (this.bindFramebuffer(s), this.setViewport(s.width, s.height)), (l || this.autoClear && l !== !1) && (this.depth && (!s || s.depth) && (this.enable(this.gl.DEPTH_TEST), this.setDepthMask(!0)), (this.stencil || !s || s.stencil) && (this.enable(this.gl.STENCIL_TEST), this.setStencilMask(255)), this.gl.clear(
      (this.color ? this.gl.COLOR_BUFFER_BIT : 0) | (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) | (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0)
    )), r && t.updateMatrixWorld(), i && i.updateMatrixWorld(), this.getRenderList({ scene: t, camera: i, frustumCull: h, sort: n }).forEach((c) => {
      c.draw({ camera: i });
    });
  }
}
function Gt(e, t) {
  return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e;
}
function Wt(e, t, i, s, r) {
  return e[0] = t, e[1] = i, e[2] = s, e[3] = r, e;
}
function Ut(e, t) {
  let i = t[0], s = t[1], r = t[2], n = t[3], h = i * i + s * s + r * r + n * n;
  return h > 0 && (h = 1 / Math.sqrt(h)), e[0] = i * h, e[1] = s * h, e[2] = r * h, e[3] = n * h, e;
}
function Vt(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function Xt(e) {
  return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1, e;
}
function kt(e, t, i) {
  i = i * 0.5;
  let s = Math.sin(i);
  return e[0] = s * t[0], e[1] = s * t[1], e[2] = s * t[2], e[3] = Math.cos(i), e;
}
function et(e, t, i) {
  let s = t[0], r = t[1], n = t[2], h = t[3], l = i[0], a = i[1], c = i[2], f = i[3];
  return e[0] = s * f + h * l + r * c - n * a, e[1] = r * f + h * a + n * l - s * c, e[2] = n * f + h * c + s * a - r * l, e[3] = h * f - s * l - r * a - n * c, e;
}
function Yt(e, t, i) {
  i *= 0.5;
  let s = t[0], r = t[1], n = t[2], h = t[3], l = Math.sin(i), a = Math.cos(i);
  return e[0] = s * a + h * l, e[1] = r * a + n * l, e[2] = n * a - r * l, e[3] = h * a - s * l, e;
}
function Zt(e, t, i) {
  i *= 0.5;
  let s = t[0], r = t[1], n = t[2], h = t[3], l = Math.sin(i), a = Math.cos(i);
  return e[0] = s * a - n * l, e[1] = r * a + h * l, e[2] = n * a + s * l, e[3] = h * a - r * l, e;
}
function jt(e, t, i) {
  i *= 0.5;
  let s = t[0], r = t[1], n = t[2], h = t[3], l = Math.sin(i), a = Math.cos(i);
  return e[0] = s * a + r * l, e[1] = r * a - s * l, e[2] = n * a + h * l, e[3] = h * a - n * l, e;
}
function Qt(e, t, i, s) {
  let r = t[0], n = t[1], h = t[2], l = t[3], a = i[0], c = i[1], f = i[2], o = i[3], d, u, g, p, x;
  return u = r * a + n * c + h * f + l * o, u < 0 && (u = -u, a = -a, c = -c, f = -f, o = -o), 1 - u > 1e-6 ? (d = Math.acos(u), g = Math.sin(d), p = Math.sin((1 - s) * d) / g, x = Math.sin(s * d) / g) : (p = 1 - s, x = s), e[0] = p * r + x * a, e[1] = p * n + x * c, e[2] = p * h + x * f, e[3] = p * l + x * o, e;
}
function Ht(e, t) {
  let i = t[0], s = t[1], r = t[2], n = t[3], h = i * i + s * s + r * r + n * n, l = h ? 1 / h : 0;
  return e[0] = -i * l, e[1] = -s * l, e[2] = -r * l, e[3] = n * l, e;
}
function Kt(e, t) {
  return e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e[3] = t[3], e;
}
function Jt(e, t) {
  let i = t[0] + t[4] + t[8], s;
  if (i > 0)
    s = Math.sqrt(i + 1), e[3] = 0.5 * s, s = 0.5 / s, e[0] = (t[5] - t[7]) * s, e[1] = (t[6] - t[2]) * s, e[2] = (t[1] - t[3]) * s;
  else {
    let r = 0;
    t[4] > t[0] && (r = 1), t[8] > t[r * 3 + r] && (r = 2);
    let n = (r + 1) % 3, h = (r + 2) % 3;
    s = Math.sqrt(t[r * 3 + r] - t[n * 3 + n] - t[h * 3 + h] + 1), e[r] = 0.5 * s, s = 0.5 / s, e[3] = (t[n * 3 + h] - t[h * 3 + n]) * s, e[n] = (t[n * 3 + r] + t[r * 3 + n]) * s, e[h] = (t[h * 3 + r] + t[r * 3 + h]) * s;
  }
  return e;
}
function te(e, t, i = "YXZ") {
  let s = Math.sin(t[0] * 0.5), r = Math.cos(t[0] * 0.5), n = Math.sin(t[1] * 0.5), h = Math.cos(t[1] * 0.5), l = Math.sin(t[2] * 0.5), a = Math.cos(t[2] * 0.5);
  return i === "XYZ" ? (e[0] = s * h * a + r * n * l, e[1] = r * n * a - s * h * l, e[2] = r * h * l + s * n * a, e[3] = r * h * a - s * n * l) : i === "YXZ" ? (e[0] = s * h * a + r * n * l, e[1] = r * n * a - s * h * l, e[2] = r * h * l - s * n * a, e[3] = r * h * a + s * n * l) : i === "ZXY" ? (e[0] = s * h * a - r * n * l, e[1] = r * n * a + s * h * l, e[2] = r * h * l + s * n * a, e[3] = r * h * a - s * n * l) : i === "ZYX" ? (e[0] = s * h * a - r * n * l, e[1] = r * n * a + s * h * l, e[2] = r * h * l - s * n * a, e[3] = r * h * a + s * n * l) : i === "YZX" ? (e[0] = s * h * a + r * n * l, e[1] = r * n * a + s * h * l, e[2] = r * h * l - s * n * a, e[3] = r * h * a - s * n * l) : i === "XZY" && (e[0] = s * h * a - r * n * l, e[1] = r * n * a - s * h * l, e[2] = r * h * l + s * n * a, e[3] = r * h * a + s * n * l), e;
}
const ee = Gt, ie = Wt, se = Vt, re = Ut;
class ne extends Array {
  constructor(t = 0, i = 0, s = 0, r = 1) {
    super(t, i, s, r), this.onChange = () => {
    }, this._target = this;
    const n = ["0", "1", "2", "3"];
    return new Proxy(this, {
      set(h, l) {
        const a = Reflect.set(...arguments);
        return a && n.includes(l) && h.onChange(), a;
      }
    });
  }
  get x() {
    return this[0];
  }
  get y() {
    return this[1];
  }
  get z() {
    return this[2];
  }
  get w() {
    return this[3];
  }
  set x(t) {
    this._target[0] = t, this.onChange();
  }
  set y(t) {
    this._target[1] = t, this.onChange();
  }
  set z(t) {
    this._target[2] = t, this.onChange();
  }
  set w(t) {
    this._target[3] = t, this.onChange();
  }
  identity() {
    return Xt(this._target), this.onChange(), this;
  }
  set(t, i, s, r) {
    return t.length ? this.copy(t) : (ie(this._target, t, i, s, r), this.onChange(), this);
  }
  rotateX(t) {
    return Yt(this._target, this._target, t), this.onChange(), this;
  }
  rotateY(t) {
    return Zt(this._target, this._target, t), this.onChange(), this;
  }
  rotateZ(t) {
    return jt(this._target, this._target, t), this.onChange(), this;
  }
  inverse(t = this._target) {
    return Ht(this._target, t), this.onChange(), this;
  }
  conjugate(t = this._target) {
    return Kt(this._target, t), this.onChange(), this;
  }
  copy(t) {
    return ee(this._target, t), this.onChange(), this;
  }
  normalize(t = this._target) {
    return re(this._target, t), this.onChange(), this;
  }
  multiply(t, i) {
    return i ? et(this._target, t, i) : et(this._target, this._target, t), this.onChange(), this;
  }
  dot(t) {
    return se(this._target, t);
  }
  fromMatrix3(t) {
    return Jt(this._target, t), this.onChange(), this;
  }
  fromEuler(t, i) {
    return te(this._target, t, t.order), i || this.onChange(), this;
  }
  fromAxisAngle(t, i) {
    return kt(this._target, t, i), this.onChange(), this;
  }
  slerp(t, i) {
    return Qt(this._target, this._target, t, i), this.onChange(), this;
  }
  fromArray(t, i = 0) {
    return this._target[0] = t[i], this._target[1] = t[i + 1], this._target[2] = t[i + 2], this._target[3] = t[i + 3], this.onChange(), this;
  }
  toArray(t = [], i = 0) {
    return t[i] = this[0], t[i + 1] = this[1], t[i + 2] = this[2], t[i + 3] = this[3], t;
  }
}
const he = 1e-6;
function le(e, t) {
  return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e;
}
function ae(e, t, i, s, r, n, h, l, a, c, f, o, d, u, g, p, x) {
  return e[0] = t, e[1] = i, e[2] = s, e[3] = r, e[4] = n, e[5] = h, e[6] = l, e[7] = a, e[8] = c, e[9] = f, e[10] = o, e[11] = d, e[12] = u, e[13] = g, e[14] = p, e[15] = x, e;
}
function ce(e) {
  return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
}
function fe(e, t) {
  let i = t[0], s = t[1], r = t[2], n = t[3], h = t[4], l = t[5], a = t[6], c = t[7], f = t[8], o = t[9], d = t[10], u = t[11], g = t[12], p = t[13], x = t[14], m = t[15], E = i * l - s * h, M = i * a - r * h, y = i * c - n * h, _ = s * a - r * l, w = s * c - n * l, b = r * c - n * a, F = f * p - o * g, z = f * x - d * g, S = f * m - u * g, L = o * x - d * p, C = o * m - u * p, R = d * m - u * x, A = E * R - M * C + y * L + _ * S - w * z + b * F;
  return A ? (A = 1 / A, e[0] = (l * R - a * C + c * L) * A, e[1] = (r * C - s * R - n * L) * A, e[2] = (p * b - x * w + m * _) * A, e[3] = (d * w - o * b - u * _) * A, e[4] = (a * S - h * R - c * z) * A, e[5] = (i * R - r * S + n * z) * A, e[6] = (x * y - g * b - m * M) * A, e[7] = (f * b - d * y + u * M) * A, e[8] = (h * C - l * S + c * F) * A, e[9] = (s * S - i * C - n * F) * A, e[10] = (g * w - p * y + m * E) * A, e[11] = (o * y - f * w - u * E) * A, e[12] = (l * z - h * L - a * F) * A, e[13] = (i * L - s * z + r * F) * A, e[14] = (p * M - g * _ - x * E) * A, e[15] = (f * _ - o * M + d * E) * A, e) : null;
}
function ut(e) {
  let t = e[0], i = e[1], s = e[2], r = e[3], n = e[4], h = e[5], l = e[6], a = e[7], c = e[8], f = e[9], o = e[10], d = e[11], u = e[12], g = e[13], p = e[14], x = e[15], m = t * h - i * n, E = t * l - s * n, M = t * a - r * n, y = i * l - s * h, _ = i * a - r * h, w = s * a - r * l, b = c * g - f * u, F = c * p - o * u, z = c * x - d * u, S = f * p - o * g, L = f * x - d * g, C = o * x - d * p;
  return m * C - E * L + M * S + y * z - _ * F + w * b;
}
function it(e, t, i) {
  let s = t[0], r = t[1], n = t[2], h = t[3], l = t[4], a = t[5], c = t[6], f = t[7], o = t[8], d = t[9], u = t[10], g = t[11], p = t[12], x = t[13], m = t[14], E = t[15], M = i[0], y = i[1], _ = i[2], w = i[3];
  return e[0] = M * s + y * l + _ * o + w * p, e[1] = M * r + y * a + _ * d + w * x, e[2] = M * n + y * c + _ * u + w * m, e[3] = M * h + y * f + _ * g + w * E, M = i[4], y = i[5], _ = i[6], w = i[7], e[4] = M * s + y * l + _ * o + w * p, e[5] = M * r + y * a + _ * d + w * x, e[6] = M * n + y * c + _ * u + w * m, e[7] = M * h + y * f + _ * g + w * E, M = i[8], y = i[9], _ = i[10], w = i[11], e[8] = M * s + y * l + _ * o + w * p, e[9] = M * r + y * a + _ * d + w * x, e[10] = M * n + y * c + _ * u + w * m, e[11] = M * h + y * f + _ * g + w * E, M = i[12], y = i[13], _ = i[14], w = i[15], e[12] = M * s + y * l + _ * o + w * p, e[13] = M * r + y * a + _ * d + w * x, e[14] = M * n + y * c + _ * u + w * m, e[15] = M * h + y * f + _ * g + w * E, e;
}
function de(e, t, i) {
  let s = i[0], r = i[1], n = i[2], h, l, a, c, f, o, d, u, g, p, x, m;
  return t === e ? (e[12] = t[0] * s + t[4] * r + t[8] * n + t[12], e[13] = t[1] * s + t[5] * r + t[9] * n + t[13], e[14] = t[2] * s + t[6] * r + t[10] * n + t[14], e[15] = t[3] * s + t[7] * r + t[11] * n + t[15]) : (h = t[0], l = t[1], a = t[2], c = t[3], f = t[4], o = t[5], d = t[6], u = t[7], g = t[8], p = t[9], x = t[10], m = t[11], e[0] = h, e[1] = l, e[2] = a, e[3] = c, e[4] = f, e[5] = o, e[6] = d, e[7] = u, e[8] = g, e[9] = p, e[10] = x, e[11] = m, e[12] = h * s + f * r + g * n + t[12], e[13] = l * s + o * r + p * n + t[13], e[14] = a * s + d * r + x * n + t[14], e[15] = c * s + u * r + m * n + t[15]), e;
}
function oe(e, t, i) {
  let s = i[0], r = i[1], n = i[2];
  return e[0] = t[0] * s, e[1] = t[1] * s, e[2] = t[2] * s, e[3] = t[3] * s, e[4] = t[4] * r, e[5] = t[5] * r, e[6] = t[6] * r, e[7] = t[7] * r, e[8] = t[8] * n, e[9] = t[9] * n, e[10] = t[10] * n, e[11] = t[11] * n, e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e;
}
function ue(e, t, i, s) {
  let r = s[0], n = s[1], h = s[2], l = Math.hypot(r, n, h), a, c, f, o, d, u, g, p, x, m, E, M, y, _, w, b, F, z, S, L, C, R, A, O;
  return Math.abs(l) < he ? null : (l = 1 / l, r *= l, n *= l, h *= l, a = Math.sin(i), c = Math.cos(i), f = 1 - c, o = t[0], d = t[1], u = t[2], g = t[3], p = t[4], x = t[5], m = t[6], E = t[7], M = t[8], y = t[9], _ = t[10], w = t[11], b = r * r * f + c, F = n * r * f + h * a, z = h * r * f - n * a, S = r * n * f - h * a, L = n * n * f + c, C = h * n * f + r * a, R = r * h * f + n * a, A = n * h * f - r * a, O = h * h * f + c, e[0] = o * b + p * F + M * z, e[1] = d * b + x * F + y * z, e[2] = u * b + m * F + _ * z, e[3] = g * b + E * F + w * z, e[4] = o * S + p * L + M * C, e[5] = d * S + x * L + y * C, e[6] = u * S + m * L + _ * C, e[7] = g * S + E * L + w * C, e[8] = o * R + p * A + M * O, e[9] = d * R + x * A + y * O, e[10] = u * R + m * A + _ * O, e[11] = g * R + E * A + w * O, t !== e && (e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e);
}
function ge(e, t) {
  return e[0] = t[12], e[1] = t[13], e[2] = t[14], e;
}
function gt(e, t) {
  let i = t[0], s = t[1], r = t[2], n = t[4], h = t[5], l = t[6], a = t[8], c = t[9], f = t[10];
  return e[0] = Math.hypot(i, s, r), e[1] = Math.hypot(n, h, l), e[2] = Math.hypot(a, c, f), e;
}
function pe(e) {
  let t = e[0], i = e[1], s = e[2], r = e[4], n = e[5], h = e[6], l = e[8], a = e[9], c = e[10];
  const f = t * t + i * i + s * s, o = r * r + n * n + h * h, d = l * l + a * a + c * c;
  return Math.sqrt(Math.max(f, o, d));
}
const pt = /* @__PURE__ */ (function() {
  const e = [1, 1, 1];
  return function(t, i) {
    let s = e;
    gt(s, i);
    let r = 1 / s[0], n = 1 / s[1], h = 1 / s[2], l = i[0] * r, a = i[1] * n, c = i[2] * h, f = i[4] * r, o = i[5] * n, d = i[6] * h, u = i[8] * r, g = i[9] * n, p = i[10] * h, x = l + o + p, m = 0;
    return x > 0 ? (m = Math.sqrt(x + 1) * 2, t[3] = 0.25 * m, t[0] = (d - g) / m, t[1] = (u - c) / m, t[2] = (a - f) / m) : l > o && l > p ? (m = Math.sqrt(1 + l - o - p) * 2, t[3] = (d - g) / m, t[0] = 0.25 * m, t[1] = (a + f) / m, t[2] = (u + c) / m) : o > p ? (m = Math.sqrt(1 + o - l - p) * 2, t[3] = (u - c) / m, t[0] = (a + f) / m, t[1] = 0.25 * m, t[2] = (d + g) / m) : (m = Math.sqrt(1 + p - l - o) * 2, t[3] = (a - f) / m, t[0] = (u + c) / m, t[1] = (d + g) / m, t[2] = 0.25 * m), t;
  };
})();
function xe(e, t, i, s) {
  let r = B([e[0], e[1], e[2]]);
  const n = B([e[4], e[5], e[6]]), h = B([e[8], e[9], e[10]]);
  ut(e) < 0 && (r = -r), i[0] = e[12], i[1] = e[13], i[2] = e[14];
  const a = e.slice(), c = 1 / r, f = 1 / n, o = 1 / h;
  a[0] *= c, a[1] *= c, a[2] *= c, a[4] *= f, a[5] *= f, a[6] *= f, a[8] *= o, a[9] *= o, a[10] *= o, pt(t, a), s[0] = r, s[1] = n, s[2] = h;
}
function me(e, t, i, s) {
  const r = e, n = t[0], h = t[1], l = t[2], a = t[3], c = n + n, f = h + h, o = l + l, d = n * c, u = n * f, g = n * o, p = h * f, x = h * o, m = l * o, E = a * c, M = a * f, y = a * o, _ = s[0], w = s[1], b = s[2];
  return r[0] = (1 - (p + m)) * _, r[1] = (u + y) * _, r[2] = (g - M) * _, r[3] = 0, r[4] = (u - y) * w, r[5] = (1 - (d + m)) * w, r[6] = (x + E) * w, r[7] = 0, r[8] = (g + M) * b, r[9] = (x - E) * b, r[10] = (1 - (d + p)) * b, r[11] = 0, r[12] = i[0], r[13] = i[1], r[14] = i[2], r[15] = 1, r;
}
function ye(e, t) {
  let i = t[0], s = t[1], r = t[2], n = t[3], h = i + i, l = s + s, a = r + r, c = i * h, f = s * h, o = s * l, d = r * h, u = r * l, g = r * a, p = n * h, x = n * l, m = n * a;
  return e[0] = 1 - o - g, e[1] = f + m, e[2] = d - x, e[3] = 0, e[4] = f - m, e[5] = 1 - c - g, e[6] = u + p, e[7] = 0, e[8] = d + x, e[9] = u - p, e[10] = 1 - c - o, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
}
function Me(e, t, i, s, r) {
  let n = 1 / Math.tan(t / 2), h = 1 / (s - r);
  return e[0] = n / i, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = n, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = (r + s) * h, e[11] = -1, e[12] = 0, e[13] = 0, e[14] = 2 * r * s * h, e[15] = 0, e;
}
function we(e, t, i, s, r, n, h) {
  let l = 1 / (t - i), a = 1 / (s - r), c = 1 / (n - h);
  return e[0] = -2 * l, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = -2 * a, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 2 * c, e[11] = 0, e[12] = (t + i) * l, e[13] = (r + s) * a, e[14] = (h + n) * c, e[15] = 1, e;
}
function _e(e, t, i, s) {
  let r = t[0], n = t[1], h = t[2], l = s[0], a = s[1], c = s[2], f = r - i[0], o = n - i[1], d = h - i[2], u = f * f + o * o + d * d;
  u === 0 ? d = 1 : (u = 1 / Math.sqrt(u), f *= u, o *= u, d *= u);
  let g = a * d - c * o, p = c * f - l * d, x = l * o - a * f;
  return u = g * g + p * p + x * x, u === 0 && (c ? l += 1e-6 : a ? c += 1e-6 : a += 1e-6, g = a * d - c * o, p = c * f - l * d, x = l * o - a * f, u = g * g + p * p + x * x), u = 1 / Math.sqrt(u), g *= u, p *= u, x *= u, e[0] = g, e[1] = p, e[2] = x, e[3] = 0, e[4] = o * x - d * p, e[5] = d * g - f * x, e[6] = f * p - o * g, e[7] = 0, e[8] = f, e[9] = o, e[10] = d, e[11] = 0, e[12] = r, e[13] = n, e[14] = h, e[15] = 1, e;
}
function st(e, t, i) {
  return e[0] = t[0] + i[0], e[1] = t[1] + i[1], e[2] = t[2] + i[2], e[3] = t[3] + i[3], e[4] = t[4] + i[4], e[5] = t[5] + i[5], e[6] = t[6] + i[6], e[7] = t[7] + i[7], e[8] = t[8] + i[8], e[9] = t[9] + i[9], e[10] = t[10] + i[10], e[11] = t[11] + i[11], e[12] = t[12] + i[12], e[13] = t[13] + i[13], e[14] = t[14] + i[14], e[15] = t[15] + i[15], e;
}
function rt(e, t, i) {
  return e[0] = t[0] - i[0], e[1] = t[1] - i[1], e[2] = t[2] - i[2], e[3] = t[3] - i[3], e[4] = t[4] - i[4], e[5] = t[5] - i[5], e[6] = t[6] - i[6], e[7] = t[7] - i[7], e[8] = t[8] - i[8], e[9] = t[9] - i[9], e[10] = t[10] - i[10], e[11] = t[11] - i[11], e[12] = t[12] - i[12], e[13] = t[13] - i[13], e[14] = t[14] - i[14], e[15] = t[15] - i[15], e;
}
function Ae(e, t, i) {
  return e[0] = t[0] * i, e[1] = t[1] * i, e[2] = t[2] * i, e[3] = t[3] * i, e[4] = t[4] * i, e[5] = t[5] * i, e[6] = t[6] * i, e[7] = t[7] * i, e[8] = t[8] * i, e[9] = t[9] * i, e[10] = t[10] * i, e[11] = t[11] * i, e[12] = t[12] * i, e[13] = t[13] * i, e[14] = t[14] * i, e[15] = t[15] * i, e;
}
class q extends Array {
  constructor(t = 1, i = 0, s = 0, r = 0, n = 0, h = 1, l = 0, a = 0, c = 0, f = 0, o = 1, d = 0, u = 0, g = 0, p = 0, x = 1) {
    return super(t, i, s, r, n, h, l, a, c, f, o, d, u, g, p, x), this;
  }
  get x() {
    return this[12];
  }
  get y() {
    return this[13];
  }
  get z() {
    return this[14];
  }
  get w() {
    return this[15];
  }
  set x(t) {
    this[12] = t;
  }
  set y(t) {
    this[13] = t;
  }
  set z(t) {
    this[14] = t;
  }
  set w(t) {
    this[15] = t;
  }
  set(t, i, s, r, n, h, l, a, c, f, o, d, u, g, p, x) {
    return t.length ? this.copy(t) : (ae(this, t, i, s, r, n, h, l, a, c, f, o, d, u, g, p, x), this);
  }
  translate(t, i = this) {
    return de(this, i, t), this;
  }
  rotate(t, i, s = this) {
    return ue(this, s, t, i), this;
  }
  scale(t, i = this) {
    return oe(this, i, typeof t == "number" ? [t, t, t] : t), this;
  }
  add(t, i) {
    return i ? st(this, t, i) : st(this, this, t), this;
  }
  sub(t, i) {
    return i ? rt(this, t, i) : rt(this, this, t), this;
  }
  multiply(t, i) {
    return t.length ? i ? it(this, t, i) : it(this, this, t) : Ae(this, this, t), this;
  }
  identity() {
    return ce(this), this;
  }
  copy(t) {
    return le(this, t), this;
  }
  fromPerspective({ fov: t, aspect: i, near: s, far: r } = {}) {
    return Me(this, t, i, s, r), this;
  }
  fromOrthogonal({ left: t, right: i, bottom: s, top: r, near: n, far: h }) {
    return we(this, t, i, s, r, n, h), this;
  }
  fromQuaternion(t) {
    return ye(this, t), this;
  }
  setPosition(t) {
    return this.x = t[0], this.y = t[1], this.z = t[2], this;
  }
  inverse(t = this) {
    return fe(this, t), this;
  }
  compose(t, i, s) {
    return me(this, t, i, s), this;
  }
  decompose(t, i, s) {
    return xe(this, t, i, s), this;
  }
  getRotation(t) {
    return pt(t, this), this;
  }
  getTranslation(t) {
    return ge(t, this), this;
  }
  getScaling(t) {
    return gt(t, this), this;
  }
  getMaxScaleOnAxis() {
    return pe(this);
  }
  lookAt(t, i, s) {
    return _e(this, t, i, s), this;
  }
  determinant() {
    return ut(this);
  }
  fromArray(t, i = 0) {
    return this[0] = t[i], this[1] = t[i + 1], this[2] = t[i + 2], this[3] = t[i + 3], this[4] = t[i + 4], this[5] = t[i + 5], this[6] = t[i + 6], this[7] = t[i + 7], this[8] = t[i + 8], this[9] = t[i + 9], this[10] = t[i + 10], this[11] = t[i + 11], this[12] = t[i + 12], this[13] = t[i + 13], this[14] = t[i + 14], this[15] = t[i + 15], this;
  }
  toArray(t = [], i = 0) {
    return t[i] = this[0], t[i + 1] = this[1], t[i + 2] = this[2], t[i + 3] = this[3], t[i + 4] = this[4], t[i + 5] = this[5], t[i + 6] = this[6], t[i + 7] = this[7], t[i + 8] = this[8], t[i + 9] = this[9], t[i + 10] = this[10], t[i + 11] = this[11], t[i + 12] = this[12], t[i + 13] = this[13], t[i + 14] = this[14], t[i + 15] = this[15], t;
  }
}
function Ee(e, t, i = "YXZ") {
  return i === "XYZ" ? (e[1] = Math.asin(Math.min(Math.max(t[8], -1), 1)), Math.abs(t[8]) < 0.99999 ? (e[0] = Math.atan2(-t[9], t[10]), e[2] = Math.atan2(-t[4], t[0])) : (e[0] = Math.atan2(t[6], t[5]), e[2] = 0)) : i === "YXZ" ? (e[0] = Math.asin(-Math.min(Math.max(t[9], -1), 1)), Math.abs(t[9]) < 0.99999 ? (e[1] = Math.atan2(t[8], t[10]), e[2] = Math.atan2(t[1], t[5])) : (e[1] = Math.atan2(-t[2], t[0]), e[2] = 0)) : i === "ZXY" ? (e[0] = Math.asin(Math.min(Math.max(t[6], -1), 1)), Math.abs(t[6]) < 0.99999 ? (e[1] = Math.atan2(-t[2], t[10]), e[2] = Math.atan2(-t[4], t[5])) : (e[1] = 0, e[2] = Math.atan2(t[1], t[0]))) : i === "ZYX" ? (e[1] = Math.asin(-Math.min(Math.max(t[2], -1), 1)), Math.abs(t[2]) < 0.99999 ? (e[0] = Math.atan2(t[6], t[10]), e[2] = Math.atan2(t[1], t[0])) : (e[0] = 0, e[2] = Math.atan2(-t[4], t[5]))) : i === "YZX" ? (e[2] = Math.asin(Math.min(Math.max(t[1], -1), 1)), Math.abs(t[1]) < 0.99999 ? (e[0] = Math.atan2(-t[9], t[5]), e[1] = Math.atan2(-t[2], t[0])) : (e[0] = 0, e[1] = Math.atan2(t[8], t[10]))) : i === "XZY" && (e[2] = Math.asin(-Math.min(Math.max(t[4], -1), 1)), Math.abs(t[4]) < 0.99999 ? (e[0] = Math.atan2(t[6], t[5]), e[1] = Math.atan2(t[8], t[0])) : (e[0] = Math.atan2(-t[9], t[10]), e[1] = 0)), e;
}
const nt = /* @__PURE__ */ new q();
class be extends Array {
  constructor(t = 0, i = t, s = t, r = "YXZ") {
    super(t, i, s), this.order = r, this.onChange = () => {
    }, this._target = this;
    const n = ["0", "1", "2"];
    return new Proxy(this, {
      set(h, l) {
        const a = Reflect.set(...arguments);
        return a && n.includes(l) && h.onChange(), a;
      }
    });
  }
  get x() {
    return this[0];
  }
  get y() {
    return this[1];
  }
  get z() {
    return this[2];
  }
  set x(t) {
    this._target[0] = t, this.onChange();
  }
  set y(t) {
    this._target[1] = t, this.onChange();
  }
  set z(t) {
    this._target[2] = t, this.onChange();
  }
  set(t, i = t, s = t) {
    return t.length ? this.copy(t) : (this._target[0] = t, this._target[1] = i, this._target[2] = s, this.onChange(), this);
  }
  copy(t) {
    return this._target[0] = t[0], this._target[1] = t[1], this._target[2] = t[2], this.onChange(), this;
  }
  reorder(t) {
    return this._target.order = t, this.onChange(), this;
  }
  fromRotationMatrix(t, i = this.order) {
    return Ee(this._target, t, i), this.onChange(), this;
  }
  fromQuaternion(t, i = this.order, s) {
    return nt.fromQuaternion(t), this._target.fromRotationMatrix(nt, i), s || this.onChange(), this;
  }
  fromArray(t, i = 0) {
    return this._target[0] = t[i], this._target[1] = t[i + 1], this._target[2] = t[i + 2], this;
  }
  toArray(t = [], i = 0) {
    return t[i] = this[0], t[i + 1] = this[1], t[i + 2] = this[2], t;
  }
}
class ve {
  constructor() {
    this.parent = null, this.children = [], this.visible = !0, this.matrix = new q(), this.worldMatrix = new q(), this.matrixAutoUpdate = !0, this.worldMatrixNeedsUpdate = !1, this.position = new T(), this.quaternion = new ne(), this.scale = new T(1), this.rotation = new be(), this.up = new T(0, 1, 0), this.rotation._target.onChange = () => this.quaternion.fromEuler(this.rotation, !0), this.quaternion._target.onChange = () => this.rotation.fromQuaternion(this.quaternion, void 0, !0);
  }
  setParent(t, i = !0) {
    this.parent && t !== this.parent && this.parent.removeChild(this, !1), this.parent = t, i && t && t.addChild(this, !1);
  }
  addChild(t, i = !0) {
    ~this.children.indexOf(t) || this.children.push(t), i && t.setParent(this, !1);
  }
  removeChild(t, i = !0) {
    ~this.children.indexOf(t) && this.children.splice(this.children.indexOf(t), 1), i && t.setParent(null, !1);
  }
  updateMatrixWorld(t) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.worldMatrixNeedsUpdate || t) && (this.parent === null ? this.worldMatrix.copy(this.matrix) : this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix), this.worldMatrixNeedsUpdate = !1, t = !0);
    for (let i = 0, s = this.children.length; i < s; i++)
      this.children[i].updateMatrixWorld(t);
  }
  updateMatrix() {
    this.matrix.compose(this.quaternion, this.position, this.scale), this.worldMatrixNeedsUpdate = !0;
  }
  traverse(t) {
    if (!t(this))
      for (let i = 0, s = this.children.length; i < s; i++)
        this.children[i].traverse(t);
  }
  decompose() {
    this.matrix.decompose(this.quaternion._target, this.position, this.scale), this.rotation.fromQuaternion(this.quaternion);
  }
  lookAt(t, i = !1) {
    i ? this.matrix.lookAt(this.position, t, this.up) : this.matrix.lookAt(t, this.position, this.up), this.matrix.getRotation(this.quaternion._target), this.rotation.fromQuaternion(this.quaternion);
  }
}
function Se(e, t) {
  return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[4], e[4] = t[5], e[5] = t[6], e[6] = t[8], e[7] = t[9], e[8] = t[10], e;
}
function Ce(e, t) {
  let i = t[0], s = t[1], r = t[2], n = t[3], h = i + i, l = s + s, a = r + r, c = i * h, f = s * h, o = s * l, d = r * h, u = r * l, g = r * a, p = n * h, x = n * l, m = n * a;
  return e[0] = 1 - o - g, e[3] = f - m, e[6] = d + x, e[1] = f + m, e[4] = 1 - c - g, e[7] = u - p, e[2] = d - x, e[5] = u + p, e[8] = 1 - c - o, e;
}
function Fe(e, t) {
  return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e;
}
function ze(e, t, i, s, r, n, h, l, a, c) {
  return e[0] = t, e[1] = i, e[2] = s, e[3] = r, e[4] = n, e[5] = h, e[6] = l, e[7] = a, e[8] = c, e;
}
function Le(e) {
  return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 1, e[5] = 0, e[6] = 0, e[7] = 0, e[8] = 1, e;
}
function Re(e, t) {
  let i = t[0], s = t[1], r = t[2], n = t[3], h = t[4], l = t[5], a = t[6], c = t[7], f = t[8], o = f * h - l * c, d = -f * n + l * a, u = c * n - h * a, g = i * o + s * d + r * u;
  return g ? (g = 1 / g, e[0] = o * g, e[1] = (-f * s + r * c) * g, e[2] = (l * s - r * h) * g, e[3] = d * g, e[4] = (f * i - r * a) * g, e[5] = (-l * i + r * n) * g, e[6] = u * g, e[7] = (-c * i + s * a) * g, e[8] = (h * i - s * n) * g, e) : null;
}
function ht(e, t, i) {
  let s = t[0], r = t[1], n = t[2], h = t[3], l = t[4], a = t[5], c = t[6], f = t[7], o = t[8], d = i[0], u = i[1], g = i[2], p = i[3], x = i[4], m = i[5], E = i[6], M = i[7], y = i[8];
  return e[0] = d * s + u * h + g * c, e[1] = d * r + u * l + g * f, e[2] = d * n + u * a + g * o, e[3] = p * s + x * h + m * c, e[4] = p * r + x * l + m * f, e[5] = p * n + x * a + m * o, e[6] = E * s + M * h + y * c, e[7] = E * r + M * l + y * f, e[8] = E * n + M * a + y * o, e;
}
function Te(e, t, i) {
  let s = t[0], r = t[1], n = t[2], h = t[3], l = t[4], a = t[5], c = t[6], f = t[7], o = t[8], d = i[0], u = i[1];
  return e[0] = s, e[1] = r, e[2] = n, e[3] = h, e[4] = l, e[5] = a, e[6] = d * s + u * h + c, e[7] = d * r + u * l + f, e[8] = d * n + u * a + o, e;
}
function Oe(e, t, i) {
  let s = t[0], r = t[1], n = t[2], h = t[3], l = t[4], a = t[5], c = t[6], f = t[7], o = t[8], d = Math.sin(i), u = Math.cos(i);
  return e[0] = u * s + d * h, e[1] = u * r + d * l, e[2] = u * n + d * a, e[3] = u * h - d * s, e[4] = u * l - d * r, e[5] = u * a - d * n, e[6] = c, e[7] = f, e[8] = o, e;
}
function Be(e, t, i) {
  let s = i[0], r = i[1];
  return e[0] = s * t[0], e[1] = s * t[1], e[2] = s * t[2], e[3] = r * t[3], e[4] = r * t[4], e[5] = r * t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e;
}
function qe(e, t) {
  let i = t[0], s = t[1], r = t[2], n = t[3], h = t[4], l = t[5], a = t[6], c = t[7], f = t[8], o = t[9], d = t[10], u = t[11], g = t[12], p = t[13], x = t[14], m = t[15], E = i * l - s * h, M = i * a - r * h, y = i * c - n * h, _ = s * a - r * l, w = s * c - n * l, b = r * c - n * a, F = f * p - o * g, z = f * x - d * g, S = f * m - u * g, L = o * x - d * p, C = o * m - u * p, R = d * m - u * x, A = E * R - M * C + y * L + _ * S - w * z + b * F;
  return A ? (A = 1 / A, e[0] = (l * R - a * C + c * L) * A, e[1] = (a * S - h * R - c * z) * A, e[2] = (h * C - l * S + c * F) * A, e[3] = (r * C - s * R - n * L) * A, e[4] = (i * R - r * S + n * z) * A, e[5] = (s * S - i * C - n * F) * A, e[6] = (p * b - x * w + m * _) * A, e[7] = (x * y - g * b - m * M) * A, e[8] = (g * w - p * y + m * E) * A, e) : null;
}
class $e extends Array {
  constructor(t = 1, i = 0, s = 0, r = 0, n = 1, h = 0, l = 0, a = 0, c = 1) {
    return super(t, i, s, r, n, h, l, a, c), this;
  }
  set(t, i, s, r, n, h, l, a, c) {
    return t.length ? this.copy(t) : (ze(this, t, i, s, r, n, h, l, a, c), this);
  }
  translate(t, i = this) {
    return Te(this, i, t), this;
  }
  rotate(t, i = this) {
    return Oe(this, i, t), this;
  }
  scale(t, i = this) {
    return Be(this, i, t), this;
  }
  multiply(t, i) {
    return i ? ht(this, t, i) : ht(this, this, t), this;
  }
  identity() {
    return Le(this), this;
  }
  copy(t) {
    return Fe(this, t), this;
  }
  fromMatrix4(t) {
    return Se(this, t), this;
  }
  fromQuaternion(t) {
    return Ce(this, t), this;
  }
  fromBasis(t, i, s) {
    return this.set(t[0], t[1], t[2], i[0], i[1], i[2], s[0], s[1], s[2]), this;
  }
  inverse(t = this) {
    return Re(this, t), this;
  }
  getNormalMatrix(t) {
    return qe(this, t), this;
  }
}
let Ie = 0;
class Ne extends ve {
  constructor(t, { geometry: i, program: s, mode: r = t.TRIANGLES, frustumCulled: n = !0, renderOrder: h = 0 } = {}) {
    super(), t.canvas || console.error("gl not passed as first argument to Mesh"), this.gl = t, this.id = Ie++, this.geometry = i, this.program = s, this.mode = r, this.frustumCulled = n, this.renderOrder = h, this.modelViewMatrix = new q(), this.normalMatrix = new $e(), this.beforeRenderCallbacks = [], this.afterRenderCallbacks = [];
  }
  onBeforeRender(t) {
    return this.beforeRenderCallbacks.push(t), this;
  }
  onAfterRender(t) {
    return this.afterRenderCallbacks.push(t), this;
  }
  draw({ camera: t } = {}) {
    t && (this.program.uniforms.modelMatrix || Object.assign(this.program.uniforms, {
      modelMatrix: { value: null },
      viewMatrix: { value: null },
      modelViewMatrix: { value: null },
      normalMatrix: { value: null },
      projectionMatrix: { value: null },
      cameraPosition: { value: null }
    }), this.program.uniforms.projectionMatrix.value = t.projectionMatrix, this.program.uniforms.cameraPosition.value = t.worldPosition, this.program.uniforms.viewMatrix.value = t.viewMatrix, this.modelViewMatrix.multiply(t.viewMatrix, this.worldMatrix), this.normalMatrix.getNormalMatrix(this.modelViewMatrix), this.program.uniforms.modelMatrix.value = this.worldMatrix, this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix, this.program.uniforms.normalMatrix.value = this.normalMatrix), this.beforeRenderCallbacks.forEach((s) => s && s({ mesh: this, camera: t }));
    let i = this.program.cullFace && this.worldMatrix.determinant() < 0;
    this.program.use({ flipFaces: i }), this.geometry.draw({ mode: this.mode, program: this.program }), this.afterRenderCallbacks.forEach((s) => s && s({ mesh: this, camera: t }));
  }
}
function De(e, t) {
  return e[0] = t[0], e[1] = t[1], e;
}
function Pe(e, t, i) {
  return e[0] = t, e[1] = i, e;
}
function lt(e, t, i) {
  return e[0] = t[0] + i[0], e[1] = t[1] + i[1], e;
}
function at(e, t, i) {
  return e[0] = t[0] - i[0], e[1] = t[1] - i[1], e;
}
function Ge(e, t, i) {
  return e[0] = t[0] * i[0], e[1] = t[1] * i[1], e;
}
function We(e, t, i) {
  return e[0] = t[0] / i[0], e[1] = t[1] / i[1], e;
}
function P(e, t, i) {
  return e[0] = t[0] * i, e[1] = t[1] * i, e;
}
function Ue(e, t) {
  var i = t[0] - e[0], s = t[1] - e[1];
  return Math.sqrt(i * i + s * s);
}
function Ve(e, t) {
  var i = t[0] - e[0], s = t[1] - e[1];
  return i * i + s * s;
}
function ct(e) {
  var t = e[0], i = e[1];
  return Math.sqrt(t * t + i * i);
}
function Xe(e) {
  var t = e[0], i = e[1];
  return t * t + i * i;
}
function ke(e, t) {
  return e[0] = -t[0], e[1] = -t[1], e;
}
function Ye(e, t) {
  return e[0] = 1 / t[0], e[1] = 1 / t[1], e;
}
function Ze(e, t) {
  var i = t[0], s = t[1], r = i * i + s * s;
  return r > 0 && (r = 1 / Math.sqrt(r)), e[0] = t[0] * r, e[1] = t[1] * r, e;
}
function je(e, t) {
  return e[0] * t[0] + e[1] * t[1];
}
function ft(e, t) {
  return e[0] * t[1] - e[1] * t[0];
}
function Qe(e, t, i, s) {
  var r = t[0], n = t[1];
  return e[0] = r + s * (i[0] - r), e[1] = n + s * (i[1] - n), e;
}
function He(e, t, i, s, r) {
  const n = Math.exp(-s * r);
  let h = t[0], l = t[1];
  return e[0] = i[0] + (h - i[0]) * n, e[1] = i[1] + (l - i[1]) * n, e;
}
function Ke(e, t, i) {
  var s = t[0], r = t[1];
  return e[0] = i[0] * s + i[3] * r + i[6], e[1] = i[1] * s + i[4] * r + i[7], e;
}
function Je(e, t, i) {
  let s = t[0], r = t[1];
  return e[0] = i[0] * s + i[4] * r + i[12], e[1] = i[1] * s + i[5] * r + i[13], e;
}
function ti(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}
class X extends Array {
  constructor(t = 0, i = t) {
    return super(t, i), this;
  }
  get x() {
    return this[0];
  }
  get y() {
    return this[1];
  }
  set x(t) {
    this[0] = t;
  }
  set y(t) {
    this[1] = t;
  }
  set(t, i = t) {
    return t.length ? this.copy(t) : (Pe(this, t, i), this);
  }
  copy(t) {
    return De(this, t), this;
  }
  add(t, i) {
    return i ? lt(this, t, i) : lt(this, this, t), this;
  }
  sub(t, i) {
    return i ? at(this, t, i) : at(this, this, t), this;
  }
  multiply(t) {
    return t.length ? Ge(this, this, t) : P(this, this, t), this;
  }
  divide(t) {
    return t.length ? We(this, this, t) : P(this, this, 1 / t), this;
  }
  inverse(t = this) {
    return Ye(this, t), this;
  }
  // Can't use 'length' as Array.prototype uses it
  len() {
    return ct(this);
  }
  distance(t) {
    return t ? Ue(this, t) : ct(this);
  }
  squaredLen() {
    return this.squaredDistance();
  }
  squaredDistance(t) {
    return t ? Ve(this, t) : Xe(this);
  }
  negate(t = this) {
    return ke(this, t), this;
  }
  cross(t, i) {
    return i ? ft(t, i) : ft(this, t);
  }
  scale(t) {
    return P(this, this, t), this;
  }
  normalize() {
    return Ze(this, this), this;
  }
  dot(t) {
    return je(this, t);
  }
  equals(t) {
    return ti(this, t);
  }
  applyMatrix3(t) {
    return Ke(this, this, t), this;
  }
  applyMatrix4(t) {
    return Je(this, this, t), this;
  }
  lerp(t, i) {
    return Qe(this, this, t, i), this;
  }
  smoothLerp(t, i, s) {
    return He(this, this, t, i, s), this;
  }
  clone() {
    return new X(this[0], this[1]);
  }
  fromArray(t, i = 0) {
    return this[0] = t[i], this[1] = t[i + 1], this;
  }
  toArray(t = [], i = 0) {
    return t[i] = this[0], t[i + 1] = this[1], t;
  }
}
class ei extends Ot {
  constructor(t, { attributes: i = {} } = {}) {
    Object.assign(i, {
      position: { size: 2, data: new Float32Array([-1, -1, 3, -1, -1, 3]) },
      uv: { size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2]) }
    }), super(t, i);
  }
}
const v = {
  color1: "#9e5d9c",
  color2: "#2777ff",
  color3: "#a89bb5",
  timeSpeed: 0.3,
  colorBalance: -0.08,
  warpStrength: 1,
  warpFrequency: 5,
  warpSpeed: 2.2,
  warpAmplitude: 50,
  blendAngle: 4,
  blendSoftness: 0.18,
  rotationAmount: 500,
  noiseScale: 2,
  grainAmount: 0.07,
  grainScale: 2,
  contrast: 1.5,
  gamma: 1,
  saturation: 0.85,
  centerX: 0,
  centerY: 0,
  zoom: 0.7
}, ii = `
attribute vec2 uv;
attribute vec2 position;
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`, si = `
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
`, G = (e) => {
  const t = e.replace("#", ""), i = Number.parseInt(t, 16);
  return [
    (i >> 16 & 255) / 255,
    (i >> 8 & 255) / 255,
    (i & 255) / 255
  ];
}, ri = (e) => {
  e.classList.add("has-grainient-fallback");
}, dt = (e) => {
  let t = !1;
  const i = () => {
    t || (t = !0, e(), window.removeEventListener("pagehide", i), window.removeEventListener("beforeunload", i));
  };
  return window.addEventListener("pagehide", i), window.addEventListener("beforeunload", i), window.cleanupProjectGrainient = i, i;
}, V = () => {
  const e = document.querySelector("#grainient-bg, .grainient-bg");
  if (!e) return;
  e.innerHTML = "", e.classList.add("is-loading");
  const t = () => {
    e.style.display = "none", e.getBoundingClientRect(), e.replaceChildren(), e.remove();
  };
  let i, s = 0;
  try {
    i = new Pt({
      alpha: !1,
      antialias: !1,
      dpr: Math.min(window.devicePixelRatio || 1, 1.5)
    });
  } catch (d) {
    console.warn("Grainient WebGL background fell back to CSS animation.", d), ri(e), dt(t);
    return;
  }
  const { gl: r } = i;
  r.canvas.setAttribute("aria-hidden", "true"), r.clearColor(0.62, 0.36, 0.61, 1), e.appendChild(r.canvas), e.classList.remove("is-loading"), e.classList.add("has-webgl-grainient");
  const n = {
    uResolution: { value: new X(1, 1) },
    uTime: { value: 0 },
    uColor1: { value: G(v.color1) },
    uColor2: { value: G(v.color2) },
    uColor3: { value: G(v.color3) },
    uTimeSpeed: { value: v.timeSpeed },
    uColorBalance: { value: v.colorBalance },
    uWarpStrength: { value: v.warpStrength },
    uWarpFrequency: { value: v.warpFrequency },
    uWarpSpeed: { value: v.warpSpeed },
    uWarpAmplitude: { value: v.warpAmplitude },
    uBlendAngle: { value: v.blendAngle },
    uBlendSoftness: { value: v.blendSoftness },
    uRotationAmount: { value: v.rotationAmount },
    uNoiseScale: { value: v.noiseScale },
    uGrainAmount: { value: v.grainAmount },
    uGrainScale: { value: v.grainScale },
    uGrainAnimated: { value: 0 },
    uContrast: { value: v.contrast },
    uGamma: { value: v.gamma },
    uSaturation: { value: v.saturation },
    uCenterX: { value: v.centerX },
    uCenterY: { value: v.centerY },
    uZoom: { value: v.zoom }
  }, h = new ei(r), l = new qt(r, { vertex: ii, fragment: si, uniforms: n }), a = new Ne(r, { geometry: h, program: l }), c = () => {
    const d = Math.max(e.clientWidth || window.innerWidth, 1), u = Math.max(e.clientHeight || window.innerHeight, 1);
    i.setSize(d, u), n.uResolution.value.set(r.canvas.width, r.canvas.height);
  }, f = (d = 0) => {
    n.uTime.value = d * 1e-3, i.render({ scene: a }), s = window.requestAnimationFrame(f);
  }, o = () => {
    window.cancelAnimationFrame(s), window.removeEventListener("resize", c);
    try {
      r.getExtension("WEBGL_lose_context")?.loseContext();
    } catch {
    }
    t();
  };
  window.addEventListener("resize", c), dt(o), c(), f(performance.now());
};
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", V, { once: !0 }) : V();
window.addEventListener("pageshow", (e) => {
  if (e.persisted && !document.querySelector("#grainient-bg, .grainient-bg")) {
    const t = document.createElement("div");
    t.id = "grainient-bg", t.className = "grainient-bg", t.setAttribute("aria-hidden", "true"), document.body.prepend(t), V();
  }
});
