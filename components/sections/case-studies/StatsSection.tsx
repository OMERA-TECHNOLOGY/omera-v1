"use client";

import { motion } from "framer-motion";
import { Zap, TrendingUp, Star, Users } from "lucide-react";
import { fadeInUp, itemAnimation } from "./constants";

export const StatsSection = () => {
  return (
    <motion.div variants={fadeInUp} className="relative">
      <div className="relative bg-linear-to-br from-background/70 to-background/30 dark:from-background/80 dark:to-background/50 backdrop-blur-2xl border border-border/50 dark:border-border/30 rounded-3xl p-8 lg:p-12 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center relative z-10">
          {[
            {
              value: "99.9%",
              label: "Uptime Guarantee",
              desc: "Zero downtime incidents",
              icon: Zap,
            },
            {
              value: "<1.5s",
              label: "Load Time",
              desc: "Global CDN optimized",
              icon: TrendingUp,
            },
            {
              value: "95+",
              label: "Lighthouse Score",
              desc: "Performance excellence",
              icon: Star,
            },
            {
              value: "24/7",
              label: "Elite Support",
              desc: "Enterprise-grade SLA",
              icon: Users,
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemAnimation}
              className="group p-6 rounded-2xl bg-background/60 dark:bg-background/80 border border-border/30 dark:border-border/50 hover:border-accent/50 dark:hover:border-accent/60 transition-all duration-300"
            >
              <stat.icon className="w-8 h-8 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2 group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-foreground/80 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground font-light">
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
