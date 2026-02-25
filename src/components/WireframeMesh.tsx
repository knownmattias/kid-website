import { useEffect, useRef } from "react";

const WireframeMesh = ({ className = "" }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const w = canvas.getBoundingClientRect().width;
      const h = canvas.getBoundingClientRect().height;

      ctx.clearRect(0, 0, w, h);

      const cols = 60;
      const rows = 40;
      const cellW = w / (cols - 1);
      const cellH = h / (rows - 1);

      // Camera/perspective params
      const perspective = 600;
      const cameraY = -120;
      const cameraZ = 300;
      const tiltX = 0.65; // tilt angle

      const getHeight = (x: number, z: number, t: number): number => {
        const nx = x * 0.04;
        const nz = z * 0.06;
        const wave1 = Math.sin(nx + t * 0.4) * Math.cos(nz + t * 0.3) * 45;
        const wave2 = Math.sin(nx * 1.8 + nz * 0.7 + t * 0.2) * 25;
        const wave3 = Math.cos(nx * 0.5 + nz * 1.2 - t * 0.35) * 35;
        const wave4 = Math.sin(nx * 2.5 + t * 0.5) * Math.sin(nz * 2 + t * 0.25) * 15;
        return wave1 + wave2 + wave3 + wave4;
      };

      // Project 3D point to 2D
      const project = (
        px: number,
        py: number,
        pz: number
      ): [number, number, number] => {
        // Tilt around X axis
        const cosT = Math.cos(tiltX);
        const sinT = Math.sin(tiltX);
        const ry = py * cosT - pz * sinT;
        const rz = py * sinT + pz * cosT;

        const eyeZ = rz + cameraZ;
        if (eyeZ <= 0) return [0, 0, 0];

        const scale = perspective / eyeZ;
        const sx = w / 2 + px * scale;
        const sy = h / 2 + (ry + cameraY) * scale;

        return [sx, sy, eyeZ];
      };

      // Generate grid points
      const gridW = cols * 8;
      const gridH = rows * 10;
      const points: [number, number, number][][] = [];

      for (let r = 0; r < rows; r++) {
        points[r] = [];
        for (let c = 0; c < cols; c++) {
          const x = (c - cols / 2) * (gridW / cols);
          const z = (r - rows / 2) * (gridH / rows);
          const y = getHeight(c, r, time);
          const [sx, sy, ez] = project(x, y, z);
          points[r][c] = [sx, sy, ez];
        }
      }

      // Draw grid lines (back to front)
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const [sx, sy, ez] = points[r][c];
          
          // Depth-based opacity
          const depthFactor = Math.max(0, Math.min(1, (ez - 50) / 600));
          const alpha = 0.08 + depthFactor * 0.25;

          ctx.strokeStyle = `rgba(120, 120, 130, ${alpha})`;
          ctx.lineWidth = 0.5 + depthFactor * 0.5;

          // Horizontal lines
          if (c < cols - 1) {
            const [nx, ny] = points[r][c + 1];
            ctx.beginPath();
            ctx.moveTo(sx, sy);
            ctx.lineTo(nx, ny);
            ctx.stroke();
          }

          // Vertical lines
          if (r < rows - 1) {
            const [nx, ny] = points[r + 1][c];
            ctx.beginPath();
            ctx.moveTo(sx, sy);
            ctx.lineTo(nx, ny);
            ctx.stroke();
          }
        }
      }

      time += 0.008;
      animationRef.current = requestAnimationFrame(draw);
    };

    animationRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      style={{ display: "block" }}
      aria-hidden="true"
    />
  );
};

export default WireframeMesh;
