"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import React, { useEffect } from "react";

function ThemeReadyFlag() {
  useEffect(() => {
    document.documentElement.classList.add("theme-ready");
  }, []);
  return null;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
      storageKey="convertx-theme"
    >
      <ThemeReadyFlag />
      {children}
    </NextThemesProvider>
  );
}
