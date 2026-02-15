import { Reveal } from "../components/Reveal";
import { Button } from "../components/ui/Button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="top" className="min-h-[calc(100vh-68px)] py-[104px] max-md:py-[84px] flex items-center">
      <div className="mx-auto w-[min(1200px,calc(100%-48px))] text-center">
        <Reveal>
          <div className="mx-auto inline-flex items-center gap-2.5 rounded-full border border-accent/15 bg-accent/10 px-3.5 py-2 text-[13px] tracking-[.01em] text-white/80 shadow-deep">
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_0_6px_rgba(25,247,176,.14)]" />
            Performance-медиабайер в gambling / FB + PWA / масштабирование
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mt-6 leading-[1.0]">
  <span className="block text-[clamp(44px,6vw,86px)] font-black tracking-[-0.05em] text-white/95">
    Media Buyer
  </span>
  <span className="mt-2 block pb-1 text-[clamp(38px,5vw,72px)] font-black tracking-[-0.05em] text-transparent bg-clip-text bg-gradient-to-r from-accent via-[#8CFFDC] to-accent2">
    Gambling Vertical
  </span>
</h1>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-3 flex flex-wrap justify-center gap-2.5 text-[13px] text-white/75">
            {[
              ["⚡", "4+ года в gambling"],
              ["📈", "2+ года Facebook Ads"],
              ["🎯", "Tier 1–3 GEO"],
            ].map(([ic, t]) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/[.03] px-4 py-2.5"
              >
                <span className="mr-1.5">{ic}</span>
                {t}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mx-auto mt-5 max-w-[920px] text-[18px] leading-[1.7] text-white/65">
            Performance-ориентированный медиабайер со стабильным бэкграундом в gambling креативах
            и модели First Bill (FB). Фокус: масштабирование, прибыльный трафик, системный подход.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Button className="btn-shine" href="https://t.me/" target="_blank" rel="noopener">
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
              Узнать больше
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-9 flex flex-wrap justify-center gap-5 pt-2">
            {[
              ["100%+", "ROI в связках"],
              ["8+", "ГЕО в работе"],
              ["$3K+", "дневной бюджет"],
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

        <div className="mt-7 flex justify-center opacity-80">
          <div className="relative h-7 w-[18px] rounded-full border border-white/20">
            <div className="absolute left-1/2 top-1.5 h-1.5 w-[3px] -translate-x-1/2 rounded-full bg-accent/90 animate-wheel" />
          </div>
        </div>

        {/* subtle hero divider */}
        <motion.div
          className="mx-auto mt-10 h-[1px] w-[min(720px,95%)] bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        />
      </div>
    </section>
  );
}
