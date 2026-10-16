"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface MediaVideoCardProps {
  imageSrc: string;
  imageAlt: string;
  title?: string;
  subtitle?: string;
  tag?: string;
  aspectRatio?: "video" | "wide" | "square" | "tall";
  className?: string;
  showBadge?: boolean;
  badgeText?: string;
}

export function MediaVideoCard({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  tag,
  aspectRatio = "video",
  className,
  showBadge = true,
  badgeText = "Video",
}: MediaVideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const aspectClass =
    aspectRatio === "video"
      ? "aspect-[16/9]"
      : aspectRatio === "wide"
      ? "aspect-[16/10]"
      : aspectRatio === "square"
      ? "aspect-square"
      : "aspect-[4/5]";

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative rounded-2xl sm:rounded-3xl overflow-hidden border border-line bg-panel group shadow-subtle transition-all duration-300 select-none",
        aspectClass,
        className
      )}
    >
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={cn(
          "object-cover transition-transform duration-700 ease-out",
          isHovered ? "scale-105" : "scale-100"
        )}
      />

      {/* Dark Readability Scrims */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/30 pointer-events-none transition-opacity duration-300" />

      {/* Requirement 4: Top Left "Video" Badge for Smart UI video readiness */}
      {showBadge && (
        <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-emerald-500/40 text-emerald-400 shadow-md">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <Play className="w-3 h-3 fill-emerald-400" />
          <span className="text-[11px] font-mono font-bold tracking-wider uppercase">
            {badgeText}
          </span>
        </div>
      )}

      {/* Optional Tag (Top Right) */}
      {tag && (
        <div className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white/90 text-[10px] font-mono uppercase tracking-wider">
          {tag}
        </div>
      )}

      {/* Center Subtle Play Button Trigger */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className={cn(
            "w-12 h-12 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/50 flex items-center justify-center text-white transition-all duration-300 shadow-glow",
            isHovered ? "scale-110 bg-emerald-500/40 border-emerald-400" : "scale-100"
          )}
        >
          <Play className="w-5 h-5 fill-white text-white ml-0.5" />
        </div>
      </div>

      {/* Bottom Metadata & Caption */}
      {(title || subtitle) && (
        <div className="absolute bottom-0 left-0 right-0 p-5 z-10 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
          {title && (
            <h4 className="text-white font-heading font-semibold text-base sm:text-lg mb-1 leading-snug drop-shadow-sm">
              {title}
            </h4>
          )}
          {subtitle && (
            <p className="text-white/80 text-xs sm:text-sm font-normal line-clamp-2 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
