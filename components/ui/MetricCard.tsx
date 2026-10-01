import React from "react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  value: string;
  suffix?: string;
  label: string;
  description: string;
  className?: string;
}

export function MetricCard({
  value,
  suffix,
  label,
  description,
  className,
}: MetricCardProps) {
  return (
    <div
      className={cn(
        "p-6 sm:p-8 bg-panel border border-line rounded-2xl relative overflow-hidden transition-all duration-300 hover:border-green/40 hover:-translate-y-1 hover:shadow-card group",
        className
      )}
    >
      <div className="flex items-baseline gap-1 mb-2">
        <span className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-green tracking-tight leading-none">
          {value}
        </span>
        {suffix && (
          <span className="font-heading text-2xl sm:text-3xl font-normal text-green/90">
            {suffix}
          </span>
        )}
      </div>

      <div className="font-mono text-xs uppercase tracking-wider text-amber font-semibold mb-2">
        {label}
      </div>

      <p className="text-sm text-soft leading-relaxed font-normal">
        {description}
      </p>

      {/* Subtle corner indicator line */}
      <div className="absolute top-0 right-0 w-8 h-[2px] bg-green/30 group-hover:bg-green group-hover:w-16 transition-all duration-500" />
    </div>
  );
}
