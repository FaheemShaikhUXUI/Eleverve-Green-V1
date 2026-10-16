import React from "react";
import type { Metadata } from "next";
import { PageHeroHeader } from "@/components/ui/PageHeroHeader";
import { ContactSection } from "@/components/contact/ContactSection";
import { MediaSplitSection } from "@/components/ui/MediaSplitSection";

import { SlideInBottom } from "@/components/ui/PageTransition";

export const metadata: Metadata = {
  title: "Contact — Institutional Dialogue | Eleverve Green",
  description:
    "Initiate offtake dialogue with Eleverve Green. Offices in Mumbai, Pune, and Gurgaon. Utility PPAs and Energy-as-a-Service for India's power buyers.",
};

export default function ContactPage() {
  return (
    <div className="pb-0">
      {/* Dark Hero Header Extending Behind Fixed Navbar */}
      <PageHeroHeader
        eyebrow="Commercial Engagement"
        titleLight="ANY RENEWABLE ENERGY,"
        titleBold="MADE FIRM."
        description="We build renewable power solutions around the offtaker’s contracted demand, the site, the available resource, the grid interface and the required delivered-cost outcome."
        imageSrc="/images/heroes/contact.jpg"
        imageAlt="Modern clean transmission corridor and grid infrastructure at dark twilight"
      />

      {/* SECTION 1: Contact Engagement (LIGHT THEME) */}
      <section className="w-full py-16 sm:py-20 section-light">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SlideInBottom delay={0.1} className="mb-4">
            <ContactSection />
          </SlideInBottom>
        </div>
      </section>

      {/* SECTION 2: National Infrastructure Network (FULL-WIDTH THEME BREAK) */}
      <section className="w-full py-20 section-theme-break">
        <MediaSplitSection
          eyebrow="National Infrastructure Network"
          titleLight="Operating across high-insolation &"
          titleBold="strategic transmission corridors."
          lead="With executive presence across Mumbai, Pune, and Gurgaon, and active assets spanning Rajasthan, Andhra Pradesh, and Gujarat, Eleverve Green delivers dependable power solutions across India."
          imageSrc="/images/solar-substation.jpg"
          imageAlt="Eleverve Green solar infrastructure in India"
          imageCaption="501, A Wing, Trade Link, Delisle Road, Mumbai 400013"
          imagePosition="left"
        />
      </section>
    </div>
  );
}
