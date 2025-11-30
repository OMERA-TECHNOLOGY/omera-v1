import {
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiPython,
  SiFastapi,
  SiMongodb,
  SiRedis,
  SiGooglecloud,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import {
  Palette,
  Server,
  Smartphone,
  Cloud,
  Brain,
} from "lucide-react";
import React from "react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  features: string[];
  tech: { icon: React.ReactNode; name: string }[];
  stats: { value: string; label: string }[];
  position: { top: string; left: string };
  buttonPosition: { top: string; left: string };
  orbitRadius: number;
  orbitSpeed: number;
  pulseColor: string;
}

export const SERVICES: Service[] = [
  {
    id: "frontend",
    title: "Frontend",
    description:
      "Pixel-perfect, performant user interfaces with immersive animations and flawless user experiences that captivate and convert.",
    icon: <Palette className="w-4 h-4" />,
    gradient: "from-purple-500 via-pink-600 to-rose-700",
    features: [
      "Interactive animations & micro-interactions",
      "Responsive design systems",
      "Performance optimization",
      "Progressive Web Apps",
    ],
    tech: [
      { icon: <SiReact className="text-cyan-400" />, name: "React" },
      { icon: <SiTypescript className="text-blue-600" />, name: "TypeScript" },
      { icon: <SiTailwindcss className="text-cyan-300" />, name: "Tailwind" },
      { icon: <SiFramer className="text-pink-500" />, name: "Framer" },
    ],
    stats: [
      { value: "<2s", label: "Load Time" },
      { value: "90+", label: "Lighthouse" },
      { value: "60%", label: "Faster" },
      { value: "100%", label: "Responsive" },
    ],
    position: { top: "20%", left: "10%" },
    buttonPosition: { top: "30%", left: "5%" },
    orbitRadius: 30,
    orbitSpeed: 0.00005,
    pulseColor: "rgba(168, 85, 247, 0.5)",
  },
  {
    id: "backend",
    title: "Backend",
    description:
      "Robust, scalable backend infrastructure engineered for performance, reliability, and seamless integration with modern technologies.",
    icon: <Server className="w-4 h-4" />,
    gradient: "from-blue-500 via-cyan-600 to-sky-700",
    features: [
      "Microservices architecture",
      "Real-time systems",
      "Database optimization",
      "API development",
    ],
    tech: [
      { icon: <SiNodedotjs className="text-green-500" />, name: "Node.js" },
      { icon: <SiPostgresql className="text-blue-400" />, name: "PostgreSQL" },
      { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
      { icon: <SiRedis className="text-red-500" />, name: "Redis" },
    ],
    stats: [
      { value: "10M+", label: "Requests/Day" },
      { value: "<100ms", label: "Response" },
      { value: "99.9%", label: "Uptime" },
      { value: "Zero", label: "Data Loss" },
    ],
    position: { top: "60%", left: "25%" },
    buttonPosition: { top: "70%", left: "20%" },
    orbitRadius: 40,
    orbitSpeed: 0.00004,
    pulseColor: "rgba(59, 130, 246, 0.5)",
  },
  {
    id: "mobile",
    title: "Mobile",
    description:
      "Native and cross-platform mobile applications that deliver exceptional performance and seamless user experiences across all devices.",
    icon: <Smartphone className="w-4 h-4" />,
    gradient: "from-green-500 via-emerald-600 to-teal-700",
    features: [
      "React Native development",
      "Native iOS & Android",
      "Mobile UI/UX design",
      "App store deployment",
    ],
    tech: [
      { icon: <SiReact className="text-cyan-400" />, name: "React Native" },
      { icon: <SiTypescript className="text-blue-600" />, name: "TypeScript" },
      { icon: <SiPython className="text-yellow-500" />, name: "Python" },
      { icon: <SiFastapi className="text-teal-500" />, name: "FastAPI" },
    ],
    stats: [
      { value: "4.8+", label: "App Store" },
      { value: "60%", label: "Faster Dev" },
      { value: "95%", label: "Code Share" },
      { value: "1M+", label: "Downloads" },
    ],
    position: { top: "30%", left: "85%" },
    buttonPosition: { top: "40%", left: "80%" },
    orbitRadius: 35,
    orbitSpeed: 0.00006,
    pulseColor: "rgba(16, 185, 129, 0.5)",
  },
  {
    id: "cloud",
    title: "Cloud",
    description:
      "Enterprise-grade cloud infrastructure, deployment pipelines, and monitoring systems that ensure reliability and scalability at any level.",
    icon: <Cloud className="w-4 h-4" />,
    gradient: "from-orange-500 via-red-600 to-amber-700",
    features: [
      "CI/CD pipeline automation",
      "Container orchestration",
      "Cloud architecture",
      "Monitoring & security",
    ],
    tech: [
      { icon: <FaAws className="text-orange-400" />, name: "AWS" },
      { icon: <SiDocker className="text-blue-400" />, name: "Docker" },
      { icon: <SiKubernetes className="text-blue-500" />, name: "Kubernetes" },
      {
        icon: <SiGooglecloud className="text-red-400" />,
        name: "Google Cloud",
      },
    ],
    stats: [
      { value: "Zero", label: "Downtime" },
      { value: "24/7", label: "Monitoring" },
      { value: "Auto", label: "Scaling" },
      { value: "99.95%", label: "SLA" },
    ],
    position: { top: "60%", left: "65%" },
    buttonPosition: { top: "70%", left: "60%" },
    orbitRadius: 45,
    orbitSpeed: 0.00003,
    pulseColor: "rgba(249, 115, 22, 0.5)",
  },
  {
    id: "ai",
    title: "AI/ML",
    description:
      "Intelligent solutions powered by cutting-edge artificial intelligence and machine learning algorithms that transform data into actionable insights.",
    icon: <Brain className="w-4 h-4" />,
    gradient: "from-indigo-500 via-purple-600 to-violet-700",
    features: [
      "Machine learning models",
      "Natural language processing",
      "Computer vision",
      "Predictive analytics",
    ],
    tech: [
      { icon: <SiPython className="text-yellow-500" />, name: "Python" },
      {
        icon: <div className="text-orange-500 text-xs font-bold">TF</div>,
        name: "TensorFlow",
      },
      {
        icon: <div className="text-red-500 text-xs font-bold">PT</div>,
        name: "PyTorch",
      },
      {
        icon: <div className="text-green-500 text-xs font-bold">CV</div>,
        name: "OpenCV",
      },
    ],
    stats: [
      { value: "95%", label: "Accuracy" },
      { value: "10x", label: "Efficiency" },
      { value: "Real", label: "Time" },
      { value: "Custom", label: "Models" },
    ],
    position: { top: "25%", left: "45%" },
    buttonPosition: { top: "35%", left: "40%" },
    orbitRadius: 50,
    orbitSpeed: 0.00002,
    pulseColor: "rgba(139, 92, 246, 0.5)",
  },
];

export const SERVICE_ORDER = ["frontend", "backend", "ai", "cloud", "mobile"];

export const BUTTON_WIDTH = 120;
export const BUTTON_HEIGHT = 40;
export const ICON_SIZE = 80;
