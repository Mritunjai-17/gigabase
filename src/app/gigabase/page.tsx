import React from "react";
import type { Metadata } from "next";
import GigaBaseHero from "@/components/gigabase/GigaBaseHero";
import GigaBaseOverview from "@/components/gigabase/GigaBaseOverview";
import GigaBaseModules from "@/components/gigabase/GigaBaseModules";
import GigaBaseTimeline from "@/components/gigabase/GigaBaseTimeline";
import GigaBaseBuildProcess from "@/components/gigabase/GigaBaseBuildProcess";
import GigaBaseStack from "@/components/gigabase/GigaBaseStack";
import GigaBaseFullStack from "@/components/gigabase/GigaBaseFullStack";
import GigaBaseComparison from "@/components/gigabase/GigaBaseComparison";
import GigaBaseCTA from "@/components/gigabase/GigaBaseCTA";

export const metadata: Metadata = {
  title: "GigaBase AI Data Center System — US Data Centers",
  description: "Pre-engineered, vertically integrated AI data center system that helps AI operators deploy 9MW compute blocks in 9 months. Powered by US Data Centers.",
};

export default function GigaBasePage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#04070f] text-white">
      {/* SECTION 01 — HERO */}
      <GigaBaseHero />

      {/* SECTION 02 — WHAT IS GIGABASE? */}
      <GigaBaseOverview />

      {/* SECTION 03 — MODULE-BY-MODULE SYSTEM */}
      <GigaBaseModules />

      {/* SECTION 04 — TIMELINE */}
      <GigaBaseTimeline />

      {/* SECTION 05 — OUR 9-MONTH BUILD PROCESS */}
      <GigaBaseBuildProcess />

      {/* SECTION 06 — COMPRESSING THE STACK */}
      <GigaBaseStack />

      {/* SECTION 07 — FULL STACK */}
      <GigaBaseFullStack />

      {/* SECTION 08 — COMPETITIVE COMPARISON */}
      <GigaBaseComparison />

      {/* SECTION 09 — FINAL CTA */}
      <GigaBaseCTA />
    </div>
  );
}
