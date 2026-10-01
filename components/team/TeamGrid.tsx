import React from "react";
import { teamData } from "@/data/team";
import { Badge } from "@/components/ui/Badge";
import { Shield } from "lucide-react";

export function TeamGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      {teamData.map((member, idx) => (
        <div
          key={member.id}
          className="p-8 bg-panel border border-line rounded-3xl flex flex-col justify-between transition-all duration-300 hover:border-green/40 hover:-translate-y-1 hover:shadow-card relative overflow-hidden group"
        >
          <div>
            {/* Top Bar with Number and Abstract Typographic Seal */}
            <div className="flex items-center justify-between mb-8">
              <span className="font-mono text-xs font-semibold text-green">
                0{idx + 1}
              </span>

              {/* Abstract Typographic Monogram Avatar */}
              <div className="w-14 h-14 rounded-2xl bg-panel-2 border border-line flex items-center justify-center font-heading text-lg font-semibold text-green group-hover:border-green group-hover:scale-105 transition-all shadow-sm">
                {member.initials}
              </div>
            </div>

            {/* Name and Official Title */}
            <h3 className="font-heading text-2xl font-bold text-ink tracking-tight mb-1">
              {member.name}
            </h3>

            <div className="font-mono text-xs uppercase tracking-wider text-amber font-semibold mb-6">
              {member.role}
            </div>

            {/* Factual Biography (No Hallucinations) */}
            <p className="text-sm text-soft leading-relaxed font-normal mb-6">
              {member.bio}
            </p>
          </div>

          {/* Core Expertise Tags */}
          <div className="pt-4 border-t border-line/60">
            <span className="block font-mono text-[10px] uppercase text-faint tracking-wider mb-2">
              Domain Discipline
            </span>
            <div className="flex flex-wrap gap-1.5">
              {member.expertise.map((tag, i) => (
                <Badge key={i} variant="outline" className="text-[9px]">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
