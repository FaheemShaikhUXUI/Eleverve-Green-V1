"use client";

import React, { useRef } from "react";
import { useTheme } from "@/components/theme/ThemeProvider";
import { ThemeMode } from "@/lib/theme";
import { cn } from "@/lib/utils";
import {
  useCircularThemeTransition,
  ThemeCircularWavePortal,
} from "@/components/theme/circular-theme-transition";

interface ThemeDot {
  id: ThemeMode;
  name: string;
  dotColor: string;
  borderColor: string;
}

const THEME_DOTS: ThemeDot[] = [
  {
    id: "ivory",
    name: "White Theme",
    dotColor: "bg-[#ffffff]",
    borderColor: "border-[#00874e]/40",
  },
  {
    id: "black",
    name: "Black Theme",
    dotColor: "bg-[#030604]",
    borderColor: "border-[#38bdf8]/35",
  },
  {
    id: "navy",
    name: "Navy Theme",
    dotColor: "bg-[#061320]",
    borderColor: "border-[#38bdf8]/50",
  },
];

export function ThemeSwitcher({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const { switchTheme, wave } = useCircularThemeTransition(resolvedTheme, setTheme);
  const lastTriggerRef = useRef<{ theme: string; time: number }>({ theme: "", time: 0 });

  const activeIndex = Math.max(
    0,
    THEME_DOTS.findIndex((t) => t.id === resolvedTheme)
  );

  const handleActivate = (
    targetTheme: ThemeMode,
    e: React.PointerEvent<HTMLButtonElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const now = Date.now();
    if (lastTriggerRef.current.theme === targetTheme && now - lastTriggerRef.current.time < 350) {
      return;
    }
    lastTriggerRef.current = { theme: targetTheme, time: now };

    const clientX = e.clientX || (e as any).nativeEvent?.clientX || 0;
    const clientY = e.clientY || (e as any).nativeEvent?.clientY || 0;
    const target = (e.currentTarget || e.target) as HTMLElement;

    switchTheme(targetTheme, {
      clientX,
      clientY,
      currentTarget: target,
      target,
    });
  };

  return (
    <>
      <ThemeCircularWavePortal wave={wave} />

      <div
        className={cn(
          "inline-flex items-center gap-1.5 p-1 rounded-full border border-line bg-panel/70 backdrop-blur-md shadow-xs transition-all relative select-none",
          className
        )}
        role="radiogroup"
        aria-label="Theme color selector"
      >
        {/* Smooth Sliding Active Ring Capsule */}
        <span
          className="absolute top-1 left-1 w-3.5 h-3.5 rounded-full ring-2 ring-green ring-offset-2 ring-offset-bg pointer-events-none transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0"
          style={{
            transform: `translateX(${activeIndex * 20}px)`,
          }}
        />

        {THEME_DOTS.map((item) => {
          const isActive = resolvedTheme === item.id;
          return (
            <button
              key={item.id}
              type="button"
              role="radio"
              aria-checked={isActive}
              title={item.name}
              onPointerDown={(e) => handleActivate(item.id, e)}
              onClick={(e) => handleActivate(item.id, e)}
              className={cn(
                "w-3.5 h-3.5 rounded-full transition-all duration-300 relative focus:outline-none z-10 cursor-pointer",
                item.dotColor,
                "border",
                item.borderColor,
                isActive ? "opacity-100 scale-105" : "opacity-60 hover:opacity-100 hover:scale-105"
              )}
            >
              <span className="sr-only">{item.name}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}
