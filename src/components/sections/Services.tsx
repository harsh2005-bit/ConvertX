"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SERVICES_LIST, ServiceItem } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { 
  Target, 
  ShieldCheck, 
  MessageSquare, 
  Layout, 
  Cpu, 
  Check, 
  ArrowUpRight 
} from "lucide-react";

const InstagramIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const ICON_MAP: Record<string, React.ReactNode> = {
  Target: <Target className="w-6 h-6" />,
  Instagram: <InstagramIcon />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  MessageSquare: <MessageSquare className="w-6 h-6" />,
  Layout: <Layout className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
};

export const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<string>("meta-ads");

  return (
    <section id="services" className="py-24 bg-[#060608] relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#FF5500]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <Badge variant="orange">Full-Stack Capability</Badge>
            <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Everything You Need To <br />
              <span className="text-gradient-orange">Convert Attention</span> Into Growth.
            </h2>
          </div>
          <p className="text-slate-400 text-base max-w-md">
            Integrated advertising, high-speed web tech, and automated messaging built as one continuous growth engine.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onMouseEnter={() => setActiveService(service.id)}
              className={`relative rounded-2xl bg-[#0D0E12] border p-8 transition-all duration-300 flex flex-col justify-between group ${
                activeService === service.id
                  ? "border-[#FF5500] shadow-xl shadow-[#FF5500]/15 -translate-y-1.5"
                  : "border-white/10 hover:border-white/20"
              }`}
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-black text-[#FF5500]/80 tracking-tighter">
                    {service.number}
                  </span>
                  <div className="p-3 rounded-xl bg-[#14161F] text-[#FF5500] border border-white/10 group-hover:scale-110 transition-transform">
                    {ICON_MAP[service.icon]}
                  </div>
                </div>

                {/* Title & Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#FF5500] transition-colors">
                    {service.title}
                  </h3>
                  {service.badge && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FF5500]/10 text-[#FF5500] border border-[#FF5500]/30 font-semibold">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2.5 pt-4 border-t border-white/10 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-xs text-slate-400">
                      <div className="w-4 h-4 rounded-full bg-[#FF5500]/10 flex items-center justify-center text-[#FF5500] shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action link */}
              <a
                href="#contact"
                className="inline-flex items-center justify-between w-full pt-4 border-t border-white/5 text-xs font-semibold text-slate-300 group-hover:text-[#FF5500] transition-colors"
              >
                <span>Request {service.title} Strategy</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
