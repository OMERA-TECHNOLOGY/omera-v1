"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Send } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
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

const fadeInUp = {
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

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    budget: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log(formData);
    toast.success("Message sent! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", project: "", budget: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="py-32 px-6 sm:px-8 lg:px-12 relative overflow-hidden bg-background"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl pointer-events-none"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid lg:grid-cols-2 gap-16"
        >
          {/* Left Content */}
          <motion.div variants={staggerChildren}>
            <motion.h2
              className="text-5xl sm:text-6xl font-bold mb-6"
              variants={fadeInUp}
            >
              Let's Build
              <br />
              <motion.span
                className="text-accent"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Something Amazing
              </motion.span>
            </motion.h2>

            <motion.p
              className="text-xl text-muted-foreground mb-12 leading-relaxed"
              variants={itemVariants}
            >
              Ready to transform your vision into reality? Share your project
              idea and let's discuss how we can help you succeed.
            </motion.p>

            {/* Contact Info */}
            <motion.div className="space-y-6" variants={staggerChildren}>
              <motion.div
                className="flex items-start gap-4 group cursor-pointer"
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0"
                  whileHover={{
                    scale: 1.1,
                    rotate: 360,
                    transition: { duration: 0.6 },
                  }}
                >
                  <Mail className="w-6 h-6 text-accent" />
                </motion.div>
                <div>
                  <p className="font-semibold mb-1">Email Us</p>
                  <a
                    href="mailto:hello@apexdevs.com"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    hello@omera.tech
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 group cursor-pointer"
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0"
                  whileHover={{
                    scale: 1.1,
                    rotate: 360,
                    transition: { duration: 0.6 },
                  }}
                >
                  <MessageSquare className="w-6 h-6 text-accent" />
                </motion.div>
                <div>
                  <p className="font-semibold mb-1">Talk to Founders</p>
                  <p className="text-muted-foreground">
                    Direct access to our founding team
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <motion.div
                      className="w-2 h-2 rounded-full bg-green-500"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.7, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <span className="text-sm text-green-500">
                      Available now
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="mt-12 glass-morph rounded-2xl p-6"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <p className="text-sm text-muted-foreground mb-4">
                Trusted by startups and enterprises
              </p>
              <div className="flex items-center gap-6 text-sm">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="font-bold text-accent">4.9/5</span> Rating
                </motion.div>
                <div className="w-px h-6 bg-border" />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="font-bold text-accent">100%</span>{" "}
                  Satisfaction
                </motion.div>
                <div className="w-px h-6 bg-border" />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="font-bold text-accent">24h</span> Response
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Form */}
          <motion.div variants={fadeInUp}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="glass-morph p-8 lg:p-12 border-border/50 backdrop-blur-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <Label
                      htmlFor="name"
                      className="text-base font-semibold mb-2 block"
                    >
                      Your Name
                    </Label>
                    <motion.div whileHover={{ scale: 1.01 }}>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Alemayehu Tadele"
                        required
                        className="bg-background/50 border-border/50 focus:border-accent h-12 transition-all duration-300"
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <Label
                      htmlFor="email"
                      className="text-base font-semibold mb-2 block"
                    >
                      Email Address
                    </Label>
                    <motion.div whileHover={{ scale: 1.01 }}>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alemayehe@omera.tech"
                        required
                        className="bg-background/50 border-border/50 focus:border-accent h-12 transition-all duration-300"
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <Label
                      htmlFor="project"
                      className="text-base font-semibold mb-2 block"
                    >
                      Project Idea
                    </Label>
                    <motion.div whileHover={{ scale: 1.01 }}>
                      <Textarea
                        id="project"
                        name="project"
                        value={formData.project}
                        onChange={handleChange}
                        placeholder="Tell us about your project vision, goals, and requirements..."
                        required
                        rows={5}
                        className="bg-background/50 border-border/50 focus:border-accent resize-none transition-all duration-300"
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <Label
                      htmlFor="budget"
                      className="text-base font-semibold mb-2 block"
                    >
                      Budget Range (Optional)
                    </Label>
                    <motion.div whileHover={{ scale: 1.01 }}>
                      <Input
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        placeholder="e.g., $10k - $50k"
                        className="bg-background/50 border-border/50 focus:border-accent h-12 transition-all duration-300"
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full bg-accent hover:bg-accent/90 text-primary font-bold text-lg h-14 rounded-xl group relative overflow-hidden"
                      >
                        <motion.span
                          className="flex items-center justify-center"
                          animate={{
                            x: isSubmitting ? [0, 5, 0] : 0,
                          }}
                          transition={{
                            duration: 1,
                            repeat: isSubmitting ? Infinity : 0,
                          }}
                        >
                          {isSubmitting ? "Sending..." : "Start the Project"}
                          <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.span>

                        {/* Loading animation */}
                        {isSubmitting && (
                          <motion.div
                            className="absolute inset-0 bg-accent/80"
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                        )}
                      </Button>
                    </motion.div>
                  </motion.div>

                  <motion.p
                    className="text-xs text-center text-muted-foreground"
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    We typically respond within 24 hours. Your information is
                    kept confidential.
                  </motion.p>
                </form>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
