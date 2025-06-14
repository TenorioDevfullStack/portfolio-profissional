"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ShadowCardProps {
  children: React.ReactNode;
  className?: string;
  shadowColor?: string;
}

export function ShadowCard({
  children,
  className,
  shadowColor = "rgba(0, 0, 0, 0.2)",
}: ShadowCardProps) {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const shadowStyle = {
    boxShadow: isHovered
      ? `${mousePosition.x - 50}px ${
          mousePosition.y - 50
        }px 50px ${shadowColor}`
      : "none",
  };

  return (
    <motion.div
      className={cn(
        "group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      style={shadowStyle}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
