import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GigaBase AI Infrastructure System — USDC",
  description: "Pre-engineered, vertically integrated AI data center system deploying 9MW building blocks in 9 months. Engineered by US Data Centers.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark bg-[#04070f] text-white ${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-[#04070f] text-white antialiased overflow-x-hidden selection:bg-[#3daeff]/30 selection:text-white font-sans">
        {/* Ambient atmospheric lighting */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-500/[0.06] rounded-full blur-[140px]"></div>
          <div className="absolute top-[30%] left-[-15%] w-[600px] h-[600px] bg-cyan-600/[0.03] rounded-full blur-[150px]"></div>
          <div className="absolute top-[65%] right-[-10%] w-[700px] h-[700px] bg-blue-600/[0.04] rounded-full blur-[160px]"></div>
        </div>

        <Navbar />
        <main className="relative z-10 min-h-screen pt-[85px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
