import React from "react";
import { executionData } from "@/data/execution";
import { CheckCircle2, Compass, Layers, ShieldCheck, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

export function ExecutionProcess() {
  const getPhaseIcon = (phase: string) => {
    switch (phase) {
      case "01":
        return <Compass className="w-5 h-5" />;
      case "02":
        return <Layers className="w-5 h-5" />;
      case "03":
        return <ShieldCheck className="w-5 h-5" />;
      case "04":
        return <Activity className="w-5 h-5" />;
      default:
        return <Compass className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-12">
      {/* 2 Routes: Greenfield vs Brownfield */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {executionData.routes.map((route, rIdx) => {
          const isBlueTopic = rIdx === 1;
          return (
            <div
              key={route.name}
              className={cn(
                "p-8 sm:p-10 rounded-3xl relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-card group border border-line hover:border-line-strong",
                isBlueTopic ? "bg-panel-2" : "bg-panel"
              )}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={cn(
                    "font-mono text-xs uppercase tracking-widest font-semibold",
                    isBlueTopic ? "text-blue" : "text-amber"
                  )}
                >
                  {route.routeNumber}
                </span>
                <span
                  className={cn(
                    "w-2 h-2 rounded-full",
                    isBlueTopic ? "bg-blue" : "bg-green"
                  )}
                />
              </div>

              <h3 className="text-3xl font-semibold text-ink tracking-tight mb-2">
                {route.name}
              </h3>

              <p
                className={cn(
                  "text-sm font-medium mb-4",
                  isBlueTopic ? "text-blue" : "text-green"
                )}
              >
                {route.tagline}
              </p>

              <p className="text-sm text-soft leading-relaxed font-normal mb-6">
                {route.description}
              </p>

              <div className="space-y-2.5 pt-4 border-t border-line">
                <span className="block font-mono text-[11px] uppercase tracking-wider text-ink font-semibold">
                  Core Execution Diligence:
                </span>
                {route.keyDiligence.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-soft">
                    <CheckCircle2
                      className={cn(
                        "w-4 h-4 flex-shrink-0 mt-0.5",
                        isBlueTopic ? "text-blue" : "text-green"
                      )}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* 4 Phase Sequential Operational Pipeline */}
      <div>
        <div className="mb-6 flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-widest text-green font-semibold">
            Sequential Lifecycle Discipline
          </span>
          <span className="font-mono text-xs text-faint">
            Assess → Design → Structure → Operate
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {executionData.phases.map((phase, pIdx) => {
            const isBluePhase = pIdx % 2 === 1;
            return (
              <div
                key={phase.phase}
                className={cn(
                  "p-6 rounded-2xl flex flex-col justify-between transition-all group border border-line hover:border-line-strong",
                  isBluePhase ? "bg-panel-2" : "bg-panel"
                )}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={cn(
                        "w-8 h-8 rounded-xl border flex items-center justify-center font-mono text-xs font-semibold",
                        isBluePhase
                          ? "bg-blue/10 border-blue/20 text-blue"
                          : "bg-green/10 border-green/20 text-green"
                      )}
                    >
                      {phase.phase}
                    </span>
                    <div
                      className={cn(
                        "transition-colors",
                        isBluePhase ? "text-blue" : "text-soft group-hover:text-green"
                      )}
                    >
                      {getPhaseIcon(phase.phase)}
                    </div>
                  </div>

                  <h4 className="font-heading text-lg font-medium text-ink mb-1">
                    {phase.name}
                  </h4>

                  <p
                    className={cn(
                      "text-xs font-medium mb-3",
                      isBluePhase ? "text-blue" : "text-green"
                    )}
                  >
                    {phase.title}
                  </p>

                  <p className="text-xs text-soft leading-relaxed mb-4">
                    {phase.detail}
                  </p>
                </div>

                <div className="pt-3 border-t border-line space-y-1">
                  {phase.activities.map((act, i) => (
                    <div key={i} className="text-[11px] font-mono text-faint flex items-center gap-1.5">
                      <span
                        className={cn(
                          "w-1 h-1 rounded-full",
                          isBluePhase ? "bg-blue" : "bg-green"
                        )}
                      />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
