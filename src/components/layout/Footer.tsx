"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

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
    <footer className="bg-[#040405] border-t border-white/10 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#hero" className="inline-block transition-transform hover:scale-105">
              <Image
                src="/logo.png"
                alt="ConvertX Logo"
                width={200}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </a>

            <p className="text-base font-semibold text-slate-200">
              &ldquo;Turn Attention Into Revenue.&rdquo;
            </p>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Performance marketing, technology and automation built to turn clicks into customers.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#0D0E12] border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#FF5500] hover:border-[#FF5500]/40 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#0D0E12] border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#FF5500] hover:border-[#FF5500]/40 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#0D0E12] border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#FF5500] hover:border-[#FF5500]/40 transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-mono">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              {["Home", "Services", "Why ConvertX", "Work", "Process", "FAQ", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-[#FF5500] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-mono">
              Core Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                "Meta Ads",
                "Instagram Ads",
                "Agency Accounts",
                "WhatsApp API",
                "Websites & Landers",
                "AI Automation",
              ].map((service) => (
                <li key={service}>
                  <a href="#services" className="hover:text-[#FF5500] transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-mono">
              Get In Touch
            </h4>
            <a
              href="mailto:convertxmediazone@gmail.com"
              className="text-xs font-medium text-slate-300 hover:text-[#FF5500] transition-colors block mb-3 break-all"
            >
              convertxmediazone@gmail.com
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#FF5500] hover:underline"
            >
              Book Strategy Session
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 ConvertX. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#hero" className="hover:text-slate-400 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
