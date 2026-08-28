import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Semantic tokens — driven by CSS custom properties
        bg: "var(--color-bg)",
        "bg-subtle": "var(--color-bg-subtle)",
        "bg-card": "var(--color-bg-card)",
        "bg-card-elevated": "var(--color-bg-card-elevated)",
        fg: "var(--color-fg)",
        "fg-muted": "var(--color-fg-muted)",
        border: "var(--color-border)",
        brand: "var(--color-brand)",
        "brand-hover": "var(--color-brand-hover)",
        // Legacy keep
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};

export default config;
