import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg0: "#060a08",
        bg1: "#070d0a",
        accent: "#19f7b0",
        accent2: "#10c58e",
      },
      boxShadow: {
        glow: "0 18px 50px rgba(16,197,142,.24)",
        deep: "0 20px 60px rgba(0,0,0,.55)",
      },
      borderRadius: {
        xl2: "22px",
      },
      maxWidth: {
        container: "1200px",
      },
      keyframes: {
        glow1: {
          "0%,100%": { opacity: "0.5", transform: "translate(-10px,-6px) scale(.98)" },
          "50%": { opacity: "0.85", transform: "translate(14px,10px) scale(1.04)" },
        },
        glow2: {
          "0%,100%": { opacity: "0.45", transform: "translate(8px,-6px) scale(.99)" },
          "50%": { opacity: "0.8", transform: "translate(-16px,10px) scale(1.05)" },
        },
        glow3: {
          "0%,100%": { opacity: "0.4", transform: "translate(0px,0px) scale(.97)" },
          "50%": { opacity: "0.75", transform: "translate(0px,-18px) scale(1.06)" },
        },
        glow4: {
          "0%,100%": { opacity: "0.4", transform: "translate(-10px,10px) scale(.95)" },
          "50%": { opacity: "0.75", transform: "translate(10px,-10px) scale(1.05)" },
        },
        wheel: {
          "0%,100%": { opacity: "0.2", transform: "translate(-50%,0)" },
          "50%": { opacity: "1", transform: "translate(-50%,8px)" },
        },
      },
      animation: {
        glow1: "glow1 4.5s ease-in-out infinite",
        glow2: "glow2 5.2s ease-in-out infinite",
        glow3: "glow3 6.5s ease-in-out infinite",
        glow4: "glow4 4.8s ease-in-out infinite",
        wheel: "wheel 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;