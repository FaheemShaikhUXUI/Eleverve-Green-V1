"use client";

import React, { useState } from "react";
import { companyData } from "@/data/company";
import { Mail, MapPin, Building2, Send, CheckCircle2 } from "lucide-react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    offtakeType: "Utility PPA",
    estimatedDemand: "10 - 50 MWp",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-panel border border-line rounded-3xl p-6 sm:p-10 lg:p-12 shadow-subtle relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left Column: Direct Institutional Contact & Offices */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono font-semibold tracking-widest text-green uppercase">
              <span className="w-5 h-[1.5px] bg-green" />
              <span>Direct Inquiries</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold text-ink tracking-tight mb-4">
              Institutional Offtake &amp; Project Inquiries
            </h3>

            <p className="text-base text-soft leading-relaxed">
              We structure delivered-cost renewable power solutions for state utilities, commercial &amp; industrial offtakers, and institutional infrastructure partners.
            </p>
          </div>

          <div className="space-y-6 pt-2">
            {/* Email */}
            <div className="p-5 bg-white dark:bg-panel-2 border border-line rounded-2xl shadow-xs">
              <span className="block font-mono text-[10px] uppercase text-amber tracking-wider font-semibold mb-1">
                Executive &amp; Commercial Email
              </span>
              <a
                href={`mailto:${companyData.email}`}
                className="text-lg font-semibold text-green hover:underline flex items-center gap-2"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>{companyData.email}</span>
              </a>
            </div>

            {/* Offices */}
            <div className="p-5 bg-white dark:bg-panel-2 border border-line rounded-2xl shadow-xs">
              <span className="block font-mono text-[10px] uppercase text-amber tracking-wider font-semibold mb-2">
                Regional Hubs
              </span>
              <div className="flex items-center gap-2 text-sm text-ink font-medium">
                <Building2 className="w-4 h-4 text-green flex-shrink-0" />
                <span>Mumbai · Pune · Gurgaon</span>
              </div>
            </div>

            {/* Registered Headquarters */}
            <div className="p-5 bg-white dark:bg-panel-2 border border-line rounded-2xl shadow-xs">
              <span className="block font-mono text-[10px] uppercase text-amber tracking-wider font-semibold mb-2">
                Registered Office
              </span>
              <div className="flex items-start gap-2.5 text-xs text-soft leading-relaxed">
                <MapPin className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
                <span>{companyData.registeredOffice}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Institutional Offtake Inquiry Console — Crisp Pure White in White Theme */}
        <div className="lg:col-span-7 bg-white dark:bg-panel border border-line rounded-3xl p-6 sm:p-8 shadow-xs">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-green/10 text-green flex items-center justify-center mx-auto border border-green/30">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="font-heading text-2xl font-bold text-ink">
                Inquiry Received
              </h4>
              <p className="text-sm text-soft max-w-md mx-auto leading-relaxed">
                Thank you for initiating dialogue with Eleverve Green. Our structured offtake origination team will review your load parameters and respond to <span className="text-green font-medium">{formData.email}</span>.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-line text-xs font-mono uppercase text-ink hover:text-green"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="border-b border-line pb-3 mb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-green font-semibold">
                  Structured Offtake Inquiry
                </span>
                <p className="text-xs text-soft mt-1">
                  Connect with our origination team to model your contracted demand profile.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-faint mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-panel border border-line text-ink text-sm focus:outline-none focus:border-green focus:ring-1 focus:ring-green/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-faint mb-1.5">
                    Organization / Offtaker *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Industrial Corporation / Discom"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-panel border border-line text-ink text-sm focus:outline-none focus:border-green focus:ring-1 focus:ring-green/20 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-faint mb-1.5">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@organization.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-panel border border-line text-ink text-sm focus:outline-none focus:border-green focus:ring-1 focus:ring-green/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-faint mb-1.5">
                    Preferred Offtake Structure
                  </label>
                  <select
                    value={formData.offtakeType}
                    onChange={(e) => setFormData({ ...formData, offtakeType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-panel border border-line text-ink text-sm focus:outline-none focus:border-green focus:ring-1 focus:ring-green/20 transition-all"
                  >
                    <option value="Energy-as-a-Service">Energy-as-a-Service (EaaS / OPEX)</option>
                    <option value="Utility PPA">Utility-Scale PPA</option>
                    <option value="Open Access PPA">Open-Access PPA</option>
                    <option value="FDRE / RTC Supply">Firm &amp; Dispatchable RE (FDRE / RTC)</option>
                    <option value="Brownfield Optimization">Brownfield Asset Optimization</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-faint mb-1.5">
                  Contracted Demand Scale
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {["< 10 MWp", "10 - 50 MWp", "50+ MWp"].map((tier) => (
                    <button
                      key={tier}
                      type="button"
                      onClick={() => setFormData({ ...formData, estimatedDemand: tier })}
                      className={`py-2 rounded-lg text-xs font-mono border transition-all ${
                        formData.estimatedDemand === tier
                          ? "bg-green text-white border-green shadow-xs"
                          : "bg-white dark:bg-panel text-soft border-line hover:border-line-strong hover:text-ink"
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-faint mb-1.5">
                  Load &amp; Site Context (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details regarding your site location, current tariff baseline, and target hours of delivery..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-panel border border-line text-ink text-sm focus:outline-none focus:border-green focus:ring-1 focus:ring-green/20 transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-green text-white font-heading font-medium text-sm shadow-glow hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
              >
                <span>Submit Institutional Inquiry</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
