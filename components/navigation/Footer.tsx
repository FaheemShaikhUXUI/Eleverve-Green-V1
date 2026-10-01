import React from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { companyData } from "@/data/company";
import { footerQuickLinks } from "@/data/navigation";
import { Mail, MapPin, Building2, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#141916] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand & Proposition */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <Logo height={32} inkColor="#ffffff" />
              </div>
              <p className="text-sm sm:text-base text-white/85 leading-relaxed max-w-md mb-6 font-normal">
                {companyData.description}
              </p>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-emerald-400 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold tracking-wider">ANY RENEWABLE ENERGY, MADE FIRM.</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <span className="block text-[11px] font-mono text-white/50 uppercase tracking-wider mb-2 font-semibold">
                Mandatory Regulatory Disclosure
              </span>
              <p className="text-xs text-white/70 font-normal leading-relaxed">
                {companyData.disclaimer}
              </p>
            </div>
          </div>

          {/* Quick Platform Links */}
          <div className="lg:col-span-3">
            <span className="block font-mono text-xs font-bold uppercase tracking-widest text-amber-400 mb-5">
              Operating Platform
            </span>
            <ul className="space-y-3.5">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-emerald-400 hover:translate-x-1 transition-all duration-200 font-normal group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact, Offices & Registered Headquarters */}
          <div className="lg:col-span-4 space-y-7">
            <div>
              <span className="block font-mono text-xs font-bold uppercase tracking-widest text-amber-400 mb-3.5">
                Institutional Dialogue
              </span>
              <a
                href={`mailto:${companyData.email}`}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-sm font-semibold text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-500/40 hover:text-emerald-300 transition-all duration-300 group shadow-xs"
              >
                <Mail className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>{companyData.email}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>

            <div>
              <span className="block font-mono text-xs font-bold uppercase tracking-widest text-amber-400 mb-2.5">
                Regional Hubs
              </span>
              <div className="flex items-center gap-2.5 text-sm text-white/90">
                <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/10">
                  <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <span className="font-medium text-white/90">Mumbai · Pune · Gurgaon</span>
              </div>
            </div>

            <div>
              <span className="block font-mono text-xs font-bold uppercase tracking-widest text-amber-400 mb-2.5">
                Registered Office
              </span>
              <div className="flex items-start gap-2.5 text-xs text-white/75 leading-relaxed">
                <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/10 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <span>{companyData.registeredOffice}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
          <div>
            © {companyData.copyrightYear} <span className="text-white/80">{companyData.legalName}</span>. All rights reserved.
          </div>
          <div className="flex items-center gap-4 sm:gap-6 text-white/60">
            <span className="hover:text-emerald-400 transition-colors">UTILITY PPAs</span>
            <span className="text-white/20">·</span>
            <span className="hover:text-emerald-400 transition-colors">ENERGY-AS-A-SERVICE</span>
            <span className="text-white/20">·</span>
            <span className="hover:text-emerald-400 transition-colors">INDIA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
