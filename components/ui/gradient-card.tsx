"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientCardProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  duration?: number;
}

export function GradientCard({
  children,
  className,
  colors = ["#ff0080", "#7928ca", "#ff4d4d"],
  duration = 10,
}: GradientCardProps) {
  const [gradientPosition, setGradientPosition] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setGradientPosition((prev) => (prev + 1) % 360);
    }, (duration * 1000) / 360);

    return () => clearInterval(interval);
  }, [duration]);

  const gradientStyle = {
    background: `linear-gradient(${gradientPosition}deg, ${colors.join(", ")})`,
    backgroundSize: "200% 200%",
  };

  return (
    <motion.div
      className={cn("relative overflow-hidden rounded-xl p-[1px]", className)}
      style={gradientStyle}
    >
      <div className="relative z-10 h-full w-full rounded-xl bg-background p-6">
        {children}
      </div>
    </motion.div>
  );
}
