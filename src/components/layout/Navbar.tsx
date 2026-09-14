"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Server, 
  Zap, 
  Globe, 
  Database, 
  Users, 
  Newspaper, 
  MessageSquare, 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight,
  Cpu,
  Layers
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [infraDropdownOpen, setInfraDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`w-full fixed top-0 left-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-12 transition-all duration-300 ${
        scrolled ? "bg-[#04070f]/90 backdrop-blur-xl border-b border-white/[0.06] h-[75px]" : "bg-transparent h-[85px]"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
    >
      {/* Brand Logo */}
      <div className="flex-shrink-0 relative z-50">
        <Link href="/" className="hover:opacity-80 transition-opacity duration-200 flex items-center gap-2.5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3daeff] to-[#0082f3] flex items-center justify-center shadow-[0_0_16px_rgba(61,174,255,0.4)]">
              <span className="text-white font-black text-sm tracking-tighter">US</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-extrabold text-[15px] sm:text-[17px] tracking-[0.18em] leading-tight">USDC</span>
              <span className="text-white/40 text-[7.5px] font-mono tracking-[0.25em] uppercase">DATA CENTERS</span>
            </div>
          </div>
        </Link>
      </div>

      {/* Desktop Navigation Pill */}
      <nav className="hidden lg:flex items-center gap-2.5 xl:gap-6 px-4 xl:px-6 py-2 bg-white/[0.03] backdrop-blur-md border border-white/[0.08] rounded-[10px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300">
        <div className="flex items-center gap-3 lg:gap-3.5 xl:gap-[24px] flex-shrink-0">
          
          {/* Infrastructure Dropdown */}
          <div 
            className="relative py-1.5"
            onMouseEnter={() => setInfraDropdownOpen(true)}
            onMouseLeave={() => setInfraDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-[13px] xl:text-[14px] font-medium transition-all duration-300 cursor-pointer font-sans whitespace-nowrap text-white/80 hover:text-[#3daeff]">
              <span>Infrastructure</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 text-white/50 ${infraDropdownOpen ? "rotate-180 text-[#3daeff]" : ""}`} />
            </button>

            {infraDropdownOpen && (
              <div className="absolute top-[calc(100%+6px)] left-1/2 -translate-x-1/2 w-[280px] rounded-[16px] overflow-hidden bg-[#070c1a]/98 backdrop-blur-2xl border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(61,174,255,0.1)] p-2 z-50">
                <div className="relative h-[2px] w-full overflow-hidden mb-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#3daeff]/60 to-transparent"></div>
                </div>

                {/* Highlight GigaBase Route */}
                <Link 
                  href="/gigabase"
                  className="group relative flex items-center gap-3 px-3 py-2.5 rounded-[10px] transition-all duration-200 bg-[#3daeff]/[0.08] border border-[#3daeff]/20 hover:bg-[#3daeff]/[0.15] mb-1"
                >
                  <div className="w-8 h-8 rounded-[8px] bg-[#3daeff]/20 border border-[#3daeff]/40 flex items-center justify-center text-[#3daeff]">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[13px] font-bold text-white leading-tight">GigaBase System</span>
                      <span className="text-[8px] bg-[#3daeff] text-black font-extrabold px-1 rounded">NEW</span>
                    </div>
                    <div className="text-[10.5px] text-[#3daeff]/80 mt-0.5 leading-tight">Modular AI infrastructure</div>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-[#3daeff]" />
                </Link>

                <Link href="/arms" className="group flex items-center gap-3 px-3 py-2 rounded-[10px] transition-all duration-200 hover:bg-white/[0.04]">
                  <div className="w-7 h-7 rounded-[7px] bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-white/50 group-hover:text-[#3daeff]">
                    <Server className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[12.5px] font-semibold text-white/80 group-hover:text-white">ARMS</div>
                    <div className="text-[10px] text-white/35">Modular AI systems</div>
                  </div>
                </Link>

                <Link href="/energy" className="group flex items-center gap-3 px-3 py-2 rounded-[10px] transition-all duration-200 hover:bg-white/[0.04]">
                  <div className="w-7 h-7 rounded-[7px] bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-white/50 group-hover:text-[#3daeff]">
                    <Zap className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[12.5px] font-semibold text-white/80 group-hover:text-white">Energy</div>
                    <div className="text-[10px] text-white/35">Sustainable power grid</div>
                  </div>
                </Link>

                <Link href="/global-network" className="group flex items-center gap-3 px-3 py-2 rounded-[10px] transition-all duration-200 hover:bg-white/[0.04]">
                  <div className="w-7 h-7 rounded-[7px] bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-white/50 group-hover:text-[#3daeff]">
                    <Globe className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[12.5px] font-semibold text-white/80 group-hover:text-white">Global Network</div>
                    <div className="text-[10px] text-white/35">US footprint backbone</div>
                  </div>
                </Link>

                <Link href="/data-center" className="group flex items-center gap-3 px-3 py-2 rounded-[10px] transition-all duration-200 hover:bg-white/[0.04]">
                  <div className="w-7 h-7 rounded-[7px] bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-white/50 group-hover:text-[#3daeff]">
                    <Database className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[12.5px] font-semibold text-white/80 group-hover:text-white">Data Center</div>
                    <div className="text-[10px] text-white/35">Enterprise facilities</div>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Direct GigaBase Link */}
          <Link 
            href="/gigabase" 
            className={`relative text-[13px] xl:text-[14px] font-medium transition-colors duration-300 py-1 font-sans whitespace-nowrap flex items-center gap-1.5 ${
              pathname === "/gigabase" ? "text-[#3daeff]" : "text-white/80 hover:text-[#3daeff]"
            }`}
          >
            <span>GigaBase</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e878] animate-pulse"></span>
          </Link>

          {/* Company Dropdown */}
          <div 
            className="relative py-1.5"
            onMouseEnter={() => setCompanyDropdownOpen(true)}
            onMouseLeave={() => setCompanyDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-[13px] xl:text-[14px] font-medium transition-all duration-300 cursor-pointer font-sans whitespace-nowrap text-white/80 hover:text-[#3daeff]">
              <span>Company</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 text-white/50 ${companyDropdownOpen ? "rotate-180 text-[#3daeff]" : ""}`} />
            </button>

            {companyDropdownOpen && (
              <div className="absolute top-[calc(100%+6px)] left-1/2 -translate-x-1/2 w-[240px] rounded-[16px] overflow-hidden bg-[#070c1a]/98 backdrop-blur-2xl border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-2 z-50">
                <Link href="/management-team" className="group flex items-center gap-3 px-3 py-2 rounded-[10px] transition-all duration-200 hover:bg-white/[0.04]">
                  <div className="w-7 h-7 rounded-[7px] bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-white/50 group-hover:text-[#3daeff]">
                    <Users className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[12.5px] font-semibold text-white/80 group-hover:text-white">Management</div>
                    <div className="text-[10px] text-white/35">Meet our leadership</div>
                  </div>
                </Link>
                <Link href="/press-release" className="group flex items-center gap-3 px-3 py-2 rounded-[10px] transition-all duration-200 hover:bg-white/[0.04]">
                  <div className="w-7 h-7 rounded-[7px] bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-white/50 group-hover:text-[#3daeff]">
                    <Newspaper className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[12.5px] font-semibold text-white/80 group-hover:text-white">Press Release</div>
                    <div className="text-[10px] text-white/35">Latest announcements</div>
                  </div>
                </Link>
              </div>
            )}
          </div>

          <Link href="/news-insights" className="text-[13px] xl:text-[14px] font-medium transition-colors duration-300 py-1 text-white/80 hover:text-[#3daeff] whitespace-nowrap">
            News & insight
          </Link>
          <Link href="/use-cases" className="text-[13px] xl:text-[14px] font-medium transition-colors duration-300 py-1 text-white/80 hover:text-[#3daeff] whitespace-nowrap">
            Use Cases
          </Link>
          <Link href="/career" className="text-[13px] xl:text-[14px] font-medium transition-colors duration-300 py-1 text-white/80 hover:text-[#3daeff] whitespace-nowrap">
            Career
          </Link>
        </div>

        <div className="w-[1px] h-5 bg-white/[0.12]"></div>

        <Link 
          href="/contact" 
          className="flex items-center justify-center gap-1.5 px-4 xl:px-5 py-2 bg-gradient-to-r from-[#3daeff] to-[#0082f3] hover:from-[#58c4ff] hover:to-[#0091ff] rounded-[8px] text-[11px] font-bold text-white shadow-[0_4px_12px_rgba(61,174,255,0.25)] hover:shadow-[0_4px_16px_rgba(61,174,255,0.35)] transition-all duration-300 whitespace-nowrap"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Contact Us</span>
        </Link>
      </nav>

      {/* Mobile Toggle Button */}
      <div className="flex lg:hidden items-center gap-3">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00e878] animate-ping"></span>
          <span className="text-[8px] font-mono text-white/70 tracking-widest">ACTIVE</span>
        </div>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex items-center justify-center w-10 h-10 text-white rounded-lg border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.08]"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed top-[75px] left-0 w-full bg-[#04070f]/98 border-b border-white/[0.08] backdrop-blur-2xl flex flex-col p-6 gap-4 lg:hidden shadow-[0_20px_50px_rgba(0,0,0,0.95)] z-50">
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00e878] animate-ping"></span>
              <span className="text-[10px] font-mono font-bold text-white/50 tracking-[0.15em]">SYS STATUS: ACTIVE</span>
            </div>
            <span className="text-[10px] font-mono text-[#3daeff]">DCIM v4.8</span>
          </div>

          <Link 
            href="/gigabase" 
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between p-3 rounded-xl bg-[#3daeff]/10 border border-[#3daeff]/30 text-white font-semibold"
          >
            <div className="flex items-center gap-2.5">
              <Layers className="w-4 h-4 text-[#3daeff]" />
              <span className="text-[14px]">GigaBase AI System</span>
            </div>
            <span className="text-[9px] bg-[#3daeff] text-black font-bold px-1.5 py-0.5 rounded">9-MO BUILD</span>
          </Link>

          <Link href="/news-insights" onClick={() => setMobileMenuOpen(false)} className="text-[14px] text-white/80 hover:text-[#3daeff] py-2 border-b border-white/[0.05]">
            News & insight
          </Link>
          <Link href="/arms" onClick={() => setMobileMenuOpen(false)} className="text-[14px] text-white/80 hover:text-[#3daeff] py-2 border-b border-white/[0.05]">
            ARMS Infrastructure
          </Link>
          <Link href="/energy" onClick={() => setMobileMenuOpen(false)} className="text-[14px] text-white/80 hover:text-[#3daeff] py-2 border-b border-white/[0.05]">
            Energy Platform
          </Link>
          <Link href="/data-center" onClick={() => setMobileMenuOpen(false)} className="text-[14px] text-white/80 hover:text-[#3daeff] py-2 border-b border-white/[0.05]">
            Enterprise Data Centers
          </Link>
          <Link href="/career" onClick={() => setMobileMenuOpen(false)} className="text-[14px] text-white/80 hover:text-[#3daeff] py-2 border-b border-white/[0.05]">
            Career
          </Link>

          <Link 
            href="/contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="w-full py-3 bg-gradient-to-r from-[#3daeff] to-[#0082f3] text-white text-center font-bold text-xs rounded-lg shadow-[0_4px_16px_rgba(61,174,255,0.3)] mt-2"
          >
            Contact Sales
          </Link>
        </div>
      )}
    </header>
  );
}
