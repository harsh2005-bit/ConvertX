"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Sparkles, MessageSquare, Phone } from "lucide-react";
import { CONTACT_WHATSAPP_URL, CONTACT_CALL_URL, CONTACT_PHONE } from "@/lib/constants";

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-[var(--color-bg)] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--color-brand-subtle)] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-b from-[var(--color-bg-card)] via-[var(--color-bg-card-elevated)] to-[var(--color-bg-card)] border border-[var(--color-brand)]/30 p-10 sm:p-16 text-center relative overflow-hidden shadow-2xl shadow-[var(--color-brand)]/10">
          
          {/* Subtle top light bar */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[var(--color-brand)] to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-brand-subtle)] border border-[var(--color-brand)]/30 text-xs font-bold uppercase tracking-wider text-[var(--color-brand)] mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Scale Your Revenue Engine</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--color-fg)] tracking-tight leading-tight">
              Ready To Turn Attention <br />
              Into <span className="text-gradient-orange">Growth?</span>
            </h2>

            <p className="mt-6 text-base sm:text-xl text-[var(--color-fg-muted)] leading-relaxed max-w-2xl mx-auto">
              Let&apos;s build a marketing system that brings your business more leads, conversations and customers.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="#contact" variant="primary" size="lg" showArrow>
                Book a Call
              </Button>
              <a
                href={CONTACT_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-lg shadow-[#25D366]/20 hover:-translate-y-0.5 transition-all"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Direct Call Link */}
            <div className="mt-6">
              <a
                href={CONTACT_CALL_URL}
                className="inline-flex items-center gap-2 text-xs sm:text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[var(--color-brand)]" />
                <span>Prefer a quick phone call? Reach us directly at <strong className="text-[var(--color-fg)] hover:text-[var(--color-brand)] underline">{CONTACT_PHONE}</strong></span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
