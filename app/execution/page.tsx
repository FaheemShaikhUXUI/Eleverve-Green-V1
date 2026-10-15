import React from "react";
import type { Metadata } from "next";
import { PageHeroHeader } from "@/components/ui/PageHeroHeader";
import { ExecutionProcess } from "@/components/execution/ExecutionProcess";
import { MediaSplitSection } from "@/components/ui/MediaSplitSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SlideInBottom } from "@/components/ui/PageTransition";

export const metadata: Metadata = {
  title: "Execution — Greenfield, Brownfield & Hybrid Delivery | Eleverve Green",
  description:
    "Greenfield, brownfield and hybrid routes under one operating discipline. Assess, Design, Structure, and Operate.",
};

export default function ExecutionPage() {
  return (
    <div className="pb-24">
      {/* Dark Hero Header Extending Behind Fixed Navbar */}
      <PageHeroHeader
        eyebrow="Delivery Methodology"
        titleLight="GREENFIELD, BROWNFIELD AND HYBRID ROUTES, UNDER ONE"
        titleBold="OPERATING DISCIPLINE."
        description="We keep the execution message simple: build where new capacity makes sense, improve where existing capacity can be made stronger, and hybridise or add storage where the offtake requires a firmer supply profile."
        imageSrc="/images/heroes/execution-solar.png"
        imageAlt="Field engineer installing high-efficiency utility solar panels on rooftop under bright blue sky"
        imagePosition="center 35%"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 sm:pt-12">

        <SlideInBottom delay={0.1} className="mb-20">
          <ExecutionProcess />
        </SlideInBottom>
      </div>

      <MediaSplitSection
        eyebrow="Turnkey Execution"
        titleLight="Rigorous site diligence and"
        titleBold="grid evacuation certainty."
        lead="Our multidisciplinary project teams oversee every critical gateway from land title aggregation and environmental clearances to InSTS/ISTS substation interconnection and 25-year predictive O&M."
        imageSrc="/images/solar-substation.jpg"
        imageAlt="Eleverve Green solar substation construction and operations"
        imageCaption="Step-Up Transformers & Dedicated Evacuation Bay Engineering"
        imagePosition="left"
      >
        <div className="pt-2">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green text-white font-heading font-medium text-sm hover:shadow-glow transition-all"
          >
            <span>Explore Current Operating Assets</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </MediaSplitSection>
    </div>
  );
}
