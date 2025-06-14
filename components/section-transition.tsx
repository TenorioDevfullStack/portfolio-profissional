"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTransition({
  children,
  className = "",
}: SectionTransitionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-20% 0px -20% 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
        delay: 0.1,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
