import React from "react";
import { platformCapabilities } from "@/data/platform";
import { cn } from "@/lib/utils";

export function CapabilitiesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {platformCapabilities.map((cap, idx) => {
        const isBlueTopic = idx % 2 === 1;
        return (
          <div
            key={cap.number}
            className={cn(
              "p-6 sm:p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-card relative overflow-hidden group border",
              isBlueTopic
                ? "bg-panel-2 border-blue/20 hover:border-blue/50"
                : "bg-panel border-line hover:border-green/40",
              cap.isWide && "md:col-span-2 bg-gradient-to-br from-panel via-panel to-panel-2"
            )}
          >
            <div className="flex items-center justify-between mb-4">
              <span
                className={cn(
                  "font-mono text-xs uppercase tracking-widest font-semibold",
                  isBlueTopic ? "text-blue" : "text-amber"
                )}
              >
                {cap.number} · {cap.title}
              </span>
              <span
                className={cn(
                  "w-2 h-2 rounded-full transition-all group-hover:scale-125",
                  isBlueTopic ? "bg-blue" : "bg-green"
                )}
              />
            </div>

          <h3 className="text-xl sm:text-2xl font-semibold text-ink tracking-tight mb-3">
            {cap.subtitle}
          </h3>

          <p className="text-sm sm:text-base text-soft leading-relaxed font-normal">
            {cap.description}
          </p>

          <div className="mt-6 pt-4 border-t border-line/60 flex items-center justify-between">
            <span className="font-mono text-[10px] text-faint uppercase tracking-wider">
              Platform Architecture Principle
            </span>
            <span className="font-mono text-[10px] text-green uppercase font-semibold">
              Institutional Standard
            </span>
          </div>
        </div>
      );
      })}
    </div>
  );
}
