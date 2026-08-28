"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glow?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hoverEffect = true,
  glow = false,
}) => {
  return (
    <div
      className={cn(
        "theme-card relative rounded-2xl p-6 overflow-hidden",
        hoverEffect && "theme-card-hover",
        glow && "border-[var(--color-brand)]/30 orange-glow-sm",
        className
      )}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-brand)]/25 to-transparent" />
      {children}
    </div>
  );
};

export const ThemeCard = Card;
