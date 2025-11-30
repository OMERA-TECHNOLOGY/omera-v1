"use client";

import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { Sparkles, Orbit } from "lucide-react";
import { motion } from "framer-motion";

import { FloatingServiceIcon } from "./about/FloatingServiceIcon";
import { ServiceCard } from "./about/ServiceCard";
import { ZigzagButton } from "./about/ZigzagButton";
import { StatsSection } from "./about/StatsSection";
import { CTASection } from "./about/CTASection";
import {
  SERVICES,
  SERVICE_ORDER,
  BUTTON_WIDTH,
  BUTTON_HEIGHT,
  ICON_SIZE,
} from "./about/constants";

export const About = () => {
  const [activeService, setActiveService] = useState<string>("frontend");
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [orbitProgress, setOrbitProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for parallax effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Orbital animation
  useEffect(() => {
    let animationFrameId: number;

    const updateOrbit = () => {
      setOrbitProgress((prev) => (prev + 0.001) % 1);
      animationFrameId = requestAnimationFrame(updateOrbit);
    };

    animationFrameId = requestAnimationFrame(updateOrbit);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const containerRef = useCallback((node: HTMLDivElement) => {
    if (node !== null) {
      const observer = new ResizeObserver(() => {
        setContainerSize({
          width: node.offsetWidth,
          height: node.offsetHeight,
        });
      });
      observer.observe(node);
      return () => observer.disconnect();
    }
  }, []);

  const pathRef = useRef<SVGPathElement>(null);

  const services = SERVICES;

  const serviceCards = useMemo(() => {
    return services.map((service) => (
      <ServiceCard
        key={service.id}
        service={service}
        isActive={activeService === service.id}
      />
    ));
  }, [activeService, services]);

  const getCoords = useCallback(
    (position: { top: string; left: string }, isButton: boolean) => {
      if (!containerSize.width || !containerSize.height) return { x: 0, y: 0 };

      const leftPx = (parseFloat(position.left) / 100) * containerSize.width;
      const topPx = (parseFloat(position.top) / 100) * containerSize.height;

      const offsetX = isButton ? BUTTON_WIDTH / 2 : ICON_SIZE / 2;
      const offsetY = isButton ? BUTTON_HEIGHT / 2 : ICON_SIZE / 2;

      return { x: leftPx + offsetX, y: topPx + offsetY };
    },
    [containerSize]
  );

  const trackingPathD = useMemo(() => {
    if (!containerSize.width || !containerSize.height) return "";

    let path = "";
    SERVICE_ORDER.forEach((serviceId, index) => {
      const service = SERVICES.find((s) => s.id === serviceId);
      if (!service) return;

      const buttonCoords = getCoords(service.buttonPosition, true);
      const iconCoords = getCoords(service.position, false);

      if (index === 0) {
        path += `M ${buttonCoords.x} ${buttonCoords.y}`;
      } else {
        const prevServiceId = SERVICE_ORDER[index - 1];
        const prevService = SERVICES.find((s) => s.id === prevServiceId);
        if (prevService) {
          const prevIconCoords = getCoords(prevService.position, false);
          const midX = (prevIconCoords.x + buttonCoords.x) / 2;
          const midY = (prevIconCoords.y + buttonCoords.y) / 2;
          const controlX =
            midX + (prevIconCoords.y < buttonCoords.y ? -60 : 60);
          const controlY =
            midY + (prevIconCoords.x < buttonCoords.x ? 60 : -60);

          path += ` Q ${controlX} ${controlY} ${buttonCoords.x} ${buttonCoords.y}`;
        }
      }

      path += ` C ${buttonCoords.x},${buttonCoords.y} ${iconCoords.x},${buttonCoords.y} ${iconCoords.x},${iconCoords.y}`;
    });

    return path;
  }, [containerSize, getCoords]);

  const [fullPathLength, setFullPathLength] = useState(0);
  const [activePathLength, setActivePathLength] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      setFullPathLength(pathRef.current.getTotalLength());
    }
  }, [trackingPathD]);

  useEffect(() => {
    if (!containerSize.width || !containerSize.height || !pathRef.current) {
      setActivePathLength(0);
      return;
    }

    let tempPathD = "";
    const activeIndex = SERVICE_ORDER.indexOf(activeService);

    if (activeIndex === -1) {
      setActivePathLength(0);
      return;
    }

    for (let i = 0; i <= activeIndex; i++) {
      const serviceId = SERVICE_ORDER[i];
      const service = SERVICES.find((s) => s.id === serviceId);
      if (!service) continue;

      const buttonCoords = getCoords(service.buttonPosition, true);
      const iconCoords = getCoords(service.position, false);

      if (i === 0) {
        tempPathD += `M ${buttonCoords.x} ${buttonCoords.y}`;
      } else {
        const prevServiceId = SERVICE_ORDER[i - 1];
        const prevService = SERVICES.find((s) => s.id === prevServiceId);
        if (prevService) {
          const prevIconCoords = getCoords(prevService.position, false);
          const midX = (prevIconCoords.x + buttonCoords.x) / 2;
          const midY = (prevIconCoords.y + buttonCoords.y) / 2;
          const controlX =
            midX + (prevIconCoords.y < buttonCoords.y ? -60 : 60);
          const controlY =
            midY + (prevIconCoords.x < buttonCoords.x ? 60 : -60);

          tempPathD += ` Q ${controlX} ${controlY} ${buttonCoords.x} ${buttonCoords.y}`;
        }
      }
      tempPathD += ` C ${buttonCoords.x},${buttonCoords.y} ${iconCoords.x},${buttonCoords.y} ${iconCoords.x},${iconCoords.y}`;
    }

    const tempSvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    const tempPathElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    tempPathElement.setAttribute("d", tempPathD);
    tempSvg.appendChild(tempPathElement);
    document.body.appendChild(tempSvg);
    setActivePathLength(tempPathElement.getTotalLength());
    document.body.removeChild(tempSvg);
  }, [activeService, containerSize, getCoords]);

  // Parallax effect for background elements
  const parallaxStyle = {
    transform: `translate(${mousePosition.x * 0.02}px, ${
      mousePosition.y * 0.02
    }px)`,
    willChange: "transform",
  };

  return (
    <section
      id="about"
      className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background min-h-screen"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-4 sm:left-10 w-32 sm:w-48 lg:w-72 h-32 sm:h-48 lg:h-72 bg-purple-500/20 rounded-full blur-3xl animate-float-rotate"
          style={parallaxStyle}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.div
          className="absolute top-40 right-4 sm:right-10 w-40 sm:w-64 lg:w-96 h-40 sm:h-64 lg:h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"
          style={{ ...parallaxStyle, animationDelay: "2s" }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-32 sm:w-48 lg:w-80 h-32 sm:h-48 lg:h-80 bg-emerald-500/20 rounded-full blur-3xl animate-float-rotate"
          style={{ ...parallaxStyle, animationDelay: "4s" }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
        />

        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-16 sm:mb-24 lg:mb-32">
          <motion.div
            className="inline-flex items-center gap-3 mb-6 sm:mb-8 lg:mb-12 px-4 py-2 bg-accent/10 rounded-full border border-accent/20 backdrop-blur-xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="w-4 h-4 text-accent animate-pulse-fast" />
            <span className="text-sm font-bold text-accent uppercase tracking-wider">
              Engineering Excellence
            </span>
            <Sparkles className="w-4 h-4 text-accent animate-pulse-fast" />
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 sm:mb-8 lg:mb-12 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent">
              DIGITAL
            </span>
            <br />
            <span className="bg-gradient-to-r from-accent via-accent/90 to-accent/70 bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
              INNOVATION
            </span>
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed font-light mb-8 sm:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            We are elite engineers and designers building
            <span className="text-accent font-semibold animate-pulse-light">
              {" "}
              digital products that redefine industries.{" "}
            </span>
            From concept to global scale, we deliver unparalleled technical
            excellence.
          </motion.p>
        </div>

        {/* Enhanced Interactive Services Section */}
        <div className="relative mb-20 sm:mb-28 lg:mb-36">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <motion.h3
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 lg:mb-8 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Our Services
            </motion.h3>
            <motion.p
              className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl sm:max-w-2xl mx-auto font-light"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              Click on any service to explore our capabilities
            </motion.p>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div
              ref={containerRef}
              className="relative w-full max-w-5xl lg:max-w-7xl mx-auto h-64 lg:h-96 mb-12 rounded-3xl bg-gradient-to-br from-background/60 to-background/30 border-2 border-border/20 backdrop-blur-2xl overflow-visible shadow-2xl"
            >
              {/* Central Orbital System */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="w-32 h-32 rounded-full border-2 border-accent/20 animate-spin-slow">
                  <Orbit className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-accent/40" />
                </div>
              </motion.div>

              {/* Enhanced Sequential Tracking Line */}
              <div className="absolute inset-0 pointer-events-none">
                <svg
                  className="w-full h-full"
                  viewBox={`0 0 ${containerSize.width} ${containerSize.height}`}
                  preserveAspectRatio="none"
                >
                  {/* Glowing Base Line */}
                  <path
                    ref={pathRef}
                    d={trackingPathD}
                    stroke="hsl(var(--accent))"
                    strokeWidth="3"
                    strokeDasharray="8 8"
                    fill="none"
                    opacity="0.2"
                    filter="url(#glow)"
                  />

                  {/* Active Tracking Line with Glow */}
                  <motion.path
                    d={trackingPathD}
                    stroke="hsl(var(--accent))"
                    strokeWidth="4"
                    fill="none"
                    opacity="0.9"
                    strokeDasharray={fullPathLength}
                    strokeDashoffset={fullPathLength - activePathLength}
                    filter="url(#glow)"
                    initial={{ strokeDashoffset: fullPathLength }}
                    animate={{
                      strokeDashoffset: fullPathLength - activePathLength,
                    }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  />

                  {/* SVG Filters for Glow Effect */}
                  <defs>
                    <filter
                      id="glow"
                      x="-50%"
                      y="-50%"
                      width="200%"
                      height="200%"
                    >
                      <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                </svg>
              </div>

              {/* Floating Service Icons with Orbital Motion */}
              {services.map((service) => (
                <FloatingServiceIcon
                  key={service.id}
                  service={service}
                  isActive={activeService === service.id}
                  onClick={() => setActiveService(service.id)}
                  orbitProgress={orbitProgress * service.orbitSpeed}
                />
              ))}

              {/* Zigzag Buttons */}
              {services.map((service) => (
                <ZigzagButton
                  key={service.id}
                  service={service}
                  isActive={activeService === service.id}
                  onClick={() => setActiveService(service.id)}
                />
              ))}
            </div>
          </div>

          {/* Enhanced Mobile Layout */}
          <div className="lg:hidden">
            <div className="relative w-full max-w-md mx-auto mb-8">
              {/* Vertical Service Buttons with Enhanced Design */}
              <div className="flex flex-col gap-4">
                {services.map((service, index) => (
                  <motion.button
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    className={`
                      w-full justify-start py-5 px-6 text-left
                      rounded-2xl border-2 backdrop-blur-xl font-bold
                      ${
                        activeService === service.id
                          ? "bg-accent hover:bg-accent/90 text-primary scale-105 shadow-2xl shadow-accent/30 border-accent"
                          : "bg-card/80 hover:bg-card text-foreground border-border/50 hover:border-accent/30"
                      }
                    `}
                    style={{
                      willChange: "transform, background-color, box-shadow",
                    }}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.1 * index,
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-4 cursor-hover">
                      <div
                        className={`p-3 rounded-xl ${
                          activeService === service.id
                            ? "bg-primary/20"
                            : "bg-accent/10"
                        }`}
                      >
                        {service.icon}
                      </div>
                      <span className="text-lg">{service.title}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Service Details Card */}
          <div className="w-full max-w-2xl lg:max-w-4xl mx-auto px-2">
            {serviceCards}
          </div>

          {/* Enhanced Service Navigation Dots */}
          <div className="flex justify-center gap-3 sm:gap-4 mt-8 sm:mt-12">
            {services.map((service, index) => (
              <motion.button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`
                  w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-500
                  ${activeService === service.id
                    ? "bg-accent scale-125 shadow-lg shadow-accent/50"
                    : "bg-border hover:bg-accent/50 hover:scale-110"
                  }
                `}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <StatsSection />

        {/* Enhanced Final CTA */}
        <CTASection />
      </div>
    </section>
  );
};
