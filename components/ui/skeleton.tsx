import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse animate-shine rounded-md bg-muted relative overflow-hidden",
        className
      )}
      {...props}
    >
      <span className="absolute inset-0 block bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine" />
    </div>
  );
}

export { Skeleton };
