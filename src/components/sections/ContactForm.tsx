"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SERVICES_LIST, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_CALL_URL, CONTACT_WHATSAPP_URL } from "@/lib/constants";
import { Mail, Phone, CheckCircle, Sparkles, MessageSquare } from "lucide-react";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    businessType: "E-commerce",
    monthlyBudget: "₹50,000 - ₹1,50,000",
    servicesNeeded: ["Meta Ads", "Websites & Landing Pages"],
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Full Name is required";
    if (!formData.email.trim()) {
      errs.email = "Work Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) errs.phone = "Phone number is required";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json();
        setErrors({ form: data.error || "Failed to submit request." });
      }
    } catch {
      setErrors({ form: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const toggleService = (title: string) => {
    setFormData((prev) => {
      const exists = prev.servicesNeeded.includes(title);
      return {
        ...prev,
        servicesNeeded: exists
          ? prev.servicesNeeded.filter((s) => s !== title)
          : [...prev.servicesNeeded, title],
      };
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[var(--color-bg)] relative border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-start">
          
          {/* Left Side Info */}
          <div className="lg:col-span-5">
            <Badge variant="orange">Get Started</Badge>
            <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-[var(--color-fg)] tracking-tight leading-tight">
              Let&apos;s Build Your <br />
              <span className="text-gradient-orange">Revenue System.</span>
            </h2>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-[var(--color-fg-muted)] leading-relaxed">
              Book a strategy call or send us your details. We&apos;ll analyze your offer, audit your acquisition funnel, and present a custom growth roadmap.
            </p>

            <div className="mt-8 sm:mt-10 space-y-5">
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-brand)] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-[var(--color-fg-muted)] block font-mono">DIRECT EMAIL</span>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-xs sm:text-sm font-bold text-[var(--color-fg)] hover:text-[var(--color-brand)] transition-colors break-all">
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-brand)] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <span className="text-[11px] text-[var(--color-fg-muted)] block font-mono">DIRECT CALL / WHATSAPP</span>
                  <a
                    href={CONTACT_CALL_URL}
                    className="text-xs sm:text-sm font-bold text-[var(--color-fg)] hover:text-[var(--color-brand)] transition-colors block"
                  >
                    {CONTACT_PHONE}
                  </a>
                  <div className="flex items-center gap-2 pt-1">
                    <a
                      href={CONTACT_WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] text-xs font-semibold hover:bg-[#25D366]/25 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                    <a
                      href={CONTACT_CALL_URL}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[var(--color-brand-subtle)] border border-[var(--color-brand)]/40 text-[var(--color-brand)] text-xs font-semibold hover:bg-[var(--color-brand)]/25 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Guarantees */}
            <div className="mt-8 sm:mt-10 p-5 sm:p-6 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)]">
              <div className="flex items-center gap-2 text-xs font-bold text-[var(--color-brand)] uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Strategy Call Promise</span>
              </div>
              <ul className="space-y-2 text-xs text-[var(--color-fg-muted)]">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>30-minute high-value funnel roadmap</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Zero pushy sales talk</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Direct tech & marketing execution plan</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="lg:col-span-7 w-full">
            <div className="p-5 sm:p-10 rounded-2xl sm:rounded-3xl bg-[var(--color-bg-card)] border border-[var(--color-border)] shadow-2xl backdrop-blur-xl relative">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 sm:py-10"
                >
                  <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-[var(--color-brand-subtle)] border border-[var(--color-brand)]/40 flex items-center justify-center text-[var(--color-brand)] mx-auto mb-5">
                    <CheckCircle className="w-7 sm:w-8 h-7 sm:h-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-fg)] mb-2">
                    Message Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--color-fg-muted)] max-w-md mx-auto mb-6">
                    Thank you for reaching out to ConvertX. Our team will review your business requirements and contact you within 12 hours.
                  </p>

                  <div className="p-4 rounded-xl bg-[var(--color-bg-card-elevated)] border border-[var(--color-border)] max-w-md mx-auto mb-6 text-left">
                    <span className="text-[11px] font-mono text-[var(--color-brand)] uppercase font-bold block mb-1">
                      Prefer an immediate response?
                    </span>
                    <p className="text-xs text-[var(--color-fg-muted)] mb-3">
                      Chat with our growth strategists right now on WhatsApp or call our team directly.
                    </p>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <a
                        href={CONTACT_WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#25D366] text-white text-xs font-bold hover:bg-[#20ba59] transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Chat on WhatsApp</span>
                      </a>
                      <a
                        href={CONTACT_CALL_URL}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[var(--color-bg-card-elevated)] text-[var(--color-fg)] border border-[var(--color-border)] text-xs font-bold hover:bg-[var(--color-bg-subtle)] transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-[var(--color-brand)]" />
                        <span>Call +91 92965 69240</span>
                      </a>
                    </div>
                  </div>

                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        company: "",
                        email: "",
                        phone: "",
                        businessType: "E-commerce",
                        monthlyBudget: "₹50,000 - ₹1,50,000",
                        servicesNeeded: ["Meta Ads"],
                        message: "",
                      });
                    }}
                    variant="outline"
                    size="sm"
                  >
                    Submit Another Request
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  
                  {/* Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-[var(--color-fg-muted)] uppercase tracking-wider mb-1.5 sm:mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className={`w-full px-3.5 py-3 rounded-xl bg-[var(--color-bg-card-elevated)] border text-base sm:text-sm text-[var(--color-fg)] placeholder-[#888888] focus:outline-none focus:border-[var(--color-brand)] transition-colors ${
                          errors.name ? "border-red-500" : "border-[var(--color-border)]"
                        }`}
                      />
                      {errors.name && <span className="text-[11px] text-red-400 mt-1 block">{errors.name}</span>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[var(--color-fg-muted)] uppercase tracking-wider mb-1.5 sm:mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Brands"
                        className="w-full px-3.5 py-3 rounded-xl bg-[var(--color-bg-card-elevated)] border border-[var(--color-border)] text-base sm:text-sm text-[var(--color-fg)] placeholder-[#888888] focus:outline-none focus:border-[var(--color-brand)] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-[var(--color-fg-muted)] uppercase tracking-wider mb-1.5 sm:mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className={`w-full px-3.5 py-3 rounded-xl bg-[var(--color-bg-card-elevated)] border text-base sm:text-sm text-[var(--color-fg)] placeholder-[#888888] focus:outline-none focus:border-[var(--color-brand)] transition-colors ${
                          errors.email ? "border-red-500" : "border-[var(--color-border)]"
                        }`}
                      />
                      {errors.email && <span className="text-[11px] text-red-400 mt-1 block">{errors.email}</span>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[var(--color-fg-muted)] uppercase tracking-wider mb-1.5 sm:mb-2">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className={`w-full px-3.5 py-3 rounded-xl bg-[var(--color-bg-card-elevated)] border text-base sm:text-sm text-[var(--color-fg)] placeholder-[#888888] focus:outline-none focus:border-[var(--color-brand)] transition-colors ${
                          errors.phone ? "border-red-500" : "border-[var(--color-border)]"
                        }`}
                      />
                      {errors.phone && <span className="text-[11px] text-red-400 mt-1 block">{errors.phone}</span>}
                    </div>
                  </div>

                  {/* Business Type & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-[var(--color-fg-muted)] uppercase tracking-wider mb-1.5 sm:mb-2">
                        Business Type
                      </label>
                      <select
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-xl bg-[var(--color-bg-card-elevated)] border border-[var(--color-border)] text-base sm:text-sm text-[var(--color-fg)] focus:outline-none focus:border-[var(--color-brand)] transition-colors"
                      >
                        <option value="E-commerce">E-commerce</option>
                        <option value="Real Estate">Real Estate</option>
                        <option value="Education">Education / EdTech</option>
                        <option value="Healthcare">Healthcare & Clinics</option>
                        <option value="Local Business">Local Business</option>
                        <option value="B2B / Agency">B2B & Professional Services</option>
                        <option value="Startup">High-Growth Startup</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[var(--color-fg-muted)] uppercase tracking-wider mb-1.5 sm:mb-2">
                        Monthly Ad Budget
                      </label>
                      <select
                        value={formData.monthlyBudget}
                        onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-xl bg-[var(--color-bg-card-elevated)] border border-[var(--color-border)] text-base sm:text-sm text-[var(--color-fg)] focus:outline-none focus:border-[var(--color-brand)] transition-colors"
                      >
                        <option value="< ₹50,000">Under ₹50,000 / month</option>
                        <option value="₹50,000 - ₹1,50,000">₹50,000 - ₹1,50,000 / month</option>
                        <option value="₹1,50,000 - ₹5,00,000">₹1,50,000 - ₹5,00,000 / month</option>
                        <option value="₹5,00,000+">₹5,00,000+ / month</option>
                      </select>
                    </div>
                  </div>

                  {/* Services Checkboxes */}
                  <div>
                    <label className="block text-xs font-semibold text-[var(--color-fg-muted)] uppercase tracking-wider mb-2 sm:mb-3">
                      What do you need help with?
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {SERVICES_LIST.map((srv) => {
                        const isSelected = formData.servicesNeeded.includes(srv.title);
                        return (
                          <button
                            type="button"
                            key={srv.id}
                            onClick={() => toggleService(srv.title)}
                            className={`px-3 py-2.5 rounded-xl text-xs font-medium text-left border transition-all active:scale-98 ${
                              isSelected
                                ? "bg-[var(--color-brand-subtle)] border-[var(--color-brand)] text-[var(--color-brand)]"
                                : "bg-[var(--color-bg-card-elevated)] border-[var(--color-border)] text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]"
                            }`}
                          >
                            {srv.title}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-[var(--color-fg-muted)] uppercase tracking-wider mb-1.5 sm:mb-2">
                      Project Details / Message
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your current campaigns, website, and growth targets..."
                      className="w-full px-3.5 py-3 rounded-xl bg-[var(--color-bg-card-elevated)] border border-[var(--color-border)] text-base sm:text-sm text-[var(--color-fg)] placeholder-[#888888] focus:outline-none focus:border-[var(--color-brand)] transition-colors resize-none"
                    />
                  </div>

                  {errors.form && (
                    <p className="text-xs text-red-400 text-center">{errors.form}</p>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full justify-center text-sm py-4"
                    disabled={loading}
                    showArrow
                  >
                    {loading ? "Processing Request..." : "Start a Conversation"}
                  </Button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
