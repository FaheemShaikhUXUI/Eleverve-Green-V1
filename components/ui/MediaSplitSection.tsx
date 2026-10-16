"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface MediaSplitSectionProps {
  eyebrow?: string;
  titleLight?: string;
  titleBold?: string;
  lead?: string;
  children?: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  imageCaption?: string;
  imagePosition?: "left" | "right";
  overlapContent?: boolean;
  isVideoPlaceholder?: boolean;
  className?: string;
}

export function MediaSplitSection({
  eyebrow,
  titleLight,
  titleBold,
  lead,
  children,
  imageSrc,
  imageAlt,
  imageCaption,
  imagePosition = "right",
  isVideoPlaceholder = true,
  className,
}: MediaSplitSectionProps) {
  const isImageRight = imagePosition === "right";

  return (
    <div className={cn("w-full relative", className)}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div
          className={cn(
            "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center",
            isImageRight ? "" : "lg:[&>div:first-child]:order-2"
          )}
        >
          {/* Content Column — Frameless Text in the Air */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-between bg-transparent relative z-10 py-2 sm:py-4"
          >
            <div>
              {eyebrow && (
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="px-2.5 py-1 bg-emerald-50 [.section-theme-break_&]:bg-emerald-500/15 border border-emerald-600/30 [.section-theme-break_&]:border-emerald-400/30 text-[10px] font-mono uppercase tracking-widest text-emerald-700 [.section-theme-break_&]:text-emerald-400 font-semibold rounded-none flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-emerald-600 [.section-theme-break_&]:bg-emerald-400 rounded-none inline-block animate-pulse" />
                    {eyebrow}
                  </span>
                  <span className="font-mono text-xs text-neutral-400 [.section-theme-break_&]:text-white/50 tracking-wider">
                    // PLATFORM ARCHITECTURE
                  </span>
                </div>
              )}

              {(titleLight || titleBold) && (
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-heading text-neutral-900 [.section-theme-break_&]:text-white tracking-tight leading-[1.12] mb-6">
                  {titleLight && <span className="text-neutral-900 [.section-theme-break_&]:text-white">{titleLight} </span>}
                  {titleBold && <span className="text-emerald-700 [.section-theme-break_&]:text-emerald-400 block mt-1">{titleBold}</span>}
                </h2>
              )}

              {lead && (
                <p className="text-base sm:text-lg text-neutral-700 [.section-theme-break_&]:text-neutral-300 leading-relaxed mb-8 font-normal">
                  {lead}
                </p>
              )}
            </div>

            {/* Action / Children Area */}
            <div className="pt-6 border-t border-neutral-200 [.section-theme-break_&]:border-white/10 flex flex-wrap items-center justify-between gap-4">
              {children}
              <div className="flex items-center gap-3 text-[11px] font-mono text-neutral-500 [.section-theme-break_&]:text-neutral-400 uppercase tracking-wider">
                <span className="px-2.5 py-1 bg-neutral-100 [.section-theme-break_&]:bg-white/5 border border-neutral-300 [.section-theme-break_&]:border-white/15 text-neutral-800 [.section-theme-break_&]:text-neutral-300 font-semibold rounded-none">
                  24/7 FIRM
                </span>
                <span>·</span>
                <span className="px-2.5 py-1 bg-neutral-100 [.section-theme-break_&]:bg-white/5 border border-neutral-300 [.section-theme-break_&]:border-white/15 text-neutral-800 [.section-theme-break_&]:text-neutral-300 font-semibold rounded-none">
                  SLDC ALIGNED
                </span>
              </div>
            </div>
          </motion.div>

          {/* Media Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative min-h-[380px] sm:min-h-[460px] lg:min-h-[500px] w-full group bg-black overflow-hidden rounded-none border border-neutral-200 [.section-theme-break_&]:border-white/15 shadow-2xl"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/30 pointer-events-none" />

            {/* Video Badge */}
            {isVideoPlaceholder && (
              <div className="absolute top-6 left-6 z-10 inline-flex items-center gap-2 px-3 py-1 bg-black/80 backdrop-blur-md border border-emerald-400/50 text-emerald-400 shadow-lg rounded-none">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-none animate-pulse" />
                <Play className="w-3 h-3 fill-emerald-400" />
                <span className="text-[11px] font-mono font-bold tracking-wider uppercase">
                  VIDEO
                </span>
              </div>
            )}

            {/* Caption Bar */}
            {imageCaption && (
              <div className="absolute bottom-6 left-6 right-6 py-2.5 px-4 bg-black/85 backdrop-blur-md border border-white/20 text-xs font-mono text-white flex items-center justify-between rounded-none shadow-lg">
                <span className="truncate tracking-wide text-neutral-200">{imageCaption}</span>
                <span className="w-2 h-2 bg-emerald-400 rounded-none animate-pulse shrink-0 ml-3" />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
