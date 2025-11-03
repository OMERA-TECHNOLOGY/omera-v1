"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  Code,
  Palette,
  Database,
  RefreshCw,
  Cloud,
  Rocket,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Service = {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  technologies: string[];
  features: string[];
  accent: string; // keep original per-service gradient classes
};

const services: Service[] = [
  {
    id: "fullstack",
    title: "Full-Stack Web Development",
    description: "End-to-end platforms, testable and observable.",
    icon: Code,
    technologies: ["React", "Next.js", "Node.js", "Postgres", "Redis"],
    features: [
      "API design",
      "Event-driven systems",
      "CI/CD canaries",
      "Tracing",
    ],
    accent: "from-amber-400 via-rose-500 to-fuchsia-600",
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    description: "Performance-first UIs with micro-interactions.",
    icon: Palette,
    technologies: ["React", "TypeScript", "Tailwind", "Framer", "Three.js"],
    features: [
      "Micro-interactions",
      "Accessibility",
      "3D motion",
      "Perf budgets",
    ],
    accent: "from-blue-400 via-indigo-500 to-purple-600",
  },
  {
    id: "backend",
    title: "Backend Architecture",
    description: "Reliable services and data platforms.",
    icon: Database,
    technologies: ["Node", "Python", "Postgres", "MongoDB", "GraphQL"],
    features: ["Data modeling", "CQRS patterns", "Caching", "Secure auth"],
    accent: "from-emerald-400 via-teal-500 to-cyan-600",
  },
  {
    id: "modernization",
    title: "System Modernization",
    description: "Migrate without interruption.",
    icon: RefreshCw,
    technologies: ["Docker", "Kubernetes", "AWS", "Terraform", "CI/CD"],
    features: [
      "Strangler pattern",
      "Incremental migration",
      "Testing pipelines",
      "Cost tuning",
    ],
    accent: "from-orange-400 via-red-500 to-pink-600",
  },
  {
    id: "devops",
    title: "Deployment & DevOps",
    description: "Production confidence and fast delivery.",
    icon: Cloud,
    technologies: [
      "Docker",
      "K8s",
      "Terraform",
      "Prometheus",
      "GitHub Actions",
    ],
    features: [
      "Canary deploys",
      "SLOs & monitoring",
      "Secrets management",
      "Auto-scaling",
    ],
    accent: "from-sky-400 via-blue-500 to-indigo-600",
  },
];

const cardMotion = {
  hidden: { opacity: 0, scale: 0.98, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" },
  }),
};

