import React from "react";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Cpu } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full relative overflow-hidden bg-[#04070f] border-t border-white/[0.06] pt-16 pb-12">
      {/* Background glow effects */}
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-500/[0.03] rounded-full blur-[110px] pointer-events-none"></div>
      <div className="absolute top-0 right-10 w-[400px] h-[300px] bg-cyan-500/[0.02] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 flex flex-col gap-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3daeff] to-[#0082f3] flex items-center justify-center shadow-[0_0_16px_rgba(61,174,255,0.4)]">
                <span className="text-white font-black text-sm tracking-tighter">US</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-extrabold text-[16px] tracking-[0.18em] leading-tight">USDC</span>
                <span className="text-white/40 text-[8px] font-mono tracking-[0.25em] uppercase">DATA CENTERS</span>
              </div>
            </Link>

            <p className="text-[13.5px] text-white/45 max-w-[380px] leading-[1.8] mt-5 font-normal">
              Transforming underutilized energy assets into enterprise-scale AI infrastructure. Fast-track deployment of modular, high-density AI compute pods.
            </p>

            <div className="w-full h-px bg-gradient-to-r from-[#3daeff]/35 via-blue-500/10 to-transparent my-6"></div>

            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/[0.08] bg-white/[0.02]">
                <span className="w-2 h-2 rounded-full bg-[#00e878] animate-ping"></span>
                <span className="text-[10px] font-mono font-bold text-white/70 tracking-widest uppercase">
                  SYS STATUS: ALL PODS ACTIVE
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/[0.08] bg-white/[0.02]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#3daeff]" />
                <span className="text-[10px] font-mono text-white/70">TIER III STANDARD</span>
              </div>
            </div>
          </div>

          {/* Links: Infrastructure */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-[11px] font-mono font-bold text-white/70 tracking-[0.2em] uppercase mb-1">
              INFRASTRUCTURE
            </h4>
            <Link href="/gigabase" className="text-[13.5px] text-[#3daeff] font-medium hover:text-white transition-colors flex items-center gap-1.5">
              <span>GigaBase AI System</span>
              <span className="text-[9px] bg-[#3daeff]/20 text-[#3daeff] px-1 py-0.2 rounded font-mono">9-MO</span>
            </Link>
            <Link href="/arms" className="text-[13px] text-white/50 hover:text-white transition-colors">
              ARMS Modular Compute
            </Link>
            <Link href="/energy" className="text-[13px] text-white/50 hover:text-white transition-colors">
              Energy & Power Skids
            </Link>
            <Link href="/data-center" className="text-[13px] text-white/50 hover:text-white transition-colors">
              Enterprise Facilities
            </Link>
            <Link href="/global-network" className="text-[13px] text-white/50 hover:text-white transition-colors">
              High-Speed Interconnects
            </Link>
          </div>

          {/* Links: Company & Insights */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-[11px] font-mono font-bold text-white/70 tracking-[0.2em] uppercase mb-1">
              COMPANY
            </h4>
            <Link href="/management-team" className="text-[13px] text-white/50 hover:text-white transition-colors">
              Management Team
            </Link>
            <Link href="/press-release" className="text-[13px] text-white/50 hover:text-white transition-colors">
              Press Releases
            </Link>
            <Link href="/news-insights" className="text-[13px] text-white/50 hover:text-white transition-colors">
              News & Insights
            </Link>
            <Link href="/career" className="text-[13px] text-white/50 hover:text-white transition-colors">
              Careers
            </Link>
          </div>

          {/* Contact / Specs Card */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-[11px] font-mono font-bold text-white/70 tracking-[0.2em] uppercase mb-1">
              DEPLOYMENT
            </h4>
            <p className="text-[11.5px] text-white/40 leading-relaxed">
              Target energization within 9 months. Speak to our lead data center engineers.
            </p>
            <Link 
              href="/contact" 
              className="mt-2 inline-flex items-center justify-between px-3.5 py-2 rounded-lg bg-white/[0.04] hover:bg-[#3daeff]/20 border border-white/[0.1] hover:border-[#3daeff]/40 text-[11px] font-bold text-white transition-all group"
            >
              <span>Talk to Engineering</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#3daeff] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/35 font-mono">
          <div>
            © {new Date().getFullYear()} US Data Centers, Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-white/60 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white/60 transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-white/60 transition-colors cursor-pointer">Security Portal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
