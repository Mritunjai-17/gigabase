/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#04070f",
        foreground: "#ffffff",
        usdc: {
          dark: "#04070f",
          surface: "#010409",
          panel: "#070c1a",
          card: "#02050c",
          blue: "#3daeff",
          blueHover: "#58c4ff",
          blueDark: "#0082f3",
          green: "#00e878",
          border: "rgba(255, 255, 255, 0.08)",
          borderGlow: "rgba(61, 174, 255, 0.35)",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": {
            boxShadow: "0 20px 50px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.02), 0 0 15px rgba(61, 174, 255, 0.1)",
            borderColor: "rgba(61, 174, 255, 0.15)",
          },
          "50%": {
            boxShadow: "0 20px 50px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.02), 0 0 28px rgba(61, 174, 255, 0.35)",
            borderColor: "rgba(61, 174, 255, 0.45)",
          },
        },
        labelFloat: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-4px)" },
        },
        timelinePulse: {
          "0%": { transform: "scale(0.6)", opacity: "0.8" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
      },
      animation: {
        pulseGlow: "pulseGlow 2.5s infinite ease-in-out",
        labelFloat: "labelFloat 4s ease-in-out infinite",
        timelinePulse: "timelinePulse 2s cubic-bezier(0.16, 1, 0.3, 1) infinite",
      },
    },
  },
  plugins: [],
};
