"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FULL_STACK_PILLARS } from "@/data/gigabaseData";
import { Globe, Cpu, Building2, Database, ArrowRight, CheckCircle2 } from "lucide-react";

export default function GigaBaseFullStack() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const getPillarIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Globe className="w-5 h-5 text-[#3daeff]" />;
      case 1: return <Cpu className="w-5 h-5 text-[#3daeff]" />;
      case 2: return <Building2 className="w-5 h-5 text-[#3daeff]" />;
      case 3: return <Database className="w-5 h-5 text-[#3daeff]" />;
      default: return <Cpu className="w-5 h-5 text-[#3daeff]" />;
    }
  };

  return (
    <section className="w-full relative bg-[#04070f] py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-16 border-t border-white/[0.05]">
      {/* Ambience */}
      <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/[0.03] rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center mb-10 sm:mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-[1.5px] bg-[#3daeff]"></span>
            <span className="text-[11px] font-semibold text-white/70 tracking-[0.2em] uppercase font-sans">
              SECTION 07 — END-TO-END OWNERSHIP
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight uppercase leading-[1.08] mb-4 font-sans">
            ONE PARTNER. <span className="text-[#3daeff]">EVERY PHASE.</span>
          </h2>

          <p className="text-[14px] md:text-[15px] text-white/65 max-w-2xl leading-[1.8] font-normal font-sans">
            Most data centers are assembled from a chain of 12+ separate companies. We own the entire value chain — origination, manufacturing, development, operations — under one roof.
          </p>
        </motion.div>

        {/* 4 Large Technical Pillar Panels: Sequential directional reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FULL_STACK_PILLARS.map((pillar, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <motion.div
                key={pillar.number}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`p-6 sm:p-7 rounded-xl border transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
                  isHovered
                    ? "bg-[#02050c] border-[#3daeff]/40 shadow-[0_0_24px_rgba(61,174,255,0.06)]"
                    : "bg-[#010409]/90 border-white/[0.08]"
                }`}
              >
                {/* Giant Ghost Number */}
                <div className="absolute top-2 right-4 text-[72px] font-black font-mono text-white/[0.03] select-none pointer-events-none">
                  {pillar.number}
                </div>

                <div>
                  {/* Top Category Label */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#3daeff]/10 border border-[#3daeff]/30 flex items-center justify-center">
                      {getPillarIcon(idx)}
                    </div>
                    <span className="text-[10px] font-mono text-white/40 tracking-[0.15em] uppercase font-bold">
                      {pillar.number} // {pillar.phase}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight uppercase mb-3 font-sans">
                    {pillar.title}
                  </h3>

                  <p className="text-[13px] md:text-[13.5px] text-white/50 leading-[1.65] font-normal font-sans mb-6">
                    {pillar.description}
                  </p>
                </div>

                {/* Bottom Metric / Highlight */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#3daeff] font-bold uppercase tracking-[0.15em]">
                    {pillar.stats}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#00e878]" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
