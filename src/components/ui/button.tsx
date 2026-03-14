import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "gradient" | "outline" | "ghost" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    
    const variants = {
      default: "bg-white/10 text-white hover:bg-white/20 border border-white/10",
      gradient: "bg-gradient-to-r from-primary to-secondary text-white shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] border-0",
      outline: "border-2 border-primary text-primary hover:bg-primary/10",
      ghost: "hover:bg-white/10 text-white",
      destructive: "bg-destructive/90 text-white hover:bg-destructive shadow-lg",
    };

    const sizes = {
      default: "h-11 px-6 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-14 rounded-xl px-8 text-lg font-semibold",
      icon: "h-11 w-11",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
