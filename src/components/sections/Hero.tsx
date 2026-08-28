"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Counter } from "@/components/ui/Counter";
import { HERO_DEMO_METRICS } from "@/lib/constants";
import { Sparkles, TrendingUp, Users, Target, Zap } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      {/* Ambient glow — adapts via CSS opacity */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[250px] sm:h-[350px] rounded-full blur-[100px] sm:blur-[140px] pointer-events-none bg-[--color-brand-glow] opacity-60 dark:opacity-100" />
      <div className="absolute top-1/3 right-5 sm:right-10 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] rounded-full blur-[80px] sm:blur-[100px] pointer-events-none"
        style={{ backgroundColor: "rgba(255,106,0,0.06)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <Badge variant="orange" icon={<Sparkles className="w-3.5 h-3.5" />}>
              Meta Ads & Performance Marketing Agency in India
            </Badge>

            <h1
              className="mt-5 sm:mt-6 text-3xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]"
              style={{ color: "var(--color-fg)" }}
            >
              Turn Attention Into{" "}
              <span className="text-gradient-orange">Revenue.</span>
            </h1>

            <p
              className="mt-4 sm:mt-6 text-base sm:text-xl max-w-2xl leading-relaxed"
              style={{ color: "var(--color-fg-muted)" }}
            >
              Meta Ads, Instagram Ads, WhatsApp automation, websites and growth systems designed to turn attention into measurable business results.
            </p>

            {/* CTAs */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <Button href="/#contact" variant="primary" size="lg" className="w-full sm:w-auto justify-center" showArrow>
                Book a Free Strategy Call
              </Button>
              <Button href="/#services" variant="secondary" size="lg" className="w-full sm:w-auto justify-center">
                Explore Our Services
              </Button>
            </div>

            {/* Trust Statement */}
            <div
              className="mt-8 sm:mt-10 flex items-center gap-3 pt-5 w-full"
              style={{ borderTop: "1px solid var(--color-border)" }}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[--color-brand] animate-pulse shrink-0" />
              <p className="text-xs sm:text-sm font-medium" style={{ color: "var(--color-fg-muted)" }}>
                Built for businesses that want measurable growth.
              </p>
            </div>
          </motion.div>

          {/* Right Column — Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative w-full"
          >
            <div className="hero-dashboard relative rounded-2xl p-4 sm:p-6 overflow-hidden">
              {/* Header */}
              <div
                className="flex items-center justify-between pb-3.5 mb-4 sm:mb-6"
                style={{ borderBottom: "1px solid var(--color-border)" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[--color-brand]" />
                  <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#A7A7A7]">
                    Growth Dashboard Simulation
                  </span>
                </div>
                <span
                  className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded-full text-xs"
                  style={{
                    backgroundColor: "var(--color-bg-subtle)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-fg-muted)",
                  }}
                >
                  Concept Demo
                </span>
              </div>

              {/* 4 Metric Cards */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {/* Ad Spend */}
                <div
                  className="p-3 sm:p-4 rounded-xl transition-all hover:border-[--color-brand]"
                  style={{ backgroundColor: "var(--color-bg-card-elevated)", border: "1px solid var(--color-border)" }}
                >
                  <div className="flex items-center justify-between text-[11px] sm:text-xs mb-1.5" style={{ color: "var(--color-fg-muted)" }}>
                    <span>Ad Spend</span>
                    <TrendingUp className="w-3.5 h-3.5 text-[--color-brand]" />
                  </div>
                  <div className="text-lg sm:text-2xl font-bold tracking-tight" style={{ color: "var(--color-fg)" }}>
                    {HERO_DEMO_METRICS.spend}
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-medium mt-0.5 truncate text-[--color-brand]">
                    Optimized allocation
                  </div>
                </div>

                {/* Leads */}
                <div
                  className="p-3 sm:p-4 rounded-xl transition-all hover:border-[--color-brand]"
                  style={{ backgroundColor: "var(--color-bg-card-elevated)", border: "1px solid var(--color-border)" }}
                >
                  <div className="flex items-center justify-between text-[11px] sm:text-xs mb-1.5" style={{ color: "var(--color-fg-muted)" }}>
                    <span>Leads</span>
                    <Users className="w-3.5 h-3.5 text-[--color-brand]" />
                  </div>
                  <div className="text-lg sm:text-2xl font-bold tracking-tight" style={{ color: "var(--color-fg)" }}>
                    <Counter end={1842} duration={2000} />
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-medium mt-0.5 truncate text-emerald-500">
                    +24% vs benchmark
                  </div>
                </div>

                {/* Conversion Rate */}
                <div
                  className="p-3 sm:p-4 rounded-xl transition-all hover:border-[--color-brand]"
                  style={{ backgroundColor: "var(--color-bg-card-elevated)", border: "1px solid var(--color-border)" }}
                >
                  <div className="flex items-center justify-between text-[11px] sm:text-xs mb-1.5" style={{ color: "var(--color-fg-muted)" }}>
                    <span>Conversion Rate</span>
                    <Target className="w-3.5 h-3.5 text-[--color-brand]" />
                  </div>
                  <div className="text-lg sm:text-2xl font-bold tracking-tight" style={{ color: "var(--color-fg)" }}>
                    <Counter end={8.7} decimals={1} suffix="%" duration={2200} />
                  </div>
                  <div className="text-[10px] sm:text-[11px] mt-0.5 truncate" style={{ color: "var(--color-fg-muted)" }}>
                    High intent funnel
                  </div>
                </div>

                {/* ROAS */}
                <div
                  className="p-3 sm:p-4 rounded-xl transition-all hover:border-[--color-brand]"
                  style={{ backgroundColor: "var(--color-bg-card-elevated)", border: "1px solid var(--color-border)" }}
                >
                  <div className="flex items-center justify-between text-[11px] sm:text-xs mb-1.5" style={{ color: "var(--color-fg-muted)" }}>
                    <span>ROAS</span>
                    <Zap className="w-3.5 h-3.5 text-[--color-brand]" />
                  </div>
                  <div className="text-lg sm:text-2xl font-bold tracking-tight text-[--color-brand]">
                    <Counter end={4.8} decimals={1} suffix="x" duration={2400} />
                  </div>
                  <div className="text-[10px] sm:text-[11px] mt-0.5 truncate" style={{ color: "var(--color-fg-muted)" }}>
                    Scalable return
                  </div>
                </div>
              </div>

              {/* Chart Sparkline */}
              <div
                className="mt-4 sm:mt-6 p-3.5 sm:p-4 rounded-xl"
                style={{ backgroundColor: "var(--color-bg-card-elevated)", border: "1px solid var(--color-border)" }}
              >
                <div className="flex items-center justify-between text-xs mb-2.5" style={{ color: "var(--color-fg-muted)" }}>
                  <span>Conversion Velocity</span>
                  <span className="text-[--color-brand] font-semibold">Live System</span>
                </div>
                <div className="h-16 sm:h-20 w-full flex items-end justify-between gap-1 pt-2">
                  {[40, 55, 35, 65, 80, 70, 95, 85, 100].map((val, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ height: 0 }}
                      animate={{ height: `${val}%` }}
                      transition={{ duration: 0.8, delay: idx * 0.08 }}
                      className="w-full rounded-t-sm"
                      style={{
                        background: `linear-gradient(to top, rgba(255,106,0,0.25), rgba(255,106,0,0.9))`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Disclaimer */}
              <div className="mt-3 pt-2 text-center" style={{ borderTop: "1px solid var(--color-border)" }}>
                <p className="text-[10px] sm:text-[11px] font-medium" style={{ color: "var(--color-fg-subtle)" }}>
                  * Visual dashboard concept representing ConvertX target optimization models.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
