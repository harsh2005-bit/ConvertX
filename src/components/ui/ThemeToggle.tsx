"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  compact?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ compact = false }) => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={cn(
          "rounded-full border border-[var(--color-border)] bg-[var(--color-bg-card)] animate-pulse",
          compact ? "h-9 w-9" : "h-9 w-[148px]"
        )}
        aria-hidden
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  if (compact) {
    return (
      <button
        type="button"
        onClick={() => setTheme(isDark ? "light" : "dark")}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-fg-muted)] transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
      >
        <Sun
          className={cn(
            "absolute h-4 w-4 text-[var(--color-brand)] transition-all duration-300",
            isDark ? "scale-50 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
          )}
        />
        <Moon
          className={cn(
            "absolute h-4 w-4 transition-all duration-300",
            isDark ? "scale-100 rotate-0 opacity-100" : "scale-50 -rotate-90 opacity-0"
          )}
        />
      </button>
    );
  }

  return (
    <div
      role="group"
      aria-label="Color theme"
      className="relative inline-flex h-9 items-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg-subtle)] p-0.5"
    >
      <span
        aria-hidden
        className={cn(
          "absolute top-0.5 h-8 w-[70px] rounded-full bg-[var(--color-brand)] shadow-sm transition-transform duration-300 ease-out",
          isDark ? "translate-x-[70px]" : "translate-x-0"
        )}
      />
      <button
        type="button"
        onClick={() => setTheme("light")}
        aria-label="Switch to light mode"
        aria-pressed={!isDark}
        className={cn(
          "relative z-10 inline-flex h-8 w-[70px] items-center justify-center gap-1.5 rounded-full text-[11px] font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand)]",
          isDark ? "text-[var(--color-fg-muted)]" : "text-white"
        )}
      >
        <Sun className="h-3.5 w-3.5" />
        Light
      </button>
      <button
        type="button"
        onClick={() => setTheme("dark")}
        aria-label="Switch to dark mode"
        aria-pressed={isDark}
        className={cn(
          "relative z-10 inline-flex h-8 w-[70px] items-center justify-center gap-1.5 rounded-full text-[11px] font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand)]",
          isDark ? "text-white" : "text-[var(--color-fg-muted)]"
        )}
      >
        <Moon className="h-3.5 w-3.5" />
        Dark
      </button>
    </div>
  );
};
