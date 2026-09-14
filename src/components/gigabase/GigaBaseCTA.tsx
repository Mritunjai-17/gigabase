"use client";

import React, { useState } from "react";
import { Building2, Zap, ArrowRight, CheckCircle2, ShieldCheck, Mail, Send } from "lucide-react";
import PartnerWaveBackground from "./PartnerWaveBackground";

export default function GigaBaseCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", capacity: "9 MW", notes: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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

            <p className="text-[14px] md:text-[15px] text-white/65 font-normal leading-[1.8] max-w-[480px] mt-4 mb-8 font-sans">
              Whether you need co-location, a turnkey data center build, or modular GigaBase AI infrastructure — USDC provides the infrastructure, the scale, and the team to deliver.
            </p>

            <div className="flex flex-col gap-3.5">
              <div className="flex items-center gap-2.5 text-xs text-white/70 font-mono">
                <CheckCircle2 className="w-4 h-4 text-[#00e878]" />
                <span>Follow up within one business day from our lead AI infrastructure engineers</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-white/70 font-mono">
                <ShieldCheck className="w-4 h-4 text-[#3daeff]" />
                <span>Pre-engineered 9MW IT building blocks rack-ready in 9 months</span>
              </div>
            </div>
          </div>

          {/* Right Column: USDC Action Box / Form */}
          <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-[520px] rounded-xl border border-white/[0.08] bg-[#010409]/75 backdrop-blur-md p-6 sm:p-8 lg:p-8 xl:p-10">
              
              <div className="border-b border-white/[0.08] pb-5 mb-6">
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide uppercase leading-tight font-sans">
                  BUILD THE FUTURE.
                </h3>
                <h4 className="text-xl sm:text-2xl font-black text-[#3daeff] tracking-wide uppercase leading-tight mt-1 font-sans">
                  POWER THE INTELLIGENCE ERA.
                </h4>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-[#00e878]/[0.08] border border-[#00e878]/30 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#00e878]/20 flex items-center justify-center mx-auto mb-3 text-[#00e878]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h5 className="text-base font-bold text-white uppercase">Inquiry Received</h5>
                  <p className="text-xs text-white/60 mt-1">
                    Our AI infrastructure team will review your requirements and reach out within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="text-[10.5px] font-mono text-white/50 block mb-1 uppercase tracking-wider">
                      FULL NAME / ORGANIZATION
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Vance, Hyperscale Compute"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/[0.08] text-xs text-white placeholder:text-white/25 focus:border-[#3daeff]/60 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[10.5px] font-mono text-white/50 block mb-1 uppercase tracking-wider">
                      WORK EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/[0.08] text-xs text-white placeholder:text-white/25 focus:border-[#3daeff]/60 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10.5px] font-mono text-white/50 block mb-1 uppercase tracking-wider">
                        TARGET CAPACITY
                      </label>
                      <select
                        value={formData.capacity}
                        onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/[0.08] text-xs text-white focus:border-[#3daeff]/60 focus:outline-none transition-colors"
                      >
                        <option value="9 MW">9 MW (1 GigaBase)</option>
                        <option value="18 MW">18 MW (2 Pods)</option>
                        <option value="36 MW">36 MW (Campus)</option>
                        <option value="50+ MW">50+ MW (Custom)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10.5px] font-mono text-white/50 block mb-1 uppercase tracking-wider">
                        TIMELINE TARGET
                      </label>
                      <div className="w-full px-3.5 py-2.5 rounded-lg bg-[#3daeff]/[0.06] border border-[#3daeff]/25 text-xs text-[#3daeff] font-mono font-bold text-center">
                        9 MONTH BUILD
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="group w-full mt-2 py-3.5 bg-[#3daeff] hover:bg-[#52b9ff] text-white text-[12px] font-bold tracking-wider uppercase rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>TALK TO OUR TEAM</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
                  </button>

                  <p className="text-[10.5px] text-white/35 text-center font-mono mt-1">
                    Share a few details and our AI infrastructure team will follow up within one business day.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
