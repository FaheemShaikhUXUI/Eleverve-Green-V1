"use client";

import React, { useState } from "react";
import { portfolioData, portfolioDisclaimer, PortfolioAsset } from "@/data/portfolio";
import { indiaMapData } from "@/data/indiaMapData";
import { MapPin, Zap, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function PortfolioMap() {
  const [activeAssetId, setActiveAssetId] = useState<string>("rajasthan");
  const activeAsset = portfolioData.find((a) => a.id === activeAssetId) || portfolioData[0];

  return (
    <div className="space-y-8">
      {/* 3 State Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {portfolioData.map((asset) => {
          const isActive = asset.id === activeAssetId;
          return (
            <button
              key={asset.id}
              type="button"
              onClick={() => setActiveAssetId(asset.id)}
              className={cn(
                "p-6 sm:p-8 bg-panel border rounded-3xl text-left transition-all duration-300 relative overflow-hidden group",
                isActive
                  ? "border-green shadow-card bg-panel-2 scale-[1.02] z-10"
                  : "border-line hover:border-line-strong hover:bg-panel-2/60"
              )}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[11px] uppercase tracking-wider text-amber font-semibold">
                  {asset.offtaker}
                </span>
                <span
                  className={cn(
                    "px-2.5 py-0.5 rounded-full font-mono text-[10px] uppercase font-semibold",
                    asset.status === "Operating"
                      ? "bg-green/10 text-green border border-green/20"
                      : "bg-blue/10 text-blue border border-blue/20"
                  )}
                >
                  {asset.status}
                </span>
              </div>

              <span className="block font-heading text-2xl font-semibold text-ink mb-1">
                {asset.state}
              </span>

              <div className="font-heading text-3xl sm:text-4xl font-bold text-green mb-4">
                {asset.capacity}
              </div>

              <p className="text-xs sm:text-sm text-soft leading-relaxed font-normal">
                {asset.description}
              </p>

              <div className="mt-6 pt-4 border-t border-line/60 flex items-center justify-between text-[11px] font-mono text-soft">
                <span>{asset.expansion}</span>
                <MapPin className={cn("w-4 h-4 transition-colors", isActive ? "text-green" : "text-faint")} />
              </div>
            </button>
          );
        })}
      </div>

      {/* Interactive India Geography & Technical Interconnect Hub */}
      <div className="bg-panel border border-line rounded-3xl p-6 sm:p-10 lg:p-12 shadow-subtle relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Official Geographic Vector India Map Visualization */}
          <div className="lg:col-span-6 relative flex flex-col justify-between p-4 sm:p-6 bg-panel-2/70 border border-line rounded-2xl min-h-[460px] shadow-xs">
            {/* Map Top Status Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-line/60 mb-3 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
                <span className="font-semibold text-green uppercase tracking-wider text-[11px]">
                  National Grid Interconnect
                </span>
              </div>
              <span className="text-soft text-[11px]">
                ~99 MWp Asset Footprint
              </span>
            </div>

            {/* SVG Official Vector Map of India */}
            <div className="relative w-full flex items-center justify-center py-2">
              <svg
                viewBox={indiaMapData.viewBox}
                className="w-full max-w-[390px] h-auto drop-shadow-xs"
                xmlns="http://www.w3.org/2000/svg"
              >
                <style>{`
                  @keyframes runningGridDash {
                    to {
                      stroke-dashoffset: -20;
                    }
                  }
                  .running-connector-line {
                    stroke-dasharray: 6 4;
                    animation: runningGridDash 0.9s linear infinite;
                  }
                `}</style>

                {/* 1. All 36 Indian States / Union Territories */}
                <g id="india-states-layer">
                  {indiaMapData.locations.map((loc) => {
                    const isRJ = loc.id === "rj";
                    const isGJ = loc.id === "gj";
                    const isAP = loc.id === "ap";

                    const isAnyAsset = isRJ || isGJ || isAP;

                    const isActive =
                      (isRJ && activeAssetId === "rajasthan") ||
                      (isGJ && activeAssetId === "gujarat") ||
                      (isAP && activeAssetId === "andhra-pradesh");

                    const targetAssetId = isRJ
                      ? "rajasthan"
                      : isGJ
                      ? "gujarat"
                      : isAP
                      ? "andhra-pradesh"
                      : null;

                    return (
                      <path
                        key={loc.id}
                        id={`state-${loc.id}`}
                        d={loc.path}
                        onClick={() => {
                          if (targetAssetId) setActiveAssetId(targetAssetId);
                        }}
                        className={cn(
                          "transition-all duration-300",
                          isAnyAsset ? "cursor-pointer" : "cursor-default",
                          // 3. Selected state becomes full dark logo color green
                          isAnyAsset && isActive && "fill-[#00874e] stroke-[#004d2c] stroke-[2] drop-shadow-md",
                          // 2. States in touch in very light Green
                          isAnyAsset && !isActive && "fill-[#bbf7d0] stroke-[#00874e] stroke-[1.4] hover:fill-[#86efac]",
                          // 1. Other states in very light gray
                          !isAnyAsset && "fill-[#e5e7eb] dark:fill-[#1e293b] stroke-[#cbd5e1] dark:stroke-[#334155] stroke-[0.7] hover:fill-[#d1d5db] dark:hover:fill-[#28384d]"
                        )}
                      >
                        <title>{loc.name}</title>
                      </path>
                    );
                  })}
                </g>

                {/* 2. Grid Interconnect Backbone Transmission Lines (Running connector lines) */}
                <g id="interconnect-lines" className="pointer-events-none">
                  {/* Rajasthan (120, 255) <-> Gujarat (72, 352) */}
                  <line
                    x1="120"
                    y1="255"
                    x2="72"
                    y2="352"
                    className="running-connector-line stroke-[#00874e]"
                    strokeWidth="2.5"
                    strokeOpacity="0.9"
                  />
                  {/* Gujarat (72, 352) <-> Andhra Pradesh (265, 495) */}
                  <line
                    x1="72"
                    y1="352"
                    x2="265"
                    y2="495"
                    className="running-connector-line stroke-[#00874e]"
                    strokeWidth="2.5"
                    strokeOpacity="0.9"
                  />
                  {/* Rajasthan (120, 255) <-> Andhra Pradesh (265, 495) */}
                  <line
                    x1="120"
                    y1="255"
                    x2="265"
                    y2="495"
                    className="running-connector-line stroke-[#00874e]"
                    strokeWidth="2.5"
                    strokeOpacity="0.9"
                  />
                </g>

                {/* 3. Interactive Asset Nodes & Clean Floating Badges (Running dot removed from selected state) */}
                <g id="asset-nodes-layer">
                  {/* --- Rajasthan Node (120, 255) --- */}
                  <g
                    className="cursor-pointer group"
                    onClick={() => setActiveAssetId("rajasthan")}
                  >
                    <circle
                      cx="120"
                      cy="255"
                      r={activeAssetId === "rajasthan" ? "9" : "6"}
                      className={cn(
                        "transition-all duration-300",
                        activeAssetId === "rajasthan"
                          ? "fill-[#00874e] stroke-white stroke-[2.5] shadow-lg"
                          : "fill-white stroke-[#00874e] stroke-[2] hover:fill-[#bbf7d0]"
                      )}
                    />
                    <circle
                      cx="120"
                      cy="255"
                      r="3"
                      className={activeAssetId === "rajasthan" ? "fill-white" : "fill-[#00874e]"}
                    />

                    {/* Rajasthan Pill Badge */}
                    <g transform="translate(136, 243)">
                      <rect
                        x="0"
                        y="0"
                        width="134"
                        height="24"
                        rx="12"
                        className={cn(
                          "transition-all duration-200",
                          activeAssetId === "rajasthan"
                            ? "fill-[#00874e] shadow-md"
                            : "fill-white/95 stroke stroke-[#00874e]/40 hover:stroke-[#00874e] shadow-xs"
                        )}
                      />
                      <text
                        x="12"
                        y="16"
                        className={cn(
                          "font-heading text-[11px] select-none",
                          activeAssetId === "rajasthan" ? "fill-white font-bold" : "fill-[#00874e] font-semibold"
                        )}
                      >
                        Rajasthan · 52.5 MWp
                      </text>
                    </g>
                  </g>

                  {/* --- Gujarat Node (72, 352) --- */}
                  <g
                    className="cursor-pointer group"
                    onClick={() => setActiveAssetId("gujarat")}
                  >
                    <circle
                      cx="72"
                      cy="352"
                      r={activeAssetId === "gujarat" ? "9" : "6"}
                      className={cn(
                        "transition-all duration-300",
                        activeAssetId === "gujarat"
                          ? "fill-[#00874e] stroke-white stroke-[2.5] shadow-lg"
                          : "fill-white stroke-[#00874e] stroke-[2] hover:fill-[#bbf7d0]"
                      )}
                    />
                    <circle
                      cx="72"
                      cy="352"
                      r="3"
                      className={activeAssetId === "gujarat" ? "fill-white" : "fill-[#00874e]"}
                    />

                    {/* Gujarat Pill Badge */}
                    <g transform="translate(14, 382)">
                      <rect
                        x="0"
                        y="0"
                        width="116"
                        height="24"
                        rx="12"
                        className={cn(
                          "transition-all duration-200",
                          activeAssetId === "gujarat"
                            ? "fill-[#00874e] shadow-md"
                            : "fill-white/95 stroke stroke-[#00874e]/40 hover:stroke-[#00874e] shadow-xs"
                        )}
                      />
                      <text
                        x="12"
                        y="16"
                        className={cn(
                          "font-heading text-[11px] select-none",
                          activeAssetId === "gujarat" ? "fill-white font-bold" : "fill-[#00874e] font-semibold"
                        )}
                      >
                        Gujarat · 20 MWp
                      </text>
                    </g>
                  </g>

                  {/* --- Andhra Pradesh Node (265, 495) --- */}
                  <g
                    className="cursor-pointer group"
                    onClick={() => setActiveAssetId("andhra-pradesh")}
                  >
                    <circle
                      cx="265"
                      cy="495"
                      r={activeAssetId === "andhra-pradesh" ? "9" : "6"}
                      className={cn(
                        "transition-all duration-300",
                        activeAssetId === "andhra-pradesh"
                          ? "fill-[#00874e] stroke-white stroke-[2.5] shadow-lg"
                          : "fill-white stroke-[#00874e] stroke-[2] hover:fill-[#bbf7d0]"
                      )}
                    />
                    <circle
                      cx="265"
                      cy="495"
                      r="3"
                      className={activeAssetId === "andhra-pradesh" ? "fill-white" : "fill-[#00874e]"}
                    />

                    {/* Andhra Pradesh Pill Badge */}
                    <g transform="translate(285, 483)">
                      <rect
                        x="0"
                        y="0"
                        width="164"
                        height="24"
                        rx="12"
                        className={cn(
                          "transition-all duration-200",
                          activeAssetId === "andhra-pradesh"
                            ? "fill-[#00874e] shadow-md"
                            : "fill-white/95 stroke stroke-[#00874e]/40 hover:stroke-[#00874e] shadow-xs"
                        )}
                      />
                      <text
                        x="12"
                        y="16"
                        className={cn(
                          "font-heading text-[11px] select-none",
                          activeAssetId === "andhra-pradesh" ? "fill-white font-bold" : "fill-[#00874e] font-semibold"
                        )}
                      >
                        Andhra Pradesh · 26.5 MWp
                      </text>
                    </g>
                  </g>
                </g>
              </svg>
            </div>

            {/* Map Legend */}
            <div className="pt-3 border-t border-line/60 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-soft">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00874e]" />
                  <span className="text-ink font-medium">Selected State (Dark Green)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#bbf7d0] border border-[#00874e]" />
                  <span className="text-ink font-medium">States in Touch (Light Green)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#e5e7eb] border border-gray-300" />
                  <span className="text-soft">Other States (Light Gray)</span>
                </div>
              </div>
              <span className="text-faint text-[10px]">Click any state to select</span>
            </div>
          </div>

          {/* Right Selected Asset Specifications */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs uppercase tracking-widest text-green font-semibold">
                  Selected Asset Profile
                </span>
                <span className="text-soft">·</span>
                <span className="font-mono text-xs text-amber">{activeAsset.status} Base</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold text-ink tracking-tight">
                {activeAsset.state} — <span className="font-bold text-green">{activeAsset.capacity}</span>
              </h3>
            </div>

            <p className="text-base text-soft leading-relaxed">
              {activeAsset.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-panel-2 border border-line rounded-xl">
                <span className="block font-mono text-[10px] uppercase text-faint mb-1">
                  Contract Offtaker
                </span>
                <span className="text-sm font-semibold text-ink">
                  {activeAsset.offtaker}
                </span>
              </div>

              <div className="p-4 bg-panel-2 border border-line rounded-xl">
                <span className="block font-mono text-[10px] uppercase text-faint mb-1">
                  Technology Configuration
                </span>
                <span className="text-sm font-semibold text-ink">
                  {activeAsset.technology}
                </span>
              </div>

              <div className="p-4 bg-panel-2 border border-line rounded-xl">
                <span className="block font-mono text-[10px] uppercase text-faint mb-1">
                  Grid Evacuation Interface
                </span>
                <span className="text-sm font-semibold text-ink">
                  {activeAsset.gridInterconnect}
                </span>
              </div>

              <div className="p-4 bg-panel-2 border border-line rounded-xl">
                <span className="block font-mono text-[10px] uppercase text-faint mb-1">
                  Future Expansion Roadmap
                </span>
                <span className="text-sm font-semibold text-green">
                  {activeAsset.expansion}
                </span>
              </div>
            </div>

            {/* Regulatory Disclaimer */}
            <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-panel-2 border border-line text-xs font-mono text-soft">
              <AlertCircle className="w-4 h-4 text-amber flex-shrink-0" />
              <span>{portfolioDisclaimer}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