export const ServicesHorizontal: React.FC = () => {
  const railRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const x = useMotionValue(0);
  const progress = useTransform(x, (v) => v);

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      // horizontal wheel scroll
      if (Math.abs(e.deltaX) > 0 || Math.abs(e.deltaY) > 0) {
        el.scrollBy({ left: e.deltaY || e.deltaX, behavior: "auto" });
        e.preventDefault();
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  // keyboard left/right
  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight")
        el.scrollBy({ left: 420, behavior: "smooth" });
      if (e.key === "ArrowLeft")
        el.scrollBy({ left: -420, behavior: "smooth" });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // set active card based on center visibility
  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    let raf = 0;
    const check = () => {
      const children = Array.from(
        el.querySelectorAll<HTMLDivElement>("[data-card-index]")
      );
      const center = el.getBoundingClientRect().left + el.clientWidth / 2;
      let nearest = 0;
      let minDist = Infinity;
      children.forEach((c, i) => {
        const r = c.getBoundingClientRect();
        const cCenter = r.left + r.width / 2;
        const dist = Math.abs(cCenter - center);
        if (dist < minDist) {
          minDist = dist;
          nearest = i;
        }
      });
      setActive(nearest);
      raf = requestAnimationFrame(check);
    };
    raf = requestAnimationFrame(check);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section id="services" className="py-20 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
              Digital craft. Engineered with intent.
            </h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-xl">
              Horizontal preview. Hover to tilt. Use wheel or swipe to navigate.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              aria-label="prev"
              onClick={() =>
                railRef.current?.scrollBy({ left: -520, behavior: "smooth" })
              }
              className="w-10 h-10 grid place-items-center rounded-lg bg-card/60 border border-border/30 hover:bg-accent/6 transition"
            >
              ‹
            </button>
            <button
              aria-label="next"
              onClick={() =>
                railRef.current?.scrollBy({ left: 520, behavior: "smooth" })
              }
              className="w-10 h-10 grid place-items-center rounded-lg bg-card/60 border border-border/30 hover:bg-accent/6 transition"
            >
              ›
            </button>
          </div>
        </header>

        <div
          ref={railRef}
          className="relative overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth -mx-6 px-6"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <div className="flex gap-8 items-stretch py-6">
            {services.map((svc, i) => (
              <ServiceCard
                key={svc.id}
                svc={svc}
                index={i}
                active={i === active}
                motionIndex={i}
                data-card-index={i}
                onFocus={() => setActive(i)}
              />
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {services.map((_, i) => (
            <div
              key={i}
              onClick={() => {
                const el = railRef.current;
                if (!el) return;
                const child =
                  el.querySelectorAll<HTMLElement>("[data-card-index]")[i];
                child?.scrollIntoView({ behavior: "smooth", inline: "center" });
              }}
              className={`w-2 h-2 rounded-full transition ${
                i === active ? "bg-accent scale-110" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard: React.FC<{
  svc: Service;
  index: number;
  active: boolean;
  motionIndex: number;
  onFocus?: () => void;
}> = ({ svc, index, active, motionIndex, onFocus }) => {
  const Icon = svc.icon;
  const ref = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [pointerActive, setPointerActive] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const onPointerMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      const ry = (px - 0.5) * 12; // yaw
      const rx = (py - 0.5) * -8; // pitch
      setTilt({ rx, ry });
    };
    const onLeave = () => {
      setTilt({ rx: 0, ry: 0 });
      setPointerActive(false);
    };
    const onEnter = () => setPointerActive(true);

    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerleave", onLeave);
    el.addEventListener("pointerdown", onEnter);
    el.addEventListener("pointerup", onLeave);
    return () => {
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerleave", onLeave);
      el.removeEventListener("pointerdown", onEnter);
      el.removeEventListener("pointerup", onLeave);
    };
  }, []);

  return (
    <motion.div
      data-card-index={index}
      ref={ref}
      className={`snap-center min-w-[78%] md:min-w-[48%] lg:min-w-[38%] xl:min-w-[30%]`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardMotion}
      custom={motionIndex}
      onFocus={onFocus}
      style={{
        perspective: 1200,
      }}
    >
      <motion.div
        className={`relative rounded-2xl border border-border/30 bg-card/70 backdrop-blur-md overflow-hidden shadow-lg transition-transform will-change-transform`}
        animate={{
          transform: `rotateX(${tilt.rx}deg) rotateY(${
            tilt.ry
          }deg) translateZ(${active ? 6 : 0}px)`,
          boxShadow: active
            ? "0 18px 40px rgba(0,0,0,0.25)"
            : "0 8px 20px rgba(0,0,0,0.12)",
        }}
        transition={{ type: "spring", stiffness: 160, damping: 18 }}
        onClick={onFocus}
      >
        <div
          className={`absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-br ${svc.accent} opacity-7 blur-3xl transform -translate-x-8 -translate-y-6 mix-blend-screen`}
          aria-hidden
        />

        <div className="relative z-10 p-6 md:p-8 lg:p-10 flex flex-col h-full">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl grid place-items-center bg-background/60 border border-border/20">
                <Icon className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold">
                  {svc.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1 hidden md:block">
                  {svc.description}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-end gap-2">
              <div
                className={`px-2 py-1 rounded-full text-xs font-medium border ${
                  active
                    ? "bg-accent text-primary border-accent/60"
                    : "bg-card/50 border-border/40"
                }`}
              >
                {active ? "Active" : "Preview"}
              </div>
              <div className="text-sm text-muted-foreground hidden md:block">
                {svc.technologies.slice(0, 3).join(" · ")}
              </div>
            </div>
          </div>

          <div className="mt-6 flex-1 flex flex-col justify-between">
            <div>
              <p className="text-sm md:text-base text-foreground/90">
                {svc.description}
              </p>

              <ul className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
                {svc.features.map((f, idx) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <span
                      className={`w-2 h-2 rounded-full mt-1 ${
                        idx % 2 === 0 ? "bg-accent" : "bg-accent/70"
                      }`}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex items-center justify-between gap-4">
              <div className="flex gap-2 flex-wrap">
                {svc.technologies.slice(0, 5).map((t) => (
                  <Badge
                    key={t}
                    variant="secondary"
                    className="px-2 py-1 text-xs bg-background/60 border-border/10"
                  >
                    {t}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-3">
                <Button
                  size="sm"
                  className="bg-accent text-primary font-medium px-4 py-2 rounded-lg"
                  onClick={() => {
                    // focus action placeholder
                    const el = ref.current;
                    el?.scrollIntoView({
                      behavior: "smooth",
                      inline: "center",
                    });
                  }}
                >
                  Talk to an engineer
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="px-3 py-2 rounded-lg"
                >
                  Case studies
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* subtle reflection / highlight */}
        <div
          aria-hidden
          className={`absolute inset-0 pointer-events-none rounded-2xl`}
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.00))",
            mixBlendMode: "overlay",
          }}
        />
      </motion.div>
    </motion.div>
  );
};
