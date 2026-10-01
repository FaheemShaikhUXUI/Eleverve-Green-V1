import React from "react";
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
        imageAlt="Modern wind turbines and solar panels under minimalist dark twilight"
        imagePosition="center 72%"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 sm:pt-12">

        {/* 3 Core Operating Principles — Staggered entrance from Downside */}
        <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <StaggerItem from="bottom" className="p-8 sm:p-10 bg-panel border border-line rounded-3xl flex flex-col justify-between hover:border-line-strong transition-all shadow-xs hover:-translate-y-1 duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-green/10 text-green flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-ink tracking-tight mb-4">
                Owner-operator, not a developer
              </h3>
              <p className="text-sm text-soft leading-relaxed font-normal mb-6">
                We don’t build to flip. We own and operate for the long term, accountable for generation yield, availability factors, and equipment longevity decades after commissioning.
              </p>
            </div>
            <div className="pt-4 border-t border-line text-xs font-mono text-green">
              25-Year Lifecycle Horizon
            </div>
          </StaggerItem>

          <StaggerItem from="bottom" className="p-8 sm:p-10 bg-panel-2 border border-line rounded-3xl flex flex-col justify-between hover:border-line-strong transition-all shadow-xs hover:-translate-y-1 duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue/10 text-blue flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-ink tracking-tight mb-4">
                Two ways to contract
              </h3>
              <p className="text-sm text-soft leading-relaxed font-normal mb-6">
                Buy through a long-term utility-scale PPA, or as a managed Energy-as-a-Service — generation, firming, scheduling, billing and statutory compliance bundled into one transparent tariff.
              </p>
            </div>
            <div className="pt-4 border-t border-line text-xs font-mono text-blue font-semibold">
              Utility PPA &amp; EaaS Options
            </div>
          </StaggerItem>

          <StaggerItem from="bottom" className="p-8 sm:p-10 bg-panel border border-line rounded-3xl flex flex-col justify-between hover:border-line-strong transition-all shadow-xs hover:-translate-y-1 duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue/10 text-blue flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-ink tracking-tight mb-4">
                Outcome, not just capital
              </h3>
              <p className="text-sm text-soft leading-relaxed font-normal mb-6">
                We’re not a passive investor allocating funds and waiting. We deliver — and are measured on — reliable, delivered energy matching the exact hour-by-hour demand curve of our offtakers.
              </p>
            </div>
            <div className="pt-4 border-t border-line text-xs font-mono text-blue">
              Delivered MWh Performance
            </div>
          </StaggerItem>
        </StaggerGrid>

        {/* Interactive Lifecycle Comparison Pipeline — Glides from Downside */}
        <SlideInBottom className="bg-panel border border-line rounded-3xl p-8 sm:p-12 mb-20 shadow-subtle">
          <div className="max-w-2xl mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-green font-semibold block mb-2">
              Model Comparison
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-ink">
              Traditional Developer vs. Eleverve Green Operating Platform
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-panel-2 border border-blue/20">
              <span className="font-mono text-xs uppercase tracking-wider text-blue font-semibold block mb-2">
                Typical Build-and-Flip Developer
              </span>
              <ul className="space-y-3 text-xs text-soft font-normal">
                <li className="flex items-center gap-2">✕ Sells capacity at COD or immediate milestone</li>
                <li className="flex items-center gap-2">✕ Incentivized on lowest Capex over long-term reliability</li>
                <li className="flex items-center gap-2">✕ Disconnected from offtaker schedule deviations post-handover</li>
                <li className="flex items-center gap-2">✕ Offtaker bears balancing and curtailment risks</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-panel border border-green/30">
              <span className="font-mono text-xs uppercase tracking-wider text-green font-semibold block mb-2">
                Eleverve Green Platform Model
              </span>
              <ul className="space-y-3 text-xs text-ink font-medium">
                <li className="flex items-center gap-2 text-green">✓ Retains asset ownership and operational control for 25+ years</li>
                <li className="flex items-center gap-2 text-green">✓ Tier-1 engineering designed for lifecycle degradation resilience</li>
                <li className="flex items-center gap-2 text-green">✓ Active SLDC day-ahead scheduling and deviation mitigation</li>
                <li className="flex items-center gap-2 text-green">✓ SLA-guaranteed delivered energy blocks</li>
              </ul>
            </div>
          </div>
        </SlideInBottom>
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green text-white font-heading font-medium text-sm hover:shadow-glow transition-all"
          >
            <span>Inspect the 5-Stage Platform</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </MediaSplitSection>
    </div>
  );
}
