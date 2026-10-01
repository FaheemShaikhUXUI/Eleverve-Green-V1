import React from "react";
import type { Metadata } from "next";
import { PageHeroHeader } from "@/components/ui/PageHeroHeader";
import { TeamGrid } from "@/components/team/TeamGrid";
import { EcosystemSection } from "@/components/team/EcosystemSection";
import { MetricCard } from "@/components/ui/MetricCard";
import { MediaSplitSection } from "@/components/ui/MediaSplitSection";
import { companyData } from "@/data/company";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SlideInBottom, StaggerGrid, StaggerItem } from "@/components/ui/PageTransition";

export const metadata: Metadata = {
  title: "Team & Track Record — Leadership | Eleverve Green",
  description:
    "A team with development, finance and operating discipline. Dheeraj Jhawar, Sandeep Agarwal, Pratap Malempati. ~99 MWp, 7GW developed, $3Bn capital raised.",
};

export default function TeamPage() {
  return (
    <div className="pb-24">
      {/* Dark Hero Header Extending Behind Fixed Navbar */}
      <PageHeroHeader
        eyebrow="Leadership & Discipline"
        titleLight="A TEAM WITH DEVELOPMENT, FINANCE AND"
        titleBold="OPERATING DISCIPLINE."
        description="Combining decades of institutional project finance, DFI multilateral relationships, and utility-scale renewable asset execution across India."
        imageSrc="/images/heroes/team.jpg"
        imageAlt="Modern architectural clean energy control center building at dusk with subtle green interior glow"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 sm:pt-12">

        {/* Editorial Team Profile Cards */}
        <SlideInBottom delay={0.1} className="mb-20">
          <TeamGrid />
        </SlideInBottom>

        {/* Track Record Numerical Section */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-green font-semibold">
              Aggregate Leadership Precedent
            </span>
            <span className="font-mono text-xs text-faint">
              Strictly Audited Metrics
            </span>
          </div>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyData.trackRecord.map((metric, idx) => (
              <StaggerItem key={idx} from="bottom">
                <MetricCard
                  value={metric.value}
                  suffix={metric.suffix}
                  label={metric.label}
                  description={metric.description}
                />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>

        {/* Ecosystem Section */}
        <SlideInBottom delay={0.2} className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-amber font-semibold">
              Platform Ecosystem Relationships
            </span>
            <span className="font-mono text-xs text-faint">
              Affiliated Infrastructure &amp; Finance Entities
            </span>
          </div>

          <EcosystemSection />
        </SlideInBottom>
      </div>

      <MediaSplitSection
        eyebrow="Operations Telemetry"
        titleLight="Institutional oversight across"
        titleBold="financing, construction and dispatch."
        lead="Our founding leadership brings proven track records in multilateral lender governance, debt syndication with domestic and international financial institutions, and long-term operating discipline."
        imageSrc="/images/dispatch-center.jpg"
        imageAlt="Eleverve Green energy telemetry and operations dispatch center"
        imageCaption="SCADA Telemetry Operations & Real-Time SLDC Interface"
        imagePosition="right"
      >
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green text-white font-heading font-medium text-sm hover:shadow-glow transition-all"
          >
            <span>Initiate Executive Dialogue</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </MediaSplitSection>
    </div>
  );
}
