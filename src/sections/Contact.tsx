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
    <section id="contact" className="py-[96px] pb-[104px] max-md:py-[78px]">
      <div className="mx-auto w-[min(1200px,calc(100%-48px))] text-center">
        <Reveal>
          <div className="mx-auto mb-3 inline-flex w-fit items-center gap-2.5 rounded-full border border-accent/15 bg-accent/10 px-3.5 py-2 text-[14px] text-white/80 shadow-deep">
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_0_6px_rgba(25,247,176,.14)]" />
            {c.badge}
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mb-3 text-center text-[34px] font-extrabold tracking-[-0.03em]">
            {c.titlePart1} <span className="text-accent">{c.titlePart2}</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mb-6 max-w-[720px] text-[18px] leading-[1.65] text-white/65">
            {c.desc}
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="flex flex-col items-center gap-4 justify-center">
            <Button href="https://t.me/whyrataff" target="_blank" rel="noopener">
              <span className="grid place-items-center text-[#04110b]" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </span>
              @whyrataff
            </Button>
            
            <a href="/Whyrat_CV.pdf" download className="group mt-2 flex items-center gap-2 rounded-full border border-white/5 bg-white/[.02] px-4 py-2 text-[13px] text-white/50 transition hover:bg-white/[.06] hover:text-white/90">
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