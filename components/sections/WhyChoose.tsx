"use client";

import { Sparkles } from "lucide-react";
import { CanvasRevealEffect } from "../ui/CanvasRevealEffect";
import { motion } from "framer-motion";

import {
  features,
  containerVariants,
  fadeInUp,
} from "./why-choose/constants";
import { FeatureButton } from "./why-choose/FeatureButton";
import { ProcessCard } from "./why-choose/ProcessCard";
import { AceternityIcon } from "./why-choose/AceternityIcon";

export const WhyChoose = () => {
  return (
    <section className="py-32 px-6 sm:px-8 lg:px-12 relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-20 text-center"
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent/10 rounded-full border border-accent/20 backdrop-blur-xl"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-bold text-accent uppercase tracking-wider">
              Why We're Different
            </span>
            <Sparkles className="w-4 h-4 text-accent" />
          </motion.div>

          <motion.h2
            className="text-5xl sm:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Why Choose
            <br />
            <motion.span
              className="text-accent"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              OMERA
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            We're not just developers – we're your strategic technology partner
            committed to your success.
          </motion.p>
        </motion.div>

        {/* Features Grid - Maintains original layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10"
        >
          {features.map((feature, index) => (
            <FeatureButton key={index} feature={feature} index={index} />
          ))}
        </motion.div>

        {/* Process Section */}
        <div className="mt-20 w-full py-10">
          <motion.h3
            className="text-3xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Our Process
          </motion.h3>

          <motion.div
            className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <ProcessCard
              title="Planning & Strategy"
              icon={<AceternityIcon order={"Phase 1\nPlanning & Strategy"} />}
              description="We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements"
            >
              <CanvasRevealEffect
                animationSpeed={5.1}
                containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
              />
            </ProcessCard>
            <ProcessCard
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
            </ProcessCard>
            <ProcessCard
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
            </ProcessCard>
            <ProcessCard
              title="Ongoing Support"
              icon={<AceternityIcon order={"Phase 4\nOngoing Support"} />}
              description="We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements"
            >
              <CanvasRevealEffect
                animationSpeed={5.1}
                containerClassName="bg-purple-900 rounded-3xl overflow-hidden"
              />
            </ProcessCard>
          </motion.div>
        </div>
      </div>

      {/* Quote Section */}
      <motion.div
        className="mt-16 p-12 bg-gradient-to-r from-[#0A1A35] to-[#162947] dark:from-[#FFB32C] dark:to-[#E69500] rounded-3xl text-center text-white dark:text-[#0A1A35] relative overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-black/10 dark:bg-white/10"></div>
        <div className="relative z-10">
          <motion.div
            className="w-1 h-16 bg-white/30 dark:bg-[#0A1A35]/30 mx-auto mb-6"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="text-2xl md:text-3xl font-bold leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
          >
            "Excellence isn't a destination. It's a commitment we bring to every
            line of code, every pixel, every project."
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};
