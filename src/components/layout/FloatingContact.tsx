"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageSquare, X, ArrowUpRight, Sparkles, ChevronUp } from "lucide-react";
import { CONTACT_PHONE, CONTACT_CALL_URL, CONTACT_WHATSAPP_URL } from "@/lib/constants";

export const FloatingContact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Expanded Quick Contact Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 15 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="mb-3 w-[300px] sm:w-[320px] rounded-2xl bg-[var(--color-bg-card)]/95 border border-[var(--color-border)] p-4 shadow-2xl shadow-black/90 backdrop-blur-2xl overflow-hidden"
          >
            {/* Card Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[var(--color-border)] mb-3">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-brand)]/20 border border-[var(--color-brand)]/40 flex items-center justify-center text-[var(--color-brand)]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[var(--color-bg-card)] animate-pulse" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[var(--color-fg)] tracking-wide">ConvertX Growth Team</h4>
                  <p className="text-[10px] text-emerald-400 font-medium">Online • Instant Response</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] hover:bg-[var(--color-bg-subtle)] transition-colors"
                aria-label="Close contact popup"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Prompt text */}
            <p className="text-xs text-[var(--color-fg-muted)] mb-3 leading-relaxed">
              Need immediate growth strategy advice or ad campaign setup? Connect directly with us:
            </p>

            {/* Quick Action Buttons */}
            <div className="space-y-2">
              {/* WhatsApp Button */}
              <a
                href={CONTACT_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold transition-all shadow-md shadow-[#25D366]/20 group"
              >
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Call Phone Button */}
              <a
                href={CONTACT_CALL_URL}
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[var(--color-bg-card-elevated)] hover:bg-[var(--color-bg-card-elevated)] text-[var(--color-fg)] border border-[var(--color-border)] text-xs font-bold transition-all group"
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[var(--color-brand)]" />
                  <span>Call {CONTACT_PHONE}</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 text-[var(--color-fg-muted)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Book Strategy Session */}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-1.5 py-2 text-[11px] font-semibold text-[var(--color-fg-muted)] hover:text-[var(--color-brand)] transition-colors"
              >
                <span>Or submit business inquiry form</span>
                <ChevronUp className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Main Toggle Pill / Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`flex items-center gap-2.5 px-4 py-3 rounded-full shadow-2xl transition-all duration-300 border ${
          isOpen
            ? "bg-[var(--color-bg-card)] border-[var(--color-border)] text-[var(--color-fg)] shadow-black/80"
            : "bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white border-[var(--color-border)] shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50"
        }`}
        aria-label="Quick WhatsApp and Calling Options"
      >
        {isOpen ? (
          <>
            <X className="w-5 h-5" />
            <span className="text-xs font-bold tracking-wide">Close</span>
          </>
        ) : (
          <>
            <div className="relative">
              <MessageSquare className="w-5 h-5 fill-white text-[var(--color-fg)]" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping" />
            </div>
            <span className="text-xs font-bold tracking-wide">WhatsApp & Call</span>
          </>
        )}
      </motion.button>
    </div>
  );
};
