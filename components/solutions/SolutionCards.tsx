"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { solutionsData } from "@/data/solutions";
import { Zap, ShieldCheck, Flame, Cpu, CheckCircle2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const solutionImages: Record<string, string> = {
  "eaas": "/images/solar-substation.jpg",
  "utility-ppa": "/images/heroes/portfolio.jpg",
  "fdre-rtc": "/images/wind-landscape.jpg",
  "hybrid-bess": "/images/bess-facility.jpg",
};

export function SolutionCards() {
  const [selectedId, setSelectedId] = useState<string>("eaas");
  const selectedIdx = solutionsData.findIndex((s) => s.id === selectedId);
  const selectedSolution = solutionsData[selectedIdx] || solutionsData[0];

  const getSolutionIcon = (id: string) => {
    switch (id) {
      case "eaas":
        return <Zap className="w-4 h-4" />;
      case "utility-ppa":
        return <ShieldCheck className="w-4 h-4" />;
      case "fdre-rtc":
        return <Flame className="w-4 h-4" />;
      case "hybrid-bess":
        return <Cpu className="w-4 h-4" />;
      default:
        return <Zap className="w-4 h-4" />;
    }
  };

  return (
    <div className="relative">
      {/* 4 Solution Selector Grid with Downward Physical Anchor Arrow */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10">
        {solutionsData.map((sol, idx) => {
          const isSelected = sol.id === selectedId;
          const imageSrc = solutionImages[sol.id] || "/images/solar-substation.jpg";

          return (
            <button
              key={sol.id}
              type="button"
              onClick={() => setSelectedId(sol.id)}
              className={cn(
                "rounded-none border text-left transition-all duration-500 ease-out flex flex-col justify-between group bg-white [.section-theme-break_&]:bg-black/50 relative",
                "hover:-translate-y-1 hover:shadow-[0_20px_35px_-10px_rgba(0,0,0,0.12)] [.section-theme-break_&]:hover:shadow-[0_20px_35px_-10px_rgba(0,0,0,0.6)]",
                isSelected
                  ? "border-green ring-1 ring-green shadow-md z-20"
                  : "border-neutral-200 [.section-theme-break_&]:border-white/15 hover:border-neutral-400 [.section-theme-break_&]:hover:border-white/30"
              )}
            >
              {/* Luminous Top Hover Accent Line */}
              <div
                className={cn(
                  "absolute top-0 left-0 right-0 h-[2px] z-30 transition-all duration-500",
                  isSelected
                    ? "bg-green opacity-100"
                    : "bg-gradient-to-r from-transparent via-green to-transparent opacity-0 group-hover:opacity-100"
                )}
              />

              {/* Top Image Banner with Headline Over Image */}
              <div className="relative w-full h-44 sm:h-48 overflow-hidden rounded-none border-b border-neutral-200 [.section-theme-break_&]:border-white/15 bg-neutral-900">
                <Image
                  src={imageSrc}
                  alt={sol.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/35 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" />

                {/* Overlays on Image - Top Row */}
                <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 bg-black/75 backdrop-blur-md border border-white/20 text-white rounded-none transition-transform duration-300 group-hover:translate-x-0.5">
                  <span
                    className={cn(
                      "w-1.5 h-1.5 rounded-full transition-transform duration-300 group-hover:scale-125",
                      isSelected
                        ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]"
                        : "bg-white/60 group-hover:bg-emerald-400 group-hover:shadow-[0_0_6px_rgba(52,211,153,0.8)]"
                    )}
                  />
                  <span className="font-mono text-[10px] font-semibold tracking-wider uppercase">
                    0{idx + 1} · {sol.tag}
                  </span>
                </div>

                <div
                  className={cn(
                    "absolute top-3 right-3 z-10 p-1.5 rounded-none border backdrop-blur-md transition-all duration-300",
                    isSelected
                      ? "bg-green text-white border-green"
                      : "bg-black/60 text-white/90 border-white/20 group-hover:bg-green group-hover:text-white group-hover:border-green group-hover:scale-105"
                  )}
                >
                  {getSolutionIcon(sol.id)}
                </div>

                {/* Headline Text Directly Over Image */}
                <div className="absolute bottom-3 left-3.5 right-3.5 z-20">
                  <h3
                    className={cn(
                      "text-base sm:text-lg font-bold font-heading tracking-tight leading-snug drop-shadow-md transition-colors duration-300",
                      isSelected ? "text-emerald-300" : "text-white group-hover:text-emerald-300"
                    )}
                  >
                    {sol.title}
                  </h3>
                </div>

                {isSelected && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green z-20" />
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between bg-white [.section-theme-break_&]:bg-transparent transition-colors duration-300">
                <div>
                  <p className="text-xs text-neutral-600 [.section-theme-break_&]:text-neutral-300 line-clamp-3 leading-relaxed mb-4 font-normal">
                    {sol.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-100 [.section-theme-break_&]:border-white/10 flex items-center justify-between">
                  <span
                    className={cn(
                      "font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 border rounded-none transition-all duration-300",
                      isSelected
                        ? "border-green/40 text-green bg-green/5 font-semibold"
                        : "border-neutral-200 [.section-theme-break_&]:border-white/15 text-neutral-600 [.section-theme-break_&]:text-neutral-300 group-hover:border-green/40 group-hover:text-green group-hover:bg-green/5"
                    )}
                  >
                    {sol.badge}
                  </span>
                  <span
                    className={cn(
                      "font-mono text-xs transition-all duration-300",
                      isSelected
                        ? "text-green translate-x-1 font-bold"
                        : "text-neutral-500 [.section-theme-break_&]:text-neutral-400 group-hover:text-green group-hover:translate-x-1.5 font-semibold"
                    )}
                  >
                    →
                  </span>
                </div>
              </div>

              {/* Dedicated Connection Status Bar at Tile Bottom */}
              <div
                className={cn(
                  "px-4 py-1.5 border-t text-[10px] font-mono transition-colors duration-300 flex items-center justify-between",
                  isSelected
                    ? "bg-green text-white font-bold border-green"
                    : "bg-neutral-50 [.section-theme-break_&]:bg-white/5 text-soft group-hover:text-ink border-neutral-100 [.section-theme-break_&]:border-white/10"
                )}
              >
                <span>{isSelected ? "ACTIVE SELECTION" : `SOLUTION // 0${idx + 1}`}</span>
                <span className="flex items-center gap-1 font-bold">
                  {isSelected ? "CONNECTED TO DEEP DIVE BELOW ▼" : "CLICK TO CONNECT →"}
                </span>
              </div>

              {/* Physical Downward Connector Arrow */}
              {isSelected && (
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-none">
                  <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-green drop-shadow-sm" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Selected Solution Deep Dive Comparison Panel Connected Directly Below */}
      <div className="mt-3 border border-neutral-200 [.section-theme-break_&]:border-white/15 border-t-2 border-t-green bg-white [.section-theme-break_&]:bg-black/60 rounded-none p-6 sm:p-10 lg:p-12 shadow-sm relative overflow-hidden">
        {/* Connected Header Bar showing direct link with selected tile */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-neutral-200 [.section-theme-break_&]:border-white/10">
          <div className="flex items-center gap-3.5">
            <div className="w-9 h-9 rounded-none bg-green/10 border border-green/30 flex items-center justify-center text-green flex-shrink-0">
              <span className="w-2.5 h-2.5 bg-green rounded-none shadow-[0_0_8px_rgba(16,185,129,0.9)] animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-green">
                  CONNECTED ARCHITECTURE // TILE 0{selectedIdx + 1}
                </span>
                <span className="px-1.5 py-0.5 bg-green/15 text-green border border-green/30 font-mono text-[9px] uppercase font-bold">
                  ACTIVE
                </span>
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-ink">
                {selectedSolution.title}
                <span className="ml-2.5 text-xs font-mono font-normal text-soft">
                  ({selectedSolution.tag} · {selectedSolution.badge})
                </span>
              </h3>
            </div>
          </div>

          {/* Quick Switch Tabs */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1 p-1 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
              {solutionsData.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSelectedId(s.id)}
                  className={cn(
                    "px-2.5 py-1 text-xs font-mono font-medium transition-all duration-200 rounded-none cursor-pointer",
                    s.id === selectedId
                      ? "bg-green text-white font-bold shadow-xs"
                      : "text-soft hover:text-ink"
                  )}
                >
                  0{i + 1} {s.tag}
                </button>
              ))}
            </div>

            <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-soft">
              <span className="text-neutral-400">STRUCTURE:</span>
              <span className="px-2 py-1 border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-ink font-semibold">
                {selectedSolution.badge}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Info */}
          <div className="lg:col-span-7">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ink tracking-tight mb-4">
              {selectedSolution.headline}
            </h3>

            <p className="text-base text-soft leading-relaxed mb-8 font-normal">
              {selectedSolution.description}
            </p>

            {/* Operational Deliverables Checklist */}
            <div className="space-y-3.5">
              <span className="block font-mono text-xs uppercase tracking-wider text-ink font-semibold">
                Operational Highlights:
              </span>
              {selectedSolution.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-soft group/item">
                  <CheckCircle2 className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Institutional Commercial Terms Matrix */}
          <div className="lg:col-span-5 border border-neutral-200 [.section-theme-break_&]:border-white/15 bg-neutral-50 [.section-theme-break_&]:bg-black/40 rounded-none p-6 sm:p-8 space-y-4">
            <span className="block font-mono text-xs uppercase tracking-widest text-amber font-semibold pb-3 border-b border-neutral-200 [.section-theme-break_&]:border-white/15">
              Commercial &amp; Governance Terms
            </span>

            <div className="py-1">
              <span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                Contractual Mechanism
              </span>
              <span className="text-sm font-semibold text-ink mt-0.5 block">
                {selectedSolution.contractType}
              </span>
            </div>

            <div className="py-1">
              <span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                Offtaker Capex Allocation
              </span>
              <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5 block">
                {selectedSolution.capexRequirement}
              </span>
            </div>

            <div className="py-1">
              <span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                Risk Management
              </span>
              <span className="text-sm font-semibold text-ink mt-0.5 block">
                {selectedSolution.riskAllocation}
              </span>
            </div>

            <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800">
              <span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                Ideal Counterparty
              </span>
              <p className="text-xs text-soft leading-relaxed mt-1">
                {selectedSolution.idealFor}
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-none bg-ink text-white hover:bg-green dark:bg-white dark:text-ink dark:hover:bg-green dark:hover:text-white font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-300"
              >
                <span>Structure This Offtake</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
