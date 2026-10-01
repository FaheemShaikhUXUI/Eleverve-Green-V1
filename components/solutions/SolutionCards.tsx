"use client";

import React, { useState } from "react";
import { solutionsData, SolutionItem } from "@/data/solutions";
import { Zap, ShieldCheck, Flame, Cpu, CheckCircle2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function SolutionCards() {
  const [selectedId, setSelectedId] = useState<string>("eaas");
  const selectedSolution = solutionsData.find((s) => s.id === selectedId) || solutionsData[0];

  const getSolutionIcon = (id: string) => {
    switch (id) {
      case "eaas":
        return <Zap className="w-5 h-5" />;
      case "utility-ppa":
        return <ShieldCheck className="w-5 h-5" />;
      case "fdre-rtc":
        return <Flame className="w-5 h-5" />;
      case "hybrid-bess":
        return <Cpu className="w-5 h-5" />;
      default:
        return <Zap className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* 4 Solution Selector Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {solutionsData.map((sol) => {
          const isSelected = sol.id === selectedId;
          return (
            <button
              key={sol.id}
              type="button"
              onClick={() => setSelectedId(sol.id)}
              className={cn(
                "p-6 rounded-3xl border text-left transition-all duration-300 flex flex-col justify-between min-h-[220px] relative overflow-hidden group",
                isSelected
                  ? "bg-panel-2 border-green shadow-card scale-[1.02] z-10"
                  : "bg-panel border-line hover:border-line-strong hover:bg-panel-2/60"
              )}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-amber font-semibold">
                    {sol.tag}
                  </span>
                  <div
                    className={cn(
                      "transition-colors",
                      isSelected ? "text-green" : "text-soft group-hover:text-ink"
                    )}
                  >
                    {getSolutionIcon(sol.id)}
                  </div>
                </div>

                <h3 className="font-heading text-lg font-medium text-ink mb-2">
                  {sol.title}
                </h3>

                <p className="text-xs text-soft line-clamp-3 leading-relaxed">
                  {sol.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-line/60 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase text-green border border-green/30 bg-green/5 px-2.5 py-0.5 rounded-full">
                  {sol.badge}
                </span>
                <span
                  className={cn(
                    "text-xs font-mono transition-transform duration-300",
                    isSelected ? "text-green translate-x-1" : "text-soft group-hover:text-ink"
                  )}
                >
                  →
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Solution Deep Dive Comparison Panel */}
      <div className="bg-panel border border-line rounded-3xl p-6 sm:p-10 lg:p-12 shadow-subtle relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Info */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="font-mono text-xs uppercase tracking-widest text-green font-semibold">
                Offtake Structure Deep Dive
              </span>
              <span className="text-soft">·</span>
              <span className="font-mono text-xs text-amber">{selectedSolution.badge}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-ink tracking-tight mb-4">
              {selectedSolution.headline}
            </h3>

            <p className="text-base text-soft leading-relaxed mb-6 font-normal">
              {selectedSolution.description}
            </p>

            {/* Core Value Deliverables */}
            <div className="space-y-3">
              <span className="block font-mono text-xs uppercase tracking-wider text-ink font-semibold">
                Operational Highlights:
              </span>
              {selectedSolution.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-soft">
                  <CheckCircle2 className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Institutional Commercial Terms Matrix */}
          <div className="lg:col-span-5 bg-panel-2 border border-line rounded-2xl p-6 sm:p-8 space-y-4">
            <span className="block font-mono text-xs uppercase tracking-widest text-amber font-semibold pb-2 border-b border-line">
              Commercial & Governance Terms
            </span>

            <div>
              <span className="block text-[11px] font-mono text-faint uppercase">
                Contractual Mechanism
              </span>
              <span className="text-sm font-medium text-ink">
                {selectedSolution.contractType}
              </span>
            </div>

            <div>
              <span className="block text-[11px] font-mono text-faint uppercase">
                Offtaker Capex Allocation
              </span>
              <span className="text-sm font-medium text-green">
                {selectedSolution.capexRequirement}
              </span>
            </div>

            <div>
              <span className="block text-[11px] font-mono text-faint uppercase">
                Risk Management
              </span>
              <span className="text-sm font-medium text-ink">
                {selectedSolution.riskAllocation}
              </span>
            </div>

            <div className="pt-2 border-t border-line/60">
              <span className="block text-[11px] font-mono text-faint uppercase">
                Ideal Counterparty
              </span>
              <p className="text-xs text-soft leading-relaxed mt-1">
                {selectedSolution.idealFor}
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-green text-white font-heading text-xs font-semibold uppercase tracking-wider hover:shadow-glow transition-all"
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
