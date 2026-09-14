"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Cpu, Zap, Clock, ShieldCheck, Activity, Terminal } from "lucide-react";
import { motion, useInView } from "framer-motion";

function AnimatedCounter({ 
  from = 0, 
  to, 
  duration = 1.6, 
  suffix = "" 
}: { 
  from?: number; 
  to: number; 
  duration?: number; 
  suffix?: string;
}) {
  const [current, setCurrent] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });

  useEffect(() => {
    if (!inView) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setCurrent(to);
      return;
    }

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      // Smooth ease-out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(from + (to - from) * ease));
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [inView, from, to, duration]);

  return (
    <span ref={ref}>
      {current}{suffix}
    </span>
  );
}

export default function GigaBaseHero() {
  return (
    <section className="w-full relative min-h-[92vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12 lg:px-16 pt-12 pb-20 overflow-hidden bg-[#04070f]">
      {/* Background AI Infrastructure Visual & Atmospheric Overlays */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        {/* Real Modular AI Data Center Infrastructure Visual */}
        <img
          src="/images/gigabase-hero-bg.jpg"
          alt="USDC GigaBase Modular AI Data Center Infrastructure"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-85 brightness-110 contrast-105"
        />

        {/* Targeted central vignette: keeps the area behind the headline readable while leaving the infrastructure clearly visible */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#04070f]/85 via-[#04070f]/45 to-[#04070f]/15"></div>

        {/* Top fade from navbar */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#04070f] via-[#04070f]/70 to-transparent"></div>

        {/* Bottom fade seamlessly joining next section */}
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#04070f] via-[#04070f]/70 to-transparent"></div>
      </div>

      {/* Background Engineering Grids and Glow */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none z-0"></div>
      <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-blue-500/[0.06] rounded-full blur-[130px] pointer-events-none z-0"></div>
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/[0.04] rounded-full blur-[140px] pointer-events-none z-0"></div>

      {/* Eyebrow & Status Telemetry */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-wrap items-center justify-center gap-3.5 mb-5 relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md border border-[#00e878]/30 bg-[#00e878]/[0.05]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00e878] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00e878]"></span>
          </span>
          <span className="text-[10px] font-mono font-bold text-[#00e878] tracking-[0.15em] uppercase">
            SYS STATUS: ACTIVE
          </span>
        </div>

        <div className="inline-flex items-center gap-2">
          <span className="w-3.5 h-[1.5px] bg-[#3daeff]"></span>
          <span className="text-[10px] font-semibold text-white/90 tracking-[0.2em] uppercase font-sans">
            AI INFRASTRUCTURE SYSTEM
          </span>
        </div>
      </motion.div>

      {/* Hero Headline */}
      <motion.h1 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-[60px] lg:leading-[66px] font-bold tracking-tight max-w-5xl leading-[1.1] text-white mb-5 relative z-10 uppercase font-sans"
      >
        BUILD AI INFRASTRUCTURE
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-[#3daeff]">
          IN MONTHS, NOT YEARS.
        </span>
      </motion.h1>

      {/* Sub-headline / Description */}
      <motion.p 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="text-[14px] md:text-[15px] text-white/65 font-normal leading-[1.8] max-w-[600px] mb-8 relative z-10 font-sans"
      >
        <span className="text-white/90 font-medium">GigaBase</span> is our pre-engineered, vertically integrated data center system that helps AI operators deploy compute capacity faster.
      </motion.p>

      {/* CTA Row */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        className="flex flex-col sm:flex-row items-center gap-3 mb-12 sm:mb-14 w-full sm:w-auto px-4 relative z-10 font-sans"
      >
        <a
          href="#contact"
          className="group w-full sm:w-auto px-6 py-3 bg-[#3daeff] hover:bg-[#52b9ff] text-white text-[13px] font-bold tracking-wide rounded-lg flex items-center justify-center gap-2 transition-colors duration-200 cursor-pointer"
        >
          <span>Contact Sales</span>
          <ArrowRight className="w-3.5 h-3.5 text-white transition-transform duration-200 group-hover:translate-x-0.5" />
        </a>

        <a
          href="#modules"
          className="group w-full sm:w-auto px-6 py-3 bg-white/[0.02] hover:bg-white/[0.05] border border-white/15 hover:border-white/35 text-white/90 hover:text-white text-[13px] font-semibold tracking-wide rounded-lg flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer"
        >
          <Cpu className="w-3.5 h-3.5 text-[#3daeff]" />
          <span>Explore 8 Modular Blocks</span>
        </a>
      </motion.div>

      {/* Metrics Capsule — Engineered Technical Panel with Animated Counters */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-4xl mx-auto bg-[#010409]/90 border border-white/[0.08] rounded-xl py-5 px-6 sm:px-8 grid grid-cols-1 sm:grid-cols-3 items-center justify-center text-center gap-4 relative z-10"
      >
        {/* Metric 1 */}
        <div className="flex-1 flex flex-col items-center gap-1.5 p-3 group">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#3daeff]" />
            <span className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-none group-hover:text-[#3daeff] transition-colors font-sans">
              <AnimatedCounter from={0} to={9} duration={1.5} suffix=" Months" />
            </span>
          </div>
          <span className="text-[10px] font-bold text-white/50 tracking-[0.15em] uppercase font-mono mt-1">
            TO ENERGIZATION
          </span>
          <span className="text-[10px] text-white/40 font-mono">Vs. 18+ month standard</span>
        </div>

        <div className="hidden sm:block w-[1px] h-12 bg-white/[0.08]"></div>

        {/* Metric 2 */}
        <div className="flex-1 flex flex-col items-center gap-1.5 p-3 group">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#3daeff]" />
            <span className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-none group-hover:text-[#3daeff] transition-colors font-sans">
              <AnimatedCounter from={0} to={9} duration={1.5} suffix=" MW" />
            </span>
          </div>
          <span className="text-[10px] font-bold text-white/50 tracking-[0.15em] uppercase font-mono mt-1">
            IT BUILDING BLOCKS
          </span>
          <span className="text-[10px] text-white/40 font-mono">Modular scalable pods</span>
        </div>

        <div className="hidden sm:block w-[1px] h-12 bg-white/[0.08]"></div>

        {/* Metric 3 */}
        <div className="flex-1 flex flex-col items-center gap-1.5 p-3 group">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#00e878]" />
            <span className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-none group-hover:text-[#00e878] transition-colors font-sans">
              <AnimatedCounter from={0} to={90} duration={1.7} suffix="%" />
            </span>
          </div>
          <span className="text-[10px] font-bold text-white/50 tracking-[0.15em] uppercase font-mono mt-1">
            REDUCTION IN FIELD LABOR
          </span>
          <span className="text-[10px] text-white/40 font-mono">Vs. Industry Norm</span>
        </div>
      </motion.div>
    </section>
  );
}

