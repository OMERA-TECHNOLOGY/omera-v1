"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import { toast } from "sonner";

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

export const ContactForm = () => {
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
  );
};
