"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionConnectorProps {
  label?: string;
  sourceStage?: string;
  targetStage?: string;
  className?: string;
}

export function SectionConnector({
  label,
  sourceStage,
  targetStage,
  className,
}: SectionConnectorProps) {
  return (
    <div
      className={cn(
        "relative w-full py-8 flex flex-col items-center justify-center overflow-hidden pointer-events-none select-none",
        className
      )}
      aria-hidden="true"
    >
      {/* Central Vertical Energy Conduit */}
      <div className="relative h-16 w-[2px] bg-gradient-to-b from-line via-green/40 to-line">
        {/* Animated Traveling Packet of Energy */}
        <motion.div
          animate={{ y: [0, 64] }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 -left-[3px] w-2 h-2 rounded-full bg-green shadow-glow"
        />
      </div>

      {/* Connection Node Badge */}
      {(label || (sourceStage && targetStage)) && (
        <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-line bg-panel/90 backdrop-blur-md text-[10px] font-mono text-soft">
          <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
          <span>
            {label ? label : `${sourceStage} → ${targetStage}`}
          </span>
          <span className="text-green/80">⚡</span>
        </div>
      )}
    </div>
  );
}
