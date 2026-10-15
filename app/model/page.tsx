import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { PageHeroHeader } from "@/components/ui/PageHeroHeader";
import { MediaSplitSection } from "@/components/ui/MediaSplitSection";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, TrendingUp, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Model — Eleverve Green",
  description:
    "We own and operate — delivering firm power through utility-scale PPAs and Energy-as-a-Service. An owner-operator, not a build-and-flip developer.",
};

import { StaggerGrid, StaggerItem, SlideInBottom } from "@/components/ui/PageTransition";

export default function ModelPage() {
  return (
    <div className="pb-24">
      {/* Dark Hero Header Extending Behind Fixed Navbar */}
      <PageHeroHeader
        eyebrow="Operating Architecture"
        titleLight="WE OWN AND OPERATE — DELIVERING FIRM POWER THROUGH"
        titleBold="UTILITY-SCALE PPAs AND ENERGY-AS-A-SERVICE."
        description="We are not a build-and-flip developer or a passive investor. We own, operate, and stand behind the delivered energy — through long-term utility PPAs and managed Energy-as-a-Service, whichever fits the offtaker."
        imageSrc="/images/heroes/model.jpg"
        imageAlt="Utility solar rows and wind turbine farm under radiant sun"
        imagePosition="center 60%"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 sm:pt-12">

        {/* 3 Core Operating Principles — Text on Image, 0 Spacing, Zero Curves (Sharp Elegant Architectural Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-neutral-800/80 mb-20 overflow-hidden shadow-2xl rounded-none bg-black">
          {/* Tile 01: Owner-operator */}
          <div className="relative min-h-[480px] sm:min-h-[520px] p-8 sm:p-10 flex flex-col justify-between group overflow-hidden border-b md:border-b-0 md:border-r border-white/20 rounded-none bg-black">
            <Image
              src="/images/solar-substation.jpg"
              alt="Owner-operator solar infrastructure"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Multi-stop Scrim for High Contrast Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/35 pointer-events-none transition-opacity duration-300 group-hover:via-black/50" />

            {/* Top Bar: Numeric Marker + Category Tag */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="w-10 h-10 border border-emerald-400/50 bg-black/80 backdrop-blur-md text-emerald-400 flex items-center justify-center font-mono text-xs font-bold rounded-none">
                01
              </div>
              <div className="px-3 py-1 bg-black/75 backdrop-blur-md border border-white/20 text-[11px] font-mono uppercase tracking-widest text-emerald-300 rounded-none font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-none inline-block"></span>
                25-Year Lifecycle Horizon
              </div>
            </div>

            {/* Bottom Content: Headline + Description + Divider */}
            <div className="relative z-10">
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3 leading-tight drop-shadow-md">
                Owner-operator, not a developer
              </h3>
              <p className="text-sm text-neutral-200 leading-relaxed font-normal mb-6 drop-shadow-xs">
                We don’t build to flip. We own and operate for the long term, accountable for generation yield, availability factors, and equipment longevity decades after commissioning.
              </p>

              <div className="pt-4 border-t border-white/20 flex items-center justify-between text-xs font-mono text-emerald-400 uppercase tracking-wider">
                <span>Asset Stewardship</span>
                <span className="text-white/60">→ Long-Term</span>
              </div>
            </div>
          </div>

          {/* Tile 02: Two ways to contract */}
          <div className="relative min-h-[480px] sm:min-h-[520px] p-8 sm:p-10 flex flex-col justify-between group overflow-hidden border-b md:border-b-0 md:border-r border-white/20 rounded-none bg-black">
            <Image
              src="/images/bess-facility.jpg"
              alt="Two ways to contract energy storage facility"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Multi-stop Scrim for High Contrast Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/35 pointer-events-none transition-opacity duration-300 group-hover:via-black/50" />

            {/* Top Bar: Numeric Marker + Category Tag */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="w-10 h-10 border border-sky-400/50 bg-black/80 backdrop-blur-md text-sky-400 flex items-center justify-center font-mono text-xs font-bold rounded-none">
                02
              </div>
              <div className="px-3 py-1 bg-black/75 backdrop-blur-md border border-white/20 text-[11px] font-mono uppercase tracking-widest text-sky-300 rounded-none font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-sky-400 rounded-none inline-block"></span>
                Utility PPA &amp; EaaS Options
              </div>
            </div>

            {/* Bottom Content: Headline + Description + Divider */}
            <div className="relative z-10">
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3 leading-tight drop-shadow-md">
                Two ways to contract
              </h3>
              <p className="text-sm text-neutral-200 leading-relaxed font-normal mb-6 drop-shadow-xs">
                Buy through a long-term utility-scale PPA, or as a managed Energy-as-a-Service — generation, firming, scheduling, billing and statutory compliance bundled into one transparent tariff.
              </p>

              <div className="pt-4 border-t border-white/20 flex items-center justify-between text-xs font-mono text-sky-400 uppercase tracking-wider">
                <span>Utility PPA &amp; EaaS</span>
                <span className="text-white/60">→ Bundled Tariff</span>
              </div>
            </div>
          </div>

          {/* Tile 03: Outcome, not just capital */}
          <div className="relative min-h-[480px] sm:min-h-[520px] p-8 sm:p-10 flex flex-col justify-between group overflow-hidden rounded-none bg-black">
            <Image
              src="/images/dispatch-center.jpg"
              alt="Dispatch center managing firm energy outcome"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Multi-stop Scrim for High Contrast Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/35 pointer-events-none transition-opacity duration-300 group-hover:via-black/50" />

            {/* Top Bar: Numeric Marker + Category Tag */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="w-10 h-10 border border-emerald-400/50 bg-black/80 backdrop-blur-md text-emerald-400 flex items-center justify-center font-mono text-xs font-bold rounded-none">
                03
              </div>
              <div className="px-3 py-1 bg-black/75 backdrop-blur-md border border-white/20 text-[11px] font-mono uppercase tracking-widest text-emerald-300 rounded-none font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-none inline-block"></span>
                Delivered MWh Performance
              </div>
            </div>

            {/* Bottom Content: Headline + Description + Divider */}
            <div className="relative z-10">
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3 leading-tight drop-shadow-md">
                Outcome, not just capital
              </h3>
              <p className="text-sm text-neutral-200 leading-relaxed font-normal mb-6 drop-shadow-xs">
                We’re not a passive investor allocating funds and waiting. We deliver — and are measured on — reliable, delivered energy matching the exact hour-by-hour demand curve of our offtakers.
              </p>

              <div className="pt-4 border-t border-white/20 flex items-center justify-between text-xs font-mono text-emerald-400 uppercase tracking-wider">
                <span>Delivered MWh</span>
                <span className="text-white/60">→ Firm Dispatch</span>
              </div>
            </div>
          </div>
        </div>

        {/* Model Comparison Matrix — Latest UI Trend, Zero Curves (rounded-none), Elegant Crisp White Theme */}
        <div className="border border-neutral-200 bg-white mb-20 shadow-xl rounded-none overflow-hidden">
          {/* Header Bar */}
          <div className="p-8 sm:p-10 border-b border-neutral-200 flex flex-col md:flex-row md:items-end justify-between gap-6 bg-neutral-50/60">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-2.5 py-1 bg-emerald-50 border border-emerald-600/30 text-[10px] font-mono uppercase tracking-widest text-emerald-700 font-semibold rounded-none flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-600 rounded-none inline-block animate-pulse"></span>
                  MODEL COMPARISON
                </span>
                <span className="font-mono text-xs text-neutral-400 tracking-wider">
                  // BENCHMARK ARCHITECTURE
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-neutral-900 tracking-tight leading-tight">
                Traditional Developer vs. Eleverve Green Operating Platform
              </h3>
            </div>
            <div className="font-mono text-xs text-neutral-500 flex items-center gap-4 border-t md:border-t-0 md:border-l border-neutral-200 pt-4 md:pt-0 md:pl-6">
              <div>
                <div className="text-[10px] uppercase tracking-wider text-neutral-400">Contract Horizon</div>
                <div className="text-neutral-900 font-semibold">25+ Years Aligned</div>
              </div>
              <div className="w-px h-8 bg-neutral-200"></div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-neutral-400">Accountability</div>
                <div className="text-emerald-700 font-semibold">Delivered MWh</div>
              </div>
            </div>
          </div>

          {/* 2-Column Side-by-Side Comparison Grid (gap-0, rounded-none) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
            {/* Column 01: Typical Build-and-Flip Developer */}
            <div className="p-8 sm:p-10 bg-neutral-50/40 flex flex-col justify-between group hover:bg-neutral-50 transition-colors duration-300">
              <div>
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-neutral-200">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 block mb-1">
                      LEGACY MARKET STRUCTURE
                    </span>
                    <h4 className="font-heading text-xl font-bold text-neutral-900 tracking-tight">
                      Typical Build-and-Flip Developer
                    </h4>
                  </div>
                  <span className="px-2.5 py-1 bg-neutral-100 border border-neutral-300 text-neutral-600 font-mono text-[11px] rounded-none font-semibold">
                    TRANSACTIONAL
                  </span>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3.5 p-4 bg-white border border-neutral-200/90 rounded-none shadow-xs transition-all hover:border-neutral-300">
                    <div className="w-5 h-5 shrink-0 flex items-center justify-center bg-rose-50 border border-rose-300 text-rose-600 font-mono text-xs font-bold rounded-none mt-0.5">
                      ✕
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-neutral-800 leading-snug">
                        Sells capacity at COD or immediate milestone
                      </p>
                      <span className="text-xs text-neutral-500 font-mono mt-0.5 block">
                        Capital exits immediately post-commissioning
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5 p-4 bg-white border border-neutral-200/90 rounded-none shadow-xs transition-all hover:border-neutral-300">
                    <div className="w-5 h-5 shrink-0 flex items-center justify-center bg-rose-50 border border-rose-300 text-rose-600 font-mono text-xs font-bold rounded-none mt-0.5">
                      ✕
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-neutral-800 leading-snug">
                        Incentivized on lowest Capex over long-term reliability
                      </p>
                      <span className="text-xs text-neutral-500 font-mono mt-0.5 block">
                        Short-term procurement discounts maximize margin
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5 p-4 bg-white border border-neutral-200/90 rounded-none shadow-xs transition-all hover:border-neutral-300">
                    <div className="w-5 h-5 shrink-0 flex items-center justify-center bg-rose-50 border border-rose-300 text-rose-600 font-mono text-xs font-bold rounded-none mt-0.5">
                      ✕
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-neutral-800 leading-snug">
                        Disconnected from offtaker schedule deviations post-handover
                      </p>
                      <span className="text-xs text-neutral-500 font-mono mt-0.5 block">
                        No ongoing operational liability for generation gaps
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5 p-4 bg-white border border-neutral-200/90 rounded-none shadow-xs transition-all hover:border-neutral-300">
                    <div className="w-5 h-5 shrink-0 flex items-center justify-center bg-rose-50 border border-rose-300 text-rose-600 font-mono text-xs font-bold rounded-none mt-0.5">
                      ✕
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-neutral-800 leading-snug">
                        Offtaker bears balancing and curtailment risks
                      </p>
                      <span className="text-xs text-neutral-500 font-mono mt-0.5 block">
                        Commercial buyers manage DSM penalties and volatility
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-200 flex items-center justify-between text-xs font-mono text-neutral-500">
                <span>RISK PROFILE</span>
                <span className="text-rose-600 font-semibold">UNHEDGED OFF-TAKER RISK</span>
              </div>
            </div>

            {/* Column 02: Eleverve Green Platform Model */}
            <div className="p-8 sm:p-10 bg-emerald-50/20 flex flex-col justify-between relative group">
              <div className="relative z-10">
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-emerald-300/80">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-700 block mb-1 font-bold">
                      OWNER-OPERATOR DISCIPLINE
                    </span>
                    <h4 className="font-heading text-xl font-bold text-neutral-900 tracking-tight">
                      Eleverve Green Platform Model
                    </h4>
                  </div>
                  <span className="px-2.5 py-1 bg-emerald-100 border border-emerald-300 text-emerald-800 font-mono text-[11px] font-bold rounded-none">
                    STEWARDSHIP
                  </span>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3.5 p-4 bg-white border border-emerald-200 rounded-none shadow-xs transition-all hover:border-emerald-400">
                    <div className="w-5 h-5 shrink-0 flex items-center justify-center bg-emerald-100 border border-emerald-400 text-emerald-700 font-mono text-xs font-bold rounded-none mt-0.5">
                      ✓
                    </div>
                    <div>
                      <p className="text-sm font-bold text-neutral-900 leading-snug">
                        Retains asset ownership and operational control for 25+ years
                      </p>
                      <span className="text-xs text-emerald-800/80 font-mono mt-0.5 block">
                        Lifecycle stewardship with aligned long-term financial interest
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5 p-4 bg-white border border-emerald-200 rounded-none shadow-xs transition-all hover:border-emerald-400">
                    <div className="w-5 h-5 shrink-0 flex items-center justify-center bg-emerald-100 border border-emerald-400 text-emerald-700 font-mono text-xs font-bold rounded-none mt-0.5">
                      ✓
                    </div>
                    <div>
                      <p className="text-sm font-bold text-neutral-900 leading-snug">
                        Tier-1 engineering designed for lifecycle degradation resilience
                      </p>
                      <span className="text-xs text-emerald-800/80 font-mono mt-0.5 block">
                        Over-specced balance-of-plant, Tier-1 inverters, and N-1 redundancy
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5 p-4 bg-white border border-emerald-200 rounded-none shadow-xs transition-all hover:border-emerald-400">
                    <div className="w-5 h-5 shrink-0 flex items-center justify-center bg-emerald-100 border border-emerald-400 text-emerald-700 font-mono text-xs font-bold rounded-none mt-0.5">
                      ✓
                    </div>
                    <div>
                      <p className="text-sm font-bold text-neutral-900 leading-snug">
                        Active SLDC day-ahead scheduling and deviation mitigation
                      </p>
                      <span className="text-xs text-emerald-800/80 font-mono mt-0.5 block">
                        Algorithmic forecasting and real-time dispatch buffering
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5 p-4 bg-white border border-emerald-200 rounded-none shadow-xs transition-all hover:border-emerald-400">
                    <div className="w-5 h-5 shrink-0 flex items-center justify-center bg-emerald-100 border border-emerald-400 text-emerald-700 font-mono text-xs font-bold rounded-none mt-0.5">
                      ✓
                    </div>
                    <div>
                      <p className="text-sm font-bold text-neutral-900 leading-snug">
                        SLA-guaranteed delivered energy blocks
                      </p>
                      <span className="text-xs text-emerald-800/80 font-mono mt-0.5 block">
                        Availability covenants with contractually bonded supply outcomes
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-emerald-300 flex items-center justify-between text-xs font-mono text-emerald-800 relative z-10">
                <span>OPERATING MODEL</span>
                <span className="text-emerald-700 font-bold">100% PERFORMANCE GUARANTEED</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Editorial Media Split */}
      <MediaSplitSection
        eyebrow="Asset Architecture"
        titleLight="Engineered around the"
        titleBold="offtaker’s delivered-cost outcome."
        lead="We build renewable power solutions around the offtaker’s contracted demand, the site, the available resource, the grid interface and the required delivered-cost outcome. Whether utility-scale or open access, our platform aligns all moving parts into a dependable power product."
        imageSrc="/images/solar-substation.jpg"
        imageAlt="Eleverve Green solar power substation infrastructure"
        imageCaption="Substation Interconnection & Evacuation Assets"
        imagePosition="right"
      >
        <div className="pt-2">
          <Link
            href="/platform"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-none bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-semibold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(52,211,153,0.3)] hover:shadow-[0_0_30px_rgba(52,211,153,0.5)]"
          >
            <span>Inspect the 5-Stage Platform</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </MediaSplitSection>
    </div>
  );
}
