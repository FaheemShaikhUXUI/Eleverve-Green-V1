"use client";

import React, { createContext, useContext, useEffect } from "react";
import { ThemeMode } from "@/lib/theme";

interface ThemeContextType {
  theme: ThemeMode;
  resolvedTheme: "ivory" | "black" | "navy";
  setTheme: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "ivory",
  resolvedTheme: "ivory",
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    try {
      localStorage.removeItem("eleverve_theme_preference");
    } catch {}
    document.body.dataset.theme = "ivory";
    document.documentElement.classList.remove("dark");
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme: "ivory",
        resolvedTheme: "ivory",
        setTheme: () => {},
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
