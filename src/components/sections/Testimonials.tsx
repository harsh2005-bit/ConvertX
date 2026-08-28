"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Quote, MessageSquareHeart } from "lucide-react";

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[var(--color-bg)] relative border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="orange">Transparent Partnerships</Badge>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-[var(--color-fg)] tracking-tight">
            Let The <span className="text-gradient-orange">Results Speak.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--color-fg-muted)]">
            We partner with businesses focused on real growth outcomes. Verified client reviews will be published directly here.
          </p>
        </div>

        {/* 3 Placeholder Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((num) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: num * 0.1 }}
              className="p-8 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] flex flex-col justify-between relative overflow-hidden group hover:border-[var(--color-brand)]/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <Quote className="w-8 h-8 text-[var(--color-brand)]/40 group-hover:text-[var(--color-brand)] transition-colors" />
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[var(--color-bg-card-elevated)] text-[var(--color-fg-muted)] border border-[var(--color-border)]">
                  Readiness Slot {num}
                </span>
              </div>

              <div className="my-6 py-6 border-y border-[var(--color-border)] text-center">
                <p className="text-sm italic text-[var(--color-fg-muted)]">
                  &ldquo;Client testimonial will appear here.&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-bg-card-elevated)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-fg-muted)]">
                  <MessageSquareHeart className="w-5 h-5 text-[var(--color-brand)]" />
                </div>
                <div>
                  <span className="text-sm font-bold text-[var(--color-fg)] block">Future Client Partner</span>
                  <span className="text-xs text-[var(--color-fg-subtle)] block">Growth Account</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
