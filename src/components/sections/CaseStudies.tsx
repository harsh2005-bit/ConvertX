"use client";

import React from "react";
import { motion } from "framer-motion";
import { CASE_STUDY_PLACEHOLDERS } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, Clock, Sparkles } from "lucide-react";

export const CaseStudies: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-[var(--color-bg)] relative border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <Badge variant="orange">Selected Work</Badge>
            <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-[var(--color-fg)] tracking-tight">
              Future <span className="text-gradient-orange">Growth Stories</span>
            </h2>
          </div>
          
          <div className="p-4 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] max-w-md">
            <div className="flex items-center gap-2 text-xs font-semibold text-[var(--color-brand)] mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Your Partner in Scale</span>
            </div>
            <p className="text-xs text-[var(--color-fg-muted)]">
              We position your brand with complete transparency. Your next growth milestone could be featured right here.
            </p>
          </div>
        </div>

        {/* 3 Placeholder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CASE_STUDY_PLACEHOLDERS.map((cs, idx) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[var(--color-brand)]/40 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Subtle top indicator */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold text-[var(--color-brand)] uppercase tracking-wider">
                  {cs.category}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full bg-[var(--color-bg-card-elevated)] border border-[var(--color-border)] text-[var(--color-fg-muted)] font-medium">
                  <Clock className="w-3 h-3 text-[var(--color-brand)]" />
                  {cs.status}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[var(--color-fg)] mb-3 group-hover:text-[var(--color-brand)] transition-colors">
                  {cs.title}
                </h3>
                <p className="text-sm text-[var(--color-fg-muted)] leading-relaxed mb-6">
                  {cs.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {cs.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-[var(--color-bg-card-elevated)] text-[11px] font-medium text-[var(--color-fg-muted)] border border-[var(--color-border)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-[var(--color-border)] flex items-center justify-between">
                <span className="text-xs font-semibold text-[var(--color-fg-muted)]">
                  Your Next Growth Story
                </span>
                <a
                  href="#contact"
                  className="w-8 h-8 rounded-full bg-[var(--color-bg-card-elevated)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-brand)] group-hover:bg-[var(--color-brand)] group-hover:text-[var(--color-fg)] transition-all"
                  aria-label="Become a case study"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Callout Footer Box */}
        <div className="mt-12 text-center">
          <Button href="#contact" variant="primary" size="lg" showArrow>
            Become Our Next Success Story
          </Button>
        </div>

      </div>
    </section>
  );
};
