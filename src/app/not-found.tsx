import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#010409] text-white flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl font-bold font-mono text-[#3daeff] mb-4">404</h1>
      <p className="text-white/60 mb-6 font-sans">The requested infrastructure page was not found.</p>
      <Link
        href="/"
        className="px-5 py-2.5 rounded-lg bg-[#3daeff]/10 border border-[#3daeff]/30 text-[#3daeff] font-mono text-sm hover:bg-[#3daeff]/20 transition-colors"
      >
        Return to GigaBase
      </Link>
    </div>
  );
}
