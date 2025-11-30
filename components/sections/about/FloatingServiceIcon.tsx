"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Service } from "./constants";

export const FloatingServiceIcon = ({
  service,
  isActive,
  onClick,
  orbitProgress,
}: {
  service: Service;
  isActive: boolean;
  onClick: () => void;
  orbitProgress: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);

  // Calculate orbital position
  const angle = orbitProgress * 2 * Math.PI;
  const orbitX = Math.cos(angle) * service.orbitRadius;
  const orbitY = Math.sin(angle) * service.orbitRadius;

  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 600);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        absolute transform-gpu transition-all duration-1000 cursor-pointer group
        ${isActive ? "z-50" : "z-30"}
      `}
      style={{
        top: `calc(${service.position.top})`,
        left: `calc(${service.position.left})`,
        willChange: "transform",
        filter: isActive
          ? `drop-shadow(0 0 20px ${service.pulseColor})`
          : "none",
      }}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{
        scale: isActive ? 1.5 : isHovered ? 1.25 : 1,
        opacity: 1,
        x: orbitX,
        y: orbitY,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
        mass: 0.5,
        duration: isActive ? 0.7 : 0.3,
      }}
      whileTap={{ scale: 1.4 }}
    >
      {/* Orbital Trail */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-accent/20 animate-ping-slow"
        style={{
          width: `${service.orbitRadius * 2}px`,
          height: `${service.orbitRadius * 2}px`,
          top: `-${service.orbitRadius}px`,
          left: `-${service.orbitRadius}px`,
        }}
        initial={{ scale: 0 }}
        animate={{ scale: isActive ? 1 : 0.8 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      />

      <motion.div
        className={`
          relative w-14 h-14 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center
          transform-gpu group-hover:rotate-12
          ${
            isActive
              ? "bg-gradient-to-br from-accent to-accent/70 shadow-2xl shadow-accent/50"
              : "bg-gradient-to-br from-card to-card/80 border border-border/50 shadow-lg hover:shadow-xl backdrop-blur-xl"
          }
          ${isPulsing && !isActive ? "animate-pulse-fast" : ""}
        `}
        style={{ willChange: "transform, background" }}
        whileHover={{ rotate: 12 }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated Background Effect */}
        <div
          className={`
            absolute inset-0 rounded-2xl bg-gradient-to-br opacity-20 transition-all duration-500
            ${isActive ? service.gradient : "from-transparent to-transparent"}
          `}
        />

        <motion.div
          className={`cursor-hover text-xl sm:text-2xl relative z-10
    ${
      isActive
        ? "text-white scale-110"
        : "text-accent group-hover:text-accent/80"
    }
  `}
          animate={{ scale: isActive ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {service.icon}
        </motion.div>

        {/* Active State Effects */}
        {isActive && (
          <>
            <motion.div
              className="absolute inset-0 rounded-2xl bg-accent opacity-20"
              initial={{ scale: 0 }}
              animate={{ scale: 1.2 }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
            ></motion.div>
            <motion.div
              className="absolute -inset-2 sm:-inset-3 rounded-3xl border-2 border-accent/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            ></motion.div>
          </>
        )}

        {/* Hover Effect */}
        {isHovered && !isActive && (
          <motion.div
            className="absolute -inset-1 rounded-2xl bg-accent/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          ></motion.div>
        )}
      </motion.div>

      {/* Enhanced Tooltip */}
      <AnimatePresence>
        {(isHovered || isActive) && (
          <motion.div
            className={`
            absolute bottom-full mb-3 left-1/2 -translate-x-1/2
            px-3 py-2 bg-foreground text-background rounded-lg text-sm font-bold
            whitespace-nowrap backdrop-blur-xl border border-border/20 cursor-hover
          `}
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            style={{ willChange: "opacity, transform" }}
          >
            {service.title}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};
