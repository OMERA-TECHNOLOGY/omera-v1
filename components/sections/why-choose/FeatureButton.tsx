"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/MovingBorder";
import { features, itemVariants } from "./constants";

export const FeatureButton = ({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) => {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <Button
        key={index}
        borderRadius="1.75rem"
        duration={Math.floor(Math.random() * 10000 + 10000)}
        className="flex-1 text-white border-neutral-200 dark:border-slate-800"
      >
        <motion.div
          className="flex lg:flex-row flex-col lg:items-center p-3 gap-2 py-6 md:p-5 lg:p-10"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <motion.div
            className="w-8 h-8 text-accent"
            whileHover={{
              scale: 1.2,
              rotate: 360,
              transition: { duration: 0.6 },
            }}
          >
            <feature.icon className="w-full h-full" />
          </motion.div>
          <div className="lg:ms-5">
            <motion.h1
              className="text-start text-xl md:text-2xl font-bold"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              {feature.title}
            </motion.h1>
            <motion.p
              className="text-start text-white-100 mt-3 font-semibold"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
            >
              {feature.description}
            </motion.p>
          </div>
        </motion.div>
      </Button>
    </motion.div>
  );
};
