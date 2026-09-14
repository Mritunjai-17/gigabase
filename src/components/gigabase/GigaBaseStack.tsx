"use client";

import React, { useState } from "react";
import { TRADITIONAL_VENDORS } from "@/data/gigabaseData";
import { Layers, ArrowRight, CheckCircle2, ShieldAlert, GitCommit, Sparkles } from "lucide-react";

export default function GigaBaseStack() {
  const [hoveredVendor, setHoveredVendor] = useState<number | null>(null);

  return (
    <section className="w-full relative bg-[#04070f] py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-16 border-t border-white/[0.05]">
      {/* Background Gradients */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-red-500/[0.02] rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/[0.03] rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-[1.5px] bg-[#3daeff]"></span>
            <span className="text-[10px] font-semibold text-white/90 tracking-[0.2em] uppercase font-sans">
              SECTION 06 — FRICTIONLESS INTEGRATION
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight uppercase leading-[1.08] mb-4 font-sans">
            COMPRESSING <span className="text-[#3daeff]">THE STACK.</span>
          </h2>

          <p className="text-[14px] md:text-[15px] text-white/65 max-w-2xl leading-[1.8] font-normal font-sans">
            10 vendor hand-offs mean 10 places your project can stall. We eliminate those gaps and protect your timeline.
          </p>
        </div>

        {/* Compression Comparison Card: 10 Fragmented Nodes vs 1 Unified System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Panel: Traditional Fragmented 10-Vendor Maze */}
          <div className="lg:col-span-6 rounded-2xl border border-white/[0.07] bg-[#02050c] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-6">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-[0.15em]">
                    TRADITIONAL APPROACH
                  </span>
                </div>
                <span className="text-[10px] font-mono text-amber-400/90 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded font-bold">
                  10 DISPARATE CONTRACTS
                </span>
              </div>

              <p className="text-xs text-white/50 mb-5 font-sans leading-[1.6]">
                Fragmented responsibility creates delay cascades, margin stacking, and finger-pointing when energization targets slip.
              </p>

              {/* 10 Vendors Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {TRADITIONAL_VENDORS.map((v, i) => (
                  <div
                    key={v.step}
                    onMouseEnter={() => setHoveredVendor(i)}
                    onMouseLeave={() => setHoveredVendor(null)}
                    className={`p-2.5 rounded-lg border transition-all text-left flex items-center gap-2.5 ${
                      hoveredVendor === i 
                        ? "bg-amber-400/[0.05] border-amber-400/25" 
                        : "bg-white/[0.01] border-white/[0.04]"
                    }`}
                  >
                    <span className="text-[10px] font-mono text-white/40 font-bold">{v.step}</span>
                    <span className="text-[11.5px] text-white/70 font-sans truncate">{v.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-amber-400/70">
              <span>Risk: 10 Hand-off Failure Points</span>
              <span>18–24 Months</span>
            </div>
          </div>

          {/* Right Panel: USDC Single Unified System */}
          <div className="lg:col-span-6 rounded-2xl border border-[#3daeff]/30 bg-[#070c1a] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-6">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#3daeff]" />
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-[0.15em]">
                    USDC GIGABASE SYSTEM
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#00e878] bg-[#00e878]/10 border border-[#00e878]/30 px-2 py-0.5 rounded font-bold">
                  ONE RELIABLE PARTNER
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight uppercase mb-3 font-sans">
                Everything from site selection to energization in a single relationship.
              </h3>

              <p className="text-[13px] sm:text-[14px] text-white/65 leading-[1.75] mb-6 font-normal font-sans">
                We manufacture the modules, engineer the substation, prep the land, and execute turn-key commissioning under one engineering warranty.
              </p>

              {/* Compressed Flow Visualization */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#3daeff]">
                  <span>INTEGRATED SYSTEM ARCHITECTURE</span>
                  <span className="text-[#00e878] font-bold">0 HAND-OFF DELAYS</span>
                </div>

                <div className="flex items-center justify-between gap-2 p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                  <span className="text-xs font-mono font-bold text-white">POWERED LAND</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#3daeff]" />
                  <span className="text-xs font-mono font-bold text-white">FACTORY MFG</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#3daeff]" />
                  <span className="text-xs font-mono font-bold text-[#00e878]">ENERGIZED 9MW</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#00e878]">
              <span>Single Point of Contact & Responsibility</span>
              <span className="font-bold">9 Months Guaranteed</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
