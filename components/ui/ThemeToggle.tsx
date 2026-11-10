"use client";

import { useTheme } from "@/lib/theme-context";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, mounted, toggleTheme } = useTheme();
  const label = mounted ? `Switch to ${theme === "light" ? "dark" : "light"} mode` : "Toggle color theme";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "p-2 rounded-lg transition-colors duration-200",
        "hover:bg-stone/10 dark:hover:bg-warm-white/10",
        "text-off-black dark:text-warm-white",
        className
      )}
      aria-label={label}
    >
      {/* Until mounted the real theme is unknown: keep the button's size, show no icon. */}
      {!mounted ? (
        <span className="block w-5 h-5" aria-hidden="true" />
      ) : theme === "light" ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5" />
      )}
    </button>
  );
}
