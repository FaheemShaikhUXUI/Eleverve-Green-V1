import React from "react";
import type { Metadata } from "next";
import { PageHeroHeader } from "@/components/ui/PageHeroHeader";
import { PlatformFlow } from "@/components/platform/PlatformFlow";
import { CapabilitiesGrid } from "@/components/platform/CapabilitiesGrid";
import { MediaSplitSection } from "@/components/ui/MediaSplitSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SlideInBottom } from "@/components/ui/PageTransition";

export const metadata: Metadata = {
  title: "Platform — Operating Architecture | Eleverve Green",
  description:
    "Not a project pipeline. A renewable-power operating platform. We start with the offtaker and the load, working backwards to resource, grid, contract and capital.",
};

export default function PlatformPage() {
  return (
    <div className="pb-24">
      {/* Dark Hero Header Extending Behind Fixed Navbar */}
      <PageHeroHeader
        eyebrow="Operating Platform"
        titleLight="NOT A PROJECT PIPELINE. A"
        titleBold="RENEWABLE-POWER OPERATING PLATFORM."
        description="We start with the offtaker and the load. We then work backwards to the resource, grid connection, contract structure and capital — and stay accountable for delivery."
        imageSrc="/images/heroes/platform.jpg"
        imageAlt="Sleek electrical transmission infrastructure and power grid against minimalist dark night"
        imagePosition="center 78%"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 sm:pt-12">

        {/* Central 5-Stage Interactive Flow — Glides from Downside */}
        <SlideInBottom className="mb-20">
          <PlatformFlow />
        </SlideInBottom>

        {/* Capabilities Grid — Glides from Downside */}
        <SlideInBottom delay={0.2} className="mb-20">
          <div className="max-w-2xl mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-amber font-semibold block mb-2">
              Architecture Pillars
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-ink">
              Core Platform Capabilities &amp; Design Standards
            </h3>
          </div>
          <CapabilitiesGrid />
        </SlideInBottom>
      </div>

      <MediaSplitSection
        eyebrow="Integration Discipline"
        titleLight="From raw geographical resource to"
        titleBold="dependable delivered power."
        lead="Our operating platform bridges the physical realities of grid substations, land aggregation, and weather variance with institutional finance and long-term legal structuring."
        imageSrc="/images/solar-substation.jpg"
        imageAlt="Eleverve Green solar power substation infrastructure"
        imageCaption="Substation Interconnection & Evacuation Assets"
        imagePosition="right"
      >
        <div className="pt-2">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green text-white font-heading font-medium text-sm hover:shadow-glow transition-all"
          >
            <span>View Contracting Solutions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </MediaSplitSection>
    </div>
  );
}
