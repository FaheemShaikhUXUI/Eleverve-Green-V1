"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface TechGridBackgroundProps {
  className?: string;
  gridSize?: number;
  crosshairs?: boolean;
  opacity?: number;
}

export function TechGridBackground({
  className,
  gridSize = 48,
  crosshairs = true,
  opacity = 0.05,
}: TechGridBackgroundProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Repeating fine technical grid */}
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="tech-grid-pattern"
            width={gridSize}
            height={gridSize}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${gridSize} 0 L 0 0 0 ${gridSize}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.75"
              className="text-green/40"
            />
            {crosshairs && (
              <circle
                cx={gridSize}
                cy={gridSize}
                r="1"
                fill="currentColor"
                className="text-green/80"
              />
            )}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tech-grid-pattern)" />
      </svg>
    </div>
  );
}
