import React from "react";
import Image from "next/image";
import { platformCapabilities } from "@/data/platform";
import { cn } from "@/lib/utils";

const capabilityImages: Record<string, string> = {
  "01": "/images/solar-substation.jpg",
  "02": "/images/wind-landscape.jpg",
  "03": "/images/heroes/execution.jpg",
  "04": "/images/dispatch-center.jpg",
  "05": "/images/bess-facility.jpg",
};

export function CapabilitiesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {platformCapabilities.map((cap, idx) => {
        const isBlueTopic = idx % 2 === 1;
        const imageSrc = capabilityImages[cap.number] || "/images/solar-substation.jpg";

        return (
          <div
            key={cap.number}
            className={cn(
              "rounded-none border border-white/10 bg-black/40 backdrop-blur-sm transition-all duration-500 ease-out hover:border-emerald-500/40 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)] flex flex-col group overflow-hidden relative",
              cap.isWide && "md:col-span-2"
            )}
          >
            {/* Luminous Top Hover Beam */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30" />

            {/* Top Image Banner with Telemetry Badges */}
            <div
              className={cn(
                "relative w-full overflow-hidden rounded-none border-b border-white/10 bg-neutral-900",
                cap.isWide ? "h-56 sm:h-64 md:h-72" : "h-48 sm:h-56"
              )}
            >
              <Image
                src={imageSrc}
                alt={cap.subtitle}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/35 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none" />

              {/* Top Overlays */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1 bg-black/75 backdrop-blur-md border border-white/20 text-white rounded-none transition-transform duration-300 group-hover:translate-x-0.5">
                <span
                  className={cn(
                    "w-2 h-2 rounded-full transition-transform duration-300 group-hover:scale-125",
                    isBlueTopic
                      ? "bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]"
                      : "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"
                  )}
                />
                <span className="font-mono text-[11px] font-semibold tracking-widest uppercase text-white">
                  {cap.number} · {cap.title}
                </span>
              </div>

              <div className="absolute top-4 right-4 z-10 px-2.5 py-1 bg-black/60 backdrop-blur-md border border-white/15 font-mono text-[10px] text-white/90 tracking-widest uppercase rounded-none transition-colors duration-300 group-hover:border-white/30 group-hover:text-white">
                PILLAR // {cap.number}
              </div>
            </div>

            {/* Bottom Content Body — No White Fill, Text in the Air */}
            <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between bg-transparent transition-colors duration-300">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white tracking-tight mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                  {cap.subtitle}
                </h3>

                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal mb-6">
                  {cap.description}
                </p>
              </div>

              <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider">
                  Platform Architecture Principle
                </span>
                <span className="font-mono text-[11px] text-emerald-400 uppercase font-semibold flex items-center gap-1.5 transition-colors duration-300 group-hover:text-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform duration-300" />
                  Institutional Standard
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
