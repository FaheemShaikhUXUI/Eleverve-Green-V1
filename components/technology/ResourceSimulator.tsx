"use client";

import React, { useState, useEffect } from "react";
import { technologyData } from "@/data/technology";
import {
  Sun,
  Wind,
  Droplets,
  Combine,
  BatteryCharging,
  Play,
  Pause,
  RotateCcw,
  Zap,
  Activity,
  TrendingUp,
  Cpu,
  Radio,
  Sliders,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function ResourceSimulator() {
  const [selectedTech, setSelectedTech] = useState<string>("Solar");
  const [hoveredHour, setHoveredHour] = useState<number | null>(12);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const tech =
    technologyData.buildingBlocks.find((b) => b.name === selectedTech) ||
    technologyData.buildingBlocks[0];

  // Auto-play 24-hour diurnal cycle simulation
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setHoveredHour((prev) => (prev === null || prev >= 23 ? 0 : prev + 1));
    }, 650);
    return () => clearInterval(interval);
  }, [isPlaying]);

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

  // Thematic Cyber-Energy Styling for each resource stack
  const techThemes: Record<
    string,
    {
      primary: string;
      accentText: string;
      glowColor: string;
      borderAccent: string;
      tagBg: string;
      barGradient: string;
      barActiveGlow: string;
      cuf: string;
      rampRate: string;
      firmness: string;
    }
  > = {
    Solar: {
      primary: "#f59e0b",
      accentText: "text-amber-400",
      glowColor: "rgba(245, 158, 11, 0.7)",
      borderAccent: "border-amber-500/50",
      tagBg: "bg-amber-500/15 border-amber-400/40 text-amber-300",
      barGradient: "from-amber-600/90 via-amber-500 to-yellow-300",
      barActiveGlow: "bg-gradient-to-t from-amber-500 to-yellow-300 shadow-[0_0_24px_rgba(245,158,11,0.9)]",
      cuf: "22% - 26%",
      rampRate: "Diurnal Peak Solar Ramp",
      firmness: "Intermittent Solar Bell",
    },
    Wind: {
      primary: "#06b6d4",
      accentText: "text-cyan-400",
      glowColor: "rgba(6, 182, 212, 0.7)",
      borderAccent: "border-cyan-500/50",
      tagBg: "bg-cyan-500/15 border-cyan-400/40 text-cyan-300",
      barGradient: "from-cyan-700/90 via-cyan-500 to-teal-300",
      barActiveGlow: "bg-gradient-to-t from-cyan-500 to-teal-300 shadow-[0_0_24px_rgba(6,182,212,0.9)]",
      cuf: "32% - 38%",
      rampRate: "Evening Aerodynamic Ramp",
      firmness: "Night-Shift Counterweight",
    },
    Hydro: {
      primary: "#3b82f6",
      accentText: "text-blue-400",
      glowColor: "rgba(59, 130, 246, 0.7)",
      borderAccent: "border-blue-500/50",
      tagBg: "bg-blue-500/15 border-blue-400/40 text-blue-300",
      barGradient: "from-blue-700/90 via-indigo-500 to-cyan-300",
      barActiveGlow: "bg-gradient-to-t from-blue-500 to-cyan-300 shadow-[0_0_24px_rgba(59,130,246,0.9)]",
      cuf: "45% - 60%",
      rampRate: "< 3 Min Spinning Reserve",
      firmness: "Dispatchable Kinetic Inertia",
    },
    Hybrid: {
      primary: "#10b981",
      accentText: "text-emerald-400",
      glowColor: "rgba(16, 185, 129, 0.7)",
      borderAccent: "border-emerald-500/50",
      tagBg: "bg-emerald-500/15 border-emerald-400/40 text-emerald-300",
      barGradient: "from-emerald-700/90 via-teal-500 to-emerald-300",
      barActiveGlow: "bg-gradient-to-t from-emerald-500 to-green-300 shadow-[0_0_24px_rgba(16,185,129,0.9)]",
      cuf: "48% - 55%",
      rampRate: "Continuous Co-located Blend",
      firmness: "High-CUF Shared Substation",
    },
    Storage: {
      primary: "#a855f7",
      accentText: "text-purple-400",
      glowColor: "rgba(168, 85, 247, 0.7)",
      borderAccent: "border-purple-500/50",
      tagBg: "bg-purple-500/15 border-purple-400/40 text-purple-300",
      barGradient: "from-purple-700/90 via-fuchsia-500 to-pink-300",
      barActiveGlow: "bg-gradient-to-t from-purple-500 to-pink-300 shadow-[0_0_24px_rgba(168,85,247,0.9)]",
      cuf: "92%+ Round-Trip Efficiency",
      rampRate: "< 200ms Inverter Response",
      firmness: "Arbitrage & Peak Shaping",
    },
  };

  const theme = techThemes[selectedTech] || techThemes.Solar;

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

  // Grid condition status descriptor based on current generation & time
  const getGridStatus = (hourIdx: number, gen: number) => {
    if (hourIdx >= 10 && hourIdx <= 14 && gen > 80) return "MIDDAY SOLAR SURPLUS";
    if (hourIdx >= 18 && hourIdx <= 22 && gen < firmThreshold) return "EVENING PEAK DEFICIT";
    if (gen >= firmThreshold) return "FIRM RTC COMPLIANT";
    if (hourIdx < 6 || hourIdx > 22) return "NIGHT BASELOAD GAP";
    return "DISPATCH BALANCING";
  };

  return (
    <div className="relative border border-neutral-800 bg-[#070b14] shadow-[0_25px_70px_-15px_rgba(0,0,0,0.9),0_0_50px_rgba(16,185,129,0.12)] rounded-none overflow-hidden transition-all duration-500">
      {/* Sci-Fi HUD Corner Reticles */}
      <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-emerald-400 pointer-events-none z-30 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
      <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-emerald-400 pointer-events-none z-30 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
      <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-emerald-400 pointer-events-none z-30 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
      <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-emerald-400 pointer-events-none z-30 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />

      {/* Futuristic Telemetry Header Banner */}
      <div className="px-5 py-2.5 bg-black/80 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,1)]" />
            </span>
            <span className="text-white font-bold tracking-widest uppercase text-[10px]">
              RTC DISPATCH COCKPIT // v3.4
            </span>
          </div>
          <span className="hidden sm:inline text-white/20">|</span>
          <span className="hidden sm:inline text-neutral-400">GRID FREQUENCY: <span className="text-emerald-400 font-bold">50.02 Hz</span></span>
          <span className="hidden md:inline text-white/20">|</span>
          <span className="hidden md:inline text-neutral-400">RESOLUTION: <span className="text-sky-400 font-bold">15-MIN TIME BLOCKS</span></span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold tracking-wider">
            <Radio className="w-3 h-3 animate-pulse" />
            TELEMETRY LIVE
          </div>
        </div>
      </div>

      {/* 5-Column High-Tech Segmented Selector Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-0 border-b border-white/10 divide-x divide-y sm:divide-y-0 divide-white/10 relative bg-black/40">
        {technologyData.buildingBlocks.map((item) => {
          const isSelected = item.name === selectedTech;
          const itemTheme = techThemes[item.name] || techThemes.Solar;

          return (
            <button
              key={item.name}
              type="button"
              onClick={() => {
                setSelectedTech(item.name);
                setIsPlaying(false);
              }}
              className={cn(
                "p-4 sm:p-5 text-left transition-all duration-300 flex flex-col justify-between group rounded-none relative cursor-pointer overflow-hidden",
                isSelected
                  ? "bg-gradient-to-b from-white/[0.08] to-white/[0.02] shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]"
                  : "bg-transparent hover:bg-white/[0.04]"
              )}
            >
              {/* Top Luminous Neon Beam */}
              <div
                className={cn(
                  "absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-300 pointer-events-none",
                  isSelected
                    ? "opacity-100 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_10px_rgba(52,211,153,0.8)]"
                    : "opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                )}
              />

              {/* Active Tab Glowing Laser Line */}
              {isSelected && (
                <motion.div
                  layoutId="activeTechUnderline"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  className="absolute bottom-0 left-0 right-0 h-[3px] bg-emerald-400 z-20 shadow-[0_0_12px_rgba(52,211,153,1)]"
                />
              )}

              <div className="flex items-center justify-between mb-3">
                <div
                  className={cn(
                    "w-8 h-8 flex items-center justify-center rounded-none border transition-all duration-300 group-hover:scale-105",
                    isSelected
                      ? cn("bg-black/80 text-white shadow-lg", itemTheme.borderAccent)
                      : "bg-white/5 border-white/10 text-neutral-400 group-hover:border-white/30 group-hover:text-white"
                  )}
                  style={{
                    boxShadow: isSelected ? `0 0 16px ${itemTheme.glowColor}` : "none",
                  }}
                >
                  {getTechIcon(item.name)}
                </div>

                <span
                  className={cn(
                    "font-mono text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 border rounded-none transition-colors duration-200",
                    isSelected
                      ? itemTheme.tagBg
                      : "border-white/10 text-neutral-400 group-hover:text-neutral-200"
                  )}
                >
                  {item.role}
                </span>
              </div>

              <div>
                <span
                  className={cn(
                    "block font-heading text-base font-bold tracking-tight transition-colors duration-200",
                    isSelected ? "text-white" : "text-neutral-300 group-hover:text-white"
                  )}
                >
                  {item.name}
                </span>

                <span className="font-mono text-[10px] flex items-center gap-1.5 mt-1">
                  {isSelected ? (
                    <>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_rgba(52,211,153,1)]" />
                      <span className="text-emerald-400 font-semibold tracking-wider">ACTIVE TELEMETRY</span>
                    </>
                  ) : (
                    <span className="text-neutral-500 group-hover:text-neutral-400 tracking-wider">
                      SELECT TO SIMULATE
                    </span>
                  )}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Dispatch Telemetry Cockpit Body */}
      <div className="p-6 sm:p-8 lg:p-10 relative">
        {/* Ambient Subtle Cyber Grid Texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Cockpit HUD Bar with Controls */}
        <div className="p-5 border border-white/10 bg-[#0d1424]/80 backdrop-blur-md mb-8 flex flex-col lg:flex-row lg:items-center justify-between gap-5 rounded-none relative z-10 shadow-lg">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 bg-emerald-500/15 border border-emerald-400/40 text-emerald-300 text-[10px] font-mono uppercase tracking-widest font-bold rounded-none shadow-[0_0_8px_rgba(52,211,153,0.3)]">
                DIURNAL PROFILE SIMULATION
              </span>
              <span className="text-white/30 font-mono text-xs">·</span>
              <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                {tech.name} Stack
              </span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold font-heading text-white tracking-tight">
              24-Hour Dispatch &amp; Offtake Envelope
            </h4>
          </div>

          {/* Interactive Play/Pause & Live Readout Controls */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Auto-Play 24H Cycle Toggle Button */}
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className={cn(
                "px-3.5 py-2 border font-mono text-xs uppercase tracking-wider font-bold flex items-center gap-2 rounded-none transition-all duration-300 cursor-pointer shadow-sm",
                isPlaying
                  ? "bg-amber-500 text-black border-amber-400 shadow-[0_0_16px_rgba(245,158,11,0.6)]"
                  : "bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-emerald-400 hover:text-emerald-300"
              )}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 fill-black" />
                  <span>PAUSE CYCLE</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                  <span>PLAY 24H CYCLE</span>
                </>
              )}
            </button>

            {/* Real-Time Hour Readout HUD with AnimatePresence */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedTech}-${activeIdx}`}
                initial={{ opacity: 0.8, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.15 }}
                className="flex flex-wrap items-center gap-4 text-xs font-mono bg-black/70 border border-white/15 p-2.5 sm:p-3 rounded-none shadow-inner"
              >
                <div>
                  <span className="text-[10px] uppercase text-neutral-400 font-semibold block">Scrubbed Hour</span>
                  <span className="text-white font-bold text-sm tracking-wider">{hours[activeIdx]}</span>
                </div>

                <div className="w-px h-7 bg-white/15" />

                <div>
                  <span className="text-[10px] uppercase text-neutral-400 font-semibold block">Simulated Output</span>
                  <span className={cn("font-bold text-sm tracking-wider", theme.accentText)}>
                    {currentGen} MW
                  </span>
                </div>

                <div className="w-px h-7 bg-white/15" />

                <div>
                  <span className="text-[10px] uppercase text-neutral-400 font-semibold block">Firm Threshold</span>
                  <span className="text-amber-400 font-bold text-sm tracking-wider">{firmThreshold} MW</span>
                </div>

                <div className="w-px h-7 bg-white/15" />

                <div>
                  <span className="text-[10px] uppercase text-neutral-400 font-semibold block">Net Balance</span>
                  <span
                    className={cn(
                      "font-bold text-sm tracking-wider inline-flex items-center gap-1",
                      delta >= 0 ? "text-emerald-400" : "text-rose-400"
                    )}
                  >
                    {delta >= 0 ? `+${delta} MW Surplus` : `${delta} MW Deficit`}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Legend & Hover Guide */}
        <div className="flex flex-wrap items-center justify-between text-xs font-mono text-neutral-400 mb-4 px-1 gap-3 relative z-10">
          <div className="flex flex-wrap items-center gap-5">
            <div className="flex items-center gap-2">
              <span
                className="w-3.5 h-3.5 rounded-none inline-block shadow-sm"
                style={{ backgroundColor: theme.primary, boxShadow: `0 0 10px ${theme.glowColor}` }}
              />
              <span className="text-white font-semibold">{tech.name} Generation Envelope</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-5 h-0 border-t-2 border-dashed border-amber-400 inline-block shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
              <span className="text-white font-semibold">Contracted Firm Threshold (65 MW)</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-neutral-400 font-medium">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>GRID STATE:</span>
            <span className="text-emerald-300 font-bold uppercase tracking-wider">
              {getGridStatus(activeIdx, currentGen)}
            </span>
          </div>
        </div>

        {/* Interactive 24-Hour Graph Stage (Cyber Hologram Grid) */}
        <div className="relative h-64 sm:h-80 w-full flex items-end justify-between gap-1 sm:gap-1.5 pt-10 px-2 sm:px-4 border border-white/15 bg-gradient-to-b from-[#0a0f1d] via-[#070b14] to-[#04070d] shadow-inner overflow-hidden">
          {/* Subtle Cyber Grid Scanlines */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
            <div className="border-b border-dashed border-white/40 w-full" />
            <div className="border-b border-dashed border-white/40 w-full" />
            <div className="border-b border-dashed border-white/40 w-full" />
            <div className="border-b border-dashed border-white/40 w-full" />
          </div>

          {/* Reference Contracted Offtake Flat Firm Laser Line */}
          <div
            className="absolute left-0 right-0 border-t-2 border-dashed border-amber-400 pointer-events-none z-20 shadow-[0_0_10px_rgba(251,191,36,0.8)]"
            style={{ bottom: `${firmThreshold}%` }}
          >
            <span className="absolute right-3 -top-5 font-mono text-[9px] uppercase tracking-wider text-amber-200 font-bold bg-amber-950/90 border border-amber-400/50 px-2 py-0.5 rounded-none shadow-md backdrop-blur-md">
              CONTRACTED FIRM DELIVERY THRESHOLD (65 MW)
            </span>
          </div>

          {/* 24-Hour Interactive Bars with Spring Stagger Animation */}
          {curveData.map((height, idx) => {
            const isHovered = activeIdx === idx;
            const isSurplus = height >= firmThreshold;

            return (
              <div
                key={idx}
                onMouseEnter={() => {
                  setHoveredHour(idx);
                  setIsPlaying(false);
                }}
                className="flex-1 flex flex-col items-center h-full justify-end relative cursor-pointer z-10 group/bar"
              >
                {/* Active Column Holographic Laser Guide */}
                {isHovered && (
                  <motion.div
                    layoutId="activeColumnLaser"
                    transition={{ type: "spring", stiffness: 450, damping: 30 }}
                    className="absolute inset-0 bg-white/[0.08] border-x border-emerald-400/60 pointer-events-none z-0 shadow-[0_0_20px_rgba(52,211,153,0.3)]"
                  />
                )}

                {/* Animated Futuristic Holographic Tooltip */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.15 }}
                    className="absolute -top-14 bg-black/90 text-white px-3 py-1.5 rounded-none text-[10px] font-mono whitespace-nowrap shadow-[0_0_20px_rgba(0,0,0,0.8)] z-30 pointer-events-none border border-emerald-400/60 flex items-center gap-2 backdrop-blur-md"
                  >
                    <span className="text-emerald-400 font-bold">{hours[idx]}</span>
                    <span className="text-white/30">|</span>
                    <span className="text-white font-bold">{height} MW</span>
                    <span className="text-white/30">|</span>
                    <span
                      className={cn(
                        "font-bold px-1 py-0.2",
                        isSurplus ? "text-emerald-300 bg-emerald-500/20" : "text-amber-300 bg-amber-500/20"
                      )}
                    >
                      {isSurplus ? `+${height - firmThreshold} MW` : `${height - firmThreshold} MW`}
                    </span>
                  </motion.div>
                )}

                {/* Animated Spring Bar with Futuristic Neon Gradient & Glow */}
                <motion.div
                  key={`${selectedTech}-${idx}`}
                  initial={{ height: 0, opacity: 0.3 }}
                  animate={{ height: `${height}%`, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 24,
                    delay: idx * 0.012,
                  }}
                  className={cn(
                    "w-full rounded-none transition-all duration-200 ease-out origin-bottom relative",
                    isHovered
                      ? theme.barActiveGlow
                      : cn("bg-gradient-to-t", theme.barGradient)
                  )}
                  style={{
                    boxShadow: isHovered
                      ? `0 0 25px ${theme.glowColor}, 0 0 10px rgba(255,255,255,0.8)`
                      : height > firmThreshold
                      ? `0 0 12px ${theme.glowColor}`
                      : "none",
                  }}
                >
                  {/* Neon Top Energy Cap */}
                  {height > 0 && (
                    <div
                      className={cn(
                        "w-full h-1 bg-white transition-opacity duration-200",
                        isHovered ? "opacity-100 shadow-[0_0_8px_white]" : "opacity-70"
                      )}
                    />
                  )}
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* 24 Hour Ticks with Sci-Fi Indicators */}
        <div className="flex justify-between text-[10px] font-mono text-neutral-400 mt-3 px-2">
          <span className="font-semibold text-neutral-400">00:00 (Night)</span>
          <span className="text-neutral-500">06:00 (Dawn)</span>
          <span className="font-bold text-amber-400 drop-shadow-[0_0_6px_rgba(245,158,11,0.6)]">
            12:00 (Solar Peak)
          </span>
          <span className="font-bold text-cyan-400 drop-shadow-[0_0_6px_rgba(6,182,212,0.6)]">
            18:00 (Evening Peak)
          </span>
          <span className="font-semibold text-neutral-400">23:00 (Night)</span>
        </div>

        {/* Futuristic 3-Card Holographic Specification Panels */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTech}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8"
          >
            {/* Panel 1: Generation Characteristic */}
            <div className="p-6 bg-[#0c1322]/90 border border-white/10 hover:border-amber-400/50 transition-all duration-300 rounded-none shadow-lg relative group">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] uppercase text-amber-400 tracking-wider font-bold flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  // GENERATION CHARACTERISTIC
                </span>
                <span className="text-[10px] font-mono text-neutral-400 border border-white/10 px-2 py-0.5 bg-black/40">
                  {theme.cuf}
                </span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed font-normal mb-4">
                {tech.generationProfile}
              </p>
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                <span>PEAK WINDOW:</span>
                <span className="text-amber-300 font-bold">{tech.curveHours}</span>
              </div>
            </div>

            {/* Panel 2: Dispatch Flexibility */}
            <div className="p-6 bg-[#0c1322]/90 border border-white/10 hover:border-emerald-400/50 transition-all duration-300 rounded-none shadow-lg relative group">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] uppercase text-emerald-400 tracking-wider font-bold flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-emerald-400" />
                  // DISPATCH FLEXIBILITY
                </span>
                <span className="text-[10px] font-mono text-neutral-400 border border-white/10 px-2 py-0.5 bg-black/40">
                  {theme.rampRate}
                </span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed font-normal mb-4">
                {tech.dispatchCharacteristics}
              </p>
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                <span>GRID INTERACTION:</span>
                <span className="text-emerald-300 font-bold">{theme.firmness}</span>
              </div>
            </div>

            {/* Panel 3: Delivered-Cost Value */}
            <div className="p-6 bg-[#0c1322]/90 border border-white/10 hover:border-sky-400/50 transition-all duration-300 rounded-none shadow-lg relative group">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] uppercase text-sky-400 tracking-wider font-bold flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-sky-400" />
                  // DELIVERED-COST VALUE
                </span>
                <span className="text-[10px] font-mono text-neutral-400 border border-white/10 px-2 py-0.5 bg-black/40">
                  BANKABLE PPA
                </span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed font-normal mb-4">
                {tech.commercialValue}
              </p>
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                <span>COMMERCIAL OUTCOME:</span>
                <span className="text-sky-300 font-bold">Optimized Blended RTC LCOE</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
