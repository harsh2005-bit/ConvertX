"use client";

import React from "react";
import { motion } from "framer-motion";

interface FloatingElementProps {
  children: React.ReactNode;
  duration?: number;
  distance?: number;
  delay?: number;
  className?: string;
  rotation?: number;
}

export const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  duration = 5,
  distance = 8,
  delay = 0,
  className = "",
  rotation = 1.5,
}) => {
  return (
    <motion.div
      animate={{
        y: [-distance / 2, distance / 2, -distance / 2],
        rotate: [-rotation, rotation, -rotation],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
