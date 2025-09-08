import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./styles/**/*.css",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'fade-in': 'fade-in 1s ease-out',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      colors: {
        // Professional Academic Palette
        primary: {
          DEFAULT: "#2563eb", // blue-600 - Keep as main
          light: "#3b82f6", // blue-500
          dark: "#1e40af", // blue-800
        },
        academic: {
          teal: {
            DEFAULT: "#0d9488", // Deep teal for educational content
            light: "#14b8a6", // teal-500
            dark: "#0f766e", // teal-700
          },
          gold: {
            DEFAULT: "#f59e0b", // Warm gold for highlights and CTAs
            light: "#fbbf24", // amber-400
            dark: "#d97706", // amber-600
          },
          sage: {
            DEFAULT: "#10b981", // Sage green for success states
            light: "#34d399", // emerald-400
            dark: "#059669", // emerald-600
          },
          cyan: {
            DEFAULT: "#06b6d4", // Cyan for tech skills
            light: "#22d3ee", // cyan-400
            dark: "#0891b2", // cyan-600
          },
        },
        // Legacy colors for backward compatibility
        accentGreen: {
          DEFAULT: "#10b981", // Updated to sage green
          light: "#34d399",
          dark: "#059669",
        },
        accentPurple: {
          DEFAULT: "#8b5cf6", // Keep purple for variety
          light: "#a78bfa",
          dark: "#6d28d9",
        },
        accentOrange: {
          DEFAULT: "#f59e0b", // Updated to gold
          light: "#fbbf24",
          dark: "#d97706",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
