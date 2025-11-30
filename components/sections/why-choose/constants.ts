import {
  Target,
  Briefcase,
  Users,
  MessageSquare,
} from "lucide-react";

export const features = [
  {
    icon: Target,
    title: "End-to-End Ownership",
    description:
      "We handle everything from initial concept and design through development, testing, deployment, and ongoing support.",
  },
  {
    icon: Briefcase,
    title: "Enterprise Quality",
    description:
      "Production-ready code with comprehensive testing, documentation, and security best practices from day one.",
  },
  {
    icon: Users,
    title: "Business-Minded Developers",
    description:
      "We don't just write code – we understand your business goals and build solutions that drive real results.",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description:
      "Regular updates, clear timelines, and direct access to our team. You're always in the loop.",
  },
];

// Animation variants
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
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
