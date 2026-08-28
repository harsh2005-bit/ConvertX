"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FUNNEL_STAGES } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import {
  Megaphone,
  MousePointerClick,
  UserCheck,
  MessageCircle,
  DollarSign,
  Repeat
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
      className="py-16 sm:py-24 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      {/* Radial glow backdrop */}
      <div
        className="absolute top-1/3 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full blur-[100px] sm:blur-[150px] pointer-events-none"
        style={{ backgroundColor: "var(--color-brand-subtle)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Badge variant="orange">Full Conversion Architecture</Badge>

          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight" style={{ color: "var(--color-fg)" }}>
            The Connected <span className="text-gradient-orange">Growth Engine</span>
          </h2>

          <div
            className="mt-5 sm:mt-6 p-4 sm:p-6 rounded-2xl max-w-2xl mx-auto"
            style={{
              backgroundColor: "var(--color-bg-card)",
              border: "1px solid var(--color-brand-glow)",
              boxShadow: "var(--shadow-cta)",
            }}
          >
            <p className="text-base sm:text-xl font-bold leading-relaxed" style={{ color: "var(--color-fg)" }}>
              &ldquo;Most businesses don&apos;t have an advertising problem. <br className="hidden sm:block" />
              <span style={{ color: "var(--color-brand)" }}>They have a conversion system problem.</span>&rdquo;
            </p>
          </div>

          <p className="mt-4 sm:mt-6 text-sm sm:text-lg" style={{ color: "var(--color-fg-muted)" }}>
            ConvertX connects traffic, landers, instant messaging, and automation into one high-velocity revenue engine.
          </p>
        </div>

        {/* Funnel Stage Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 mb-8 sm:mb-12">
          {FUNNEL_STAGES.map((stage, idx) => (
            <motion.button
              key={stage.title}
              onClick={() => setSelectedStage(idx)}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-3.5 sm:p-4 rounded-xl text-left transition-all duration-300 relative group cursor-pointer"
              style={{
                backgroundColor: selectedStage === idx ? "var(--color-bg-card-elevated)" : "var(--color-bg-card)",
                border: selectedStage === idx ? "1px solid var(--color-brand)" : "1px solid var(--color-border)",
                boxShadow: selectedStage === idx ? "var(--shadow-cta)" : "var(--shadow-card)",
                transform: selectedStage === idx ? "scale(1.02)" : undefined,
              }}
            >
              <div className="flex items-center justify-between text-xs font-mono mb-1.5" style={{ color: "var(--color-fg-subtle)" }}>
                <span>{stage.step}</span>
                <span style={{ color: selectedStage === idx ? "var(--color-brand)" : "var(--color-fg-subtle)" }}>
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
          ))}
        </div>

        {/* Detail Panel */}
        <motion.div
          key={selectedStage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="p-5 sm:p-8 rounded-2xl backdrop-blur-xl relative overflow-hidden"
          style={{
            backgroundColor: "var(--color-bg-card)",
            border: "1px solid var(--color-border)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">

            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2 text-[--color-brand]">
                <span>Stage {FUNNEL_STAGES[selectedStage].step} Architecture</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-extrabold mb-3" style={{ color: "var(--color-fg)" }}>
                {FUNNEL_STAGES[selectedStage].title}: {FUNNEL_STAGES[selectedStage].subtitle}
              </h3>
              <p className="text-sm sm:text-base leading-relaxed mb-5" style={{ color: "var(--color-fg-muted)" }}>
                {FUNNEL_STAGES[selectedStage].description}
              </p>

              <div
                className="p-3.5 sm:p-4 rounded-xl"
                style={{ backgroundColor: "var(--color-bg-card-elevated)", border: "1px solid var(--color-border)" }}
              >
                <span className="text-xs font-semibold block mb-2" style={{ color: "var(--color-fg-muted)" }}>
                  System Integration Stack:
                </span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {["Meta Ads", "Landing Page", "WhatsApp API", "AI Automation", "Nurture Bot"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-medium"
                      style={{
                        backgroundColor: "var(--color-bg-card)",
                        border: "1px solid var(--color-border)",
                        color: "var(--color-fg)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Panel */}
            <div
              className="lg:col-span-5 flex items-center justify-center p-4 sm:p-6 rounded-xl"
              style={{ backgroundColor: "var(--color-bg-card-elevated)", border: "1px solid var(--color-border)" }}
            >
              <div className="flex items-center gap-3.5 sm:gap-4 text-center">
                <div
                  className="p-3.5 sm:p-4 rounded-full text-[--color-brand] shrink-0"
                  style={{
                    backgroundColor: "var(--color-brand-subtle)",
                    border: "1px solid var(--color-brand-glow)",
                  }}
                >
                  {ICON_MAP[FUNNEL_STAGES[selectedStage].icon]}
                </div>
                <div className="text-left">
                  <span className="text-[11px] sm:text-xs block uppercase font-mono" style={{ color: "var(--color-fg-muted)" }}>
                    Conversion Velocity
                  </span>
                  <span className="text-lg sm:text-xl font-bold" style={{ color: "var(--color-fg)" }}>
                    99.4% Uptime
                  </span>
                  <span className="text-[11px] sm:text-xs block mt-0.5 text-emerald-500">
                    Automated 24/7 Engine
                  </span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
