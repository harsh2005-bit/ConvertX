"use client";

import React from "react";
import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Check } from "lucide-react";

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-16 sm:py-24 bg-[#060608] relative overflow-hidden border-t border-white/10">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-[#FF5500]/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <Badge variant="orange">Execution Blueprint</Badge>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Simple Process. <span className="text-gradient-orange">Serious Execution.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-lg text-slate-400">
            From initial strategy discovery to automated campaign scaling in 5 streamlined phases.
          </p>
        </div>

        {/* 5 Stage Horizontal/Vertical Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5 sm:gap-6 relative">
          {/* Subtle connection line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-[#FF5500]/20 via-[#FF5500] to-[#FF5500]/20 -translate-y-6 z-0" />

          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative z-10 p-5 sm:p-6 rounded-2xl bg-[#0D0E12] border border-white/10 hover:border-[#FF5500]/40 transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Number Badge */}
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-[#14161F] border border-white/10 text-[#FF5500] font-mono font-bold text-base sm:text-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#FF5500] group-hover:text-white transition-all shadow-md">
                  {step.number}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 sm:mb-2 group-hover:text-[#FF5500] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-5">
                  {step.description}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="pt-3.5 border-t border-white/5 space-y-1.5">
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider block">
                  Key Deliverables:
                </span>
                {step.deliverables.map((item) => (
                  <div key={item} className="flex items-center gap-1.5 text-[11px] text-slate-300">
                    <Check className="w-3 h-3 text-[#FF5500] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
