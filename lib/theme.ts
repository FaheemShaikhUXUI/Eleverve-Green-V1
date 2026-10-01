export type ThemeMode = "ivory" | "black" | "navy" | "system";

export const THEMES: { id: ThemeMode; label: string; description: string }[] = [
  { id: "ivory", label: "White", description: "Full White BG with Light Green & Light Blue Cards" },
  { id: "black", label: "Black", description: "Pure Black & Logo Green with Sky Blue accents" },
  { id: "navy", label: "Navy", description: "Deep Navy Blue & Logo Green with Sky Blue infrastructure" },
  { id: "system", label: "Auto", description: "Synchronize with operating system preference" },
];

export const THEME_STORAGE_KEY = "eleverve_theme_preference";
