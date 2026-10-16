"use client";

import React, { useState } from "react";
import { teamData, TeamMember } from "@/data/team";
import { ArrowUpRight, CheckCircle2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function TeamGrid() {
  const [activeMember, setActiveMember] = useState<TeamMember | null>(null);

  return (
    <div className="space-y-6">
      {/* 3 Leadership Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {teamData.map((member, idx) => {
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

              <div className="p-6 sm:p-7 flex-1 flex flex-col">
                {/* Person Intro Header: Circle Avatar + Name & Designation Next To It */}
                <div className="flex items-center gap-4 sm:gap-5 pb-5 border-b border-neutral-100 dark:border-neutral-800">
                  {/* Person in Circle */}
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-br from-emerald-500/15 via-emerald-500/10 to-teal-500/20 border-2 border-emerald-500/35 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-heading font-extrabold text-xl sm:text-2xl shadow-sm group-hover:scale-105 group-hover:border-green transition-all duration-300">
                      {member.initials}
                    </div>
                    {/* Active Verification Dot */}
                    <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-green border-2 border-white dark:border-neutral-950 flex items-center justify-center shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>
                  </div>

                  {/* Name and Designation Next to Circle */}
                  <div className="flex-1 min-w-0">
                    <div className="inline-flex items-center gap-1.5 text-[10px] font-mono text-neutral-500 uppercase tracking-widest font-semibold mb-1">
                      <span>LEADERSHIP // 0{idx + 1}</span>
                    </div>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-neutral-900 group-hover:text-green transition-colors tracking-tight truncate">
                      {member.name}
                    </h3>
                    <p className="font-mono text-xs uppercase tracking-wider text-green font-semibold mt-0.5 line-clamp-1">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Below: All His Information */}
                <div className="pt-5 flex-1 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal mb-6">
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
                          className="px-2.5 py-1 rounded-none bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-[10px] font-mono text-neutral-600 dark:text-neutral-400 group-hover:border-green/30 group-hover:text-green transition-colors"
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
                    <h3 className="font-heading text-xl font-bold text-neutral-900 dark:text-white">
                      {activeMember.name}
                    </h3>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveMember(null)}
                  className="p-2 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <span className="font-mono text-xs uppercase text-green font-semibold block mb-1">
                    ROLE &amp; FIDUCIARY RESPONSIBILITY
                  </span>
                  <p className="font-heading text-lg font-bold text-neutral-900 dark:text-white mb-3">
                    {activeMember.role}
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
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
                        <span className="font-semibold text-neutral-900 dark:text-white">{tag}</span>
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
