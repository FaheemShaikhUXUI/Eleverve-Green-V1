"use client";

import React, { useState } from "react";
import Image from "next/image";
import { portfolioData, portfolioDisclaimer } from "@/data/portfolio";
import { indiaMapData } from "@/data/indiaMapData";
import { MapPin, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const assetImages: Record<string, string> = {
  "rajasthan": "/images/solar-substation.jpg",
  "andhra-pradesh": "/images/heroes/portfolio.jpg",
  "gujarat": "/images/wind-landscape.jpg",
};

export function PortfolioMap() {
  const [activeAssetId, setActiveAssetId] = useState<string>("rajasthan");
  const activeAsset = portfolioData.find((a) => a.id === activeAssetId) || portfolioData[0];
  const activeIdx = portfolioData.findIndex((a) => a.id === activeAssetId);

  return (
    <div className="relative">
      {/* 3 State Cards Grid with Top Images & Physical Downward Caret */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {portfolioData.map((asset, idx) => {
          const isActive = asset.id === activeAssetId;
          const imageSrc = assetImages[asset.id] || "/images/solar-substation.jpg";

          return (
            <button
              key={asset.id}
              type="button"
              onClick={() => setActiveAssetId(asset.id)}
              className={cn(
                "rounded-none border text-left transition-all duration-500 ease-out flex flex-col justify-between group bg-white dark:bg-neutral-950 relative cursor-pointer",
                "hover:-translate-y-1.5 hover:shadow-[0_20px_35px_-10px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_20px_35px_-10px_rgba(0,0,0,0.6)]",
                isActive
                  ? "border-green ring-1 ring-green shadow-md z-20"
                  : "border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600"
              )}
            >
              {/* Luminous Top Hover Beam */}
              <div
                className={cn(
                  "absolute top-0 left-0 right-0 h-[2px] z-30 transition-all duration-500",
                  isActive
                    ? "bg-green opacity-100"
                    : "bg-gradient-to-r from-transparent via-green to-transparent opacity-0 group-hover:opacity-100"
                )}
              />

              {/* Top Image Banner on Each Card */}
              <div className="relative w-full h-44 sm:h-48 overflow-hidden rounded-none border-b border-neutral-200 dark:border-neutral-800 bg-neutral-900">
                <Image
                  src={imageSrc}
                  alt={asset.state}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" />

                {/* Overlays on Image */}
                <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 bg-black/65 backdrop-blur-md border border-white/20 text-white rounded-none transition-transform duration-300 group-hover:translate-x-0.5">
                  <span
                    className={cn(
                      "w-1.5 h-1.5 rounded-full transition-transform duration-300 group-hover:scale-125",
                      isActive
                        ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]"
                        : "bg-white/60 group-hover:bg-emerald-400"
                    )}
                  />
                  <span className="font-mono text-[10px] font-semibold tracking-wider uppercase">
                    {asset.offtaker}
                  </span>
                </div>

                <div
                  className={cn(
                    "absolute top-3 right-3 z-10 px-2.5 py-0.5 rounded-none font-mono text-[10px] uppercase font-bold border backdrop-blur-md transition-all duration-300",
                    asset.status === "Operating"
                      ? "bg-emerald-500/20 text-emerald-300 border-emerald-400/40"
                      : "bg-sky-500/20 text-sky-300 border-sky-400/40"
                  )}
                >
                  {asset.status}
                </div>

                {/* Headlines Over Image — Saves Vertical Space */}
                <div className="absolute bottom-3 left-3.5 right-3.5 z-10 flex flex-col justify-end">
                  <span className="block font-heading text-lg sm:text-xl font-bold tracking-tight text-white drop-shadow leading-tight transition-colors duration-300 group-hover:text-emerald-300">
                    {asset.state}
                  </span>
                  <div className="font-heading text-2xl sm:text-3xl font-extrabold text-emerald-400 tracking-tight drop-shadow leading-tight">
                    {asset.capacity}
                  </div>
                </div>

                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green z-20" />
                )}
              </div>

              {/* Card Body — Compact Streamlined Content */}
              <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between bg-white dark:bg-neutral-950 transition-colors duration-300">
                <p className="text-xs text-soft leading-relaxed font-normal mb-3">
                  {asset.description}
                </p>

                <div className="pt-2.5 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-soft group-hover:text-ink transition-colors duration-200">
                    {asset.expansion}
                  </span>
                  <MapPin
                    className={cn(
                      "w-3.5 h-3.5 transition-all duration-300",
                      isActive ? "text-green scale-110" : "text-neutral-400 group-hover:text-green group-hover:translate-y-[-2px]"
                    )}
                  />
                </div>
              </div>

              {/* Dedicated Connection Status Bar at Tile Bottom */}
              <div
                className={cn(
                  "px-4 py-1.5 border-t text-[10px] font-mono transition-colors duration-300 flex items-center justify-between",
                  isActive
                    ? "bg-green text-white font-bold border-green"
                    : "bg-neutral-50 dark:bg-neutral-900 text-soft group-hover:text-ink border-neutral-100 dark:border-neutral-800"
                )}
              >
                <span>{isActive ? "ACTIVE SELECTION" : `ASSET // 0${idx + 1}`}</span>
                <span className="flex items-center gap-1 font-bold">
                  {isActive ? "CONNECTED TO DOSSIER BELOW ▼" : "CLICK TO CONNECT →"}
                </span>
              </div>

              {/* Physical Downward Connector Arrow */}
              {isActive && (
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-none">
                  <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-green drop-shadow-sm" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Interactive India Geography & Technical Interconnect Hub Directly Connected */}
      <div className="mt-3 border border-neutral-200 dark:border-neutral-800 border-t-2 border-t-green bg-white dark:bg-neutral-950 rounded-none p-6 sm:p-10 lg:p-12 shadow-sm relative overflow-hidden">
        {/* Connected Telemetry Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-neutral-200 dark:border-neutral-800/80">
          <div className="flex items-center gap-3.5">
            <div className="w-9 h-9 rounded-none bg-green/10 border border-green/30 flex items-center justify-center text-green flex-shrink-0">
              <span className="w-2.5 h-2.5 bg-green rounded-none shadow-[0_0_8px_rgba(16,185,129,0.9)] animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-green">
                  CONNECTED ASSET DOSSIER // TILE 0{activeIdx + 1}
                </span>
                <span className="px-1.5 py-0.5 bg-green/15 text-green border border-green/30 font-mono text-[9px] uppercase font-bold">
                  ACTIVE
                </span>
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-ink">
                {activeAsset.state} — {activeAsset.capacity}
                <span className="ml-2.5 text-xs font-mono font-normal text-soft">
                  ({activeAsset.offtaker} · {activeAsset.status})
                </span>
              </h3>
            </div>
          </div>

          {/* Grid Status & Quick Switch Tabs */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1 p-1 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
              {portfolioData.map((a, i) => (
                <button
                  key={a.id}
                  type="button"
                  onClick={() => setActiveAssetId(a.id)}
                  className={cn(
                    "px-3 py-1 text-xs font-mono font-medium transition-all duration-200 rounded-none cursor-pointer",
                    a.id === activeAssetId
                      ? "bg-green text-white font-bold shadow-xs"
                      : "text-soft hover:text-ink"
                  )}
                >
                  0{i + 1} {a.state}
                </button>
              ))}
            </div>

            <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-soft">
              <span className="text-neutral-400">GRID:</span>
              <span className="px-2 py-1 border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-ink font-semibold">
                INTERCONNECT ACTIVE
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Official Geographic Vector India Map Visualization */}
          <div className="lg:col-span-6 relative flex flex-col justify-between p-4 sm:p-6 bg-neutral-50/70 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 rounded-none min-h-[460px] shadow-xs">
            {/* Map Top Status Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-neutral-200 dark:border-neutral-800 mb-3 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
                <span className="font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider text-[11px]">
                  National Grid Interconnect
                </span>
              </div>
              <span className="text-soft text-[11px] font-bold">
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
                          // 2. States in touch in light Green
                          isAnyAsset && !isActive && "fill-[#a7f3d0] dark:fill-[#065f46] stroke-[#00874e] stroke-[1.4] hover:fill-[#6ee7b7]",
                          // 1. Other states in light gray
                          !isAnyAsset && "fill-[#e5e7eb] dark:fill-[#1e293b] stroke-[#cbd5e1] dark:stroke-[#334155] stroke-[0.7] hover:fill-[#d1d5db] dark:hover:fill-[#28384d]"
                        )}
                      >
                        <title>{loc.name}</title>
                      </path>
                    );
                  })}
                </g>

                {/* 2. Grid Interconnect Backbone Transmission Lines */}
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

                {/* 3. Interactive Asset Nodes & Architectural Sharp Badges */}
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
                          : "fill-white stroke-[#00874e] stroke-[2] hover:fill-[#a7f3d0]"
                      )}
                    />
                    <circle
                      cx="120"
                      cy="255"
                      r="3"
                      className={activeAssetId === "rajasthan" ? "fill-white" : "fill-[#00874e]"}
                    />

                    {/* Rajasthan Chip Badge */}
                    <g transform="translate(136, 243)">
                      <rect
                        x="0"
                        y="0"
                        width="134"
                        height="24"
                        rx="0"
                        className={cn(
                          "transition-all duration-200",
                          activeAssetId === "rajasthan"
                            ? "fill-[#00874e] stroke stroke-[#004d2c] shadow-md"
                            : "fill-white/95 dark:fill-neutral-900/95 stroke stroke-[#00874e]/40 hover:stroke-[#00874e] shadow-xs"
                        )}
                      />
                      <text
                        x="10"
                        y="16"
                        className={cn(
                          "font-mono text-[10px] select-none font-bold",
                          activeAssetId === "rajasthan" ? "fill-white" : "fill-[#00874e]"
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
                          : "fill-white stroke-[#00874e] stroke-[2] hover:fill-[#a7f3d0]"
                      )}
                    />
                    <circle
                      cx="72"
                      cy="352"
                      r="3"
                      className={activeAssetId === "gujarat" ? "fill-white" : "fill-[#00874e]"}
                    />

                    {/* Gujarat Chip Badge */}
                    <g transform="translate(14, 382)">
                      <rect
                        x="0"
                        y="0"
                        width="116"
                        height="24"
                        rx="0"
                        className={cn(
                          "transition-all duration-200",
                          activeAssetId === "gujarat"
                            ? "fill-[#00874e] stroke stroke-[#004d2c] shadow-md"
                            : "fill-white/95 dark:fill-neutral-900/95 stroke stroke-[#00874e]/40 hover:stroke-[#00874e] shadow-xs"
                        )}
                      />
                      <text
                        x="10"
                        y="16"
                        className={cn(
                          "font-mono text-[10px] select-none font-bold",
                          activeAssetId === "gujarat" ? "fill-white" : "fill-[#00874e]"
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
                          : "fill-white stroke-[#00874e] stroke-[2] hover:fill-[#a7f3d0]"
                      )}
                    />
                    <circle
                      cx="265"
                      cy="495"
                      r="3"
                      className={activeAssetId === "andhra-pradesh" ? "fill-white" : "fill-[#00874e]"}
                    />

                    {/* Andhra Pradesh Chip Badge */}
                    <g transform="translate(285, 483)">
                      <rect
                        x="0"
                        y="0"
                        width="164"
                        height="24"
                        rx="0"
                        className={cn(
                          "transition-all duration-200",
                          activeAssetId === "andhra-pradesh"
                            ? "fill-[#00874e] stroke stroke-[#004d2c] shadow-md"
                            : "fill-white/95 dark:fill-neutral-900/95 stroke stroke-[#00874e]/40 hover:stroke-[#00874e] shadow-xs"
                        )}
                      />
                      <text
                        x="10"
                        y="16"
                        className={cn(
                          "font-mono text-[10px] select-none font-bold",
                          activeAssetId === "andhra-pradesh" ? "fill-white" : "fill-[#00874e]"
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
            <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-soft">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-none bg-[#00874e]" />
                  <span className="text-ink font-semibold">Selected State</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-none bg-[#a7f3d0] border border-[#00874e]" />
                  <span className="text-ink font-semibold">States in Touch</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-none bg-[#e5e7eb] dark:bg-[#1e293b] border border-gray-300 dark:border-gray-700" />
                  <span className="text-soft">Other States</span>
                </div>
              </div>
              <span className="text-neutral-400 text-[10px]">Click any state or card to inspect</span>
            </div>
          </div>

          {/* Right Selected Asset Specifications with Animated Morph */}
          <div className="lg:col-span-6 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeAsset.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-xs uppercase tracking-widest text-green font-semibold">
                      Selected Asset Profile
                    </span>
                    <span className="text-soft">·</span>
                    <span className="font-mono text-xs text-amber font-semibold">{activeAsset.status} Base</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-bold text-ink tracking-tight">
                    {activeAsset.state} — <span className="font-extrabold text-green">{activeAsset.capacity}</span>
                  </h3>
                </div>

                <p className="text-base text-soft leading-relaxed font-normal">
                  {activeAsset.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-none hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors">
                    <span className="block font-mono text-[10px] uppercase text-neutral-400 mb-1">
                      Contract Offtaker
                    </span>
                    <span className="text-sm font-semibold text-ink">
                      {activeAsset.offtaker}
                    </span>
                  </div>

                  <div className="p-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-none hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors">
                    <span className="block font-mono text-[10px] uppercase text-neutral-400 mb-1">
                      Technology Configuration
                    </span>
                    <span className="text-sm font-semibold text-ink">
                      {activeAsset.technology}
                    </span>
                  </div>

                  <div className="p-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-none hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors">
                    <span className="block font-mono text-[10px] uppercase text-neutral-400 mb-1">
                      Grid Evacuation Interface
                    </span>
                    <span className="text-sm font-semibold text-ink">
                      {activeAsset.gridInterconnect}
                    </span>
                  </div>

                  <div className="p-4 bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-500/30 rounded-none hover:border-emerald-500 transition-colors">
                    <span className="block font-mono text-[10px] uppercase text-emerald-600 dark:text-emerald-400 font-semibold mb-1">
                      Future Expansion Roadmap
                    </span>
                    <span className="text-sm font-bold text-emerald-700 dark:text-emerald-400">
                      {activeAsset.expansion}
                    </span>
                  </div>
                </div>

                {/* Regulatory Disclaimer */}
                <div className="flex items-center gap-2.5 p-3.5 rounded-none bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-mono text-soft">
                  <AlertCircle className="w-4 h-4 text-amber flex-shrink-0" />
                  <span>{portfolioDisclaimer}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
