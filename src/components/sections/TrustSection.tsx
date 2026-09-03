"use client";

import React from "react";
import { motion } from "framer-motion";
import { TRUST_PILLARS } from "@/lib/constants";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { BackgroundDecoration } from "@/components/animations/BackgroundDecoration";
import { Shield, CheckCircle2 } from "lucide-react";

export const TrustSection: React.FC = () => {
  return (
    <section
      className="py-20 sm:py-28 relative overflow-hidden"
      style={{
        backgroundColor: "var(--color-bg)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <BackgroundDecoration variant="section" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <ScrollReveal direction="up" delay={0.05}>
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4"
              style={{
                backgroundColor: "var(--color-brand-subtle)",
                border: "1px solid var(--color-border)",
                color: "var(--color-fg-muted)",
              }}
            >
              <Shield className="w-3.5 h-3.5 text-[--color-brand]" />
              <span>Honest & Outcome-Driven</span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.12}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight" style={{ color: "var(--color-fg)" }}>
              Built Around What <span className="text-gradient-orange">Actually Moves</span> the Business.
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.18}>
            <p className="mt-4 text-sm sm:text-lg leading-relaxed" style={{ color: "var(--color-fg-muted)" }}>
              No vanity metrics. No unnecessary complexity. Just systems designed around real business outcomes.
            </p>
          </ScrollReveal>
        </div>

        {/* 5 Pillars */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {TRUST_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 rounded-2xl sm:rounded-3xl transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
              style={{
                backgroundColor: "var(--color-bg-card)",
                border: "1px solid var(--color-border)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-[--color-brand] mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: "var(--color-brand-subtle)", border: "1px solid var(--color-border)" }}
              >
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold group-hover:text-[--color-brand] transition-colors" style={{ color: "var(--color-fg)" }}>
                {pillar.name}
              </h3>
              <p className="mt-2 text-xs leading-relaxed" style={{ color: "var(--color-fg-muted)" }}>
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Statement Box */}
        <ScrollReveal direction="up" delay={0.25}>
          <div
            className="mt-10 sm:mt-12 p-6 sm:p-8 rounded-2xl sm:rounded-3xl text-center relative overflow-hidden backdrop-blur-md"
            style={{
              background: "linear-gradient(to right, var(--color-bg-card), var(--color-bg-card-elevated), var(--color-bg-card))",
              border: "1px solid var(--color-border)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-20"
              style={{ backgroundColor: "var(--color-brand)" }}
            />
            <p className="text-base sm:text-xl font-medium max-w-4xl mx-auto leading-relaxed relative z-10" style={{ color: "var(--color-fg)" }}>
              &ldquo;Most marketing agencies charge for activity. ConvertX is built from the ground up around{" "}
              <span className="text-[--color-brand] font-semibold">
                conversion infrastructure, high-intent traffic, and scalable revenue growth.
              </span>&rdquo;
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
