import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#080B13",
          900: "#0E1524",
          800: "#151E32",
          700: "#1E2C46",
          600: "#2A3D5F",
        },
        brand: {
          blue: "#2F6FE0",
          "blue-dark": "#1E4FB0",
          "blue-light": "#6FA8FF",
          glow: "#7FC4FF",
        },
        steel: {
          100: "#EEF1F7",
          300: "#AEB8CB",
          400: "#8B96AC",
          500: "#6B7690",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(180deg, rgba(47,111,224,0.08) 0%, rgba(8,11,19,0) 60%)",
        "radial-glow":
          "radial-gradient(circle at 50% 0%, rgba(47,111,224,0.25), transparent 60%)",
      },
      boxShadow: {
        "brand-glow": "0 0 0 1px rgba(47,111,224,0.4), 0 8px 30px -8px rgba(47,111,224,0.45)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
