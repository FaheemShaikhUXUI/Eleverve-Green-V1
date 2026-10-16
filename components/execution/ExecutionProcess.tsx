import React from "react";
import Image from "next/image";
import { executionData } from "@/data/execution";
import { CheckCircle2, Compass, Layers, ShieldCheck, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

const routeImages: Record<string, string> = {
  "Greenfield": "/images/solar-substation.jpg",
  "Brownfield": "/images/bess-facility.jpg",
};

const phaseImages: Record<string, string> = {
  "01": "/images/heroes/execution.jpg",
  "02": "/images/wind-landscape.jpg",
  "03": "/images/heroes/solutions.jpg",
  "04": "/images/dispatch-center.jpg",
};

export function ExecutionProcess() {
  const getPhaseIcon = (phase: string) => {
    switch (phase) {
      case "01":
        return <Compass className="w-4 h-4" />;
      case "02":
        return <Layers className="w-4 h-4" />;
      case "03":
        return <ShieldCheck className="w-4 h-4" />;
      case "04":
        return <Activity className="w-4 h-4" />;
      default:
        return <Compass className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-12">
      {/* 2 Routes: Greenfield vs Brownfield with Top Images & Zero Curves */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {executionData.routes.map((route, rIdx) => {
          const isBlueTopic = rIdx === 1;
          const imageSrc = routeImages[route.name] || "/images/solar-substation.jpg";

          return (
            <div
              key={route.name}
              className="rounded-none border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)] flex flex-col group overflow-hidden relative"
            >
              {/* Luminous Top Hover Beam */}
              <div
                className={cn(
                  "absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30",
                  isBlueTopic
                    ? "bg-gradient-to-r from-transparent via-sky-400 to-transparent"
                    : "bg-gradient-to-r from-transparent via-green to-transparent"
                )}
              />

              {/* Top Image Banner */}
              <div className="relative w-full h-48 sm:h-56 overflow-hidden rounded-none border-b border-neutral-200 dark:border-neutral-800 bg-neutral-900">
                <Image
                  src={imageSrc}
                  alt={route.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/35 group-hover:opacity-85 transition-opacity duration-500 pointer-events-none" />

                {/* Overlays on Image */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1 bg-black/65 backdrop-blur-md border border-white/20 text-white rounded-none">
                  <span
                    className={cn(
                      "w-2 h-2 rounded-full transition-transform duration-300 group-hover:scale-125",
                      isBlueTopic
                        ? "bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]"
                        : "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"
                    )}
                  />
                  <span className="font-mono text-[11px] font-semibold tracking-widest uppercase">
                    {route.routeNumber}
                  </span>
                </div>

                <div className="absolute top-4 right-4 z-10 px-2.5 py-1 bg-black/50 backdrop-blur-md border border-white/10 font-mono text-[10px] text-white/80 tracking-widest uppercase rounded-none">
                  EXECUTION MODEL
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 sm:p-10 flex flex-col flex-1 justify-between bg-white dark:bg-neutral-950 transition-colors duration-300">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-ink tracking-tight mb-2 group-hover:text-green transition-colors duration-300">
                    {route.name}
                  </h3>

                  <p
                    className={cn(
                      "text-sm font-semibold mb-4 font-mono",
                      isBlueTopic ? "text-sky-600 dark:text-sky-400" : "text-emerald-600 dark:text-emerald-400"
                    )}
                  >
                    {route.tagline}
                  </p>

                  <p className="text-sm text-soft leading-relaxed font-normal mb-8">
                    {route.description}
                  </p>
                </div>

                <div className="space-y-3 pt-6 border-t border-neutral-200 dark:border-neutral-800">
                  <span className="block font-mono text-xs uppercase tracking-wider text-ink font-semibold">
                    Core Execution Diligence:
                  </span>
                  {route.keyDiligence.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-soft leading-relaxed">
                      <CheckCircle2
                        className={cn(
                          "w-4 h-4 flex-shrink-0 mt-0.5",
                          isBlueTopic ? "text-sky-500" : "text-green"
                        )}
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 4 Phase Sequential Operational Pipeline with Top Image Banners */}
      <div>
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
            <span className="font-mono text-xs uppercase tracking-widest text-ink font-bold">
              Sequential Lifecycle Discipline
            </span>
          </div>
          <span className="font-mono text-xs text-soft">
            Assess → Design → Structure → Operate
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {executionData.phases.map((phase, pIdx) => {
            const isBluePhase = pIdx % 2 === 1;
            const phaseImage = phaseImages[phase.phase] || "/images/heroes/execution.jpg";

            return (
              <div
                key={phase.phase}
                className="rounded-none border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 flex flex-col justify-between transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-[0_20px_35px_-10px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_20px_35px_-10px_rgba(0,0,0,0.6)] group overflow-hidden relative"
              >
                {/* Luminous Top Hover Beam */}
                <div
                  className={cn(
                    "absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30",
                    isBluePhase
                      ? "bg-gradient-to-r from-transparent via-sky-400 to-transparent"
                      : "bg-gradient-to-r from-transparent via-green to-transparent"
                  )}
                />

                {/* Top Image Banner on Each Phase Tile */}
                <div className="relative w-full h-52 sm:h-56 overflow-hidden rounded-none border-b border-neutral-200 dark:border-neutral-800 bg-neutral-900">
                  <Image
                    src={phaseImage}
                    alt={phase.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* High contrast gradient overlay for clear text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/35 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" />

                  {/* Overlays on Image - Top badges */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 bg-black/70 backdrop-blur-md border border-white/20 text-white rounded-none">
                    <span
                      className={cn(
                        "w-1.5 h-1.5 rounded-full transition-transform duration-300 group-hover:scale-125",
                        isBluePhase
                          ? "bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]"
                          : "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"
                      )}
                    />
                    <span className="font-mono text-[10px] font-semibold tracking-wider uppercase text-neutral-200">
                      PHASE // {phase.phase}
                    </span>
                  </div>

                  <div
                    className={cn(
                      "absolute top-3 right-3 z-10 p-1.5 rounded-none border backdrop-blur-md transition-all duration-300",
                      "bg-black/60 text-white/90 border-white/20 group-hover:bg-green group-hover:text-white group-hover:border-green group-hover:scale-105"
                    )}
                  >
                    {getPhaseIcon(phase.phase)}
                  </div>

                  {/* Headline & Title Text on Image */}
                  <div className="absolute bottom-3 left-3 right-3 z-20">
                    <h4 className="text-xl sm:text-2xl font-bold font-heading text-white tracking-tight drop-shadow-md group-hover:text-emerald-300 transition-colors duration-300 mb-1">
                      {phase.name}
                    </h4>
                    <p
                      className={cn(
                        "text-xs font-semibold font-mono leading-snug drop-shadow-sm line-clamp-2",
                        isBluePhase ? "text-sky-300" : "text-emerald-300"
                      )}
                    >
                      {phase.title}
                    </p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex flex-col flex-1 justify-between bg-white dark:bg-neutral-900 transition-colors duration-300">
                  <div>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-5 font-normal">
                      {phase.detail}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 space-y-2">
                    {phase.activities.map((act, i) => (
                      <div key={i} className="text-[11px] font-mono text-neutral-600 dark:text-neutral-400 flex items-center gap-2">
                        <span
                          className={cn(
                            "w-1 h-1 rounded-none flex-shrink-0",
                            isBluePhase ? "bg-sky-500" : "bg-emerald-500"
                          )}
                        />
                        <span className="line-clamp-1">{act}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
