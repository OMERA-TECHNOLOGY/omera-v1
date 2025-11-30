"use client";

import { motion } from "framer-motion";
import { Service } from "./constants";

interface ZigzagButtonProps {
  service: Service;
  isActive: boolean;
  onClick: () => void;
}

export const ZigzagButton = ({ service, isActive, onClick }: ZigzagButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      aria-label={`Select ${service.title}`}
      className={`
        absolute transform cursor-pointer group
        ${
          isActive
            ? "bg-accent hover:bg-accent/90 text-primary shadow-2xl shadow-accent/30 z-50"
            : "bg-card/80 hover:bg-card text-foreground border border-border/50 backdrop-blur-xl z-30"
        }
        text-sm font-bold px-4 py-2.5 rounded-2xl hover:scale-105 whitespace-nowrap
        border-2 hover:border-accent/30
      `}
      style={{
        top: service.buttonPosition.top,
        left: service.buttonPosition.left,
        willChange: "transform, background-color, box-shadow",
      }}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: isActive ? 1.1 : 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex items-center gap-2 cursor-hover">
        <motion.div
          animate={{ rotate: isActive ? 360 : 0 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        >
          {service.icon}
        </motion.div>
        <span>{service.title}</span>
      </div>
    </motion.button>
  );
};
