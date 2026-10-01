import React from "react";
import { esgData } from "@/data/esg";
import { Leaf, Users, Shield, HeartPulse, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function ESGSection() {
  const getPillarIcon = (id: string) => {
    switch (id) {
      case "environment":
        return <Leaf className="w-5 h-5 text-green" />;
      case "social":
        return <Users className="w-5 h-5 text-blue" />;
      case "governance":
        return <Shield className="w-5 h-5 text-blue" />;
      case "hse":
        return <HeartPulse className="w-5 h-5 text-green" />;
      default:
        return <Leaf className="w-5 h-5 text-green" />;
    }
  };

  return (
    <div className="space-y-12">
      {/* 4 ESG Dimensions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {esgData.pillars.map((pillar, idx) => {
          const isBlueTopic = idx === 1 || idx === 2;
          return (
            <div
              key={pillar.id}
              className={cn(
                "p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-card relative overflow-hidden group border",
                isBlueTopic
                  ? "bg-panel-2 border-blue/20 hover:border-blue/50"
                  : "bg-panel border-line hover:border-green/40"
              )}
            >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-amber font-semibold">
                  Operating Pillar · {pillar.pillar}
                </span>
                <div className="p-2 rounded-xl bg-panel-2 border border-line">
                  {getPillarIcon(pillar.id)}
                </div>
              </div>

              <h3 className="font-heading text-2xl font-bold text-ink tracking-tight mb-2">
                {pillar.pillar}
              </h3>

              <p className="text-xs font-mono uppercase tracking-wider text-green font-semibold mb-4">
                {pillar.tagline}
              </p>

              <p className="text-sm text-soft leading-relaxed font-normal mb-6">
                {pillar.description}
              </p>

              {/* Core Institutional Standards */}
              <div className="space-y-2.5 pt-4 border-t border-line/60">
                {pillar.corePillars.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-soft">
                    <CheckCircle2 className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-ink">{item.title}: </span>
                      <span>{item.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-line/60 flex items-center justify-between text-xs font-mono text-faint">
              <span>Framework Benchmark</span>
              <span className="text-ink font-semibold">{pillar.frameworkAlignment}</span>
            </div>
          </div>
        );
        })}
      </div>
    </div>
  );
}
