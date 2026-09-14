"use client";

import React from "react";
import Link from "next/link";
import { 
  Zap, 
  Clock, 
  Shield, 
  ArrowRight, 
  ArrowDown, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  Activity,
  Server
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full relative min-h-[calc(100vh-85px)] flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12 py-16 sm:py-24">
        {/* Background Grid Accent */}
        <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none"></div>

        {/* Status Eyebrow Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/[0.08] bg-[#02050c]/80 mb-8 shadow-[0_4px_12px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.05),0_0_15px_rgba(61,174,255,0.06)] relative z-10">
          <span className="w-5 h-[1.5px] bg-[#3daeff] rounded-full"></span>
          <span className="text-[10px] font-semibold text-white/85 tracking-[0.2em] uppercase font-sans">
            Premium Data Center Solutions
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] lg:leading-[70px] font-extrabold tracking-tight max-w-5xl leading-[1.1] text-white mb-6 relative z-10">
          Deploy <span className="text-[#3daeff]">AI Infrastructure</span>
          <br />
          in Months, Not Years
        </h1>

        <p className="text-sm md:text-base text-white/60 max-w-[640px] font-normal leading-[1.65] mb-10 relative z-10">
          We specialize in building and managing state-of-the-art data centers, providing infrastructure solutions tailored for the evolving needs of the digital economy.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-14 w-full sm:w-auto px-4 relative z-10">
          <Link
            href="/gigabase"
            className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-[#3daeff] to-[#0082f3] hover:from-[#58c4ff] hover:to-[#0091ff] text-white text-[13px] font-semibold rounded-[8px] flex items-center justify-center gap-2.5 shadow-[0_4px_20px_rgba(61,174,255,0.25)] hover:shadow-[0_4px_24px_rgba(61,174,255,0.4)] active:scale-[0.98] transition-all duration-200"
          >
            <Layers className="w-4 h-4 text-white" />
            <span>Explore GigaBase System</span>
            <div className="flex items-center justify-center w-[18px] h-[18px] rounded-full border border-white/40">
              <ArrowRight className="w-3 h-3 text-white" />
            </div>
          </Link>

          <Link
            href="/data-center"
            className="w-full sm:w-auto px-6 py-3.5 border border-white/12 hover:border-[#3daeff]/30 hover:bg-white/[0.02] text-white/90 hover:text-white text-[13px] font-semibold rounded-[8px] flex items-center justify-center gap-2.5 active:scale-[0.98] transition-all duration-200"
          >
            <span>Browse Facilities</span>
            <div className="flex items-center justify-center w-[18px] h-[18px] rounded-full border border-white/20">
              <ArrowDown className="w-3 h-3 text-white/70" />
            </div>
          </Link>
        </div>

        {/* Telemetry Capsule */}
        <div className="w-full max-w-4xl mx-auto bg-[#010409]/80 border border-white/[0.10] rounded-[20px] sm:rounded-[24px] py-4 px-4 md:py-6 md:px-8 grid grid-cols-2 md:flex md:flex-row items-center justify-center text-center gap-4 relative z-10 shadow-[0_20px_55px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.03)] hero-capsule-glow">
          <div className="flex-1 flex flex-col items-center gap-1.5 p-2 group">
            <Zap className="w-6 h-6 text-[#3daeff] opacity-90 group-hover:scale-110 transition-transform" />
            <span className="text-xl md:text-[26px] font-bold text-white tracking-tight leading-none">1–50MW+</span>
            <span className="text-[9px] font-semibold text-white/40 tracking-[0.18em] uppercase">Power Capacity</span>
          </div>

          <div className="hidden md:block w-[1px] h-10 bg-gradient-to-b from-[#3daeff]/30 via-[#3daeff]/55 to-[#3daeff]/30"></div>

          <div className="flex-1 flex flex-col items-center gap-1.5 p-2 group">
            <Clock className="w-6 h-6 text-[#3daeff] opacity-90 group-hover:scale-110 transition-transform" />
            <span className="text-xl md:text-[26px] font-bold text-white tracking-tight leading-none">9 Months</span>
            <span className="text-[9px] font-semibold text-white/40 tracking-[0.18em] uppercase">GigaBase Build</span>
          </div>

          <div className="hidden md:block w-[1px] h-10 bg-gradient-to-b from-[#3daeff]/30 via-[#3daeff]/55 to-[#3daeff]/30"></div>

          <div className="flex-1 flex flex-col items-center gap-1.5 p-2 group">
            <Shield className="w-6 h-6 text-[#3daeff] opacity-90 group-hover:scale-110 transition-transform" />
            <span className="text-xl md:text-[26px] font-bold text-white tracking-tight leading-none">TIER III</span>
            <span className="text-[9px] font-semibold text-white/40 tracking-[0.18em] uppercase">Design Standard</span>
          </div>

          <div className="hidden md:block w-[1px] h-10 bg-gradient-to-b from-[#3daeff]/30 via-[#3daeff]/55 to-[#3daeff]/30"></div>

          <div className="flex-1 flex flex-col items-center gap-1.5 p-2 group">
            <Activity className="w-6 h-6 text-[#00e878] opacity-90 group-hover:scale-110 transition-transform" />
            <span className="text-xl md:text-[26px] font-bold text-[#00e878] tracking-tight leading-none">ACTIVE</span>
            <span className="text-[9px] font-semibold text-white/40 tracking-[0.18em] uppercase">Telemetry Status</span>
          </div>
        </div>
      </section>

      {/* Featured Banner linking to the new GigaBase Page */}
      <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 py-10">
        <div className="relative rounded-2xl border border-[#3daeff]/30 bg-gradient-to-r from-[#070c1a] via-[#02050c] to-[#070c1a] p-8 md:p-12 overflow-hidden shadow-[0_0_40px_rgba(61,174,255,0.08)]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#3daeff]/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#3daeff]/40 bg-[#3daeff]/10 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#00e878] animate-ping"></span>
                <span className="text-[10px] font-mono font-bold text-[#3daeff] uppercase tracking-wider">
                  NEW ARCHITECTURE RELEASE
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                GigaBase: 9MW IT Building Blocks in 9 Months
              </h2>
              <p className="text-white/50 text-sm max-w-2xl mt-2">
                Discover our pre-engineered, vertically integrated modular AI data center system featuring distributed 4N/3 power trains and closed-loop liquid cooling.
              </p>
            </div>
            <Link
              href="/gigabase"
              className="px-6 py-3 bg-[#3daeff] hover:bg-[#58c4ff] text-white font-bold text-xs rounded-lg transition-all shadow-[0_4px_16px_rgba(61,174,255,0.3)] whitespace-nowrap flex items-center gap-2"
            >
              <span>Explore GigaBase</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
