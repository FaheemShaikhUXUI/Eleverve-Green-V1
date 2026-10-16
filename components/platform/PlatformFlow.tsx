"use client";

import React, { useState } from "react";
import { platformStages, PlatformStage } from "@/data/platform";
import { Zap, Sun, Network, FileCheck, Landmark, Check, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function PlatformFlow() {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const activeStage: PlatformStage = platformStages[activeStageIndex];

  const getStageIcon = (step: string) => {
    switch (step) {
      case "01":
        return <Sun className="w-5 h-5" />;
      case "02":
        return <Network className="w-5 h-5" />;
      case "03":
        return <FileCheck className="w-5 h-5" />;
      case "04":
        return <Landmark className="w-5 h-5" />;
      case "05":
        return <Zap className="w-5 h-5" />;
      default:
        return <Zap className="w-5 h-5" />;
    }
  };

  return (
    <div className="border border-neutral-200 bg-white shadow-xl rounded-none overflow-hidden relative">
      {/* Top Header Bar */}
      <div className="p-6 sm:p-8 border-b border-neutral-200 bg-neutral-50/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5 mb-1.5">
            <span className="px-2.5 py-1 bg-emerald-50 border border-emerald-600/30 text-[10px] font-mono uppercase tracking-widest text-emerald-800 font-bold rounded-none flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-emerald-600 rounded-none inline-block animate-pulse" />
              CENTRAL OPERATING SYSTEM PIPELINE
            </span>
            <span className="font-mono text-xs text-neutral-500 font-medium">// WORKFLOW</span>
          </div>
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
            5-Stage Asset Lifecycle Execution Platform
          </h3>
        </div>

        <div className="flex items-center gap-3 font-mono text-xs bg-white border border-neutral-200 px-3.5 py-1.5 rounded-none shadow-2xs self-start sm:self-auto">
          <span className="text-[10px] uppercase text-neutral-500 font-semibold">Current Phase</span>
          <span className="font-bold text-emerald-700">
            Stage {activeStage.step} of 05
          </span>
        </div>
      </div>

      {/* 5-Step Interactive Pipeline Strip with Spring Underline & Downward Connector Arrow */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-0 border-b border-neutral-200 divide-x divide-y sm:divide-y-0 divide-neutral-200 relative z-10">
        {platformStages.map((stage, idx) => {
          const isActive = idx === activeStageIndex;
          const isCompleted = idx < activeStageIndex;

          return (
            <button
              key={stage.step}
              type="button"
              onClick={() => setActiveStageIndex(idx)}
              className={cn(
                "p-5 text-left transition-all duration-300 flex flex-col justify-between group rounded-none relative cursor-pointer",
                isActive
                  ? "bg-emerald-50/90"
                  : "bg-white hover:bg-neutral-50"
              )}
            >
              {/* Luminous Top Hover Beam */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Active Tab Spring Indicator */}
              {isActive && (
                <motion.div
                  layoutId="activePlatformFlowUnderline"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  className="absolute bottom-0 left-0 right-0 h-[3px] bg-emerald-600 z-20 shadow-[0_0_10px_rgba(16,185,129,0.8)]"
                />
              )}

              <div className="flex items-center justify-between mb-3">
                <div
                  className={cn(
                    "w-8 h-8 flex items-center justify-center rounded-none font-mono text-xs font-bold border transition-all duration-300 group-hover:scale-105",
                    isActive
                      ? "bg-emerald-600 border-emerald-600 text-white shadow-xs"
                      : isCompleted
                      ? "bg-emerald-100 border-emerald-300 text-emerald-800"
                      : "bg-neutral-100 border-neutral-200 text-neutral-700 group-hover:border-emerald-500/50"
                  )}
                >
                  {stage.step}
                </div>

                <div
                  className={cn(
                    "transition-all duration-300 group-hover:scale-110",
                    isActive
                      ? "text-emerald-700"
                      : "text-neutral-500 group-hover:text-emerald-700"
                  )}
                >
                  {getStageIcon(stage.step)}
                </div>
              </div>

              <div>
                <span
                  className={cn(
                    "block font-heading font-bold text-sm tracking-tight transition-colors duration-200",
                    isActive ? "text-neutral-900" : "text-neutral-800 group-hover:text-emerald-700"
                  )}
                >
                  {stage.name}
                </span>
                <span className="block font-mono text-[10px] text-neutral-500 font-medium mt-0.5 line-clamp-1">
                  {stage.metrics}
                </span>
              </div>

              {/* Physical Downward Connector Arrow pointing directly into the cockpit */}
              {isActive && (
                <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 z-30 hidden sm:flex flex-col items-center pointer-events-none">
                  <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[12px] border-t-emerald-600 drop-shadow-sm" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Expanded Active Stage Detail Cockpit Connected Directly with Top Border Highlight */}
      <div className="relative overflow-hidden bg-white border-t-2 border-t-emerald-600">
        {/* Connected Telemetry Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 sm:px-10 py-3.5 border-b border-neutral-200 bg-neutral-50/90 font-mono text-xs">
          <div className="inline-flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.9)]" />
            <span className="font-bold text-neutral-900 uppercase tracking-wider text-[11px]">
              CONNECTED STAGE // {activeStage.step} · {activeStage.name.toUpperCase()}
            </span>
            <span className="text-neutral-400 hidden sm:inline">|</span>
            <span className="text-emerald-700 font-bold hidden sm:inline text-[11px]">
              {activeStage.metrics}
            </span>
          </div>

          <span className="text-neutral-500 uppercase tracking-widest text-[10px] font-semibold">
            ACTIVE DELIVERABLE MATRIX
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeStageIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-neutral-200 items-stretch"
          >
            {/* Left Column: Stage Detail & Deliverables */}
            <div className="lg:col-span-8 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 bg-neutral-100 border border-neutral-300 text-neutral-900 text-[10px] font-mono uppercase tracking-wider font-bold rounded-none">
                    STAGE {activeStage.step} FOCUS
                  </span>
                  <span className="text-neutral-400 font-mono text-xs">·</span>
                  <span className="font-mono text-xs font-bold text-emerald-700">
                    {activeStage.metrics}
                  </span>
                </div>

                <h4 className="text-2xl sm:text-3xl font-bold font-heading text-neutral-900 tracking-tight mb-4">
                  {activeStage.title}
                </h4>

                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed mb-8 font-normal">
                  {activeStage.detailedDesc}
                </p>

                {/* Institutional Deliverables Grid */}
                <div>
                  <span className="block font-mono text-xs uppercase tracking-wider text-neutral-900 font-bold mb-3">
                    // INSTITUTIONAL DELIVERABLES:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeStage.deliverables.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3.5 bg-neutral-50 border border-neutral-200 rounded-none text-xs font-medium hover:border-emerald-500/50 transition-colors shadow-2xs"
                      >
                        <div className="w-4 h-4 shrink-0 flex items-center justify-center bg-emerald-100 border border-emerald-400 text-emerald-800 rounded-none mt-0.5">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <span className="leading-snug text-neutral-900 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Pipeline Progression Anchor */}
            <div className="lg:col-span-4 p-8 sm:p-10 bg-neutral-50/70 border-l border-neutral-200 flex flex-col justify-between items-center text-center">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-white border border-emerald-500/40 text-emerald-700 flex items-center justify-center rounded-none shadow-xs mb-4">
                  {getStageIcon(activeStage.step)}
                </div>

                <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-700 font-bold mb-1">
                  PIPELINE PROGRESSION
                </span>

                <span className="font-heading text-base font-bold text-neutral-900 mb-3">
                  {activeStage.name} → Delivered Power
                </span>

                <p className="text-xs text-neutral-700 leading-relaxed max-w-xs mb-6 font-normal">
                  {activeStage.shortDesc}
                </p>
              </div>

              {/* Advance Stage Button (Zero Curves) */}
              <button
                type="button"
                onClick={() =>
                  setActiveStageIndex(
                    (activeStageIndex + 1) % platformStages.length
                  )
                }
                className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs uppercase font-semibold rounded-none tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md cursor-pointer"
              >
                <span>Advance to Next Stage</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
