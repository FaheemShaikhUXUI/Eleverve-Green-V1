"use client";

import React, { useState } from "react";
import { technologyData, TechnologyBuildingBlock } from "@/data/technology";
import { Sun, Wind, Droplets, Combine, BatteryCharging, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function ResourceSimulator() {
  const [selectedTech, setSelectedTech] = useState<string>("Solar");
  const tech = technologyData.buildingBlocks.find((b) => b.name === selectedTech) || technologyData.buildingBlocks[0];

  const getTechIcon = (name: string) => {
    switch (name) {
      case "Solar":
        return <Sun className="w-5 h-5" />;
      case "Wind":
        return <Wind className="w-5 h-5" />;
      case "Hydro":
        return <Droplets className="w-5 h-5" />;
      case "Hybrid":
        return <Combine className="w-5 h-5" />;
      case "Storage":
        return <BatteryCharging className="w-5 h-5" />;
      default:
        return <Sun className="w-5 h-5" />;
    }
  };

  // 24-hour hourly curve simulation data based on physics without fabricating specific company figures
  const getCurveHeights = (type: string): number[] => {
    switch (type) {
      case "Solar":
        // Zero at night, peaks midday
        return [0, 0, 0, 0, 0, 5, 20, 55, 85, 100, 95, 80, 50, 20, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      case "Wind":
        // Stronger late evening and night, drops midday
        return [70, 75, 70, 60, 50, 40, 30, 25, 20, 20, 25, 30, 40, 50, 65, 80, 85, 90, 85, 80, 75, 75, 70, 70];
      case "Hydro":
        // Flexible peaking during morning and evening rush
        return [30, 30, 30, 35, 45, 60, 80, 85, 60, 50, 45, 45, 50, 55, 60, 75, 90, 95, 90, 80, 65, 50, 40, 35];
      case "Hybrid":
        // High, balanced composite utilisation
        return [55, 55, 50, 45, 45, 50, 65, 80, 85, 90, 85, 80, 70, 70, 75, 85, 90, 90, 85, 80, 70, 65, 60, 55];
      case "Storage":
        // Charge during solar belly, discharge during evening peak
        return [20, 20, 20, 20, 20, 25, 30, 45, 75, 90, 85, 65, 40, 35, 50, 75, 95, 100, 95, 85, 65, 40, 30, 20];
      default:
        return [30, 30, 30, 30, 40, 50, 60, 70, 80, 85, 80, 75, 70, 70, 75, 80, 85, 90, 85, 75, 60, 50, 40, 30];
    }
  };

  const curveData = getCurveHeights(selectedTech);
  const hours = [
    "00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11",
    "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"
  ];

  return (
    <div className="bg-panel border border-line rounded-3xl p-6 sm:p-10 lg:p-12 shadow-subtle relative overflow-hidden">
      {/* Interactive Building Block Selectors */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
        {technologyData.buildingBlocks.map((item) => {
          const isSelected = item.name === selectedTech;
          return (
            <button
              key={item.name}
              type="button"
              onClick={() => setSelectedTech(item.name)}
              className={cn(
                "p-4 rounded-2xl border text-center transition-all duration-300 flex flex-col items-center justify-center gap-2 group",
                isSelected
                  ? "bg-panel-2 border-green shadow-sm scale-105"
                  : "bg-panel border-line hover:border-line-strong hover:bg-panel-2/60"
              )}
            >
              <div
                className={cn(
                  "p-2 rounded-xl border transition-colors",
                  isSelected
                    ? "bg-green/10 border-green text-green"
                    : "bg-panel border-line text-soft group-hover:text-ink"
                )}
              >
                {getTechIcon(item.name)}
              </div>

              <div>
                <span
                  className={cn(
                    "block font-heading text-sm font-semibold tracking-tight",
                    isSelected ? "text-green" : "text-ink"
                  )}
                >
                  {item.name}
                </span>
                <span className="font-mono text-[10px] text-amber uppercase font-medium">
                  {item.role}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Visual Energy Dispatch Curve */}
      <div className="bg-panel-2 border border-line rounded-2xl p-6 sm:p-8 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-xs uppercase tracking-widest text-green font-semibold">
                Diurnal Generation Profile Simulation
              </span>
              <span className="text-soft">·</span>
              <span className="font-mono text-xs text-amber">{tech.name} Stack</span>
            </div>
            <h4 className="text-xl font-semibold text-ink">
              24-Hour Dispatch &amp; Offtake Envelope
            </h4>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-soft">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-green" />
              <span>{tech.name} Profile</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-1 bg-amber" />
              <span>Offtaker Demand Block</span>
            </div>
          </div>
        </div>

        {/* Dynamic Graphic SVG Curve */}
        <div className="relative h-48 sm:h-56 w-full flex items-end justify-between gap-1 pt-6 px-2 border-b border-line">
          {curveData.map((height, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end group relative">
              {/* Tooltip */}
              <div className="absolute -top-7 opacity-0 group-hover:opacity-100 transition-opacity bg-ink text-bg px-1.5 py-0.5 rounded text-[9px] font-mono pointer-events-none whitespace-nowrap z-20">
                {hours[idx]}:00 · {height}%
              </div>

              {/* Bar representation */}
              <div
                style={{ height: `${height}%` }}
                className={cn(
                  "w-full rounded-t-sm transition-all duration-500 ease-out",
                  height > 70
                    ? "bg-green shadow-glow"
                    : height > 30
                    ? "bg-green/70"
                    : "bg-green/30"
                )}
              />
            </div>
          ))}

          {/* Reference Contracted Offtake Flat Firm Line (80% baseline requirement) */}
          <div
            className="absolute left-0 right-0 border-t-2 border-dashed border-amber/70 pointer-events-none"
            style={{ bottom: "65%" }}
          >
            <span className="absolute right-2 -top-5 font-mono text-[9px] uppercase tracking-wider text-amber font-semibold bg-panel px-1 rounded">
              Contracted Firm Delivery Threshold
            </span>
          </div>
        </div>

        {/* 24 Hour Ticks */}
        <div className="flex justify-between text-[10px] font-mono text-faint mt-2 px-2">
          <span>00:00 (Night)</span>
          <span>06:00 (Dawn)</span>
          <span>12:00 (Solar Peak)</span>
          <span>18:00 (Evening Peak)</span>
          <span>23:00 (Night)</span>
        </div>
      </div>

      {/* Selected Technology Building Block Specifications */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <div className="p-4 bg-panel-2 border border-line/60 rounded-xl">
          <span className="block font-mono text-[10px] uppercase text-amber tracking-wider mb-1 font-semibold">
            Generation Characteristic
          </span>
          <p className="text-xs text-soft leading-relaxed">
            {tech.generationProfile}
          </p>
        </div>

        <div className="p-4 bg-panel-2 border border-line/60 rounded-xl">
          <span className="block font-mono text-[10px] uppercase text-green tracking-wider mb-1 font-semibold">
            Dispatch Flexibility
          </span>
          <p className="text-xs text-soft leading-relaxed">
            {tech.dispatchCharacteristics}
          </p>
        </div>

        <div className="p-4 bg-panel-2 border border-line/60 rounded-xl">
          <span className="block font-mono text-[10px] uppercase text-blue tracking-wider mb-1 font-semibold">
            Delivered-Cost Value
          </span>
          <p className="text-xs text-soft leading-relaxed">
            {tech.commercialValue}
          </p>
        </div>
      </div>
    </div>
  );
}
