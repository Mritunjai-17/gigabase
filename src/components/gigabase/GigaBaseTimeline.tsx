"use client";

import React from "react";
import { Clock, ArrowRight, Zap, TrendingUp, AlertCircle, CheckCircle2 } from "lucide-react";

export default function GigaBaseTimeline() {
  return (
    <section className="w-full relative bg-[#04070f] py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-16 border-t border-white/[0.05]">
      {/* Background Atmosphere */}
      <div className="absolute top-[20%] left-[-15%] w-[600px] h-[600px] bg-blue-600/[0.03] rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-15%] w-[600px] h-[600px] bg-cyan-500/[0.03] rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto flex flex-col items-center">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-5 h-[1.5px] bg-[#3daeff]"></span>
          <span className="text-[10px] font-semibold text-white/90 tracking-[0.2em] uppercase font-sans">
            SECTION 04 — FASTER TIME TO POWER
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center tracking-tight leading-[1.08] mb-4 uppercase font-sans">
          ENERGIZE IN <span className="text-[#3daeff]">HALF THE TIME.</span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-[14px] md:text-[15px] text-white/65 text-center max-w-2xl leading-[1.8] mb-8 md:mb-10 font-sans">
          Site construction and module manufacturing happen in parallel, not sequentially. Competitors move the same work through a waterfall of vendors, adding months at every handoff.
        </p>

        {/* Big Key Metric Highlight Card */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-6 py-3 rounded-xl bg-[#02050c] border border-white/[0.08] mb-10 md:mb-12">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-5 h-5 text-[#3daeff]" />
            <span className="text-2xl sm:text-3xl font-bold text-white font-sans tracking-tight">
              &gt; 6 MONTHS SAVED
            </span>
          </div>
          <div className="hidden sm:block w-[1px] h-6 bg-white/[0.08]"></div>
          <span className="text-xs sm:text-sm font-sans text-white/65">
            Energize in just 9 months vs. 18+ month industry avg.
          </span>
        </div>

        {/* Comparative Parallel vs Sequential Visual Timeline */}
        <div className="w-full rounded-2xl border border-white/[0.08] bg-[#010409]/90 p-6 sm:p-8 lg:p-10">
          
          {/* Track 1: Traditional Waterfall (18+ Months) */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-400" />
                <span className="text-xs sm:text-sm font-bold text-white uppercase font-mono tracking-[0.15em]">
                  TRADITIONAL APPROACH: LINEAR WATERFALL
                </span>
              </div>
              <span className="text-xs font-mono font-bold text-amber-400/90 bg-amber-400/10 px-2.5 py-1 rounded border border-amber-400/20">
                18+ MONTHS
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-2.5">
              <div className="p-3.5 rounded-lg bg-white/[0.015] border border-white/[0.05]">
                <span className="text-[10px] font-mono text-white/40 block">MO. 0–5</span>
                <span className="text-xs font-semibold text-white/80 mt-1 block font-sans">Permitting & Engineering</span>
              </div>
              <div className="p-3.5 rounded-lg bg-white/[0.015] border border-white/[0.05]">
                <span className="text-[10px] font-mono text-white/40 block">MO. 5–11</span>
                <span className="text-xs font-semibold text-white/80 mt-1 block font-sans">Site Civil & Foundation</span>
              </div>
              <div className="p-3.5 rounded-lg bg-white/[0.015] border border-white/[0.05]">
                <span className="text-[10px] font-mono text-white/40 block">MO. 11–16</span>
                <span className="text-xs font-semibold text-white/80 mt-1 block font-sans">Field Electrical Wiring</span>
              </div>
              <div className="p-3.5 rounded-lg bg-white/[0.015] border border-white/[0.05]">
                <span className="text-[10px] font-mono text-amber-400/70 block">MO. 16–18+</span>
                <span className="text-xs font-semibold text-white/80 mt-1 block font-sans">Sequential Commissioning</span>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-white/[0.06] my-8"></div>

          {/* Track 2: GigaBase Parallel Execution (9 Months) */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00e878]" />
                <span className="text-xs sm:text-sm font-bold text-white uppercase font-mono tracking-[0.15em]">
                  GIGABASE SYSTEM: PARALLEL INTEGRATION
                </span>
              </div>
              <span className="text-xs font-mono font-bold text-[#00e878] bg-[#00e878]/10 px-2.5 py-1 rounded border border-[#00e878]/25">
                9 MONTHS (RACK-READY)
              </span>
            </div>

            {/* Parallel visual split */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-3">
              <div className="md:col-span-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.08]">
                <span className="text-[10px] font-mono text-[#3daeff] font-bold block">MONTH 0–2</span>
                <span className="text-xs font-bold text-white mt-1 block font-sans">Site Design & Simulation</span>
                <span className="text-[11px] text-white/50 block mt-1 font-sans">CFD modeling & specs locked</span>
              </div>

              <div className="md:col-span-6 grid grid-cols-1 gap-2">
                {/* Track A: Site Civil */}
                <div className="p-3 rounded-lg bg-white/[0.015] border border-white/[0.06] flex items-center justify-between">
                  <div>
                    <span className="text-[9.5px] font-mono text-[#3daeff] block uppercase">STREAM A // ON-SITE</span>
                    <span className="text-xs font-bold text-white font-sans">Utility Interconnection & Ground Prep</span>
                  </div>
                  <span className="text-[10px] font-mono text-white/50">MO. 1–6</span>
                </div>
                {/* Track B: Factory Manufacturing */}
                <div className="p-3 rounded-lg bg-white/[0.015] border border-white/[0.06] flex items-center justify-between">
                  <div>
                    <span className="text-[9.5px] font-mono text-[#00e878] block uppercase">STREAM B // FACTORY</span>
                    <span className="text-xs font-bold text-white font-sans">Pre-Tested 9MW Modules Built & FAT Tested</span>
                  </div>
                  <span className="text-[10px] font-mono text-white/50">MO. 1–6</span>
                </div>
              </div>

              <div className="md:col-span-3 p-4 rounded-xl bg-[#070c1a] border border-[#00e878]/30">
                <span className="text-[10px] font-mono text-[#00e878] font-bold block">MONTH 6–9</span>
                <span className="text-xs font-bold text-white mt-1 block font-sans">Quick-Connect & Energize</span>
                <span className="text-[11px] text-[#00e878] font-mono block mt-1">100% ONLINE AT MO. 9</span>
              </div>
            </div>

            <p className="text-[12px] font-sans text-white/45 text-center mt-6">
              * Manufacturing equipment while preparing the ground cuts 6+ months off lead times and avoids costly on-site labor delays.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
