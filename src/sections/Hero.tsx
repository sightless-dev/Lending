import { useLang } from "../lang";
import { CV_URL, LINKS } from "../content";
import { Pipeline } from "../components/Pipeline";
import { Reveal } from "../components/Reveal";
import { EmberField } from "../fx/EmberField";

export function Hero() {
  const { t } = useLang();
  return (
    <div className="relative">
      <EmberField className="absolute inset-0 h-full w-full" />
      <section
        id="top"
        className="relative mx-auto flex max-w-container flex-wrap items-center gap-12 px-4 pb-16 pt-32 sm:px-6 md:pb-20 md:pt-40"
      >
        <div className="flex min-w-0 flex-[999_1_540px] flex-col gap-7">
          <Reveal>
            <p className="label flex items-center gap-2 text-accent">
              <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
              {t.hero.status}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display text-[clamp(52px,9vw,132px)] font-bold leading-[0.9] tracking-[-0.04em]">
              Liubomyr
              <br />
              Myshchenko<span className="text-accent">.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-wrap gap-2.5">
            <span className="border border-edge px-4 py-2.5 text-[15px]">Media Buyer</span>
            <span className="border border-edge px-4 py-2.5 text-[15px]">AI Developer</span>
            <span className="bg-accent px-4 py-2.5 text-[15px] font-medium text-ink">Creative Automation</span>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-[560px] text-lg leading-relaxed text-muted md:text-[19px]">{t.hero.lead}</p>
          </Reveal>
          <Reveal delay={0.2} className="flex flex-wrap gap-3.5">
            <a
              href={LINKS.telegram}
              target="_blank"
              rel="noreferrer"
              className="group bg-accent px-6 py-4 font-bold text-ink transition-colors hover:bg-accent-soft"
            >
              {t.hero.ctaPrimary} <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href={CV_URL}
              download
              className="border border-paper px-6 py-4 text-paper transition-colors hover:bg-paper hover:text-ink"
            >
              {t.hero.ctaCv}
            </a>
          </Reveal>
        </div>
        <div className="min-w-0 flex-[1_1_380px]">
          <Pipeline />
        </div>
      </section>
    </div>
  );
}
