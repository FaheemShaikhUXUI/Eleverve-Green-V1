import React from "react";
import type { Metadata } from "next";
import { PageHeroHeader } from "@/components/ui/PageHeroHeader";
import { MediaSplitSection } from "@/components/ui/MediaSplitSection";
import { ResourceSimulator } from "@/components/technology/ResourceSimulator";
import Link from "next/link";
import { ArrowRight, Clock, AlertTriangle, CheckCircle, BarChart3 } from "lucide-react";
import { StaggerGrid, StaggerItem, SlideInBottom } from "@/components/ui/PageTransition";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Why Now — The Hour-Deficit Market | Eleverve Green",
  description:
    "India is moving from an energy-deficit market to an hour-deficit market. The next opportunity isn't more capacity — it's dependable, schedulable, bankable supply.",
};

export default function WhyNowPage() {
  const drivers = [
    {
      num: "01",
      title: "Renewables Scale & Solar Duck Curve",
      desc: "Massive daytime solar capacity has solved raw peak-sun volume, but created acute midday oversupply across regional grids.",
    },
    {
      num: "02",
      title: "Solar Curtailment at Midday",
      desc: "Grid substations in high-insolation states increasingly face curtailment instructions when generation outstrips immediate local absorption.",
    },
    {
      num: "03",
      title: "Surging Demand Into Evening and Night",
      desc: "Industrial shifts, commercial cooling, and residential peaks create steep demand ramps between 6:00 PM and 11:00 PM when solar is zero.",
    },
    {
      num: "04",
      title: "Buyers Needing Predictable Schedules",
      desc: "Offtakers face punishing deviation settlement penalties (DSM) if power cannot be scheduled in firm 15-minute time-of-day blocks.",
    },
    {
      num: "05",
      title: "Institutions Looking for Contracted Cashflows",
      desc: "Lenders and infrastructure investors seek bankable long-term PPAs backed by firm delivery obligations rather than merchant exposure.",
    },
  ];

  return (
    <div className="pb-24">
      {/* Dark Hero Header Extending Behind Fixed Navbar */}
      <PageHeroHeader
        eyebrow="Market Transition"
        titleLight="INDIA IS MOVING FROM AN ENERGY-DEFICIT MARKET TO AN"
        titleBold="HOUR-DEFICIT MARKET."
        description="The next opportunity isn't more capacity — it's dependable, schedulable, bankable supply."
        imageSrc="/images/heroes/whynow.jpg"
        imageAlt="Panoramic eco globe with holographic solar, wind and clean energy telemetry circuits"
        imagePosition="center 55%"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 sm:pt-12">

        {/* 5 Structural Market Catalysts — Standalone Section Header (No Outer Box) */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-emerald-600 dark:bg-emerald-400" />
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-700 dark:text-emerald-400 font-semibold">
                5 Structural Market Catalysts
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-neutral-900 dark:text-white tracking-tight leading-tight">
              The Macro Forces Mandating Firm Renewable Dispatch
            </h2>
          </div>
          <div className="font-mono text-xs text-neutral-500 dark:text-neutral-400 pb-1">
            <span className="text-[10px] uppercase tracking-wider block text-neutral-400">Market Paradigm</span>
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">Energy-Deficit → Hour-Deficit</span>
          </div>
        </div>

        {/* Inner Tiles Only In Boxes — Minimalist Curated Colors, Zero Curves (3 on top row, 2 on bottom row) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-20">
          {drivers.map((d, idx) => {
            const colSpanClass = idx < 3 ? "lg:col-span-2" : "lg:col-span-3";
            const styles = [
              // 01: Soft Sage / Emerald Minimalist
              {
                box: "bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-200/80 dark:border-emerald-800/40 hover:border-emerald-400",
                badge: "border-emerald-500/40 bg-emerald-100/60 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300",
                tag: "bg-emerald-100/50 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/50",
                metric: "text-emerald-700 dark:text-emerald-400",
                tagName: "Oversupply Risk",
                metricName: "Duck Curve Volume",
              },
              // 02: Soft Sky / Glacier Minimalist
              {
                box: "bg-sky-50/40 dark:bg-sky-950/20 border-sky-200/80 dark:border-sky-800/40 hover:border-sky-400",
                badge: "border-sky-500/40 bg-sky-100/60 dark:bg-sky-900/40 text-sky-800 dark:text-sky-300",
                tag: "bg-sky-100/50 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300 border-sky-200 dark:border-sky-800/50",
                metric: "text-sky-700 dark:text-sky-400",
                tagName: "Grid Curtailment",
                metricName: "Substation Absorption",
              },
              // 03: Soft Amber / Evening Sunset Minimalist
              {
                box: "bg-amber-50/40 dark:bg-amber-950/20 border-amber-200/80 dark:border-amber-800/40 hover:border-amber-400",
                badge: "border-amber-500/40 bg-amber-100/60 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300",
                tag: "bg-amber-100/50 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 border-amber-200 dark:border-amber-800/50",
                metric: "text-amber-700 dark:text-amber-400",
                tagName: "Peak Deficit",
                metricName: "18:00 - 23:00 Ramp",
              },
              // 04: Soft Slate / Titanium Minimalist
              {
                box: "bg-slate-50/60 dark:bg-slate-900/20 border-slate-200/90 dark:border-slate-800/50 hover:border-slate-400",
                badge: "border-slate-400/50 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-300",
                tag: "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700",
                metric: "text-slate-700 dark:text-slate-300",
                tagName: "DSM Penalties",
                metricName: "15-Min Scheduling",
              },
              // 05: Soft Eucalyptus Minimalist
              {
                box: "bg-teal-50/40 dark:bg-teal-950/20 border-teal-200/80 dark:border-teal-800/40 hover:border-teal-400",
                badge: "border-teal-500/40 bg-teal-100/60 dark:bg-teal-900/40 text-teal-800 dark:text-teal-300",
                tag: "bg-teal-100/50 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300 border-teal-200 dark:border-teal-800/50",
                metric: "text-teal-700 dark:text-teal-400",
                tagName: "Bankable Supply",
                metricName: "Contracted Cashflows",
              },
            ];

            const cur = styles[idx];

            return (
              <div
                key={d.num}
                className={cn(
                  colSpanClass,
                  "p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 rounded-none border shadow-xs hover:shadow-md",
                  cur.box
                )}
              >
                <div>
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-black/5 dark:border-white/10">
                    <div
                      className={cn(
                        "w-9 h-9 border font-mono text-xs font-bold flex items-center justify-center rounded-none shadow-2xs",
                        cur.badge
                      )}
                    >
                      {d.num}
                    </div>
                    <span
                      className={cn(
                        "px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider font-semibold rounded-none border",
                        cur.tag
                      )}
                    >
                      {cur.tagName}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-neutral-900 dark:text-white tracking-tight mb-3">
                    {d.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal mb-6">
                    {d.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span>FOCUS</span>
                  <span className={cn("font-semibold", cur.metric)}>
                    → {cur.metricName}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 24-Hour Diurnal Dispatch Simulation — Glides from Downside */}
        <SlideInBottom className="mb-20">
          <div className="max-w-3xl mb-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-2.5 py-1 bg-amber-50 border border-amber-600/30 text-[10px] font-mono uppercase tracking-widest text-amber-800 font-semibold rounded-none flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-amber-600 rounded-none inline-block"></span>
                DAY-CYCLE VISUALIZATION
              </span>
              <span className="font-mono text-xs text-neutral-400 tracking-wider">
                // DISPATCH SIMULATOR
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-neutral-900 tracking-tight leading-tight">
              Bridging Midday Solar Surplus and Evening Peak Demand
            </h3>
          </div>
          <ResourceSimulator />
        </SlideInBottom>
      </div>

      <MediaSplitSection
        eyebrow="The Solution Architecture"
        titleLight="Firm & dispatchable renewable energy (FDRE) configured for"
        titleBold="round-the-clock stability."
        lead="Eleverve Green solves the hour-deficit challenge by designing multi-technology hybrid generation (wind + solar + hydro + BESS) around the offtaker's specific hourly consumption block, guaranteeing firm delivered power."
        imageSrc="/images/wind-landscape.jpg"
        imageAlt="Wind energy turbines against evening sky"
        imageCaption="Evening Counterweight Wind Assets · Grid Dispatch Synchronization"
        imagePosition="left"
      >
        <div>
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-none bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-semibold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg"
          >
            <span>Explore FDRE &amp; RTC Solutions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </MediaSplitSection>
    </div>
  );
}
