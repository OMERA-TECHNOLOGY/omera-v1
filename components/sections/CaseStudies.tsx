"use client";

import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

import { projects } from "./case-studies/data";
import { ProjectCard } from "./case-studies/ProjectCard";
import { StatsSection } from "./case-studies/StatsSection";
import { CTASection } from "./case-studies/CTASection";
import { containerVariants, fadeInUp } from "./case-studies/constants";

export const CaseStudies = () => {
  return (
    <section
      id="case-studies"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background"
    >
      {/* STATIC BACKGROUND - No conflicting animations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 dark:bg-blue-400/5 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 dark:bg-purple-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-emerald-500/10 dark:bg-emerald-400/5 rounded-full blur-3xl" />

        {/* Static Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-16 text-center"
        >
          <Badge
            variant="secondary"
            className="mb-6 px-4 py-2 bg-gradient-to-r from-accent/20 to-accent/10 text-accent border-accent/30 hover:from-accent/30 hover:to-accent/20 transition-all duration-300 text-sm font-semibold"
          >
            <TrendingUp className="w-4 h-4 mr-2" />
            Project Orbit
          </Badge>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              Our Previous
            </span>
            <span className="block bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
              Clients
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Dive into a curated collection of projects, each a testament to
            <span className="text-accent font-medium">innovative design</span>
            and robust engineering, delivering stellar results.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-20"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, margin: "-50px" }}
          className="relative mb-16"
        >
          <StatsSection />
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center"
        >
          <CTASection />
        </motion.div>
      </div>
    </section>
  );
};
