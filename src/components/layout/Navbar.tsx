"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#060608]/90 backdrop-blur-xl border-b border-white/10 py-2.5 sm:py-3 shadow-2xl shadow-black/80"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center group transition-transform duration-300 hover:scale-105">
            <Image
              src="/logo.png"
              alt="ConvertX Logo"
              width={180}
              height={50}
              className="h-8 sm:h-10 md:h-11 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-[#0D0E12]/80 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-slate-300 hover:text-white transition-colors hover:bg-white/5 rounded-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-2.5">
            <div className="hidden sm:block">
              <Button href="#contact" variant="primary" size="sm" showArrow>
                Book a Free Strategy Call
              </Button>
            </div>

            {/* Quick Mobile Strategy Call Pill */}
            <a
              href="#contact"
              className="sm:hidden px-3 py-1.5 rounded-full bg-[#FF5500] text-white text-xs font-bold shadow-md shadow-[#FF5500]/30 active:scale-95 transition-transform flex items-center gap-1"
            >
              <span>Book Call</span>
              <ArrowRight className="w-3 h-3" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-[#0D0E12] border border-white/15 text-slate-200 hover:text-white active:scale-95 transition-all"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Animated Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-[#0D0E12]/95 border-b border-white/15 px-4 pt-4 pb-6 overflow-hidden backdrop-blur-2xl"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-200 hover:bg-white/10 hover:text-[#FF5500] transition-colors border border-transparent hover:border-white/10"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3">
                <Button
                  href="#contact"
                  variant="primary"
                  size="md"
                  className="w-full justify-center text-sm py-3.5"
                  onClick={() => setMobileMenuOpen(false)}
                  showArrow
                >
                  Book a Free Strategy Call
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
