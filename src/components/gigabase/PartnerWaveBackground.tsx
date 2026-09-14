"use client";

import React, { useEffect, useRef } from "react";

// Matrix math helpers for zero-dependency high-performance WebGL
function mat4Perspective(out: Float32Array, fovY: number, aspect: number, near: number, far: number) {
  const f = 1.0 / Math.tan(fovY / 2);
  out[0] = f / aspect; out[1] = 0; out[2] = 0; out[3] = 0;
  out[4] = 0; out[5] = f; out[6] = 0; out[7] = 0;
  out[8] = 0; out[9] = 0; out[10] = (far + near) / (near - far); out[11] = -1;
  out[12] = 0; out[13] = 0; out[14] = (2 * far * near) / (near - far); out[15] = 0;
}

function mat4LookAt(out: Float32Array, eye: number[], target: number[], up: number[]) {
  let z0 = eye[0] - target[0], z1 = eye[1] - target[1], z2 = eye[2] - target[2];
  let len = Math.hypot(z0, z1, z2);
  if (len > 0.00001) { z0 /= len; z1 /= len; z2 /= len; }

  let x0 = up[1] * z2 - up[2] * z1;
  let x1 = up[2] * z0 - up[0] * z2;
  let x2 = up[0] * z1 - up[1] * z0;
  len = Math.hypot(x0, x1, x2);
  if (len > 0.00001) { x0 /= len; x1 /= len; x2 /= len; }

  let y0 = z1 * x2 - z2 * x1;
  let y1 = z2 * x0 - z0 * x2;
  let y2 = z0 * x1 - z1 * x0;

  out[0] = x0; out[1] = y0; out[2] = z0; out[3] = 0;
  out[4] = x1; out[5] = y1; out[6] = z1; out[7] = 0;
  out[8] = x2; out[9] = y2; out[10] = z2; out[11] = 0;
  out[12] = -(x0 * eye[0] + x1 * eye[1] + x2 * eye[2]);
  out[13] = -(y0 * eye[0] + y1 * eye[1] + y2 * eye[2]);
  out[14] = -(z0 * eye[0] + z1 * eye[1] + z2 * eye[2]);
  out[15] = 1;
}

function mat4Multiply(out: Float32Array, a: Float32Array, b: Float32Array) {
  for (let i = 0; i < 4; i++) {
    const ai0 = a[i], ai1 = a[i + 4], ai2 = a[i + 8], ai3 = a[i + 12];
    out[i] = ai0 * b[0] + ai1 * b[1] + ai2 * b[2] + ai3 * b[3];
    out[i + 4] = ai0 * b[4] + ai1 * b[5] + ai2 * b[6] + ai3 * b[7];
    out[i + 8] = ai0 * b[8] + ai1 * b[9] + ai2 * b[10] + ai3 * b[11];
    out[i + 12] = ai0 * b[12] + ai1 * b[13] + ai2 * b[14] + ai3 * b[15];
  }
}

// Shaders matching USDC original production partner section
const VERTEX_SHADER = `
  uniform float uTime;
  uniform float uSize;
  uniform float uPixelRatio;
  uniform mat4 uModelViewMatrix;
  uniform mat4 uProjectionMatrix;

  attribute vec3 aPosition;
  attribute float aRandom;
  attribute vec2 aGrid;

  varying float vElevation;
  varying float vFade;
  varying float vRand;

  vec2 hash2(vec2 p){
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
  }

  float noise(vec2 p){
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(dot(hash2(i + vec2(0.0,0.0)), f - vec2(0.0,0.0)),
          dot(hash2(i + vec2(1.0,0.0)), f - vec2(1.0,0.0)), u.x),
      mix(dot(hash2(i + vec2(0.0,1.0)), f - vec2(0.0,1.0)),
          dot(hash2(i + vec2(1.0,1.0)), f - vec2(1.0,1.0)), u.x),
      u.y);
  }

  void main() {
    vec3 pos = aPosition;
    float t = uTime;

    // Shared current direction
    vec2 flow = vec2(0.42, 0.78) * t;

    // Layered swells
    float e = 0.0;
    e += noise(pos.xz * 0.10 + flow)              * 5.80;
    e += noise(pos.xz * 0.22 + flow * 1.6)        * 2.90;
    e += noise(pos.xz * 0.52 + flow * 2.5)        * 1.10;

    // A long travelling swell
    float roll = sin(pos.x * 0.08 + pos.z * 0.05 - t * 1.30);
    e += roll * 2.40;

    // Travelling directional ridge
    float ridge = sin(pos.x * 0.10 + pos.z * 0.07 - t * 1.65);
    e += ridge * 1.45;

    pos.y += e;
    vElevation = e;
    vRand = aRandom;

    // Fade particles near far/front edge for realistic atmospheric depth
    float distFade = smoothstep(0.0, 0.22, aGrid.y) * (1.0 - smoothstep(0.82, 1.0, aGrid.y));
    vFade = distFade;

    vec4 mvPosition = uModelViewMatrix * vec4(pos, 1.0);
    gl_Position = uProjectionMatrix * mvPosition;

    float sizeVar = 0.6 + aRandom * 0.7;
    gl_PointSize = uSize * sizeVar * uPixelRatio * (1.0 / -mvPosition.z);
  }
`;

