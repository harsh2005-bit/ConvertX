"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Phone, Mail, MessageSquare } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_CALL_URL, CONTACT_WHATSAPP_URL, INSTAGRAM_URL } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";

const InstagramIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--color-footer)] border-t border-[var(--color-border)] pt-16 pb-12 text-[var(--color-fg-muted)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[var(--color-border)]">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-[var(--color-fg)] transition-transform hover:scale-105"
              aria-label="ConvertX on Instagram"
              title="ConvertX on Instagram"
            >
              <Logo height={44} className="h-11" />
            </a>

            <p className="text-base font-semibold text-[var(--color-fg)]">
              &ldquo;Turn Attention Into Revenue.&rdquo;
            </p>

            <p className="text-xs text-[var(--color-fg-muted)] max-w-sm leading-relaxed">
              Performance marketing, technology and automation built to turn attention into measurable business results.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-fg-muted)] hover:text-[var(--color-brand)] hover:border-[var(--color-brand)]/40 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-fg-muted)] hover:text-[var(--color-brand)] hover:border-[var(--color-brand)]/40 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-fg-muted)] hover:text-[var(--color-brand)] hover:border-[var(--color-brand)]/40 transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-[var(--color-fg)] uppercase tracking-wider mb-4 font-mono">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/#services" },
                { label: "Why ConvertX", href: "/#why-convertx" },
                { label: "Growth System", href: "/#growth-system" },
                { label: "Growth Blog", href: "/blog" },
                { label: "Case Studies", href: "/#work" },
                { label: "Execution Process", href: "/#process" },
                { label: "FAQ", href: "/#faq" },
                { label: "Contact Us", href: "/#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-[var(--color-brand)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-xs font-bold text-[var(--color-fg)] uppercase tracking-wider mb-4 font-mono">
              Core Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { label: "Meta Ads Agency", href: "/meta-ads-agency" },
                { label: "Instagram Ads", href: "/instagram-ads" },
                { label: "WhatsApp Business API", href: "/whatsapp-business-api" },
                { label: "Agency Ad Accounts", href: "/agency-accounts" },
                { label: "Website Development", href: "/website-development" },
                { label: "Landing Pages", href: "/landing-pages" },
                { label: "AI Automation", href: "/ai-automation" },
                { label: "Performance Marketing", href: "/performance-marketing" },
                { label: "Lead Generation", href: "/lead-generation" },
              ].map((service) => (
                <li key={service.label}>
                  <Link href={service.href} className="hover:text-[var(--color-brand)] transition-colors">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info & Industries */}
          <div>
            <h4 className="text-xs font-bold text-[var(--color-fg)] uppercase tracking-wider mb-4 font-mono">
              Get In Touch
            </h4>
            <div className="space-y-2.5 mb-4 text-xs">
              <a
                href={CONTACT_CALL_URL}
                className="flex items-center gap-2 font-medium text-[var(--color-fg-muted)] hover:text-[var(--color-brand)] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[var(--color-brand)] shrink-0" />
                <span>{CONTACT_PHONE}</span>
              </a>

              <a
                href={CONTACT_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-medium text-[#25D366] hover:text-[#25D366]/80 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-2 font-medium text-[var(--color-fg-muted)] hover:text-[var(--color-brand)] transition-colors break-all"
              >
                <Mail className="w-3.5 h-3.5 text-[var(--color-brand)] shrink-0" />
                <span>{CONTACT_EMAIL}</span>
              </a>
            </div>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-1 text-xs font-bold text-[var(--color-brand)] hover:underline"
            >
              Book Strategy Session
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <div className="mt-6 pt-4 border-t border-[var(--color-border)]">
              <span className="text-[11px] font-mono text-[var(--color-fg-subtle)] uppercase block mb-2">
                Industries We Scale
              </span>
              <div className="flex flex-wrap gap-1.5 text-[11px]">
                <Link href="/industries/ecommerce" className="text-[var(--color-fg-muted)] hover:text-[var(--color-brand)]">E-Commerce</Link> •
                <Link href="/industries/real-estate" className="text-[var(--color-fg-muted)] hover:text-[var(--color-brand)]">Real Estate</Link> •
                <Link href="/industries/education" className="text-[var(--color-fg-muted)] hover:text-[var(--color-brand)]">EdTech</Link> •
                <Link href="/industries/startups" className="text-[var(--color-fg-muted)] hover:text-[var(--color-brand)]">Startups</Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--color-fg-subtle)]">
          <p>© 2026 ConvertX. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-[var(--color-fg-muted)] transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-[var(--color-fg-muted)] transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
