import React from "react";
import type { Metadata } from "next";
import { PageHeroHeader } from "@/components/ui/PageHeroHeader";
import { PortfolioMap } from "@/components/portfolio/PortfolioMap";
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
    <div className="pb-24">
      {/* Dark Hero Header Extending Behind Fixed Navbar */}
      <PageHeroHeader
        eyebrow="Asset Footprint"
        titleLight="A SOLAR-LED STARTING POINT, WITH A BROADER"
        titleBold="FDRE / RTC-READY PLATFORM STRATEGY."
        description="The current portfolio is solar-led because that is where immediate operating and development visibility exists. The strategy is broader: build, own and operate renewable assets that can support utility-scale PPAs, FDRE, RTC, hybrid supply and storage-backed structures."
        imageSrc="/images/heroes/portfolio.jpg"
        imageAlt="Geometric desert solar utility rows extending under deep dark twilight sky"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 sm:pt-12">

        <SlideInBottom className="mb-20">
          <PortfolioMap />
        </SlideInBottom>
      </div>

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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green text-white font-heading font-medium text-sm hover:shadow-glow transition-all"
          >
            <span>Review ESG &amp; Governance Framework</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </MediaSplitSection>
    </div>
  );
}
