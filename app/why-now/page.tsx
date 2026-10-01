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
        imageAlt="Minimalist dark atmospheric solar panels under deep night sky with glowing emerald horizon"
        imagePosition="center 85%"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 sm:pt-12">

        {/* Core Drivers Grid — Staggered entrance from Downside */}
        <div className="mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-green font-semibold block mb-6">
            5 Structural Market Catalysts
          </span>
          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {drivers.map((d, idx) => {
              const isBlueTopic = idx % 2 === 1;
              return (
                <StaggerItem
                  key={d.num}
                  from="bottom"
                  className={cn(
                    "p-8 rounded-3xl flex flex-col justify-between transition-all shadow-xs hover:-translate-y-1 duration-300 border",
                    isBlueTopic
                      ? "bg-panel-2 border-blue/20 hover:border-blue/50"
                      : "bg-panel border-line hover:border-green/40"
                  )}
                >
                  <div>
                    <span
                      className={cn(
                        "font-mono text-xs font-semibold block mb-4",
                        isBlueTopic ? "text-blue" : "text-green"
                      )}
                    >
                      {d.num}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-ink tracking-tight mb-3">
                      {d.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-soft leading-relaxed font-normal">
                      {d.desc}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGrid>
        </div>

        {/* 24-Hour Diurnal Dispatch Simulation — Glides from Downside */}
        <SlideInBottom className="mb-20">
          <div className="max-w-2xl mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-amber font-semibold block mb-2">
              Day-Cycle Visualization
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-ink">
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
        <div className="pt-2">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green text-white font-heading font-medium text-sm hover:shadow-glow transition-all"
          >
            <span>Explore FDRE &amp; RTC Solutions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </MediaSplitSection>
    </div>
  );
}
