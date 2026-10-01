import React from "react";
import { companyData } from "@/data/company";
import { Shield, Zap, Landmark, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function EcosystemSection() {
  const getEcosystemIcon = (name: string) => {
    switch (name) {
      case "Eleverve Green":
        return <Zap className="w-5 h-5" />;
      case "Elements Financial Solutions":
        return <Landmark className="w-5 h-5" />;
      case "Transvolt Mobility":
        return <Shield className="w-5 h-5" />;
      default:
        return <Zap className="w-5 h-5" />;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {companyData.ecosystem.map((item, idx) => {
        const isBlueTopic = idx === 1;
        return (
          <div
            key={item.name}
            className={cn(
              "p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-card relative overflow-hidden group border",
              isBlueTopic
                ? "bg-panel-2 border-blue/20 hover:border-blue/50"
                : "bg-panel border-line hover:border-green/40"
            )}
          >
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs uppercase tracking-widest text-green font-semibold">
                {item.tag}
              </span>
              <div className="p-2 rounded-xl bg-panel-2 border border-line text-green group-hover:border-green transition-colors">
                {getEcosystemIcon(item.name)}
              </div>
            </div>

            <h3 className="font-heading text-2xl font-bold text-ink tracking-tight mb-2">
              {item.name}
            </h3>

            <div className="font-mono text-xs uppercase tracking-wider text-amber font-semibold mb-4">
              {item.role}
            </div>

            <p className="text-sm text-soft leading-relaxed font-normal">
              {item.description}
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-line/60 flex items-center justify-between text-xs font-mono text-faint">
            <span>Ecosystem Affiliate</span>
            <span className="text-green font-semibold">Institutional Alignment</span>
          </div>
        </div>
      );
      })}
    </div>
  );
}
