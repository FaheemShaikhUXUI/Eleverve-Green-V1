"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface RollingNumberProps {
  value: string;
  prefix?: string;
  suffix?: string;
  className?: string;
  duration?: number;
}

export function RollingNumber({
  value,
  prefix = "",
  suffix = "",
  className,
  duration = 1800,
}: RollingNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState<string>("0");

  useEffect(() => {
    if (!isInView) return;

    // Parse pure numeric part if available
    const numericMatch = value.match(/[\d.]+/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const targetNum = parseFloat(numericMatch[0]);
    const isDecimal = numericMatch[0].includes(".");
    const decimalPlaces = isDecimal ? numericMatch[0].split(".")[1].length : 0;
    const nonNumericPrefix = value.slice(0, numericMatch.index);
    const nonNumericSuffix = value.slice((numericMatch.index || 0) + numericMatch[0].length);

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      const currentNum = targetNum * ease;

      const formattedNum = isDecimal
        ? currentNum.toFixed(decimalPlaces)
        : Math.round(currentNum).toString();

      setDisplayValue(`${nonNumericPrefix}${formattedNum}${nonNumericSuffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
