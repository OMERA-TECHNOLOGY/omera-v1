"use client";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  ArrowRight,
  Users,
  Zap,
  Star,
  TrendingUp,
  Eye,
  Code,
  Github,
  Globe,
  Rocket,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  gradient: string;
  darkGradient: string;
  stats: {
    users?: string;
    performance?: string;
    rating?: string;
    growth?: string;
  };
  image: string;
  results: string[];
  liveUrl: string;
  githubUrl: string;
  projectType: "landing-page" | "management-system";
}

const projects: Project[] = [
  {
    title: "Omera Hotel",
    description:
      "Comprehensive hotel management system with real-time booking, inventory management, payment integration, and multi-language support.",
    category: "Hospitality Management System",
    technologies: ["Next.js", "TypeScript", "Prisma", "Stripe", "PostgreSQL"],
    gradient: "from-amber-500 via-orange-600 to-red-700",
    darkGradient: "from-amber-600 via-orange-700 to-red-800",
    stats: {
      users: "50+",
      performance: "99.8%",
      rating: "4.8",
      growth: "180%",
    },
    image: "/images/omera-hotel.jpg",
    results: [
      "Automated 80% of manual operations",
      "Increased booking efficiency by 65%",
      "Reduced administrative costs by 45%",
    ],
    liveUrl: "https://omera-hotel.vercel.app",
    githubUrl: "https://github.com/yourusername/omera-hotel",
    projectType: "management-system",
  },
  {
    title: "Addis Hotel",
    description:
      "Elegant landing page showcasing premium hospitality services with seamless booking integration and stunning visuals.",
    category: "Hospitality Landing Page",
    technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind"],
    gradient: "from-blue-500 via-indigo-600 to-purple-700",
    darkGradient: "from-blue-600 via-indigo-700 to-purple-800",
    stats: {
      users: "25K+",
      performance: "99.9%",
      rating: "4.9",
      growth: "150%",
    },
    image: "/images/addis-hotel.jpg",
    results: [
      "Increased direct bookings by 75%",
      "Improved page load speed by 60%",
      "Enhanced mobile conversion rate by 45%",
    ],
    liveUrl: "https://addis.omera.tech",
    githubUrl: "https://github.com/yourusername/addis-hotel",
    projectType: "landing-page",
  },
  {
    title: "Enatcare Health Institute",
    description:
      "Modern healthcare landing page featuring service showcases, doctor profiles, and appointment scheduling.",
    category: "Healthcare Landing Page",
    technologies: ["React", "TypeScript", "GSAP", "CSS3"],
    gradient: "from-green-500 via-emerald-600 to-teal-700",
    darkGradient: "from-green-600 via-emerald-700 to-teal-800",
    stats: {
      users: "15K+",
      performance: "99.8%",
      rating: "4.7",
      growth: "200%",
    },
    image: "/images/enatcare-health.jpg",
    results: [
      "Increased appointment requests by 90%",
      "Improved user engagement by 55%",
      "Enhanced mobile experience by 70%",
    ],
    liveUrl: "https://enatcare.omera.tech",
    githubUrl: "https://github.com/yourusername/enatcare-health-institute",
    projectType: "landing-page",
  },
  {
    title: "Muse Clinic",
    description:
      "Aesthetic medical clinic landing page with elegant design, service showcases, and patient testimonials.",
    category: "Medical Landing Page",
    technologies: ["Next.js", "Tailwind", "Three.js", "Framer Motion"],
    gradient: "from-pink-500 via-rose-600 to-fuchsia-700",
    darkGradient: "from-pink-600 via-rose-700 to-fuchsia-800",
    stats: {
      users: "12K+",
      performance: "99.9%",
      rating: "4.8",
      growth: "175%",
    },
    image: "/images/muse-clinic.jpg",
    results: [
      "Boosted consultation requests by 85%",
      "Improved brand perception by 60%",
      "Increased social media referrals by 40%",
    ],
    liveUrl: "https://muse.omera.tech",
    githubUrl: "https://github.com/yourusername/muse-clinic",
    projectType: "landing-page",
  },
  {
    title: "Kereyu Hotel",
    description:
      "Luxury hotel landing page featuring premium accommodations, immersive gallery, and seamless reservation system.",
    category: "Luxury Hospitality Landing",
    technologies: ["Next.js", "TypeScript", "Swiper.js", "Tailwind"],
    gradient: "from-cyan-500 via-blue-600 to-indigo-700",
    darkGradient: "from-cyan-600 via-blue-700 to-indigo-800",
    stats: {
      users: "18K+",
      performance: "99.7%",
      rating: "4.9",
      growth: "160%",
    },
    image: "/images/kereyu-hotel.jpg",
    results: [
      "Increased luxury bookings by 95%",
      "Enhanced user experience by 65%",
      "Improved SEO ranking by 50%",
    ],
    liveUrl: "https://kereyu.omera.tech",
    githubUrl: "https://github.com/yourusername/kereyu-hotel",
    projectType: "landing-page",
  },
  {
    title: "Ayu Hotel",
    description:
      "Modern boutique hotel website with elegant design, seamless booking experience, and integrated customer review system.",
    category: "Boutique Hotel Landing",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    gradient: "from-purple-500 via-pink-600 to-rose-700",
    darkGradient: "from-purple-600 via-pink-700 to-rose-800",
    stats: {
      users: "8K+",
      performance: "99.7%",
      rating: "4.7",
      growth: "120%",
    },
    image: "/images/ayu-hotel.jpg",
    results: [
      "Increased online bookings by 60%",
      "Improved user engagement by 40%",
      "Enhanced brand visibility by 55%",
    ],
    liveUrl: "https://ayuhotel.omera.tech",
    githubUrl: "https://github.com/yourusername/ayu-hotel",
    projectType: "landing-page",
  },
];

// SIMPLIFIED ANIMATION VARIANTS - No conflicts
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

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

const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 30,
      stiffness: 100,
    },
  },
};

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 150,
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

// Project Card Component
const ProjectCard = ({
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

// Stats Section Component
const StatsSection = () => {
  return (
    <motion.div variants={fadeInUp} className="relative">
      <div className="relative bg-gradient-to-br from-background/70 to-background/30 dark:from-background/80 dark:to-background/50 backdrop-blur-2xl border border-border/50 dark:border-border/30 rounded-3xl p-8 lg:p-12 overflow-hidden">
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

// CTA Section Component
const CTASection = () => {
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
