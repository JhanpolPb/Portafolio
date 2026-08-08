import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "success" | "warning";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        {
          "bg-white/10 text-white/80 border border-white/10": variant === "default",
          "border border-white/20 text-white/60": variant === "outline",
          "bg-emerald-500/20 text-emerald-400 border border-emerald-500/20": variant === "success",
          "bg-amber-500/20 text-amber-400 border border-amber-500/20": variant === "warning",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
