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
        },
        secondary: "#14B8A6",
        accent: "#2563EB",
        success: "#22C55E",
        warning: "#F59E0B",
        danger: "#EF4444",
        surface: {
          light: "#F8FAFC",
          dark: "#0F172A",
        },
        card: {
          dark: "#1E293B",
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
      boxShadow: {
        soft: "0 4px 24px -4px rgba(15, 23, 42, 0.08)",
        card: "0 2px 12px -2px rgba(15, 23, 42, 0.06)",
        glow: "0 0 0 1px rgba(15,118,110,0.08), 0 8px 30px -8px rgba(15,118,110,0.35)",
        glass: "0 8px 32px -8px rgba(15, 23, 42, 0.12), inset 0 1px 0 0 rgba(255,255,255,0.5)",
        "glass-dark": "0 8px 32px -8px rgba(0, 0, 0, 0.45), inset 0 1px 0 0 rgba(255,255,255,0.06)",
        "glass-lg": "0 20px 50px -12px rgba(15, 23, 42, 0.18), inset 0 1px 0 0 rgba(255,255,255,0.5)",
        "glass-lg-dark": "0 20px 50px -12px rgba(0, 0, 0, 0.55), inset 0 1px 0 0 rgba(255,255,255,0.08)",
      },
      borderRadius: {
        xl2: "1.25rem",
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
          "33%": { transform: "translate(3%, 4%) scale(1.06)" },
          "66%": { transform: "translate(-3%, 2%) scale(0.97)" },
        },
        driftSlow: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-4%, -5%) scale(1.08)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        floatUp: "floatUp 0.5s ease-out both",
        drift: "drift 18s ease-in-out infinite",
        driftSlow: "driftSlow 24s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
