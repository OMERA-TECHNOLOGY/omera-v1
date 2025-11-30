"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Rocket,
  Sparkles,
  Globe,
  Github,
  Users,
  Zap,
  Code,
  Star,
  Eye,
  ArrowRight,
} from "lucide-react";
import { Project } from "./data";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 100,
      duration: 0.8,
    },
  },
};

// SIMPLIFIED GlowCard without conflicting mouse tracking
const GlowCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      className={`relative rounded-3xl overflow-hidden ${className}`}
      whileHover={{
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
    >
      <div className="relative z-10 h-full rounded-3xl bg-card/80 dark:bg-card/90 backdrop-blur-xl border border-border/50 dark:border-border/30 overflow-hidden flex flex-col group">
        {/* Static glow effect - no mouse tracking */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-accent/5 rounded-3xl blur-xl" />
        </div>
        {children}
      </div>
    </motion.div>
  );
};

export const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      variants={cardVariants}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <GlowCard className="h-full">
        {/* Project Type Badge */}
        <div className="absolute top-4 left-4 z-20">
          <Badge
            className={`${
              project.projectType === "management-system"
                ? "bg-blue-500/40 text-blue-800 dark:text-blue-100 border-blue-500/50 dark:border-blue-400/30"
                : "bg-green-500/40 text-green-800 dark:text-green-100 border-green-500/50 dark:border-green-400/40"
            } backdrop-blur-md font-medium shadow-lg border text-xs sm:text-sm flex items-center gap-1`}
          >
            {project.projectType === "management-system" ? (
              <Rocket className="w-3 h-3" />
            ) : (
              <Sparkles className="w-3 h-3" />
            )}
            {project.projectType === "management-system"
              ? "System"
              : "Landing Page"}
          </Badge>
        </div>

        {/* Image Section */}
        <div className="relative h-48 overflow-hidden rounded-t-3xl">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.gradient} dark:${project.darkGradient} opacity-60 transition-opacity duration-500`}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          <div className="relative w-full h-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover opacity-70 transition-opacity duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index < 3}
            />
          </div>

          {/* Action Buttons */}
          <motion.div
            className="absolute top-4 right-4 flex gap-2 z-20"
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : -10,
            }}
            transition={{ duration: 0.3 }}
          >
            <Button
              size="sm"
              className="h-8 w-8 p-0 bg-white/20 hover:bg-white/30 dark:bg-black/20 dark:hover:bg-black/30 text-white border-0 backdrop-blur-md shadow-lg transition-all duration-300"
              asChild
            >
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="w-4 h-4" />
              </a>
            </Button>
            <Button
              size="sm"
              className="h-8 w-8 p-0 bg-white/20 hover:bg-white/30 dark:bg-black/20 dark:hover:bg-black/30 text-white border-0 backdrop-blur-md shadow-lg transition-all duration-300"
              asChild
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="absolute bottom-4 left-4 right-4 flex justify-between items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 10,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-1 text-white/90 text-sm backdrop-blur-md bg-black/40 dark:bg-white/20 px-3 py-1.5 rounded-full border border-white/10 dark:border-white/20 font-semibold">
              <Users className="w-3 h-3" />
              <span>{project.stats.users}</span>
            </div>
            <div className="flex items-center gap-1 text-white/90 text-sm backdrop-blur-md bg-black/40 dark:bg-white/20 px-3 py-1.5 rounded-full border border-white/10 dark:border-white/20 font-semibold">
              <Zap className="w-3 h-3" />
              <span>{project.stats.performance}</span>
            </div>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex-1">
            <motion.h3
              className="text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300 line-clamp-2"
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {project.title}
            </motion.h3>

            <p className="text-muted-foreground dark:text-muted-foreground/90 mb-4 leading-relaxed text-sm font-light">
              {project.description}
            </p>

            {/* Results */}
            <div className="mb-4 space-y-2">
              {project.results.slice(0, 2).map((result, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 text-xs text-muted-foreground dark:text-muted-foreground/80 group-hover:text-foreground/80 transition-colors duration-300"
                >
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1 flex-shrink-0" />
                  <span className="leading-tight">{result}</span>
                </div>
              ))}
            </div>

            {/* Technologies */}
            <div className="mb-4">
              <p className="text-sm font-semibold mb-2 text-accent dark:text-accent/90 flex items-center gap-2">
                <Code className="w-4 h-4" />
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-accent/10 text-foreground/80 border-accent/20 dark:bg-accent/20 dark:text-foreground/70 dark:border-accent/30 text-xs font-medium transition-colors px-2.5 py-1 rounded-full"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-border/50 dark:border-border/30">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(Number(project.stats.rating))
                        ? "text-yellow-400 fill-yellow-400 dark:text-yellow-300 dark:fill-yellow-300"
                        : "text-muted-foreground/30 dark:text-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-foreground/70 dark:text-foreground/60">
                {project.stats.rating}
              </span>
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="group/btn text-accent hover:text-accent hover:bg-accent/10 dark:text-accent/90 dark:hover:bg-accent/20 text-sm h-9 px-3 transition-all duration-300"
              asChild
            >
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Eye className="w-4 h-4 mr-2" />
                View Live
                <ArrowRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </GlowCard>
      {/* Growth Badge */}
      <motion.div
        className="absolute -top-3 -right-3 z-20"
        animate={{
          rotate: isHovered ? [0, -5, 5, 0] : 0,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.5 }}
      >
        <Badge className="bg-gradient-to-r from-accent to-accent/70 text-primary border-0 shadow-xl font-bold text-sm px-3 py-1.5 rounded-full">
          +{project.stats.growth}
        </Badge>
      </motion.div>
    </motion.div>
  );
};
