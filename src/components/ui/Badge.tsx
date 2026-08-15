"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "orange" | "dark" | "outline";
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "orange",
  className = "",
  icon,
}) => {
  const baseStyles =
    "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase";

  const variants = {
    orange:
      "bg-[#FF5500]/10 text-[#FF5500] border border-[#FF5500]/30 shadow-[0_0_15px_rgba(255,85,0,0.15)]",
    dark: "bg-[#14161F] text-slate-300 border border-white/10",
    outline: "bg-transparent text-slate-400 border border-white/15",
  };

  return (
    <span className={cn(baseStyles, variants[variant], className)}>
      {icon && <span className="w-3.5 h-3.5">{icon}</span>}
      {children}
    </span>
  );
};
