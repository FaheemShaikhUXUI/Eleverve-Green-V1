import type { Config } from "tailwindcss";

function withOpacity(variableName: string): any {
  return ({ opacityValue }: { opacityValue?: string }) => {
    if (opacityValue !== undefined) {
      return `color-mix(in srgb, var(${variableName}) calc(${opacityValue} * 100%), transparent)`;
    }
    return `var(${variableName})`;
  };
}

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: withOpacity("--bg"),
        "bg-2": withOpacity("--bg2"),
        "bg-3": withOpacity("--bg3"),
        panel: withOpacity("--panel"),
        "panel-2": withOpacity("--panel2"),
        ink: withOpacity("--ink"),
        soft: withOpacity("--soft"),
        faint: withOpacity("--faint"),
        line: withOpacity("--line"),
        green: {
          DEFAULT: withOpacity("--green"),
          glow: withOpacity("--green2"),
        },
        amber: withOpacity("--amber"),
        blue: withOpacity("--blue"),
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-poppins)", "sans-serif"],
        mono: ["var(--font-poppins)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 30px -5px var(--green)",
        subtle: "0 20px 50px var(--shadow)",
        card: "0 10px 30px -10px var(--shadow)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "flow-line": "flow 3s linear infinite",
      },
      keyframes: {
        flow: {
          "0%": { strokeDashoffset: "100" },
          "100%": { strokeDashoffset: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
