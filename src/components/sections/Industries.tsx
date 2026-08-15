"use client";

import React from "react";
import { motion } from "framer-motion";
import { INDUSTRIES_LIST } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { 
  ShoppingBag, 
  Building2, 
  GraduationCap, 
  Stethoscope, 
  Wallet, 
  Gamepad2, 
  Rocket, 
  Briefcase 
} from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  ShoppingBag: <ShoppingBag className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
  GraduationCap: <GraduationCap className="w-6 h-6" />,
  Stethoscope: <Stethoscope className="w-6 h-6" />,
  Wallet: <Wallet className="w-6 h-6" />,
  Gamepad2: <Gamepad2 className="w-6 h-6" />,
  Rocket: <Rocket className="w-6 h-6" />,
  Briefcase: <Briefcase className="w-6 h-6" />,
};

export const Industries: React.FC = () => {
  return (
    <section className="py-24 bg-[#060608] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="orange">Domain Expertise</Badge>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Built For Businesses <span className="text-gradient-orange">Ready To Grow.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Tailored acquisition angles, custom WhatsApp bots, and specialized landing page structures designed for your vertical.
          </p>
        </div>

        {/* 8 Industry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES_LIST.map((industry, idx) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              className="p-6 rounded-2xl bg-[#0D0E12] border border-white/10 hover:border-[#FF5500]/40 transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#14161F] text-[#FF5500] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#FF5500] group-hover:text-white transition-all">
                  {ICON_MAP[industry.icon]}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FF5500] transition-colors">
                  {industry.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {industry.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <span className="text-[11px] font-mono text-[#FF5500] font-semibold">
                  {industry.metricsPreview}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
