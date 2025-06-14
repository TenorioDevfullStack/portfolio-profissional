"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ShineShadowGradientBorder3DGlassParallaxRippleCardProps {
  children: React.ReactNode;
  className?: string;
  shineColor?: string;
  shadowColor?: string;
  gradientColors?: string[];
  borderColor?: string;
  intensity?: number;
  glassIntensity?: number;
  parallaxIntensity?: number;
  rippleColor?: string;
}

export function ShineShadowGradientBorder3DGlassParallaxRippleCard({
  children,
  className,
  shineColor = "rgba(255, 255, 255, 0.2)",
  shadowColor = "rgba(0, 0, 0, 0.2)",
  gradientColors = ["#ff0080", "#7928ca", "#ff4d4d"],
  borderColor = "#ff0080",
  intensity = 10,
  glassIntensity = 0.5,
  parallaxIntensity = 20,
  rippleColor = "rgba(255, 255, 255, 0.2)",
}: ShineShadowGradientBorder3DGlassParallaxRippleCardProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);
  const [ripples, setRipples] = React.useState<
    Array<{ x: number; y: number; id: number }>
  >([]);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [intensity, -intensity]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
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
    x.set(xPct);
    y.set(yPct);
    setMousePosition({ x: mouseX, y: mouseY });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRipples((prev) => [...prev, { x, y, id: Date.now() }]);
  };

  const handleAnimationComplete = (id: number) => {
    setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
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

  const borderStyle = {
    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${borderColor} 0%, transparent 50%)`,
  };

  const glassStyle = {
    boxShadow: `0 8px 32px 0 rgba(31, 38, 135, ${glassIntensity * 0.15})`,
  };

  const parallaxStyle = {
    transform: isHovered
      ? `translateZ(75px) translateX(${
          mousePosition.x * parallaxIntensity * 0.01
        }px) translateY(${mousePosition.y * parallaxIntensity * 0.01}px)`
      : "translateZ(75px)",
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        ...shadowStyle,
        ...glassStyle,
      }}
      className={cn(
        "group relative h-full w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg",
        className
      )}
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
      <motion.div
        className="absolute inset-0"
        style={borderStyle}
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="pointer-events-none absolute rounded-full"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: "100px",
            height: "100px",
            marginLeft: "-50px",
            marginTop: "-50px",
            background: rippleColor,
          }}
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.6 }}
          onAnimationComplete={() => handleAnimationComplete(ripple.id)}
        />
      ))}
      <motion.div
        style={{
          transformStyle: "preserve-3d",
          ...parallaxStyle,
        }}
        className="relative z-10 m-[1px] h-full w-full rounded-xl bg-background/50 p-6"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
