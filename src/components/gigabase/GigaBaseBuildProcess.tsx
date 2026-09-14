"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion";
import { BUILD_PROCESS_STAGES } from "@/data/gigabaseData";
import { CheckCircle2, Zap, ShieldCheck, Factory, HardHat, Compass } from "lucide-react";
import TechnicalCard from "./TechnicalCard";

export default function GigaBaseBuildProcess() {
  const [selectedStage, setSelectedStage] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });
  const currentStage = BUILD_PROCESS_STAGES[selectedStage];

  // Preload all 4 build stage images immediately on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      BUILD_PROCESS_STAGES.forEach((st) => {
        if (st.image) {
          const img = new window.Image();
          img.src = st.image;
        }
      });
    }
  }, []);

  const getStageIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Compass className="w-5 h-5 text-[#3daeff]" />;
      case 1: return <Factory className="w-5 h-5 text-[#3daeff]" />;
      case 2: return <HardHat className="w-5 h-5 text-[#3daeff]" />;
      case 3: return <Zap className="w-5 h-5 text-[#00e878]" />;
      default: return <CheckCircle2 className="w-5 h-5 text-[#3daeff]" />;
    }
  };

  // Dynamic progress line responding to the active stage
  const getProgressWidth = () => {
    switch (selectedStage) {
      case 0: return "12.5%";
      case 1: return "37.5%";
      case 2: return "62.5%";
      case 3: return "100%";
      default: return "12.5%";
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
          {/* Active Responding Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-8 right-8 h-[1px] -translate-y-1/2 bg-white/[0.08] z-0 overflow-hidden">
            <motion.div
              initial={shouldReduceMotion ? { width: getProgressWidth() } : { width: "0%" }}
              animate={isInView ? { width: getProgressWidth() } : { width: "0%" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
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
                          <span className={`text-[11px] font-mono font-bold transition-colors ${
                            isSelected ? (isFinal ? "text-[#00e878]" : "text-[#3daeff]") : "text-white/40"
                          }`}>
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
                        <span className="text-[9px] font-mono font-bold text-[#00e878] flex items-center gap-1">
                          <span className={`w-1.5 h-1.5 rounded-full bg-[#00e878] ${isSelected ? "animate-pulse" : "opacity-60"}`} />
                          {isSelected ? "SYSTEM READY // ENERGIZED" : "STAGE 04"}
                        </span>
                      )}
                    </div>
                  </TechnicalCard>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Large Interactive Stage Detail Panel */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full rounded-2xl border border-white/[0.08] bg-[#02050c] p-6 sm:p-8 lg:p-10 relative overflow-hidden"
        >
          {/* Header row of the detail panel */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.06] mb-8">
            <div className="flex items-center gap-3">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                selectedStage === 3 
                  ? "bg-[#00e878]/10 border border-[#00e878]/30" 
                  : "bg-[#3daeff]/10 border border-[#3daeff]/30"
              }`}>
                {getStageIcon(selectedStage)}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-mono font-bold tracking-wider ${
                    selectedStage === 3 ? "text-[#00e878]" : "text-[#3daeff]"
                  }`}>
                    STAGE {currentStage.stage} //
                  </span>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.08] text-white/80">
                    {currentStage.months}
                  </span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight uppercase font-sans mt-0.5">
                  {currentStage.title}
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {selectedStage === 3 ? (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#00e878]/10 border border-[#00e878]/30 text-[#00e878]">
                  <span className="w-2 h-2 rounded-full bg-[#00e878] animate-pulse"></span>
                  <span className="text-[10.5px] font-mono font-bold tracking-[0.15em] uppercase">SYSTEM READY // ENERGIZED</span>
                </div>
              ) : (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.06] text-white/70">
                  <ShieldCheck className="w-4 h-4 text-[#3daeff]" />
                  <span className="text-[10px] font-mono font-bold tracking-[0.15em] uppercase">USDC PRE-COMMISSION PROTOCOL</span>
                </div>
              )}
            </div>
          </div>

          {/* Two-Column Split Layout: Large Hero Image (50%) + Stage Content (50%) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: Large Hero Stage Image (~50%) */}
            <div className="lg:col-span-6 relative w-full aspect-[16/10] sm:aspect-[16/10] rounded-xl overflow-hidden bg-[#04070f] border border-white/[0.08] group">
              <AnimatePresence initial={false}>
                <motion.div
                  key={currentStage.image}
                  initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={shouldReduceMotion ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={currentStage.image}
                    alt={currentStage.title}
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                  {/* Subtle Industrial Vignette & Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#010409]/95 via-[#010409]/20 to-[#010409]/50 pointer-events-none" />
                  <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
                </motion.div>
              </AnimatePresence>

              {/* Technical HUD Badges inside image */}
              <div className="relative z-10 w-full h-full flex flex-col justify-between p-4 sm:p-5 pointer-events-none">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 bg-[#010409]/85 backdrop-blur-md border border-white/[0.1] px-2.5 py-1 rounded-md text-[9.5px] font-mono text-white/80 tracking-wider">
                    <span className={`w-1.5 h-1.5 rounded-full ${selectedStage === 3 ? "bg-[#00e878]" : "bg-[#3daeff]"} animate-pulse`} />
                    <span>FIELD EXECUTION // PHASE 0{selectedStage + 1}</span>
                  </div>

                  <div className="bg-[#010409]/85 backdrop-blur-md border border-white/[0.1] px-2.5 py-1 rounded-md text-[9.5px] font-mono text-[#3daeff] font-bold tracking-wider">
                    <span>{currentStage.months}</span>
                  </div>
                </div>

                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-mono text-[#3daeff] tracking-[0.15em] uppercase block mb-0.5 font-bold">
                      {currentStage.badge}
                    </span>
                    <h5 className="text-base sm:text-xl font-bold text-white tracking-tight uppercase font-sans drop-shadow-sm">
                      {currentStage.title}
                    </h5>
                  </div>

                  <div className="bg-[#010409]/85 backdrop-blur-md border border-white/[0.1] px-2.5 py-1 rounded-md text-[9px] sm:text-[9.5px] font-mono text-white/70 tracking-wider">
                    <span>REF: USDC-GB-P0{selectedStage + 1}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Stage Description & Detailed Checklist (~50%) */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`content-${selectedStage}`}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? undefined : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col h-full justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-3.5 h-[1.5px] bg-[#3daeff]"></span>
                      <span className="text-[10px] font-semibold text-[#3daeff] tracking-[0.2em] uppercase font-mono">
                        STAGE 0{selectedStage + 1} EXECUTION OVERVIEW
                      </span>
                    </div>

                    <h5 className="text-xl sm:text-2xl font-bold text-white tracking-tight uppercase font-sans mb-3">
                      {currentStage.title}
                    </h5>

                    <p className="text-[14px] sm:text-[14.5px] text-white/70 leading-[1.75] font-normal font-sans mb-6">
                      {currentStage.description}
                    </p>

                    {/* Section Subhead for Checklist */}
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-[10.5px] font-mono text-white/50 tracking-[0.15em] uppercase font-semibold">
                        VERIFIED DELIVERY CRITERIA & GATING
                      </span>
                      <span className="text-[10px] font-mono text-white/40">
                        4 / 4 Complete
                      </span>
                    </div>

                    {/* Stage Checklist items */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {currentStage.details.map((item, idx) => (
                        <div 
                          key={idx} 
                          className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors flex items-start gap-3"
                        >
                          <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                            selectedStage === 3 ? "text-[#00e878]" : "text-[#3daeff]"
                          }`} />
                          <span className="text-xs sm:text-[12.5px] text-white/90 font-medium font-sans leading-snug">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Technical Status Bar */}
                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-white/50">
                    <span className="flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${selectedStage === 3 ? "bg-[#00e878]" : "bg-[#3daeff]"}`} />
                      <span>USDC Industrial Delivery Protocol</span>
                    </span>
                    <span className={`font-bold ${selectedStage === 3 ? "text-[#00e878]" : "text-[#3daeff]"}`}>
                      {currentStage.months} (On-Schedule)
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

