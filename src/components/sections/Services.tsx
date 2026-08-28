"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SERVICES_LIST } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
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
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const ICON_MAP: Record<string, React.ReactNode> = {
  Target: <Target className="w-6 h-6" />,
  Instagram: <InstagramIcon />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  MessageSquare: <MessageSquare className="w-6 h-6" />,
  Layout: <Layout className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
};

export const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<string>("meta-ads");

  return (
    <section id="services" className="py-24 relative" style={{ backgroundColor: "var(--color-bg)" }}>
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none opacity-40 dark:opacity-60"
        style={{ backgroundColor: "var(--color-brand-subtle)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <Badge variant="orange">Full-Stack Capability</Badge>
            <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight" style={{ color: "var(--color-fg)" }}>
              Everything You Need To <br />
              <span className="text-gradient-orange">Convert Attention</span> Into Growth.
            </h2>
          </div>
          <p className="text-base max-w-md" style={{ color: "var(--color-fg-muted)" }}>
            Integrated advertising, high-speed web tech, and automated messaging built as one continuous growth engine.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onMouseEnter={() => setActiveService(service.id)}
              className="relative rounded-2xl p-8 transition-all duration-300 flex flex-col justify-between group"
              style={{
                backgroundColor: "var(--color-bg-card)",
                border: activeService === service.id
                  ? "1px solid var(--color-brand)"
                  : "1px solid var(--color-border)",
                boxShadow: activeService === service.id
                  ? "var(--shadow-card-hover), 0 0 20px -5px var(--color-brand-glow)"
                  : "var(--shadow-card)",
                transform: activeService === service.id ? "translateY(-6px)" : undefined,
              }}
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-black tracking-tighter" style={{ color: "var(--color-brand-glow)" }}>
                    {service.number}
                  </span>
                  <div
                    className="p-3 rounded-xl text-[--color-brand] group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: "var(--color-brand-subtle)", border: "1px solid var(--color-border)" }}
                  >
                    {ICON_MAP[service.icon]}
                  </div>
                </div>

                {/* Title & Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h3 className="text-2xl font-bold group-hover:text-[--color-brand] transition-colors" style={{ color: "var(--color-fg)" }}>
                    {service.title}
                  </h3>
                  {service.badge && (
                    <span
                      className="text-[10px] px-2 py-0.5 rounded-full font-semibold shrink-0"
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
                <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--color-fg-muted)" }}>
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2.5 pt-4 mb-8" style={{ borderTop: "1px solid var(--color-border)" }}>
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
              <Link
                href={service.href || "/#contact"}
                className="inline-flex items-center justify-between w-full pt-4 text-xs font-semibold group-hover:text-[--color-brand] transition-colors"
                style={{ borderTop: "1px solid var(--color-border)", color: "var(--color-fg-muted)" }}
              >
                <span>Explore {service.title} Strategy</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
