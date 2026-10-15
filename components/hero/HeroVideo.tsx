"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { companyData } from "@/data/company";
import { ArrowDown, ArrowRight, Play, Pause, Zap, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme/ThemeProvider";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    // Detect reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const bgBehindVideo =
    resolvedTheme === "black"
      ? "#030604"
      : "color-mix(in srgb, #000000 70%, #0284c7 30%)";

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20 bg-[#021827]"
      style={{ backgroundColor: bgBehindVideo }}
    >
      {/* 70% Black + 30% Blue Background with 60% Opacity Full Screen Video */}
      <div
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#021827]"
        style={{ backgroundColor: bgBehindVideo }}
      >
        <video
          ref={videoRef}
          autoPlay={!reducedMotion}
          loop
          muted
          playsInline
          poster="/images/solar-substation.jpg"
          onLoadedData={() => setVideoLoaded(true)}
          className={cn(
            "w-full h-full object-cover object-center transition-opacity duration-700",
            videoLoaded ? "opacity-60" : "opacity-0"
          )}
        >
          <source src="/videos/Video For Home Page Background.mp4" type="video/mp4" />
          <source src="/videos/hero-energy.mp4" type="video/mp4" />
        </video>

        {/* Technical Energy Grid Pattern subtle overlay */}
        <div className="absolute inset-0 energy-grid-bg opacity-10 mask-radial" />
      </div>

      {/* Main Content Area with Futuristic Clean-Tech Command UI */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        {/* Top Telemetry Coordinate Bar */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/10 text-[11px] font-mono text-emerald-400">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>LIVE GRID TELEMETRY</span>
            </span>
            <span className="text-white/50 hidden sm:inline">ISTS 220kV / 400kV INTERCONNECT</span>
          </div>
          <div className="flex items-center gap-4 text-white/70">
            <span className="hidden md:inline">FREQ: <strong className="text-emerald-400 font-mono">50.02 Hz</strong></span>
            <span>SYSTEM: <strong className="text-white">OPTIMAL</strong></span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typography & Positioning */}
          <div className="lg:col-span-7">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2.5 mb-6 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 backdrop-blur-md shadow-glow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-300 font-bold">
                {companyData.eyebrow}
              </span>
            </div>

            {/* Main Headline with Futuristic Neon Emerald Glow */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-bold tracking-tight leading-[0.94] mb-8">
              <span className="font-bold text-white drop-shadow-sm block">ANY RENEWABLE</span>
              <span className="font-bold text-white drop-shadow-sm block">ENERGY,</span>
              <span className="font-bold text-emerald-400 drop-shadow-[0_0_35px_rgba(16,185,129,0.45)]">
                MADE FIRM.
              </span>
            </h1>

            {/* Core Supporting Positioning with Crisp High-Contrast White Text */}
            <p className="text-lg sm:text-xl text-white/90 font-normal leading-relaxed max-w-2xl mb-10 drop-shadow-xs">
              {companyData.coreStatement}
            </p>

            {/* Futuristic CTAs */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5">
              <Link
                href="/platform"
                className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-heading font-bold text-sm tracking-wide shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:shadow-[0_0_40px_rgba(16,185,129,0.7)] hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <span>EXPLORE THE PLATFORM</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white hover:text-emerald-300 hover:border-emerald-400/50 transition-all duration-300 font-heading font-medium text-sm"
              >
                <span>Verified Assets (52.5 MWp+)</span>
              </Link>
            </div>
          </div>

          {/* Right Column: High-Tech Telemetry HUD Card (CleanMax & Vibrant Energy Style) */}
          <div className="lg:col-span-5">
            <div
              className="rounded-none p-6 sm:p-8 hud-corner-bracket relative overflow-hidden group transition-all duration-300"
              style={{
                background: "rgba(6, 14, 10, 0.58)",
                backdropFilter: "blur(32px) saturate(190%)",
                WebkitBackdropFilter: "blur(32px) saturate(190%)",
                border: "1px solid rgba(255, 255, 255, 0.22)",
                boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.85), inset 0 1px 1px 0 rgba(255, 255, 255, 0.25)",
              }}
            >
              {/* Luminous Top Hover Beam */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500 z-30" />

              {/* Card Ambient Glow Aura */}
              <div className="pointer-events-none absolute -top-12 -right-12 w-52 h-52 rounded-none blur-3xl opacity-40 bg-emerald-500/25 group-hover:opacity-65 transition-opacity" />

              {/* Card Header with HUD Status */}
              <div className="flex items-center justify-between border-b border-white/20 pb-4 mb-6 relative z-10">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-none bg-emerald-400 animate-ping" />
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-300 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]">
                    DISPATCH ENGINE HUD
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-none text-emerald-300 font-mono text-[10px] font-bold bg-emerald-950/70 border border-emerald-400/40 backdrop-blur-md shadow-xs">
                  RTC-ACTIVE
                </span>
              </div>

              {/* Real-Time Dispatch Bars - High Contrast & Glowing */}
              <div className="space-y-4 mb-6 relative z-10">
                {/* Solar Generation */}
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-white font-semibold drop-shadow-sm">Solar Irradiation Capture</span>
                    <span className="text-emerald-300 font-bold drop-shadow-[0_0_8px_rgba(52,211,153,0.9)]">96% Midday Peak</span>
                  </div>
                  <div className="w-full h-2.5 rounded-none bg-white/10 border border-white/15 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-300 rounded-none w-[96%] shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                  </div>
                </div>

                {/* Wind Ramping */}
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-white font-semibold drop-shadow-sm">Diurnal Wind Balancing</span>
                    <span className="text-sky-300 font-bold drop-shadow-[0_0_8px_rgba(56,189,248,0.9)]">82% Evening Dispatch</span>
                  </div>
                  <div className="w-full h-2.5 rounded-none bg-white/10 border border-white/15 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-sky-500 via-sky-400 to-sky-300 rounded-none w-[82%] shadow-[0_0_12px_rgba(56,189,248,0.9)]" />
                  </div>
                </div>

                {/* BESS Storage */}
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-white font-semibold drop-shadow-sm">BESS Storage Firming</span>
                    <span className="text-amber-300 font-bold drop-shadow-[0_0_8px_rgba(251,191,36,0.9)]">100% SLA Guard</span>
                  </div>
                  <div className="w-full h-2.5 rounded-none bg-white/10 border border-white/15 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-300 rounded-none w-full shadow-[0_0_12px_rgba(251,191,36,0.9)]" />
                  </div>
                </div>
              </div>

              {/* Guaranteed Result Outcome Pill - Dark Transparent Emerald Glass */}
              <div
                className="p-4 sm:p-5 rounded-none relative z-10 overflow-hidden border border-emerald-500/40"
                style={{
                  background: "rgba(0, 30, 16, 0.65)",
                  backdropFilter: "blur(16px)",
                  boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.15)",
                }}
              >
                <span className="block font-mono text-[10px] uppercase text-emerald-400 font-bold tracking-widest mb-1 drop-shadow-sm">
                  // CONTRACTED DELIVERABLE
                </span>
                <div className="font-heading text-lg font-bold text-white flex items-center justify-between drop-shadow-sm">
                  <span>Firm, Dispatchable Power</span>
                  <Zap className="w-5 h-5 text-emerald-400 animate-pulse drop-shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
                </div>
                <p className="text-xs text-white/90 mt-1 leading-relaxed drop-shadow-sm font-normal">
                  Measured on dependable delivered MWh, zero merchant penalty exposure.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CleanMax / Vibrant Energy Style 4-Metric Ribbon Docked at Base */}
        <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 rounded-none bg-black/55 border border-white/15 backdrop-blur-md">
            <span className="block font-mono text-[11px] uppercase tracking-wider text-emerald-400 font-bold mb-1">
              Active Pipeline
            </span>
            <div className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
              1.2+ <span className="text-lg text-emerald-400">GW</span>
            </div>
            <span className="text-xs text-white/80 block mt-1 font-mono">Multi-state asset base</span>
          </div>

          <div className="p-4 rounded-none bg-black/55 border border-white/15 backdrop-blur-md">
            <span className="block font-mono text-[11px] uppercase tracking-wider text-emerald-400 font-bold mb-1">
              Firm Delivery SLA
            </span>
            <div className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
              99.8<span className="text-lg text-emerald-400">%</span>
            </div>
            <span className="text-xs text-white/80 block mt-1 font-mono">Contractual uptime guarantee</span>
          </div>

          <div className="p-4 rounded-none bg-black/55 border border-white/15 backdrop-blur-md">
            <span className="block font-mono text-[11px] uppercase tracking-wider text-emerald-400 font-bold mb-1">
              CO2e Abatement
            </span>
            <div className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
              3.2M+ <span className="text-lg text-emerald-400">T</span>
            </div>
            <span className="text-xs text-white/80 block mt-1 font-mono">Lifetime clean emissions</span>
          </div>

          <div className="p-4 rounded-none bg-black/55 border border-white/15 backdrop-blur-md">
            <span className="block font-mono text-[11px] uppercase tracking-wider text-emerald-400 font-bold mb-1">
              Grid Evacuation
            </span>
            <div className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
              ISTS <span className="text-lg text-emerald-400">Ready</span>
            </div>
            <span className="text-xs text-white/80 block mt-1 font-mono">220kV / 400kV pooling bays</span>
          </div>
        </div>

        {/* Bottom Hero Bar: Video Controls & Scroll Hint */}
        <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/70">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={togglePlay}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/25 bg-white/10 text-white hover:text-emerald-400 hover:border-emerald-400/50 hover:bg-white/20 transition-all"
              aria-label={isPlaying ? "Pause background footage" : "Play background footage"}
            >
              {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
              <span>{isPlaying ? "Pause Ambient Video" : "Play Ambient Video"}</span>
            </button>
            <span className="hidden sm:inline text-white/30">|</span>
            <span className="hidden sm:inline text-white/60">
              Only Video on Platform · 60% Ambient Clean Energy Footage
            </span>
          </div>

          <Link
            href="#model"
            className="inline-flex items-center gap-2 text-white/80 hover:text-emerald-400 transition-colors"
          >
            <span>Scroll to Platform Model</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-emerald-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}
