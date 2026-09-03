"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Counter } from "@/components/ui/Counter";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { BackgroundDecoration } from "@/components/animations/BackgroundDecoration";

const CHANNEL_METRICS = {
  all: {
    spend: "₹1,25,000",
    impressions: "1.85M",
    clicks: "32.4K",
    leads: 1240,
    cpl: "₹100",
    conversionRate: "8.7%",
    roas: "4.8x",
    chart: [30, 45, 38, 60, 52, 75, 68, 88, 72, 95, 82, 100, 92, 110, 105],
  },
  meta: {
    spend: "₹85,000",
    impressions: "1.25M",
    clicks: "22.1K",
    leads: 810,
    cpl: "₹105",
    conversionRate: "7.9%",
    roas: "4.5x",
    chart: [25, 40, 35, 55, 48, 68, 62, 80, 65, 88, 76, 92, 85, 98, 94],
  },
  whatsapp: {
    spend: "₹25,000",
    impressions: "420K",
    clicks: "7.8K",
    leads: 320,
    cpl: "₹78",
    conversionRate: "12.4%",
    roas: "5.6x",
    chart: [15, 25, 20, 35, 30, 45, 42, 58, 48, 65, 58, 70, 66, 80, 75],
  },
  funnel: {
    spend: "₹15,000",
    impressions: "180K",
    clicks: "2.5K",
    leads: 110,
    cpl: "₹136",
    conversionRate: "9.2%",
    roas: "4.2x",
    chart: [10, 15, 12, 22, 18, 28, 26, 35, 30, 42, 36, 45, 40, 50, 48],
  },
};

