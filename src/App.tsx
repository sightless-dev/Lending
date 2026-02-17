import { Header } from "./components/Header";
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
    <div className="relative min-h-screen overflow-clip text-white selection:bg-accent/30 selection:text-accent">
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
}