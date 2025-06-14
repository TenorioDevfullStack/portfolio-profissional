"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  hover?: boolean;
}

export function GlassCard({
  children,
  className,
  intensity = 0.5,
  hover = true,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/20 dark:border-slate-700/40 bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl shadow-xl transition-all duration-300",
        hover &&
          "hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2 hover:ring-2 hover:ring-primary/20 focus-within:ring-2 focus-within:ring-primary/40",
        className
      )}
      style={{
        boxShadow: `0 8px 32px 0 rgba(31, 38, 135, ${intensity * 0.18})`,
      }}
      whileHover={hover ? { scale: 1.025 } : undefined}
      whileTap={hover ? { scale: 0.98 } : undefined}
      tabIndex={0}
      aria-label={props["aria-label"] || "Glass Card"}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-blue-100/10 dark:from-slate-800/30 dark:to-blue-900/10 opacity-60 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
