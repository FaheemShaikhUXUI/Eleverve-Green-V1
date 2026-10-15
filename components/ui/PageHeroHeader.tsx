"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PageHeroHeaderProps {
  eyebrow?: string;
  titleLight?: string;
  titleBold?: string;
  description?: string;
  imageSrc: string;
  imageAlt?: string;
  imagePosition?: string;
  imageClassName?: string;
  children?: React.ReactNode;
  className?: string;
}

export function PageHeroHeader({
  eyebrow,
  titleLight,
  titleBold,
  description,
  imageSrc,
  imageAlt = "Eleverve Green clean energy infrastructure",
  imagePosition = "center 72%",
  imageClassName,
  children,
  className,
}: PageHeroHeaderProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden select-none min-h-[500px] sm:min-h-[540px] lg:min-h-[580px] flex items-center bg-[#061320]",
        className
      )}
    >
      {/* Background Image Container — Confined Strictly to Hero Section with Dark Navy Behind & 85% Opacity */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          style={{ objectPosition: imagePosition }}
          className={cn(
            "object-cover scale-[1.02] opacity-[0.85] filter brightness-[1.08] contrast-[1.12] transition-all duration-700",
            imageClassName
          )}
        />

        {/* Cinematic Dark Navy Directional Scrim for Optimal Typography Contrast */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(6, 19, 32, 0.88) 0%, rgba(6, 19, 32, 0.60) 45%, rgba(6, 19, 32, 0.25) 100%)",
          }}
        />

        {/* Vertical Ambient Shadow Vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(6, 19, 32, 0.65) 0%, rgba(6, 19, 32, 0.15) 30%, rgba(6, 19, 32, 0.35) 75%, rgba(6, 19, 32, 0.85) 100%)",
          }}
        />
      </div>

      {/* Hero Content Layer — All Content Contained Within Hero Over Image */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-36 sm:pt-40 lg:pt-44 pb-20 sm:pb-24 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          {/* Eyebrow Indicator */}
          {eyebrow && (
            <div className="inline-flex items-center gap-2.5 mb-4 text-xs font-mono font-semibold tracking-widest uppercase text-emerald-400">
              <span className="w-6 h-[2px] inline-block bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              <span>{eyebrow}</span>
            </div>
          )}

          {/* Primary High-Impact Hero Typography */}
          {(titleLight || titleBold) && (
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.14] mb-5 uppercase">
              {titleLight && (
                <span className="text-white drop-shadow-md">
                  {titleLight}{" "}
                </span>
              )}
              {titleBold && (
                <span className="text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.4)]">
                  {titleBold}
                </span>
              )}
            </h1>
          )}

          {/* Executive Subtitle / Strategic Mission Statement */}
          {description && (
            <p className="text-base sm:text-lg leading-relaxed max-w-3xl font-normal text-slate-200 drop-shadow-sm">
              {description}
            </p>
          )}

          {/* Optional Action Buttons, Stats, or Interactivity */}
          {children && <div className="mt-8 pt-2">{children}</div>}
        </motion.div>
      </div>

      {/* Page Break Logic: Clean Architectural Border Separating Hero from Content Below */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-neutral-200 dark:bg-neutral-800 z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent z-20 pointer-events-none" />
    </div>
  );
}
