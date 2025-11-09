"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sparkles,
  Code,
  Globe,
  Smartphone,
  Cloud,
  Zap,
  Shield,
  Database,
} from "lucide-react";

const rotatingWords = ["scale", "optimize", "transform", "secure"];
const techStack = ["React", "Node.js", "AWS", "Python", "AI/ML"];

const services = [
  { icon: Code, label: "Development" },
  { icon: Globe, label: "Web" },
  { icon: Smartphone, label: "Mobile" },
  { icon: Cloud, label: "Cloud" },
];

const realTimeItems = [
  { label: "API Requests", value: 75, color: "bg-accent" },
  { label: "Database", value: 60, color: "bg-blue-400" },
  { label: "Cache", value: 45, color: "bg-green-400" },
  { label: "Storage", value: 30, color: "bg-purple-400" },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 30,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      delay: 0.5,
    },
  },
};

const floatingVariants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const pulseVariants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.5, 0.8, 0.5],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const wordVariants = {
  enter: {
    opacity: 0,
    y: 20,
    scale: 0.8,
  },
  center: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 1.2,
  },
};

export const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [techIndex, setTechIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
      setTechIndex((prev) => (prev + 1) % techStack.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const serviceComponents = useMemo(() => {
    return services.map((service, index) => (
      <motion.div
        key={service.label}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-accent/5 border border-accent/10 hover:bg-accent/10 hover:border-accent/20 transition-colors cursor-pointer"
        variants={itemVariants}
        whileHover={{
          scale: 1.05,
          y: -2,
          transition: { type: "spring", stiffness: 400, damping: 17 },
        }}
        whileTap={{ scale: 0.95 }}
      >
        <service.icon className="w-4 h-4 text-accent" />
        <span className="text-sm font-medium text-foreground">
          {service.label}
        </span>
      </motion.div>
    ));
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section
      className="relative min-h-screen flex items-center overflow-hidden bg-background pb-6"
      id="hero"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Background Elements */}
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

      <div className="relative max-w-7xl mx-auto w-full px-6 lg:px-8 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-screen">
        {/* Left Content */}
        <motion.div
          className="flex flex-col justify-center space-y-8 py-20"
          variants={containerVariants}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-10 border border-accent-20 w-fit"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">
              Enterprise Tech Solutions
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.div className="space-y-6" variants={containerVariants}>
            <motion.h1
              className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              variants={itemVariants}
            >
              <span className="text-foreground">Tech</span>
              <br />
              <motion.span
                className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent"
                variants={itemVariants}
              >
                Solutions
              </motion.span>
              <br />
              <div className="flex items-center gap-4">
                <span className="text-muted-foreground">That</span>
                <div className="text-changer h-12 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={rotatingWords[wordIndex]}
                      className="text-accent font-bold"
                      variants={wordVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      {rotatingWords[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground leading-relaxed"
              variants={itemVariants}
            >
              We build custom software solutions and scalable digital platforms
              that drive real business results.
            </motion.p>

            <motion.div
              className="flex items-center gap-3 text-lg text-muted-foreground"
              variants={itemVariants}
            >
              <span>Powered by</span>
              <div className="text-changer tech-changer h-6 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={techStack[techIndex]}
                    className="text-accent font-semibold"
                    variants={wordVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  >
                    {techStack[techIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>

          {/* Services */}
          <motion.div
            className="flex flex-wrap gap-4"
            variants={containerVariants}
          >
            {serviceComponents}
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="w-fit bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-6 rounded-xl group"
                onClick={() => scrollToSection("contact")}
              >
                Start Your Project
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Card */}
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
      </div>
    </motion.section>
  );
};
