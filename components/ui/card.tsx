import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    hover?: boolean;
    glass?: boolean;
  }
>(({ className, hover = true, glass = true, ...props }, ref) => (
  <motion.div
    ref={ref}
    className={cn(
      "relative rounded-xl border bg-card text-card-foreground shadow-lg transition-all duration-300 overflow-hidden",
      glass &&
        "backdrop-blur-lg bg-white/60 dark:bg-slate-900/60 border border-white/20 dark:border-slate-700/40 shadow-xl",
      hover &&
        "hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2 hover:ring-2 hover:ring-primary/20 focus-within:ring-2 focus-within:ring-primary/40",
      className
    )}
    whileHover={hover ? { scale: 1.025 } : undefined}
    whileTap={hover ? { scale: 0.98 } : undefined}
    tabIndex={0}
    aria-label={props["aria-label"] || "Card"}
    {...props}
  >
    {/* Efeito glassmorphism extra */}
    {glass && (
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/30 to-blue-100/10 dark:from-slate-800/30 dark:to-blue-900/10 opacity-60" />
    )}
    {props.children}
  </motion.div>
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight group-hover:text-primary transition-colors duration-300",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300",
      className
    )}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
