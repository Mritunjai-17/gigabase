"use client";

import React from "react";
import { COMPARISON_DATA } from "@/data/gigabaseData";
import { Check, X, ShieldCheck, Zap } from "lucide-react";

export default function GigaBaseComparison() {
  return (
    <section className="w-full relative bg-[#04070f] py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-16 border-t border-white/[0.05]">
      {/* Background Ambience */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#3daeff]/[0.03] rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-[1.5px] bg-[#3daeff]"></span>
            <span className="text-[11px] font-semibold text-white/70 tracking-[0.2em] uppercase font-sans">
              SECTION 08 — COMPETITIVE MATRIX
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight uppercase leading-[1.08] max-w-3xl mb-4 font-sans">
            WHAT MAKES OUR SYSTEM <span className="text-[#3daeff]">BETTER FOR AI DEVELOPMENT?</span>
          </h2>

          <p className="text-[14px] md:text-[15px] text-white/65 max-w-2xl leading-[1.8] font-normal font-sans">
            Eliminating vendor sprawl and assembling in controlled factory environments delivers unmatched schedule certainty and engineering quality.
          </p>
        </div>

        {/* Technical Matrix Table */}
        <div className="w-full rounded-xl border border-white/[0.08] bg-[#010409]/95 overflow-hidden">
          {/* Header Row */}
          <div className="grid grid-cols-12 px-6 sm:px-8 py-4 sm:py-4.5 border-b border-white/[0.08] bg-white/[0.01] text-xs font-mono tracking-[0.15em] uppercase text-white/50">
            <div className="col-span-12 sm:col-span-4">CRITERIA</div>
            <div className="hidden sm:block sm:col-span-4 text-[#3daeff] font-bold">
              USDC GIGABASE SYSTEM
            </div>
            <div className="hidden sm:block sm:col-span-4 text-white/40">
              TRADITIONAL DATA CENTERS
            </div>
          </div>

          {/* Matrix Rows */}
          <div className="divide-y divide-white/[0.06]">
            {COMPARISON_DATA.map((row, idx) => (
              <div
                key={row.category}
                className="grid grid-cols-12 px-6 sm:px-8 py-5 sm:py-6 items-start sm:items-center gap-4 sm:gap-0 hover:bg-white/[0.01] transition-colors"
              >
                {/* Category & Title */}
                <div className="col-span-12 sm:col-span-4 flex flex-col pr-4">
                  <span className="text-[10px] font-mono font-bold text-[#3daeff] uppercase tracking-[0.15em]">
                    0{idx + 1} // {row.category}
                  </span>
                  <h3 className="text-lg font-bold text-white tracking-tight uppercase mt-1 font-sans">
                    {row.headline}
                  </h3>
                </div>

                {/* USDC GigaBase Advantage */}
                <div className="col-span-12 sm:col-span-4 p-4 rounded-lg bg-[#3daeff]/[0.04] border border-[#3daeff]/25 sm:mr-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-5 h-5 rounded-md bg-[#3daeff] flex items-center justify-center text-black flex-shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm font-bold text-white font-sans tracking-wide">
                      {row.usdcValue}
                    </span>
                  </div>
                  <p className="text-[12px] md:text-[13px] text-white/50 pl-7 font-normal leading-[1.6] font-sans">
                    {row.usdcSub}
                  </p>
                </div>

                {/* Traditional / Others */}
                <div className="col-span-12 sm:col-span-4 p-4 rounded-lg bg-white/[0.01] border border-white/[0.05]">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-5 h-5 rounded-md bg-white/10 flex items-center justify-center text-white/40 flex-shrink-0">
                      <X className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-semibold text-white/50 font-sans tracking-wide">
                      {row.othersValue}
                    </span>
                  </div>
                  <p className="text-[12px] md:text-[13px] text-white/40 pl-7 font-normal leading-[1.6] font-sans">
                    {row.othersSub}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Matrix Footer Badge */}
          <div className="p-4 sm:p-5 bg-white/[0.02] border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-white/40 gap-2">
            <span>Engineering benchmark verified across high-density AI deployments</span>
            <span className="text-[#3daeff]">USDC Technical Specifications</span>
          </div>
        </div>

      </div>
    </section>
  );
}
