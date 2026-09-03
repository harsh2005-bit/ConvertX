"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SERVICES_LIST } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { BackgroundDecoration } from "@/components/animations/BackgroundDecoration";
import {
  Target,
  ShieldCheck,
  MessageSquare,
  Layout,
  Cpu,
  Check,
  ArrowUpRight
} from "lucide-react";

const InstagramIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const ICON_MAP: Record<string, React.ReactNode> = {
  Target: <Target className="w-5 h-5 sm:w-6 sm:h-6" />,
  Instagram: <InstagramIcon />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />,
  MessageSquare: <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />,
  Layout: <Layout className="w-5 h-5 sm:w-6 sm:h-6" />,
  Cpu: <Cpu className="w-5 h-5 sm:w-6 sm:h-6" />,
};

export const Services: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section id="services" className="py-20 sm:py-28 relative overflow-hidden" style={{ backgroundColor: "var(--color-bg)" }}>
      <BackgroundDecoration variant="section" />

      {/* Background accent */}
      <div
        className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full blur-[140px] pointer-events-none opacity-30 dark:opacity-50"
        style={{ backgroundColor: "var(--color-brand)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <ScrollReveal direction="up" delay={0.05}>
              <Badge variant="orange">Full-Stack Capability</Badge>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.12}>
              <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight" style={{ color: "var(--color-fg)" }}>
                Everything You Need To <br className="hidden sm:inline" />
                <span className="text-gradient-orange">Convert Attention</span> Into Growth.
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal direction="up" delay={0.18}>
            <p className="text-sm sm:text-base max-w-md leading-relaxed" style={{ color: "var(--color-fg-muted)" }}>
              Integrated advertising, high-speed web tech, and automated messaging built as one continuous growth engine.
            </p>
          </ScrollReveal>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {SERVICES_LIST.map((service, idx) => {
            const isHovered = hoveredService === service.id;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className="relative rounded-2xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
                style={{
                  backgroundColor: "var(--color-bg-card)",
                  border: isHovered
                    ? "1px solid var(--color-brand)"
                    : "1px solid var(--color-border)",
                  boxShadow: isHovered
                    ? "var(--shadow-card-hover), 0 0 24px -6px var(--color-brand-glow)"
                    : "var(--shadow-card)",
                  transform: isHovered ? "translateY(-5px)" : undefined,
                }}
              >
                {/* Subtle internal gradient on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at top right, rgba(255, 106, 0, 0.08) 0%, transparent 70%)",
                  }}
                />

                <div className="relative z-10">
                  {/* Header Row */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black tracking-tighter" style={{ color: "var(--color-brand-glow)" }}>
                      {service.number}
                    </span>
                    <div
                      className="p-3 rounded-xl text-[--color-brand] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
                      style={{ backgroundColor: "var(--color-brand-subtle)", border: "1px solid var(--color-border)" }}
                    >
                      {ICON_MAP[service.icon]}
                    </div>
                  </div>

                  {/* Title & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold group-hover:text-[--color-brand] transition-colors duration-200" style={{ color: "var(--color-fg)" }}>
                      {service.title}
                    </h3>
                    {service.badge && (
                      <span
                        className="text-[10px] px-2.5 py-0.5 rounded-full font-semibold shrink-0"
                        style={{
                          backgroundColor: "var(--color-brand-subtle)",
                          color: "var(--color-brand)",
                          border: "1px solid var(--color-brand-glow)",
                        }}
                      >
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm leading-relaxed mb-6" style={{ color: "var(--color-fg-muted)" }}>
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2.5 pt-4 mb-6" style={{ borderTop: "1px solid var(--color-border)" }}>
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-xs" style={{ color: "var(--color-fg-muted)" }}>
                        <div
                          className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                          style={{ backgroundColor: "var(--color-brand-subtle)", color: "var(--color-brand)" }}
                        >
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Link */}
                <div className="relative z-10">
                  <Link
                    href={service.href || "/#contact"}
                    className="inline-flex items-center justify-between w-full pt-4 text-xs font-semibold group-hover:text-[--color-brand] transition-colors"
                    style={{ borderTop: "1px solid var(--color-border)", color: "var(--color-fg-muted)" }}
                  >
                    <span>Explore {service.title} Strategy</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-[--color-brand]" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

