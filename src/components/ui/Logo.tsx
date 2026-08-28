import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  height?: number;
}

/** Theme-aware wordmark: dark/white type + consistent orange X. */
export const Logo: React.FC<LogoProps> = ({ className, height = 36 }) => {
  return (
    <svg
      role="img"
      aria-label="ConvertX"
      viewBox="0 0 210 40"
      height={height}
      className={cn("w-auto", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="0"
        y="29"
        fill="currentColor"
        fontFamily="var(--font-sans), system-ui, sans-serif"
        fontWeight="800"
        fontSize="28"
        letterSpacing="-0.04em"
      >
        Convert
      </text>
      <text
        x="128"
        y="29"
        fill="#FF6A00"
        fontFamily="var(--font-sans), system-ui, sans-serif"
        fontWeight="800"
        fontSize="28"
        letterSpacing="-0.04em"
      >
        X
      </text>
    </svg>
  );
};
