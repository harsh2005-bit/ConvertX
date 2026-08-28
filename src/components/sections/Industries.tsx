"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { INDUSTRIES_LIST } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { 
  ShoppingBag, 
  Building2, 
  GraduationCap, 
  Stethoscope, 
  Wallet, 
  Gamepad2, 
  Rocket, 
  Briefcase,
  ArrowUpRight,
} from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  ShoppingBag: <ShoppingBag className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
  GraduationCap: <GraduationCap className="w-6 h-6" />,
  Stethoscope: <Stethoscope className="w-6 h-6" />,
  Wallet: <Wallet className="w-6 h-6" />,
  Gamepad2: <Gamepad2 className="w-6 h-6" />,
  Rocket: <Rocket className="w-6 h-6" />,
  Briefcase: <Briefcase className="w-6 h-6" />,
};

export const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-24 bg-[var(--color-bg)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="orange">Domain Expertise</Badge>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-[var(--color-fg)] tracking-tight">
            Built For Businesses <span className="text-gradient-orange">Ready To Grow.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--color-fg-muted)]">
            Tailored acquisition angles, custom WhatsApp bots, and specialized landing page structures designed for your vertical.
          </p>
        </div>

        {/* 8 Industry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES_LIST.map((industry, idx) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              className="p-6 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-brand)]/40 transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[var(--color-bg-card-elevated)] text-[var(--color-brand)] border border-[var(--color-border)] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[var(--color-brand)] group-hover:text-[var(--color-fg)] transition-all">
                  {ICON_MAP[industry.icon]}
                </div>
                <h3 className="text-xl font-bold text-[var(--color-fg)] mb-2 group-hover:text-[var(--color-brand)] transition-colors">
                  {industry.title}
                </h3>
                <p className="text-xs text-[var(--color-fg-muted)] leading-relaxed mb-6">
                  {industry.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--color-border)] space-y-3">
                <span className="text-[11px] font-mono text-[var(--color-brand)] font-semibold block">
                  {industry.metricsPreview}
                </span>

                <Link
                  href={industry.href || "/#contact"}
                  className="inline-flex items-center justify-between w-full text-xs font-semibold text-[var(--color-fg-muted)] group-hover:text-[var(--color-brand)] transition-colors"
                >
                  <span>Explore Playbook</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
