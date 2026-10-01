import React from "react";
import type { Metadata } from "next";
import { PageHeroHeader } from "@/components/ui/PageHeroHeader";
import { ResourceSimulator } from "@/components/technology/ResourceSimulator";
import { MediaSplitSection } from "@/components/ui/MediaSplitSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SlideInBottom } from "@/components/ui/PageTransition";

export const metadata: Metadata = {
  title: "Technology — Resource-Led RTC Engineering | Eleverve Green",
  description:
    "Resource-led FDRE / RTC design, not technology-led selling. Solar, wind, hydro, hybrid systems and storage configured around the offtaker's delivered-cost outcome.",
};

export default function TechnologyPage() {
  return (
    <div className="pb-24">
      {/* Dark Hero Header Extending Behind Fixed Navbar */}
      <PageHeroHeader
        eyebrow="Engineering Discipline"
        titleLight="RESOURCE-LED FDRE / RTC DESIGN, NOT"
        titleBold="TECHNOLOGY-LED SELLING."
        description="Renewable resource availability is region-specific. Solar irradiation, wind regime, hydro availability, land constraints, grid capacity, banking rules, open-access charges and demand patterns vary by geography."
        imageSrc="/images/heroes/technology.jpg"
        imageAlt="Modern wind turbine blade silhouetted against minimalist moody dark atmospheric sky"
        imagePosition="center 78%"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 sm:pt-12">

        <SlideInBottom delay={0.1} className="mb-20">
          <ResourceSimulator />
        </SlideInBottom>
      </div>

      <MediaSplitSection
        eyebrow="Active Dispatch Architecture"
        titleLight="Central SCADA telemetry and"
        titleBold="algorithmic schedule management."
        lead="We do not start with a preferred technology, nor do we force-fit a technology to a project. We begin with the offtaker’s contracted demand profile, the site conditions, the available resource, the grid interface and the required cost outcome."
        imageSrc="/images/dispatch-center.jpg"
        imageAlt="Modern clean energy dispatch and control center"
        imageCaption="SCADA Dispatch & Real-Time Telemetry Interface"
        imagePosition="right"
      >
        <div className="pt-2">
          <Link
            href="/execution"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green text-white font-heading font-medium text-sm hover:shadow-glow transition-all"
          >
            <span>Learn How We Execute</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </MediaSplitSection>
    </div>
  );
}
