"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { companyData } from "@/data/company";
import { Mail, MapPin, Building2, Send, CheckCircle2, ChevronDown, Copy, Check } from "lucide-react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    offtakeType: "Utility-Scale PPA",
    estimatedDemand: "10 - 50 MWp",
    message: "",
  });

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(companyData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-panel border border-line rounded-3xl p-6 sm:p-10 lg:p-12 shadow-subtle relative overflow-hidden transition-all duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
        {/* Left Column: Direct Inquiries & Channels */}
        <div className="lg:col-span-5 space-y-6 sm:space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono font-semibold tracking-widest text-green uppercase">
              <span className="w-5 h-[2px] bg-green" />
              <span>Direct Inquiries</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-heading font-bold text-ink tracking-tight mb-4 leading-tight">
              Institutional Offtake &amp; Project Inquiries
            </h3>

            <p className="text-sm sm:text-base text-soft leading-relaxed">
              We structure delivered-cost renewable power solutions for state utilities, commercial &amp; industrial offtakers, and institutional infrastructure partners.
            </p>
          </div>

          <div className="space-y-4 pt-1">
            {/* Email Card */}
            <div className="group p-5 bg-white dark:bg-panel-2 border border-line rounded-2xl shadow-xs transition-all hover:border-green/40 hover:shadow-card">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[10px] uppercase text-amber tracking-wider font-semibold">
                  Executive &amp; Commercial Email
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 font-mono text-[10px] text-faint hover:text-green transition-colors"
                  title="Copy email"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3 text-green" />
                      <span className="text-green font-semibold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={`mailto:${companyData.email}`}
                className="text-base sm:text-lg font-heading font-semibold text-green hover:underline inline-flex items-center gap-2.5 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-green/10 text-green flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105">
                  <Mail className="w-4 h-4" />
                </div>
                <span>{companyData.email}</span>
              </a>
            </div>

            {/* Regional Hubs */}
            <div className="p-5 bg-white dark:bg-panel-2 border border-line rounded-2xl shadow-xs transition-all hover:border-line-strong">
              <span className="block font-mono text-[10px] uppercase text-amber tracking-wider font-semibold mb-2">
                Regional Hubs
              </span>
              <div className="flex items-center gap-2.5 text-sm text-ink font-medium">
                <div className="w-8 h-8 rounded-lg bg-green/10 text-green flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-4 h-4" />
                </div>
                <span>Mumbai · Pune · Gurgaon</span>
              </div>
            </div>

            {/* Registered Office */}
            <div className="p-5 bg-white dark:bg-panel-2 border border-line rounded-2xl shadow-xs transition-all hover:border-line-strong">
              <span className="block font-mono text-[10px] uppercase text-amber tracking-wider font-semibold mb-2">
                Registered Office
              </span>
              <div className="flex items-start gap-2.5 text-xs text-soft leading-relaxed">
                <div className="w-8 h-8 rounded-lg bg-green/10 text-green flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>{companyData.registeredOffice}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Institutional Inquiry Console */}
        <div className="lg:col-span-7 bg-white dark:bg-panel border border-line rounded-3xl p-6 sm:p-9 shadow-xs">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="thank-you"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-green/10 text-green flex items-center justify-center mx-auto border border-green/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-heading text-2xl sm:text-3xl font-bold text-ink">
                  Inquiry Received
                </h4>
                <p className="text-sm text-soft max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-ink">{formData.name || "Partner"}</strong>. Our structured offtake origination team will review your parameters and respond to <span className="text-green font-medium">{formData.email}</span> within 24 business hours.
                </p>
                <div className="pt-3">
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-line text-xs font-mono uppercase text-ink hover:text-green hover:border-green transition-all"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="border-b border-line pb-3.5 mb-2">
                  <span className="font-mono text-xs uppercase tracking-widest text-green font-semibold">
                    Structured Offtake Inquiry
                  </span>
                  <p className="text-xs text-soft mt-1">
                    Connect with our origination team to model your contracted demand profile.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-faint mb-1.5 font-medium">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-panel border border-line text-ink text-sm focus:outline-none focus:border-green focus:ring-2 focus:ring-green/15 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-faint mb-1.5 font-medium">
                      Organization / Offtaker *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Industrial Corporation / Discom"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-panel border border-line text-ink text-sm focus:outline-none focus:border-green focus:ring-2 focus:ring-green/15 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-faint mb-1.5 font-medium">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@organization.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-panel border border-line text-ink text-sm focus:outline-none focus:border-green focus:ring-2 focus:ring-green/15 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-faint mb-1.5 font-medium">
                      Preferred Offtake Structure
                    </label>
                    <div className="relative">
                      <select
                        value={formData.offtakeType}
                        onChange={(e) => setFormData({ ...formData, offtakeType: e.target.value })}
                        className="w-full appearance-none px-3.5 py-2.5 pr-9 rounded-xl bg-white dark:bg-panel border border-line text-ink text-sm focus:outline-none focus:border-green focus:ring-2 focus:ring-green/15 transition-all cursor-pointer"
                      >
                        <option value="Utility-Scale PPA">Utility-Scale PPA</option>
                        <option value="Open Access PPA">Open-Access PPA (C&amp;I)</option>
                        <option value="FDRE / RTC Supply">Firm &amp; Dispatchable RE (FDRE / RTC)</option>
                        <option value="Energy-as-a-Service">Energy-as-a-Service (OPEX)</option>
                        <option value="Brownfield Optimization">Brownfield Asset Optimization</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-faint absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-faint mb-1.5 font-medium">
                    Contracted Demand Scale
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {["< 10 MWp", "10 - 50 MWp", "50+ MWp"].map((tier) => (
                      <button
                        key={tier}
                        type="button"
                        onClick={() => setFormData({ ...formData, estimatedDemand: tier })}
                        className={`py-2.5 rounded-xl text-xs font-mono font-medium border transition-all ${
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
                  <label className="block text-xs font-mono uppercase text-faint mb-1.5 font-medium">
                    Load &amp; Site Context (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share details regarding your site location, current tariff baseline, and target hours of delivery..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-panel border border-line text-ink text-sm focus:outline-none focus:border-green focus:ring-2 focus:ring-green/15 transition-all resize-none"
                  />
                </div>

                <div className="pt-1">
                  <motion.button
                    type="submit"
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 rounded-full bg-green text-white font-heading font-medium text-sm shadow-glow hover:bg-green-glow transition-all flex items-center justify-center gap-2"
                  >
                    <span>Submit Institutional Inquiry</span>
                    <Send className="w-4 h-4" />
                  </motion.button>
                </div>
              </form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
