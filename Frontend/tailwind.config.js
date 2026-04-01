// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // 👈 enable dark mode using class
  theme: {
    extend: {
      colors: {
        primary: "#4f7df3",
        "background-dark": "#0F172A",
        "surface-dark": "#1F2937",
        "border-dark": "#374151",

        // custom system
        "shb-navy": "#0F172A",
        "shb-surface": "#111827",
        "shb-card": "#1E293B",
        "shb-primary": "#4F7DF3",
        "shb-accent": "#60A5FA",
        "shb-border": "#334155",

        slate: {
          100: "#f1f5f9",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
      },

      fontFamily: {
        display: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        full: "9999px",
      },
    },
  },

  plugins: [],
};