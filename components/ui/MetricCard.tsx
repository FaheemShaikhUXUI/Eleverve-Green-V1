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
        "p-6 sm:p-8 bg-white [.section-theme-break_&]:bg-black/50 border border-neutral-200 [.section-theme-break_&]:border-white/15 rounded-none relative overflow-hidden transition-all duration-500 ease-out flex flex-col justify-between group",
        "hover:border-emerald-500 hover:-translate-y-1.5 hover:shadow-[0_20px_35px_-10px_rgba(0,0,0,0.1)] [.section-theme-break_&]:hover:shadow-[0_20px_35px_-10px_rgba(0,0,0,0.7)]",
        className
      )}
    >
      {/* Luminous Top Hover Beam */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30" />

      <div>
        <div className="flex items-baseline gap-1.5 mb-2">
          <span className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-emerald-600 [.section-theme-break_&]:text-emerald-400 tracking-tight leading-none group-hover:scale-105 transition-transform duration-300 origin-left">
            {value}
          </span>
          {suffix && (
            <span className="font-heading text-2xl sm:text-3xl font-bold text-emerald-600 [.section-theme-break_&]:text-emerald-300">
              {suffix}
            </span>
          )}
        </div>

        <div className="font-mono text-xs uppercase tracking-wider text-neutral-900 [.section-theme-break_&]:text-white font-bold mb-3 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-none bg-emerald-500" />
          <span>{label}</span>
        </div>

        <p className="text-xs sm:text-sm text-neutral-600 [.section-theme-break_&]:text-neutral-300 leading-relaxed font-normal">
          {description}
        </p>
      </div>

      {/* Subtle bottom indicator status */}
      <div className="mt-6 pt-3 border-t border-neutral-100 [.section-theme-break_&]:border-white/10 flex items-center justify-between text-[10px] font-mono text-neutral-400 [.section-theme-break_&]:text-white/40">
        <span>AUDITED PRECEDENT</span>
        <span className="text-emerald-600 [.section-theme-break_&]:text-emerald-400 group-hover:translate-x-1 transition-transform">VERIFIED →</span>
      </div>
    </div>
  );
}
