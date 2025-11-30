"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Service } from "./constants";
import React from "react";

export const FloatingServiceIcon = React.memo(
  ({
    service,
    isActive,
    onClick,
    index = 0,
  }: {
    service: Service;
    isActive: boolean;
    onClick: () => void;
    index?: number;
  }) => {
    const [isHovered, setIsHovered] = useState(false);

    // We'll rely on CSS for orbit and pulsing. Use index to stagger delays.
    const orbitDuration = Math.max(
      8,
      Math.min(30, Math.round(1 / Math.max(0.00001, service.orbitSpeed) / 1000))
    );

    return (
      <motion.button
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          absolute -translate-x-1/2 -translate-y-1/2 transform-gpu transition-all duration-700 cursor-pointer group
          ${isActive ? "z-50" : "z-30"}
        `}
        style={{
          top: `calc(${service.position.top})`,
          left: `calc(${service.position.left})`,
          willChange: "transform, filter",
          filter: isActive
            ? `drop-shadow(0 0 20px ${service.pulseColor})`
            : "none",
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: isActive ? 1.5 : isHovered ? 1.25 : 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          mass: 0.5,
          duration: isActive ? 0.7 : 0.3,
        }}
        whileTap={{ scale: 1.4 }}
      >
        {/* Orbit wrapper uses CSS rotation to orbit the inner item */}
        <div
          className="relative"
          style={{
            width: `${service.orbitRadius * 2}px`,
            height: `${service.orbitRadius * 2}px`,
          }}
        >
          <div
            className="orbit-rotator"
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              display: "block",
              animationDuration: `${orbitDuration}s`,
              animationDelay: `${index * 0.12}s`,
            }}
          >
            <div
              className="orbit-item"
              style={{
                position: "absolute",
                left: "50%",
                top: 0,
                transform: "translateX(-50%)",
              }}
            >
              <div
                className={`
                  relative w-14 h-14 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center transform-gpu
                  ${
                    isActive
                      ? "bg-gradient-to-br from-accent to-accent/70 shadow-2xl shadow-accent/50"
                      : "bg-gradient-to-br from-card to-card/80 border border-border/50 shadow-lg hover:shadow-xl backdrop-blur-xl"
                  }
                  ${!isActive ? "animate-pulse-subtle" : ""}
                `}
                style={{ willChange: "transform, background" }}
              >
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br opacity-20 transition-all duration-500 ${
                    isActive
                      ? service.gradient
                      : "from-transparent to-transparent"
                  }`}
                />

                <div
                  className={`cursor-hover text-xl sm:text-2xl relative z-10 ${
                    isActive ? "text-white scale-110" : "text-accent"
                  }`}
                >
                  {service.icon}
                </div>

                {/* Active State Effects */}
                {isActive && (
                  <>
                    <div className="absolute inset-0 rounded-2xl bg-accent opacity-20" />
                    <div className="absolute -inset-2 sm:-inset-3 rounded-3xl border-2 border-accent/30" />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Tooltip */}
        <AnimatePresence>
          {(isHovered || isActive) && (
            <motion.div
              className={`
                absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-3 py-2 bg-foreground text-background rounded-lg text-sm font-bold
                whitespace-nowrap backdrop-blur-xl border border-border/20 cursor-hover
              `}
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              transition={{ duration: 0.18 }}
              style={{ willChange: "opacity, transform" }}
            >
              {service.title}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    );
  },
  (prev, next) =>
    prev.isActive === next.isActive && prev.service.id === next.service.id
);
