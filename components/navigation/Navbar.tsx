"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { useTheme } from "@/components/theme/ThemeProvider";
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";
import { navigationLinks } from "@/data/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  const isHeaderOverDark = !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out backdrop-blur-xl",
          scrolled ? "py-2.5" : "py-3.5",
          isHeaderOverDark
            ? "bg-black/70 border-b border-white/10 shadow-xs"
            : "bg-white/70 dark:bg-black/70 border-b border-line dark:border-white/10 shadow-xs"
        )}
      >
        <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Official Brand Logo */}
          <div className="flex-shrink-0">
            <Logo height={scrolled ? 28 : 32} inkColor={isHeaderOverDark ? "#ffffff" : undefined} />
          </div>

          {/* Desktop Navigation Links — Strictly One-Liner with Smooth & Fast Transitions */}
          <nav
            onMouseLeave={() => setHoveredHref(null)}
            className="hidden xl:flex items-center gap-0.5 xl:gap-1 flex-nowrap whitespace-nowrap p-1 rounded-full relative"
          >
            {navigationLinks.map((link) => {
              const isActive = pathname === link.href;
              const isHovered = hoveredHref === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHoveredHref(link.href)}
                  className={cn(
                    "relative px-3.5 py-1.5 rounded-full font-heading text-[13px] tracking-normal whitespace-nowrap select-none transition-colors duration-150 z-10",
                    isActive
                      ? isHeaderOverDark
                        ? "text-emerald-400 font-semibold"
                        : "text-green font-medium"
                      : isHeaderOverDark
                      ? "text-white/85 hover:text-white font-normal"
                      : "text-ink/80 hover:text-ink font-normal"
                  )}
                >
                  {/* Super Smooth & Soft Animated Active Pill Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="headerNavActivePill"
                      transition={{ type: "spring", stiffness: 220, damping: 26, mass: 0.8 }}
                      className={cn(
                        "absolute inset-0 rounded-full -z-10",
                        isHeaderOverDark
                          ? "bg-emerald-500/20 border border-emerald-400/40 shadow-xs"
                          : "bg-green/15 border border-green/25 shadow-xs"
                      )}
                    />
                  )}

                  {/* Soft & Smooth Hover Tracking Pill */}
                  {isHovered && !isActive && (
                    <motion.div
                      layoutId="headerNavHoverPill"
                      transition={{ type: "spring", stiffness: 280, damping: 28, mass: 0.6 }}
                      className={cn(
                        "absolute inset-0 rounded-full -z-10",
                        isHeaderOverDark ? "bg-white/15" : "bg-panel-2/80"
                      )}
                    />
                  )}

                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Controls: Cool Get In Touch Button + 3 Color Dots at Complete Right */}
          <div className="hidden lg:flex items-center gap-3.5 flex-shrink-0">
            {/* Cool Get In Touch Button with High Contrast & Live Beacon */}
            <Link
              href="/contact"
              className={cn(
                "relative group overflow-hidden inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full font-heading text-[13px] font-semibold tracking-normal transition-all duration-300 whitespace-nowrap shadow-xs hover:-translate-y-0.5 border border-sky-400/25 hover:border-sky-400/50",
                pathname === "/contact"
                  ? "bg-green text-white shadow-glow"
                  : "bg-green text-white hover:bg-green/90 shadow-sm"
              )}
            >
              {/* Radar live pulse beacon dot with sky blue ping */}
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>

              <span className="text-white drop-shadow-xs">Get in Touch</span>

              <ArrowUpRight className="w-3.5 h-3.5 text-white/95 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Link>

            {/* Small 3 Dots Color Selector at Complete Right Side */}
            <ThemeSwitcher />
          </div>

          {/* Mobile Right Controls: 3 Dots + Burger */}
          <div className="flex xl:hidden items-center gap-2.5">
            <ThemeSwitcher />

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                "p-2 rounded-xl border focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500",
                isHeaderOverDark
                  ? "border-white/20 bg-white/10 text-white hover:text-emerald-400"
                  : "border-line bg-panel text-ink hover:text-green"
              )}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-bg/95 backdrop-blur-2xl xl:hidden transition-all duration-500 flex flex-col justify-between p-6 sm:p-10 pt-24",
          mobileOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        )}
      >
        <div className="flex flex-col gap-2 overflow-y-auto max-h-[70vh]">
          <span className="font-heading font-medium text-xs tracking-wider text-green mb-3">
            Menu Navigation
          </span>
          {navigationLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "py-3 px-3 rounded-xl flex items-center justify-between text-lg sm:text-xl font-heading font-normal border-b border-line transition-all duration-150 whitespace-nowrap active:scale-[0.98]",
                  isActive
                    ? "text-green font-medium bg-green/10"
                    : "text-ink hover:text-green hover:bg-panel-2/60"
                )}
              >
                <span>{link.label}</span>
                <span className="font-mono text-[10px] uppercase text-soft">
                  {link.description?.split(" ")[0]}
                </span>
              </Link>
            );
          })}
        </div>

        <div className="pt-6 border-t border-line flex flex-col gap-4">
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="w-full py-3.5 rounded-full bg-green text-white font-heading font-semibold text-center shadow-md flex items-center justify-center gap-2 border border-sky-400/30"
          >
            <span className="relative flex h-2 w-2 mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span>Get in Touch</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <p className="text-xs font-heading font-normal text-soft text-center">
            ANY RENEWABLE ENERGY, MADE FIRM.
          </p>
        </div>
      </div>
    </>
  );
}
