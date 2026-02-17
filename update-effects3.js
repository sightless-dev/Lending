import fs from 'fs';
import path from 'path';

const backgroundPath = path.resolve('src/components/GlowBackground.tsx');

const content = `import * as React from "react";
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
  
  // Изумрудно-зеленые (основной акцент)
  const greenBlob = baseBlob + "bg-[radial-gradient(circle_at_30%_30%,rgba(25,247,176,.35),transparent_60%),radial-gradient(circle_at_70%_60%,rgba(16,197,142,.25),transparent_55%)]";
  
  // Темно-фиолетовые (Deep Violet / Purple) - не светлые, не перебивают текст
  const purpleBlob = baseBlob + "bg-[radial-gradient(circle_at_30%_30%,rgba(109,40,217,.25),transparent_60%),radial-gradient(circle_at_70%_60%,rgba(88,28,135,.2),transparent_55%)]";

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        style={{ x: sx, y: sy }}
        className="absolute inset-0"
      >
        <div className={\`\${greenBlob} left-[-220px] top-[-260px] h-[720px] w-[720px] animate-glow1\`} />
        <div className={\`\${purpleBlob} right-[-200px] top-[50px] h-[640px] w-[640px] animate-glow2\`} />
        <div className={\`\${greenBlob} left-[35%] bottom-[-420px] h-[820px] w-[820px] animate-glow3\`} />
        <div className={\`\${purpleBlob} left-[-150px] bottom-[150px] h-[550px] w-[550px] animate-glow4\`} />
      </motion.div>

      <div className="noise absolute inset-0" />
      <div className="vignette absolute -inset-px" />
    </div>
  );
}`;

if (fs.existsSync(backgroundPath)) {
  fs.writeFileSync(backgroundPath, content.trim(), 'utf8');
  console.log('✅ Цвет свечения успешно изменен на глубокий фиолетовый!');
} else {
  console.log('⚠️ Файл src/components/GlowBackground.tsx не найден.');
}