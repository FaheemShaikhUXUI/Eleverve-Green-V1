"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [enabled, setEnabled] = useState(false);

  // Position motion values for 60fps / 120fps direct hardware rendering
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Ultra-crisp, zero-latency spring for immediate 1:1 precision tracking
  const springX = useSpring(mouseX, { damping: 45, stiffness: 600, mass: 0.1 });
  const springY = useSpring(mouseY, { damping: 45, stiffness: 600, mass: 0.1 });

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (typeof window === "undefined") return;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    setEnabled(true);

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check if hovering over interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          "a, button, input, select, textarea, [role='button'], .cursor-pointer"
        );
        setIsPointer(!!interactive);
      }
    };

    const onMouseDown = () => setIsPressed(true);
    const onMouseUp = () => setIsPressed(false);

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!enabled) return null;

  return (
    <>
      {/* Global CSS to hide system cursor only on devices with mouse/fine pointer */}
      <style jsx global>{`
        @media (pointer: fine) {
          *, *::before, *::after {
            cursor: none !important;
          }
        }
      `}</style>

      {/* Custom Cursor Root */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[999999]"
        style={{
          x: springX,
          y: springY,
          opacity: isVisible ? 1 : 0,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.15 }}
      >
        <div className="relative -top-1/2 -left-1/2 flex items-center justify-center">
          {/* 20px blurred halo background of vibrant green with 30% opacity */}
          <motion.div
            className="absolute rounded-full bg-[#00e676]"
            style={{
              width: 20,
              height: 20,
              opacity: 0.3,
              filter: "blur(2.5px)",
            }}
            animate={{
              scale: isPressed ? 0.8 : isPointer ? 1.5 : 1,
              opacity: isPointer ? 0.45 : 0.3,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          />

          {/* 20px crisp vibrant thin stroke outer ring */}
          <motion.div
            className="absolute rounded-full border border-[#00e676] shadow-[0_0_4px_rgba(0,230,118,0.5)]"
            style={{
              width: 20,
              height: 20,
              borderWidth: "1px",
              borderColor: "#00e676",
            }}
            animate={{
              scale: isPressed ? 0.8 : isPointer ? 1.5 : 1,
              opacity: isPointer ? 1 : 0.85,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          />

          {/* Secondary soft ambient glow for high vibrancy across dark & white themes */}
          <div
            className="absolute rounded-full bg-[#00e676]/20"
            style={{
              width: 26,
              height: 26,
              filter: "blur(5px)",
            }}
          />

          {/* 5px center dot — Immediate 0ms switch to full white on click and immediate return to green on release */}
          <motion.div
            className={cn(
              "relative rounded-full select-none",
              isPressed
                ? "!bg-white !shadow-[0_0_9px_rgba(255,255,255,1)]"
                : "!bg-[#00e676] !shadow-[0_0_6px_#00e676]"
            )}
            style={{
              width: 5,
              height: 5,
              backgroundColor: isPressed ? "#ffffff" : "#00e676",
              boxShadow: isPressed
                ? "0 0 9px rgba(255, 255, 255, 1)"
                : "0 0 6px #00e676",
              transition: "none",
            }}
            animate={{
              scale: isPressed ? 1.3 : isPointer ? 1.2 : 1,
            }}
            transition={{
              scale: { type: "spring", stiffness: 600, damping: 25 },
            }}
          />
        </div>
      </motion.div>
    </>
  );
}
