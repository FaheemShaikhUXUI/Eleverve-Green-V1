"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { ThemeMode, THEME_STORAGE_KEY } from "@/lib/theme";

interface ThemeContextType {
  theme: ThemeMode;
  resolvedTheme: "ivory" | "black" | "navy";
  setTheme: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>("ivory");
  const [resolvedTheme, setResolvedTheme] = useState<"ivory" | "black" | "navy">("ivory");
  const [mounted, setMounted] = useState(false);

  // Initialize theme from storage
  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null;
      if (stored && ["ivory", "black", "navy", "system"].includes(stored)) {
        setThemeState(stored);
      }
    } catch {
      // Storage unavailable fallback
    }
  }, []);

  // Resolve system preference and apply to body
  useEffect(() => {
    function resolveAndApply() {
      let active: "ivory" | "black" | "navy" = "ivory";

      if (theme === "system") {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        active = prefersDark ? "navy" : "ivory";
      } else {
        active = theme;
      }

      setResolvedTheme(active);
      document.body.dataset.theme = active;
    }

    resolveAndApply();

    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = () => resolveAndApply();
      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
    }
  }, [theme]);

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    } catch {
      // Storage unavailable fallback
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {/* Script to prevent flash on initial load */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                var stored = localStorage.getItem("${THEME_STORAGE_KEY}");
                var theme = stored || "ivory";
                var active = theme;
                if (theme === "system") {
                  active = window.matchMedia("(prefers-color-scheme: dark)").matches ? "navy" : "ivory";
                }
                document.body.dataset.theme = active;
              } catch (e) {}
            })();
          `,
        }}
      />
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
