import React from "react";
import { HeroVideo } from "@/components/hero/HeroVideo";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MediaSplitSection } from "@/components/ui/MediaSplitSection";
import { MetricCard } from "@/components/ui/MetricCard";
import { PlatformFlow } from "@/components/platform/PlatformFlow";
import { CapabilitiesGrid } from "@/components/platform/CapabilitiesGrid";
import { SolutionCards } from "@/components/solutions/SolutionCards";
import { ResourceSimulator } from "@/components/technology/ResourceSimulator";
import { ExecutionProcess } from "@/components/execution/ExecutionProcess";
import { PortfolioMap } from "@/components/portfolio/PortfolioMap";
import { ESGSection } from "@/components/esg/ESGSection";
import { TeamGrid } from "@/components/team/TeamGrid";
import { EcosystemSection } from "@/components/team/EcosystemSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { companyData } from "@/data/company";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. CINEMATIC HERO */}
      <HeroVideo />

      {/* 2. OUR MODEL SECTION */}
      <section id="model" className="py-24 bg-bg border-t border-line scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="What We Are"
            titleLight="We own and operate — delivering firm power through"
            titleBold="utility-scale PPAs and Energy-as-a-Service."
            description="We’re not a build-and-flip developer or a passive investor. We own, operate and stand behind the delivered energy — through long-term utility PPAs and managed Energy-as-a-Service, whichever fits the offtaker."
          />

          {/* 3 Core Differentiator Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="p-8 bg-panel border border-line rounded-3xl hover:border-green/40 transition-all group">
              <div className="w-10 h-10 rounded-2xl bg-green/10 text-green flex items-center justify-center font-mono text-sm font-semibold mb-6">
                01
              </div>
              <h3 className="font-heading text-xl font-medium text-ink mb-3">
                Owner-operator, not a developer
              </h3>
              <p className="text-sm text-soft leading-relaxed">
                We don’t build to flip. We own and operate for the long term, accountable for asset performance and generation yield long after commissioning.
              </p>
            </div>

            <div className="p-8 bg-panel-2 border border-blue/20 rounded-3xl hover:border-blue/50 transition-all group">
              <div className="w-10 h-10 rounded-2xl bg-blue/10 text-blue flex items-center justify-center font-mono text-sm font-semibold mb-6">
                02
              </div>
              <h3 className="font-heading text-xl font-medium text-ink mb-3">
                Two ways to contract
              </h3>
              <p className="text-sm text-soft leading-relaxed">
                Buy through a long-term utility-scale PPA, or as a managed Energy-as-a-Service — generation, firming, scheduling, billing and compliance bundled into one delivered outcome.
              </p>
            </div>

            <div className="p-8 bg-panel border border-line rounded-3xl hover:border-green/40 transition-all group">
              <div className="w-10 h-10 rounded-2xl bg-green/10 text-green flex items-center justify-center font-mono text-sm font-semibold mb-6">
                03
              </div>
              <h3 className="font-heading text-xl font-medium text-ink mb-3">
                Outcome, not just capital
              </h3>
              <p className="text-sm text-soft leading-relaxed">
                We’re not a passive investor allocating capital and waiting. We deliver — and are measured on — reliable, delivered energy matching the offtaker’s contracted load.
              </p>
            </div>
          </div>
        </div>

        {/* 50/50 Media Split for Model */}
        <MediaSplitSection
          eyebrow="Accountability in Practice"
          titleLight="Long-term asset stewardship across"
          titleBold="generation and transmission."
          lead="Every kilowatt-hour delivered through our platform is backed by direct operating control. We integrate predictive operations and maintenance with active grid management to minimize deviation charges and ensure dispatch compliance."
          imageSrc="/images/solar-substation.jpg"
          imageAlt="Utility-scale solar plant with high-voltage step-up substation in Rajasthan"
          imageCaption="Utility-Scale Solar & Substation Evacuation Infrastructure · Rajasthan"
          imagePosition="right"
          overlapContent
        >
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link
              href="/model"
              className="inline-flex items-center gap-2 text-sm font-semibold text-green hover:underline"
            >
              <span>Explore Our Contracting Structures</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </MediaSplitSection>
      </section>

      {/* 3. WHY NOW SECTION */}
      <section id="why" className="py-24 bg-bg-2 border-t border-line scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Why Now"
            titleLight="India is moving from an energy-deficit market to an"
            titleBold="hour-deficit market."
            description="The next opportunity isn’t more capacity — it’s dependable, schedulable, bankable supply."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
            {/* Big Market Shift Card */}
            <div className="lg:col-span-7 p-8 sm:p-10 bg-panel border border-line rounded-3xl flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-amber font-semibold block mb-3">
                  Structural Market Shift
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-ink tracking-tight mb-4">
                  The value is moving from the cheapest kWh to the <span className="font-bold text-green">right kWh.</span>
                </h3>
                <p className="text-base text-soft leading-relaxed">
                  Midday renewable surplus is not enough for utility and institutional offtakers if it cannot be scheduled, stored, firmed or shaped into contracted delivery blocks. As solar penetration escalates, midday power faces steep curtailment while peak evening hours remain chronically underserved.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-line grid grid-cols-2 sm:grid-cols-4 gap-4 text-center font-mono">
                <div className="p-3 rounded-xl bg-panel-2 border border-line">
                  <span className="block text-xs text-faint">Midday</span>
                  <span className="text-sm font-semibold text-ink">Surplus</span>
                </div>
                <div className="p-3 rounded-xl bg-panel-2 border border-line">
                  <span className="block text-xs text-faint">Evening</span>
                  <span className="text-sm font-semibold text-amber">Deficit</span>
                </div>
                <div className="p-3 rounded-xl bg-panel-2 border border-line">
                  <span className="block text-xs text-faint">Schedule</span>
                  <span className="text-sm font-semibold text-green">Firm RTC</span>
                </div>
                <div className="p-3 rounded-xl bg-panel-2 border border-line">
                  <span className="block text-xs text-faint">Tariff</span>
                  <span className="text-sm font-semibold text-ink">Delivered</span>
                </div>
              </div>
            </div>

            {/* Commercial Implication Card (Light Blue Topic Card) */}
            <div className="lg:col-span-5 p-8 sm:p-10 bg-panel-2 border border-line hover:border-line-strong rounded-3xl flex flex-col justify-between transition-all">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-blue font-semibold block mb-3">
                  Commercial Implication
                </span>
                <h3 className="text-2xl font-bold text-ink tracking-tight mb-4">
                  Final delivered cost matters more than headline tariff.
                </h3>
                <p className="text-sm text-soft leading-relaxed mb-6">
                  Open-access charges, cross-subsidy surcharges, transmission losses, banking rules, time-of-day settlement, scheduling deviations, and grid curtailment materially change the delivered-cost outcome.
                </p>
              </div>

              <div className="space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between p-2 rounded-lg bg-panel-2 border border-line">
                  <span className="text-soft">Headline Generation Tariff</span>
                  <span className="text-faint">Theoretical</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-green/10 border border-green/30 text-green font-semibold">
                  <span>Actual Net Delivered Cost</span>
                  <span>Commercial Reality</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 50/50 Media Split for Why Now */}
        <MediaSplitSection
          eyebrow="Market Evolution"
          titleLight="Complementary diurnal wind and solar"
          titleBold="rebalancing the grid curve."
          lead="By coupling daytime solar generation with evening wind ramp and battery storage, we bridge the critical gap between intermittent weather events and predictable round-the-clock commercial consumption."
          imageSrc="/images/wind-landscape.jpg"
          imageAlt="High capacity wind turbines generating evening energy in western India"
          imageCaption="Diurnal Wind Power Generation Assets · Western India Corridor"
          imagePosition="left"
        >
          <div className="pt-2">
            <Link
              href="/why-now"
              className="inline-flex items-center gap-2 text-sm font-semibold text-green hover:underline"
            >
              <span>Read Full Analysis on India&apos;s Hour-Deficit Market</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </MediaSplitSection>
      </section>

      {/* 4. PLATFORM SECTION */}
      <section id="platform" className="py-24 bg-bg border-t border-line scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="The Platform"
            titleLight="Not a project pipeline. A"
            titleBold="renewable-power operating platform."
            description="We turn renewable resource into reliable, contracted, financeable supply — across greenfield and brownfield, with one focus: dependable power."
          />

          {/* Central Interactive Flow Pipeline */}
          <div className="mb-16">
            <PlatformFlow />
          </div>

          {/* Platform Capabilities Grid */}
          <CapabilitiesGrid />
        </div>
      </section>

      {/* 5. SOLUTIONS SECTION */}
      <section id="solutions" className="py-24 bg-bg-2 border-t border-line scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Solutions"
            titleLight="Utility-scale PPAs and"
            titleBold="Energy-as-a-Service."
            description="Two ways to buy firm renewable power: a long-term utility-scale PPA, or a managed Energy-as-a-Service. Open access, FDRE/RTC, hybrid and storage are how we shape and deliver it."
          />

          {/* Interactive Solutions Matrix */}
          <div className="mb-16">
            <SolutionCards />
          </div>
        </div>

        {/* 50/50 Media Split for Storage Solutions */}
        <MediaSplitSection
          eyebrow="Storage & Firming"
          titleLight="Grid-scale battery storage"
          titleBold="shaping intermittent generation into firm blocks."
          lead="Battery Energy Storage Systems (BESS) represent the essential firming mechanism for India's clean energy transition. Our platform integrates storage at substation interfaces to absorb midday clipping and dispatch contracted peak blocks."
          imageSrc="/images/bess-facility.jpg"
          imageAlt="Grid-scale Battery Energy Storage System (BESS) installation"
          imageCaption="Modular Grid-Scale BESS Installation · Dispatch & Frequency Balancing"
          imagePosition="right"
          overlapContent
        >
          <div className="pt-2">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-sm font-semibold text-green hover:underline"
            >
              <span>Compare All 4 Offtake Structures</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </MediaSplitSection>
      </section>

      {/* 6. TECHNOLOGY SECTION */}
      <section id="technology" className="py-24 bg-bg border-t border-line scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Technology-Agnostic Delivery"
            titleLight="Resource-led FDRE / RTC design, not"
            titleBold="technology-led selling."
            description="We do not start with a preferred technology, nor do we force-fit a technology to a project. We begin with the offtaker’s contracted demand profile, the site conditions, the available resource, the grid interface and the required cost outcome."
          />

          {/* Interactive 24-Hour Diurnal Dispatch Simulator */}
          <ResourceSimulator />
        </div>
      </section>

      {/* 7. EXECUTION SECTION */}
      <section id="execution" className="py-24 bg-bg-2 border-t border-line scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="How We Execute"
            titleLight="Greenfield, brownfield and hybrid routes, under one"
            titleBold="operating discipline."
            description="We keep the execution message simple: build where new capacity makes sense, improve where existing capacity can be made stronger, and hybridise or add storage where the offtake requires a firmer supply profile."
          />

          {/* Sequential 4-Step Process & 2 Routes */}
          <ExecutionProcess />
        </div>
      </section>

      {/* 8. PORTFOLIO SECTION */}
      <section id="portfolio" className="py-24 bg-bg border-t border-line scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Asset Portfolio"
            titleLight="A solar-led starting point, with a broader"
            titleBold="FDRE / RTC-ready platform strategy."
            description="The current portfolio is solar-led because that is where immediate operating and development visibility exists. The strategy is broader: build, own and operate renewable assets that can support utility-scale PPAs, FDRE, RTC, hybrid supply and storage-backed structures."
          />

          {/* Interactive India Map & State Assets */}
          <PortfolioMap />
        </div>
      </section>

      {/* 9. ESG, HSE & GOVERNANCE SECTION */}
      <section id="esg" className="py-24 bg-bg-2 border-t border-line scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="ESG, HSE and Governance"
            titleLight="Clean power must also be"
            titleBold="responsibly built and operated."
            description="We treat ESG as an operating discipline — land, community, HSE, governance and credible environmental attributes designed for lender scrutiny and long-term ownership."
          />

          <ESGSection />
        </div>
      </section>

      {/* 10. TEAM & TRACK RECORD SECTION */}
      <section id="team" className="py-24 bg-bg border-t border-line scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Team and Track Record"
            titleLight="A leadership team with development, finance and"
            titleBold="operating discipline."
          />

          {/* Editorial Team Cards */}
          <div className="mb-20">
            <TeamGrid />
          </div>

          {/* Visual Track Record Numbers (Strictly from Source) */}
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <span className="font-mono text-xs uppercase tracking-widest text-green font-semibold">
                Institutional Track Record
              </span>
              <span className="font-mono text-xs text-faint">
                Aggregate Leadership Precedent
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {companyData.trackRecord.map((metric, idx) => (
                <MetricCard
                  key={idx}
                  value={metric.value}
                  suffix={metric.suffix}
                  label={metric.label}
                  description={metric.description}
                />
              ))}
            </div>
          </div>

          {/* Ecosystem Relationships */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <span className="font-mono text-xs uppercase tracking-widest text-amber font-semibold">
                Platform Ecosystem Relationships
              </span>
              <span className="font-mono text-xs text-faint">
                Power · Structured Finance · DFI Precedent
              </span>
            </div>

            <EcosystemSection />
          </div>
        </div>

        {/* 50/50 Media Split for Real-Time Dispatch Control Room */}
        <div className="mt-20">
          <MediaSplitSection
            eyebrow="Active Operations"
            titleLight="Central SCADA telemetry and"
            titleBold="real-time grid dispatch."
            lead="Our operating center monitors telemetry, irradiance sensor feeds, inverter strings, and day-ahead SLDC dispatch schedules in real time, ensuring strict adherence to contracted offtaker blocks."
            imageSrc="/images/dispatch-center.jpg"
            imageAlt="High-tech renewable energy grid operations control room"
            imageCaption="Central SCADA Operations & Telemetry Monitoring Facility"
            imagePosition="left"
            overlapContent
          >
            <div className="pt-2">
              <Link
                href="/team"
                className="inline-flex items-center gap-2 text-sm font-semibold text-green hover:underline"
              >
                <span>Read More on Platform Governance & Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </MediaSplitSection>
        </div>
      </section>

      {/* 11. CONTACT SECTION */}
      <section id="contact" className="py-24 bg-bg-2 border-t border-line scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Initiate Dialogue"
            titleLight="ANY RENEWABLE ENERGY,"
            titleBold="MADE FIRM."
            description="We build renewable power solutions around the offtaker’s contracted demand, the site, the available resource, the grid interface and the required delivered-cost outcome."
          />

          <ContactSection />
        </div>
      </section>
    </div>
  );
}
