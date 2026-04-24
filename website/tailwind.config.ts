import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "Georgia"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular"]
      },
      colors: {
        ink: {
          900: "#0b0f1a",
          800: "#11162a",
          700: "#1a2140",
          100: "#dfe8ff"
        },
        glow: {
          500: "#f5b14c",
          400: "#ffcd7a",
          300: "#ffe1ab"
        },
        mint: {
          500: "#47e5b2",
          400: "#6df7c7",
          300: "#a0ffe0"
        },
        berry: {
          500: "#ff7aa2",
          400: "#ff9dbd",
          300: "#ffc1d6"
        }
      },
      boxShadow: {
        glow: "0 0 50px rgba(255, 205, 122, 0.25)",
        card: "0 20px 60px rgba(7, 12, 28, 0.45)"
      }
    }
  },
  plugins: []
};

export default config;
