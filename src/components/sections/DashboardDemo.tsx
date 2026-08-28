"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Counter } from "@/components/ui/Counter";
import { DEMO_SANDBOX_DATA } from "@/lib/constants";

export const DashboardDemo: React.FC = () => {
  const [activeChannel, setActiveChannel] = useState<string>("all");

  return (
    <section className="py-16 sm:py-24 bg-[var(--color-bg)] relative border-t border-[var(--color-border)]">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[250px] sm:h-[400px] bg-[var(--color-brand-subtle)] rounded-full blur-[100px] sm:blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Badge variant="orange">Interactive ROI Sandbox</Badge>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-[var(--color-fg)] tracking-tight">
            Transparent Campaign <span className="text-gradient-orange">Control Center</span>
          </h2>
          <p className="mt-4 text-sm sm:text-lg text-[var(--color-fg-muted)]">
            Preview the real-time analytics interface built into every ConvertX client campaign architecture.
          </p>
        </div>

        {/* Large Dashboard Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl sm:rounded-3xl bg-[var(--color-bg-card)] border border-[var(--color-border)] p-4 sm:p-8 shadow-2xl shadow-black/90 backdrop-blur-2xl relative overflow-hidden"
        >
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
              {["all", "meta", "whatsapp", "funnel"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveChannel(tab)}
                  className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                    activeChannel === tab
                      ? "bg-[var(--color-brand)] text-white shadow-md shadow-[var(--color-brand)]/30"
                      : "text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]"
                  }`}
                >
                  {tab === "all" ? "All Channels" : tab}
                </button>
              ))}
            </div>
          </div>

          {/* 7 Key Metric Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 sm:gap-3 mb-6 sm:mb-8">
            {/* Spend */}
            <div className="p-3 sm:p-4 rounded-xl bg-[var(--color-bg-card-elevated)] border border-[var(--color-border)]">
              <span className="text-[10px] sm:text-[11px] text-[var(--color-fg-muted)] font-medium block">Total Spend</span>
              <span className="text-base sm:text-xl font-bold text-[var(--color-fg)] block mt-0.5 sm:mt-1">{DEMO_SANDBOX_DATA.spend}</span>
              <span className="text-[9px] sm:text-[10px] text-[var(--color-fg-subtle)] block mt-0.5 truncate">Budget Allocated</span>
            </div>

            {/* Impressions */}
            <div className="p-3 sm:p-4 rounded-xl bg-[var(--color-bg-card-elevated)] border border-[var(--color-border)]">
              <span className="text-[10px] sm:text-[11px] text-[var(--color-fg-muted)] font-medium block">Impressions</span>
              <span className="text-base sm:text-xl font-bold text-[var(--color-fg)] block mt-0.5 sm:mt-1">{DEMO_SANDBOX_DATA.impressions}</span>
              <span className="text-[9px] sm:text-[10px] text-emerald-400 block mt-0.5 truncate">Target Audience</span>
            </div>

            {/* Clicks */}
            <div className="p-3 sm:p-4 rounded-xl bg-[var(--color-bg-card-elevated)] border border-[var(--color-border)]">
              <span className="text-[10px] sm:text-[11px] text-[var(--color-fg-muted)] font-medium block">Total Clicks</span>
              <span className="text-base sm:text-xl font-bold text-[var(--color-fg)] block mt-0.5 sm:mt-1">{DEMO_SANDBOX_DATA.clicks}</span>
              <span className="text-[9px] sm:text-[10px] text-[var(--color-fg-subtle)] block mt-0.5 truncate">1.8% CTR</span>
            </div>

            {/* Leads */}
            <div className="p-3 sm:p-4 rounded-xl bg-[var(--color-bg-card-elevated)] border border-[var(--color-border)]">
              <span className="text-[10px] sm:text-[11px] text-[var(--color-fg-muted)] font-medium block">Leads</span>
              <span className="text-base sm:text-xl font-bold text-[var(--color-fg)] block mt-0.5 sm:mt-1">
                <Counter end={1240} duration={2000} />
              </span>
              <span className="text-[9px] sm:text-[10px] text-emerald-400 block mt-0.5 truncate">Verified Contacts</span>
            </div>

            {/* CPL */}
            <div className="p-3 sm:p-4 rounded-xl bg-[var(--color-bg-card-elevated)] border border-[var(--color-border)]">
              <span className="text-[10px] sm:text-[11px] text-[var(--color-fg-muted)] font-medium block">Cost Per Lead</span>
              <span className="text-base sm:text-xl font-bold text-[var(--color-fg)] block mt-0.5 sm:mt-1">{DEMO_SANDBOX_DATA.cpl}</span>
              <span className="text-[9px] sm:text-[10px] text-[var(--color-fg-subtle)] block mt-0.5 truncate">Optimized Target</span>
            </div>

            {/* Conversion */}
            <div className="p-3 sm:p-4 rounded-xl bg-[var(--color-bg-card-elevated)] border border-[var(--color-border)]">
              <span className="text-[10px] sm:text-[11px] text-[var(--color-fg-muted)] font-medium block">Conversion Rate</span>
              <span className="text-base sm:text-xl font-bold text-[var(--color-fg)] block mt-0.5 sm:mt-1">{DEMO_SANDBOX_DATA.conversionRate}</span>
              <span className="text-[9px] sm:text-[10px] text-emerald-400 block mt-0.5 truncate">High Intent</span>
            </div>

            {/* ROAS */}
            <div className="p-3 sm:p-4 rounded-xl bg-[var(--color-bg-card-elevated)] border border-[var(--color-brand)]/40 bg-[var(--color-brand-subtle)] col-span-2 sm:col-span-1">
              <span className="text-[10px] sm:text-[11px] text-[var(--color-brand)] font-bold block">Blended ROAS</span>
              <span className="text-base sm:text-xl font-extrabold text-[var(--color-brand)] block mt-0.5 sm:mt-1">{DEMO_SANDBOX_DATA.roas}</span>
              <span className="text-[9px] sm:text-[10px] text-[var(--color-fg-muted)] block mt-0.5 truncate">Revenue Multiple</span>
            </div>
          </div>

          {/* Charts & Breakdown Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
            
            {/* Main Growth Curve Chart */}
            <div className="lg:col-span-8 p-4 sm:p-6 rounded-2xl bg-[var(--color-bg-card-elevated)] border border-[var(--color-border)] flex flex-col justify-between">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[var(--color-fg)]">Daily Lead & Conversion Velocity</h4>
                  <p className="text-[11px] text-[var(--color-fg-muted)]">Simulated 30-day performance curve</p>
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
                {[30, 45, 38, 60, 52, 75, 68, 88, 72, 95, 82, 100, 92, 110, 105].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.04 }}
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
                      <span className="font-mono">1.8M</span>
                    </div>
                    <div className="w-full bg-[var(--color-bg-card-elevated)] h-2 rounded-full overflow-hidden">
                      <div className="bg-[var(--color-brand)] h-full w-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] sm:text-xs text-[var(--color-fg-muted)] mb-1">
                      <span>Landing Page Views</span>
                      <span className="font-mono">32.4K (1.8%)</span>
                    </div>
                    <div className="w-full bg-[var(--color-bg-card-elevated)] h-2 rounded-full overflow-hidden">
                      <div className="bg-[var(--color-brand)] h-full w-[65%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] sm:text-xs text-[var(--color-fg-muted)] mb-1">
                      <span>Form/WhatsApp Leads</span>
                      <span className="font-mono">1,240 (3.8%)</span>
                    </div>
                    <div className="w-full bg-[var(--color-bg-card-elevated)] h-2 rounded-full overflow-hidden">
                      <div className="bg-[var(--color-brand)] h-full w-[40%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] sm:text-xs text-[var(--color-fg-muted)] mb-1">
                      <span>Closed Customers</span>
                      <span className="font-mono">114 (9.2%)</span>
                    </div>
                    <div className="w-full bg-[var(--color-bg-card-elevated)] h-2 rounded-full overflow-hidden">
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
        </motion.div>

      </div>
    </section>
  );
};
