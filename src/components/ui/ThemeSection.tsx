import React from "react";
import { cn } from "@/lib/utils";

interface ThemeSectionProps extends React.HTMLAttributes<HTMLElement> {
  alt?: boolean;
  children: React.ReactNode;
}

export const ThemeSection: React.FC<ThemeSectionProps> = ({
  alt = false,
  className,
  children,
  ...props
}) => {
  return (
    <section
      className={cn(alt ? "theme-section-alt" : "theme-section", "theme-surface relative", className)}
      {...props}
    >
      {children}
    </section>
  );
};
