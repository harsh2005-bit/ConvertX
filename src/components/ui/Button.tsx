"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  showArrow?: boolean;
  className?: string;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  showArrow = false,
  className = "",
  href,
  onClick,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] transition-all duration-300";

  const variants = {
    primary:
      "bg-[var(--color-brand)] hover:bg-[var(--color-brand-hover)] text-white shadow-[var(--shadow-cta)] hover:shadow-[0_8px_32px_-6px_rgba(255,106,0,0.45)] hover:-translate-y-0.5 active:translate-y-0",
    secondary:
      "bg-[var(--color-bg-card)] text-[var(--color-fg)] border border-[var(--color-border)] hover:border-[var(--color-brand)] hover:-translate-y-0.5 active:translate-y-0 dark:bg-transparent",
    outline:
      "bg-transparent text-[var(--color-fg)] border border-[var(--color-brand)]/50 hover:border-[var(--color-brand)] hover:bg-[var(--color-brand-subtle)] hover:-translate-y-0.5",
    ghost:
      "bg-transparent text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] hover:bg-[var(--color-bg-subtle)]",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2.5 font-semibold",
  };

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={cn(baseStyles, variants[variant], sizes[size], className)}>
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {content}
    </button>
  );
};

export const ThemeButton = Button;
