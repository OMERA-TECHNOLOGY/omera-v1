"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Target, Rocket, Users, ArrowRight, Eye, Award } from "lucide-react";

export const CTASection = () => {
  return (
    <div className="text-center relative">
      {/* Minimal Background Effects */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-2xl" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-2xl" />
      </div>

      <motion.div
        className="relative bg-gradient-to-br from-card/90 via-card/80 to-card/70 border border-border/20 rounded-2xl lg:rounded-3xl p-8 sm:p-12 lg:p-16 backdrop-blur-sm overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.7, type: "spring" }}
        whileHover={{ scale: 1.01 }}
      >
        {/* Simple Border Glow */}
        <div className="absolute inset-0 rounded-2xl lg:rounded-3xl border-2 border-transparent group-hover:border-accent/10 transition-all duration-500" />

        {/* Content Container */}
        <div className="relative z-20">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.7, duration: 0.4 }}
          >
            <div className="w-2 h-2 bg-accent rounded-full" />
            <span className="text-sm font-bold text-accent uppercase tracking-wider">
              Let's Create
            </span>
            <div className="w-2 h-2 bg-accent rounded-full" />
          </motion.div>

          {/* Main Heading */}
          <motion.h3
            className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.5 }}
          >
            <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Ready to Build
            </span>
            <br />
            <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
              Something Amazing?
            </span>
          </motion.h3>

          {/* Description */}
          <motion.p
            className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 0.5 }}
          >
            Your vision + our expertise ={" "}
            <span className="text-accent font-semibold">
              digital excellence
            </span>
            . Let's make it happen.
          </motion.p>

          {/* Optimized CTA Buttons Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {/* Primary CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="group relative bg-accent hover:bg-accent/90 text-primary font-bold px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-base h-auto min-h-[70px]"
              >
                <div className="flex flex-col items-center gap-1">
                  <div className="flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    <span className="font-bold">Start Project</span>
                    <Rocket className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-medium text-primary/80">
                    Free Consultation
                  </span>
                </div>
              </Button>
            </motion.div>

            {/* Secondary CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="group bg-background/80 hover:bg-background border border-border hover:border-accent/30 text-foreground hover:text-accent px-6 py-4 rounded-xl transition-all duration-300 hover:scale-105 text-base h-auto min-h-[70px] font-semibold"
              >
                <div className="flex flex-col items-center gap-1">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>Book Call</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground group-hover:text-accent/80">
                    30-min Session
                  </span>
                </div>
              </Button>
            </motion.div>

            {/* Tertiary CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="group bg-background/80 hover:bg-background border border-border hover:border-accent/30 text-foreground hover:text-accent px-6 py-4 rounded-xl transition-all duration-300 hover:scale-105 text-base h-auto min-h-[70px] font-semibold"
              >
                <div className="flex flex-col items-center gap-1">
                  <div className="flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    <span>View Work</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground group-hover:text-accent/80">
                    Our Portfolio
                  </span>
                </div>
              </Button>
            </motion.div>
          </div>

          {/* Simple Trust Indicators */}
          <motion.div
            className="mt-8 pt-6 border-t border-border/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.5 }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-5 h-5 bg-accent/20 rounded-full border border-accent/30" />
                  <div className="w-5 h-5 bg-accent/30 rounded-full border border-accent/40" />
                  <div className="w-5 h-5 bg-accent/40 rounded-full border border-accent/50" />
                </div>
                <span>50+ Companies</span>
              </div>

              <div className="hidden sm:block w-px h-4 bg-border" />

              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-accent" />
                <span>8+ Years</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Simple Corner Accents */}
        <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-accent/20" />
        <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-accent/20" />
        <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-accent/20" />
        <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-accent/20" />
      </motion.div>
    </div>
  );
};
