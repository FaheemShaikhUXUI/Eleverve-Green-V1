"use client";

import React from "react";
import Image from "next/image";
import { companyData } from "@/data/company";
import { Shield, Zap, Landmark, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const ecosystemImages: Record<string, string> = {
  "Eleverve Green": "/images/solar-substation.jpg",
  "Elements Financial Solutions": "/images/heroes/whynow.jpg",
  "Transvolt Mobility": "/images/heroes/solutions.jpg",
};

export function EcosystemSection() {
  const getEcosystemIcon = (name: string) => {
    switch (name) {
      case "Eleverve Green":
        return <Zap className="w-4 h-4 text-emerald-400" />;
      case "Elements Financial Solutions":
        return <Landmark className="w-4 h-4 text-sky-400" />;
      case "Transvolt Mobility":
        return <Shield className="w-4 h-4 text-amber-400" />;
      default:
        return <Zap className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      {companyData.ecosystem.map((item, idx) => {
        const imageSrc = ecosystemImages[item.name] || "/images/solar-substation.jpg";

        return (
          <div
            key={item.name}
            className={cn(
              "rounded-none border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 flex flex-col justify-between transition-all duration-500 ease-out group relative overflow-hidden",
              "hover:-translate-y-1.5 hover:border-green hover:shadow-[0_25px_45px_-12px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_25px_45px_-12px_rgba(0,0,0,0.7)]"
            )}
          >
            {/* Luminous Top Hover Beam */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-green to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30" />

            <div>
              {/* Header Image on Tile */}
              <div className="relative w-full h-44 sm:h-48 overflow-hidden rounded-none border-b border-neutral-200 dark:border-neutral-800 bg-neutral-900">
                <Image
                  src={imageSrc}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/35 group-hover:opacity-85 transition-opacity duration-500 pointer-events-none" />

                {/* Overlays on Header Image */}
                <div className="absolute top-3.5 left-3.5 z-20 inline-flex items-center gap-2 px-3 py-1 rounded-none bg-black/75 backdrop-blur-md border border-white/20 text-white font-mono text-[10px] uppercase font-bold tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-none bg-green animate-pulse" />
                  <span>{item.tag}</span>
                </div>

                <div className="absolute top-3.5 right-3.5 z-20 p-2 rounded-none bg-black/75 backdrop-blur-md border border-white/20 group-hover:border-green group-hover:scale-105 transition-all duration-300">
                  {getEcosystemIcon(item.name)}
                </div>

                {/* Title & Role Over Image */}
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-md mb-0.5">
                    {item.name}
                  </h3>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-emerald-400 font-semibold drop-shadow-sm truncate">
                    // {item.role}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7">
                <p className="text-xs sm:text-sm text-soft leading-relaxed font-normal mb-4">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Bottom Institutional Alignment Strip */}
            <div className="px-6 py-3.5 bg-neutral-50/90 dark:bg-neutral-900/60 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs font-mono">
              <span className="text-neutral-400 text-[10px] uppercase">ECOSYSTEM AFFILIATE</span>
              <span className="text-green font-bold text-[11px] flex items-center gap-1">
                <span>INSTITUTIONAL SYNERGY</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
