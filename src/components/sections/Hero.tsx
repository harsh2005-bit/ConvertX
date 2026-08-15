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
    <section id="hero" className="relative pt-28 pb-16 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background ambient electric orange glow highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[250px] sm:h-[350px] bg-[#FF5500]/15 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-5 sm:right-10 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-[#FF8800]/10 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column - Headline & Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <Badge variant="orange" icon={<Sparkles className="w-3.5 h-3.5" />}>
              Performance Marketing & Tech Startup
            </Badge>

            <h1 className="mt-5 sm:mt-6 text-3xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white">
              Turn Attention Into <span className="text-gradient-orange">Revenue.</span>
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
              Meta Ads, Instagram Ads, WhatsApp automation, websites and growth systems designed to turn attention into measurable business results.
            </p>

            {/* CTAs */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <Button href="#contact" variant="primary" size="lg" className="w-full sm:w-auto justify-center" showArrow>
                Book a Free Strategy Call
              </Button>
              <Button href="#services" variant="secondary" size="lg" className="w-full sm:w-auto justify-center">
                Explore Our Services
              </Button>
            </div>

            {/* Trust Statement */}
            <div className="mt-8 sm:mt-10 flex items-center gap-3 pt-5 border-t border-white/10 w-full">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5500] animate-pulse shrink-0" />
              <p className="text-xs sm:text-sm font-medium text-slate-400">
                Built for businesses that want measurable growth.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Animated Campaign Performance Visual Concept */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative w-full"
          >
            {/* Visual Container Card */}
            <div className="relative rounded-2xl bg-[#0D0E12]/90 border border-white/15 p-4 sm:p-6 backdrop-blur-xl shadow-2xl shadow-black/80 overflow-hidden">
              {/* Concept Tag Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-white/10 mb-4 sm:mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5500]" />
                  <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-slate-300 uppercase">
                    Growth Dashboard Simulation
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-400">
                  Concept Demo
                </span>
              </div>

              {/* 4 Metric Cards Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {/* Ad Spend */}
                <div className="p-3 sm:p-4 rounded-xl bg-[#14161F]/80 border border-white/10 hover:border-[#FF5500]/30 transition-colors">
                  <div className="flex items-center justify-between text-slate-400 text-[11px] sm:text-xs mb-1.5">
                    <span>Ad Spend</span>
                    <TrendingUp className="w-3.5 h-3.5 text-[#FF5500]" />
                  </div>
                  <div className="text-lg sm:text-2xl font-bold text-white tracking-tight">
                    {HERO_DEMO_METRICS.spend}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-[#FF5500] font-medium mt-0.5 truncate">
                    Optimized allocation
                  </div>
                </div>

                {/* Leads */}
                <div className="p-3 sm:p-4 rounded-xl bg-[#14161F]/80 border border-white/10 hover:border-[#FF5500]/30 transition-colors">
                  <div className="flex items-center justify-between text-slate-400 text-[11px] sm:text-xs mb-1.5">
                    <span>Leads</span>
                    <Users className="w-3.5 h-3.5 text-[#FF5500]" />
                  </div>
                  <div className="text-lg sm:text-2xl font-bold text-white tracking-tight">
                    <Counter end={1842} duration={2000} />
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-emerald-400 font-medium mt-0.5 truncate">
                    +24% vs benchmark
                  </div>
                </div>

                {/* Conversion Rate */}
                <div className="p-3 sm:p-4 rounded-xl bg-[#14161F]/80 border border-white/10 hover:border-[#FF5500]/30 transition-colors">
                  <div className="flex items-center justify-between text-slate-400 text-[11px] sm:text-xs mb-1.5">
                    <span>Conversion Rate</span>
                    <Target className="w-3.5 h-3.5 text-[#FF5500]" />
                  </div>
                  <div className="text-lg sm:text-2xl font-bold text-white tracking-tight">
                    <Counter end={8.7} decimals={1} suffix="%" duration={2200} />
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 truncate">
                    High intent funnel
                  </div>
                </div>

                {/* ROAS */}
                <div className="p-3 sm:p-4 rounded-xl bg-[#14161F]/80 border border-white/10 hover:border-[#FF5500]/30 transition-colors">
                  <div className="flex items-center justify-between text-slate-400 text-[11px] sm:text-xs mb-1.5">
                    <span>ROAS</span>
                    <Zap className="w-3.5 h-3.5 text-[#FF5500]" />
                  </div>
                  <div className="text-lg sm:text-2xl font-bold text-[#FF5500] tracking-tight">
                    <Counter end={4.8} decimals={1} suffix="x" duration={2400} />
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 truncate">
                    Scalable return
                  </div>
                </div>
              </div>

              {/* Animated Graph Sparkline Concept */}
              <div className="mt-4 sm:mt-6 p-3.5 sm:p-4 rounded-xl bg-[#14161F]/60 border border-white/10">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2.5">
                  <span>Conversion Velocity</span>
                  <span className="text-[#FF5500] font-semibold">Live System</span>
                </div>
                <div className="h-16 sm:h-20 w-full flex items-end justify-between gap-1 pt-2">
                  {[40, 55, 35, 65, 80, 70, 95, 85, 100].map((val, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ height: 0 }}
                      animate={{ height: `${val}%` }}
                      transition={{ duration: 0.8, delay: idx * 0.08 }}
                      className="w-full bg-gradient-to-t from-[#FF5500]/30 to-[#FF5500] rounded-t-sm"
                    />
                  ))}
                </div>
              </div>

              {/* Transparent Disclaimer */}
              <div className="mt-3 pt-2 text-center border-t border-white/5">
                <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium">
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
