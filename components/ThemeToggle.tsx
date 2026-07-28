"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={!isDark}
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-navy-700 text-steel-300 transition-colors hover:border-brand-blue hover:text-brand-blue-light"
    >
      {isDark ? (
        <Sun className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
      ) : (
        <Moon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
      )}
    </button>
  );
}
