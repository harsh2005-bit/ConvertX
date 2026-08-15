"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Counter } from "@/components/ui/Counter";
import { DEMO_SANDBOX_DATA } from "@/lib/constants";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Target, 
  DollarSign, 
  Zap, 
  PieChart, 
  Activity,
  Filter,
  CheckCircle2
} from "lucide-react";

export const DashboardDemo: React.FC = () => {
  const [activeChannel, setActiveChannel] = useState<string>("all");

  return (
    <section className="py-24 bg-[#060608] relative border-t border-white/10">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#FF5500]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="orange">Interactive ROI Sandbox</Badge>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Transparent Campaign <span className="text-gradient-orange">Control Center</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Preview the real-time analytics interface built into every ConvertX client campaign architecture.
          </p>
        </div>

        {/* Large Dashboard Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-[#0D0E12] border border-white/15 p-6 sm:p-8 shadow-2xl shadow-black/90 backdrop-blur-2xl relative overflow-hidden"
        >
          {/* Top Bar Navigation of Dashboard */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              <h3 className="text-lg font-bold text-white tracking-tight">
                ConvertX Performance Engine v2.4
              </h3>
              <span className="text-xs px-2.5 py-0.5 rounded-md bg-[#FF5500]/10 text-[#FF5500] border border-[#FF5500]/30 font-semibold">
                Simulated Sandbox Demo
              </span>
            </div>

            {/* Filter Toggle Buttons */}
            <div className="flex items-center gap-2 bg-[#14161F] p-1 rounded-xl border border-white/10">
              {["all", "meta", "whatsapp", "funnel"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveChannel(tab)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                    activeChannel === tab
                      ? "bg-[#FF5500] text-white shadow-md shadow-[#FF5500]/30"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {tab === "all" ? "All Channels" : tab}
                </button>
              ))}
            </div>
          </div>

          {/* 7 Key Metric Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-8">
            {/* Spend */}
            <div className="p-4 rounded-xl bg-[#14161F] border border-white/10">
              <span className="text-[11px] text-slate-400 font-medium block">Total Spend</span>
              <span className="text-xl font-bold text-white block mt-1">{DEMO_SANDBOX_DATA.spend}</span>
              <span className="text-[10px] text-slate-500 block mt-0.5">Budget Allocated</span>
            </div>

            {/* Impressions */}
            <div className="p-4 rounded-xl bg-[#14161F] border border-white/10">
              <span className="text-[11px] text-slate-400 font-medium block">Impressions</span>
              <span className="text-xl font-bold text-white block mt-1">{DEMO_SANDBOX_DATA.impressions}</span>
              <span className="text-[10px] text-emerald-400 block mt-0.5">Target Audience</span>
            </div>

            {/* Clicks */}
            <div className="p-4 rounded-xl bg-[#14161F] border border-white/10">
              <span className="text-[11px] text-slate-400 font-medium block">Total Clicks</span>
              <span className="text-xl font-bold text-white block mt-1">{DEMO_SANDBOX_DATA.clicks}</span>
              <span className="text-[10px] text-slate-500 block mt-0.5">1.8% CTR</span>
            </div>

            {/* Leads */}
            <div className="p-4 rounded-xl bg-[#14161F] border border-white/10">
              <span className="text-[11px] text-slate-400 font-medium block">Leads</span>
              <span className="text-xl font-bold text-white block mt-1">
                <Counter end={1240} duration={2000} />
              </span>
              <span className="text-[10px] text-emerald-400 block mt-0.5">Verified Contacts</span>
            </div>

            {/* CPL */}
            <div className="p-4 rounded-xl bg-[#14161F] border border-white/10">
              <span className="text-[11px] text-slate-400 font-medium block">Cost Per Lead</span>
              <span className="text-xl font-bold text-white block mt-1">{DEMO_SANDBOX_DATA.cpl}</span>
              <span className="text-[10px] text-slate-500 block mt-0.5">Optimized Target</span>
            </div>

            {/* Conversion */}
            <div className="p-4 rounded-xl bg-[#14161F] border border-white/10">
              <span className="text-[11px] text-slate-400 font-medium block">Conversion Rate</span>
              <span className="text-xl font-bold text-white block mt-1">{DEMO_SANDBOX_DATA.conversionRate}</span>
              <span className="text-[10px] text-emerald-400 block mt-0.5">High Intent</span>
            </div>

            {/* ROAS */}
            <div className="p-4 rounded-xl bg-[#14161F] border border-[#FF5500]/40 bg-[#FF5500]/5">
              <span className="text-[11px] text-[#FF5500] font-bold block">Blended ROAS</span>
              <span className="text-xl font-extrabold text-[#FF5500] block mt-1">{DEMO_SANDBOX_DATA.roas}</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Revenue Multiple</span>
            </div>
          </div>

          {/* Charts & Breakdown Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Main Growth Curve Chart */}
            <div className="lg:col-span-8 p-6 rounded-2xl bg-[#14161F]/60 border border-white/10 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-sm font-bold text-white">Daily Lead & Conversion Velocity</h4>
                  <p className="text-xs text-slate-400">Simulated 30-day performance curve</p>
                </div>
                <div className="flex items-center gap-4 text-xs font-medium">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5500]" />
                    <span className="text-slate-300">Leads</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                    <span className="text-slate-400">Ad Spend</span>
                  </div>
                </div>
              </div>

              {/* Bar Chart Visualization */}
              <div className="h-44 w-full flex items-end gap-2 pt-6">
                {[30, 45, 38, 60, 52, 75, 68, 88, 72, 95, 82, 100, 92, 110, 105].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.04 }}
                      className="w-full bg-gradient-to-t from-[#FF5500]/20 via-[#FF5500]/70 to-[#FF5500] rounded-t-sm"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Funnel Breakdown Card */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-[#14161F]/60 border border-white/10 flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-bold text-white mb-1">Conversion Funnel Drop-off</h4>
                <p className="text-xs text-slate-400 mb-4">Stage efficiency analysis</p>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1">
                      <span>Ad Impressions</span>
                      <span className="font-mono">1.8M</span>
                    </div>
                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                      <div className="bg-[#FF5500] h-full w-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1">
                      <span>Landing Page Views</span>
                      <span className="font-mono">32.4K (1.8%)</span>
                    </div>
                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                      <div className="bg-[#FF5500] h-full w-[65%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1">
                      <span>Form/WhatsApp Leads</span>
                      <span className="font-mono">1,240 (3.8%)</span>
                    </div>
                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                      <div className="bg-[#FF5500] h-full w-[40%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1">
                      <span>Closed Customers</span>
                      <span className="font-mono">114 (9.2%)</span>
                    </div>
                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-400 h-full w-[25%]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 mt-4">
                <span className="text-[11px] text-slate-500 font-medium block">
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
