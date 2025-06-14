"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Card } from "./card";
import { cn } from "@/lib/utils";

interface ParallaxCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  intensity?: number;
}

export function ParallaxCard({
  children,
  intensity = 10,
  className,
  ...props
}: ParallaxCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-intensity, intensity],
    [intensity, -intensity]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-intensity, intensity],
    [-intensity, intensity]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct * intensity);
    y.set(yPct * intensity);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="perspective-1000"
    >
      <motion.div
        style={{
          transform: isHovered ? "translateZ(10px)" : "translateZ(0px)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        <Card
          className={cn(
            "bg-white/60 dark:bg-slate-900/60 backdrop-blur-lg border border-white/20 dark:border-slate-700/40 shadow-xl transition-all duration-300 overflow-hidden",
            "hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2 hover:ring-2 hover:ring-primary/20 focus-within:ring-2 focus-within:ring-primary/40",
            className
          )}
          {...props}
        >
          {children}
        </Card>
      </motion.div>
    </motion.div>
  );
}
