"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

import { HeroBackground } from "./hero/HeroBackground";
import { HeroRightCard } from "./hero/HeroRightCard";
import {
  rotatingWords,
  techStack,
  services,
  containerVariants,
  itemVariants,
  wordVariants,
} from "./hero/constants";

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
      <HeroBackground />

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
                className="bg-linear-to-r from-accent to-accent/80 bg-clip-text text-transparent"
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
        <HeroRightCard />
      </div>
    </motion.section>
  );
};
