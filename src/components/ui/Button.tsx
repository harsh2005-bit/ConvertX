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
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none group";

  const variants = {
    primary:
      "bg-[#FF5500] hover:bg-[#FF6600] text-white shadow-lg shadow-[#FF5500]/25 hover:shadow-[#FF5500]/40 hover:-translate-y-0.5 active:translate-y-0",
    secondary:
      "bg-[#12131A] hover:bg-[#1A1C26] text-white border border-white/10 hover:border-[#FF5500]/40 hover:-translate-y-0.5 active:translate-y-0",
    outline:
      "bg-transparent text-white border border-[#FF5500]/50 hover:border-[#FF5500] hover:bg-[#FF5500]/10 hover:-translate-y-0.5",
    ghost:
      "bg-transparent text-slate-300 hover:text-white hover:bg-white/5",
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
      <a
        href={href}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
      >
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
