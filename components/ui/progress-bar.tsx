"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
  showValue?: boolean;
  label?: string;
}

export function ProgressBar({
  value,
  max = 100,
  className,
  showValue = true,
  label,
}: ProgressBarProps) {
  const percentage = (value / max) * 100;

  return (
    <div className={cn("w-full", className)}>
      {label && (
        <div className="flex justify-between mb-2">
          <span className="text-sm text-foreground/80">{label}</span>
          {showValue && (
            <span className="text-sm text-foreground/80">{percentage}%</span>
          )}
        </div>
      )}
      <div className="h-2 w-full bg-background/20 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{
            duration: 1,
            ease: [0.4, 0, 0.2, 1],
          }}
        />
      </div>
    </div>
  );
}
