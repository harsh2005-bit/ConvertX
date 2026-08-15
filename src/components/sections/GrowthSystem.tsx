"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FUNNEL_STAGES } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { 
  Megaphone, 
  MousePointerClick, 
  UserCheck, 
  MessageCircle, 
  DollarSign, 
  Repeat
} from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  Megaphone: <Megaphone className="w-5 h-5" />,
  MousePointerClick: <MousePointerClick className="w-5 h-5" />,
  UserCheck: <UserCheck className="w-5 h-5" />,
  MessageCircle: <MessageCircle className="w-5 h-5" />,
  DollarSign: <DollarSign className="w-5 h-5" />,
  Repeat: <Repeat className="w-5 h-5" />,
};

export const GrowthSystem: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<number>(0);

  return (
    <section id="growth-system" className="py-16 sm:py-24 bg-[#060608] relative overflow-hidden">
      {/* Radial glow backdrop */}
      <div className="absolute top-1/3 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#FF5500]/10 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Badge variant="orange">Full Conversion Architecture</Badge>
          
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The Connected <span className="text-gradient-orange">Growth Engine</span>
          </h2>

          <div className="mt-5 sm:mt-6 p-4 sm:p-6 rounded-2xl bg-[#0D0E12] border border-[#FF5500]/30 shadow-lg shadow-[#FF5500]/10 max-w-2xl mx-auto">
            <p className="text-base sm:text-xl font-bold text-white leading-relaxed">
              &ldquo;Most businesses don&apos;t have an advertising problem. <br className="hidden sm:block" />
              <span className="text-[#FF5500]">They have a conversion system problem.</span>&rdquo;
            </p>
          </div>

          <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-slate-300">
            ConvertX connects traffic, landers, instant messaging, and automation into one high-velocity revenue engine.
          </p>
        </div>

        {/* Funnel Pipeline Visual Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 mb-8 sm:mb-12">
          {FUNNEL_STAGES.map((stage, idx) => (
            <motion.button
              key={stage.title}
              onClick={() => setSelectedStage(idx)}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`p-3.5 sm:p-4 rounded-xl text-left border transition-all duration-300 relative group cursor-pointer ${
                selectedStage === idx
                  ? "bg-[#14161F] border-[#FF5500] shadow-lg shadow-[#FF5500]/20 scale-102"
                  : "bg-[#0D0E12] border-white/10 hover:border-white/20"
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-1.5">
                <span>{stage.step}</span>
                <span className={`${selectedStage === idx ? "text-[#FF5500]" : "text-slate-500"}`}>
                  {ICON_MAP[stage.icon]}
                </span>
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#FF5500] transition-colors truncate">
                {stage.title}
              </h3>
              <p className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                {stage.subtitle}
              </p>
            </motion.button>
          ))}
        </div>

        {/* Detailed Active Stage Inspector */}
        <motion.div
          key={selectedStage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="p-5 sm:p-8 rounded-2xl bg-[#0D0E12] border border-white/15 backdrop-blur-xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#FF5500] mb-2">
                <span>Stage {FUNNEL_STAGES[selectedStage].step} Architecture</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-extrabold text-white mb-3">
                {FUNNEL_STAGES[selectedStage].title}: {FUNNEL_STAGES[selectedStage].subtitle}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-5">
                {FUNNEL_STAGES[selectedStage].description}
              </p>

              {/* Integrated components explanation */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-[#14161F] border border-white/10">
                <span className="text-xs font-semibold text-slate-400 block mb-2">
                  System Integration Stack:
                </span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {["Meta Ads", "Landing Page", "WhatsApp API", "AI Automation", "Nurture Bot"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-[#0D0E12] border border-white/10 text-[11px] sm:text-xs font-medium text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side graphical representation */}
            <div className="lg:col-span-5 flex items-center justify-center p-4 sm:p-6 rounded-xl bg-[#14161F]/60 border border-white/10">
              <div className="flex items-center gap-3.5 sm:gap-4 text-center">
                <div className="p-3.5 sm:p-4 rounded-full bg-[#FF5500]/10 border border-[#FF5500]/40 text-[#FF5500] shrink-0">
                  {ICON_MAP[FUNNEL_STAGES[selectedStage].icon]}
                </div>
                <div className="text-left">
                  <span className="text-[11px] sm:text-xs text-slate-400 block uppercase font-mono">Conversion Velocity</span>
                  <span className="text-lg sm:text-xl font-bold text-white">99.4% Uptime</span>
                  <span className="text-[11px] sm:text-xs text-emerald-400 block mt-0.5">Automated 24/7 Engine</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
