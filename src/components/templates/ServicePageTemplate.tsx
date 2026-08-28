"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
  ArrowRight,
  Plus,
  Minus,
  MessageSquare,
  ShieldCheck,
  Zap,
} from "lucide-react";

export interface ServicePageProps {
  id: string;
  badge: string;
  h1Title: string;
  subtitle: string;
  description: string;
  url: string;
  serviceType: string;
  metrics: Array<{ label: string; value: string; desc: string }>;
  problemSolution: {
    problemTitle: string;
    problems: string[];
    solutionTitle: string;
    solutions: string[];
  };
  features: Array<{
    title: string;
    description: string;
    deliverables: string[];
    badge?: string;
  }>;
  processSteps: Array<{
    step: string;
    title: string;
    description: string;
    outcome: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  relatedServices: Array<{
    title: string;
    href: string;
    description: string;
  }>;
  relatedIndustries: Array<{
    title: string;
    href: string;
  }>;
}

export const ServicePageTemplate: React.FC<ServicePageProps> = (props) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const serviceSchema = generateServiceSchema({
    name: props.h1Title,
    description: props.description,
    url: props.url,
    serviceType: props.serviceType,
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
            <Breadcrumb items={[{ name: props.h1Title, url: props.url }]} />
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
                  Book Free Strategy Call
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

              {/* Trust Tag */}
              <div className="mt-8 pt-4 border-t border-[var(--color-border)] flex items-center gap-4 text-xs text-[var(--color-fg-muted)]">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[var(--color-brand)]" />
                  <span>Transparent Deliverables</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-[var(--color-brand)]" />
                  <span>Rapid 5–7 Day Launch</span>
                </div>
              </div>
            </div>

            {/* Metrics Showcase Card */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-3xl bg-[var(--color-bg-card)]/90 border border-[var(--color-border)] backdrop-blur-xl shadow-2xl space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-brand)] font-bold block mb-2">
                  ⚡ Performance Benchmarks
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

      {/* Problem vs Solution Section */}
      <section className="py-16 sm:py-20 bg-[var(--color-bg-subtle)] border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-brand)] font-bold block mb-2">
              The Growth Difference
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--color-fg)] tracking-tight">
              Why Typical Campaigns Fail vs. <span className="text-gradient-orange">How ConvertX Scales.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The Old Way */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[var(--color-bg-card)] border border-red-500/20">
              <h3 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">
                <span>✕</span> {props.problemSolution.problemTitle}
              </h3>
              <ul className="space-y-3">
                {props.problemSolution.problems.map((prob, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-[var(--color-fg-muted)] flex items-start gap-2.5">
                    <span className="text-red-400 font-bold mt-0.5">•</span>
                    <span>{prob}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The ConvertX Engine */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-brand)]/40 shadow-xl shadow-[var(--color-brand)]/5">
              <h3 className="text-lg font-bold text-[var(--color-fg)] mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[var(--color-brand)]" />
                <span className="text-gradient-orange">{props.problemSolution.solutionTitle}</span>
              </h3>
              <ul className="space-y-3">
                {props.problemSolution.solutions.map((sol, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-[var(--color-fg)] flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{sol}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Capabilities Breakdown */}
      <section className="py-20 sm:py-24 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="orange">Full Deliverables</Badge>
            <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-[var(--color-fg)] tracking-tight">
              What We Build & <span className="text-gradient-orange">Deliver.</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[var(--color-fg-muted)]">
              No vague promises. Here is the exact technical & marketing execution you receive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {props.features.map((feat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-brand)]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  {feat.badge && (
                    <span className="px-2.5 py-0.5 rounded-full bg-[var(--color-brand-subtle)] text-[var(--color-brand)] text-[10px] font-bold border border-[var(--color-brand)]/30 inline-block mb-3">
                      {feat.badge}
                    </span>
                  )}
                  <h3 className="text-lg font-bold text-[var(--color-fg)] mb-2">{feat.title}</h3>
                  <p className="text-xs sm:text-sm text-[var(--color-fg-muted)] mb-4 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-[var(--color-border)] space-y-2">
                  {feat.deliverables.map((deliv, dIdx) => (
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

      {/* 4-Step Process */}
      <section className="py-20 sm:py-24 bg-[var(--color-bg-subtle)] border-t border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-brand)] font-bold block mb-2">
              Execution Roadmap
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--color-fg)] tracking-tight">
              From Discovery To <span className="text-gradient-orange">Scale.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {props.processSteps.map((step, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] relative">
                <span className="text-3xl font-extrabold font-mono text-[var(--color-fg)]/10 block mb-3">
                  {step.step}
                </span>
                <h3 className="text-base font-bold text-[var(--color-fg)] mb-2">{step.title}</h3>
                <p className="text-xs text-[var(--color-fg-muted)] leading-relaxed mb-4">{step.description}</p>
                <div className="pt-3 border-t border-[var(--color-border)]">
                  <span className="text-[10px] font-mono text-[var(--color-brand)] uppercase block mb-1">
                    Deliverable:
                  </span>
                  <span className="text-xs font-semibold text-[var(--color-fg)]">{step.outcome}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-24 bg-[var(--color-bg)] border-t border-[var(--color-border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-brand)] font-bold block mb-2">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--color-fg)] tracking-tight">
              Got Questions About {props.h1Title}?
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

      {/* Related Services & Industries Cross-Linking */}
      <section className="py-16 bg-[var(--color-bg-subtle)] border-t border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-base font-bold text-[var(--color-fg)] mb-4">Related Growth Solutions:</h3>
              <div className="space-y-2.5">
                {props.relatedServices.map((rs, idx) => (
                  <Link
                    key={idx}
                    href={rs.href}
                    className="p-3.5 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-brand)]/40 flex items-center justify-between group transition-all"
                  >
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[var(--color-fg)] group-hover:text-[var(--color-brand)] transition-colors">
                        {rs.title}
                      </h4>
                      <p className="text-[11px] text-[var(--color-fg-muted)]">{rs.description}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[var(--color-fg-subtle)] group-hover:text-[var(--color-brand)] group-hover:translate-x-1 transition-all shrink-0" />
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-base font-bold text-[var(--color-fg)] mb-4">Explore Industry Playbooks:</h3>
              <div className="grid grid-cols-2 gap-2.5">
                {props.relatedIndustries.map((ind, idx) => (
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
      <section className="py-20 bg-[var(--color-bg)] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[var(--color-bg-card-elevated)] to-[var(--color-bg-card)] border border-[var(--color-brand)]/40 shadow-2xl">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--color-fg)] mb-4">
              Ready To Scale With {props.h1Title}?
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-fg-muted)] max-w-xl mx-auto mb-8 leading-relaxed">
              Book a 30-minute strategy session or chat with our growth strategists directly on WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Button href="/#contact" variant="primary" size="lg" showArrow>
                Book a Call
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
