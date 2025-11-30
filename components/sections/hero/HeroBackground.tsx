"use client";

import { motion } from "framer-motion";
import { pulseVariants } from "./constants";

export const HeroBackground = () => {
  return (
    <div className="absolute inset-0">
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        variants={pulseVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        variants={pulseVariants}
        animate="animate"
        transition={{ delay: 2 }}
      />
    </div>
  );
};
