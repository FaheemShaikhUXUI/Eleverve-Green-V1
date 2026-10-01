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

      {/* Main Content Area with Crisp High-Contrast White Fonts */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typography & Positioning */}
          <div className="lg:col-span-8">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 mb-6 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-green font-semibold">
                {companyData.eyebrow}
              </span>
            </div>

            {/* Main Headline with Bold White and Bold Green Contrast */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.96] mb-8">
              <span className="font-bold text-white drop-shadow-sm">ANY RENEWABLE ENERGY,</span>
              <br />
              <span className="font-bold text-green drop-shadow-md">
                MADE FIRM.
              </span>
            </h1>

            {/* Core Supporting Positioning with Crisp High-Contrast White Text */}
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 font-normal leading-relaxed max-w-2xl mb-10 drop-shadow-xs">
              {companyData.coreStatement}
            </p>

            {/* Intelligent CTAs */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5">
              <Link
                href="/platform"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-green text-white font-heading font-medium shadow-glow hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <span>Explore the Platform</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/why-now"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-white hover:text-green hover:border-green hover:bg-white/20 transition-all duration-300 font-heading font-medium shadow-xs"
              >
                <span>Why Now: Hour-Deficit Market</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Platform Operating Paradigm Card (Super Apple Glassmorphism) */}
          <div className="lg:col-span-4">
            <div
              className="relative overflow-hidden rounded-[28px] p-6 sm:p-8 transition-all duration-500 hover:scale-[1.015] group"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.05) 30%, rgba(10, 18, 14, 0.45) 70%, rgba(4, 8, 6, 0.70) 100%)",
                backdropFilter: "blur(40px) saturate(190%) contrast(105%)",
                WebkitBackdropFilter: "blur(40px) saturate(190%) contrast(105%)",
                border: "1px solid rgba(255, 255, 255, 0.22)",
                boxShadow:
                  "inset 0 1.5px 1.5px 0 rgba(255, 255, 255, 0.40), inset 0 -1.5px 2px 0 rgba(0, 0, 0, 0.25), 0 24px 60px -12px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(255, 255, 255, 0.06)",
              }}
            >
              {/* Diagonal Specular Reflection Sheen (Apple Glass Glare) */}
              <div
                className="pointer-events-none absolute -top-[120%] -left-[60%] w-[220%] h-[220%] rotate-[28deg] opacity-70 transition-opacity duration-700 group-hover:opacity-90"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.02) 42%, transparent 60%)",
                }}
              />

              {/* Ambient Internal Prismatic Glass Aura */}
              <div
                className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-50 transition-opacity duration-500 group-hover:opacity-75"
                style={{
                  background:
                    "radial-gradient(circle, rgba(0, 135, 78, 0.45) 0%, rgba(56, 189, 248, 0.22) 60%, transparent 100%)",
                }}
              />

              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-6 relative z-10">
                <span className="font-mono text-[11px] font-semibold tracking-wider uppercase text-amber drop-shadow-xs">
                  Operating Paradigm
                </span>
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-emerald-300 font-mono text-[10px] backdrop-blur-md"
                  style={{
                    background: "rgba(0, 135, 78, 0.22)",
                    border: "1px solid rgba(0, 245, 118, 0.30)",
                    boxShadow: "inset 0 1px 0 0 rgba(255, 255, 255, 0.20)",
                  }}
                >
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>Accountable Delivery</span>
                </span>
              </div>

              {/* Stacked Parameters */}
              <div className="space-y-3.5 text-xs font-mono relative z-10">
                <div className="flex items-center justify-between py-2 border-b border-white/10">
                  <span className="text-white/70">Offtaker Focus</span>
                  <span className="text-white font-semibold drop-shadow-xs">Contracted Demand Profile</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/10">
                  <span className="text-white/70">Generation</span>
                  <span className="text-white font-semibold drop-shadow-xs">Solar · Wind · Hydro · BESS</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/10">
                  <span className="text-white/70">Structure</span>
                  <span className="text-white font-semibold drop-shadow-xs">Utility PPA &amp; EaaS</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/10">
                  <span className="text-white/70">Ownership</span>
                  <span className="text-white font-semibold drop-shadow-xs">Long-Term Owner-Operator</span>
                </div>
              </div>

              {/* Central Result Outcome — Nested Frosted Glass Capsule */}
              <div
                className="mt-6 p-4 rounded-2xl relative overflow-hidden backdrop-blur-xl transition-all duration-300 z-10"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0, 135, 78, 0.24) 0%, rgba(0, 80, 45, 0.14) 100%)",
                  border: "1px solid rgba(0, 245, 118, 0.22)",
                  boxShadow:
                    "inset 0 1px 1px 0 rgba(255, 255, 255, 0.25), 0 8px 24px -4px rgba(0, 0, 0, 0.35)",
                }}
              >
                <span className="block font-mono text-[10px] uppercase text-emerald-400 font-semibold tracking-widest mb-1 drop-shadow-xs">
                  Guaranteed Outcome
                </span>
                <div className="font-heading text-xl font-medium text-white flex items-center justify-between drop-shadow-xs">
                  <span>Firm, Dispatchable Power</span>
                  <Zap className="w-5 h-5 text-emerald-400" />
                </div>
                <p className="text-[11px] text-white/80 mt-1 leading-snug drop-shadow-xs">
                  Measured on dependable delivered MWh, not theoretical installed MWp.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Hero Bar: Video Controls & Scroll Hint with White Fonts */}
        <div className="mt-16 pt-8 border-t border-white/15 flex items-center justify-between text-xs font-mono text-white/75">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={togglePlay}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/25 bg-white/10 text-white hover:text-green hover:border-green hover:bg-white/20 transition-all"
              aria-label={isPlaying ? "Pause background footage" : "Play background footage"}
            >
              {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
              <span>{isPlaying ? "Pause Ambient Video" : "Play Ambient Video"}</span>
            </button>
            <span className="hidden sm:inline text-white/30">|</span>
            <span className="hidden sm:inline text-white/60">
              60% Ambient Infrastructure Background
            </span>
          </div>

          <Link
            href="#model"
            className="inline-flex items-center gap-2 text-white/80 hover:text-green transition-colors"
          >
            <span>Scroll to Model</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  );
}
