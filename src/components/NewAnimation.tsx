import { useEffect, useRef } from "react";

const NX = 140;
const NY = 220; // more rows for extended vertical mesh
const OVERFLOW_X = 0.28;
const OVERFLOW_BOTTOM = 0.45;
const OVERFLOW_TOP = 0.08;

const U_VIEW_MIN = 0.38;
const U_VIEW_MAX = 0.62;
const V_VIEW_MIN = 0.32;
const V_VIEW_MAX = 0.68;

const U_DRAW_MIN = 0.12;
const U_DRAW_MAX = 0.88;
const V_DRAW_MIN = -0.5;  // extend mesh well above viewport
const V_DRAW_MAX = 2.0;   // extend mesh well below viewport

function height(u: number, v: number, t: number) {
  const x = u * Math.PI * 2;
  const y = v * Math.PI * 2;
  return (
    0.4 * Math.sin(x * 1.2 + t * 0.5) * Math.cos(y * 0.9) +
    0.3 * Math.sin(x * 2 - t * 0.4) * Math.cos(y * 1.1) +
    0.2 * Math.sin(x * 0.8 + t * 0.3) * Math.sin(y * 0.7)
  );
}

const TILT = 0.45;

function projectRaw(u: number, v: number, z: number) {
  const x = (u - 0.5) * 2;
  const y = (v - 0.5) * 2;
  const sx = x + y * 0.6;
  const sy = -z * 0.7 + y * TILT;
  return { sx, sy, z };
}

function getFixedRawBounds() {
  const xMin = (U_VIEW_MIN - 0.5) * 2;
  const xMax = (U_VIEW_MAX - 0.5) * 2;
  const yMin = (V_VIEW_MIN - 0.5) * 2;
  const yMax = (V_VIEW_MAX - 0.5) * 2;
  const minPx = xMin + 0.6 * yMin;
  const maxPx = xMax + 0.6 * yMax;
  const minPy = -0.7 + yMin * TILT;
  const maxPy = 0.7 + yMax * TILT;
  return { minPx, maxPx, minPy, maxPy };
}

function draw(
  ctx: CanvasRenderingContext2D,
  width: number,
  heightPx: number,
  phase: number
) {
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, width, heightPx);

  const W = width;
  const H = heightPx;
  const overflowX = W * OVERFLOW_X;
  const overflowBottom = H * OVERFLOW_BOTTOM;

  const { minPx, maxPx, minPy, maxPy } = getFixedRawBounds();
  const rangePx = maxPx - minPx || 1;
  const rangePy = maxPy - minPy || 1;
  const scaleX = (W + 2 * overflowX) / rangePx;
  const scaleY = (H + OVERFLOW_TOP + overflowBottom) / rangePy;
  const tx = -overflowX - minPx * scaleX;
  let ty = H + overflowBottom - maxPy * scaleY;

  const toScreen = (p: { sx: number; sy: number; z: number }, tyOffset: number) => ({
    sx: p.sx * scaleX + tx,
    sy: p.sy * scaleY + tyOffset,
    z: p.z,
  });

  // Build vertices with raw coords only first
  const rawVertices: Array<{ sx: number; sy: number; z: number }> = [];
  for (let iy = 0; iy < NY; iy++) {
    for (let ix = 0; ix < NX; ix++) {
      const u = U_DRAW_MIN + (U_DRAW_MAX - U_DRAW_MIN) * (ix / (NX - 1));
      const v = V_DRAW_MIN + (V_DRAW_MAX - V_DRAW_MIN) * (iy / (NY - 1));
      const z = height(u, v, phase);
      const p = projectRaw(u, v, z);
      rawVertices.push(p);
    }
  }

  // Ensure mesh bottom always extends below canvas: shift ty if needed
  const BOTTOM_MARGIN = 0.15 * H; // mesh extends at least 15% of height below bottom edge
  const maxSyInitial = Math.max(
    ...rawVertices.map((p) => p.sy * scaleY + ty)
  );
  if (maxSyInitial < H + BOTTOM_MARGIN) {
    ty += H + BOTTOM_MARGIN - maxSyInitial;
  }

  const vertices: Array<{ sx: number; sy: number; z: number; screen: ReturnType<typeof toScreen> }> = rawVertices.map(
    (p) => ({ ...p, screen: toScreen(p, ty) })
  );

  const quads: Array<{
    a: ReturnType<typeof toScreen>;
    b: ReturnType<typeof toScreen>;
    c: ReturnType<typeof toScreen>;
    d: ReturnType<typeof toScreen>;
    depth: number;
  }> = [];
  const idx = (ix: number, iy: number) => iy * NX + ix;
  for (let iy = 0; iy < NY - 1; iy++) {
    for (let ix = 0; ix < NX - 1; ix++) {
      const a = vertices[idx(ix, iy)].screen;
      const b = vertices[idx(ix + 1, iy)].screen;
      const c = vertices[idx(ix + 1, iy + 1)].screen;
      const d = vertices[idx(ix, iy + 1)].screen;
      const depth = (a.z + b.z + c.z + d.z) / 4;
      quads.push({ a, b, c, d, depth });
    }
  }
  quads.sort((q, r) => q.depth - r.depth);

  const minZ = Math.min(...vertices.map((p) => p.z));
  const maxZ = Math.max(...vertices.map((p) => p.z));
  const rangeZ = maxZ - minZ || 1;

  // Lines: way less gray; further away = lighter (218 front → 252 back, furthest almost white)
  quads.forEach(({ a, b, c, d, depth }) => {
    const t = (depth - minZ) / rangeZ; // 0 = front, 1 = back
    const g = Math.round(218 + t * 34); // back (furthest) → 252, nearly white
    ctx.fillStyle = "#fff";
    ctx.strokeStyle = `rgb(${g},${g},${g})`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(a.sx, a.sy);
    ctx.lineTo(b.sx, b.sy);
    ctx.lineTo(c.sx, c.sy);
    ctx.lineTo(d.sx, d.sy);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  });
}

type NewAnimationProps = {
  className?: string;
};

export default function NewAnimation({ className = "" }: NewAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phaseRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const loop = () => {
      phaseRef.current += 0.012;
      if (w > 0 && h > 0) draw(ctx, w, h, phaseRef.current);
      rafRef.current = requestAnimationFrame(loop);
    };

    resize();
    if (w > 0 && h > 0) rafRef.current = requestAnimationFrame(loop);
    else
      requestAnimationFrame(() => {
        resize();
        rafRef.current = requestAnimationFrame(loop);
      });
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        background: "#fff",
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          willChange: "contents",
        }}
      />
    </div>
  );
}
