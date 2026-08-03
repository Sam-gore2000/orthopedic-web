/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F766E",
          light: "#14B8A6",
          deep: "#0B5A54",
        },
        secondary: "#14B8A6",
        accent: {
          DEFAULT: "#2563EB",
          violet: "#7C3AED",
        },
        success: "#22C55E",
        warning: "#F59E0B",
        danger: "#EF4444",
        surface: {
          light: "#F8FAFC",
          dark: "#080D18",
        },
        card: {
          dark: "#141B2E",
        },
        border: {
          DEFAULT: "#E2E8F0",
        },
        ink: {
          light: "#FFFFFF",
          dark: "#0F172A",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        secondary: ["Manrope", "sans-serif"],
        display: ["Plus Jakarta Sans", "sans-serif"],
      },
      /* Golden-ratio (×1.618) modular type scale, fluid via clamp so the
         "Apple-premium" big headings still behave on small screens. */
      fontSize: {
        eyebrow: ["0.8125rem", { lineHeight: "1.3", letterSpacing: "0.08em" }],
        body: ["1rem", { lineHeight: "1.7" }],
        lead: ["clamp(1.125rem, 1vw + 1rem, 1.618rem)", { lineHeight: "1.55" }],
        h3: ["clamp(1.25rem, 1vw + 1rem, 1.618rem)", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        h2: ["clamp(1.75rem, 2.2vw + 1rem, 2.618rem)", { lineHeight: "1.12", letterSpacing: "-0.02em" }],
        h1: ["clamp(2.5rem, 4vw + 1rem, 4.236rem)", { lineHeight: "1.03", letterSpacing: "-0.025em" }],
        hero: ["clamp(3rem, 5vw + 1.4rem, 6.854rem)", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(15, 23, 42, 0.08)",
        card: "0 2px 12px -2px rgba(15, 23, 42, 0.06)",
        glow: "0 0 0 1px rgba(15,118,110,0.08), 0 8px 30px -8px rgba(15,118,110,0.35)",
        "glow-lg": "0 0 0 1px rgba(15,118,110,0.1), 0 24px 60px -12px rgba(37,99,235,0.35)",
        glass: "0 8px 32px -8px rgba(15, 23, 42, 0.12), inset 0 1px 0 0 rgba(255,255,255,0.5)",
        "glass-dark": "0 8px 32px -8px rgba(0, 0, 0, 0.45), inset 0 1px 0 0 rgba(255,255,255,0.06)",
        "glass-lg": "0 20px 50px -12px rgba(15, 23, 42, 0.18), inset 0 1px 0 0 rgba(255,255,255,0.5)",
        "glass-lg-dark": "0 20px 50px -12px rgba(0, 0, 0, 0.55), inset 0 1px 0 0 rgba(255,255,255,0.08)",
      },
      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.75rem",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        floatUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(2%, 2.5%) scale(1.04)" },
        },
        driftSlow: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-2.5%, -2%) scale(1.05)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        gradientPan: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        floatUp: "floatUp 0.5s ease-out both",
        drift: "drift 34s ease-in-out infinite",
        driftSlow: "driftSlow 42s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
        gradientPan: "gradientPan 8s ease infinite",
      },
    },
  },
  plugins: [],
};
