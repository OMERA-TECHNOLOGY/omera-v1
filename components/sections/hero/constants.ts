import { Code, Globe, Smartphone, Cloud } from "lucide-react";

export const rotatingWords = ["scale", "optimize", "transform", "secure"];
export const techStack = ["React", "Node.js", "AWS", "Python", "AI/ML"];

export const services = [
  { icon: Code, label: "Development" },
  { icon: Globe, label: "Web" },
  { icon: Smartphone, label: "Mobile" },
  { icon: Cloud, label: "Cloud" },
];

export const realTimeItems = [
  { label: "API Requests", value: 75, color: "bg-accent" },
  { label: "Database", value: 60, color: "bg-blue-400" },
  { label: "Cache", value: 45, color: "bg-green-400" },
  { label: "Storage", value: 30, color: "bg-purple-400" },
];

// Animation variants
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export const itemVariants = {
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

export const cardVariants = {
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

export const floatingVariants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const pulseVariants = {
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

export const wordVariants = {
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
