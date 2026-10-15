"use client";

import React, { useState } from "react";
import Image from "next/image";
import { teamData, TeamMember } from "@/data/team";
import { ArrowUpRight, Shield, Award, CheckCircle2, X, Briefcase, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const leaderImages: Record<string, string> = {
  "dheeraj-jhawar": "/images/team/blank-leader.jpg",
  "sandeep-agarwal": "/images/team/blank-leader.jpg",
  "pratap-malempati": "/images/team/blank-leader.jpg",
};

export function TeamGrid() {
  const [activeMember, setActiveMember] = useState<TeamMember | null>(null);

  return (
    <div className="space-y-6">
      {/* 3 Leadership Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {teamData.map((member, idx) => {
          const imageSrc = leaderImages[member.id] || "/images/team/blank-leader.jpg";

          return (
            <div
              key={member.id}
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
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/35 group-hover:opacity-85 transition-opacity duration-500 pointer-events-none" />

                  {/* Top Header Overlays */}
                  <div className="absolute top-3.5 left-3.5 z-20 inline-flex items-center gap-2 px-3 py-1 rounded-none bg-black/75 backdrop-blur-md border border-white/20 text-white font-mono text-[10px] uppercase font-bold tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-none bg-green animate-pulse" />
                    <span>LEADERSHIP // 0{idx + 1}</span>
                  </div>

                  {/* Monogram Seal Avatar */}
                  <div className="absolute top-3.5 right-3.5 z-20 w-11 h-11 rounded-none bg-black/80 backdrop-blur-md border border-white/20 text-emerald-400 flex items-center justify-center font-heading text-sm font-extrabold tracking-wider group-hover:border-green group-hover:scale-105 transition-all duration-300">
                    {member.initials}
                  </div>

                  {/* Name and Official Title Over Header Image */}
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <div className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-md mb-0.5">
                      {member.name}
                    </div>
                    <div className="font-mono text-[11px] uppercase tracking-wider text-emerald-400 font-semibold drop-shadow-sm truncate">
                      // {member.role}
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7">
                  <p className="text-xs sm:text-sm text-soft leading-relaxed font-normal mb-6">
                    {member.bio}
                  </p>

                  {/* Domain Discipline Badges */}
                  <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800">
                    <span className="block font-mono text-[10px] uppercase text-neutral-400 font-semibold tracking-wider mb-2.5">
                      // DOMAIN DISCIPLINE &amp; EXECUTION
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {member.expertise.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-none bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-[10px] font-mono text-soft group-hover:border-green/30 group-hover:text-ink transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Interactive Mandate Bar */}
              <div className="px-6 py-3.5 bg-neutral-50/90 dark:bg-neutral-900/60 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-400 text-[10px] uppercase">{member.category} PROFILE</span>
                <button
                  type="button"
                  onClick={() => setActiveMember(member)}
                  className="inline-flex items-center gap-1.5 text-green font-bold text-[11px] group-hover:text-emerald-500 transition-colors cursor-pointer"
                >
                  <span>VIEW MANDATE</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Leadership Credential & Mandate Dossier Modal */}
      <AnimatePresence>
        {activeMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-none w-full max-w-xl overflow-hidden shadow-2xl relative"
            >
              {/* Header */}
              <div className="p-6 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between bg-neutral-50 dark:bg-neutral-900">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-none bg-green/10 border border-green/30 flex items-center justify-center text-green font-heading font-extrabold text-sm">
                    {activeMember.initials}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-green font-bold block">
                      LEADERSHIP PROFILE // {activeMember.category.toUpperCase()}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-ink">
                      {activeMember.name}
                    </h3>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveMember(null)}
                  className="p-2 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4 text-ink" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <span className="font-mono text-xs uppercase text-green font-semibold block mb-1">
                    ROLE &amp; FIDUCIARY RESPONSIBILITY
                  </span>
                  <p className="font-heading text-lg font-bold text-ink mb-3">
                    {activeMember.role}
                  </p>
                  <p className="text-xs sm:text-sm text-soft leading-relaxed font-normal">
                    {activeMember.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800">
                  <span className="block font-mono text-xs uppercase text-neutral-400 font-semibold tracking-wider mb-3">
                    SPECIALIZED PLATFORM DISCIPLINES
                  </span>
                  <div className="grid grid-cols-1 gap-2.5">
                    {activeMember.expertise.map((tag, i) => (
                      <div
                        key={i}
                        className="p-3 bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 flex items-center gap-3 text-xs font-mono"
                      >
                        <CheckCircle2 className="w-4 h-4 text-green flex-shrink-0" />
                        <span className="font-semibold text-ink">{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setActiveMember(null)}
                    className="px-5 py-2.5 bg-green text-white font-mono text-xs font-bold hover:bg-emerald-600 transition-colors rounded-none cursor-pointer"
                  >
                    DISMISS PROFILE
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
