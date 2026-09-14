"use client";

import React, { useState, useEffect, useRef } from "react";
import { ShieldCheck, Cpu, GitFork, Activity, CheckCircle, AlertTriangle } from "lucide-react";
import { motion, useInView } from "framer-motion";

export default function GigaBaseOverview() {
  const [activeTrain, setActiveTrain] = useState<number | null>(null);
  const hudRef = useRef<HTMLDivElement>(null);
  const isHudInView = useInView(hudRef, { once: true, margin: "-60px" });
  const [activeStep, setActiveStep] = useState(0);

  // Sequential activation of 4 trains + total power
  useEffect(() => {
    if (!isHudInView) return;
    const timers = [
      setTimeout(() => setActiveStep(1), 350),  // Train A
      setTimeout(() => setActiveStep(2), 700),  // Train B
      setTimeout(() => setActiveStep(3), 1050), // Train C
      setTimeout(() => setActiveStep(4), 1400), // Train D (Reserve)
      setTimeout(() => setActiveStep(5), 1750), // Total 9MW Activated
    ];
    return () => timers.forEach(clearTimeout);
  }, [isHudInView]);

  const trains = [
    { id: 1, name: "Power Train A", status: "ONLINE", load: "33.3%", kw: "3,000 kW", color: "#3daeff", step: 1 },
    { id: 2, name: "Power Train B", status: "ONLINE", load: "33.3%", kw: "3,000 kW", color: "#3daeff", step: 2 },
    { id: 3, name: "Power Train C", status: "ONLINE", load: "33.3%", kw: "3,000 kW", color: "#3daeff", step: 3 },
    { id: 4, name: "Power Train D", status: "RESERVE", load: "STANDBY", kw: "3,000 kW", color: "#00e878", step: 4 },
  ];

  return (
    <section className="w-full relative bg-[#04070f] py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-16 border-t border-white/[0.05]">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center">
        
        {/* Section Eyebrow */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center gap-2.5 mb-4"
        >
          <span className="w-5 h-[1.5px] bg-[#3daeff]"></span>
          <span className="text-[10px] font-semibold text-white/90 tracking-[0.2em] uppercase font-sans">
            WHAT IS GIGABASE?
          </span>
        </motion.div>

        {/* Section Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-white text-center tracking-tight leading-[1.08] mb-4 uppercase font-sans"
        >
          The GigaBase, <span className="text-[#3daeff]">Module by Module.</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-[14px] md:text-[15px] text-white/65 text-center max-w-2xl leading-[1.8] mb-12 md:mb-16 font-sans"
        >
          A pre-fabricated, standardized system combining medium voltage, energy storage, power skids, hydronic manifolds, and high-density compute pods into an integrated 9MW building block.
        </motion.p>

        {/* Distributed Redundancy Deep-Dive Card */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full rounded-2xl border border-white/[0.08] bg-[#010409]/90 p-6 sm:p-10 lg:p-12 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Redundancy Narrative */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#3daeff]/10 border border-[#3daeff]/20 mb-4">
                <ShieldCheck className="w-3.5 h-3.5 text-[#3daeff]" />
                <span className="text-[10px] font-mono font-bold text-[#3daeff] tracking-[0.15em] uppercase">
                  DISTRIBUTED REDUNDANCY
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight mb-4 font-sans">
                4N/3 Power Train Architecture
              </h3>

              <p className="text-white/70 text-[14px] sm:text-[15px] leading-[1.75] mb-6 font-normal font-sans">
                Four independent power trains supply every AI pod. If any one train fails, the other three carry the full load without dropping a single GPU rack.
              </p>

              <div className="w-full space-y-3 pt-2 font-sans">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.015] border border-white/[0.05]">
                  <CheckCircle className="w-4 h-4 text-[#00e878] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wide">Zero Single Points of Failure</h4>
                    <p className="text-[12px] text-white/50 leading-[1.6] font-normal mt-0.5">Dual utility feeds, isolated battery banks, and separated busways guarantee continuous uptime.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.015] border border-white/[0.05]">
                  <CheckCircle className="w-4 h-4 text-[#00e878] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wide">Parallel Load Distribution</h4>
                    <p className="text-[12px] text-white/50 leading-[1.6] font-normal mt-0.5">Normal operations evenly balance current across all four lines, lowering heat generation and boosting efficiency.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Diagram / HUD */}
            <div ref={hudRef} className="lg:col-span-7 flex flex-col gap-4">
              <div className="p-5 sm:p-6 rounded-xl bg-[#02050c] border border-white/[0.06]">
                
                {/* HUD Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-5">
                  <div className="flex items-center gap-2.5">
                    <span className={`w-2 h-2 rounded-full transition-colors duration-300 ${activeStep >= 1 ? "bg-[#00e878] animate-pulse" : "bg-white/30"}`}></span>
                    <span className="text-[10px] font-mono font-bold text-white tracking-[0.15em] uppercase">
                      4N/3 POWER BUS TELEMETRY
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-white/50 bg-white/[0.03] px-2 py-0.5 rounded border border-white/[0.04]">
                    SYS.TOPOLOGY: MESH-04
                  </span>
                </div>

                {/* Interactive Trains */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                  {trains.map((train) => {
                    const isActivated = activeStep >= train.step;
                    return (
                      <div
                        key={train.id}
                        onMouseEnter={() => setActiveTrain(train.id)}
                        onMouseLeave={() => setActiveTrain(null)}
                        className={`p-3.5 rounded-xl border transition-all duration-300 cursor-pointer ${
                          activeTrain === train.id
                            ? "border-[#3daeff]/50 bg-[#3daeff]/[0.04]"
                            : isActivated
                              ? "border-white/[0.08] bg-white/[0.02]"
                              : "border-white/[0.03] bg-white/[0.005] opacity-50"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold text-white uppercase tracking-wide font-mono">
                            {train.name}
                          </span>
                          <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded transition-all duration-300 ${
                            !isActivated
                              ? "bg-white/5 text-white/40"
                              : train.status === "ONLINE" 
                                ? "bg-[#3daeff]/15 text-[#3daeff]" 
                                : "bg-[#00e878]/15 text-[#00e878]"
                          }`}>
                            {isActivated ? train.status : "INITIALIZING"}
                          </span>
                        </div>
                        <div className="flex items-end justify-between text-[11px]">
                          <span className="text-white/50 font-mono">Capacity: {train.kw}</span>
                          <span className={`font-mono font-semibold transition-colors duration-300 ${isActivated ? "text-white" : "text-white/30"}`}>
                            {isActivated ? train.load : "--"}
                          </span>
                        </div>
                        {/* Animated Bar indicator */}
                        <div className="w-full h-1 bg-white/[0.06] rounded-full mt-2.5 overflow-hidden">
                          <div 
                            className="h-full bg-[#3daeff] rounded-full transition-all duration-700 ease-out" 
                            style={{ 
                              width: isActivated 
                                ? (train.status === "ONLINE" ? "75%" : "25%") 
                                : "0%" 
                            }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Compute Load Destination with Power Bus Flow Connection */}
                <motion.div 
                  initial={{ opacity: 0.6 }}
                  animate={{ opacity: activeStep >= 5 ? 1 : 0.6 }}
                  className={`p-3.5 rounded-lg bg-[#04070f] border transition-all duration-500 flex items-center justify-between ${
                    activeStep >= 5 ? "border-[#00e878]/30 shadow-[0_0_20px_rgba(0,232,120,0.06)]" : "border-white/[0.06]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-colors duration-500 ${
                      activeStep >= 5 ? "bg-[#3daeff]/15 border-[#3daeff]/40 text-[#3daeff]" : "bg-white/5 border-white/10 text-white/40"
                    }`}>
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white font-mono uppercase tracking-wide">GIGAPOD AI COMPUTE CORES</div>
                      <div className="text-[10px] text-white/40 font-mono">45-ft Ultra-Dense Racks | 100% Load Protected</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`text-[11px] font-mono font-bold transition-all duration-500 ${
                      activeStep >= 5 ? "text-[#00e878]" : "text-white/40"
                    }`}>
                      {activeStep >= 5 ? "9.0 MW TOTAL // ENERGIZED" : "STANDBY"}
                    </span>
                  </div>
                </motion.div>

              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
