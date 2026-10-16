"use client";

import React, { useState, useEffect } from "react";
import { Play, Pause, Sun, Moon, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function EnergyDayCycleVisualizer() {
  const [currentHour, setCurrentHour] = useState<number>(17); // 5:00 PM default as in screenshot
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentHour((prev) => (prev + 1) % 24);
    }, 900);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Curve data points for 24 hours
  const hours = Array.from({ length: 24 }, (_, i) => i);

  // Solar generation envelope (%)
  const getSolarGen = (h: number) => {
    if (h < 6 || h > 18) return 0;
    // Bell curve between 6 and 18, peaking at 12
    const mid = 12;
    const diff = Math.abs(h - mid);
    return Math.max(0, Math.round(100 * Math.cos((diff / 6) * (Math.PI / 2))));
  };

  // Typical Offtaker Demand (%)
  const getDemand = (h: number) => {
    if (h >= 9 && h <= 21) return 85;
    return 65; // Baseload night
  };

  const currentSolar = getSolarGen(currentHour);

  // Time-of-day phases
  const getPhaseInfo = (h: number) => {
    if (h >= 10 && h <= 14) {
      return {
        name: "Midday Solar Surplus",
        status: "SURPLUS & CURTAILMENT RISK",
        desc: "Solar generation peaks at 100%. Without storage or firm shaping, excess solar faces severe grid curtailment by SLDC.",
        color: "text-amber",
        badgeBg: "bg-amber/10 border-amber/30 text-amber",
      };
    } else if (h >= 17 && h <= 21) {
      return {
        name: "Evening Peak Demand Deficit",
        status: "ACUTE HOUR DEFICIT",
        desc: "Commercial and residential load surges while solar output drops to zero. This is the hour-deficit market where firm power delivers critical value.",
        color: "text-rose-500",
        badgeBg: "bg-rose-500/10 border-rose-500/30 text-rose-500",
      };
    } else if (h >= 6 && h < 10) {
      return {
        name: "Morning Solar Ramp",
        status: "GRID SYNCHRONIZATION",
        desc: "Daylight ramps solar generation upwards to meet morning factory & commercial shift start times.",
        color: "text-emerald-500",
        badgeBg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-500",
      };
    } else {
      return {
        name: "Night Baseload Operation",
        status: "FIRM OFF-PEAK SHAPING",
        desc: "Zero solar generation. Offtaker contracted load is supported by evening wind generation and battery storage (BESS) dispatch.",
        color: "text-blue",
        badgeBg: "bg-blue/10 border-blue/30 text-blue",
      };
    }
  };

  const currentPhase = getPhaseInfo(currentHour);

  return (
    <div className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-6 sm:p-10 rounded-none shadow-sm relative overflow-hidden">
      {/* Top Header & Simulation Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <Clock className="w-4 h-4 text-green" />
            <span className="font-mono text-xs uppercase tracking-widest text-green font-semibold">
              Interactive Energy Day Cycle Simulation
            </span>
          </div>
          <h4 className="text-xl sm:text-2xl font-bold text-ink tracking-tight">
            The Diurnal Gap: Why Firm Power Matters
          </h4>
        </div>

        {/* Hour Scrubber Indicator & Play/Pause */}
        <div className="flex items-center gap-3">
          <div className="px-3.5 py-1.5 rounded-none bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 font-mono text-xs flex items-center gap-2">
            {currentHour >= 6 && currentHour < 18 ? (
              <Sun className="w-3.5 h-3.5 text-amber" />
            ) : (
              <Moon className="w-3.5 h-3.5 text-blue" />
            )}
            <span className="font-bold text-ink">
              {currentHour.toString().padStart(2, "0")}:00 hrs
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className={cn(
              "inline-flex items-center gap-2 px-4 py-1.5 rounded-none font-mono text-xs transition-all cursor-pointer border",
              isPlaying
                ? "bg-green text-white border-green shadow-sm"
                : "bg-neutral-50 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 hover:border-green text-ink hover:text-green"
            )}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isPlaying ? "Pause" : "Play 24H Cycle"}</span>
          </button>
        </div>
      </div>

      {/* 24-HOUR VISUAL SVG GRAPH */}
      <div className="relative border border-neutral-200 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-900/40 rounded-none p-6 sm:p-8 mb-6 overflow-hidden">
        {/* Legend */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 text-xs font-mono">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-none bg-amber" />
              <span className="text-soft">Solar Generation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-0.5 border-t border-dashed border-ink/60" />
              <span className="text-soft">Contracted Demand</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-none bg-green" />
              <span className="text-ink font-semibold">Eleverve Firm Power</span>
            </div>
          </div>

          <span className={cn("px-2.5 py-1 rounded-none text-[10px] font-mono uppercase font-semibold border", currentPhase.badgeBg)}>
            {currentPhase.status}
          </span>
        </div>

        {/* 24-Hour Bar Matrix with Active Time Needle */}
        <div className="relative h-48 sm:h-56 w-full flex items-end justify-between gap-1 pt-6 px-1 border-b border-neutral-200 dark:border-neutral-800">
          {hours.map((h) => {
            const isCurrent = h === currentHour;
            const solar = getSolarGen(h);
            const demand = getDemand(h);

            return (
              <div
                key={h}
                onClick={() => {
                  setCurrentHour(h);
                  setIsPlaying(false);
                }}
                className={cn(
                  "flex-1 flex flex-col items-center h-full justify-end group cursor-pointer relative",
                  isCurrent ? "z-20" : "z-10"
                )}
              >
                {/* Active Hour Marker Needle */}
                {isCurrent && (
                  <motion.div
                    layoutId="activeHourNeedle"
                    className="absolute -top-3 bottom-0 w-full rounded-none bg-emerald-500/15 border-x border-t-2 border-emerald-500 pointer-events-none"
                  />
                )}

                {/* Solar Bar */}
                <div
                  style={{ height: `${solar}%` }}
                  className={cn(
                    "w-full rounded-none transition-all duration-300",
                    isCurrent ? "bg-amber shadow-sm" : "bg-amber/45 group-hover:bg-amber/75"
                  )}
                />

                {/* Demand Reference Line Tick */}
                <div
                  style={{ bottom: `${demand}%` }}
                  className="absolute left-0 right-0 h-[2px] border-t border-dashed border-neutral-400 dark:border-neutral-500 pointer-events-none"
                />
              </div>
            );
          })}
        </div>

        {/* Hour Labels */}
        <div className="flex justify-between text-[10px] font-mono text-neutral-400 mt-2 px-1">
          <span>00:00</span>
          <span>06:00 (Sunrise)</span>
          <span>12:00 (Peak Sun)</span>
          <span>18:00 (Sunset)</span>
          <span>23:00</span>
        </div>

        {/* Interactive Scrub Slider */}
        <div className="mt-6">
          <input
            type="range"
            min="0"
            max="23"
            value={currentHour}
            onChange={(e) => {
              setCurrentHour(parseInt(e.target.value));
              setIsPlaying(false);
            }}
            className="w-full accent-green cursor-pointer h-1.5 bg-neutral-200 dark:bg-neutral-800 rounded-none"
          />
        </div>
      </div>

      {/* Active Phase Telemetry Box */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentHour}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center border border-neutral-200 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-900/40 rounded-none p-6"
        >
          <div className="md:col-span-8">
            <span className={cn("font-mono text-xs uppercase font-bold tracking-wider block mb-1.5", currentPhase.color)}>
              {currentPhase.name} · {currentHour.toString().padStart(2, "0")}:00 hrs
            </span>
            <p className="text-sm text-soft leading-relaxed font-normal">
              {currentPhase.desc}
            </p>
          </div>

          <div className="md:col-span-4 grid grid-cols-2 gap-3 text-center font-mono">
            <div className="p-4 rounded-none bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800">
              <span className="block text-[10px] text-neutral-400 uppercase tracking-wider mb-0.5">Solar Output</span>
              <span className="text-xl font-bold text-amber">{currentSolar}%</span>
            </div>
            <div className="p-4 rounded-none bg-emerald-500/10 border border-emerald-500/30">
              <span className="block text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold uppercase tracking-wider mb-0.5">Delivered Power</span>
              <span className="text-xl font-bold text-emerald-600 dark:text-emerald-400">100% Firm</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
