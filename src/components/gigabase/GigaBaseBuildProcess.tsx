"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion";
import { BUILD_PROCESS_STAGES } from "@/data/gigabaseData";
import { CheckCircle2, Zap, ArrowRight, ShieldCheck, Factory, HardHat, Compass } from "lucide-react";
import TechnicalCard from "./TechnicalCard";

export default function GigaBaseBuildProcess() {
  const [selectedStage, setSelectedStage] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  const getStageIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Compass className="w-5 h-5 text-[#3daeff]" />;
      case 1: return <Factory className="w-5 h-5 text-[#3daeff]" />;
      case 2: return <HardHat className="w-5 h-5 text-[#3daeff]" />;
      case 3: return <Zap className="w-5 h-5 text-[#00e878]" />;
      default: return <CheckCircle2 className="w-5 h-5 text-[#3daeff]" />;
    }
  };

  return (
    <section ref={sectionRef} className="w-full relative bg-[#04070f] py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-16 border-t border-white/[0.05]">
      {/* Ambience */}
      <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] bg-blue-600/[0.03] rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto">
        
        {/* Section Eyebrow */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center mb-10 sm:mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-[1.5px] bg-[#3daeff]"></span>
            <span className="text-[10px] font-semibold text-white/90 tracking-[0.2em] uppercase font-sans">
              SECTION 05 — PHASED EXECUTION
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight uppercase leading-[1.08] mb-4 font-sans">
            Our 9-Month <span className="text-[#3daeff]">Build Process.</span>
          </h2>

          <p className="text-[14px] md:text-[15px] text-white/65 max-w-2xl leading-[1.8] font-normal font-sans">
            From initial compute topology modeling to live utility energization, every milestone follows strict industrial prefabrication controls.
          </p>
        </motion.div>

        {/* Engineering Milestone Bar (0 -> 2 -> 6 -> 9 Months) */}
        <div className="relative mb-8 md:mb-10 px-2 sm:px-4">
          {/* Animated Connecting Progress Line */}
          <div className="hidden md:block absolute top-1/2 left-8 right-8 h-[1px] -translate-y-1/2 bg-white/[0.08] z-0 overflow-hidden">
            <motion.div
              initial={shouldReduceMotion ? { width: "100%" } : { width: "0%" }}
              animate={isInView ? { width: "100%" } : { width: "0%" }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="h-full bg-gradient-to-r from-[#3daeff] via-[#3daeff] to-[#00e878]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10">
            {BUILD_PROCESS_STAGES.map((st, idx) => {
              const isSelected = selectedStage === idx;
              const isFinal = idx === 3;
              return (
                <motion.div
                  key={st.stage}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full"
                >
                  <TechnicalCard
                    interactiveLevel="medium"
                    isActive={isSelected}
                    showScanline={false}
                    onClick={() => setSelectedStage(idx)}
                    className={`p-5 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col justify-between h-full ${
                      isSelected
                        ? isFinal 
                          ? "bg-[#070c1a] border-[#00e878]/50 shadow-[0_0_24px_rgba(0,232,120,0.08)]"
                          : "bg-[#070c1a] border-[#3daeff]/40 shadow-[0_0_24px_rgba(61,174,255,0.06)]"
                        : "bg-[#010409]/90 border-white/[0.06] hover:border-white/[0.14] hover:bg-white/[0.015] opacity-80 hover:opacity-100"
                    }`}
                  >
                    <div>
                      {/* Top Row: Stage & Month */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                            isFinal ? "bg-[#00e878]/10 border border-[#00e878]/25" : "bg-[#3daeff]/10 border border-[#3daeff]/25"
                          }`}>
                            {getStageIcon(idx)}
                          </div>
                          <span className="text-[11px] font-mono font-bold text-white/40">
                            {st.stage}
                          </span>
                        </div>

                        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border transition-colors ${
                          isFinal 
                            ? "bg-[#00e878]/15 text-[#00e878] border-[#00e878]/30"
                            : "bg-[#3daeff]/15 text-[#3daeff] border-[#3daeff]/30"
                        }`}>
                          {st.months}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-white tracking-tight uppercase mb-2 font-sans">
                        {st.title}
                      </h3>

                      <p className="text-[13px] text-white/50 leading-[1.65] font-normal font-sans">
                        {st.description}
                      </p>
                    </div>

                    {/* Micro badge */}
                    <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center justify-between">
                      <span className="text-[9.5px] font-mono text-white/40 uppercase tracking-[0.12em]">
                        {st.badge}
                      </span>
                      {isFinal && (
                        <motion.span
                          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: 0.6 }}
                          className="text-[9px] font-mono font-bold text-[#00e878] flex items-center gap-1"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00e878] animate-ping" />
                          SYSTEM READY // ENERGIZED
                        </motion.span>
                      )}
                    </div>
                  </TechnicalCard>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Deep-Dive Stage Specifications Inspector */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full rounded-2xl border border-white/[0.08] bg-[#02050c] p-6 sm:p-8 relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedStage}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.06] mb-6">
                <div>
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono text-[#3daeff] font-bold tracking-wide">
                      STAGE {BUILD_PROCESS_STAGES[selectedStage].stage} //
                    </span>
                    <h4 className="text-lg font-bold text-white tracking-tight uppercase font-sans">
                      {BUILD_PROCESS_STAGES[selectedStage].title} ({BUILD_PROCESS_STAGES[selectedStage].months})
                    </h4>
                  </div>
                  <p className="text-xs text-white/50 mt-1 font-sans">
                    Verified delivery checklist and engineering gating criteria.
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                  <ShieldCheck className="w-4 h-4 text-[#00e878]" />
                  <span className="text-[10px] font-mono font-bold text-white/60 tracking-[0.15em] uppercase">USDC PRE-COMMISSION PROTOCOL</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {BUILD_PROCESS_STAGES[selectedStage].details.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white/[0.015] border border-white/[0.05] flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#3daeff]"></div>
                    <span className="text-xs text-white/80 font-sans">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
