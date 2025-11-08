import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sparkles,
  Code,
  Globe,
  Smartphone,
  Cloud,
  Play,
  Zap,
  Shield,
  Database,
} from "lucide-react";
import Logo from "../Logo";

const rotatingWords = ["scale", "optimize", "transform", "secure"];
const techStack = ["React", "Node.js", "AWS", "Python", "AI/ML"];

export const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [techIndex, setTechIndex] = useState(0);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);

    const techInterval = setInterval(() => {
      setTechIndex((prev) => (prev + 1) % techStack.length);
    }, 2000);

    return () => {
      clearInterval(wordInterval);
      clearInterval(techInterval);
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background pb-6">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto w-full px-6 lg:px-8 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-screen">
        <div className="flex flex-col justify-center space-y-8 py-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 w-fit">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">
              Enterprise Tech Solutions
            </span>
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-foreground">Tech</span>
              <br />
              <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                Solutions
              </span>
              <br />
              <div className="flex items-center gap-4">
                <span className="text-muted-foreground">That</span>
                <div className="text-changer">
                  <div className="roles-container">
                    {rotatingWords.map((word, index) => (
                      <span
                        key={word}
                        className={`role ${
                          index === wordIndex ? "active" : ""
                        }`}
                      >
                        {word}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              We build custom software solutions and scalable digital platforms
              that drive real business results.
            </p>

            <div className="flex items-center gap-3 text-lg text-muted-foreground">
              <span>Powered by</span>
              <div className="text-changer tech-changer">
                <div className="roles-container">
                  {techStack.map((tech, index) => (
                    <span
                      key={tech}
                      className={`role tech-role ${
                        index === techIndex ? "active" : ""
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            {[
              { icon: Code, label: "Development" },
              { icon: Globe, label: "Web" },
              { icon: Smartphone, label: "Mobile" },
              { icon: Cloud, label: "Cloud" },
            ].map((service, index) => (
              <div
                key={service.label}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-accent/5 border border-accent/10"
              >
                <service.icon className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-foreground">
                  {service.label}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="w-fit bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-6 rounded-xl"
              onClick={() => scrollToSection("contact")}
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="relative w-full max-w-md mx-auto sm:max-w-lg lg:max-w-none">
          <div className="relative bg-gradient-to-br from-card to-card/80 border border-border/50 rounded-3xl p-8 shadow-2xl backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-purple-500/5 rounded-3xl blur-xl -z-10" />

            <div className="flex items-center justify-between mb-8">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <div className="w-3 h-3 rounded-full bg-green-400/80" />
              </div>
              <div className="flex gap-1 bg-muted/50 rounded-lg p-1">
                {["Dashboard", "Analytics", "Settings"].map((tab) => (
                  <button
                    key={tab}
                    className="px-3 py-1 text-xs rounded-md transition-all duration-200 hover:bg-background/50"
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-background/50 rounded-2xl p-4 border border-border/30">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-green-400" />
                  <span className="text-xs font-medium text-muted-foreground">
                    Performance
                  </span>
                </div>
                <div className="text-2xl font-bold text-foreground">99.9%</div>
                <div className="w-full bg-muted rounded-full h-1 mt-2">
                  <div className="bg-green-400 h-1 rounded-full w-11/12" />
                </div>
              </div>

              <div className="bg-background/50 rounded-2xl p-4 border border-border/30">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-medium text-muted-foreground">
                    Security
                  </span>
                </div>
                <div className="text-2xl font-bold text-foreground">100%</div>
                <div className="w-full bg-muted rounded-full h-1 mt-2">
                  <div className="bg-blue-400 h-1 rounded-full w-full" />
                </div>
              </div>
            </div>

            <div className="bg-background/50 rounded-2xl p-4 border border-border/30 mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-foreground">
                  Real-time Activity
                </span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-xs text-muted-foreground">Live</span>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { label: "API Requests", value: 75, color: "bg-accent" },
                  { label: "Database", value: 60, color: "bg-blue-400" },
                  { label: "Cache", value: 45, color: "bg-green-400" },
                  { label: "Storage", value: 30, color: "bg-purple-400" },
                ].map((item, index) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground w-20">
                      {item.label}
                    </span>
                    <div className="flex-1 bg-muted rounded-full h-2">
                      <div
                        className={`${item.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium text-foreground w-8">
                      {item.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-background rounded-xl p-4 border border-border">
              <div className="flex items-center gap-2 mb-3">
                <Code className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold text-foreground">
                  deployment.yml
                </span>
              </div>
              <div className="space-y-1 text-xs font-mono">
                <div className="flex">
                  <span className="text-purple-400 w-6">1</span>
                  <span className="text-blue-400">deployment:</span>
                </div>
                <div className="flex">
                  <span className="text-purple-400 w-6">2</span>
                  <span className="text-green-400 ml-4">
                    - name: production
                  </span>
                </div>
                <div className="flex">
                  <span className="text-purple-400 w-6">3</span>
                  <span className="text-green-400 ml-4">status: active</span>
                </div>
                <div className="flex">
                  <span className="text-purple-400 w-6">4</span>
                  <span className="text-green-400 ml-4">version: 2.4.1</span>
                </div>
              </div>
            </div>

            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-accent to-purple-500 text-primary text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              LIVE
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-4 shadow-xl w-32 z-50">
            <Database className="w-5 h-5 text-accent mb-2" />
            <div className="text-xs text-muted-foreground">Database</div>
            <div className="text-sm font-semibold text-foreground">
              PostgreSQL
            </div>
          </div>

          <div className="absolute -top-6 -right-6 bg-background border border-border rounded-2xl p-4 shadow-xl w-32">
            <Cloud className="w-5 h-5 text-accent mb-2" />
            <div className="text-xs text-muted-foreground">Cloud</div>
            <div className="text-sm font-semibold text-foreground">AWS</div>
          </div>

          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80">
            <div className="absolute inset-0 border-2 border-accent/20 rounded-full animate-ping-slow" />
            <div className="absolute inset-4 border-2 border-accent/15 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};
