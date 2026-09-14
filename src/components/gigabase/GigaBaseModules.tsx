"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion";
import { GIGABASE_MODULES, ModuleItem } from "@/data/gigabaseData";
import TechnicalCard from "./TechnicalCard";
import { 
  Server, 
  Zap, 
  BatteryCharging, 
  Cpu, 
  Gauge, 
  Workflow, 
  Droplet, 
  Wind,
  ChevronRight,
  ShieldCheck,
  Activity,
  Layers,
  Check
} from "lucide-react";

// Individual scroll-aware module row with Technical Inspection experience
function ModuleRow({
  mod,
  idx,
  isActive,
  onActivate,
  shouldReduceMotion
}: {
  mod: ModuleItem;
  idx: number;
  isActive: boolean;
  onActivate: (idx: number) => void;
  shouldReduceMotion: boolean | null;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInCenter = useInView(ref, {
    margin: "-30% 0px -30% 0px"
  });

  useEffect(() => {
    if (isInCenter && !shouldReduceMotion) {
      onActivate(idx);
    }
  }, [isInCenter, idx, onActivate, shouldReduceMotion]);

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
      className="relative pl-6 sm:pl-8 group"
    >
      {/* Connector branch to the module card */}
      <div 
        className={`hidden sm:block absolute left-2.5 top-8 w-4 h-[1px] transition-colors duration-300 ${
          isActive ? "bg-[#3daeff]/80" : "bg-white/[0.08]"
        }`}
      />
      {/* Connector dot */}
      <div 
        className={`hidden sm:block absolute left-[8px] top-[29px] w-2 h-2 rounded-full border transition-all duration-300 ${
          isActive 
            ? "bg-[#3daeff] border-[#3daeff] shadow-[0_0_8px_rgba(61,174,255,0.8)]" 
            : "bg-[#010409] border-white/20"
        }`}
      />

      <TechnicalCard
        interactiveLevel="high"
        isActive={isActive}
        onClick={() => onActivate(idx)}
        className={`p-5 rounded-xl border transition-all duration-300 cursor-pointer ${
          isActive
            ? "bg-[#070c1a] border-[#3daeff]/50 shadow-[0_0_30px_rgba(61,174,255,0.08)]"
            : "bg-[#010409]/60 border-white/[0.06] hover:border-white/[0.16] hover:bg-white/[0.015] opacity-75 hover:opacity-100"
        }`}
      >
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2.5">
            <span className={`text-[12px] font-mono font-bold transition-colors ${isActive ? "text-[#3daeff]" : "text-white/30"}`}>
              {mod.number}
            </span>
            <h3 className={`text-base sm:text-lg font-bold tracking-tight uppercase font-sans transition-colors ${isActive ? "text-white" : "text-white/75"}`}>
              {mod.name}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono bg-white/[0.03] border border-white/[0.06] px-2 py-0.5 rounded text-[#3daeff] font-semibold">
              {mod.code}
            </span>
            {/* System Status Indicator Dot */}
            <span className={`flex items-center gap-1.5 text-[9.5px] font-mono px-2 py-0.5 rounded border transition-colors ${
              isActive 
                ? "bg-[#00e878]/10 text-[#00e878] border-[#00e878]/30" 
                : "bg-white/[0.02] text-white/40 border-white/[0.05]"
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-[#00e878] animate-pulse" : "bg-white/40"}`}></span>
              <span>{mod.telemetry.status || "ONLINE"}</span>
            </span>
            <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isActive ? "rotate-90 text-[#3daeff]" : "text-white/30"}`} />
          </div>
        </div>

        <p className={`text-[13px] sm:text-[13.5px] leading-[1.65] font-normal font-sans transition-colors ${isActive ? "text-white/85" : "text-white/50"}`}>
          {mod.fullDesc}
        </p>

        {/* Technical Inspection Quick Verification Bar */}
        <div className="mt-3 pt-2.5 border-t border-white/[0.04] flex flex-wrap items-center gap-3 text-[10px] font-mono text-white/45">
          <span className="flex items-center gap-1">
            <Check className={`w-3 h-3 ${isActive ? "text-[#00e878]" : "text-white/30"}`} />
            <span>POWER BUS</span>
          </span>
          <span className="flex items-center gap-1">
            <Check className={`w-3 h-3 ${isActive ? "text-[#00e878]" : "text-white/30"}`} />
            <span>COOLING LOOP</span>
          </span>
          <span className="flex items-center gap-1 text-white/60">
            <span className="text-white/30">REF:</span>
            <span>USDC-GB-{mod.code}</span>
          </span>
        </div>

        {/* Active expanded specs with staggered row reveal */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div className="mt-4 pt-3.5 border-t border-white/[0.06] grid grid-cols-2 gap-2.5 text-[11px] font-mono">
                {mod.specs.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: i * 0.05 }}
                    className="p-2.5 rounded-lg bg-white/[0.015] border border-white/[0.05]"
                  >
                    <span className="text-white/40 block text-[9.5px] uppercase tracking-wider">{s.label}</span>
                    <span className="text-white/90 font-semibold">{s.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </TechnicalCard>
    </motion.div>
  );
}

export default function GigaBaseModules() {
  const [activeIdx, setActiveIdx] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const currentModule = GIGABASE_MODULES[activeIdx];

  const getModuleIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Cpu className="w-4 h-4 text-[#3daeff]" />;
      case 1: return <Zap className="w-4 h-4 text-[#3daeff]" />;
      case 2: return <BatteryCharging className="w-4 h-4 text-[#3daeff]" />;
      case 3: return <Server className="w-4 h-4 text-[#3daeff]" />;
      case 4: return <Gauge className="w-4 h-4 text-[#3daeff]" />;
      case 5: return <Workflow className="w-4 h-4 text-[#3daeff]" />;
      case 6: return <Droplet className="w-4 h-4 text-[#3daeff]" />;
      case 7: return <Wind className="w-4 h-4 text-[#3daeff]" />;
      default: return <Layers className="w-4 h-4 text-[#3daeff]" />;
    }
  };

  return (
    <section id="modules" className="w-full relative bg-[#04070f] py-20 md:py-28 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-16 border-t border-white/[0.05]">
      {/* Background Ambience */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/[0.03] rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/[0.03] rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start mb-10 sm:mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-[1.5px] bg-[#3daeff]"></span>
            <span className="text-[10px] font-semibold text-white/90 tracking-[0.2em] uppercase font-sans">
              SECTION 03 — SYSTEM ARCHITECTURE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight uppercase leading-[1.08] mb-4 font-sans">
            Eight Modules. <span className="text-[#3daeff]">One Turnkey System.</span>
          </h2>

          <p className="text-[14px] md:text-[15px] text-white/65 max-w-2xl leading-[1.8] font-normal font-sans">
            Every component in GigaBase is manufactured, tested, and pre-commissioned in our factories to eliminate field labor and accelerate energization.
          </p>
        </motion.div>

        {/* Quick Module Switcher Bar (Desktop & Mobile) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 md:mb-10 scrollbar-none border-b border-white/[0.05]">
          {GIGABASE_MODULES.map((mod, idx) => (
            <button
              key={mod.number}
              onClick={() => setActiveIdx(idx)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono tracking-[0.12em] transition-all whitespace-nowrap cursor-pointer ${
                activeIdx === idx
                  ? "bg-[#3daeff]/10 text-[#3daeff] border border-[#3daeff]/40"
                  : "bg-white/[0.015] text-white/50 border border-white/[0.06] hover:bg-white/[0.04] hover:text-white/80"
              }`}
            >
              <span className="font-bold">{mod.number}</span>
              <span>{mod.name}</span>
            </button>
          ))}
        </div>

        {/* Desktop Split Showcase (Sticky Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Interactive Module List with Vertical Connecting Busway */}
          <div className="lg:col-span-6 relative flex flex-col gap-3">
            {/* System Busway Line: MODULE ↓ POWER ↓ COMPUTE ↓ COOLING ↓ INTEGRATED SYSTEM */}
            <div className="hidden sm:block absolute left-[11px] top-6 bottom-6 w-[1px] bg-white/[0.06] z-0">
              <motion.div
                className="w-full bg-gradient-to-b from-[#3daeff] to-[#00e878]"
                style={{
                  height: `${((activeIdx + 1) / GIGABASE_MODULES.length) * 100}%`,
                  transition: "height 0.4s ease-out"
                }}
              />
            </div>

            {GIGABASE_MODULES.map((mod, idx) => (
              <ModuleRow
                key={mod.number}
                mod={mod}
                idx={idx}
                isActive={activeIdx === idx}
                onActivate={setActiveIdx}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </div>

          {/* Right Column: Sticky Visual System Showcase */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <TechnicalCard
              interactiveLevel="medium"
              className="w-full rounded-2xl border border-white/[0.08] bg-[#02050c] p-6 sm:p-8"
              showScanline={false}
            >
              {/* Corner Telemetry Details */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-6">
                <div className="flex items-center gap-2">
                  {getModuleIcon(activeIdx)}
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-[0.15em]">
                    MODULE {currentModule.number} // {currentModule.code}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono font-bold text-[#3daeff]">
                    0{activeIdx + 1} / 08
                  </span>
                  <span className="text-[10px] font-mono text-[#00e878] bg-[#00e878]/10 border border-[#00e878]/30 px-2 py-0.5 rounded font-bold">
                    {currentModule.telemetry.status}
                  </span>
                </div>
              </div>

              {/* Module Visual Representation (Technical HUD Schematic) */}
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#04070f] border border-white/[0.06] flex items-center justify-center p-6 group">
                <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none"></div>

                {/* Animated Blueprint Telemetry */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentModule.number}
                    initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.98, y: 6 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.98, y: -6 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-16 h-16 rounded-xl bg-[#3daeff]/10 border border-[#3daeff]/20 flex items-center justify-center text-[#3daeff] mb-4">
                      {getModuleIcon(activeIdx)}
                    </div>
                    <span className="text-xl sm:text-2xl font-bold text-white tracking-tight uppercase mb-1 font-sans">
                      {currentModule.name}
                    </span>
                    <span className="text-[11px] font-mono text-[#3daeff] tracking-[0.15em] uppercase">
                      {currentModule.tag}
                    </span>

                    {/* Micro telemetry floating badges */}
                    <div className="absolute top-0 left-0 flex items-center gap-1.5 bg-[#010409]/90 border border-white/[0.06] px-2 py-1 rounded text-[9px] font-mono text-white/70 tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3daeff] animate-pulse"></span>
                      <span>DCIM FEED: 100% ONLINE</span>
                    </div>

                    <div className="absolute bottom-0 right-0 bg-[#010409]/90 border border-white/[0.06] px-2 py-1 rounded text-[9px] font-mono text-white/70 tracking-wider">
                      <span>CAD REF: USDC-GB-{currentModule.code}</span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Telemetry Readouts Grid */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`telemetry-${activeIdx}`}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? undefined : { opacity: 0, y: -4 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3"
                >
                  <div className="p-3 rounded-lg bg-white/[0.015] border border-white/[0.05] text-left">
                    <span className="text-[9.5px] font-mono text-white/40 block uppercase">SYSTEM LOAD</span>
                    <span className="text-sm font-mono font-bold text-white mt-1 block">{currentModule.telemetry.load}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/[0.015] border border-white/[0.05] text-left">
                    <span className="text-[9.5px] font-mono text-white/40 block uppercase">EFFICIENCY</span>
                    <span className="text-sm font-mono font-bold text-[#3daeff] mt-1 block">{currentModule.telemetry.efficiency}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/[0.015] border border-white/[0.05] text-left">
                    <span className="text-[9.5px] font-mono text-white/40 block uppercase">THERMAL SENSOR</span>
                    <span className="text-sm font-mono font-bold text-white mt-1 block">{currentModule.telemetry.thermal}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/[0.015] border border-white/[0.05] text-left">
                    <span className="text-[9.5px] font-mono text-white/40 block uppercase">DEPLOYMENT</span>
                    <span className="text-sm font-mono font-bold text-[#00e878] mt-1 block">PLUG & PLAY</span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Action Note */}
              <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-white/40">
                <span>Integrated into 9MW GigaBase Pod</span>
                <span className="text-[#3daeff] font-bold">Module {activeIdx + 1} of 8</span>
              </div>
            </TechnicalCard>
          </div>

        </div>

      </div>
    </section>
  );
}
