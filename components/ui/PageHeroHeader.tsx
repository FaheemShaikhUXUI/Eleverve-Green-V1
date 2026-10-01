"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme/ThemeProvider";

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
  imagePosition = "center 78%",
  imageClassName,
  children,
  className,
}: PageHeroHeaderProps) {
  const { resolvedTheme } = useTheme();
  const isWhite = resolvedTheme === "ivory";

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden select-none min-h-[500px] sm:min-h-[540px] lg:min-h-[580px] flex items-center transition-colors duration-400",
        isWhite ? "bg-white" : "bg-transparent",
        className
      )}
    >
      {/* Background Image Container with Raised Meaningful Focal Area */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          style={{ objectPosition: imagePosition }}
          className={cn(
            "object-cover scale-[1.04] transition-all duration-400 hero-watermark-img",
            isWhite
              ? "opacity-45 filter contrast-[1.22] brightness-[1.05] mix-blend-multiply"
              : "opacity-100 filter brightness-[1.05] contrast-[1.14]",
            imageClassName
          )}
        />

        {/* Horizontal Reading Scrim */}
        <div
          className="absolute inset-0 transition-all duration-400 hero-scrim-h"
          style={{
            background: isWhite
              ? "linear-gradient(to right, rgba(255, 255, 255, 0.88) 0%, rgba(255, 255, 255, 0.50) 45%, rgba(255, 255, 255, 0.08) 100%)"
              : "linear-gradient(to right, rgba(0, 0, 0, 0.72) 0%, rgba(0, 0, 0, 0.48) 45%, rgba(0, 0, 0, 0.15) 100%)",
          }}
        />

        {/* Multi-Stop Vertical Atmospheric Overlay */}
        <div
          className="absolute inset-0 transition-all duration-400 hero-scrim-v"
          style={{
            background: isWhite
              ? "linear-gradient(to bottom, rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0.08) 30%, rgba(255, 255, 255, 0.35) 70%, #ffffff 100%)"
              : "linear-gradient(to bottom, rgba(0, 0, 0, 0.68) 0%, rgba(0, 0, 0, 0.22) 28%, rgba(0, 0, 0, 0.28) 64%, rgba(0, 0, 0, 0.75) 86%, var(--bg) 100%)",
          }}
        />

        {/* Bottom Ambient Glow / Seamless Fade */}
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 pointer-events-none transition-all duration-400",
            isWhite
              ? "h-28 bg-gradient-to-t from-white via-white/80 to-transparent"
              : "h-36 bg-gradient-to-t from-green/15 via-transparent to-transparent"
          )}
        />
      </div>

      {/* Hero Content Layer — Positioned with Generous Clearance for the Fixed Header */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-36 sm:pt-40 lg:pt-44 pb-20 sm:pb-24 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          {/* Eyebrow Pill Indicator */}
          {eyebrow && (
            <div
              className={cn(
                "inline-flex items-center gap-2.5 mb-4 text-xs font-mono font-semibold tracking-widest uppercase transition-colors duration-300 hero-eyebrow-text",
                isWhite ? "text-green" : "text-emerald-400"
              )}
            >
              <span
                className={cn(
                  "w-6 h-[1.5px] inline-block shadow-xs transition-colors duration-300 hero-eyebrow-bar",
                  isWhite ? "bg-green" : "bg-emerald-400 shadow-sm"
                )}
              />
              <span>{eyebrow}</span>
            </div>
          )}

          {/* Primary High-Impact Hero Typography */}
          {(titleLight || titleBold) && (
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.12] mb-5 uppercase">
              {titleLight && (
                <span
                  className={cn(
                    "transition-colors duration-300 hero-title-light-text",
                    isWhite ? "text-black" : "text-white drop-shadow-sm"
                  )}
                >
                  {titleLight}{" "}
                </span>
              )}
              {titleBold && (
                <span
                  className={cn(
                    "transition-colors duration-300 hero-title-bold-text",
                    isWhite ? "text-green" : "text-emerald-400 drop-shadow-sm"
                  )}
                >
                  {titleBold}
                </span>
              )}
            </h1>
          )}

          {/* Executive Subtitle / Strategic Mission Statement */}
          {description && (
            <p
              className={cn(
                "text-base sm:text-lg leading-relaxed max-w-3xl font-normal transition-colors duration-300 hero-desc-text",
                isWhite ? "text-black/80 font-normal" : "text-white/90 drop-shadow-xs font-normal"
              )}
            >
              {description}
            </p>
          )}

          {/* Optional Action Buttons, Stats, or Interactivity */}
          {children && <div className="mt-8 pt-2">{children}</div>}
        </motion.div>
      </div>
    </div>
  );
}
