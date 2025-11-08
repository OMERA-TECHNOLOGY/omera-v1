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
} from "lucide-react";
import { motion } from "framer-motion";

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
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const CaseStudies = () => {
  return (
    <section
      id="case-studies"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background"
    >
      {/* Fixed Background - removed animations causing flicker */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 dark:bg-blue-400/5 rounded-full blur-3xl" />
        <div className="absolute top-40 right-4 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/10 dark:bg-purple-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 sm:left-1/3 w-48 sm:w-80 h-48 sm:h-80 bg-emerald-500/10 dark:bg-emerald-400/5 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <Badge
            variant="secondary"
            className="mb-6 px-4 py-2 bg-accent/10 text-accent border-accent/20 hover:bg-accent/15 transition-colors duration-300 dark:bg-accent/20 dark:border-accent/30"
          >
            <TrendingUp className="w-4 h-4 mr-2" />
            Portfolio Showcase
          </Badge>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent dark:from-foreground dark:to-foreground/80">
              Featured
            </span>
            <span className="block bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent dark:from-accent dark:to-accent/80">
              Projects
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light dark:text-muted-foreground/90">
            Real-world projects showcasing our expertise in building
            <span className="text-accent font-medium dark:text-accent/90">
              {" "}
              high-performance applications{" "}
            </span>
            and stunning landing pages that deliver measurable results.
          </p>
        </motion.div>

        {/* Projects Grid - Fixed responsiveness */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-20"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="group relative"
            >
              <Card className="relative bg-card/80 dark:bg-card/90 backdrop-blur-xl border border-border/50 dark:border-border/30 rounded-2xl lg:rounded-3xl cursor-pointer hover:shadow-2xl hover:shadow-accent/5 dark:hover:shadow-accent/10 transition-all duration-500 h-full flex flex-col overflow-visible group-hover:scale-[1.02]">
                {/* Project Type Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <Badge
                    className={`${
                      project.projectType === "management-system"
                        ? "bg-blue-500/40 text-blue-800 dark:text-blue-100 border-blue-500/50 dark:border-blue-400/30"
                        : "bg-green-500/40 text-green-800 dark:text-green-100 border-green-500/50 dark:border-green-400/40"
                    } backdrop-blur-md font-medium shadow-lg border text-xs sm:text-sm`}
                  >
                    {project.projectType === "management-system"
                      ? "Management System"
                      : "Landing Page"}
                  </Badge>
                </div>

                {/* Image Section */}
                <div className="relative h-40 sm:h-48 overflow-hidden rounded-t-2xl lg:rounded-t-3xl">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} dark:${project.darkGradient} opacity-50`}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />

                  {/* Action Buttons */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex gap-1 sm:gap-2 z-20">
                    <Button
                      size="sm"
                      className="h-7 w-7 sm:h-8 sm:w-8 p-0 bg-white/20 hover:bg-white/30 dark:bg-black/20 dark:hover:bg-black/30 text-white border-0 backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-110"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="h-7 w-7 sm:h-8 sm:w-8 p-0 bg-white/20 hover:bg-white/30 dark:bg-black/20 dark:hover:bg-black/30 text-white border-0 backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-110"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                      </a>
                    </Button>
                  </div>

                  {/* Stats */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-6 right-3 sm:right-6 flex justify-between items-center">
                    <div className="flex items-center gap-1 text-white/90 text-xs sm:text-sm backdrop-blur-md bg-black/30 dark:bg-white/20 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-white/10 dark:border-white/20">
                      <Users className="w-3 h-3" />
                      <span className="font-medium">{project.stats.users}</span>
                    </div>
                    <div className="flex items-center gap-1 text-white/90 text-xs sm:text-sm backdrop-blur-md bg-black/30 dark:bg-white/20 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-white/10 dark:border-white/20">
                      <Zap className="w-3 h-3" />
                      <span className="font-medium">
                        {project.stats.performance}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-accent transition-colors duration-300 line-clamp-2 dark:text-foreground">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground dark:text-muted-foreground/90 mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm font-light">
                      {project.description}
                    </p>

                    {/* Results */}
                    <div className="mb-3 sm:mb-4 space-y-1 sm:space-y-2">
                      {project.results.slice(0, 2).map((result, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 text-xs text-muted-foreground dark:text-muted-foreground/80"
                        >
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1 flex-shrink-0" />
                          <span className="leading-tight">{result}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="mb-3 sm:mb-4">
                      <p className="text-xs sm:text-sm font-semibold mb-1 sm:mb-2 text-accent dark:text-accent/90 flex items-center gap-2">
                        <Code className="w-3 h-3 sm:w-4 sm:h-4" />
                        Tech Stack
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-accent/5 text-foreground/80 border-accent/10 dark:bg-accent/10 dark:text-foreground/70 dark:border-accent/20 text-xs font-medium hover:bg-accent/10 dark:hover:bg-accent/20 transition-colors px-2 py-0.5"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-border/50 dark:border-border/30">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 sm:w-4 sm:h-4 ${
                              i < Math.floor(Number(project.stats.rating))
                                ? "text-yellow-400 fill-yellow-400 dark:text-yellow-300 dark:fill-yellow-300"
                                : "text-muted-foreground/30 dark:text-muted-foreground/50"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-foreground/70 dark:text-foreground/60">
                        {project.stats.rating}
                      </span>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="group/btn text-accent hover:text-accent hover:bg-accent/10 dark:text-accent/90 dark:hover:bg-accent/20 text-xs sm:text-sm h-8 sm:h-9 px-2 sm:px-3"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        View Live
                        <ArrowRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Growth Badge - Fixed positioning */}
                <div className="absolute -top-2 -right-2 z-20">
                  <Badge className="bg-gradient-to-r from-accent to-accent/70 text-primary border-0 shadow-lg font-bold text-xs sm:text-sm px-2 sm:px-3 py-1">
                    +{project.stats.growth}
                  </Badge>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl lg:rounded-3xl border-2 border-transparent group-hover:border-accent/20 dark:group-hover:border-accent/30 transition-all duration-500 pointer-events-none" />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative mb-16"
        >
          <div className="relative bg-gradient-to-br from-background/80 to-background/40 dark:from-background/90 dark:to-background/60 backdrop-blur-xl border border-border/50 dark:border-border/30 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.05),transparent_50%)]" />

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center relative z-10">
              {[
                {
                  value: "99.9%",
                  label: "Uptime Guarantee",
                  desc: "Zero downtime incidents",
                  icon: Zap,
                },
                {
                  value: "<2s",
                  label: "Load Time",
                  desc: "Global CDN optimized",
                  icon: TrendingUp,
                },
                {
                  value: "90+",
                  label: "Lighthouse Score",
                  desc: "Performance excellence",
                  icon: Star,
                },
                {
                  value: "24/7",
                  label: "Support",
                  desc: "Enterprise-grade SLA",
                  icon: Users,
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-background/50 dark:bg-background/70 border border-border/20 dark:border-border/40 hover:border-accent/30 dark:hover:border-accent/40 transition-all duration-300"
                >
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-accent mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 dark:text-accent/90" />
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-1 sm:mb-2 group-hover:scale-105 transition-transform duration-300 dark:text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-lg font-semibold text-foreground/80 mb-1 dark:text-foreground/70">
                    {stat.label}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-light dark:text-muted-foreground/80">
                    {stat.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-accent/5 to-purple-500/5 dark:from-accent/10 dark:to-purple-500/10 border border-border/50 dark:border-border/30 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 backdrop-blur-sm">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent dark:from-foreground dark:to-foreground/80">
              Ready to build something extraordinary?
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto font-light dark:text-muted-foreground/90">
              Let's transform your vision into a market-leading digital
              experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-primary font-semibold px-6 sm:px-8 py-4 sm:py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 dark:bg-accent dark:hover:bg-accent/80 text-sm sm:text-base"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:border-accent/30 text-foreground hover:text-accent px-6 sm:px-8 py-4 sm:py-6 rounded-xl backdrop-blur-sm dark:border-border/50 dark:hover:border-accent/40 dark:hover:text-accent/90 text-sm sm:text-base"
              >
                View All Projects
                <ExternalLink className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
