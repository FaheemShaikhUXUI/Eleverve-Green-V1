"use client";

import React, { useState } from "react";
import { technologyData } from "@/data/technology";
import { Sun, Wind, Droplets, Combine, BatteryCharging } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function ResourceSimulator() {
  const [selectedTech, setSelectedTech] = useState<string>("Solar");
  const [hoveredHour, setHoveredHour] = useState<number | null>(12);

  const tech =
    technologyData.buildingBlocks.find((b) => b.name === selectedTech) ||
    technologyData.buildingBlocks[0];

  const getTechIcon = (name: string) => {
    switch (name) {
      case "Solar":
        return <Sun className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />;
      case "Wind":
        return <Wind className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />;
      case "Hydro":
        return <Droplets className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />;
      case "Hybrid":
        return <Combine className="w-4 h-4 transition-transform duration-300 group-hover:rotate-90" />;
      case "Storage":
        return <BatteryCharging className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />;
      default:
        return <Sun className="w-4 h-4" />;
    }
  };

  // 24-hour hourly curve simulation data (MW scaled to 100 max)
  const getCurveHeights = (type: string): number[] => {
    switch (type) {
      case "Solar":
        return [0, 0, 0, 0, 0, 5, 20, 55, 85, 100, 95, 80, 50, 20, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      case "Wind":
        return [70, 75, 70, 60, 50, 40, 30, 25, 20, 20, 25, 30, 40, 50, 65, 80, 85, 90, 85, 80, 75, 75, 70, 70];
      case "Hydro":
        return [30, 30, 30, 35, 45, 60, 80, 85, 60, 50, 45, 45, 50, 55, 60, 75, 90, 95, 90, 80, 65, 50, 40, 35];
      case "Hybrid":
        return [55, 55, 50, 45, 45, 50, 65, 80, 85, 90, 85, 80, 70, 70, 75, 85, 90, 90, 85, 80, 70, 65, 60, 55];
      case "Storage":
        return [20, 20, 20, 20, 20, 25, 30, 45, 75, 90, 85, 65, 40, 35, 50, 75, 95, 100, 95, 85, 65, 40, 30, 20];
      default:
        return [30, 30, 30, 30, 40, 50, 60, 70, 80, 85, 80, 75, 70, 70, 75, 80, 85, 90, 85, 75, 60, 50, 40, 30];
    }
  };

  const curveData = getCurveHeights(selectedTech);
  const hours = [
    "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00",
    "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"
  ];

  const firmThreshold = 65; // MW baseline firm demand
  const activeIdx = hoveredHour !== null ? hoveredHour : 12;
  const currentGen = curveData[activeIdx];
  const delta = currentGen - firmThreshold;

  return (
    <div className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-xl rounded-none overflow-hidden transition-all duration-300">
      {/* 5-Column Architectural Selector Bar with Animated Fluid Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-0 border-b border-neutral-200 dark:border-neutral-800 divide-x divide-y sm:divide-y-0 divide-neutral-200 dark:divide-neutral-800 relative">
        {technologyData.buildingBlocks.map((item) => {
          const isSelected = item.name === selectedTech;
          return (
            <button
              key={item.name}
              type="button"
              onClick={() => setSelectedTech(item.name)}
              className={cn(
                "p-5 text-left transition-all duration-300 flex flex-col justify-between group rounded-none relative cursor-pointer",
                isSelected
                  ? "bg-emerald-50/70 dark:bg-emerald-950/20"
                  : "bg-white dark:bg-neutral-950 hover:bg-neutral-50 dark:hover:bg-neutral-900/60"
              )}
            >
              {/* Luminous Hover Beam */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Active Tab Spring Indicator */}
              {isSelected && (
                <motion.div
                  layoutId="activeTechUnderline"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  className="absolute bottom-0 left-0 right-0 h-[3px] bg-emerald-600 dark:bg-emerald-400 z-20 shadow-[0_0_10px_rgba(16,185,129,0.8)]"
                />
              )}

              <div className="flex items-center justify-between mb-3">
                <div
                  className={cn(
                    "w-8 h-8 flex items-center justify-center rounded-none border transition-all duration-300 group-hover:scale-105",
                    isSelected
                      ? "bg-emerald-600 border-emerald-600 text-white shadow-sm"
                      : "bg-neutral-100 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 group-hover:border-emerald-500/50 group-hover:text-emerald-600"
                  )}
                >
                  {getTechIcon(item.name)}
                </div>
                <span
                  className={cn(
                    "font-mono text-[9px] uppercase tracking-wider font-semibold transition-colors duration-200",
                    isSelected ? "text-emerald-700 dark:text-emerald-400" : "text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300"
                  )}
                >
                  {item.role}
                </span>
              </div>

              <div>
                <span
                  className={cn(
                    "block font-heading text-base font-bold tracking-tight transition-colors duration-200",
                    isSelected ? "text-neutral-900 dark:text-white" : "text-neutral-700 dark:text-neutral-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
                  )}
                >
                  {item.name}
                </span>
                <span className="font-mono text-[10px] text-neutral-400 flex items-center gap-1.5 mt-0.5">
                  {isSelected ? (
                    <>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">ACTIVE TELEMETRY</span>
                    </>
                  ) : (
                    "SELECT TO SIMULATE"
                  )}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Dispatch Telemetry Cockpit */}
      <div className="p-6 sm:p-8 lg:p-10">
        {/* Cockpit HUD Bar */}
        <div className="p-5 border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/40 mb-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4 rounded-none">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-[10px] font-mono uppercase tracking-widest font-bold rounded-none">
                DIURNAL PROFILE SIMULATION
              </span>
              <span className="text-neutral-400 font-mono text-xs">·</span>
              <span className="font-mono text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase">
                {tech.name} Stack
              </span>
            </div>
            <h4 className="text-xl font-bold font-heading text-neutral-900 dark:text-white tracking-tight">
              24-Hour Dispatch &amp; Offtake Envelope
            </h4>
          </div>

          {/* Real-Time Hour Readout HUD with AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedTech}-${activeIdx}`}
              initial={{ opacity: 0.8, y: -2 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15 }}
              className="flex flex-wrap items-center gap-4 text-xs font-mono bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-3 rounded-none shadow-xs"
            >
              <div>
                <span className="text-[10px] uppercase text-neutral-400 block">Scrubbed Hour</span>
                <span className="text-neutral-900 dark:text-white font-bold">{hours[activeIdx]}</span>
              </div>
              <div className="w-px h-6 bg-neutral-200 dark:bg-neutral-800" />
              <div>
                <span className="text-[10px] uppercase text-neutral-400 block">Simulated Output</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">{currentGen} MW</span>
              </div>
              <div className="w-px h-6 bg-neutral-200 dark:bg-neutral-800" />
              <div>
                <span className="text-[10px] uppercase text-neutral-400 block">Firm Threshold</span>
                <span className="text-amber-600 dark:text-amber-400 font-bold">{firmThreshold} MW</span>
              </div>
              <div className="w-px h-6 bg-neutral-200 dark:bg-neutral-800" />
              <div>
                <span className="text-[10px] uppercase text-neutral-400 block">Net Balance</span>
                <span
                  className={cn(
                    "font-bold",
                    delta >= 0 ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"
                  )}
                >
                  {delta >= 0 ? `+${delta} MW Surplus` : `${delta} MW Deficit`}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-4 px-1">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 bg-emerald-600 dark:bg-emerald-500 rounded-none inline-block shadow-xs" />
              <span className="text-neutral-800 dark:text-neutral-200 font-semibold">{tech.name} Generation Envelope</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-0 border-t-2 border-dashed border-amber-500 inline-block" />
              <span className="text-neutral-800 dark:text-neutral-200 font-semibold">Contracted Firm Threshold (65 MW)</span>
            </div>
          </div>
          <span className="text-[11px] text-neutral-400 hidden sm:inline">
            HOVER OVER BARS TO INSPECT HOURLY DISPATCH
          </span>
        </div>

        {/* Interactive 24-Hour Graph Stage */}
        <div className="relative h-60 sm:h-72 w-full flex items-end justify-between gap-1 pt-8 px-2 border-b border-l border-neutral-200 dark:border-neutral-800 bg-neutral-50/40 dark:bg-neutral-900/20">
          {/* Background Grid Lines */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-40">
            <div className="border-b border-dashed border-neutral-300 dark:border-neutral-700 w-full" />
            <div className="border-b border-dashed border-neutral-300 dark:border-neutral-700 w-full" />
            <div className="border-b border-dashed border-neutral-300 dark:border-neutral-700 w-full" />
            <div className="border-b border-dashed border-neutral-300 dark:border-neutral-700 w-full" />
          </div>

          {/* Reference Contracted Offtake Flat Firm Line */}
          <div
            className="absolute left-0 right-0 border-t-2 border-dashed border-amber-500 pointer-events-none z-10"
            style={{ bottom: `${firmThreshold}%` }}
          >
            <span className="absolute right-2 -top-5 font-mono text-[9px] uppercase tracking-wider text-amber-800 dark:text-amber-300 font-bold bg-amber-50 dark:bg-amber-950/70 border border-amber-300 dark:border-amber-800 px-1.5 py-0.5 rounded-none shadow-xs">
              CONTRACTED FIRM DELIVERY THRESHOLD (65 MW)
            </span>
          </div>

          {/* 24-Hour Interactive Bars with Spring Stagger Animation */}
          {curveData.map((height, idx) => {
            const isHovered = activeIdx === idx;
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredHour(idx)}
                className="flex-1 flex flex-col items-center h-full justify-end relative cursor-pointer z-10 group/bar"
              >
                {/* Active Column Laser Guide */}
                {isHovered && (
                  <motion.div
                    layoutId="activeColumnGuide"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="absolute inset-0 bg-emerald-500/15 border-x border-emerald-500/40 pointer-events-none z-0"
                  />
                )}

                {/* Animated Floating Tooltip */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.15 }}
                    className="absolute -top-11 bg-neutral-900 text-white px-2.5 py-1 rounded-none text-[10px] font-mono whitespace-nowrap shadow-xl z-30 pointer-events-none border border-neutral-700 flex items-center gap-1.5"
                  >
                    <span className="text-emerald-400 font-bold">{hours[idx]}</span>
                    <span className="text-neutral-500">·</span>
                    <span>{height} MW</span>
                  </motion.div>
                )}

                {/* Animated Spring Bar representation */}
                <motion.div
                  key={`${selectedTech}-${idx}`}
                  initial={{ height: 0, opacity: 0.4 }}
                  animate={{ height: `${height}%`, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 22,
                    delay: idx * 0.012
                  }}
                  className={cn(
                    "w-full rounded-none transition-all duration-200 ease-out origin-bottom",
                    isHovered
                      ? "bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.8)] scale-y-100 z-10"
                      : height > firmThreshold
                      ? "bg-emerald-600 dark:bg-emerald-500 group-hover/bar:bg-emerald-500"
                      : height > 30
                      ? "bg-emerald-600/80 dark:bg-emerald-500/80 group-hover/bar:bg-emerald-500"
                      : "bg-emerald-600/40 dark:bg-emerald-500/40 group-hover/bar:bg-emerald-500/70"
                  )}
                />
              </div>
            );
          })}
        </div>

        {/* 24 Hour Ticks */}
        <div className="flex justify-between text-[10px] font-mono text-neutral-500 mt-3 px-2">
          <span className="font-semibold">00:00 (Night)</span>
          <span>06:00 (Dawn)</span>
          <span className="font-semibold text-emerald-700 dark:text-emerald-400">12:00 (Solar Peak)</span>
          <span className="font-semibold text-amber-700 dark:text-amber-400">18:00 (Evening Peak)</span>
          <span className="font-semibold">23:00 (Night)</span>
        </div>

        {/* Selected Technology Building Block Specifications with Animated Morph */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTech}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-neutral-200 dark:border-neutral-800 mt-8 divide-y md:divide-y-0 md:divide-x divide-neutral-200 dark:divide-neutral-800 rounded-none bg-white dark:bg-neutral-950 overflow-hidden shadow-xs"
          >
            <div className="p-6 transition-colors duration-200 hover:bg-neutral-50 dark:hover:bg-neutral-900/50">
              <span className="block font-mono text-[10px] uppercase text-amber-700 dark:text-amber-400 tracking-wider mb-2 font-bold">
                // GENERATION CHARACTERISTIC
              </span>
              <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed font-medium">
                {tech.generationProfile}
              </p>
            </div>

            <div className="p-6 bg-emerald-50/30 dark:bg-emerald-950/20 transition-colors duration-200 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/30">
              <span className="block font-mono text-[10px] uppercase text-emerald-700 dark:text-emerald-400 tracking-wider mb-2 font-bold">
                // DISPATCH FLEXIBILITY
              </span>
              <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed font-medium">
                {tech.dispatchCharacteristics}
              </p>
            </div>

            <div className="p-6 transition-colors duration-200 hover:bg-neutral-50 dark:hover:bg-neutral-900/50">
              <span className="block font-mono text-[10px] uppercase text-sky-700 dark:text-sky-400 tracking-wider mb-2 font-bold">
                // DELIVERED-COST VALUE
              </span>
              <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed font-medium">
                {tech.commercialValue}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
