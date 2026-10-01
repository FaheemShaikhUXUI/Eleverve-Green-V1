import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  height?: number | string;
  asLink?: boolean;
  inkColor?: string;
}

export function Logo({ className, height = 34, asLink = true, inkColor }: LogoProps) {
  const svgContent = (
    <svg
      className={cn("w-auto inline-block transition-colors duration-300", className)}
      style={{ height }}
      viewBox="0 0 2520.65 265.14"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="Eleverve Green official brand logo"
    >
      <g id="Eleverve_Green_Logo_Vector">
        {/* 'Green' Section: Stylized 'G' Crest Path + 'reen' text — strictly locked to original brand green #00874e for all themes */}
        <g>
          <text
            x="1779.55"
            y="262.54"
            fontFamily="var(--font-poppins), 'Poppins Bold', sans-serif"
            fontWeight="bold"
            fontSize="325.47px"
            fill="#00874e"
          >
            reen
          </text>
          <path
            fill="#00874e"
            d="M1575.15 115.46c-0.61,-22.14 16.85,-46.21 35.26,-57.33 6.99,-4.21 12.59,-5.03 19.51,-8.15 11.86,-1.81 22.03,-1.82 34.4,-1.76l25.46 0.02 32.23 0.01 45.91 0.03 -0.01 -48.29 -65.62 0.02 -28.05 0 -19.87 -0.01c-35.46,-0.04 -57.38,7.36 -80.08,24.21 -37.04,27.52 -48.09,63.04 -48.05,107.44l0.01 51.32 -0.02 37.9 0 44.21 109.87 -0.04c23.24,0.65 42.78,-2.13 61.53,-10.78 53.65,-24.73 70.24,-67.93 70.29,-125.35l0 -54.45c-35.15,-0.11 -70.08,0.05 -104.99,0.05 -19.91,0 -28.94,-1.25 -43.54,9.1 -9.08,6.42 -17.03,17.35 -18.63,34.48l-0.01 40.06 -0.04 23.07c40.55,-0.77 25.74,-72.21 82.63,-72.21 -49.96,13 -28.81,82.29 -66.97,82.87 57.03,2.54 88.26,-54.38 88.07,-82.87l16.65 0c-1.53,32.98 -0.27,67.21 -27.9,91.3 -7.3,6.36 -25.23,16.35 -39.36,15.76l-79.12 0.42c-0.08,-33.13 1,-67.99 0.42,-101.06z"
          />
        </g>

        {/* 'Eleverve' Section: Stylized 'E' Monogram Path + 'leverve' text */}
        <g>
          <text
            x="258.72"
            y="262.54"
            fontFamily="var(--font-poppins), 'Poppins Bold', sans-serif"
            fontWeight="bold"
            fontSize="325.46px"
            fill={inkColor || "var(--logoInk)"}
          >
            leverve
          </text>
          <path
            fill={inkColor || "var(--logoInk)"}
            d="M121.71 21.71c67.23,0 121.72,54.49 121.72,121.72l-0.01 1.03 -0.47 0 0.26 0.25 -34.67 -0.25 -9.66 0 0 -0.07 -50.75 -0.37 25.95 25.54 -125.74 -2.16c10.08,30.89 39.12,53.21 73.38,53.21 23.41,0 44.39,-10.42 58.54,-26.88l52.33 0c-19.14,42.12 -61.58,71.42 -110.87,71.42 -67.22,0 -121.71,-54.49 -121.71,-121.71 0,-67.23 54.49,-121.72 121.71,-121.72zm74.02 99.81c-9.45,-31.95 -39,-55.27 -74.02,-55.27 -42.62,0 -77.18,34.55 -77.18,77.18 0,7.8 1.16,15.33 3.31,22.43l68.55 -11.89 -26.77 -32.39 106.1 -0.06z"
          />
        </g>
      </g>
    </svg>
  );

  if (asLink) {
    return (
      <Link
        href="/"
        className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 rounded"
        aria-label="Eleverve Green homepage"
      >
        {svgContent}
      </Link>
    );
  }

  return svgContent;
}
