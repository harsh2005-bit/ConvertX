"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FUNNEL_STAGES } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { BackgroundDecoration } from "@/components/animations/BackgroundDecoration";
import {
  Megaphone,
  MousePointerClick,
  UserCheck,
  MessageCircle,
  DollarSign,
  Repeat,
  Zap,
  CheckCircle2
} from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  Megaphone: <Megaphone className="w-5 h-5" />,
  MousePointerClick: <MousePointerClick className="w-5 h-5" />,
  UserCheck: <UserCheck className="w-5 h-5" />,
  MessageCircle: <MessageCircle className="w-5 h-5" />,
  DollarSign: <DollarSign className="w-5 h-5" />,
  Repeat: <Repeat className="w-5 h-5" />,
};

export const GrowthSystem: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<number>(0);

  return (
    <section
      id="growth-system"
      className="py-20 sm:py-28 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <BackgroundDecoration variant="section" />

      {/* Radial glow backdrop */}
      <div
        className="absolute top-1/3 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full blur-[120px] sm:blur-[160px] pointer-events-none opacity-30 dark:opacity-40"
        style={{ backgroundColor: "var(--color-brand)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <ScrollReveal direction="up" delay={0.05}>
            <Badge variant="orange">Full Conversion Architecture</Badge>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.12}>
            <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight" style={{ color: "var(--color-fg)" }}>
              The Connected <span className="text-gradient-orange">Growth Engine</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.18}>
            <div
              className="mt-5 sm:mt-6 p-4 sm:p-6 rounded-2xl max-w-2xl mx-auto backdrop-blur-md relative overflow-hidden"
              style={{
                backgroundColor: "var(--color-bg-card)",
                border: "1px solid var(--color-brand-glow)",
                boxShadow: "var(--shadow-cta)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-20 pointer-events-none"
                style={{ backgroundColor: "var(--color-brand)" }}
              />
              <p className="text-base sm:text-xl font-bold leading-relaxed relative z-10" style={{ color: "var(--color-fg)" }}>
                &ldquo;Most businesses don&apos;t have an advertising problem. <br className="hidden sm:block" />
                <span style={{ color: "var(--color-brand)" }}>They have a conversion system problem.</span>&rdquo;
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.24}>
            <p className="mt-4 sm:mt-6 text-sm sm:text-lg leading-relaxed" style={{ color: "var(--color-fg-muted)" }}>
              ConvertX connects traffic, landers, instant messaging, and automation into one high-velocity revenue engine.
            </p>
          </ScrollReveal>
        </div>

        {/* Funnel Flow Visual Connector Bar (Desktop) */}
        <div className="hidden lg:flex items-center justify-between mb-4 px-6 relative" aria-hidden="true">
          <div className="absolute left-10 right-10 top-1/2 -translate-y-1/2 h-[2px] bg-[var(--color-border)] z-0" />
          <motion.div
            className="absolute left-10 right-10 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-brand)] to-transparent z-0"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          {FUNNEL_STAGES.map((_, i) => (
            <div
              key={i}
              className={`w-4 h-4 rounded-full z-10 transition-colors duration-300 border-2 ${
                selectedStage === i
                  ? "bg-[var(--color-brand)] border-[var(--color-brand)] shadow-[0_0_12px_var(--color-brand)]"
                  : "bg-[var(--color-bg-card)] border-[var(--color-border)]"
              }`}
            />
          ))}
        </div>

        {/* Funnel Stage Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 mb-8 sm:mb-12">
          {FUNNEL_STAGES.map((stage, idx) => {
            const isSelected = selectedStage === idx;
            return (
              <motion.button
                key={stage.title}
                onClick={() => setSelectedStage(idx)}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-3.5 sm:p-4 rounded-xl text-left transition-all duration-300 relative group cursor-pointer overflow-hidden"
                style={{
                  backgroundColor: isSelected ? "var(--color-bg-card-elevated)" : "var(--color-bg-card)",
                  border: isSelected ? "1px solid var(--color-brand)" : "1px solid var(--color-border)",
                  boxShadow: isSelected ? "var(--shadow-cta)" : "var(--shadow-card)",
                  transform: isSelected ? "scale(1.02)" : undefined,
                }}
              >
                {isSelected && (
                  <motion.div
                    layoutId="active-stage-indicator"
                    className="absolute top-0 left-0 right-0 h-1 bg-[var(--color-brand)]"
                  />
                )}
                <div className="flex items-center justify-between text-xs font-mono mb-1.5" style={{ color: "var(--color-fg-subtle)" }}>
                  <span>{stage.step}</span>
                  <span style={{ color: isSelected ? "var(--color-brand)" : "var(--color-fg-subtle)" }}>
                    {ICON_MAP[stage.icon]}
                  </span>
                </div>
                <h3
                  className="text-xs sm:text-sm font-bold group-hover:text-[--color-brand] transition-colors truncate"
                  style={{ color: "var(--color-fg)" }}
                >
                  {stage.title}
                </h3>
                <p className="text-[10px] sm:text-[11px] mt-0.5 line-clamp-1" style={{ color: "var(--color-fg-muted)" }}>
                  {stage.subtitle}
                </p>
              </motion.button>
            );
          })}
        </div>

        {/* Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedStage}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="p-6 sm:p-10 rounded-2xl sm:rounded-3xl backdrop-blur-xl relative overflow-hidden"
            style={{
              backgroundColor: "var(--color-bg-card)",
              border: "1px solid var(--color-border)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            {/* Ambient corner glow */}
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-15 pointer-events-none"
              style={{ backgroundColor: "var(--color-brand)" }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center relative z-10">

              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2 text-[--color-brand]">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Stage {FUNNEL_STAGES[selectedStage].step} Connected Architecture</span>
                </div>
                <h3 className="text-xl sm:text-3xl font-extrabold mb-3" style={{ color: "var(--color-fg)" }}>
                  {FUNNEL_STAGES[selectedStage].title}: {FUNNEL_STAGES[selectedStage].subtitle}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed mb-6" style={{ color: "var(--color-fg-muted)" }}>
                  {FUNNEL_STAGES[selectedStage].description}
                </p>

                <div
                  className="p-4 rounded-xl sm:rounded-2xl"
                  style={{ backgroundColor: "var(--color-bg-card-elevated)", border: "1px solid var(--color-border)" }}
                >
                  <span className="text-xs font-semibold block mb-2.5" style={{ color: "var(--color-fg-muted)" }}>
                    Integrated Technology Components:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {["Meta Conversion API", "High-Speed Landers", "WhatsApp Business Cloud", "AI Lead Qualification", "Automated CRM Sync"].map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium"
                        style={{
                          backgroundColor: "var(--color-bg-card)",
                          border: "1px solid var(--color-border)",
                          color: "var(--color-fg)",
                        }}
                      >
                        <CheckCircle2 className="w-3 h-3 text-[--color-brand]" />
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Panel Simulation */}
              <div
                className="lg:col-span-5 flex flex-col justify-center p-6 rounded-2xl"
                style={{ backgroundColor: "var(--color-bg-card-elevated)", border: "1px solid var(--color-border)" }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="p-4 rounded-2xl text-[--color-brand] shrink-0"
                    style={{
                      backgroundColor: "var(--color-brand-subtle)",
                      border: "1px solid var(--color-brand-glow)",
                    }}
                  >
                    {ICON_MAP[FUNNEL_STAGES[selectedStage].icon]}
                  </div>
                  <div>
                    <span className="text-[11px] block uppercase font-mono" style={{ color: "var(--color-fg-muted)" }}>
                      Funnel Efficiency
                    </span>
                    <span className="text-xl font-bold" style={{ color: "var(--color-fg)" }}>
                      Automated 24/7 Engine
                    </span>
                    <span className="text-xs block mt-0.5 text-emerald-500 font-semibold">
                      Instant 0s Response Time
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[var(--color-border)] flex items-center justify-between text-xs font-medium" style={{ color: "var(--color-fg-muted)" }}>
                  <span>Stage Transition Velocity</span>
                  <span className="text-[--color-brand] font-semibold">Optimized Lead Route</span>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

