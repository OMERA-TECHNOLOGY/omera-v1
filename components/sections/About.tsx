"use client";

import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Rocket,
  Award,
  Clock,
  Heart,
  ArrowRight,
  Target,
  Users,
  Globe,
  Palette,
  Smartphone,
  Server,
  Eye,
  Brain,
  Cloud,
  Zap,
  Sparkles,
  Orbit,
} from "lucide-react";

// Tech Icons
import {
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiTypescript,
  SiTailwindcss,
  SiThreedotjs,
  SiFramer,
  SiNextdotjs,
  SiPython,
  SiFastapi,
  SiMongodb,
  SiRedis,
  SiGraphql,
  SiJest,
  SiGooglecloud,
  SiVercel,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

interface Service {
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

const FloatingServiceIcon = ({
  service,
  isActive,
  onClick,
  orbitProgress,
}: {
  service: Service;
  isActive: boolean;
  onClick: () => void;
  orbitProgress: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);

  // Calculate orbital position
  const angle = orbitProgress * 2 * Math.PI;
  const orbitX = Math.cos(angle) * service.orbitRadius;
  const orbitY = Math.sin(angle) * service.orbitRadius;

  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 600);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        absolute transform-gpu transition-all duration-1000 cursor-pointer group
        ${isActive ? "scale-150 z-50" : "hover:scale-110 z-30"}
        ${isHovered ? "scale-125" : ""}
      `}
      style={{
        top: `calc(${service.position.top})`,
        left: `calc(${service.position.left})`,
        transform: `translate(${orbitX}px, ${orbitY}px)`,
        willChange: "transform",
        filter: isActive
          ? `drop-shadow(0 0 20px ${service.pulseColor})`
          : "none",
      }}
    >
      {/* Orbital Trail */}
      <div
        className="absolute inset-0 rounded-full border-2 border-accent/20 animate-ping-slow"
        style={{
          width: `${service.orbitRadius * 2}px`,
          height: `${service.orbitRadius * 2}px`,
          top: `-${service.orbitRadius}px`,
          left: `-${service.orbitRadius}px`,
        }}
      />

      <div
        className={`
          relative w-14 h-14 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center
          transform-gpu transition-all duration-500 group-hover:rotate-12
          ${
            isActive
              ? "bg-gradient-to-br from-accent to-accent/70 scale-110 shadow-2xl shadow-accent/50"
              : "bg-gradient-to-br from-card to-card/80 border border-border/50 shadow-lg hover:shadow-xl backdrop-blur-xl"
          }
          ${isPulsing && !isActive ? "animate-pulse-fast" : ""}
        `}
        style={{ willChange: "transform, background" }}
      >
        {/* Animated Background Effect */}
        <div
          className={`
            absolute inset-0 rounded-2xl bg-gradient-to-br opacity-20 transition-all duration-500
            ${isActive ? service.gradient : "from-transparent to-transparent"}
          `}
        />

        <div
          className={`
            text-xl sm:text-2xl transition-all duration-500 relative z-10
            ${
              isActive
                ? "text-white scale-110"
                : "text-accent group-hover:text-accent/80"
            }
          `}
        >
          {service.icon}
        </div>

        {/* Active State Effects */}
        {isActive && (
          <>
            <div className="absolute inset-0 rounded-2xl bg-accent animate-ping opacity-20"></div>
            <div className="absolute -inset-2 sm:-inset-3 rounded-3xl border-2 border-accent/30 animate-pulse"></div>
            <div className="absolute -inset-3 sm:-inset-4 rounded-3xl border border-accent/20 animate-ping-slow"></div>
          </>
        )}

        {/* Hover Effect */}
        {isHovered && !isActive && (
          <div className="absolute -inset-1 rounded-2xl bg-accent/10 animate-pulse-fast"></div>
        )}
      </div>

      {/* Enhanced Tooltip */}
      <div
        className={`
          absolute bottom-full mb-3 left-1/2 -translate-x-1/2
          px-3 py-2 bg-foreground text-background rounded-lg text-sm font-bold
          whitespace-nowrap transition-all duration-300
          backdrop-blur-xl border border-border/20
          ${
            isHovered || isActive
              ? "opacity-100 scale-100"
              : "opacity-0 scale-90 pointer-events-none"
          }
        `}
        style={{ willChange: "opacity, transform" }}
      >
        {service.title}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground"></div>
      </div>
    </button>
  );
};

const ServiceCard = ({
  service,
  isActive,
}: {
  service: Service;
  isActive: boolean;
}) => {
  return (
    <Card
      className={`
        relative bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-2xl
        border border-border/30 rounded-3xl p-6 lg:p-8 overflow-hidden
        transition-all duration-700 w-full max-w-2xl lg:max-w-4xl mx-auto
        shadow-2xl hover:shadow-3xl
        ${
          isActive
            ? "opacity-100 scale-100 translate-y-0 shadow-accent/20 h-auto mt-6"
            : "opacity-0 scale-95 translate-y-8 pointer-events-none absolute h-0"
        }
      `}
      style={{ willChange: "opacity, transform" }}
    >
      {/* Animated Background Gradient */}
      <div
        className={`
          absolute inset-0 bg-gradient-to-br opacity-[0.08] transition-all duration-1000
          ${service.gradient}
        `}
      />

      {/* Header with Enhanced Styling */}
      <div className="relative z-10 mb-6">
        <div className="flex items-center gap-4 mb-4">
          <div
            className={`
              w-12 h-12 lg:w-14 lg:h-14 rounded-2xl flex items-center justify-center
              bg-gradient-to-br from-accent to-accent/70 shadow-lg flex-shrink-0
              transform transition-transform duration-500 hover:scale-110
            `}
          >
            <div className="text-white text-xl lg:text-2xl">{service.icon}</div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl lg:text-3xl font-black text-foreground mb-2 line-clamp-1 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              {service.title}
            </h3>
            <div className="flex gap-2 flex-wrap">
              {service.tech.slice(0, 3).map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-accent/10 text-accent border-accent/20 text-xs font-bold px-2 py-1"
                >
                  {tech.icon}
                  <span className="ml-1">{tech.name}</span>
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed text-base lg:text-lg font-light">
          {service.description}
        </p>
      </div>

      {/* Features with Enhanced Animation */}
      <div className="relative z-10 mb-6">
        <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
          <Zap className="w-4 h-4 text-accent animate-pulse-fast" />
          <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Key Capabilities
          </span>
        </h4>
        <div className="grid gap-3">
          {service.features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3 rounded-xl bg-background/40 border border-border/20 hover:border-accent/30 transition-all duration-300 group hover:scale-[1.02] hover:shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 mt-2 group-hover:scale-150 transition-transform duration-300 animate-pulse-small" />
              <span className="text-foreground/80 group-hover:text-foreground transition-colors text-sm leading-relaxed font-medium">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats with Enhanced Design */}
      <div className="relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {service.stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-3 rounded-xl bg-background/30 border border-border/20 hover:border-accent/20 transition-all duration-300 group hover:scale-105 hover:shadow-lg"
            >
              <div className="text-xl lg:text-2xl font-black text-foreground mb-1 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animated Border Effect */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent hover:border-accent/20 transition-all duration-500 pointer-events-none" />
    </Card>
  );
};

const ZigzagButton = ({
  service,
  isActive,
  onClick,
}: {
  service: Service;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <Button
      onClick={onClick}
      size="lg"
      className={`
        absolute transform transition-all duration-500 cursor-pointer group
        ${
          isActive
            ? "bg-accent hover:bg-accent/90 text-primary scale-110 shadow-2xl shadow-accent/30 z-50"
            : "bg-card/80 hover:bg-card text-foreground border border-border/50 backdrop-blur-xl z-30"
        }
        text-sm font-bold px-4 py-2.5 rounded-2xl hover:scale-105 whitespace-nowrap
        border-2 hover:border-accent/30
      `}
      style={{
        top: service.buttonPosition.top,
        left: service.buttonPosition.left,
        willChange: "transform, background-color, box-shadow",
      }}
    >
      <div className="flex items-center gap-2">
        <div className={isActive ? "animate-spin-slow" : ""}>
          {service.icon}
        </div>
        <span>{service.title}</span>
      </div>
    </Button>
  );
};

const SERVICES: Service[] = [
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

const SERVICE_ORDER = ["frontend", "backend", "ai", "cloud", "mobile"];

const BUTTON_WIDTH = 120;
const BUTTON_HEIGHT = 40;
const ICON_SIZE = 80;

export const About = () => {
  const [activeService, setActiveService] = useState<string>("frontend");
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [orbitProgress, setOrbitProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for parallax effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Orbital animation
  useEffect(() => {
    let animationFrameId: number;

    const updateOrbit = () => {
      setOrbitProgress((prev) => (prev + 0.001) % 1);
      animationFrameId = requestAnimationFrame(updateOrbit);
    };

    animationFrameId = requestAnimationFrame(updateOrbit);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const containerRef = useCallback((node: HTMLDivElement) => {
    if (node !== null) {
      const observer = new ResizeObserver(() => {
        setContainerSize({
          width: node.offsetWidth,
          height: node.offsetHeight,
        });
      });
      observer.observe(node);
      return () => observer.disconnect();
    }
  }, []);

  const pathRef = useRef<SVGPathElement>(null);

  const services = SERVICES;
  const stats = [
    {
      icon: <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />,
      value: "50+",
      label: "Projects",
      description: "Startups to Fortune 500",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" />,
      value: "8+",
      label: "Years",
      description: "Proven excellence",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      value: "10M+",
      label: "Users",
      description: "Global user base",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />,
      value: "99.9%",
      label: "Uptime",
      description: "Enterprise reliability",
      gradient: "from-orange-500 to-red-600",
    },
    {
      icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6" />,
      value: "100%",
      label: "Satisfaction",
      description: "5-star rated",
      gradient: "from-rose-500 to-pink-600",
    },
    {
      icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />,
      value: "24/7",
      label: "Support",
      description: "Always available",
      gradient: "from-indigo-500 to-purple-600",
    },
  ];

  const serviceCards = useMemo(() => {
    return services.map((service) => (
      <ServiceCard
        key={service.id}
        service={service}
        isActive={activeService === service.id}
      />
    ));
  }, [activeService, services]);

  const getCoords = useCallback(
    (position: { top: string; left: string }, isButton: boolean) => {
      if (!containerSize.width || !containerSize.height) return { x: 0, y: 0 };

      const leftPx = (parseFloat(position.left) / 100) * containerSize.width;
      const topPx = (parseFloat(position.top) / 100) * containerSize.height;

      const offsetX = isButton ? BUTTON_WIDTH / 2 : ICON_SIZE / 2;
      const offsetY = isButton ? BUTTON_HEIGHT / 2 : ICON_SIZE / 2;

      return { x: leftPx + offsetX, y: topPx + offsetY };
    },
    [containerSize]
  );

  const trackingPathD = useMemo(() => {
    if (!containerSize.width || !containerSize.height) return "";

    let path = "";
    SERVICE_ORDER.forEach((serviceId, index) => {
      const service = SERVICES.find((s) => s.id === serviceId);
      if (!service) return;

      const buttonCoords = getCoords(service.buttonPosition, true);
      const iconCoords = getCoords(service.position, false);

      if (index === 0) {
        path += `M ${buttonCoords.x} ${buttonCoords.y}`;
      } else {
        const prevServiceId = SERVICE_ORDER[index - 1];
        const prevService = SERVICES.find((s) => s.id === prevServiceId);
        if (prevService) {
          const prevIconCoords = getCoords(prevService.position, false);
          const midX = (prevIconCoords.x + buttonCoords.x) / 2;
          const midY = (prevIconCoords.y + buttonCoords.y) / 2;
          const controlX =
            midX + (prevIconCoords.y < buttonCoords.y ? -60 : 60);
          const controlY =
            midY + (prevIconCoords.x < buttonCoords.x ? 60 : -60);

          path += ` Q ${controlX} ${controlY} ${buttonCoords.x} ${buttonCoords.y}`;
        }
      }

      path += ` C ${buttonCoords.x},${buttonCoords.y} ${iconCoords.x},${buttonCoords.y} ${iconCoords.x},${iconCoords.y}`;
    });

    return path;
  }, [containerSize, getCoords]);

  const [fullPathLength, setFullPathLength] = useState(0);
  const [activePathLength, setActivePathLength] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      setFullPathLength(pathRef.current.getTotalLength());
    }
  }, [trackingPathD]);

  useEffect(() => {
    if (!containerSize.width || !containerSize.height || !pathRef.current) {
      setActivePathLength(0);
      return;
    }

    let tempPathD = "";
    const activeIndex = SERVICE_ORDER.indexOf(activeService);

    if (activeIndex === -1) {
      setActivePathLength(0);
      return;
    }

    for (let i = 0; i <= activeIndex; i++) {
      const serviceId = SERVICE_ORDER[i];
      const service = SERVICES.find((s) => s.id === serviceId);
      if (!service) continue;

      const buttonCoords = getCoords(service.buttonPosition, true);
      const iconCoords = getCoords(service.position, false);

      if (i === 0) {
        tempPathD += `M ${buttonCoords.x} ${buttonCoords.y}`;
      } else {
        const prevServiceId = SERVICE_ORDER[i - 1];
        const prevService = SERVICES.find((s) => s.id === prevServiceId);
        if (prevService) {
          const prevIconCoords = getCoords(prevService.position, false);
          const midX = (prevIconCoords.x + buttonCoords.x) / 2;
          const midY = (prevIconCoords.y + buttonCoords.y) / 2;
          const controlX =
            midX + (prevIconCoords.y < buttonCoords.y ? -60 : 60);
          const controlY =
            midY + (prevIconCoords.x < buttonCoords.x ? 60 : -60);

          tempPathD += ` Q ${controlX} ${controlY} ${buttonCoords.x} ${buttonCoords.y}`;
        }
      }
      tempPathD += ` C ${buttonCoords.x},${buttonCoords.y} ${iconCoords.x},${buttonCoords.y} ${iconCoords.x},${iconCoords.y}`;
    }

    const tempSvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    const tempPathElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    tempPathElement.setAttribute("d", tempPathD);
    tempSvg.appendChild(tempPathElement);
    document.body.appendChild(tempSvg);
    setActivePathLength(tempPathElement.getTotalLength());
    document.body.removeChild(tempSvg);
  }, [activeService, containerSize, getCoords]);

  // Parallax effect for background elements
  const parallaxStyle = {
    transform: `translate(${mousePosition.x * 0.02}px, ${
      mousePosition.y * 0.02
    }px)`,
    willChange: "transform",
  };

  return (
    <section
      id="about"
      className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background min-h-screen"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div
          className="absolute top-20 left-4 sm:left-10 w-32 sm:w-48 lg:w-72 h-32 sm:h-48 lg:h-72 bg-purple-500/20 rounded-full blur-3xl animate-float-rotate"
          style={parallaxStyle}
        />
        <div
          className="absolute top-40 right-4 sm:right-10 w-40 sm:w-64 lg:w-96 h-40 sm:h-64 lg:h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"
          style={{ ...parallaxStyle, animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-20 left-1/4 w-32 sm:w-48 lg:w-80 h-32 sm:h-48 lg:h-80 bg-emerald-500/20 rounded-full blur-3xl animate-float-rotate"
          style={{ ...parallaxStyle, animationDelay: "4s" }}
        />

        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-16 sm:mb-24 lg:mb-32">
          <div className="inline-flex items-center gap-3 mb-6 sm:mb-8 lg:mb-12 px-4 py-2 bg-accent/10 rounded-full border border-accent/20 backdrop-blur-xl">
            <Sparkles className="w-4 h-4 text-accent animate-pulse-fast" />
            <span className="text-sm font-bold text-accent uppercase tracking-wider">
              Engineering Excellence
            </span>
            <Sparkles className="w-4 h-4 text-accent animate-pulse-fast" />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 sm:mb-8 lg:mb-12 tracking-tight">
            <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent">
              DIGITAL
            </span>
            <br />
            <span className="bg-gradient-to-r from-accent via-accent/90 to-accent/70 bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
              INNOVATION
            </span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed font-light mb-8 sm:mb-12 lg:mb-16">
            We are elite engineers and designers building
            <span className="text-accent font-semibold animate-pulse-light">
              {" "}
              digital products that redefine industries.{" "}
            </span>
            From concept to global scale, we deliver unparalleled technical
            excellence.
          </p>
        </div>

        {/* Enhanced Interactive Services Section */}
        <div className="relative mb-20 sm:mb-28 lg:mb-36">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 lg:mb-8 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl sm:max-w-2xl mx-auto font-light">
              Click on any service to explore our capabilities
            </p>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div
              ref={containerRef}
              className="relative w-full max-w-5xl lg:max-w-7xl mx-auto h-64 lg:h-96 mb-12 rounded-3xl bg-gradient-to-br from-background/60 to-background/30 border-2 border-border/20 backdrop-blur-2xl overflow-visible shadow-2xl"
            >
              {/* Central Orbital System */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border-2 border-accent/20 animate-spin-slow">
                  <Orbit className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-accent/40" />
                </div>
              </div>

              {/* Enhanced Sequential Tracking Line */}
              <div className="absolute inset-0 pointer-events-none">
                <svg
                  className="w-full h-full"
                  viewBox={`0 0 ${containerSize.width} ${containerSize.height}`}
                  preserveAspectRatio="none"
                >
                  {/* Glowing Base Line */}
                  <path
                    ref={pathRef}
                    d={trackingPathD}
                    stroke="hsl(var(--accent))"
                    strokeWidth="3"
                    strokeDasharray="8 8"
                    fill="none"
                    opacity="0.2"
                    filter="url(#glow)"
                  />

                  {/* Active Tracking Line with Glow */}
                  <path
                    d={trackingPathD}
                    stroke="hsl(var(--accent))"
                    strokeWidth="4"
                    fill="none"
                    opacity="0.9"
                    className="transition-[stroke-dashoffset] duration-1000 ease-out"
                    strokeDasharray={fullPathLength}
                    strokeDashoffset={fullPathLength - activePathLength}
                    filter="url(#glow)"
                  />

                  {/* SVG Filters for Glow Effect */}
                  <defs>
                    <filter
                      id="glow"
                      x="-50%"
                      y="-50%"
                      width="200%"
                      height="200%"
                    >
                      <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                </svg>
              </div>

              {/* Floating Service Icons with Orbital Motion */}
              {services.map((service) => (
                <FloatingServiceIcon
                  key={service.id}
                  service={service}
                  isActive={activeService === service.id}
                  onClick={() => setActiveService(service.id)}
                  orbitProgress={orbitProgress * service.orbitSpeed}
                />
              ))}

              {/* Zigzag Buttons */}
              {services.map((service) => (
                <ZigzagButton
                  key={service.id}
                  service={service}
                  isActive={activeService === service.id}
                  onClick={() => setActiveService(service.id)}
                />
              ))}
            </div>
          </div>

          {/* Enhanced Mobile Layout */}
          <div className="lg:hidden">
            <div className="relative w-full max-w-md mx-auto mb-8">
              {/* Vertical Service Buttons with Enhanced Design */}
              <div className="flex flex-col gap-4">
                {services.map((service) => (
                  <Button
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    className={`
                      w-full justify-start py-5 px-6 text-left transition-all duration-500
                      rounded-2xl border-2 backdrop-blur-xl font-bold
                      ${
                        activeService === service.id
                          ? "bg-accent hover:bg-accent/90 text-primary scale-105 shadow-2xl shadow-accent/30 border-accent"
                          : "bg-card/80 hover:bg-card text-foreground border-border/50 hover:border-accent/30"
                      }
                    `}
                    style={{
                      willChange: "transform, background-color, box-shadow",
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-3 rounded-xl ${
                          activeService === service.id
                            ? "bg-primary/20"
                            : "bg-accent/10"
                        }`}
                      >
                        {service.icon}
                      </div>
                      <span className="text-lg">{service.title}</span>
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Service Details Card */}
          <div className="w-full max-w-2xl lg:max-w-4xl mx-auto px-2">
            {serviceCards}
          </div>

          {/* Enhanced Service Navigation Dots */}
          <div className="flex justify-center gap-3 sm:gap-4 mt-8 sm:mt-12">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`
                  w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-500
                  ${
                    activeService === service.id
                      ? "bg-accent scale-125 shadow-lg shadow-accent/50"
                      : "bg-border hover:bg-accent/50 hover:scale-110"
                  }
                `}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="mb-20 sm:mb-28 lg:mb-36">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 lg:mb-8 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              By The Numbers
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl sm:max-w-2xl mx-auto font-light">
              Our track record speaks for itself
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <Card
                key={stat.label}
                className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-2xl border-2 border-border/30 rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 group hover:scale-105 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 overflow-hidden"
              >
                {/* Animated Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Icon Container */}
                <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/20 flex items-center justify-center mb-3 sm:mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-500 mx-auto">
                  <div className="text-accent">{stat.icon}</div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground mb-2 group-hover:scale-105 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-base sm:text-lg lg:text-xl font-bold text-foreground/80 mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground font-light">
                    {stat.description}
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl lg:rounded-3xl border-2 border-transparent group-hover:border-accent/20 transition-all duration-500 pointer-events-none" />
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Final CTA */}
        <div className="text-center relative">
          {/* Minimal Background Effects */}
          <div className="absolute inset-0 overflow-hidden -z-10">
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-2xl" />
          </div>

          <Card className="relative bg-gradient-to-br from-card/90 via-card/80 to-card/70 border border-border/20 rounded-2xl lg:rounded-3xl p-8 sm:p-12 lg:p-16 backdrop-blur-sm overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
            {/* Simple Border Glow */}
            <div className="absolute inset-0 rounded-2xl lg:rounded-3xl border-2 border-transparent group-hover:border-accent/10 transition-all duration-500" />

            {/* Content Container */}
            <div className="relative z-20">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-sm font-bold text-accent uppercase tracking-wider">
                  Let's Create
                </span>
                <div className="w-2 h-2 bg-accent rounded-full" />
              </div>

              {/* Main Heading */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  Ready to Build
                </span>
                <br />
                <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                  Something Amazing?
                </span>
              </h3>

              {/* Description */}
              <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
                Your vision + our expertise ={" "}
                <span className="text-accent font-semibold">
                  digital excellence
                </span>
                . Let's make it happen.
              </p>

              {/* Optimized CTA Buttons Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
                {/* Primary CTA */}
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

                {/* Secondary CTA */}
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

                {/* Tertiary CTA */}
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
              </div>

              {/* Simple Trust Indicators */}
              <div className="mt-8 pt-6 border-t border-border/20">
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
              </div>
            </div>

            {/* Simple Corner Accents */}
            <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-accent/20" />
            <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-accent/20" />
            <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-accent/20" />
            <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-accent/20" />
          </Card>
        </div>
      </div>
    </section>
  );
};