export const DashboardDemo: React.FC = () => {
  const [activeChannel, setActiveChannel] = useState<keyof typeof CHANNEL_METRICS>("all");
  const data = CHANNEL_METRICS[activeChannel];

  return (
    <section className="py-20 sm:py-28 bg-[var(--color-bg)] relative border-t border-[var(--color-border)] overflow-hidden">
      <BackgroundDecoration variant="section" />

      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[250px] sm:h-[400px] bg-[var(--color-brand)] opacity-10 dark:opacity-20 rounded-full blur-[120px] sm:blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <ScrollReveal direction="up" delay={0.05}>
            <Badge variant="orange">Interactive ROI Sandbox</Badge>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.12}>
            <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-[var(--color-fg)] tracking-tight">
              Transparent Campaign <span className="text-gradient-orange">Control Center</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.18}>
            <p className="mt-4 text-sm sm:text-lg text-[var(--color-fg-muted)] leading-relaxed">
              Preview the real-time analytics interface built into every ConvertX client campaign architecture.
            </p>
          </ScrollReveal>
        </div>

        {/* Large Dashboard Wrapper */}
        <ScrollReveal direction="up" delay={0.22}>
          <div className="rounded-2xl sm:rounded-3xl bg-[var(--color-bg-card)] border border-[var(--color-border)] p-4 sm:p-8 shadow-2xl backdrop-blur-2xl relative overflow-hidden">
            {/* Top Bar Navigation of Dashboard */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 sm:pb-6 border-b border-[var(--color-border)] gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <h3 className="text-sm sm:text-lg font-bold text-[var(--color-fg)] tracking-tight truncate">
                  ConvertX Performance Engine v2.4
                </h3>
                <span className="hidden sm:inline-block text-[10px] sm:text-xs px-2.5 py-0.5 rounded-md bg-[var(--color-brand-subtle)] text-[var(--color-brand)] border border-[var(--color-brand)]/30 font-semibold">
                  Sandbox Demo
                </span>
              </div>

              {/* Filter Toggle Buttons */}
              <div className="flex items-center gap-1.5 bg-[var(--color-bg-card-elevated)] p-1 rounded-xl border border-[var(--color-border)] overflow-x-auto">
                {(["all", "meta", "whatsapp", "funnel"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveChannel(tab)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                      activeChannel === tab
                        ? "bg-[var(--color-brand)] text-white shadow-md shadow-[var(--color-brand)]/30"
                        : "text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]"
                    }`}
                  >
                    {tab === "all" ? "All Channels" : tab === "meta" ? "Meta Ads" : tab === "whatsapp" ? "WhatsApp API" : "Landing Funnel"}
                  </button>
                ))}
              </div>
            </div>

            {/* 7 Key Metric Cards Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeChannel}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 sm:gap-3 mb-6 sm:mb-8"
              >
                {/* Spend */}
                <div className="p-3 sm:p-4 rounded-xl bg-[var(--color-bg-card-elevated)] border border-[var(--color-border)] transition-all hover:border-[--color-brand]">
                  <span className="text-[10px] sm:text-[11px] text-[var(--color-fg-muted)] font-medium block">Total Spend</span>
                  <span className="text-base sm:text-xl font-bold text-[var(--color-fg)] block mt-0.5 sm:mt-1">{data.spend}</span>
                  <span className="text-[9px] sm:text-[10px] text-[var(--color-fg-subtle)] block mt-0.5 truncate">Budget Allocated</span>
                </div>

                {/* Impressions */}
                <div className="p-3 sm:p-4 rounded-xl bg-[var(--color-bg-card-elevated)] border border-[var(--color-border)] transition-all hover:border-[--color-brand]">
                  <span className="text-[10px] sm:text-[11px] text-[var(--color-fg-muted)] font-medium block">Impressions</span>
                  <span className="text-base sm:text-xl font-bold text-[var(--color-fg)] block mt-0.5 sm:mt-1">{data.impressions}</span>
                  <span className="text-[9px] sm:text-[10px] text-emerald-400 block mt-0.5 truncate">Target Audience</span>
                </div>

                {/* Clicks */}
                <div className="p-3 sm:p-4 rounded-xl bg-[var(--color-bg-card-elevated)] border border-[var(--color-border)] transition-all hover:border-[--color-brand]">
                  <span className="text-[10px] sm:text-[11px] text-[var(--color-fg-muted)] font-medium block">Total Clicks</span>
                  <span className="text-base sm:text-xl font-bold text-[var(--color-fg)] block mt-0.5 sm:mt-1">{data.clicks}</span>
                  <span className="text-[9px] sm:text-[10px] text-[var(--color-fg-subtle)] block mt-0.5 truncate">High CTR</span>
                </div>

                {/* Leads */}
                <div className="p-3 sm:p-4 rounded-xl bg-[var(--color-bg-card-elevated)] border border-[var(--color-border)] transition-all hover:border-[--color-brand]">
                  <span className="text-[10px] sm:text-[11px] text-[var(--color-fg-muted)] font-medium block">Leads</span>
                  <span className="text-base sm:text-xl font-bold text-[var(--color-fg)] block mt-0.5 sm:mt-1">
                    <Counter end={data.leads} duration={1400} />
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-emerald-400 block mt-0.5 truncate">Verified Contacts</span>
                </div>

                {/* CPL */}
                <div className="p-3 sm:p-4 rounded-xl bg-[var(--color-bg-card-elevated)] border border-[var(--color-border)] transition-all hover:border-[--color-brand]">
                  <span className="text-[10px] sm:text-[11px] text-[var(--color-fg-muted)] font-medium block">Cost Per Lead</span>
                  <span className="text-base sm:text-xl font-bold text-[var(--color-fg)] block mt-0.5 sm:mt-1">{data.cpl}</span>
                  <span className="text-[9px] sm:text-[10px] text-[var(--color-fg-subtle)] block mt-0.5 truncate">Optimized Target</span>
                </div>

                {/* Conversion */}
                <div className="p-3 sm:p-4 rounded-xl bg-[var(--color-bg-card-elevated)] border border-[var(--color-border)] transition-all hover:border-[--color-brand]">
                  <span className="text-[10px] sm:text-[11px] text-[var(--color-fg-muted)] font-medium block">Conversion Rate</span>
                  <span className="text-base sm:text-xl font-bold text-[var(--color-fg)] block mt-0.5 sm:mt-1">{data.conversionRate}</span>
                  <span className="text-[9px] sm:text-[10px] text-emerald-400 block mt-0.5 truncate">High Intent</span>
                </div>

                {/* ROAS */}
                <div className="p-3 sm:p-4 rounded-xl bg-[var(--color-bg-card-elevated)] border border-[var(--color-brand)]/40 col-span-2 sm:col-span-1" style={{ backgroundColor: "var(--color-brand-subtle)" }}>
                  <span className="text-[10px] sm:text-[11px] text-[var(--color-brand)] font-bold block">Blended ROAS</span>
                  <span className="text-base sm:text-xl font-extrabold text-[var(--color-brand)] block mt-0.5 sm:mt-1">{data.roas}</span>
                  <span className="text-[9px] sm:text-[10px] text-[var(--color-fg-muted)] block mt-0.5 truncate">Revenue Multiple</span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Charts & Breakdown Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
              
              {/* Main Growth Curve Chart */}
              <div className="lg:col-span-8 p-4 sm:p-6 rounded-2xl bg-[var(--color-bg-card-elevated)] border border-[var(--color-border)] flex flex-col justify-between">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[var(--color-fg)]">Daily Lead & Conversion Velocity</h4>
                    <p className="text-[11px] text-[var(--color-fg-muted)]">Simulated 30-day performance curve ({activeChannel.toUpperCase()})</p>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-medium">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-brand)]" />
                      <span className="text-[var(--color-fg-muted)]">Leads</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                      <span className="text-[var(--color-fg-muted)]">Ad Spend</span>
                    </div>
                  </div>
                </div>

                {/* Bar Chart Visualization */}
                <div className="h-36 sm:h-44 w-full flex items-end gap-1.5 sm:gap-2 pt-4 sm:pt-6">
                  {data.chart.map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                      <motion.div
                        key={`${activeChannel}-${i}`}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.5, delay: i * 0.02, ease: "easeOut" }}
                        className="w-full bg-gradient-to-t from-[var(--color-brand)]/20 via-[var(--color-brand)]/70 to-[var(--color-brand)] rounded-t-sm"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Funnel Breakdown Card */}
              <div className="lg:col-span-4 p-4 sm:p-6 rounded-2xl bg-[var(--color-bg-card-elevated)] border border-[var(--color-border)] flex flex-col justify-between">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[var(--color-fg)] mb-0.5">Conversion Funnel Drop-off</h4>
                  <p className="text-[11px] text-[var(--color-fg-muted)] mb-3.5">Stage efficiency analysis</p>

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-[11px] sm:text-xs text-[var(--color-fg-muted)] mb-1">
                        <span>Ad Impressions</span>
                        <span className="font-mono">{data.impressions}</span>
                      </div>
                      <div className="w-full bg-[var(--color-bg-card)] h-2 rounded-full overflow-hidden border border-[var(--color-border)]">
                        <div className="bg-[var(--color-brand)] h-full w-full" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] sm:text-xs text-[var(--color-fg-muted)] mb-1">
                        <span>Landing Page Views</span>
                        <span className="font-mono">{data.clicks}</span>
                      </div>
                      <div className="w-full bg-[var(--color-bg-card)] h-2 rounded-full overflow-hidden border border-[var(--color-border)]">
                        <div className="bg-[var(--color-brand)] h-full w-[65%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] sm:text-xs text-[var(--color-fg-muted)] mb-1">
                        <span>Form/WhatsApp Leads</span>
                        <span className="font-mono">{data.leads}</span>
                      </div>
                      <div className="w-full bg-[var(--color-bg-card)] h-2 rounded-full overflow-hidden border border-[var(--color-border)]">
                        <div className="bg-[var(--color-brand)] h-full w-[40%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] sm:text-xs text-[var(--color-fg-muted)] mb-1">
                        <span>Closed Customers</span>
                        <span className="font-mono">{Math.round(data.leads * 0.09)}</span>
                      </div>
                      <div className="w-full bg-[var(--color-bg-card)] h-2 rounded-full overflow-hidden border border-[var(--color-border)]">
                        <div className="bg-emerald-400 h-full w-[25%]" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[var(--color-border)] mt-4">
                  <span className="text-[10px] sm:text-[11px] text-[var(--color-fg-subtle)] font-medium block">
                    * Note: All metrics represent simulated performance benchmarks.
                  </span>
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

