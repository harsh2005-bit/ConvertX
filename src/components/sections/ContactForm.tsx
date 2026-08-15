"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SERVICES_LIST, CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/constants";
import { Mail, Phone, Building, User, DollarSign, Send, CheckCircle, Sparkles } from "lucide-react";

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
    <section id="contact" className="py-24 bg-[#060608] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side Info */}
          <div className="lg:col-span-5">
            <Badge variant="orange">Get Started</Badge>
            <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Let&apos;s Build Your <br />
              <span className="text-gradient-orange">Revenue System.</span>
            </h2>

            <p className="mt-6 text-base text-slate-300 leading-relaxed">
              Book a strategy call or send us your details. We&apos;ll analyze your offer, audit your acquisition funnel, and present a custom growth roadmap.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0D0E12] border border-white/10 flex items-center justify-center text-[#FF5500] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-mono">DIRECT EMAIL</span>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm font-bold text-white hover:text-[#FF5500] transition-colors break-all">
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0D0E12] border border-white/10 flex items-center justify-center text-[#FF5500] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-mono">WHATSAPP / PHONE</span>
                  <span className="text-sm font-bold text-slate-300">
                    {CONTACT_PHONE}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Guarantees */}
            <div className="mt-10 p-6 rounded-2xl bg-[#0D0E12] border border-white/10">
              <div className="flex items-center gap-2 text-xs font-bold text-[#FF5500] uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Strategy Call Promise</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-400">
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
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0D0E12] border border-white/15 shadow-2xl backdrop-blur-xl relative">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-[#FF5500]/10 border border-[#FF5500]/40 flex items-center justify-center text-[#FF5500] mx-auto mb-6">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Message Received!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
                    Thank you for reaching out to ConvertX. Our team will review your business requirements and contact you within 12 hours.
                  </p>
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
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 rounded-xl bg-[#14161F] border text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#FF5500] transition-colors ${
                          errors.name ? "border-red-500" : "border-white/10"
                        }`}
                      />
                      {errors.name && <span className="text-[11px] text-red-400 mt-1 block">{errors.name}</span>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Brands"
                        className="w-full px-4 py-3 rounded-xl bg-[#14161F] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#FF5500] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-[#14161F] border text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#FF5500] transition-colors ${
                          errors.email ? "border-red-500" : "border-white/10"
                        }`}
                      />
                      {errors.email && <span className="text-[11px] text-red-400 mt-1 block">{errors.email}</span>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className={`w-full px-4 py-3 rounded-xl bg-[#14161F] border text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#FF5500] transition-colors ${
                          errors.phone ? "border-red-500" : "border-white/10"
                        }`}
                      />
                      {errors.phone && <span className="text-[11px] text-red-400 mt-1 block">{errors.phone}</span>}
                    </div>
                  </div>

                  {/* Business Type & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Business Type
                      </label>
                      <select
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#14161F] border border-white/10 text-sm text-white focus:outline-none focus:border-[#FF5500] transition-colors"
                      >
                        <option value="E-commerce">E-commerce</option>
                        <option value="Real Estate">Real Estate</option>
                        <option value="Education">Education / EdTech</option>
                        <option value="Healthcare">Healthcare & Clinics</option>
                        <option value="Gaming">Gaming Ads</option>
                        <option value="B2B / Agency">B2B & Professional Services</option>
                        <option value="Startup">High-Growth Startup</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Monthly Ad Budget
                      </label>
                      <select
                        value={formData.monthlyBudget}
                        onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#14161F] border border-white/10 text-sm text-white focus:outline-none focus:border-[#FF5500] transition-colors"
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
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
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
                            className={`px-3 py-2 rounded-xl text-xs font-medium text-left border transition-all ${
                              isSelected
                                ? "bg-[#FF5500]/10 border-[#FF5500] text-[#FF5500]"
                                : "bg-[#14161F] border-white/10 text-slate-400 hover:text-white"
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
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Project Details / Message
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your current campaigns, website, and growth targets..."
                      className="w-full px-4 py-3 rounded-xl bg-[#14161F] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#FF5500] transition-colors resize-none"
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
                    className="w-full justify-center"
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
