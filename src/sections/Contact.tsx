import { Reveal } from "../components/Reveal";
import { Button } from "../components/ui/Button";

export function Contact() {
  return (
    <section id="contact" className="py-[96px] pb-[104px] max-md:py-[78px]">
      <div className="mx-auto w-[min(1200px,calc(100%-48px))] text-center">
        <Reveal>
          <div className="mx-auto mb-3 inline-flex w-fit items-center gap-2.5 rounded-full border border-accent/15 bg-accent/10 px-3.5 py-2 text-[14px] text-white/80 shadow-deep">
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_0_6px_rgba(25,247,176,.14)]" />
            Открыт к предложениям
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mb-3 text-center text-[34px] font-extrabold tracking-[-0.03em]">
            Давайте <span className="text-accent">работать вместе</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mb-6 max-w-[720px] text-[18px] leading-[1.65] text-white/65">
            Рассматриваю <strong>Remote / Full-time</strong>. Если вы ищете Junior Media Buyer или Buyer Helper — жду сообщения!
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="flex justify-center">
            <Button href="https://t.me/whyrataff" target="_blank" rel="noopener">
              <span className="grid place-items-center text-[#04110b]" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </span>
              @whyrataff
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}