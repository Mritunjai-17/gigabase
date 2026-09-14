"use client";

import React from "react";
import Link from "next/link";
import { Building2, Zap, ArrowRight } from "lucide-react";
import PartnerWaveBackground from "./PartnerWaveBackground";

export default function GigaBaseCTA() {
  return (
    <section id="contact" className="w-full bg-[#04070f] py-20 md:py-28 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-16 border-t border-white/[0.05] select-none overflow-hidden">
      <div className="relative w-full max-w-[1280px] mx-auto rounded-2xl border border-white/[0.08] bg-[#02050c] overflow-hidden p-6 sm:p-10 md:p-12 lg:p-14 xl:p-16 min-h-[500px]">
        
        {/* Ambient subtle lighting */}
        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/[0.02] rounded-full blur-[140px] pointer-events-none"></div>

        {/* Subtle flowing wave / particle field background effect */}
        <PartnerWaveBackground />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
          
          {/* Left Column: USDC Value Proposition */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-5 h-[1.5px] bg-[#3daeff]"></span>
              <span className="text-[11px] font-semibold tracking-[0.2em] text-white/70 uppercase font-sans">
                PARTNER WITH US
              </span>
            </div>

            <h2 className="text-[28px] sm:text-[40px] md:text-[48px] lg:text-[50px] font-bold tracking-tight leading-[1.08] text-white uppercase font-sans">
              READY TO OWN THE <span className="text-[#3daeff]">AI INFRASTRUCTURE</span> LAYER?
            </h2>

            <p className="text-[14px] md:text-[15px] text-white/65 font-normal leading-[1.8] max-w-[480px] mt-6 font-sans">
              Whether you need co-location, a turnkey data center build, or modular GigaBase AI infrastructure — USDC provides the infrastructure, the scale, and the team to deliver.
            </p>
          </div>

          {/* Right Column: Action Card matching USDC original */}
          <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-[520px] rounded-2xl border border-white/[0.1] bg-[#010409]/60 backdrop-blur-md p-6 sm:p-8 lg:p-8 xl:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              
              <div className="border-b border-white/[0.08] pb-5 mb-6">
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide uppercase leading-tight font-sans">
                  BUILD THE FUTURE.
                </h3>
                <h4 className="text-xl sm:text-2xl font-black text-[#3daeff] tracking-wide uppercase leading-tight mt-1 font-sans">
                  POWER THE INTELLIGENCE ERA.
                </h4>
              </div>

              {/* Two Value Propositions */}
              <div className="flex flex-col gap-6 mb-8">
                {/* Feature 1 */}
                <div className="flex items-start gap-4 border-b border-white/[0.07] pb-6">
                  <div className="flex items-center justify-center w-11 h-11 rounded-full border border-white/10 bg-white/[0.02] text-white flex-shrink-0">
                    <Building2 className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-black text-[#3daeff] tracking-wider uppercase mb-1 font-sans">
                      SCALE WITHOUT LIMITS
                    </span>
                    <span className="text-[12px] text-white/50 leading-relaxed font-normal font-sans">
                      Purpose-built facilities designed to grow with your ambitions.
                    </span>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-4 border-b border-white/[0.07] pb-6">
                  <div className="flex items-center justify-center w-11 h-11 rounded-full border border-white/10 bg-white/[0.02] text-white flex-shrink-0">
                    <Zap className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-black text-[#3daeff] tracking-wider uppercase mb-1 font-sans">
                      PERFORMANCE WITHOUT COMPROMISE
                    </span>
                    <span className="text-[12px] text-white/50 leading-relaxed font-normal font-sans">
                      High-density power, advanced cooling and elite connectivity for AI at scale.
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3.5 sm:gap-4">
                <a
                  href="#contact"
                  className="group flex items-center justify-center gap-2.5 px-5 py-3.5 bg-[#3daeff] hover:bg-[#52b9ff] text-white text-[11px] font-black tracking-wider uppercase rounded-lg transition-all duration-200 cursor-pointer"
                >
                  <span>TALK TO OUR TEAM</span>
                  <div className="flex items-center justify-center w-4 h-4 rounded-full bg-white/20 text-white transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                </a>

                <a
                  href="#contact"
                  className="group flex items-center justify-center gap-2.5 px-5 py-3.5 bg-white/[0.02] hover:bg-white/[0.05] border border-white/15 hover:border-white/30 text-white text-[11px] font-black tracking-wider uppercase rounded-lg transition-all duration-200 cursor-pointer"
                >
                  <span>VIEW DECK</span>
                  <div className="flex items-center justify-center w-4 h-4 rounded-full border border-white/25 text-white transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
