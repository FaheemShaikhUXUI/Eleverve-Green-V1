import React from "react";
import type { Metadata } from "next";
import { PageHeroHeader } from "@/components/ui/PageHeroHeader";
import { SolutionCards } from "@/components/solutions/SolutionCards";
import { MediaSplitSection } from "@/components/ui/MediaSplitSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions — PPAs & Energy-as-a-Service | Eleverve Green",
  description:
    "We finance, build, own and operate — you buy dependable delivered energy as a service, with no upfront capex and performance on us. Utility PPAs, FDRE, RTC and storage.",
};

import { SlideInBottom } from "@/components/ui/PageTransition";

export default function SolutionsPage() {
  return (
    <div className="pb-0">
      {/* Dark Hero Header Extending Behind Fixed Navbar */}
      <PageHeroHeader
        eyebrow="Commercial Solutions"
        titleLight="UTILITY-SCALE PPAs AND"
        titleBold="ENERGY-AS-A-SERVICE."
        description="Two ways to buy firm renewable power: a long-term utility-scale PPA, or a managed Energy-as-a-Service. Open access, FDRE/RTC, hybrid and storage are how we shape and deliver it."
        imageSrc="/images/heroes/solutions.jpg"
        imageAlt="Engineer surveying hybrid solar panel farm and wind turbines under dynamic sky"
        imagePosition="center center"
      />

      {/* SECTION 1: Solutions Matrix (LIGHT THEME) */}
      <section className="w-full py-16 sm:py-20 section-light">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SlideInBottom className="mb-4">
            <SolutionCards />
          </SlideInBottom>
        </div>
      </section>

      {/* SECTION 2: Firming & Storage (FULL-WIDTH THEME BREAK) */}
      <section className="w-full py-20 section-theme-break">
        <MediaSplitSection
          eyebrow="Firming Technologies"
          titleLight="Battery storage and hybrid configurations"
          titleBold="delivering contracted profile firmness."
          lead="Our solution matrix is backed by utility-scale BESS and multi-technology generation assets. By eliminating intermittency risk, we provide industrial offtakers and state utilities with dependable power that matches baseline load requirements."
          imageSrc="/images/bess-facility.jpg"
          imageAlt="Modern utility-scale Battery Energy Storage System (BESS)"
          imageCaption="Utility-Scale BESS Facility · Real-Time Frequency & Peak Shaving"
          imagePosition="left"
        >
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-none bg-emerald-500 text-black font-heading font-semibold text-sm hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(52,211,153,0.3)]"
            >
              <span>Request an Offtake Term Sheet</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </MediaSplitSection>
      </section>
    </div>
  );
}
