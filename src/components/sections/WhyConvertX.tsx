"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { WHY_CONVERTX } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { BackgroundDecoration } from "@/components/animations/BackgroundDecoration";
import {
  Compass,
  Zap,
  Code,
  BarChart3,
  TrendingUp,
  Layers
} from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  Code: <Code className="w-5 h-5" />,
  BarChart3: <BarChart3 className="w-5 h-5" />,
  TrendingUp: <TrendingUp className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
};

export const WhyConvertX: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="why-convertx"
      className="py-20 sm:py-28 relative overflow-hidden"
      style={{
        backgroundColor: "var(--color-bg-subtle)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <BackgroundDecoration variant="section" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <ScrollReveal direction="up" delay={0.05}>
            <Badge variant="orange">Differentiators</Badge>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.12}>
            <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight" style={{ color: "var(--color-fg)" }}>
              Not Just Another <span className="text-gradient-orange">Marketing Agency.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.18}>
            <p className="mt-4 text-sm sm:text-lg leading-relaxed" style={{ color: "var(--color-fg-muted)" }}>
              We don&apos;t just launch ad campaigns — we engineer the complete acquisition and technology architecture around your business outcomes.
            </p>
          </ScrollReveal>
        </div>

        {/* 6 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {WHY_CONVERTX.map((item, idx) => {
            const isHovered = hoveredIndex === idx;
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl transition-all duration-300 group relative overflow-hidden"
                style={{
                  backgroundColor: "var(--color-bg-card)",
                  border: isHovered ? "1px solid var(--color-brand)" : "1px solid var(--color-border)",
                  boxShadow: isHovered
                    ? "var(--shadow-card-hover), 0 0 24px -6px var(--color-brand-glow)"
                    : "var(--shadow-card)",
                  transform: isHovered ? "translateY(-5px)" : undefined,
                }}
              >
                {/* Ambient corner glow */}
                <div
                  className="absolute -top-10 -right-10 w-28 h-28 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ backgroundColor: "var(--color-brand-subtle)" }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-xl text-[--color-brand] flex items-center justify-center group-hover:scale-110 group-hover:bg-[--color-brand] group-hover:text-white transition-all duration-300"
                      style={{
                        backgroundColor: "var(--color-brand-subtle)",
                        border: "1px solid var(--color-border)",
                      }}
                    >
                      {ICON_MAP[item.icon]}
                    </div>
                    <span className="text-sm font-bold font-mono" style={{ color: "var(--color-fg-subtle)" }}>
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-[--color-brand] transition-colors duration-200" style={{ color: "var(--color-fg)" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-fg-muted)" }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

