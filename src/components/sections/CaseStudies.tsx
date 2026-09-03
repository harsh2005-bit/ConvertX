"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CASE_STUDY_PLACEHOLDERS } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { BackgroundDecoration } from "@/components/animations/BackgroundDecoration";
import { ArrowUpRight, Clock, Sparkles } from "lucide-react";

export const CaseStudies: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="work" className="py-20 sm:py-28 bg-[var(--color-bg)] relative border-t border-[var(--color-border)] overflow-hidden">
      <BackgroundDecoration variant="section" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <ScrollReveal direction="up" delay={0.05}>
              <Badge variant="orange">Selected Work</Badge>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.12}>
              <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-[var(--color-fg)] tracking-tight">
                Future <span className="text-gradient-orange">Growth Stories</span>
              </h2>
            </ScrollReveal>
          </div>
          
          <ScrollReveal direction="up" delay={0.18}>
            <div className="p-4 sm:p-5 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] max-w-md shadow-sm backdrop-blur-md">
              <div className="flex items-center gap-2 text-xs font-semibold text-[var(--color-brand)] mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Your Partner in Scale</span>
              </div>
              <p className="text-xs text-[var(--color-fg-muted)] leading-relaxed">
                We position your brand with complete transparency. Your next growth milestone could be featured right here.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* 3 Placeholder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {CASE_STUDY_PLACEHOLDERS.map((cs, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <motion.div
                key={cs.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="rounded-2xl sm:rounded-3xl bg-[var(--color-bg-card)] border border-[var(--color-border)] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group transition-all duration-300"
                style={{
                  boxShadow: isHovered
                    ? "var(--shadow-card-hover), 0 0 24px -6px var(--color-brand-glow)"
                    : "var(--shadow-card)",
                  borderColor: isHovered ? "var(--color-brand)" : undefined,
                  transform: isHovered ? "translateY(-5px)" : undefined,
                }}
              >
                {/* Ambient corner glow */}
                <div
                  className="absolute -top-10 -right-10 w-28 h-28 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ backgroundColor: "var(--color-brand-subtle)" }}
                />

                <div className="relative z-10">
                  {/* Subtle top indicator */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-[var(--color-brand)] uppercase tracking-wider">
                      {cs.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full bg-[var(--color-bg-card-elevated)] border border-[var(--color-border)] text-[var(--color-fg-muted)] font-medium">
                      <Clock className="w-3 h-3 text-[var(--color-brand)]" />
                      {cs.status}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-fg)] mb-3 group-hover:text-[var(--color-brand)] transition-colors duration-200">
                    {cs.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--color-fg-muted)] leading-relaxed mb-6">
                    {cs.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-8">
                    {cs.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-[var(--color-bg-card-elevated)] text-[11px] font-medium text-[var(--color-fg-muted)] border border-[var(--color-border)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="relative z-10 pt-5 border-t border-[var(--color-border)] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[var(--color-fg-muted)]">
                    Your Next Growth Story
                  </span>
                  <a
                    href="#contact"
                    className="w-8 h-8 rounded-full bg-[var(--color-bg-card-elevated)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-brand)] group-hover:bg-[var(--color-brand)] group-hover:text-white transition-all duration-300 group-hover:scale-110"
                    aria-label="Become a case study"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Callout Footer Box */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="mt-12 text-center">
            <Button href="#contact" variant="primary" size="lg" showArrow>
              Become Our Next Success Story
            </Button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

