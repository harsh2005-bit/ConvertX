"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SchemaJsonLd } from "@/components/seo/SchemaJsonLd";
import { generateServiceSchema, generateFAQSchema } from "@/lib/json-ld";
import { CONTACT_PHONE, CONTACT_CALL_URL, CONTACT_WHATSAPP_URL } from "@/lib/constants";
import {
  CheckCircle2,
  Sparkles,
  Plus,
  Minus,
  MessageSquare,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface IndustryPageProps {
  id: string;
  badge: string;
  h1Title: string;
  subtitle: string;
  description: string;
  url: string;
  metrics: Array<{ label: string; value: string; desc: string }>;
  challenges: Array<{
    title: string;
    description: string;
  }>;
  strategies: Array<{
    title: string;
    description: string;
    deliverables: string[];
  }>;
  funnelArchitecture: Array<{
    stage: string;
    name: string;
    description: string;
    tools: string[];
  }>;
  whatsappPlaybook: {
    title: string;
    description: string;
    flows: string[];
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  recommendedServices: Array<{
    title: string;
    href: string;
  }>;
  otherIndustries: Array<{
    title: string;
    href: string;
  }>;
}

export const IndustryPageTemplate: React.FC<IndustryPageProps> = (props) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const serviceSchema = generateServiceSchema({
    name: props.h1Title,
    description: props.description,
    url: props.url,
    serviceType: "Industry Growth Strategy & Performance Marketing",
  });

  const faqSchema = generateFAQSchema({
    faqs: props.faqs,
  });

  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-fg)] relative overflow-hidden">
      <SchemaJsonLd schema={serviceSchema} />
      <SchemaJsonLd schema={faqSchema} />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-grid-pattern relative">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[var(--color-brand-subtle)] rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-6">
            <Breadcrumb
              items={[
                { name: "Industries", url: "/#industries" },
                { name: props.h1Title, url: props.url },
              ]}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <Badge variant="orange" icon={<Sparkles className="w-3.5 h-3.5" />}>
                {props.badge}
              </Badge>

              <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--color-fg)] leading-[1.15]">
                {props.h1Title}
              </h1>

              <p className="mt-4 text-lg sm:text-xl font-medium text-[var(--color-fg)]">
                {props.subtitle}
              </p>

              <p className="mt-3 text-sm sm:text-base text-[var(--color-fg-muted)] max-w-2xl leading-relaxed">
                {props.description}
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Button href="/#contact" variant="primary" size="lg" showArrow>
                  Book Industry Growth Call
                </Button>
                <a
                  href={CONTACT_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-semibold shadow-lg shadow-[#25D366]/20 transition-all text-center"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Metrics Showcase Card */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-3xl bg-[var(--color-bg-card)]/90 border border-[var(--color-border)] backdrop-blur-xl shadow-2xl space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-brand)] font-bold block mb-2">
                  📊 Vertical Benchmarks
                </span>
                <div className="grid grid-cols-2 gap-3.5">
                  {props.metrics.map((m, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-[var(--color-bg-card-elevated)] border border-[var(--color-border)]">
                      <span className="text-[11px] text-[var(--color-fg-muted)] block mb-1">{m.label}</span>
                      <span className="text-xl sm:text-2xl font-bold text-[var(--color-fg)] block mb-1">
                        {m.value}
                      </span>
                      <span className="text-[10px] text-[var(--color-fg-muted)] leading-tight block">
                        {m.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Marketing Challenges */}
      <section className="py-16 sm:py-20 bg-[var(--color-bg-subtle)] border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-fg-muted)] font-bold block mb-2">
              Specific Industry Bottlenecks
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--color-fg)] tracking-tight">
              Why Generic Marketing Fails In This Vertical.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {props.challenges.map((chal, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[var(--color-bg-card)] border border-red-500/20">
                <span className="text-xs font-mono font-bold text-red-400 block mb-2">
                  Bottleneck 0{idx + 1}
                </span>
                <h3 className="text-base font-bold text-[var(--color-fg)] mb-2">{chal.title}</h3>
                <p className="text-xs sm:text-sm text-[var(--color-fg-muted)] leading-relaxed">{chal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tailored Growth Strategy */}
      <section className="py-20 sm:py-24 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="orange">ConvertX Playbook</Badge>
            <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-[var(--color-fg)] tracking-tight">
              The Tailored Growth Strategy.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {props.strategies.map((strat, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-brand)]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-subtle)] text-[var(--color-brand)] flex items-center justify-center font-bold text-sm mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-fg)] mb-2">{strat.title}</h3>
                  <p className="text-xs sm:text-sm text-[var(--color-fg-muted)] mb-6 leading-relaxed">
                    {strat.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-[var(--color-border)] space-y-2">
                  {strat.deliverables.map((deliv, dIdx) => (
                    <div key={dIdx} className="text-xs text-[var(--color-fg-muted)] flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funnel Architecture */}
      <section className="py-20 sm:py-24 bg-[var(--color-bg-subtle)] border-t border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-brand)] font-bold block mb-2">
              Funnel Architecture
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--color-fg)] tracking-tight">
              How Attention Converts into Revenue.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {props.funnelArchitecture.map((stage, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] relative">
                <span className="text-xs font-mono text-[var(--color-brand)] uppercase font-bold block mb-2">
                  {stage.stage}
                </span>
                <h3 className="text-base font-bold text-[var(--color-fg)] mb-2">{stage.name}</h3>
                <p className="text-xs text-[var(--color-fg-muted)] leading-relaxed mb-4">{stage.description}</p>
                <div className="pt-3 border-t border-[var(--color-border)] flex flex-wrap gap-1.5">
                  {stage.tools.map((t, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 rounded bg-[var(--color-bg-card-elevated)] text-[10px] text-[var(--color-fg-muted)]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Automation Playbook */}
      <section className="py-16 sm:py-20 bg-[var(--color-bg)] border-t border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[var(--color-bg-card-elevated)] via-[var(--color-bg-card)] to-[var(--color-bg-card)] border border-[#25D366]/40 shadow-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#25D366] font-bold mb-3">
              <MessageSquare className="w-4 h-4" />
              <span>Dedicated WhatsApp Playbook</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-fg)] mb-3">
              {props.whatsappPlaybook.title}
            </h2>
            <p className="text-xs sm:text-sm text-[var(--color-fg-muted)] mb-6 leading-relaxed">
              {props.whatsappPlaybook.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {props.whatsappPlaybook.flows.map((flow, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span className="text-xs text-[var(--color-fg)]">{flow}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-24 bg-[var(--color-bg-subtle)] border-t border-[var(--color-border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--color-fg)] tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {props.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all ${
                    isOpen ? "bg-[var(--color-bg-card)] border-[var(--color-brand)]/50" : "bg-[var(--color-bg-card)] border-[var(--color-border)]"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-[var(--color-fg)]">{faq.question}</span>
                    <div className="w-7 h-7 rounded-full bg-[var(--color-bg-card-elevated)] flex items-center justify-center shrink-0">
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                      >
                        <div className="px-6 pb-5 text-xs sm:text-sm text-[var(--color-fg-muted)] leading-relaxed border-t border-[var(--color-border)] pt-2">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cross Links */}
      <section className="py-16 bg-[var(--color-bg)] border-t border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-base font-bold text-[var(--color-fg)] mb-4">Recommended Core Capabilities:</h3>
              <div className="flex flex-wrap gap-2.5">
                {props.recommendedServices.map((rs, idx) => (
                  <Link
                    key={idx}
                    href={rs.href}
                    className="px-4 py-2.5 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-brand)]/40 text-xs font-bold text-[var(--color-fg)] hover:text-[var(--color-brand)] transition-all"
                  >
                    {rs.title}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-base font-bold text-[var(--color-fg)] mb-4">Other High-Growth Industries:</h3>
              <div className="grid grid-cols-2 gap-2.5">
                {props.otherIndustries.map((ind, idx) => (
                  <Link
                    key={idx}
                    href={ind.href}
                    className="p-3 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-brand)]/40 text-xs font-semibold text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-all text-center truncate"
                  >
                    {ind.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Conversion Section */}
      <section className="py-20 bg-[var(--color-bg-subtle)] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[var(--color-bg-card-elevated)] to-[var(--color-bg-card)] border border-[var(--color-brand)]/40 shadow-2xl">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--color-fg)] mb-4">
              Scale Your {props.h1Title} Brand
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-fg-muted)] max-w-xl mx-auto mb-8 leading-relaxed">
              Book a 30-minute growth session or chat with our vertical strategists directly on WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Button href="/#contact" variant="primary" size="lg" showArrow>
                Book a Free Strategy Call
              </Button>
              <a
                href={CONTACT_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-base font-semibold shadow-lg shadow-[#25D366]/20 transition-all"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
            <div className="mt-6">
              <a
                href={CONTACT_CALL_URL}
                className="text-xs text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors"
              >
                Or call our team directly at <strong className="text-[var(--color-fg)] underline">{CONTACT_PHONE}</strong>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </main>
  );
};
