"use client";

import React from "react";
import { PartnerPlatform } from "@/lib/partners-data";

interface PartnerLogoProps {
  partner: PartnerPlatform;
  ariaHidden?: boolean;
}

export const PartnerLogo: React.FC<PartnerLogoProps> = ({ partner, ariaHidden = false }) => {
  return (
    <div
      aria-hidden={ariaHidden}
      className="group relative flex items-center gap-3 px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl transition-all duration-300 select-none shrink-0"
      style={{
        backgroundColor: "var(--color-bg-card)",
        border: "1px solid var(--color-border)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      {/* Subtle hover gradient background */}
      <div
        className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(255, 106, 0, 0.08) 0%, rgba(255, 106, 0, 0.02) 100%)",
        }}
      />

      {/* SVG Icon Container */}
      <div
        className="relative z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center transition-all duration-300 shrink-0 text-[var(--color-fg-muted)] group-hover:text-[var(--color-fg)] group-hover:scale-105 group-hover:rotate-1"
        style={{
          backgroundColor: "var(--color-bg-card-elevated)",
          border: "1px solid var(--color-border)",
        }}
      >
        <span
          className="transition-colors duration-300"
          style={{
            color: "currentColor",
          }}
        >
          {partner.svgIcon}
        </span>
      </div>

      {/* Name and Tagline */}
      <div className="relative z-10 flex flex-col min-w-0 pr-1">
        <span
          className="text-xs sm:text-sm font-bold tracking-tight transition-colors duration-300 group-hover:text-[--color-brand] truncate"
          style={{ color: "var(--color-fg)" }}
        >
          {partner.name}
        </span>
        <span
          className="text-[10px] sm:text-[11px] font-medium tracking-wide transition-colors duration-300 truncate"
          style={{ color: "var(--color-fg-subtle)" }}
        >
          {partner.category}
        </span>
      </div>

      {/* Subtle bottom active pill indicator on hover */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] rounded-full group-hover:w-8 transition-all duration-300 pointer-events-none"
        style={{ backgroundColor: "var(--color-brand)" }}
      />
    </div>
  );
};
