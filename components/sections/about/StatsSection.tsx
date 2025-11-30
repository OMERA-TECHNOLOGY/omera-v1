"use client";

import { motion } from "framer-motion";
import { Rocket, Award, Users, Globe, Heart, Clock } from "lucide-react";

const stats = [
  {
    icon: <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />,
    value: "50+",
    label: "Projects",
    description: "Startups to Fortune 500",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" />,
    value: "8+",
    label: "Years",
    description: "Proven excellence",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
    value: "10M+",
    label: "Users",
    description: "Global user base",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />,
    value: "99.9%",
    label: "Uptime",
    description: "Enterprise reliability",
    gradient: "from-orange-500 to-red-600",
  },
  {
    icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6" />,
    value: "100%",
    label: "Satisfaction",
    description: "5-star rated",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />,
    value: "24/7",
    label: "Support",
    description: "Always available",
    gradient: "from-indigo-500 to-purple-600",
  },
];

export const StatsSection = () => {
  return (
    <div className="mb-20 sm:mb-28 lg:mb-36">
      <div className="text-center mb-12 sm:mb-16 lg:mb-20">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 lg:mb-8 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          By The Numbers
        </motion.h2>
        <motion.p
          className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl sm:max-w-2xl mx-auto font-light"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          Our track record speaks for itself
        </motion.p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-2xl border-2 border-border/30 rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 group hover:scale-105 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Animated Background */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
            />

            {/* Icon Container */}
            <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/20 flex items-center justify-center mb-3 sm:mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-500 mx-auto">
              <div className="text-accent">{stat.icon}</div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground mb-2 group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-base sm:text-lg lg:text-xl font-bold text-foreground/80 mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground font-light">
                {stat.description}
              </div>
            </div>

            {/* Hover Border Effect */}
            <div className="absolute inset-0 rounded-2xl lg:rounded-3xl border-2 border-transparent group-hover:border-accent/20 transition-all duration-500 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
