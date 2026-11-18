import { useLang } from "../lang";
import { Reveal, SectionLabel } from "../components/Reveal";

export function About() {
  const { t } = useLang();
  return (
    <section id="about" className="mx-auto max-w-container px-4 py-20 sm:px-6 md:py-28">
      <SectionLabel index="00">{t.about.label}</SectionLabel>
      <div className="flex flex-wrap gap-x-16 gap-y-8">
        <Reveal className="min-w-0 flex-[1_1_420px]">
          <h2 className="text-3xl font-medium leading-tight tracking-[-0.02em] md:text-5xl">{t.about.title}</h2>
        </Reveal>
        <Reveal delay={0.1} className="min-w-0 flex-[1_1_420px]">
          <p className="text-lg leading-relaxed text-muted">{t.about.text}</p>
        </Reveal>
      </div>
    </section>
  );
}
