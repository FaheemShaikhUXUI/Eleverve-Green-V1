"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { companyData } from "@/data/company";
import { footerQuickLinks } from "@/data/navigation";
import { Mail, MapPin, Building2, ArrowUpRight, ArrowUp, ShieldCheck } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#000000] text-white border-t border-neutral-900 overflow-hidden">
      {/* Top Luminous Neon Boundary Line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      
      {/* Ambient Top Glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-32 pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(ellipse at top, rgba(16, 185, 129, 0.4) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Column 1: Brand & Strategic Proposition */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="mb-6 inline-block">
                <Logo height={34} inkColor="#ffffff" />
              </div>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-md mb-6 font-normal">
                {companyData.description}
              </p>

              {/* High-Tech Pulse Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-none bg-neutral-950 border border-emerald-500/30 text-xs font-mono text-emerald-400 shadow-[0_0_15px_-3px_rgba(16,185,129,0.2)]">
                <span className="w-2 h-2 rounded-none bg-emerald-400 animate-pulse" />
                <span className="font-semibold tracking-wider">ANY RENEWABLE ENERGY, MADE FIRM.</span>
              </div>
            </div>

            {/* Architectural Regulatory Disclosure */}
            <div className="mt-8 p-4 bg-neutral-950/80 border border-neutral-900 rounded-none relative">
              <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400/90 uppercase tracking-widest font-semibold mb-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Mandatory Regulatory Disclosure</span>
              </div>
              <p className="text-xs text-neutral-400 font-normal leading-relaxed">
                {companyData.disclaimer}
              </p>
            </div>
          </div>

          {/* Column 2: Quick Platform Infrastructure Links */}
          <div className="lg:col-span-3">
            <span className="block font-mono text-xs font-bold uppercase tracking-widest text-emerald-400 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-none bg-emerald-400" />
              Operating Platform
            </span>
            <ul className="space-y-3.5">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center justify-between w-full py-1 text-sm text-neutral-300 hover:text-emerald-400 transition-all duration-200 font-normal group border-b border-neutral-900/60 pb-2 hover:border-emerald-500/30"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Institutional Dialogue, Hubs & Headquarters */}
          <div className="lg:col-span-4 space-y-4">
            <span className="block font-mono text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-none bg-emerald-400" />
              Corporate &amp; Offtake Desk
            </span>

            {/* Email Contact Card */}
            <a
              href={`mailto:${companyData.email}`}
              className="flex items-center justify-between p-4 rounded-none bg-neutral-950 border border-neutral-900 hover:border-emerald-500/50 hover:bg-emerald-950/20 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-none bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 group-hover:border-emerald-400 transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-neutral-500 uppercase tracking-wider">INSTITUTIONAL DIALOGUE</span>
                  <span className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors font-mono">{companyData.email}</span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-emerald-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* Regional Hubs Card */}
            <div className="p-4 rounded-none bg-neutral-950 border border-neutral-900 flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-none bg-neutral-900 border border-neutral-800 flex items-center justify-center text-emerald-400 flex-shrink-0">
                <Building2 className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[10px] font-mono text-neutral-500 uppercase tracking-wider">REGIONAL HUBS</span>
                <span className="text-xs font-semibold text-neutral-200">Mumbai · Pune · Gurgaon</span>
              </div>
            </div>

            {/* Registered Headquarters Card */}
            <div className="p-4 rounded-none bg-neutral-950 border border-neutral-900 flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-none bg-neutral-900 border border-neutral-800 flex items-center justify-center text-emerald-400 flex-shrink-0 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[10px] font-mono text-neutral-500 uppercase tracking-wider">REGISTERED HEADQUARTERS</span>
                <span className="text-xs text-neutral-300 leading-relaxed font-normal">{companyData.registeredOffice}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            © {companyData.copyrightYear} <span className="text-neutral-300">{companyData.legalName}</span>. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-neutral-400 text-[11px]">
            <span className="hover:text-emerald-400 transition-colors">UTILITY PPAs</span>
            <span className="text-neutral-700">·</span>
            <span className="hover:text-emerald-400 transition-colors">ENERGY-AS-A-SERVICE</span>
            <span className="text-neutral-700">·</span>
            <span className="hover:text-emerald-400 transition-colors">FDRE / RTC PLATFORM</span>
            <span className="text-neutral-700">·</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors font-bold cursor-pointer ml-2"
              title="Return to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
