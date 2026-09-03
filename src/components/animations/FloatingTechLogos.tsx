"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface FloatingLogoItem {
  id: string;
  name: string;
  category: string;
  color: string;
  // Positioning classes relative to the hero/dashboard center container
  positionClass: string;
  // Responsive visibility
  visibilityClass: string;
  // Individual animation configuration
  floatAnimate: {
    x?: number[];
    y?: number[];
    rotate?: number[];
    scale?: number[];
  };
  duration: number;
  delay: number;
  entryDelay: number;
  parallaxDepth: number; // 4 to 8 for near, 2 to 4 for far
  isOrbital?: boolean;
  svgIcon: React.ReactNode;
}

const FLOATING_LOGOS: FloatingLogoItem[] = [
  {
    id: "meta",
    name: "Meta Ads",
    category: "Conversion API",
    color: "#0668E1",
    positionClass: "top-[-26px] left-[15%] sm:left-[22%]",
    visibilityClass: "flex",
    floatAnimate: {
      y: [-10, 10, -10],
      rotate: [-1, 1, -1],
    },
    duration: 5,
    delay: 0,
    entryDelay: 0.3,
    parallaxDepth: 7,
    svgIcon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#0668E1]" aria-hidden="true">
        <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
      </svg>
    ),
  },
  {
    id: "whatsapp",
    name: "WhatsApp API",
    category: "Instant Lead Bot",
    color: "#25D366",
    positionClass: "top-[25%] -left-[14px] sm:-left-[36px]",
    visibilityClass: "flex",
    floatAnimate: {
      y: [10, -8, 10],
      x: [-4, 4, -4],
      rotate: [1, -1, 1],
    },
    duration: 6,
    delay: 1,
    entryDelay: 0.5,
    parallaxDepth: 8,
    isOrbital: true,
    svgIcon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#25D366]" aria-hidden="true">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.182 8.182 0 0 1 2.41 5.83c.01 4.54-3.68 8.23-8.22 8.23z" />
      </svg>
    ),
  },
  {
    id: "instagram",
    name: "Instagram Ads",
    category: "Reels Funnel",
    color: "#E1306C",
    positionClass: "top-[28%] -right-[12px] sm:-right-[34px]",
    visibilityClass: "flex",
    floatAnimate: {
      y: [-7, 9, -7],
      rotate: [1, -1, 1],
    },
    duration: 5.5,
    delay: 0.7,
    entryDelay: 0.7,
    parallaxDepth: 6,
    svgIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#E1306C]" aria-hidden="true">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
      </svg>
    ),
  },
  {
    id: "zaptick",
    name: "Zaptick",
    category: "Cloud Automation",
    color: "#FF6A00",
    positionClass: "bottom-[8%] -left-[10px] sm:-left-[28px]",
    visibilityClass: "hidden sm:flex",
    floatAnimate: {
      x: [-6, 6, -6],
      y: [6, -6, 6],
    },
    duration: 7,
    delay: 1.5,
    entryDelay: 0.9,
    parallaxDepth: 5,
    isOrbital: true,
    svgIcon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#FF6A00]" aria-hidden="true">
        <path d="M11.5 5L7 13h4l-1 6 6.5-9H12.5l1-5z" />
      </svg>
    ),
  },
  {
    id: "wati",
    name: "WATI",
    category: "CRM & Routing",
    color: "#00D26A",
    positionClass: "bottom-[6%] -right-[10px] sm:-right-[26px]",
    visibilityClass: "hidden sm:flex",
    floatAnimate: {
      y: [-8, 8, -8],
      rotate: [-1, 1, -1],
    },
    duration: 6.5,
    delay: 2,
    entryDelay: 1.1,
    parallaxDepth: 6,
    svgIcon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[#00D26A]" aria-hidden="true">
        <rect width="18" height="18" x="3" y="3" rx="4" fill="currentColor" fillOpacity="0.2" />
        <path d="M6 9l3 6 3-4 3 4 3-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "aisensy",
    name: "AiSensy",
    category: "Smart Broadcast",
    color: "#0066FF",
    positionClass: "top-[30px] right-[40%] sm:right-[8%]",
    visibilityClass: "hidden md:flex",
    floatAnimate: {
      x: [5, -5, 5],
      y: [-6, 6, -6],
    },
    duration: 5.8,
    delay: 0.5,
    entryDelay: 0.6,
    parallaxDepth: 4,
    svgIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[#0066FF]" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <circle cx="9" cy="11" r="1.5" fill="currentColor" />
        <circle cx="15" cy="11" r="1.5" fill="currentColor" />
        <path d="M9 15c1 1 2 1.5 3 1.5s2-.5 3-1.5" stroke="#FF6A00" />
      </svg>
    ),
  },
  {
    id: "interakt",
    name: "Interakt",
    category: "Commerce Bot",
    color: "#6C5CE7",
    positionClass: "bottom-[-22px] left-[32%] sm:left-[38%]",
    visibilityClass: "hidden md:flex",
    floatAnimate: {
      y: [8, -8, 8],
      scale: [1, 1.03, 1],
    },
    duration: 7,
    delay: 2.5,
    entryDelay: 0.8,
    parallaxDepth: 5,
    svgIcon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[#6C5CE7]" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
        <path d="M9 12h6M12 9l3 3-3 3" stroke="#FF6A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

interface FloatingTechLogosProps {
  mousePos: { x: number; y: number };
}

export const FloatingTechLogos: React.FC<FloatingTechLogosProps> = ({ mousePos }) => {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="absolute inset-0 pointer-events-none z-20 overflow-visible" aria-hidden="true">
      {/* Subtle background curved orbital paths connecting ecosystem */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none select-none opacity-40 dark:opacity-25"
        viewBox="0 0 600 500"
        fill="none"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="orbit-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6A00" stopOpacity="0.35" />
            <stop offset="50%" stopColor="var(--color-border)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#FF6A00" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="orbit-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--color-border)" stopOpacity="0.3" />
            <stop offset="60%" stopColor="#FF6A00" stopOpacity="0.25" />
            <stop offset="100%" stopColor="var(--color-border)" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Outer subtle orbital ellipse */}
        <ellipse
          cx="300"
          cy="250"
          rx="270"
          ry="210"
          stroke="url(#orbit-grad-1)"
          strokeWidth="1"
          strokeDasharray="4 6"
        />

        {/* Inner subtle orbital wave */}
        <path
          d="M 50,150 Q 300,50 550,220 T 250,450"
          stroke="url(#orbit-grad-2)"
          strokeWidth="1"
          strokeDasharray="2 4"
        />
      </svg>

      {/* Floating Logo Cards */}
      {FLOATING_LOGOS.map((item) => {
        const isHovered = hoveredId === item.id;
        // Parallax offset calculation based on depth
        const parallaxX = shouldReduceMotion ? 0 : mousePos.x * (item.parallaxDepth * 0.15);
        const parallaxY = shouldReduceMotion ? 0 : mousePos.y * (item.parallaxDepth * 0.15);

        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.85, y: 12 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: item.entryDelay,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`absolute ${item.positionClass} ${item.visibilityClass} pointer-events-auto select-none`}
            style={{
              transform: `translate3d(${parallaxX}px, ${parallaxY}px, 0)`,
              transition: "transform 0.15s ease-out",
            }}
          >
            <motion.div
              animate={
                shouldReduceMotion || isHovered
                  ? { x: 0, y: 0, rotate: 0, scale: isHovered ? 1.06 : 1 }
                  : {
                      x: item.floatAnimate.x || 0,
                      y: item.floatAnimate.y || 0,
                      rotate: item.floatAnimate.rotate || 0,
                      scale: item.floatAnimate.scale || 1,
                    }
              }
              transition={
                isHovered
                  ? { duration: 0.25, ease: "easeOut" }
                  : {
                      duration: item.duration,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                      delay: item.delay,
                    }
              }
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group flex items-center gap-2 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl backdrop-blur-md cursor-pointer transition-all duration-300"
              style={{
                backgroundColor: "color-mix(in srgb, var(--color-bg-card) 92%, transparent)",
                border: isHovered
                  ? "1px solid var(--color-brand)"
                  : "1px solid var(--color-border)",
                boxShadow: isHovered
                  ? "0 12px 28px -6px rgba(0, 0, 0, 0.35), 0 0 16px -2px var(--color-brand-glow)"
                  : "0 4px 16px -2px rgba(0, 0, 0, 0.12), 0 0 10px -4px var(--color-brand-glow)",
              }}
            >
              {/* Icon Container with subtle background badge */}
              <div
                className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: "var(--color-bg-card-elevated)",
                  border: "1px solid var(--color-border)",
                }}
              >
                {item.svgIcon}
              </div>

              {/* Text Label */}
              <div className="flex flex-col pr-1">
                <span
                  className="text-[10px] sm:text-[11px] font-bold tracking-tight leading-none group-hover:text-[--color-brand] transition-colors"
                  style={{ color: "var(--color-fg)" }}
                >
                  {item.name}
                </span>
                <span
                  className="text-[8px] sm:text-[9px] font-medium leading-tight mt-0.5 transition-colors"
                  style={{ color: "var(--color-fg-subtle)" }}
                >
                  {item.category}
                </span>
              </div>

              {/* Tiny active green or orange pulse dot */}
              <div
                className="w-1.5 h-1.5 rounded-full shrink-0 group-hover:scale-125 transition-transform"
                style={{ backgroundColor: item.color }}
              />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};
