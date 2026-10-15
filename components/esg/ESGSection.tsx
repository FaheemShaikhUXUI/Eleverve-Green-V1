"use client";

import React from "react";
import Image from "next/image";
import { esgData } from "@/data/esg";
import { Leaf, Users, Shield, HeartPulse, CheckCircle2, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const pillarImages: Record<string, string> = {
  environment: "/images/heroes/esg.jpg",
  social: "/images/heroes/team.jpg",
  governance: "/images/heroes/platform.jpg",
  hse: "/images/heroes/execution.jpg",
};

export function ESGSection() {
  const getPillarIcon = (id: string) => {
    switch (id) {
      case "environment":
        return <Leaf className="w-4 h-4 text-emerald-400" />;
      case "social":
        return <Users className="w-4 h-4 text-sky-400" />;
      case "governance":
        return <Shield className="w-4 h-4 text-amber-400" />;
      case "hse":
        return <HeartPulse className="w-4 h-4 text-emerald-400" />;
      default:
        return <Leaf className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <div className="space-y-12">
      {/* 4 ESG Dimensions Grid - Zero Curves Architectural Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {esgData.pillars.map((pillar, idx) => {
          const imageSrc = pillarImages[pillar.id] || "/images/heroes/esg.jpg";

          return (
            <div
              key={pillar.id}
              className={cn(
                "rounded-none border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 flex flex-col justify-between transition-all duration-500 ease-out group relative overflow-hidden",
                "hover:-translate-y-1.5 hover:border-green hover:shadow-[0_25px_45px_-12px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_25px_45px_-12px_rgba(0,0,0,0.7)]"
              )}
            >
              {/* Luminous Top Hover Beam */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-green to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30" />

              <div>
                {/* 1. Suitable Thematic Image on Header of Tile Only */}
                <div className="relative w-full h-48 sm:h-52 overflow-hidden rounded-none border-b border-neutral-200 dark:border-neutral-800 bg-neutral-900">
                  <Image
                    src={imageSrc}
                    alt={pillar.pillar}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30 group-hover:opacity-85 transition-opacity duration-500 pointer-events-none" />

                  {/* Overlays on Header Image */}
                  <div className="absolute top-3.5 left-3.5 z-20 inline-flex items-center gap-2 px-3 py-1 rounded-none bg-black/75 backdrop-blur-md border border-white/20 text-white font-mono text-[10px] uppercase font-bold tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-none bg-green animate-pulse" />
                    <span>OPERATING PILLAR // 0{idx + 1}</span>
                  </div>

                  <div className="absolute top-3.5 right-3.5 z-20 p-2 rounded-none bg-black/75 backdrop-blur-md border border-white/20 group-hover:border-green group-hover:scale-105 transition-all duration-300">
                    {getPillarIcon(pillar.id)}
                  </div>

                  {/* Title & Tagline Over Header Image */}
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight drop-shadow-md mb-1">
                      {pillar.pillar}
                    </h3>
                    <p className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold drop-shadow-sm truncate">
                      // {pillar.tagline}
                    </p>
                  </div>
                </div>

                {/* Card Body & Strategic Details */}
                <div className="p-6 sm:p-8">
                  <p className="text-xs sm:text-sm text-soft leading-relaxed font-normal mb-6">
                    {pillar.description}
                  </p>

                  {/* Core Institutional Standards with Micro-Interactions */}
                  <div className="space-y-3 pt-5 border-t border-neutral-100 dark:border-neutral-800/80">
                    {pillar.corePillars.map((item, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-none bg-neutral-50/60 dark:bg-neutral-900/40 border border-neutral-100 dark:border-neutral-800/60 transition-all duration-200 group/item hover:border-green/40 hover:bg-neutral-50 dark:hover:bg-neutral-900"
                      >
                        <div className="flex items-start gap-2.5 text-xs text-soft">
                          <CheckCircle2 className="w-4 h-4 text-green flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                          <div className="leading-relaxed">
                            <strong className="text-ink font-semibold">{item.title}: </strong>
                            <span>{item.detail}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Framework Benchmark Strip */}
              <div className="px-6 py-4 bg-neutral-50/90 dark:bg-neutral-900/60 border-t border-neutral-100 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                <span className="text-neutral-400 text-[11px]">FRAMEWORK BENCHMARK:</span>
                <span className="px-2.5 py-1 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-ink font-bold tracking-tight">
                  {pillar.frameworkAlignment}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
