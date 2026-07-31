import type { Config } from "tailwindcss";

/**
 * WGHC design tokens.
 * - `navy`    : primary deep medical blue (dominant brand color)
 * - `azure`   : secondary lighter blue for accents & gradients
 * - `terra`   : warm brown / terracotta accent (CTAs, icon backgrounds, dividers) — used sparingly
 * - `sand`    : soft off-white for alternating section backgrounds
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B3B60",
          50: "#EAF2F8",
          100: "#CBDDEC",
          200: "#9CBDD7",
          300: "#6C9CC2",
          400: "#3D7BAD",
          500: "#1E5A8C",
          600: "#0B3B60",
          700: "#0A3253",
          800: "#082742",
          900: "#061D31",
        },
        azure: {
          DEFAULT: "#2E7FB8",
          light: "#4E9AD0",
          dark: "#236490",
        },
        terra: {
          DEFAULT: "#A9683F",
          light: "#C0855F",
          dark: "#8A5A3B",
        },
        sand: "#F7F5F1",
      },
      fontFamily: {
        // Wired up via next/font CSS variables in app/layout.tsx
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
        heading: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 24px -6px rgba(11, 59, 96, 0.12)",
        "card-hover": "0 18px 40px -12px rgba(11, 59, 96, 0.28)",
      },
      borderRadius: {
        xl: "0.9rem",
        "2xl": "1.15rem",
      },
      keyframes: {
        "pulse-line": {
          "0%, 100%": { opacity: "0.25" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "pulse-line": "pulse-line 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
