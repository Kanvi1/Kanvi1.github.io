import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // We render at a lower resolution (e.g., divide dimensions by 3) to improve performance
    // and let the CSS stretch it, which automatically blurs the gradients even more beautifully.
    const resizeFactor = 3;

    const handleResize = () => {
      width = Math.floor(window.innerWidth / resizeFactor);
      height = Math.floor(window.innerHeight / resizeFactor);
      canvas.width = width;
      canvas.height = height;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Blob parameters: initial phases and speeds
    const blobs = [
      {
        // Orange Blob
        color: 'rgba(255, 80, 5, 0.16)', // #ff5005 with alpha
        xPhase: 0,
        yPhase: 0,
        xSpeed: 0.0012,
        ySpeed: 0.0008,
        radiusMin: 0.5,
        radiusMax: 0.9,
        radiusPhase: 0,
        radiusSpeed: 0.0005,
      },
      {
        // Peach/Cream Blob
        color: 'rgba(219, 186, 149, 0.1)', // #dbba95 with alpha
        xPhase: Math.PI / 2,
        yPhase: Math.PI / 3,
        xSpeed: 0.0009,
        ySpeed: 0.0015,
        radiusMin: 0.4,
        radiusMax: 0.8,
        radiusPhase: Math.PI,
        radiusSpeed: 0.0004,
      },
      {
        // Lavender/Purple Blob
        color: 'rgba(208, 188, 225, 0.08)', // #d0bce1 with alpha
        xPhase: Math.PI,
        yPhase: Math.PI / 4,
        xSpeed: 0.0007,
        ySpeed: 0.0011,
        radiusMin: 0.45,
        radiusMax: 0.75,
        radiusPhase: Math.PI / 2,
        radiusSpeed: 0.0006,
      },
    ];

    let time = 0;

    const render = () => {
      time += 1.0;

      const isLight = document.documentElement.getAttribute('data-theme') === 'light';

      // Draw the theme-specific background plane color
      const baseGrad = ctx.createLinearGradient(0, 0, width, height);
      if (isLight) {
        baseGrad.addColorStop(0, '#f4f1eb');
        baseGrad.addColorStop(0.5, '#faf9f6');
        baseGrad.addColorStop(1, '#f4f1eb');
      } else {
        baseGrad.addColorStop(0, '#020306');
        baseGrad.addColorStop(0.5, '#040710');
        baseGrad.addColorStop(1, '#020306');
      }
      ctx.fillStyle = baseGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw each organic flowing blob
      blobs.forEach((blob, idx) => {
        // Calculate coordinates using Lissajous-like movements
        const x = width / 2 + Math.cos(blob.xPhase + time * blob.xSpeed) * (width * 0.4);
        const y = height / 2 + Math.sin(blob.yPhase + time * blob.ySpeed) * (height * 0.4);

        // Slow pulse for radius
        const rScale = blob.radiusMin + (Math.sin(blob.radiusPhase + time * blob.radiusSpeed) + 1) * 0.5 * (blob.radiusMax - blob.radiusMin);
        const radius = Math.max(width, height) * rScale;

        // Choose appropriate alpha color based on theme and index
        let color = blob.color;
        if (isLight) {
          if (idx === 0) color = 'rgba(255, 80, 5, 0.05)'; // orange
          else if (idx === 1) color = 'rgba(219, 186, 149, 0.04)'; // peach
          else color = 'rgba(208, 188, 225, 0.03)'; // lavender
        }

        // Draw radial gradient
        const radGrad = ctx.createRadialGradient(x, y, 0, x, y, radius);
        radGrad.addColorStop(0, color);
        radGrad.addColorStop(1, isLight ? 'rgba(244, 241, 235, 0)' : 'rgba(2, 3, 6, 0)');

        ctx.fillStyle = radGrad;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -10,
        pointerEvents: 'none',
        display: 'block',
        transform: 'translate3d(0, 0, 0)', // Force GPU layer
      }}
    />
  );
}
