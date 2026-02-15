import { Reveal } from "../components/Reveal";
import { Button } from "../components/ui/Button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="top" className="min-h-[calc(100vh-68px)] py-[104px] max-md:py-[84px] flex items-center">
      <div className="mx-auto w-[min(1200px,calc(100%-48px))] text-center">
        <Reveal>
          <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-accent/15 bg-accent/10 px-3.5 py-2 text-[13px] tracking-[.01em] text-white/80 shadow-[0_0_20px_rgba(25,247,176,.15)]">
            {/* Пульсирующая точка */}
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent shadow-[0_0_8px_rgba(25,247,176,.8)]"></span>
            </span>
            Рассматриваю позицию Junior Media Buyer / Buyer Helper
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mt-6 leading-[1.05]">
            <span className="block text-[clamp(44px,7vw,76px)] font-black tracking-[-0.05em] text-white/95">
              Junior Media Buyer
            </span>
            <span className="mt-1 block pb-1 text-[clamp(38px,6vw,68px)] font-black tracking-[-0.05em] text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-400 to-accent2">
              Gambling & Betting
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-5 flex flex-wrap justify-center gap-2.5 text-[13px] text-white/75">
            {[
              {
                ic: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
                t: "2 года FB (ПБ)"
              },
              {
                ic: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
                t: "Remote / Full-time"
              },
              {
                ic: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
                t: "Timezone: UA"
              },
            ].map(({ic, t}) => (
              <span
                key={t}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[.03] px-4 py-2.5"
              >
                <span className="text-accent/90">{ic}</span>
                {t}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mx-auto mt-6 max-w-[920px] text-[18px] leading-[1.7] text-white/65">
            4 года в индустрии, из которых 2 года занимался дизайном креативов и 2 года заливом по модели <strong>First Bill (ПБ)</strong>. <span className="italic text-white/85">Главное стремление — научиться хорошо анализировать метрики и масштабировать кампании с фокусом на позитивный ROI.</span>
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button className="btn-shine" href="https://t.me/whyrataff" target="_blank" rel="noopener">
              <span className="grid place-items-center text-[#04110b]" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21.8 4.6 2.9 11.9c-1.3.5-1.3 1.2-.2 1.6l4.8 1.5 1.8 5.6c.2.6.1.9.8.9.5 0 .8-.2 1.2-.6l2.3-2.2 4.7 3.5c.9.5 1.5.2 1.7-.8l3.2-15.1c.3-1.2-.5-1.7-1.4-1.3Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              Написать в Telegram
            </Button>
            <Button variant="ghost" href="#experience">
              Опыт работы
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-10 flex flex-wrap justify-center gap-5 pt-2">
            {[
              ["До $3K", "Профит в Gambling (ПБ)"],
              ["100%", "Пиковый ROI в товарке"],
              ["10+", "ГЕО в работе"],
            ].map(([v, l]) => (
              <div
                key={l}
                className="min-w-[220px] rounded-2xl border border-white/10 bg-white/[.02] px-4 py-3.5 shadow-[0_18px_70px_rgba(0,0,0,.30)]"
              >
                <div className="text-[20px] font-extrabold tracking-[-0.02em] text-accent/90">
                  {v}
                </div>
                <div className="mt-1 text-[13px] text-white/55">{l}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-9 flex justify-center opacity-80">
          <div className="relative h-7 w-[18px] rounded-full border border-white/20">
            <div className="absolute left-1/2 top-1.5 h-1.5 w-[3px] -translate-x-1/2 rounded-full bg-accent/90 animate-wheel" />
          </div>
        </div>

        <motion.div
          className="mx-auto mt-10 h-[1px] w-[min(720px,95%)] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        />
      </div>
    </section>
  );
}