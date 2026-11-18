import { Header } from "./components/Header";
import { Hero } from "./sections/Hero";
import { Stats } from "./sections/Stats";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Project } from "./sections/Project";
import { Stack } from "./sections/Stack";
import { Contact } from "./sections/Contact";
import { useLang } from "./lang";
import { Intro } from "./fx/Intro";
import { ScrollMarquee } from "./fx/ScrollMarquee";

export default function App() {
  const { t } = useLang();
  return (
    <div className="min-h-screen overflow-x-clip">
      <Intro />
      <div className="film-grain" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <Stats />
        <ScrollMarquee top="MEDIA BUYING ×" bottom="AI AUTOMATION ×" />
        <About />
        <Experience />
        <Project />
        <Stack />
        <Contact />
      </main>
      <footer className="border-t border-line">
        <div className="label mx-auto flex max-w-container flex-wrap justify-between gap-4 px-4 py-8 text-muted sm:px-6">
          <span>© {new Date().getFullYear()} {t.footer}</span>
          <span>whyrat.online</span>
        </div>
      </footer>
    </div>
  );
}
