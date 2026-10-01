"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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
  overlapContent = false,
  className,
}: MediaSplitSectionProps) {
  const isImageRight = imagePosition === "right";

  return (
    <section className={cn("py-20 md:py-28 relative overflow-hidden", className)}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div
          className={cn(
            "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center",
            isImageRight ? "" : "lg:[&>div:first-child]:order-2"
          )}
        >
          {/* Content Column — Slides softly from Left (or Right if inverted) */}
          <motion.div
            initial={{ opacity: 0, x: isImageRight ? -35 : 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "lg:col-span-6 relative z-10",
              overlapContent && (isImageRight ? "lg:-mr-12" : "lg:-ml-12")
            )}
          >
            {eyebrow && (
              <div className="inline-flex items-center gap-2 mb-4 text-xs font-mono font-semibold tracking-widest text-green uppercase">
                <span className="w-5 h-[1.5px] bg-green" />
                <span>{eyebrow}</span>
              </div>
            )}

            {(titleLight || titleBold) && (
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight leading-[1.06] mb-6">
                {titleLight && <span className="font-bold text-ink">{titleLight} </span>}
                {titleBold && <span className="font-bold text-green">{titleBold}</span>}
              </h2>
            )}

            {lead && (
              <p className="text-base sm:text-lg text-soft leading-relaxed mb-6 font-normal">
                {lead}
              </p>
            )}

            {children}
          </motion.div>

          {/* Media Column — Slides softly from Right (or Left if inverted) */}
          <motion.div
            initial={{ opacity: 0, x: isImageRight ? 35 : -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "lg:col-span-6 relative",
              overlapContent && (isImageRight ? "lg:pl-6" : "lg:pr-6")
            )}
          >
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-line bg-panel shadow-subtle group aspect-[16/10] sm:aspect-[16/9]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              {imageCaption && (
                <div className="absolute bottom-4 left-4 right-4 text-[11px] font-mono text-white/80 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex items-center justify-between">
                  <span>{imageCaption}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
