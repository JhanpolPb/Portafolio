import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 rounded-xl cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none",
          {
            "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20 active:scale-95":
              variant === "primary",
            "bg-white/10 hover:bg-white/15 text-white border border-white/10 hover:border-white/20 backdrop-blur-sm active:scale-95":
              variant === "secondary",
            "hover:bg-white/5 text-white/70 hover:text-white": variant === "ghost",
            "border border-white/20 hover:border-white/40 text-white/80 hover:text-white active:scale-95":
              variant === "outline",
          },
          {
            "text-sm px-3 py-1.5": size === "sm",
            "text-sm px-4 py-2": size === "md",
            "text-base px-6 py-3": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button };
