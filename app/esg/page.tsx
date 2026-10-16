import React from "react";
import type { Metadata } from "next";
import { PageHeroHeader } from "@/components/ui/PageHeroHeader";
import { ESGSection } from "@/components/esg/ESGSection";
import { MediaSplitSection } from "@/components/ui/MediaSplitSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SlideInBottom } from "@/components/ui/PageTransition";

export const metadata: Metadata = {
  title: "ESG, HSE & Governance — Institutional Standards | Eleverve Green",
  description:
    "Clean power must also be responsibly built and operated. Environment, Social, Governance, and HSE standards designed for lender scrutiny and long-term ownership.",
};

export default function ESGPage() {
  return (
    <div className="pb-0">
      {/* Dark Hero Header Extending Behind Fixed Navbar */}
      <PageHeroHeader
        eyebrow="Operating Discipline"
        titleLight="CLEAN POWER MUST ALSO BE"
        titleBold="RESPONSIBLY BUILT AND OPERATED."
        description="We treat ESG as an operating discipline — land, community, HSE, governance and credible environmental attributes designed for institutional lender scrutiny and long-term asset ownership."
        imageSrc="/images/heroes/esg.jpg"
        imageAlt="Pristine dark nature landscape with solar installation under soft green auroral glow"
      />

      {/* SECTION 1: ESG Pillars & Frameworks (LIGHT THEME) */}
      <section className="w-full py-16 sm:py-20 section-light">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SlideInBottom delay={0.1} className="mb-4">
            <ESGSection />
          </SlideInBottom>
        </div>
      </section>

      {/* SECTION 2: Institutional Compliance (FULL-WIDTH THEME BREAK) */}
      <section className="w-full py-20 section-theme-break">
        <MediaSplitSection
          eyebrow="Institutional Compliance"
          titleLight="Fiduciary governance and"
          titleBold="Tier-1 multilateral standards."
          lead="Our governance and HSE frameworks benchmark against International Finance Corporation (IFC) Performance Standards and ISO certifications. We believe that clean generation is incomplete without rigorous workforce safety and ecological stewardship."
          imageSrc="/images/bess-facility.jpg"
          imageAlt="Modern clean energy storage facility adhering to rigorous safety standards"
          imageCaption="Safety-Engineered Battery Energy Storage Facilities & Environmental Controls"
          imagePosition="left"
        >
          <div className="pt-2">
            <Link
              href="/team"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-none bg-emerald-500 text-black font-heading font-semibold text-sm hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(52,211,153,0.3)]"
            >
              <span>Inspect Leadership &amp; DFI Precedent</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </MediaSplitSection>
      </section>
    </div>
  );
}
