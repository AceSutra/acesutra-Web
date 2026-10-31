import React, { useEffect, useRef } from 'react';

export const GlobalCanvasBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track mouse with smooth spring lerping
    let mouseX = width * 0.5;
    let mouseY = height * 0.3;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    // Track scroll with smooth lerp
    let scrollY = window.scrollY;
    let targetScrollY = scrollY;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // 1. Kinetic Stardust & Constellation Nodes with 3D Depth
    const particleCount = Math.min(Math.floor((width * height) / 18000), 110);
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
      baseAlpha: number;
      color: string;
      depth: number;
    }> = [];

    const colors = ['#00C2FF', '#0066FF', '#38BDF8', '#818CF8', '#A5F3FC'];

    for (let i = 0; i < particleCount; i++) {
      const depth = 0.3 + Math.random() * 0.7; // 3D depth layer
      const baseAlpha = 0.12 + depth * 0.38;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (0.2 + depth * 0.35),
        vy: (Math.random() - 0.5) * (0.2 + depth * 0.35),
        radius: (0.8 + depth * 1.6),
        alpha: baseAlpha,
        baseAlpha,
        color: colors[Math.floor(Math.random() * colors.length)],
        depth,
      });
    }

    // 2. Bioluminescent Plasma Orbs (Sinusoidal Drift & Mouse Affinity)
    const orbs = [
      {
        baseX: width * 0.2,
        baseY: height * 0.25,
        radius: 460,
        colorInner: 'rgba(0, 102, 255, 0.18)',
        colorMid: 'rgba(0, 66, 180, 0.08)',
        phaseX: 0,
        phaseY: 1.2,
        speedX: 0.00045,
        speedY: 0.00035,
        mouseFactor: 0.06,
      },
      {
        baseX: width * 0.8,
        baseY: height * 0.4,
        radius: 500,
        colorInner: 'rgba(0, 194, 255, 0.15)',
        colorMid: 'rgba(0, 150, 220, 0.07)',
        phaseX: 2.5,
        phaseY: 0.7,
        speedX: 0.0004,
        speedY: 0.0005,
        mouseFactor: 0.08,
      },
      {
        baseX: width * 0.45,
        baseY: height * 0.75,
        radius: 540,
        colorInner: 'rgba(79, 70, 229, 0.14)',
        colorMid: 'rgba(50, 40, 180, 0.06)',
        phaseX: 1.1,
        phaseY: 2.9,
        speedX: 0.00035,
        speedY: 0.0004,
        mouseFactor: 0.05,
      },
      {
        baseX: width * 0.15,
        baseY: height * 0.85,
        radius: 400,
        colorInner: 'rgba(13, 148, 136, 0.12)',
        colorMid: 'rgba(10, 100, 100, 0.05)',
        phaseX: 3.4,
        phaseY: 1.8,
        speedX: 0.0005,
        speedY: 0.0003,
        mouseFactor: 0.04,
      },
    ];

    let lastTime = performance.now();

    const render = (time: number) => {
      animationFrameId = requestAnimationFrame(render);

      // Clamp delta time to avoid huge teleportation jumps
      const dt = Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;

      // Smooth mouse coordinates
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Smooth scroll parallax
      scrollY += (targetScrollY - scrollY) * 0.08;
      const scrollDrift = (scrollY * 0.15) % height;

      ctx.clearRect(0, 0, width, height);

      // Fill rich cinematic dark base
      ctx.fillStyle = '#07090e';
      ctx.fillRect(0, 0, width, height);

      // A. Render Bioluminescent Atmospheric Plasma Orbs
      for (const orb of orbs) {
        const ox = orb.baseX + Math.sin(time * orb.speedX + orb.phaseX) * 140 + (mouseX - width / 2) * orb.mouseFactor;
        const oy = orb.baseY + Math.cos(time * orb.speedY + orb.phaseY) * 100 + (mouseY - height / 2) * orb.mouseFactor;

        const pulse = 1 + Math.sin(time * 0.001 + orb.phaseX) * 0.08;
        const currentRadius = orb.radius * pulse;

        const grad = ctx.createRadialGradient(ox, oy, 0, ox, oy, currentRadius);
        grad.addColorStop(0, orb.colorInner);
        grad.addColorStop(0.5, orb.colorMid);
        grad.addColorStop(1, 'rgba(7, 9, 14, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(ox, oy, currentRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // B. Render Interactive Particle Constellation with 3D Depth
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move with velocity & delta time
        p.x += p.vx * dt * 60;
        p.y += p.vy * dt * 60;

        // Apply subtle vertical scroll parallax based on depth
        const renderedY = (p.y - scrollDrift * p.depth + height * 2) % height;

        // Wrap around viewport edges
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Interactive mouse proximity field
        const dx = mouseX - p.x;
        const dy = mouseY - renderedY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 190) {
          const force = (1 - dist / 190) * 1.2 * p.depth;
          p.x -= (dx / dist) * force * 2.2;
          p.y -= (dy / dist) * force * 2.2;
          p.alpha = Math.min(p.baseAlpha + force * 0.6, 0.95);
        } else {
          p.alpha += (p.baseAlpha - p.alpha) * 0.04;
        }

        // Draw particle dot with soft glow halo
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10 * p.depth;
        ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.arc(p.x, renderedY, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Draw faint connecting filaments to nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const renderedY2 = (p2.y - scrollDrift * p2.depth + height * 2) % height;
          const cdx = p.x - p2.x;
          const cdy = renderedY - renderedY2;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);

          if (cdist < 125) {
            const lineAlpha = (1 - cdist / 125) * 0.16 * p.depth * p2.depth;
            ctx.save();
            ctx.globalAlpha = lineAlpha;
            ctx.strokeStyle = '#00C2FF';
            ctx.lineWidth = 0.65;
            ctx.beginPath();
            ctx.moveTo(p.x, renderedY);
            ctx.lineTo(p2.x, renderedY2);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ opacity: 0.95 }}
        aria-hidden="true"
      />
      {/* Subtle Matrix Grid Texture */}
      <div className="absolute inset-0 bg-subtle-grid opacity-20 pointer-events-none" />
      {/* Radial Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(7,9,14,0.7)_100%)] pointer-events-none" />
    </div>
  );
};
