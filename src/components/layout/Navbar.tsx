"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Phone, MessageSquare } from "lucide-react";
import { NAV_LINKS, CONTACT_CALL_URL, CONTACT_WHATSAPP_URL, CONTACT_PHONE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Logo } from "@/components/ui/Logo";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-2.5 sm:py-3 shadow-[var(--shadow-nav)] backdrop-blur-xl"
          : "bg-transparent py-4 sm:py-5"
      }`}
      style={
        scrolled
          ? { backgroundColor: "var(--color-bg-nav)", borderBottom: "1px solid var(--color-border)" }
          : {}
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center text-[var(--color-fg)] group transition-transform duration-300 hover:scale-105"
            aria-label="ConvertX home"
          >
            <Logo height={36} className="h-8 sm:h-9 md:h-10" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-2 rounded-full px-4 py-1.5 backdrop-blur-md"
            style={{
              backgroundColor: "color-mix(in srgb, var(--color-bg-subtle) 88%, transparent)",
              border: "1px solid var(--color-border)",
            }}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 hover:text-[var(--color-brand)]"
                style={{ color: "var(--color-fg-muted)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA & Controls */}
          <div className="flex items-center gap-2">
            {/* Theme toggle — desktop */}
            <div className="hidden md:flex">
              <ThemeToggle />
            </div>

            {/* WhatsApp — desktop */}
            <a
              href={CONTACT_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1.5 px-3 py-2 rounded-full bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] text-xs font-semibold hover:bg-[#25D366]/25 transition-all"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            {/* Call — desktop XL */}
            <a
              href={CONTACT_CALL_URL}
              className="hidden xl:flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold transition-all hover:text-[--color-brand]"
              style={{
                backgroundColor: "var(--color-bg-card)",
                border: "1px solid var(--color-border)",
                color: "var(--color-fg-muted)",
              }}
              title={`Call ${CONTACT_PHONE}`}
            >
              <Phone className="w-3.5 h-3.5 text-[--color-brand]" />
              <span>Call Us</span>
            </a>

            <div className="hidden sm:block">
              <Button href="/#contact" variant="primary" size="sm" showArrow>
                Book a Free Strategy Call
              </Button>
            </div>

            {/* Mobile: WhatsApp icon */}
            <a
              href={CONTACT_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden p-2 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] active:scale-95 transition-transform"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            {/* Mobile: Book call */}
            <Link
              href="/#contact"
              className="sm:hidden px-3 py-1.5 rounded-full text-[var(--color-fg)] text-xs font-bold active:scale-95 transition-transform flex items-center gap-1"
              style={{ backgroundColor: "var(--color-brand)" }}
            >
              <span>Book Call</span>
              <ArrowRight className="w-3 h-3" />
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl border active:scale-95 transition-all"
              style={{
                backgroundColor: "var(--color-bg-card)",
                border: "1px solid var(--color-border)",
                color: "var(--color-fg)",
              }}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-b overflow-hidden backdrop-blur-2xl px-4 pt-4 pb-6"
            style={{
              backgroundColor: "var(--color-bg-nav)",
              borderColor: "var(--color-border)",
            }}
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-semibold transition-colors border border-transparent hover:border-[--color-border] hover:text-[--color-brand]"
                  style={{ color: "var(--color-fg)" }}
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-3 space-y-2.5">
                <Button
                  href="/#contact"
                  variant="primary"
                  size="md"
                  className="w-full justify-center text-sm py-3.5"
                  onClick={() => setMobileMenuOpen(false)}
                  showArrow
                >
                  Book a Free Strategy Call
                </Button>

                {/* Theme toggle in mobile menu */}
                <div className="flex items-center justify-between px-1">
                  <span className="text-xs font-medium" style={{ color: "var(--color-fg-muted)" }}>
                    Appearance
                  </span>
                  <ThemeToggle />
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={CONTACT_WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] text-xs font-bold hover:bg-[#25D366]/25 transition-colors text-center"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={CONTACT_CALL_URL}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-bold transition-colors text-center"
                    style={{
                      backgroundColor: "var(--color-bg-card)",
                      border: "1px solid var(--color-border)",
                      color: "var(--color-fg)",
                    }}
                  >
                    <Phone className="w-4 h-4 text-[--color-brand]" />
                    <span>Call Phone</span>
                  </a>
                </div>

                <div className="text-center pt-1">
                  <a
                    href={CONTACT_CALL_URL}
                    className="text-[11px] font-mono transition-colors hover:text-[--color-brand]"
                    style={{ color: "var(--color-fg-muted)" }}
                  >
                    Direct: {CONTACT_PHONE}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
