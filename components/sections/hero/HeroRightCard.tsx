"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Cloud, Database, Code } from "lucide-react";
import {
  containerVariants,
  cardVariants,
  itemVariants,
  floatingVariants,
  realTimeItems,
} from "./constants";

export const HeroRightCard = () => {
  return (
    <motion.div
      className="relative w-full max-w-md mx-auto sm:max-w-lg lg:max-w-none"
      variants={cardVariants}
    >
      <motion.div
        className="relative bg-gradient-to-br from-card to-card/80 border border-border/50 rounded-3xl p-8 shadow-2xl backdrop-blur-sm"
        whileHover={{
          y: -5,
          transition: { type: "spring", stiffness: 300, damping: 20 },
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-purple-500/5 rounded-3xl blur-xl -z-10" />

        {/* Window Controls */}
        <motion.div
          className="flex items-center justify-between mb-8"
          variants={containerVariants}
        >
          <div className="flex gap-2">
            {["bg-red-400/80", "bg-yellow-400/80", "bg-green-400/80"].map(
              (color, index) => (
                <motion.div
                  key={color}
                  className={`w-3 h-3 rounded-full ${color}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              )
            )}
          </div>
          <div className="flex gap-1 bg-muted/50 rounded-lg p-1">
            {["Dashboard", "Analytics", "Settings"].map((tab) => (
              <motion.button
                key={tab}
                className="px-3 py-1 text-xs rounded-md transition-all duration-200 hover:bg-background/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 gap-4 mb-6"
          variants={containerVariants}
        >
          {[
            {
              icon: Zap,
              color: "text-green-400",
              value: "99.9%",
              bg: "bg-green-400",
              width: "w-11/12",
              label: "Performance",
            },
            {
              icon: Shield,
              color: "text-blue-400",
              value: "100%",
              bg: "bg-blue-400",
              width: "w-full",
              label: "Security",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-background/50 rounded-2xl p-4 border border-border/30"
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                y: -2,
                transition: { type: "spring", stiffness: 400, damping: 17 },
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <stat.icon className={`w-4 h-4 ${stat.color}`} />
                <span className="text-xs font-medium text-muted-foreground">
                  {stat.label}
                </span>
              </div>
              <div className="text-2xl font-bold text-foreground">
                {stat.value}
              </div>
              <div className="w-full bg-muted rounded-full h-1 mt-2">
                <motion.div
                  className={`${stat.bg} h-1 rounded-full ${stat.width}`}
                  initial={{ width: 0 }}
                  animate={{ width: stat.width }}
                  transition={{
                    delay: 1 + index * 0.2,
                    duration: 1,
                    ease: "easeOut",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Real-time Activity */}
        <motion.div
          className="bg-background/50 rounded-2xl p-4 border border-border/30 mb-6"
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-foreground">
              Real-time Activity
            </span>
            <motion.div
              className="flex gap-1"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span className="text-xs text-muted-foreground">Live</span>
            </motion.div>
          </div>

          <div className="space-y-3">
            {realTimeItems.map((item, index) => (
              <motion.div
                key={item.label}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 + index * 0.1 }}
              >
                <span className="text-xs text-muted-foreground w-20">
                  {item.label}
                </span>
                <div className="flex-1 bg-muted rounded-full h-2">
                  <motion.div
                    className={`${item.color} h-2 rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: `${item.value}%` }}
                    transition={{
                      delay: 1.8 + index * 0.1,
                      duration: 1,
                      ease: "easeOut",
                    }}
                  />
                </div>
                <span className="text-xs font-medium text-foreground w-8">
                  {item.value}%
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Code Snippet */}
        <motion.div
          className="bg-background rounded-xl p-4 border border-border"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Code className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-foreground">
              deployment.yml
            </span>
          </div>
          <div className="space-y-1 text-xs font-mono">
            {[
              { num: "1", content: "deployment:", color: "text-blue-400" },
              {
                num: "2",
                content: "- name: production",
                color: "text-green-400",
              },
              {
                num: "3",
                content: "status: active",
                color: "text-green-400",
              },
              {
                num: "4",
                content: "version: 2.4.1",
                color: "text-green-400",
              },
            ].map((line, index) => (
              <motion.div
                key={line.num}
                className="flex"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 + index * 0.1 }}
              >
                <span className="text-purple-400 w-6">{line.num}</span>
                <span className={`${line.color} ml-4`}>{line.content}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Live Badge */}
        <motion.div
          className="absolute -top-3 -right-3 bg-gradient-to-r from-accent to-purple-500 text-primary text-xs font-bold px-3 py-1 rounded-full shadow-lg"
          variants={floatingVariants}
          animate="animate"
        >
          LIVE
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-4 shadow-xl w-32"
        variants={floatingVariants}
        animate="animate"
        whileHover={{ scale: 1.05 }}
      >
        <Database className="w-5 h-5 text-accent mb-2" />
        <div className="text-xs text-muted-foreground">Database</div>
        <div className="text-sm font-semibold text-foreground">
          PostgreSQL
        </div>
      </motion.div>

      <motion.div
        className="absolute -top-6 -right-6 bg-background border border-border rounded-2xl p-4 shadow-xl w-32"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        <Cloud className="w-5 h-5 text-accent mb-2" />
        <div className="text-xs text-muted-foreground">Cloud</div>
        <div className="text-sm font-semibold text-foreground">AWS</div>
      </motion.div>

      {/* Animated Background Rings */}
      <motion.div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80">
        <motion.div
          className="absolute inset-0 border-2 border-accent/20 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute inset-4 border-2 border-accent/15 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.05, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </motion.div>
    </motion.div>
  );
};
