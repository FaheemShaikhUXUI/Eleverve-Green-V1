"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  titleLight?: string;
  titleBold?: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  titleLight,
  titleBold,
  description,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-4xl",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "inline-flex items-center gap-2.5 mb-4 text-xs font-mono font-semibold tracking-widest text-green uppercase",
            align === "center" && "justify-center"
          )}
        >
          <span className="w-6 h-[1.5px] bg-green inline-block" />
          <span>{eyebrow}</span>
        </div>
      )}

      {(titleLight || titleBold) && (
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight leading-[1.08] mb-5">
          {titleLight && <span className="font-bold text-ink">{titleLight} </span>}
          {titleBold && <span className="font-bold text-green">{titleBold}</span>}
        </h2>
      )}

      {description && (
        <p className="text-base sm:text-lg text-soft leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </motion.div>
  );
}
