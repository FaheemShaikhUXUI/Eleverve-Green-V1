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
    <div className="pb-0">
      {/* Dark Hero Header Extending Behind Fixed Navbar */}
      <PageHeroHeader
        eyebrow="Leadership & Discipline"
        titleLight="A TEAM WITH DEVELOPMENT, FINANCE AND"
        titleBold="OPERATING DISCIPLINE."
        description="Combining decades of institutional project finance, DFI multilateral relationships, and utility-scale renewable asset execution across India."
        imageSrc="/images/heroes/team.jpg"
        imageAlt="Modern architectural clean energy control center building at dusk with subtle green interior glow"
      />

      {/* SECTION 1: Leadership Profiles (LIGHT THEME) */}
      <section className="w-full py-16 sm:py-20 section-light">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SlideInBottom delay={0.1} className="mb-4">
            <div className="mb-8">
              <span className="font-mono text-xs uppercase tracking-widest text-green font-semibold block mb-2">
                Founding Leadership &amp; Governance
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-ink">
                Executive Directors &amp; <span className="text-green">Domain Disciplines</span>
              </h2>
            </div>
            <TeamGrid />
          </SlideInBottom>
        </div>
      </section>

      {/* SECTION 2: Track Record Precedent (FULL-WIDTH THEME BREAK) */}
      <section className="w-full py-20 section-theme-break">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-4">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-3 border-b border-emerald-500/20">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold block mb-1">
                  Audited Institutional Precedent
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                  Capital Deployment &amp; <span className="text-emerald-400">Development Scale</span>
                </h2>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-emerald-300">
                <span className="w-2 h-2 rounded-none bg-emerald-400 animate-pulse" />
                <span>STRICTLY VERIFIED METRICS</span>
              </div>
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
        </div>
      </section>

      {/* SECTION 3: Ecosystem & Affiliations (LIGHT THEME) */}
      <section className="w-full py-20 section-light">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SlideInBottom delay={0.2} className="mb-4">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-3 border-b border-neutral-200 dark:border-neutral-800">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-green font-semibold block mb-1">
                  Institutional Affiliations
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-ink">
                  Platform Ecosystem <span className="text-green">&amp; Finance Entities</span>
                </h2>
              </div>
              <span className="font-mono text-xs text-neutral-400">
                CO-FOUNDED &amp; ALIGNED ENTITIES
              </span>
            </div>

            <EcosystemSection />
          </SlideInBottom>
        </div>
      </section>

      {/* SECTION 4: Operations Telemetry (FULL-WIDTH THEME BREAK) */}
      <section className="w-full py-20 section-theme-break">
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-none bg-emerald-500 text-black font-mono font-semibold text-xs uppercase tracking-wider hover:bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.3)] transition-all"
            >
              <span>Initiate Executive Dialogue</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </MediaSplitSection>
      </section>
    </div>
  );
}
