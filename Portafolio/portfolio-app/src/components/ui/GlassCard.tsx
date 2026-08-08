import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  glow?: boolean;
}

export function GlassCard({
  children,
  className,
  hover = false,
  glow = false,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm",
        hover &&
          "transition-all duration-300 hover:bg-white/[0.06] hover:border-white/[0.15] hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20",
        glow && "hover:shadow-blue-500/10",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
