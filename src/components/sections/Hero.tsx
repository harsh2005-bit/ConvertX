"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Counter } from "@/components/ui/Counter";
import { HERO_DEMO_METRICS } from "@/lib/constants";
import { FloatingElement } from "@/components/animations/FloatingElement";
import { FloatingTechLogos } from "@/components/animations/FloatingTechLogos";
import { BackgroundDecoration } from "@/components/animations/BackgroundDecoration";
import { Sparkles, TrendingUp, Users, Target, Zap, ShieldCheck, Activity } from "lucide-react";

export const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width - 0.5) * 20;
    const y = ((clientY - top) / height - 0.5) * 20;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative pt-28 pb-16 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <BackgroundDecoration variant="hero" />

      {/* Ambient glowing radial orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[250px] sm:h-[400px] rounded-full blur-[110px] sm:blur-[160px] pointer-events-none bg-[--color-brand-glow] opacity-50 dark:opacity-80" />
      <div
        className="absolute top-1/3 right-5 sm:right-10 w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] rounded-full blur-[80px] sm:blur-[120px] pointer-events-none"
        style={{ backgroundColor: "rgba(255,106,0,0.08)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Badge variant="orange" icon={<Sparkles className="w-3.5 h-3.5" />}>
                Meta Ads & WhatsApp Growth Infrastructure in India
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 sm:mt-6 text-3xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]"
              style={{ color: "var(--color-fg)" }}
            >
              Turn Attention Into{" "}
              <span className="text-gradient-orange inline-block hover:scale-[1.02] transition-transform cursor-default">
                Revenue.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
              className="mt-4 sm:mt-6 text-base sm:text-xl max-w-2xl leading-relaxed"
              style={{ color: "var(--color-fg-muted)" }}
            >
              Meta Ads, Instagram Ads, WhatsApp automation, websites and growth systems designed to turn attention into measurable business results.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3, ease: "easeOut" }}
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto"
            >
              <Button href="/#contact" variant="primary" size="lg" className="w-full sm:w-auto justify-center group" showArrow>
                <span>Book a Call</span>
              </Button>
              <Button href="/#services" variant="secondary" size="lg" className="w-full sm:w-auto justify-center">
                Explore Our Services
              </Button>
            </motion.div>

            {/* Trust Banner Bar */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.4, ease: "easeOut" }}
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6 pt-5 w-full"
              style={{ borderTop: "1px solid var(--color-border)" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[--color-brand] animate-pulse shrink-0" />
                <span className="text-xs sm:text-sm font-medium" style={{ color: "var(--color-fg-muted)" }}>
                  High-intent conversion systems
                </span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[--color-brand] shrink-0" />
                <span className="text-xs sm:text-sm font-medium" style={{ color: "var(--color-fg-muted)" }}>
                  Verified API integrations
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column — Interactive 3D/Parallax Dashboard with Floating Badges & Floating Tech Logos */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative w-full"
            style={{
              transform: `perspective(1000px) rotateY(${mousePos.x * 0.4}deg) rotateX(${-mousePos.y * 0.4}deg)`,
              transition: "transform 0.2s ease-out",
            }}
          >
            {/* Dynamic Floating Technology Logos drifting around dashboard */}
            <FloatingTechLogos mousePos={mousePos} />

            {/* Top Floating Badge */}
            <div className="hidden sm:block absolute -top-4 -right-4 z-20">
              <FloatingElement duration={4} distance={6} rotation={2}>
                <div
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold shadow-lg backdrop-blur-xl border border-[--color-border]"
                  style={{
                    backgroundColor: "var(--color-bg-card)",
                    color: "var(--color-fg)",
                    boxShadow: "0 10px 25px -5px rgba(0,0,0,0.2)",
                  }}
                >
                  <Activity className="w-4 h-4 text-emerald-500 animate-" />
                  <span>Real-Time WhatsApp Bot Active</span>
                </div>
              </FloatingElement>
            </div>

            {/* Bottom Floating Badge */}
            <div className="hidden sm:block absolute -bottom-5 -left-4 z-20">
              <FloatingElement duration={5} distance={8} delay={1} rotation={-2}>
                <div
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold shadow-lg backdrop-blur-xl border border-[--color-border]"
                  style={{
                    backgroundColor: "var(--color-bg-card)",
                    color: "var(--color-fg)",
                    boxShadow: "0 10px 25px -5px rgba(0,0,0,0.2)",
                  }}
                >
                  <span className="text-[--color-brand]">⚡</span>
                  <span>Target ROAS: 4.8x Model</span>
                </div>
              </FloatingElement>
            </div>

            {/* Main Glass Dashboard */}
            <div className="hero-dashboard relative rounded-2xl sm:rounded-3xl p-4 sm:p-6 overflow-hidden">
              {/* Header */}
              <div
                className="flex items-center justify-between pb-3.5 mb-4 sm:mb-6"
                style={{ borderBottom: "1px solid var(--color-border)" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[--color-brand] animate-pulse" />
                  <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#A7A7A7]">
                    Growth Engine Simulation
                  </span>
                </div>
                <span
                  className="text-[10px] sm:text-[11px] px-2.5 py-0.5 rounded-full font-semibold"
                  style={{
                    backgroundColor: "var(--color-bg-subtle)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-fg-muted)",
                  }}
                >
                  Model Demo
                </span>
              </div>

              {/* 4 Metric Cards */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {/* Ad Spend */}
                <div
                  className="p-3 sm:p-4 rounded-xl transition-all duration-300 hover:border-[--color-brand] group"
                  style={{ backgroundColor: "var(--color-bg-card-elevated)", border: "1px solid var(--color-border)" }}
                >
                  <div className="flex items-center justify-between text-[11px] sm:text-xs mb-1.5" style={{ color: "var(--color-fg-muted)" }}>
                    <span>Ad Spend</span>
                    <TrendingUp className="w-3.5 h-3.5 text-[--color-brand] group-hover:translate-x-0.5 transition-transform" />
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
                  className="p-3 sm:p-4 rounded-xl transition-all duration-300 hover:border-[--color-brand] group"
                  style={{ backgroundColor: "var(--color-bg-card-elevated)", border: "1px solid var(--color-border)" }}
                >
                  <div className="flex items-center justify-between text-[11px] sm:text-xs mb-1.5" style={{ color: "var(--color-fg-muted)" }}>
                    <span>Leads</span>
                    <Users className="w-3.5 h-3.5 text-[--color-brand] group-hover:scale-110 transition-transform" />
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
                  className="p-3 sm:p-4 rounded-xl transition-all duration-300 hover:border-[--color-brand] group"
                  style={{ backgroundColor: "var(--color-bg-card-elevated)", border: "1px solid var(--color-border)" }}
                >
                  <div className="flex items-center justify-between text-[11px] sm:text-xs mb-1.5" style={{ color: "var(--color-fg-muted)" }}>
                    <span>Conversion Rate</span>
                    <Target className="w-3.5 h-3.5 text-[--color-brand] group-hover:rotate-45 transition-transform" />
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
                  className="p-3 sm:p-4 rounded-xl transition-all duration-300 hover:border-[--color-brand] group"
                  style={{ backgroundColor: "var(--color-bg-card-elevated)", border: "1px solid var(--color-border)" }}
                >
                  <div className="flex items-center justify-between text-[11px] sm:text-xs mb-1.5" style={{ color: "var(--color-fg-muted)" }}>
                    <span>ROAS</span>
                    <Zap className="w-3.5 h-3.5 text-[--color-brand] group-hover:scale-110 transition-transform" />
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
                  <span className="text-[--color-brand] font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[--color-brand] animate-ping" />
                    Live System
                  </span>
                </div>
                <div className="h-16 sm:h-20 w-full flex items-end justify-between gap-1 pt-2">
                  {[40, 55, 35, 65, 80, 70, 95, 85, 100].map((val, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ height: 0 }}
                      animate={{ height: `${val}%` }}
                      transition={{ duration: 0.8, delay: 0.3 + idx * 0.08 }}
                      className="w-full rounded-t-sm relative group cursor-pointer"
                      style={{
                        background: `linear-gradient(to top, rgba(255,106,0,0.25), rgba(255,106,0,0.9))`,
                      }}
                    >
                      <div className="opacity-0 group-hover:opacity-100 absolute -top-6 left-1/2 -translate-x-1/2 bg-[var(--color-bg)] text-[9px] px-1.5 py-0.5 rounded shadow text-[var(--color-fg)] transition-opacity pointer-events-none whitespace-nowrap">
                        {val}%
                      </div>
                    </motion.div>
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

