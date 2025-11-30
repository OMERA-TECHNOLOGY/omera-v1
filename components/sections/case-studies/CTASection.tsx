"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { fadeInUp } from "./constants";

export const CTASection = () => {
  return (
    <motion.div variants={fadeInUp} className="text-center">
      <div className="bg-gradient-to-br from-accent/5 to-purple-500/5 dark:from-accent/10 dark:to-purple-500/10 border border-border/50 dark:border-border/30 rounded-3xl p-8 lg:p-12 backdrop-blur-md">
        <h3 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
          Ready to launch your next big idea?
        </h3>
        <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-light">
          Let's craft a digital masterpiece that not only performs but also{" "}
          <span className="text-accent font-medium">
            leaves a lasting impression.
          </span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-primary font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border hover:border-accent/40 text-foreground hover:text-accent px-8 py-4 rounded-full backdrop-blur-sm text-lg transition-all duration-300"
          >
            Explore All Projects
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
