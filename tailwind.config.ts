import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0D0B0A",
        panel: "#15110F",
        line: "#2A2420",
        edge: "#3A322C",
        paper: "#F2EDE6",
        muted: "#B8AFA6",
        accent: "#FF5A1F",
        "accent-soft": "#FF8A5B",
      },
      fontFamily: {
        sans: ['"Space Grotesk"', "system-ui", "sans-serif"],
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      maxWidth: { container: "1280px" },
    },
  },
  plugins: [],
} satisfies Config;
