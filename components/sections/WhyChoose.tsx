import { Target, Briefcase, Users, MessageSquare } from "lucide-react";
import { CanvasRevealEffect } from "../ui/CanvasRevealEffect";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Button } from "../ui/MovingBorder";
const features = [
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

export const WhyChoose = () => {
  const Icon = ({ className, ...rest }: any) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={className}
        {...rest}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
      </svg>
    );
  };

  const Card = ({
    title,
    icon,
    children,
    description,
  }: {
    title: string;
    icon: React.ReactNode;
    children?: React.ReactNode;
    description: string;
  }) => {
    const [hovered, setHovered] = useState(false);
    return (
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 lg:h-[35rem] relative rounded-3xl"
      >
        <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black" />
        <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black" />

        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full w-full absolute inset-0"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative z-20">
          <div className="text-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:-translate-y-4 absolute group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
            {icon}
          </div>
          <h2 className="dark:text-white text-center text-2xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
            {title}
          </h2>
          <h2
            className="dark:text-white text-center text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200"
            style={{ color: "#e4ecff" }}
          >
            {description}
          </h2>
        </div>
      </div>
    );
  };

  const AceternityIcon = ({ order }: { order: string }) => {
    const lines = order.split("\n");
    return (
      <div>
        <button className="relative inline-flex overflow-hidden rounded-full p-[1px]">
          <span
            className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
          bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
          />
          <span
            className="inline-flex h-full w-full cursor-pointer items-center 
          justify-center rounded-full bg-slate-950 px-6 py-3 text-purple 
          backdrop-blur-3xl font-bold text-xl text-center text-white flex-col"
          >
            {lines.map((line, i) => (
              <span key={i}>{line}</span>
            ))}
          </span>
        </button>
      </div>
    );
  };

  return (
    <section className="py-32 px-6 sm:px-8 lg:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            Why Choose
            <br />
            <span className="text-accent">APEX</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just developers – we're your strategic technology partner
            committed to your success.
          </p>
        </div>

        <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
          {features.map((feature, index) => (
            <Button
              key={index}
              borderRadius="1.75rem"
              duration={Math.floor(Math.random() * 10000 + 10000)}
              className="flex-1 text-white border-neutral-200 dark:border-slate-800"
            >
              <div className="flex lg:flex-row flex-col lg:items-center p-3 gap-2 py-6 md:p-5 lg:p-10">
                <feature.icon className="w-8 h-8 text-accent" />
                <div className="lg:ms-5">
                  <h1 className="text-start text-xl md:text-2xl font-bold">
                    {feature.title}
                  </h1>
                  <p className="text-start text-white-100 mt-3 font-semibold">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Button>
          ))}
        </div>
        <div className="mt-20 w-full py-10">
          <h3 className="text-3xl font-bold mb-12 text-center">Our Process</h3>

          <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4 ">
            <Card
              title="Planning & Strategy"
              icon={<AceternityIcon order={"Phase 1\nPlanning & Strategy"} />}
              description="We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements"
            >
              <CanvasRevealEffect
                animationSpeed={5.1}
                containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
              />
            </Card>
            <Card
              title="Development & Progress Update"
              icon={
                <AceternityIcon
                  order={"Phase 2\nDevelopment & Progress Update"}
                />
              }
              description="Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way."
            >
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-black"
                colors={[
                  [236, 72, 153],
                  [232, 121, 249],
                ]}
                dotSize={2}
              />
              <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
            </Card>
            <Card
              title="Development & Launch"
              icon={<AceternityIcon order={"Phase 3\nDevelopment & Launch"} />}
              description="This is Where the magic happens!
          Based on the approved design, I'll translate everything into functional code, building your
          website from the ground up"
            >
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-sky-600"
                colors={[[125, 211, 252]]}
              />
            </Card>
            <Card
              title="Planning & Strategy"
              icon={<AceternityIcon order={"Phase 4\nPlanning & Strategy"} />}
              description="We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements"
            >
              <CanvasRevealEffect
                animationSpeed={5.1}
                containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
              />
            </Card>
          </div>
        </div>
      </div>

      <div className="mt-16 p-12 bg-gradient-to-r from-[#0A1A35] to-[#162947] dark:from-[#FFB32C] dark:to-[#E69500] rounded-3xl text-center text-white dark:text-[#0A1A35] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 dark:bg-white/10"></div>
        <div className="relative z-10">
          <div className="w-1 h-16 bg-white/30 dark:bg-[#0A1A35]/30 mx-auto mb-6"></div>
          <p className="text-2xl md:text-3xl font-bold leading-relaxed max-w-3xl mx-auto">
            "Excellence isn't a destination. It's a commitment we bring to every
            line of code, every pixel, every project."
          </p>
        </div>
      </div>
    </section>
  );
};
