import React from "react";
import Image from "next/image";
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
      image: "/images/heroes/model.jpg",
      tagName: "Oversupply Risk",
      metricName: "Duck Curve Volume",
      telemetry: "12:00 MIDDAY SOLAR PEAK",
      accent: "emerald",
    },
    {
      num: "02",
      title: "Solar Curtailment at Midday",
      desc: "Grid substations in high-insolation states increasingly face curtailment instructions when generation outstrips immediate local absorption.",
      image: "/images/solar-substation.jpg",
      tagName: "Grid Curtailment",
      metricName: "Substation Absorption",
      telemetry: "SUBSTATION FEEDER SATURATION",
      accent: "sky",
    },
    {
      num: "03",
      title: "Surging Demand Into Evening and Night",
      desc: "Industrial shifts, commercial cooling, and residential peaks create steep demand ramps between 6:00 PM and 11:00 PM when solar is zero.",
      image: "/images/wind-landscape.jpg",
      tagName: "Peak Deficit",
      metricName: "18:00 - 23:00 Ramp",
      telemetry: "18:00 - 23:00 PEAK DEFICIT",
      accent: "amber",
    },
    {
      num: "04",
      title: "Buyers Needing Predictable Schedules",
      desc: "Offtakers face punishing deviation settlement penalties (DSM) if power cannot be scheduled in firm 15-minute time-of-day blocks.",
      image: "/images/dispatch-center.jpg",
      tagName: "DSM Penalties",
      metricName: "15-Min Scheduling",
      telemetry: "15-MIN DISPATCH SYNC",
      accent: "rose",
    },
    {
      num: "05",
      title: "Institutions Looking for Contracted Cashflows",
      desc: "Lenders and infrastructure investors seek bankable long-term PPAs backed by firm delivery obligations rather than merchant exposure.",
      image: "/images/bess-facility.jpg",
      tagName: "Bankable Supply",
      metricName: "Contracted Cashflows",
      telemetry: "25-YEAR AAA BANKABLE PPA",
      accent: "teal",
    },
  ];

  return (
    <div className="pb-0">
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

      {/* SECTION 1: 5 Structural Market Catalysts (LIGHT THEME) */}
      <section className="w-full py-16 sm:py-20 section-light">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

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

        {/* 5 Structural Market Catalysts — Striking Institutional Infrastructure Cards (Zero Curves) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-20">
          {drivers.map((d, idx) => {
            const colSpanClass = idx < 3 ? "lg:col-span-2" : "lg:col-span-3";

            return (
              <div
                key={d.num}
                className={cn(
                  colSpanClass,
                  "rounded-none border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col group overflow-hidden relative"
                )}
              >
                {/* Luminous Top Hover Beam */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-emerald-500 via-teal-400 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30" />

                {/* Top Image Banner with Telemetry Badges & Headline Over Image */}
                <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
                  <Image
                    src={d.image}
                    alt={d.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* High contrast gradient overlay for clear text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/35 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-2">
                    <div className="w-8 h-8 bg-black/80 backdrop-blur-md border border-white/20 text-emerald-400 font-mono text-xs font-bold flex items-center justify-center rounded-none shadow-sm">
                      {d.num}
                    </div>
                    <div className="px-2.5 py-1 bg-black/75 backdrop-blur-md border border-white/20 text-[10px] font-mono uppercase tracking-widest text-emerald-300 font-semibold rounded-none flex items-center gap-1.5 shadow-sm">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-none inline-block animate-pulse" />
                      {d.tagName}
                    </div>
                  </div>

                  {/* Headline & Telemetry Directly Over Image */}
                  <div className="absolute bottom-3.5 left-4 right-4 z-20 space-y-2">
                    <div className="flex items-center justify-between text-[10px] font-mono tracking-wider uppercase text-neutral-300 bg-black/75 backdrop-blur-md px-2.5 py-1 border border-white/10">
                      <span className="text-white/90 font-medium truncate">{d.telemetry}</span>
                      <span className="text-emerald-400 shrink-0 font-bold ml-2">ACTIVE</span>
                    </div>

                    <h3 className="font-heading text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight leading-snug drop-shadow-md group-hover:text-emerald-300 transition-colors">
                      {d.title}
                    </h3>
                  </div>
                </div>

                {/* Bottom Content Body */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between bg-white dark:bg-neutral-900 transition-colors">
                  <div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal mb-6">
                      {d.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
                    <span className="uppercase tracking-wider">FOCUS VECTOR</span>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      → {d.metricName}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </section>

      {/* SECTION 2: 24-Hour Diurnal Dispatch Simulation (FULL-WIDTH THEME BREAK) */}
      <section className="w-full py-20 section-theme-break">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* 24-Hour Diurnal Dispatch Simulation — Glides from Downside */}
          <SlideInBottom className="mb-4">
          <div className="max-w-3xl mb-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-2.5 py-1 bg-amber-500/15 border border-amber-400/30 text-[10px] font-mono uppercase tracking-widest text-amber-300 font-semibold rounded-none flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-none inline-block"></span>
                DAY-CYCLE VISUALIZATION
              </span>
              <span className="font-mono text-xs text-white/50 tracking-wider">
                // DISPATCH SIMULATOR
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-white tracking-tight leading-tight mb-2">
              Bridging Midday Solar Surplus and Evening Peak Demand
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 font-normal leading-relaxed">
              Explore dynamic diurnal generation envelopes across Solar, Wind, Hydro, Hybrid, and BESS Storage. Scrub any hour or engage the auto-play simulation cycle to inspect contracted firm delivery thresholds and real-time net balances.
            </p>
          </div>
          <ResourceSimulator />
          </SlideInBottom>
        </div>
      </section>

      {/* SECTION 3: Solution Architecture (LIGHT THEME) */}
      <section className="w-full py-20 section-light">
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
      </section>
    </div>
  );
}
