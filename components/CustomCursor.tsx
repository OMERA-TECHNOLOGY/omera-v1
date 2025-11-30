"use client";

import { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
  life: number;
  maxLife: number;
  shape: "star" | "nebula" | "sparkle";
}

export function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, prevX: 0, prevY: 0 });
  const animationRef = useRef<number>();
  const [isMoving, setIsMoving] = useState(false);
  const moveTimeoutRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    const cursor = cursorRef.current;
    if (!canvas || !cursor) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    const colors = ["rgba(255,230,80,0.8)", "rgba(18,22,40,0.9)"];

    let lastParticle = 0;

    const create = (
      x: number,
      y: number,
      velocity: number,
      angle: number
    ): Particle => {
      const shapes: Particle["shape"][] = ["star", "nebula", "sparkle"];
      return {
        x: x + (Math.random() - 0.5) * 3,
        y: y + (Math.random() - 0.5) * 3,
        vx: Math.cos(angle) * velocity * 0.1 + (Math.random() - 0.5) * 0.6,
        vy: Math.sin(angle) * velocity * 0.1 + (Math.random() - 0.5) * 0.6,
        size: Math.random() * 4 + 2,
        alpha: 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.04,
        life: 0,
        maxLife: Math.random() * 40 + 30,
        shape: shapes[Math.floor(Math.random() * shapes.length)],
      };
    };

    const handleMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      cursor.style.transform = `translate(${x}px, ${y}px)`;

      const dx = x - mouseRef.current.prevX;
      const dy = y - mouseRef.current.prevY;
      const v = Math.sqrt(dx * dx + dy * dy);

      mouseRef.current.prevX = mouseRef.current.x;
      mouseRef.current.prevY = mouseRef.current.y;
      mouseRef.current.x = x;
      mouseRef.current.y = y;

      setIsMoving(true);
      if (moveTimeoutRef.current) clearTimeout(moveTimeoutRef.current);
      moveTimeoutRef.current = window.setTimeout(() => setIsMoving(false), 120);

      const now = Date.now();
      if (now - lastParticle < 25) return;
      lastParticle = now;

      const count = Math.min(Math.floor(v / 10), 2);
      const angle = Math.atan2(dy, dx);

      for (let i = 0; i < count; i++) {
        particlesRef.current.push(
          create(x, y, v, angle + (Math.random() - 0.5) * Math.PI * 0.25)
        );
      }
    };

    const handleDown = () => {
      const { x, y } = mouseRef.current;
      cursor.style.transform = `translate(${x}px, ${y}px) scale(0.7)`;
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI * 2 * i) / 6;
        particlesRef.current.push(create(x, y, 12, a));
      }
    };

    const handleUp = () => {
      const { x, y } = mouseRef.current;
      cursor.style.transform = `translate(${x}px, ${y}px) scale(1)`;
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mousedown", handleDown);
    document.addEventListener("mouseup", handleUp);

    const star = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      s: number,
      r: number
    ) => {
      const spikes = 5;
      const outer = s;
      const inner = s * 0.4;
      ctx.beginPath();
      for (let i = 0; i < spikes * 2; i++) {
        const rad = i % 2 === 0 ? outer : inner;
        const ang = r + (Math.PI * i) / spikes;
        const px = x + Math.cos(ang) * rad;
        const py = y + Math.sin(ang) * rad;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
    };

    const nebula = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      s: number
    ) => {
      const g = ctx.createRadialGradient(x, y, 0, x, y, s);
      g.addColorStop(0, "rgba(255,255,200,0.7)");
      g.addColorStop(0.3, "rgba(20,25,40,0.4)");
      g.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(x, y, s, 0, Math.PI * 2);
      ctx.fill();
    };

    const sparkle = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      s: number,
      r: number
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(r);
      ctx.fillRect(-s / 2, -s / 10, s, s / 5);
      ctx.fillRect(-s / 10, -s / 2, s / 5, s);
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current = particlesRef.current.filter((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.96;
        p.vy *= 0.96;
        p.rotation += p.rotationSpeed;
        p.life++;

        const t = p.life / p.maxLife;
        p.alpha = 1 - t;
        p.size *= 0.985;

        if (p.life < p.maxLife) {
          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.shadowBlur = 8;
          ctx.shadowColor = p.color;
          ctx.fillStyle = p.color;

          if (p.shape === "star") {
            star(ctx, p.x, p.y, p.size, p.rotation);
            ctx.fill();
          } else if (p.shape === "nebula") {
            nebula(ctx, p.x, p.y, p.size * 1.3);
          } else {
            sparkle(ctx, p.x, p.y, p.size, p.rotation);
            ctx.fill();
          }

          ctx.restore();
          return true;
        }
        return false;
      });

      if (particlesRef.current.length > 90) {
        particlesRef.current = particlesRef.current.slice(-90);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mousedown", handleDown);
      document.removeEventListener("mouseup", handleUp);
      window.removeEventListener("resize", updateCanvasSize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (moveTimeoutRef.current) clearTimeout(moveTimeoutRef.current);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9998]"
      />
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-all duration-150"
        style={{ left: 0, top: 0 }}
      >
        <div
          className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${
            isMoving ? "w-3 h-3" : "w-2 h-2"
          }`}
        >
          <div className="w-full h-full rounded-full bg-yellow-400" />
        </div>

        <div
          className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
            isMoving ? "w-8 h-8 opacity-60" : "w-6 h-6 opacity-40"
          }`}
        >
          <div className="w-full h-full rounded-full border border-blue-950/40 animate-orbit-slow" />
          <div className="absolute inset-0 rounded-full border border-blue-950/20 animate-orbit-reverse" />
        </div>

        <div
          className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
            isMoving ? "w-10 h-10 opacity-25" : "w-8 h-8 opacity-15"
          }`}
        >
          <div className="w-full h-full rounded-full bg-blue-950/20 blur-xl" />
        </div>
      </div>

      <style jsx global>{`
        * {
          cursor: none !important;
        }
        @keyframes orbit-slow {
          0% {
            transform: rotate(0deg) scale(1);
          }
          100% {
            transform: rotate(360deg) scale(1);
          }
        }
        @keyframes orbit-reverse {
          0% {
            transform: rotate(0deg) scale(1);
          }
          100% {
            transform: rotate(-360deg) scale(1);
          }
        }
        .animate-orbit-slow {
          animation: orbit-slow 5s linear infinite;
        }
        .animate-orbit-reverse {
          animation: orbit-reverse 7s linear infinite;
        }
      `}</style>
    </>
  );
}
