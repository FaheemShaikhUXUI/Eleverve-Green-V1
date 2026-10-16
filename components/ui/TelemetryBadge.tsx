"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Activity } from "lucide-react";

interface TelemetryBadgeProps {
  className?: string;
  showFrequency?: boolean;
}

export function TelemetryBadge({ className, showFrequency = true }: TelemetryBadgeProps) {
  // Live subtle fluctuation around 50.00 Hz (e.g. 49.98 to 50.02)
  const [freq, setFreq] = useState("50.00");

  useEffect(() => {
    const interval = setInterval(() => {
      const delta = (Math.random() - 0.5) * 0.04;
      setFreq((50.0 + delta).toFixed(2));
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5 px-3 py-1 rounded-full font-mono text-[10px] tracking-wider uppercase border border-line bg-panel/80 backdrop-blur-md text-soft",
        className
      )}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green" />
      </span>
      <span className="font-semibold text-ink">SYS: OPTIMAL</span>
      {showFrequency && (
        <>
          <span className="text-faint">|</span>
          <span className="text-soft flex items-center gap-1">
            <Activity className="w-3 h-3 text-green" />
            <span className="text-ink font-semibold">{freq} Hz</span>
          </span>
        </>
      )}
    </div>
  );
}
