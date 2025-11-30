"use client";

import { motion } from "framer-motion";

export const AceternityIcon = ({ order }: { order: string }) => {
  const lines = order.split("\n");
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px]">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
        bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-slate-950 px-6 py-3 text-purple 
        backdrop-blur-3xl font-bold text-xl text-center text-white flex-col"
        >
          {lines.map((line, i) => (
            <span key={i}>{line}</span>
          ))}
        </span>
      </button>
    </motion.div>
  );
};
