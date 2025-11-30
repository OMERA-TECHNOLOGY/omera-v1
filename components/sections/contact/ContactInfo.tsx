"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare } from "lucide-react";

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

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const ContactInfo = () => {
  return (
    <motion.div variants={staggerChildren}>
      <motion.h2
        className="text-5xl sm:text-6xl font-bold mb-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 100,
        }}
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
              href="mailto:hello@omera.tech"
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
  );
};
