"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_LIST, CONTACT_PHONE, CONTACT_CALL_URL, CONTACT_WHATSAPP_URL } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Plus, Minus, HelpCircle, MessageSquare, Phone } from "lucide-react";

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[var(--color-bg)] relative border-t border-[var(--color-border)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="orange" icon={<HelpCircle className="w-3.5 h-3.5" />}>
            Common Questions
          </Badge>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-[var(--color-fg)] tracking-tight">
            Frequently Asked <span className="text-gradient-orange">Questions.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--color-fg-muted)]">
            Clear answers about our performance marketing, WhatsApp automation, and tech execution.
          </p>
        </div>

        {/* 10 Accordion Items */}
        <div className="space-y-4">
          {FAQ_LIST.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[var(--color-bg-card)] border-[var(--color-brand)]/50 shadow-lg shadow-[var(--color-brand)]/10"
                    : "bg-[var(--color-bg-card)] border-[var(--color-border)] hover:border-[var(--color-border)]"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[var(--color-fg)] pr-4">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? "bg-[var(--color-brand)] text-white"
                        : "bg-[var(--color-bg-card-elevated)] text-[var(--color-fg-muted)] border border-[var(--color-border)]"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-[var(--color-fg-muted)] leading-relaxed border-t border-[var(--color-border)]">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 p-6 sm:p-8 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold text-[var(--color-fg)] mb-1">
              Have a specific question about your brand?
            </h3>
            <p className="text-xs sm:text-sm text-[var(--color-fg-muted)]">
              Get an instant answer from our growth specialists on WhatsApp or via direct call.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={CONTACT_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#20ba59] transition-all shadow-md shadow-[#25D366]/20"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Ask on WhatsApp</span>
            </a>
            <a
              href={CONTACT_CALL_URL}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--color-bg-card-elevated)] text-[var(--color-fg)] border border-[var(--color-border)] text-xs font-bold hover:border-[var(--color-brand)]/50 hover:text-[var(--color-brand)] transition-all"
            >
              <Phone className="w-4 h-4 text-[var(--color-brand)]" />
              <span>{CONTACT_PHONE}</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
