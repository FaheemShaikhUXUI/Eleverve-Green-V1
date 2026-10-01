"use client";

import React, { useState } from "react";
import { platformStages, PlatformStage } from "@/data/platform";
import { Zap, Sun, Network, FileCheck, Landmark, CheckCircle, ChevronRight } from "lucide-react";
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
    <div className="bg-panel border border-line rounded-3xl p-6 sm:p-10 lg:p-12 shadow-subtle relative overflow-hidden">
      {/* Top Interactive Flow Pipeline Navigation */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-xs uppercase tracking-widest text-amber font-semibold">
            Central Operating System Pipeline
          </span>
          <span className="font-mono text-xs text-soft">
            Stage {activeStage.step} of 05
          </span>
        </div>

        {/* Desktop Pipeline Steps with Silky Smooth Sliding Indicator */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3.5 relative">
          {platformStages.map((stage, idx) => {
            const isActive = idx === activeStageIndex;
            const isCompleted = idx < activeStageIndex;

            return (
              <button
                key={stage.step}
                type="button"
                onClick={() => setActiveStageIndex(idx)}
                className={cn(
                  "relative flex flex-col p-4 rounded-2xl border text-left transition-all duration-300 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-green",
                  isActive
                    ? "border-transparent text-ink shadow-md"
                    : "border-line bg-panel hover:border-line-strong hover:bg-panel-2/60 text-soft hover:text-ink"
                )}
              >
                {/* Smooth Animated Active Backdrop Pill */}
                {isActive && (
                  <motion.div
                    layoutId="activeStageTileBackdrop"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    className="absolute inset-0 rounded-2xl bg-panel-2 border-2 border-green shadow-sm pointer-events-none"
                  />
                )}

                {/* Relative Content Layer on Top of Backdrop */}
                <div className="relative z-10 w-full">
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={cn(
                        "font-mono text-xs font-semibold px-2 py-0.5 rounded-full transition-colors duration-300",
                        isActive
                          ? "bg-green text-white shadow-xs"
                          : isCompleted
                          ? "bg-green/10 text-green"
                          : "bg-line/40 text-soft"
                      )}
                    >
                      {stage.step}
                    </span>
                    <div
                      className={cn(
                        "transition-all duration-300",
                        isActive ? "text-green scale-110" : "text-soft group-hover:text-ink"
                      )}
                    >
                      {getStageIcon(stage.step)}
                    </div>
                  </div>

                  <span
                    className={cn(
                      "block font-heading font-medium text-sm tracking-tight transition-colors duration-300",
                      isActive ? "text-green font-semibold" : "text-ink"
                    )}
                  >
                    {stage.name}
                  </span>

                  <span className="block text-[11px] text-soft mt-1 line-clamp-1">
                    {stage.metrics}
                  </span>
                </div>

                {/* Animated Bottom Active Underline Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeStageUnderline"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    className="absolute bottom-0 left-3 right-3 h-1 bg-green rounded-full z-10"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Expanded Active Stage Detail Panel with Smooth Soft AnimatePresence Fade & Slide */}
      <div className="relative overflow-hidden bg-panel-2 border border-line rounded-2xl p-6 sm:p-8 min-h-[360px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStageIndex}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Information */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-green font-semibold">
                  Stage {activeStage.step} Focus
                </span>
                <span className="text-soft">·</span>
                <span className="font-mono text-xs text-amber font-medium">
                  {activeStage.metrics}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-semibold text-ink tracking-tight mb-4">
                {activeStage.title}
              </h3>

              <p className="text-base text-soft leading-relaxed mb-6 font-normal">
                {activeStage.detailedDesc}
              </p>

              {/* Key Engineering Deliverables */}
              <div>
                <span className="block font-mono text-xs uppercase tracking-wider text-ink font-semibold mb-3">
                  Institutional Deliverables:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeStage.deliverables.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: i * 0.05, ease: "easeOut" }}
                      className="flex items-start gap-2 text-xs text-soft bg-panel border border-line/60 rounded-xl p-2.5 shadow-xs"
                    >
                      <CheckCircle className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Conceptual Flow Graphic */}
            <div className="lg:col-span-5 flex flex-col justify-center items-center p-6 bg-panel border border-line rounded-2xl shadow-xs">
              <div className="w-16 h-16 rounded-2xl bg-green/10 border border-green/30 flex items-center justify-center text-green mb-4 shadow-sm">
                {getStageIcon(activeStage.step)}
              </div>

              <span className="font-mono text-xs uppercase tracking-widest text-green font-semibold mb-1">
                Pipeline Progression
              </span>

              <span className="font-heading text-lg font-medium text-ink text-center mb-4">
                {activeStage.name} → Delivered Power
              </span>

              <p className="text-xs text-soft text-center leading-relaxed max-w-xs mb-6">
                {activeStage.shortDesc}
              </p>

              {/* Next Stage Quick Trigger */}
              <button
                type="button"
                onClick={() =>
                  setActiveStageIndex((activeStageIndex + 1) % platformStages.length)
                }
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-line text-xs font-mono uppercase text-ink hover:text-green hover:border-green hover:bg-panel-2 transition-all duration-300"
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
