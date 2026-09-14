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
  shouldReduceMotion,
  cardRef
}: {
  mod: ModuleItem;
  idx: number;
  isActive: boolean;
  onActivate: (idx: number) => void;
  shouldReduceMotion: boolean | null;
  cardRef?: (el: HTMLDivElement | null) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={(el) => {
        (ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
        if (cardRef) cardRef(el);
      }}
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
              {/* Mobile Module Image Display */}
              <div className="lg:hidden mt-3.5 relative w-full aspect-[16/10] rounded-lg overflow-hidden border border-white/[0.08] bg-[#04070f]">
                <img
                  src={mod.image}
                  alt={mod.name}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#010409]/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-[9px] font-mono text-white/80">
                  <span className="text-[#3daeff] font-bold">{mod.tag}</span>
                  <span className="text-white/60">CAD REF: USDC-GB-{mod.code}</span>
                </div>
              </div>

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
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isLockedRef = useRef(false);
  const activeIdxRef = useRef(activeIdx);
  activeIdxRef.current = activeIdx;

  // Preload all 8 module images immediately on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      GIGABASE_MODULES.forEach((mod) => {
        if (mod.image) {
          const img = new window.Image();
          img.src = mod.image;
        }
      });
    }
  }, []);

  const handleSelectModule = (idx: number) => {
    setActiveIdx(idx);
    cardRefs.current[idx]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  // Precise scroll stepping: at one scroll gesture, exactly 1 module moves
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleWheel = (e: WheelEvent) => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Section is in active focus when its top has reached the header area (<= 120px)
      // and its bottom hasn't scrolled completely past (>= viewportHeight * 0.35)
      const inFocus = rect.top <= 120 && rect.bottom >= viewportHeight * 0.35;
      if (!inFocus) return;

      const current = activeIdxRef.current;

      if (e.deltaY > 15) {
        // Scrolling DOWN -> next module
        if (current < GIGABASE_MODULES.length - 1) {
          e.preventDefault();
          if (isLockedRef.current) return;
          isLockedRef.current = true;
          const next = current + 1;
          setActiveIdx(next);
          cardRefs.current[next]?.scrollIntoView({ behavior: "smooth", block: "center" });
          setTimeout(() => {
            isLockedRef.current = false;
          }, 480);
        }
        // At module 8 (current === 7), let default scroll happen naturally into Section 4!
      } else if (e.deltaY < -15) {
        // Scrolling UP -> previous module
        if (current > 0) {
          e.preventDefault();
          if (isLockedRef.current) return;
          isLockedRef.current = true;
          const prev = current - 1;
          setActiveIdx(prev);
          cardRefs.current[prev]?.scrollIntoView({ behavior: "smooth", block: "center" });
          setTimeout(() => {
            isLockedRef.current = false;
          }, 480);
        }
        // At module 1 (current === 0), let default scroll happen naturally up into Section 2!
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const inFocus = rect.top <= 120 && rect.bottom >= viewportHeight * 0.35;
      if (!inFocus) return;

      const deltaY = touchStartY - e.touches[0].clientY;
      if (Math.abs(deltaY) < 35) return;

      const current = activeIdxRef.current;
      if (deltaY > 35) {
        // Swipe up -> advance 1 module
        if (current < GIGABASE_MODULES.length - 1) {
          e.preventDefault();
          if (isLockedRef.current) return;
          isLockedRef.current = true;
          touchStartY = e.touches[0].clientY;
          const next = current + 1;
          setActiveIdx(next);
          cardRefs.current[next]?.scrollIntoView({ behavior: "smooth", block: "center" });
          setTimeout(() => {
            isLockedRef.current = false;
          }, 480);
        }
      } else if (deltaY < -35) {
        // Swipe down -> go back 1 module
        if (current > 0) {
          e.preventDefault();
          if (isLockedRef.current) return;
          isLockedRef.current = true;
          touchStartY = e.touches[0].clientY;
          const prev = current - 1;
          setActiveIdx(prev);
          cardRefs.current[prev]?.scrollIntoView({ behavior: "smooth", block: "center" });
          setTimeout(() => {
            isLockedRef.current = false;
          }, 480);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

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
    <section 
      id="modules" 
      ref={sectionRef} 
      className="w-full relative bg-[#04070f] py-20 md:py-28 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-16 border-t border-white/[0.05]"
    >
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
              onClick={() => handleSelectModule(idx)}
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
                onActivate={handleSelectModule}
                shouldReduceMotion={shouldReduceMotion}
                cardRef={(el) => { cardRefs.current[idx] = el; }}
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

              {/* Module Visual Representation (Dynamic Infrastructure Camera Feed) */}
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#04070f] border border-white/[0.06] group">
                {/* Dynamic Infrastructure Module Image with 600ms Crossfade + Subtle Settle Scale */}
                <AnimatePresence initial={false}>
                  <motion.div
                    key={currentModule.image}
                    initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.015 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={shouldReduceMotion ? undefined : { opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img
                      src={currentModule.image}
                      alt={currentModule.name}
                      className="w-full h-full object-cover object-center"
                      loading="eager"
                    />
                    {/* Industrial HUD Vignette & Contrast Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#010409]/95 via-[#010409]/20 to-[#010409]/60 pointer-events-none" />
                    <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
                  </motion.div>
                </AnimatePresence>

                {/* Technical HUD Overlay Elements */}
                <div className="relative z-10 w-full h-full flex flex-col justify-between p-4 sm:p-5 pointer-events-none">
                  {/* Top Badges */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 bg-[#010409]/80 backdrop-blur-md border border-white/[0.1] px-2.5 py-1 rounded-md text-[9.5px] font-mono text-white/80 tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00e878] animate-pulse"></span>
                      <span>DCIM OPTICAL FEED // CH-0{activeIdx + 1}</span>
                    </div>

                    <div className="bg-[#010409]/80 backdrop-blur-md border border-white/[0.1] px-2.5 py-1 rounded-md text-[9.5px] font-mono text-[#3daeff] font-bold tracking-wider">
                      <span>{currentModule.code}</span>
                    </div>
                  </div>

                  {/* Bottom Module Tag & CAD Ref */}
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-[10px] sm:text-[11px] font-mono text-[#3daeff] tracking-[0.15em] uppercase block mb-0.5">
                        {currentModule.tag}
                      </span>
                      <h4 className="text-base sm:text-xl font-bold text-white tracking-tight uppercase font-sans drop-shadow-sm">
                        {currentModule.name}
                      </h4>
                    </div>

                    <div className="bg-[#010409]/80 backdrop-blur-md border border-white/[0.1] px-2.5 py-1 rounded-md text-[9px] sm:text-[9.5px] font-mono text-white/70 tracking-wider">
                      <span>CAD REF: USDC-GB-{currentModule.code}</span>
                    </div>
                  </div>
                </div>
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
