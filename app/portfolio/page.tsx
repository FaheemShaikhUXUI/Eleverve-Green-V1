import React from "react";
import type { Metadata } from "next";
import { PageHeroHeader } from "@/components/ui/PageHeroHeader";
import { PortfolioMap } from "@/components/portfolio/PortfolioMap";
import { ProjectShowcaseGrid } from "@/components/portfolio/ProjectShowcaseGrid";
import { MediaSplitSection } from "@/components/ui/MediaSplitSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio — Operating & Development Assets | Eleverve Green",
  description:
    "A solar-led starting point, with a broader FDRE / RTC-ready platform strategy. Rajasthan (52.5 MWp), Andhra Pradesh (26.5 MWp), Gujarat (20 MWp). Capacities indicative, subject to diligence.",
};

import { SlideInBottom } from "@/components/ui/PageTransition";

export default function PortfolioPage() {
  return (
    <div className="pb-0">
      {/* Dark Hero Header Extending Behind Fixed Navbar */}
      <PageHeroHeader
        eyebrow="Asset Footprint"
        titleLight="A SOLAR-LED STARTING POINT, WITH A BROADER"
        titleBold="FDRE / RTC-READY PLATFORM STRATEGY."
        description="The current portfolio is solar-led because that is where immediate operating and development visibility exists. The strategy is broader: build, own and operate renewable assets that can support utility-scale PPAs, FDRE, RTC, hybrid supply and storage-backed structures."
        imageSrc="/images/heroes/portfolio.jpg"
        imageAlt="Geometric desert solar utility rows extending under deep dark twilight sky"
      />

      {/* SECTION 1: India Asset Map (LIGHT THEME) */}
      <section className="w-full py-16 sm:py-20 section-light">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SlideInBottom className="mb-4">
            <PortfolioMap />
          </SlideInBottom>
        </div>
      </section>

      {/* SECTION 2: Verified Project Showcase (FULL-WIDTH THEME BREAK) */}
      <section className="w-full py-20 section-theme-break">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SlideInBottom className="mb-4">
            <div className="mb-8">
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold block mb-2">
                Verified Project Showcase
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                Operating Assets &amp; Strategic <span className="text-emerald-400">Interconnect Hubs</span>
              </h2>
            </div>
            <ProjectShowcaseGrid />
          </SlideInBottom>
        </div>
      </section>

      {/* SECTION 3: Asset Optimization (LIGHT THEME) */}
      <section className="w-full py-20 section-light">
        <MediaSplitSection
          eyebrow="Asset Optimization"
          titleLight="Operating asset stability and"
          titleBold="expansion visibility."
          lead="Our operating asset base combines contracted long-term PPAs with investment-grade offtakers (including NTPC VVN and State Discoms) and clear technical roadmaps for hybrid wind addition and BESS time-shifting."
          imageSrc="/images/solar-substation.jpg"
          imageAlt="Eleverve Green solar utility installation in Rajasthan"
          imageCaption="High-Irradiance Utility Portfolio Asset · Western Region Grid"
          imagePosition="right"
        >
          <div className="pt-2">
            <Link
              href="/esg"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-none bg-emerald-500 text-black font-heading font-semibold text-sm hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(52,211,153,0.3)]"
            >
              <span>Review ESG &amp; Governance Framework</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </MediaSplitSection>
      </section>
    </div>
  );
}
