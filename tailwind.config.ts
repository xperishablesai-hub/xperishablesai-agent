import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        background: "#0a0f1c",
        foreground: "#e6f6ff",
        primary: {
          DEFAULT: "#00f0ff",
          foreground: "#0a0f1c",
        },
        accent: {
          DEFAULT: "#10182a",
          foreground: "#00f0ff",
        },
        card: {
          DEFAULT: "#10182a",
          foreground: "#e6f6ff",
        },
        border: "#1e293b",
        cyan: {
          100: "#e0f7fa",
          200: "#b2ebf2",
          300: "#80deea",
          400: "#4dd0e1",
          500: "#00bcd4",
          600: "#00acc1",
          700: "#0097a7",
          800: "#00838f",
          900: "#006064",
        },
        blue: {
          400: "#60a5fa",
          500: "#3b82f6",
        },
      },
      borderRadius: {
        lg: "1.25rem",
        md: "1rem",
        sm: "0.5rem",
      },
      boxShadow: {
        neon: "0 0 24px 0 #00f0ff, 0 0 48px 0 #00f0ff33",
      },
      backgroundImage: {
        'lux-gradient': "linear-gradient(135deg, #0a0f1c 0%, #10182a 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;