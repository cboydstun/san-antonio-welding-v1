import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Modern Industrial Color Palette
        primary: {
          DEFAULT: "#DC2626", // Bold Red - Welding flame
          dark: "#B91C1C",
          light: "#EF4444",
        },
        industrial: {
          DEFAULT: "#374151", // Gunmetal Gray - Industrial machinery
          dark: "#1F2937",
          light: "#4B5563",
        },
        safety: {
          DEFAULT: "#FCD34D", // Safety Yellow - High visibility
          dark: "#F59E0B",
          light: "#FDE68A",
        },
        steel: {
          DEFAULT: "#6B7280", // Steel Gray - Secondary elements
          dark: "#4B5563",
          light: "#9CA3AF",
        },
        deep: {
          DEFAULT: "#111827", // Deep Black - Dramatic backgrounds
          dark: "#030712",
          light: "#1F2937",
        },
        // Standard colors
        white: "#FFFFFF",
        black: "#000000",
      },
      fontFamily: {
        industrial: ["Inter", "system-ui", "sans-serif"],
        bold: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: ["4rem", { lineHeight: "1.1", fontWeight: "900" }],
        mega: ["3rem", { lineHeight: "1.2", fontWeight: "800" }],
        industrial: ["1.5rem", { lineHeight: "1.3", fontWeight: "700" }],
      },
      boxShadow: {
        industrial:
          "0 10px 25px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.1)",
        dramatic: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
        glow: "0 0 20px rgba(220, 38, 38, 0.3)",
      },
      backgroundImage: {
        "industrial-gradient":
          "linear-gradient(135deg, #111827 0%, #374151 100%)",
        "fire-gradient": "linear-gradient(135deg, #DC2626 0%, #EF4444 100%)",
        "steel-gradient": "linear-gradient(135deg, #374151 0%, #6B7280 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
