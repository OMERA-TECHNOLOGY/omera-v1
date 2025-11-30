"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Zap } from "lucide-react";
import { Service } from "./constants";

export const ServiceCard = ({
  service,
  isActive,
}: {
  service: Service;
  isActive: boolean;
}) => {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          className={`
            relative bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-2xl
            border border-border/30 rounded-3xl p-6 lg:p-8 overflow-hidden
            w-full max-w-2xl lg:max-w-4xl mx-auto
            shadow-2xl shadow-accent/20 h-auto mt-6
          `}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.5,
          }}
          style={{ willChange: "opacity, transform" }}
        >
          {/* Animated Background Gradient */}
          <div
            className={`
              absolute inset-0 bg-gradient-to-br opacity-[0.08] transition-all duration-1000
              ${service.gradient}
            `}
          />

          {/* Header with Enhanced Styling */}
          <div className="relative z-10 mb-6">
            <div className="flex items-center gap-4 mb-4">
              <motion.div
                className={`
                  w-12 h-12 lg:w-14 lg:h-14 rounded-2xl flex items-center justify-center
                  bg-gradient-to-br from-accent to-accent/70 shadow-lg flex-shrink-0
                `}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-white text-xl lg:text-2xl">
                  {service.icon}
                </div>
              </motion.div>
              <div className="flex-1 min-w-0 cursor-hover">
                <h3 className="cursor-hover text-xl lg:text-3xl font-black text-foreground mb-2 line-clamp-1 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  {service.title}
                </h3>

                <div className="flex gap-2 flex-wrap">
                  {service.tech.slice(0, 3).map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      <Badge
                        variant="secondary"
                        className="cursor-hover bg-accent/10 text-accent border-accent/20 text-xs font-bold px-2 py-1"
                      >
                        {tech.icon}
                        <span className="ml-1">{tech.name}</span>
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed text-base lg:text-lg font-light">
              {service.description}
            </p>
          </div>

          {/* Features with Enhanced Animation */}
          <div className="relative z-10 mb-6">
            <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Zap className="w-4 h-4 text-accent animate-pulse-fast" />
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Key Capabilities
              </span>
            </h4>
            <div className="grid gap-3">
              {service.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-xl bg-background/40 border border-border/20 hover:border-accent/30 transition-all duration-300 group hover:scale-[1.02] hover:shadow-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.08 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 mt-2 group-hover:scale-150 transition-transform duration-300 animate-pulse-small" />
                  <span className="text-foreground/80 group-hover:text-foreground transition-colors text-sm leading-relaxed font-medium">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats with Enhanced Design */}
          <div className="relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {service.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-3 rounded-xl bg-background/30 border border-border/20 hover:border-accent/20 transition-all duration-300 group hover:scale-105 hover:shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-xl lg:text-2xl font-black text-foreground mb-1 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Animated Border Effect */}
          <div className="absolute inset-0 rounded-3xl border-2 border-transparent hover:border-accent/20 transition-all duration-500 pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
