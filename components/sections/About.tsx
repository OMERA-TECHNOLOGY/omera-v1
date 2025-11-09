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
}

const FloatingServiceIcon = ({
  service,
  isActive,
  onClick,
}: {
  service: Service;
  isActive: boolean;
  onClick: () => void;
}) => {
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFloating((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <button
      onClick={onClick}
      className={`absolute transform-gpu will-change-transform transition-all duration-700 cursor-pointer group ${
        isActive ? "scale-150 z-50 shadow-2xl" : "hover:scale-110 z-30"
      } ${isFloating && !isActive ? "translate-y-[-8px]" : "translate-y-0"}`}
      style={{
        top: service.position.top,
        left: service.position.left,
      }}
    >
      <div
        className={`
          relative w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shadow-2xl
          transform-gpu will-change-transform transition-all duration-500 group-hover:rotate-12
          ${
            isActive
              ? "bg-gradient-to-br from-accent to-accent/70 scale-110 shadow-accent/50"
              : "bg-gradient-to-br from-card to-card/80 border border-border/50 shadow-lg hover:shadow-xl"
          }
        `}
      >
        <div
          className={`
            text-lg sm:text-xl transition-all duration-500
            ${
              isActive
                ? "text-white scale-110"
                : "text-accent group-hover:text-accent/80"
            }
          `}
        >
          {service.icon}
        </div>

        {/* Pulse effect for active state */}
        {isActive && (
          <>
            <div className="absolute inset-0 rounded-2xl bg-accent animate-ping opacity-20"></div>
            <div className="absolute -inset-1 sm:-inset-2 rounded-3xl border-2 border-accent/30 animate-pulse"></div>
          </>
        )}

        {/* Tooltip */}
        <div
          className={`
            absolute bottom-full mb-2 sm:mb-3 left-1/2 transform -translate-x-1/2
            px-2 sm:px-3 py-1 sm:py-2 bg-foreground text-background rounded-lg text-xs sm:text-sm font-semibold
            whitespace-nowrap transition-all duration-300 opacity-0 group-hover:opacity-100
            ${isActive ? "opacity-100" : ""}
          `}
        >
          {service.title}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-foreground"></div>
        </div>
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
        relative bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl
        border border-border/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 overflow-hidden
        transition-all duration-700 transform w-full max-w-2xl lg:max-w-4xl mx-auto
        ${
          isActive
            ? "opacity-100 scale-100 translate-y-0 shadow-2xl shadow-accent/10 h-auto mt-4"
            : "opacity-0 scale-95 translate-y-8 pointer-events-none absolute h-0"
        }
      `}
    >
      {/* Animated Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5`}
      />

      {/* Floating Tech Icons */}
      <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex gap-1 sm:gap-2">
        {service.tech.slice(0, 3).map((tech, index) => (
          <div
            key={index}
            className="text-lg sm:text-xl opacity-60 hover:opacity-100 transition-opacity duration-300 transform hover:scale-110"
            title={tech.name}
          >
            {tech.icon}
          </div>
        ))}
      </div>

      {/* Header */}
      <div className="relative z-10 mb-4 sm:mb-6">
        <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
          <div
            className={`
              w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center
              bg-gradient-to-br from-accent to-accent/70 shadow-lg flex-shrink-0
            `}
          >
            <div className="text-white text-lg sm:text-xl lg:text-2xl">
              {service.icon}
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-1 sm:mb-2 line-clamp-1">
              {service.title}
            </h3>
            <div className="flex gap-1 sm:gap-2 flex-wrap">
              {service.tech.slice(0, 2).map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-accent/10 text-accent border-accent/20 text-xs"
                >
                  {tech.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base lg:text-lg">
          {service.description}
        </p>
      </div>

      {/* Features */}
      <div className="relative z-10 mb-4 sm:mb-6">
        <h4 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
          <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
          Key Capabilities
        </h4>
        <div className="grid gap-2">
          {service.features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-background/50 border border-border/30 hover:border-accent/20 transition-all duration-300 group"
            >
              <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0 mt-1.5 sm:mt-2 group-hover:scale-150 transition-transform duration-300" />
              <span className="text-foreground/80 group-hover:text-foreground transition-colors text-xs sm:text-sm leading-relaxed">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="relative z-10">
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          {service.stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-2 sm:p-3 rounded-lg sm:rounded-xl bg-background/30 border border-border/20 hover:border-accent/20 transition-all duration-300 group"
            >
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-1 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animated Border */}
      <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-transparent hover:border-accent/20 transition-all duration-500 pointer-events-none" />
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
      size="sm"
      className={`
        absolute transform transition-all duration-500 cursor-pointer group
        ${
          isActive
            ? "bg-accent hover:bg-accent/90 text-primary scale-110 shadow-2xl shadow-accent/30 z-50"
            : "bg-card/80 hover:bg-card text-foreground border border-border/50 backdrop-blur-xl z-30"
        }
        text-xs sm:text-sm font-semibold px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl
        hover:scale-105 whitespace-nowrap
      `}
      style={{
        top: service.buttonPosition.top,
        left: service.buttonPosition.left,
      }}
    >
      <div className="flex items-center gap-1 sm:gap-2">
        {service.icon}
        <span className="hidden xs:inline">{service.title}</span>
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
    icon: <Palette className="w-3 h-3 sm:w-4 sm:h-4" />,
    gradient: "from-purple-500 via-pink-600 to-rose-700",
    features: [
      "Interactive animations & micro-interactions",
      "Responsive design systems",
      "Performance optimization",
      "Progressive Web Apps",
    ],
    tech: [
      { icon: <SiReact className="text-cyan-400" />, name: "React" },
      {
        icon: <SiTypescript className="text-blue-600" />,
        name: "TypeScript",
      },
      { icon: <SiTailwindcss className="text-cyan-300" />, name: "Tailwind" },
      { icon: <SiFramer className="text-pink-500" />, name: "Framer" },
    ],
    stats: [
      { value: "<2s", label: "Load Time" },
      { value: "90+", label: "Lighthouse" },
      { value: "60%", label: "Faster" },
      { value: "100%", label: "Responsive" },
    ],
    position: { top: "15%", left: "10%" },
    buttonPosition: { top: "25%", left: "5%" },
  },
  {
    id: "backend",
    title: "Backend",
    description:
      "Robust, scalable backend infrastructure engineered for performance, reliability, and seamless integration with modern technologies.",
    icon: <Server className="w-3 h-3 sm:w-4 sm:h-4" />,
    gradient: "from-blue-500 via-cyan-600 to-sky-700",
    features: [
      "Microservices architecture",
      "Real-time systems",
      "Database optimization",
      "API development",
    ],
    tech: [
      { icon: <SiNodedotjs className="text-green-500" />, name: "Node.js" },
      {
        icon: <SiPostgresql className="text-blue-400" />,
        name: "PostgreSQL",
      },
      { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
      { icon: <SiRedis className="text-red-500" />, name: "Redis" },
    ],
    stats: [
      { value: "10M+", label: "Requests/Day" },
      { value: "<100ms", label: "Response" },
      { value: "99.9%", label: "Uptime" },
      { value: "Zero", label: "Data Loss" },
    ],
    position: { top: "55%", left: "20%" },
    buttonPosition: { top: "65%", left: "15%" },
  },
  {
    id: "mobile",
    title: "Mobile",
    description:
      "Native and cross-platform mobile applications that deliver exceptional performance and seamless user experiences across all devices.",
    icon: <Smartphone className="w-3 h-3 sm:w-4 sm:h-4" />,
    gradient: "from-green-500 via-emerald-600 to-teal-700",
    features: [
      "React Native development",
      "Native iOS & Android",
      "Mobile UI/UX design",
      "App store deployment",
    ],
    tech: [
      { icon: <SiReact className="text-cyan-400" />, name: "React Native" },
      {
        icon: <SiTypescript className="text-blue-600" />,
        name: "TypeScript",
      },
      { icon: <SiPython className="text-yellow-500" />, name: "Python" },
      { icon: <SiFastapi className="text-teal-500" />, name: "FastAPI" },
    ],
    stats: [
      { value: "4.8+", label: "App Store" },
      { value: "60%", label: "Faster Dev" },
      { value: "95%", label: "Code Share" },
      { value: "1M+", label: "Downloads" },
    ],
    position: { top: "25%", left: "75%" },
    buttonPosition: { top: "35%", left: "70%" },
  },
  {
    id: "cloud",
    title: "Cloud",
    description:
      "Enterprise-grade cloud infrastructure, deployment pipelines, and monitoring systems that ensure reliability and scalability at any level.",
    icon: <Cloud className="w-3 h-3 sm:w-4 sm:h-4" />,
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
      {
        icon: <SiKubernetes className="text-blue-500" />,
        name: "Kubernetes",
      },
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
    position: { top: "65%", left: "70%" },
    buttonPosition: { top: "75%", left: "65%" },
  },
  {
    id: "ai",
    title: "AI/ML",
    description:
      "Intelligent solutions powered by cutting-edge artificial intelligence and machine learning algorithms that transform data into actionable insights.",
    icon: <Brain className="w-3 h-3 sm:w-4 sm:h-4" />,
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
    position: { top: "40%", left: "45%" },
    buttonPosition: { top: "50%", left: "40%" },
  },
];

// Define the sequential order of services for the tracking line
const SERVICE_ORDER = ["frontend", "backend", "ai", "cloud", "mobile"]; // Corrected order

// Helper to get element dimensions for positioning offsets
const BUTTON_WIDTH = 120; // Approx. width of zigzag button in pixels (adjust as needed for responsive)
BUTTON_WIDTH;
const BUTTON_HEIGHT = 40; // Approx. height of zigzag button
const ICON_SIZE = 64; // Approx. size of FloatingServiceIcon

export const About = () => {
  const [activeService, setActiveService] = useState<string>("frontend");
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
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

  const pathRef = useRef<SVGPathElement>(null); // Ref to measure path length

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

  // Helper function to get pixel coordinates from percentage strings
  const getCoords = useCallback(
    (position: { top: string; left: string }, isButton: boolean) => {
      if (!containerSize.width || !containerSize.height) return { x: 0, y: 0 };

      const leftPx = (parseFloat(position.left) / 100) * containerSize.width;
      const topPx = (parseFloat(position.top) / 100) * containerSize.height;

      // Adjust for the center of the element
      const offsetX = isButton ? BUTTON_WIDTH / 2 : ICON_SIZE / 2;
      const offsetY = isButton ? BUTTON_HEIGHT / 2 : ICON_SIZE / 2;

      return { x: leftPx + offsetX, y: topPx + offsetY };
    },
    [containerSize]
  );

  // Generate the SVG path for the sequential tracking line
  const trackingPathD = useMemo(() => {
    if (!containerSize.width || !containerSize.height) return "";

    let path = "";
    SERVICE_ORDER.forEach((serviceId, index) => {
      const service = SERVICES.find((s) => s.id === serviceId);
      if (!service) return;

      const buttonCoords = getCoords(service.buttonPosition, true);
      const iconCoords = getCoords(service.position, false);

      if (index === 0) {
        // Start from the first button's center
        path += `M ${buttonCoords.x} ${buttonCoords.y}`;
      } else {
        // Connect from the previous icon to the current button
        const prevServiceId = SERVICE_ORDER[index - 1];
        const prevService = SERVICES.find((s) => s.id === prevServiceId);
        if (prevService) {
          const prevIconCoords = getCoords(prevService.position, false);

          // Use a smooth quadratic bezier curve for "signal-like" effect
          const midX = (prevIconCoords.x + buttonCoords.x) / 2;
          const midY = (prevIconCoords.y + buttonCoords.y) / 2;
          // Control point for the curve, adjusting based on direction for zigzag
          const controlX =
            midX + (prevIconCoords.y < buttonCoords.y ? -50 : 50); // Shift X based on Y difference
          const controlY =
            midY + (prevIconCoords.x < buttonCoords.x ? 50 : -50); // Shift Y based on X difference

          path += ` Q ${controlX} ${controlY} ${buttonCoords.x} ${buttonCoords.y}`;
        }
      }

      // Connect from the current button to its icon
      // Using a cubic bezier for a smoother, more direct link from button to its own icon
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
  }, [trackingPathD]); // Recalculate full path length when the path changes

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
            midX + (prevIconCoords.y < buttonCoords.y ? -50 : 50);
          const controlY =
            midY + (prevIconCoords.x < buttonCoords.x ? 50 : -50);

          tempPathD += ` Q ${controlX} ${controlY} ${buttonCoords.x} ${buttonCoords.y}`;
        }
      }
      tempPathD += ` C ${buttonCoords.x},${buttonCoords.y} ${iconCoords.x},${buttonCoords.y} ${iconCoords.x},${iconCoords.y}`;
    }

    // Create a temporary SVG path to measure the length
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
    document.body.appendChild(tempSvg); // Temporarily append to DOM to get length
    setActivePathLength(tempPathElement.getTotalLength());
    document.body.removeChild(tempSvg); // Remove after measuring
  }, [activeService, containerSize, getCoords]); // Recalculate active path length when active service or container size changes

  return (
    <section
      id="about"
      className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background min-h-screen"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-4 sm:left-10 w-32 sm:w-48 lg:w-72 h-32 sm:h-48 lg:h-72 bg-purple-500/10 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute top-40 right-4 sm:right-10 w-40 sm:w-64 lg:w-96 h-40 sm:h-64 lg:h-96 bg-blue-500/10 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-32 sm:w-48 lg:w-80 h-32 sm:h-48 lg:h-80 bg-emerald-500/10 rounded-full blur-2xl sm:blur-3xl"></div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-20 lg:mb-24">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 lg:mb-8 px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 bg-accent/10 rounded-full border border-accent/20">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wider">
              Engineering Excellence
            </span>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full animate-pulse delay-500"></div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 lg:mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              DIGITAL
            </span>
            <br />
            <span className="bg-gradient-to-r from-accent via-accent/80 to-accent/60 bg-clip-text text-transparent">
              INNOVATION
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed font-light mb-6 sm:mb-8 lg:mb-12">
            We are elite engineers and designers building
            <span className="text-accent font-semibold">
              {" "}
              digital products that redefine industries.{" "}
            </span>
            From concept to global scale, we deliver unparalleled technical
            excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-primary font-bold px-5 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-sm sm:text-base group w-full xs:w-auto"
            >
              <Rocket className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border border-border hover:border-accent/40 text-foreground hover:text-accent px-5 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl backdrop-blur-md transition-all duration-300 hover:scale-105 text-sm sm:text-base font-semibold group w-full xs:w-auto"
            >
              <Eye className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
              View Our Work
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Interactive Services Section */}
        <div className="relative mb-16 sm:mb-24 lg:mb-32">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-xl sm:max-w-2xl mx-auto">
              Click on any service to explore our capabilities
            </p>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block">
            {/* Interactive Service Selector */}
            <div
              ref={containerRef}
              className="relative w-full max-w-4xl lg:max-w-6xl mx-auto h-48 sm:h-64 lg:h-80 mb-8 sm:mb-12 rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gradient-to-br from-background/50 to-background/20 border border-border/30 backdrop-blur-sm overflow-visible"
            >
              {/* Sequential Tracking Line */}
              <div className="absolute inset-0 pointer-events-none">
                <svg
                  className="w-full h-full"
                  viewBox={`0 0 ${containerSize.width} ${containerSize.height}`}
                  preserveAspectRatio="none"
                >
                  {/* Base subtle line connecting all buttons */}
                  <path
                    ref={pathRef} // Attach ref here for full path length
                    d={trackingPathD}
                    stroke="hsl(var(--border))"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    fill="none"
                    opacity="0.3"
                  />

                  {/* Active tracking line - highlights up to the current service */}
                  <path
                    d={trackingPathD}
                    stroke="hsl(var(--accent))"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.8"
                    className="transition-[stroke-dashoffset] duration-700 ease-out"
                    strokeDasharray={fullPathLength}
                    strokeDashoffset={fullPathLength - activePathLength}
                  />
                </svg>
              </div>

              {/* Floating Service Icons */}
              {services.map((service) => (
                <FloatingServiceIcon
                  key={service.id}
                  service={service}
                  isActive={activeService === service.id}
                  onClick={() => setActiveService(service.id)}
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

          {/* Mobile Layout */}
          <div className="lg:hidden">
            <div className="relative w-full max-w-md mx-auto mb-8">
              {/* Vertical Service Buttons */}
              <div className="flex flex-col gap-4">
                {services.map((service) => (
                  <Button
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    className={`
                      w-full justify-start py-4 px-6 text-left transition-all duration-300
                      ${
                        activeService === service.id
                          ? "bg-accent hover:bg-accent/90 text-primary scale-105 shadow-2xl shadow-accent/30"
                          : "bg-card/80 hover:bg-card text-foreground border border-border/50 backdrop-blur-xl"
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-lg ${
                          activeService === service.id
                            ? "bg-primary/20"
                            : "bg-accent/10"
                        }`}
                      >
                        {service.icon}
                      </div>
                      <span className="font-semibold">{service.title}</span>
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Service Details Card - Same for both layouts */}
          <div className="w-full max-w-2xl lg:max-w-4xl mx-auto px-2">
            {serviceCards}
          </div>

          {/* Service Navigation Dots */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  activeService === service.id
                    ? "bg-accent scale-125"
                    : "bg-border hover:bg-accent/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-16 sm:mb-24 lg:mb-32">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              By The Numbers
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-xl sm:max-w-2xl mx-auto">
              Our track record speaks for itself
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {stats.map((stat, index) => (
              <Card
                key={stat.label}
                className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/50 rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6 group hover:scale-105 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <div className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl lg:rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 flex items-center justify-center mb-2 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
                  <div className="text-accent">{stat.icon}</div>
                </div>

                <div className="relative z-10 text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-black text-foreground mb-1 group-hover:scale-105 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base lg:text-lg font-semibold text-foreground/80 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-light">
                    {stat.description}
                  </div>
                </div>

                <div className="absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-3xl border-2 border-transparent group-hover:border-accent/20 transition-all duration-500 pointer-events-none" />
              </Card>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <Card className="relative bg-gradient-to-br from-accent/5 via-accent/10 to-purple-500/5 border border-border/50 rounded-xl sm:rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 backdrop-blur-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent"></div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              Ready to Build the Future?
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-4 sm:mb-6 lg:mb-8 max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed font-light">
              Let's discuss how our engineering excellence can transform your
              vision.
            </p>

            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center items-center relative z-10">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-primary font-bold px-5 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-sm sm:text-base group w-full xs:w-auto"
              >
                <Target className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Start Your Project
                <Rocket className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border border-border hover:border-accent/40 text-foreground hover:text-accent px-5 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl backdrop-blur-md transition-all duration-300 hover:scale-105 text-sm sm:text-base font-semibold group w-full xs:w-auto"
              >
                <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
                Book a Call
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
