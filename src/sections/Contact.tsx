import { Reveal } from "../components/Reveal";
import { Button } from "../components/ui/Button";

export function Contact() {
  return (
    <section id="contact" className="py-[96px] pb-[104px] max-md:py-[78px]">
      <div className="mx-auto w-[min(1200px,calc(100%-48px))] text-center">
        <Reveal>
          <div className="mx-auto mb-3 inline-flex w-fit items-center gap-2.5 rounded-full border border-accent/15 bg-accent/10 px-3.5 py-2 text-[14px] text-white/80 shadow-deep">
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_0_6px_rgba(25,247,176,.14)]" />
            Открыт к сотрудничеству
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mb-3 text-center text-[34px] font-extrabold tracking-[-0.03em]">
            Давайте <span className="text-accent">работать вместе</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mb-6 max-w-[720px] text-[18px] leading-[1.65] text-white/65">
            Если вы ищете мотивированного медиабайера с сильным опытом в gambling вертикали — давайте созвонимся.
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="flex justify-center">
            <Button href="https://t.me/" target="_blank" rel="noopener">
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
