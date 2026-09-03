"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { PartnerMarquee } from "./PartnerMarquee";
import {
  PARTNERS_ROW_1,
  PARTNERS_ROW_2,
  PARTNER_MARQUEE_CONFIG,
} from "@/lib/partners-data";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { BackgroundDecoration } from "@/components/animations/BackgroundDecoration";
import { Workflow, Server, Cpu, ShieldCheck } from "lucide-react";

const TRUST_ICON_MAP: Record<string, React.ReactNode> = {
  Workflow: <Workflow className="w-4 h-4" />,
  Server: <Server className="w-4 h-4" />,
  Cpu: <Cpu className="w-4 h-4" />,
  ShieldCheck: <ShieldCheck className="w-4 h-4" />,
};

export const PartnerSection: React.FC = () => {
  return (
    <section
      id="partners"
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{
        backgroundColor: "var(--color-bg-subtle)",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      {/* Background decorations & ambient glow */}
      <BackgroundDecoration variant="partner" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <ScrollReveal direction="up" delay={0.05}>
            <Badge variant="orange">
              {PARTNER_MARQUEE_CONFIG.eyebrow}
            </Badge>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.12}>
            <h2
              className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
              style={{ color: "var(--color-fg)" }}
            >
              Technology That{" "}
              <span className="text-gradient-orange">Powers Your Growth.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.18}>
            <p
              className="mt-4 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ color: "var(--color-fg-muted)" }}
            >
              {PARTNER_MARQUEE_CONFIG.description}
            </p>
          </ScrollReveal>
        </div>

        {/* Dual-Row Marquee Container */}
        <ScrollReveal direction="up" delay={0.22}>
          <div
            className="relative rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 backdrop-blur-md overflow-hidden"
            style={{
              backgroundColor: "var(--color-bg-card)",
              border: "1px solid var(--color-border)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            {/* Ambient inner orange corner glow */}
            <div
              className="absolute -top-12 -left-12 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ backgroundColor: "var(--color-brand)" }}
            />
            <div
              className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ backgroundColor: "var(--color-brand)" }}
            />

            {/* Row 1: Moving Left -> Right */}
            <div className="mb-3 sm:mb-4">
              <PartnerMarquee
                partners={PARTNERS_ROW_1}
                direction="right"
                speedSeconds={PARTNER_MARQUEE_CONFIG.speedRow1}
              />
            </div>

            {/* Row 2: Moving Right -> Left */}
            <div>
              <PartnerMarquee
                partners={PARTNERS_ROW_2}
                direction="left"
                speedSeconds={PARTNER_MARQUEE_CONFIG.speedRow2}
              />
            </div>
          </div>
        </ScrollReveal>

        {/* 4 Trust Indicators */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {PARTNER_MARQUEE_CONFIG.trustPoints.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.28 + idx * 0.08 }}
              className="flex items-start gap-3.5 p-4 rounded-xl transition-all duration-300 group hover:-translate-y-0.5"
              style={{
                backgroundColor: "var(--color-bg-card)",
                border: "1px solid var(--color-border)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-[--color-brand] group-hover:scale-110 transition-transform"
                style={{
                  backgroundColor: "var(--color-brand-subtle)",
                  border: "1px solid var(--color-border)",
                }}
              >
                {TRUST_ICON_MAP[item.icon]}
              </div>
              <div className="flex flex-col min-w-0">
                <span
                  className="text-xs sm:text-sm font-bold tracking-tight group-hover:text-[--color-brand] transition-colors"
                  style={{ color: "var(--color-fg)" }}
                >
                  {item.title}
                </span>
                <span
                  className="text-[11px] sm:text-xs leading-relaxed mt-0.5"
                  style={{ color: "var(--color-fg-muted)" }}
                >
                  {item.desc}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subtle Trademark & Partnership Disclaimer */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="mt-8 text-center">
            <p
              className="text-[11px] sm:text-xs max-w-2xl mx-auto leading-relaxed"
              style={{ color: "var(--color-fg-subtle)" }}
            >
              {PARTNER_MARQUEE_CONFIG.disclaimer}
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
