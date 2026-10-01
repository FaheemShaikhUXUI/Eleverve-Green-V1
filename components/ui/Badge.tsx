import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "green" | "amber" | "blue" | "outline";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const variantStyles = {
    default: "bg-panel-2 text-soft border border-line",
    green: "bg-green/10 text-green border border-green/20",
    amber: "bg-amber/10 text-amber border border-amber/20",
    blue: "bg-blue/10 text-blue border border-blue/20",
    outline: "border border-line text-soft",
  }[variant];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-mono text-[10px] tracking-wider uppercase font-medium",
        variantStyles,
        className
      )}
    >
      {children}
    </span>
  );
}
