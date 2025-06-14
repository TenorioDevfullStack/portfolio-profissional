"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ShineShadowGradientCardProps {
  children: React.ReactNode;
  className?: string;
  shineColor?: string;
  shadowColor?: string;
  gradientColors?: string[];
}

export function ShineShadowGradientCard({
  children,
  className,
  shineColor = "rgba(255, 255, 255, 0.2)",
  shadowColor = "rgba(0, 0, 0, 0.2)",
  gradientColors = ["#ff0080", "#7928ca", "#ff4d4d"],
}: ShineShadowGradientCardProps) {
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

  const gradientStyle = {
    background: `linear-gradient(${mousePosition.x}deg, ${gradientColors.join(
      ", "
    )})`,
    backgroundSize: "200% 200%",
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
      <motion.div
        className="pointer-events-none absolute -inset-[100%]"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${shineColor} 0%, transparent 50%)`,
        }}
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={gradientStyle}
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
