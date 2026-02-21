import { Reveal } from "../components/Reveal";
import { Button } from "../components/ui/Button";
import { useLang } from "../context/LanguageContext";

export function Contact() {
  const { lang } = useLang();

  const c = {
    ua: {
      badge: "Відкритий до пропозицій",
      titlePart1: "Давайте", titlePart2: "працювати разом",
      desc: <>Розглядаю позицію Media Buyer (<strong>Remote / Full-time</strong>). Маю базу, розумію процеси, готовий брати об'єми — чекаю на повідомлення!</>,
      btnPdf: "Завантажити PDF",
      btnPdfSub: "для CRM",
    },
    ru: {
      badge: "Открыт к предложениям",
      titlePart1: "Давайте", titlePart2: "работать вместе",
      desc: <>Рассматриваю позицию Media Buyer (<strong>Remote / Full-time</strong>). Есть база, понимаю процессы, готов брать объемы — жду сообщения!</>,
      btnPdf: "Скачать PDF",
      btnPdfSub: "для CRM",
    }
  }[lang];

  return (
    <section id="contact" className="py-[100px] pb-[120px]">
      <div className="mx-auto w-[min(1200px,calc(100%-48px))] text-center">
        <Reveal>
          <div className="mx-auto mb-3 inline-flex w-fit items-center gap-2.5 rounded-full border border-accent/15 bg-accent/10 px-3.5 py-2 text-[14px] text-white/80 shadow-deep">
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_0_6px_rgba(25,247,176,.14)]" />
            {c.badge}
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mb-4 text-[34px] font-extrabold tracking-[-0.03em]">
            {c.titlePart1} <span className="text-accent">{c.titlePart2}</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mb-8 max-w-[720px] text-[18px] leading-[1.65] text-white/65">
            {c.desc}
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-4">
              {/* ОДИНАКОВЫЕ РАЗМЕРЫ КНОПОК: !h-[46px] px-7 */}
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
            
            <a href="/Whyrat_CV.pdf" download className="group mt-4 flex items-center gap-2 rounded-full border border-white/5 bg-white/[.02] px-4 py-2 text-[13px] text-white/40 transition hover:bg-white/[.06] hover:text-white/80">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M12 18v-6"/><path d="M9 15l3 3 3-3"/>
              </svg>
              <span>{c.btnPdf} <span className="opacity-50 tracking-wide">({c.btnPdfSub})</span></span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}