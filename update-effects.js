import fs from 'fs';
import path from 'path';

const files = {
  'tailwind.config.ts': `import type { Config } from "tailwindcss";

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
`,

  'src/components/GlowBackground.tsx': `import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function GlowBackground() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const sx = useSpring(mx, { stiffness: 40, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 40, damping: 18, mass: 0.6 });

  React.useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      mx.set(x * 18);
      my.set(y * 18);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my]);

  const baseBlob = "absolute rounded-full blur-[80px] mix-blend-screen will-change-transform ";
  // Изумрудно-зеленые
  const greenBlob = baseBlob + "bg-[radial-gradient(circle_at_30%_30%,rgba(25,247,176,.55),transparent_60%),radial-gradient(circle_at_70%_60%,rgba(16,197,142,.4),transparent_55%)]";
  // Неоново-синие / Голубые
  const blueBlob = baseBlob + "bg-[radial-gradient(circle_at_30%_30%,rgba(0,210,255,.45),transparent_60%),radial-gradient(circle_at_70%_60%,rgba(99,102,241,.35),transparent_55%)]";

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        style={{ x: sx, y: sy }}
        className="absolute inset-0"
      >
        <div className={\`\${greenBlob} left-[-220px] top-[-260px] h-[720px] w-[720px] animate-glow1\`} />
        <div className={\`\${blueBlob} right-[-200px] top-[50px] h-[640px] w-[640px] animate-glow2\`} />
        <div className={\`\${greenBlob} left-[35%] bottom-[-420px] h-[820px] w-[820px] animate-glow3\`} />
        <div className={\`\${blueBlob} left-[-150px] bottom-[150px] h-[550px] w-[550px] animate-glow4\`} />
      </motion.div>

      <div className="noise absolute inset-0" />
      <div className="vignette absolute -inset-px" />
    </div>
  );
}`,

  'src/App.tsx': `import { Header } from "./components/Header";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Skills } from "./sections/Skills";
import { Mindset } from "./sections/Mindset";
import { Results } from "./sections/Results";
import { Contact } from "./sections/Contact";
import { Footer } from "./components/Footer";
import { GlowBackground } from "./components/GlowBackground";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "./context/LanguageContext";

export default function App() {
  const { lang } = useLang();

  return (
    <div className="relative min-h-screen overflow-hidden text-white selection:bg-accent/30 selection:text-accent">
      <GlowBackground />
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={lang}
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="relative z-10"
        >
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Mindset />
          <Results />
          <Contact />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}`
};

for (const [filePath, content] of Object.entries(files)) {
  const fullPath = path.resolve(filePath);
  fs.writeFileSync(fullPath, content.trim(), 'utf8');
  console.log('✅ Обновлен:', filePath);
}
console.log('\\n🎉 Готово! Проверяй синие блики и анимацию языка.');