"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Sparkles, ArrowRight } from "lucide-react";

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-[#060608] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#FF5500]/15 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-b from-[#0D0E12] via-[#14161F] to-[#0D0E12] border border-[#FF5500]/30 p-10 sm:p-16 text-center relative overflow-hidden shadow-2xl shadow-[#FF5500]/10">
          
          {/* Subtle top light bar */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#FF5500] to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5500]/10 border border-[#FF5500]/30 text-xs font-bold uppercase tracking-wider text-[#FF5500] mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Scale Your Revenue Engine</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Ready To Turn Attention <br />
              Into <span className="text-gradient-orange">Growth?</span>
            </h2>

            <p className="mt-6 text-base sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Let&apos;s build a marketing system that brings your business more leads, conversations and customers.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="#contact" variant="primary" size="lg" showArrow>
                Book a Free Strategy Call
              </Button>
              <Button href="#contact" variant="secondary" size="lg">
                Talk to ConvertX
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
