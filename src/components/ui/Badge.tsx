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
      "bg-[var(--color-brand-subtle)] text-[var(--color-brand)] border border-[var(--color-brand)]/30",
    dark: "bg-[var(--color-bg-card-elevated)] text-[var(--color-fg-muted)] border border-[var(--color-border)]",
    outline:
      "bg-transparent text-[var(--color-fg-muted)] border border-[var(--color-border)]",
  };

  return (
    <span className={cn(baseStyles, variants[variant], className)}>
      {icon && <span className="w-3.5 h-3.5">{icon}</span>}
      {children}
    </span>
  );
};
