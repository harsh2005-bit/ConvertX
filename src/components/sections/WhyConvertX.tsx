"use client";

import React from "react";
import { motion } from "framer-motion";
import { WHY_CONVERTX } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { 
  Compass, 
  Zap, 
  Code, 
  BarChart3, 
  TrendingUp, 
  Layers 
} from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  Code: <Code className="w-5 h-5" />,
  BarChart3: <BarChart3 className="w-5 h-5" />,
  TrendingUp: <TrendingUp className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
};

export const WhyConvertX: React.FC = () => {
  return (
    <section id="why-convertx" className="py-24 bg-[#060608] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="orange">Differentiators</Badge>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Not Just Another <span className="text-gradient-orange">Marketing Agency.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            We don&apos;t just launch ad campaigns — we engineer the complete acquisition and technology architecture around your business outcomes.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CONVERTX.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-8 rounded-2xl bg-[#0D0E12] border border-white/10 hover:border-[#FF5500]/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FF5500]/10"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#14161F] text-[#FF5500] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#FF5500] group-hover:text-white transition-all">
                  {ICON_MAP[item.icon]}
                </div>
                <span className="text-sm font-bold text-slate-500 font-mono">
                  {item.number}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF5500] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
