"use client";

import React from "react";

interface BackgroundDecorationProps {
  variant?: "hero" | "partner" | "section" | "glow-top";
  className?: string;
}

export const BackgroundDecoration: React.FC<BackgroundDecorationProps> = ({
  variant = "section",
  className = "",
}) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
      aria-hidden="true"
    >
      {/* Subtle radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] rounded-full blur-[140px] opacity-30 dark:opacity-20 pointer-events-none"
        style={{ backgroundColor: "var(--color-brand)" }}
      />

      {/* Tiny geometric ConvertX 'X' accent motif */}
      <svg
        className="absolute top-8 right-8 w-20 h-20 text-[var(--color-brand)] opacity-[0.04] dark:opacity-[0.06]"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <line x1="20" y1="20" x2="80" y2="80" />
        <line x1="80" y1="20" x2="20" y2="80" />
        <circle cx="50" cy="50" r="4" fill="currentColor" />
      </svg>

      {/* Second geometric X accent motif */}
      <svg
        className="absolute bottom-8 left-8 w-16 h-16 text-[var(--color-brand)] opacity-[0.03] dark:opacity-[0.05]"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <line x1="25" y1="25" x2="75" y2="75" strokeDasharray="4 4" />
        <line x1="75" y1="25" x2="25" y2="75" strokeDasharray="4 4" />
      </svg>

      {/* Small subtle tech plus markers */}
      <div className="absolute top-12 left-1/4 text-[10px] font-mono text-[var(--color-brand)] opacity-[0.15]">
        +
      </div>
      <div className="absolute bottom-12 right-1/4 text-[10px] font-mono text-[var(--color-brand)] opacity-[0.15]">
        +
      </div>

      {variant === "hero" && (
        <div
          className="absolute -top-40 right-1/4 w-[600px] h-[600px] rounded-full blur-[160px] opacity-25 dark:opacity-40"
          style={{ backgroundColor: "var(--color-brand)" }}
        />
      )}
    </div>
  );
};
