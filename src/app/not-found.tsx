import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass, MessageSquare } from "lucide-react";
import { CONTACT_WHATSAPP_URL } from "@/lib/constants";

export const metadata = {
  title: "404 - Page Not Found",
  description: "Looks like this page didn't convert. Let's get you back on track.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-fg)] flex flex-col items-center justify-center px-4 relative overflow-hidden bg-grid-pattern">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[var(--color-brand-subtle)] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-lg mx-auto p-8 rounded-3xl bg-[var(--color-bg-card)]/90 border border-[var(--color-border)] shadow-2xl backdrop-blur-xl">
        <div className="w-16 h-16 rounded-2xl bg-[var(--color-brand-subtle)] border border-[var(--color-brand)]/30 flex items-center justify-center text-[var(--color-brand)] mx-auto mb-6">
          <Compass className="w-8 h-8 animate-spin-slow" />
        </div>

        <span className="text-[var(--color-brand)] text-xs font-mono font-bold uppercase tracking-widest block mb-2">
          404 Error
        </span>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--color-fg)] mb-3">
          Looks like this page didn&apos;t convert.
        </h1>

        <p className="text-sm sm:text-base text-[var(--color-fg-muted)] mb-8 leading-relaxed">
          Let&apos;s get you back on track. Explore our performance marketing services or jump straight back to the homepage.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-[var(--color-brand)] text-white hover:bg-[var(--color-brand-hover)] shadow-lg shadow-[var(--color-brand)]/25 hover:-translate-y-0.5 active:translate-y-0 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to ConvertX</span>
          </Link>

          <a
            href={CONTACT_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-[var(--color-bg-card-elevated)] text-[var(--color-fg)] border border-[var(--color-border)] hover:border-[#25D366]/50 hover:text-[#25D366] transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Quick Service Links */}
        <div className="mt-8 pt-6 border-t border-[var(--color-border)] text-left">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--color-fg-subtle)] block mb-3 text-center">
            Popular Growth Services
          </span>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <Link
              href="/meta-ads-agency"
              className="px-3 py-2 rounded-xl bg-[var(--color-bg-card-elevated)] hover:bg-[var(--color-bg-subtle)] text-[var(--color-fg-muted)] hover:text-[var(--color-brand)] transition-colors truncate"
            >
              ⚡ Meta Ads Agency
            </Link>
            <Link
              href="/whatsapp-business-api"
              className="px-3 py-2 rounded-xl bg-[var(--color-bg-card-elevated)] hover:bg-[var(--color-bg-subtle)] text-[var(--color-fg-muted)] hover:text-[var(--color-brand)] transition-colors truncate"
            >
              💬 WhatsApp API
            </Link>
            <Link
              href="/landing-pages"
              className="px-3 py-2 rounded-xl bg-[var(--color-bg-card-elevated)] hover:bg-[var(--color-bg-subtle)] text-[var(--color-fg-muted)] hover:text-[var(--color-brand)] transition-colors truncate"
            >
              🚀 Landing Pages
            </Link>
            <Link
              href="/blog"
              className="px-3 py-2 rounded-xl bg-[var(--color-bg-card-elevated)] hover:bg-[var(--color-bg-subtle)] text-[var(--color-fg-muted)] hover:text-[var(--color-brand)] transition-colors truncate"
            >
              📚 Growth Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
