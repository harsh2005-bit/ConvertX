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
        "relative rounded-2xl bg-[#0D0E12]/80 border border-white/10 p-6 backdrop-blur-md overflow-hidden transition-all duration-300",
        hoverEffect && "hover:border-[#FF5500]/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FF5500]/10",
        glow && "border-[#FF5500]/30 shadow-lg shadow-[#FF5500]/15",
        className
      )}
    >
      {/* Top subtle light accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      {children}
    </div>
  );
};
