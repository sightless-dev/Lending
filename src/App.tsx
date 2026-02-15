import { GlowBackground } from "./components/GlowBackground";
import { Header } from "./components/Header";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Results } from "./sections/Results";
import { Skills } from "./sections/Skills";
import { Mindset } from "./sections/Mindset";
import { Contact } from "./sections/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <GlowBackground />
      <Header />
      <main id="top">
        <Hero />
        <About />
        <Experience />
        <Results />
        <Skills />
        <Mindset />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