const FRAGMENT_SHADER = `
  precision mediump float;
  uniform vec3 uColorLow;
  uniform vec3 uColorHigh;

  varying float vElevation;
  varying float vFade;
  varying float vRand;

  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float d = length(uv);
    float core = smoothstep(0.5, 0.0, d);
    float glow = smoothstep(0.5, 0.12, d);

    float lift = smoothstep(-2.5, 4.5, vElevation);
    vec3 col = mix(uColorLow, uColorHigh, lift);

    float hot = smoothstep(3.0, 7.0, vElevation);
    col += vec3(0.12, 0.28, 0.6) * hot;

    float alpha = (core * 0.9 + glow * 0.35) * vFade;
    alpha *= (0.55 + lift * 0.65);

    if (alpha < 0.01) discard;
    gl_FragColor = vec4(col, alpha);
  }
`;

export default function PartnerWaveBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let isVisible = true;
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    }, { threshold: 0.05 });
    observer.observe(container);

    const gl = canvas.getContext("webgl", {
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    if (!gl) return;

    // Compile helper
    const createShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vert = createShader(gl.VERTEX_SHADER, VERTEX_SHADER);
    const frag = createShader(gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    if (!vert || !frag) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vert);
    gl.attachShader(program, frag);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      return;
    }
    gl.useProgram(program);

    // Uniform locations
    const uTimeLoc = gl.getUniformLocation(program, "uTime");
    const uSizeLoc = gl.getUniformLocation(program, "uSize");
    const uPixelRatioLoc = gl.getUniformLocation(program, "uPixelRatio");
    const uColorLowLoc = gl.getUniformLocation(program, "uColorLow");
    const uColorHighLoc = gl.getUniformLocation(program, "uColorHigh");
    const uModelViewLoc = gl.getUniformLocation(program, "uModelViewMatrix");
    const uProjectionLoc = gl.getUniformLocation(program, "uProjectionMatrix");

    // Attribute locations
    const aPosLoc = gl.getAttribLocation(program, "aPosition");
    const aRandLoc = gl.getAttribLocation(program, "aRandom");
    const aGridLoc = gl.getAttribLocation(program, "aGrid");

    // Set colors: exact USDC color values (uColorLow: 859972, uColorHigh: 3832831)
    gl.uniform3f(uColorLowLoc, 0.051, 0.122, 0.267);
    gl.uniform3f(uColorHighLoc, 0.239, 0.522, 1.0);
    gl.uniform1f(uSizeLoc, 14.5);

    // Build particle grid: 320 x 320 = 102,400 points
    const isMobile = window.innerWidth < 768;
    const cols = isMobile ? 200 : 320;
    const rows = isMobile ? 200 : 320;
    const count = cols * rows;

    const positions = new Float32Array(count * 3);
    const randoms = new Float32Array(count);
    const grids = new Float32Array(count * 2);

    let pIdx = 0, rIdx = 0, gIdx = 0;
    const step = 0.135 * (320 / cols);
    const halfCols = cols / 2;
    const halfRows = rows / 2;

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        positions[pIdx++] = (x - halfCols) * step;
        positions[pIdx++] = 0;
        positions[pIdx++] = (y - halfRows) * step;
        randoms[rIdx++] = Math.random();
        grids[gIdx++] = x / cols;
        grids[gIdx++] = y / rows;
      }
    }

    // Buffers
    const posBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(aPosLoc);
    gl.vertexAttribPointer(aPosLoc, 3, gl.FLOAT, false, 0, 0);

    const randBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, randBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, randoms, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(aRandLoc);
    gl.vertexAttribPointer(aRandLoc, 1, gl.FLOAT, false, 0, 0);

    const gridBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, gridBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, grids, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(aGridLoc);
    gl.vertexAttribPointer(aGridLoc, 2, gl.FLOAT, false, 0, 0);

    // Blending & State
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE); // Additive blending for luminous wave
    gl.disable(gl.DEPTH_TEST);

    // Camera & Matrix setup matching USDC exactly:
    // PerspectiveCamera(40, width/height, 0.1, 200)
    // p = (0, 7.6, 16.5), f = (0, -3.4, -7)
    const projMatrix = new Float32Array(16);
    const viewMatrix = new Float32Array(16);
    const modelMatrix = new Float32Array(16);
    const modelViewMatrix = new Float32Array(16);

    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
    const onPointerMove = (e: PointerEvent) => {
      pointer.tx = e.clientX / window.innerWidth - 0.5;
      pointer.ty = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener("pointermove", onPointerMove);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      if (!container || !canvas) return;
      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      gl.viewport(0, 0, canvas.width, canvas.height);
      mat4Perspective(projMatrix, (40 * Math.PI) / 180, width / height, 0.1, 200);
      gl.uniformMatrix4fv(uProjectionLoc, false, projMatrix);
      gl.uniform1f(uPixelRatioLoc, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    // Animation Loop
    let animId: number;
    const startTime = performance.now();

    const render = () => {
      animId = requestAnimationFrame(render);
      if (!isVisible) return;

      const elapsed = (performance.now() - startTime) * 0.001;
      const t = prefersReducedMotion ? 0 : elapsed;
      gl.uniform1f(uTimeLoc, t);

      pointer.x += (pointer.tx - pointer.x) * 0.03;
      pointer.y += (pointer.ty - pointer.y) * 0.03;

      // Subtle camera drift + mouse reaction (exact USDC formula)
      const r = prefersReducedMotion ? 0 : 0.35 * Math.sin(0.12 * t);
      const eyeX = 0 + r + 0.8 * pointer.x;
      const eyeY = 7.6 + 0.15 * Math.cos(0.1 * t) - 0.4 * pointer.y;
      const eyeZ = 16.5;

      mat4LookAt(viewMatrix, [eyeX, eyeY, eyeZ], [0, -3.4, -7], [0, 1, 0]);

      // Model matrix: rotation X = -0.15, position Y = -2.6, position Z = -2.0
      const cosR = Math.cos(-0.15);
      const sinR = Math.sin(-0.15);
      modelMatrix[0] = 1; modelMatrix[1] = 0; modelMatrix[2] = 0; modelMatrix[3] = 0;
      modelMatrix[4] = 0; modelMatrix[5] = cosR; modelMatrix[6] = sinR; modelMatrix[7] = 0;
      modelMatrix[8] = 0; modelMatrix[9] = -sinR; modelMatrix[10] = cosR; modelMatrix[11] = 0;
      modelMatrix[12] = 0; modelMatrix[13] = -2.6; modelMatrix[14] = -2.0; modelMatrix[15] = 1;

      mat4Multiply(modelViewMatrix, viewMatrix, modelMatrix);
      gl.uniformMatrix4fv(uModelViewLoc, false, modelViewMatrix);

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.POINTS, 0, count);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", resize);
      gl.deleteProgram(program);
      gl.deleteShader(vert);
      gl.deleteShader(frag);
      gl.deleteBuffer(posBuffer);
      gl.deleteBuffer(randBuffer);
      gl.deleteBuffer(gridBuffer);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
