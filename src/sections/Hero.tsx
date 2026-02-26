import { Reveal } from "../components/Reveal";
import { Button } from "../components/ui/Button";
import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";

const floatingEmojis = [
  { e: "🎰", left: "10%", top: "20%", delay: 0 },
  { e: "🎲", left: "85%", top: "30%", delay: 1.2 },
  { e: "🍒", left: "15%", top: "70%", delay: 2.5 },
  { e: "🎯", left: "80%", top: "65%", delay: 0.8 },
  { e: "🃏", left: "5%", top: "45%", delay: 1.8 },
  { e: "🪙", left: "90%", top: "50%", delay: 3 },
];

export function Hero() {
  const { lang } = useLang();

  const content = {
    ua: {
      badge: "Розглядаю позицію Middle Media Buyer",
      t1: "Досвід Meta Ads",
      t2: "Remote / Full-time",
      t3: "Timezone: UA",
      desc: <>4 роки в індустрії: 2 роки бекграунду в дизайні креативів та 2 роки баїнгу (Meta Ads). <strong>Вмію працювати з реальними бюджетами</strong>, розумію алгоритми FB і знаю, як контролювати метрики для виходу на стабільний плюсовий ROI.</>,
      stats: [
        ["$20K+", "Досвід спенду/міс"],
        ["0-40%", "Середній ROI"],
        ["GEO", "Tier 1-3"],
      ]
    },
    ru: {
      badge: "Рассматриваю позицию Middle Media Buyer",
      t1: "Опыт Meta Ads",
      t2: "Remote / Full-time",
      t3: "Timezone: UA",
      desc: <>4 года в индустрии: 2 года бэкграунда в дизайне креативов и 2 года баинга (Meta Ads). <strong>Умею работать с реальными бюджетами</strong>, понимаю алгоритмы FB и знаю, как контролировать метрики для выхода на стабильный плюсовой ROI.</>,
      stats: [
        ["$20K+", "Опыт спенда/мес"],
        ["0-40%", "Средний ROI"],
        ["GEO", "Tier 1-3"],
      ]
    }
  }[lang];

  return (
    <section id="top" className="relative min-h-[calc(100vh-68px)] py-[104px] max-md:py-[84px] flex items-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 hidden md:block">
        {floatingEmojis.map((item, i) => (
          <motion.div key={i} className="absolute text-5xl opacity-20 blur-[2px]" style={{ left: item.left, top: item.top }} animate={{ y: [0, -25, 0], rotate: [0, 15, -15, 0] }} transition={{ duration: 6, repeat: Infinity, delay: item.delay, ease: "easeInOut" }}>
            {item.e}
          </motion.div>
        ))}
      </div>

      <div className="mx-auto w-[min(1200px,calc(100%-48px))] text-center relative z-10">
        <Reveal>
          <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-accent/20 bg-accent/10 px-5 py-2.5 text-[15px] font-medium tracking-[.01em] text-white/85 shadow-[0_0_20px_rgba(25,247,176,.15)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_8px_rgba(25,247,176,.8)]"></span>
            </span>
            {content.badge}
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mt-7 leading-[1.05]">
            <span className="block text-[clamp(44px,7vw,76px)] font-black tracking-[-0.05em] text-white/95">
              Media Buyer
            </span>
            <span className="mt-1 block pb-4 text-[clamp(38px,6vw,68px)] font-black tracking-[-0.05em] text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-400 to-accent2 leading-[1.2]">
              Gambling & Betting
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-[14px] text-white/80">
            <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-4 py-2.5">
              <span className="text-accent/90"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></span>{content.t1}
            </span>
            <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-4 py-2.5">
              <span className="text-accent/90"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></span>{content.t2}
            </span>
            <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-4 py-2.5">
              <span className="text-accent/90"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></span>{content.t3}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mx-auto mt-6 max-w-[800px] text-[18px] leading-[1.7] text-white/65">
            {content.desc}
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button className="btn-shine flex !h-[46px] items-center px-7 text-[15px] !leading-[0]" href="https://t.me/whyrataff" target="_blank" rel="noopener">
              <span className="mr-2 grid place-items-center text-[#04110b]" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M21.8 4.6 2.9 11.9c-1.3.5-1.3 1.2-.2 1.6l4.8 1.5 1.8 5.6c.2.6.1.9.8.9.5 0 .8-.2 1.2-.6l2.3-2.2 4.7 3.5c.9.5 1.5.2 1.7-.8l3.2-15.1c.3-1.2-.5-1.7-1.4-1.3Z" fill="currentColor"/></svg>
              </span>
              <span>Telegram</span>
            </Button>
            
            <a href="https://www.linkedin.com/in/liubomyr-myshchenko-93413a3b2/" target="_blank" rel="noopener" className="group flex h-[46px] items-center justify-center rounded-full border border-[#0A66C2]/40 bg-[#0A66C2]/10 px-7 text-[15px] font-semibold text-white transition-all hover:bg-[#0A66C2]/20 hover:shadow-[0_0_20px_rgba(10,102,194,0.3)]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="mr-2 text-[#0A66C2]"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-10 flex flex-wrap justify-center gap-5 pt-2">
            {content.stats.map(([v, l]) => (
              <div key={l} className="min-w-[200px] rounded-2xl border border-white/10 bg-white/[.03] px-4 py-3.5 shadow-[0_18px_70px_rgba(0,0,0,.30)]">
                <div className="text-[20px] font-extrabold tracking-[-0.02em] text-accent/90">{v}</div>
                <div className="mt-1 text-[13px] text-white/55">{l}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 flex justify-center opacity-80">
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