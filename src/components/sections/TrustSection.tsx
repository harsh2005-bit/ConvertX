"use client";

import React from "react";
import { motion } from "framer-motion";
import { TRUST_PILLARS } from "@/lib/constants";
import { Shield, CheckCircle2 } from "lucide-react";

export const TrustSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#060608] relative border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4">
            <Shield className="w-3.5 h-3.5 text-[#FF5500]" />
            <span>Honest & Outcome-Driven</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Built Around What <span className="text-gradient-orange">Actually Moves</span> the Business.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-400">
            No vanity metrics. No unnecessary complexity. Just systems designed around real business outcomes.
          </p>
        </div>

        {/* 5 Pillars Bar / Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {TRUST_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-[#0D0E12] border border-white/10 hover:border-[#FF5500]/40 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FF5500]/10 border border-[#FF5500]/30 flex items-center justify-center text-[#FF5500] mb-4 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-[#FF5500] transition-colors">
                {pillar.name}
              </h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Core Principles Statement Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0D0E12] via-[#14161F] to-[#0D0E12] border border-white/10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5500]/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-base sm:text-xl font-medium text-slate-200 max-w-4xl mx-auto leading-relaxed">
            &ldquo;Most marketing agencies charge for activity. ConvertX is built from the ground up around <span className="text-[#FF5500] font-semibold">conversion infrastructure, high-intent traffic, and scalable revenue growth.</span>&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
};
