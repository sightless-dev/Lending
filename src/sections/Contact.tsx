import { useLang } from "../lang";
import { CV_URL, LINKS } from "../content";
import { Reveal, SectionLabel } from "../components/Reveal";

export function Contact() {
  const { t } = useLang();
  const items = [
    { label: "Telegram", value: "@whyrataff", href: LINKS.telegram, external: true },
    { label: "Email", value: LINKS.emailLabel, href: LINKS.email, external: false },
    { label: "LinkedIn", value: "in/whyrataff", href: LINKS.linkedin, external: true },
    { label: "CV", value: "PDF · EN", href: CV_URL, external: false, download: true },
  ];
  return (
    <section id="contact" className="mx-auto max-w-container px-4 py-20 sm:px-6 md:py-28">
      <SectionLabel index="04">{t.contact.label}</SectionLabel>
      <Reveal>
        <h2 className="max-w-[900px] text-[clamp(40px,6.5vw,96px)] font-bold leading-[0.95] tracking-[-0.04em]">
          {t.contact.title}
        </h2>
        <p className="mt-6 text-lg text-muted">{t.contact.text}</p>
      </Reveal>
      <div className="mt-12 border-b border-line">
        {items.map((it) => (
          <a
            key={it.label}
            href={it.href}
            {...(it.external ? { target: "_blank", rel: "noreferrer" } : {})}
            {...(it.download ? { download: true } : {})}
            className="group flex items-center justify-between gap-4 border-t border-line py-6 transition-colors hover:text-accent"
          >
            <span className="label text-muted group-hover:text-accent">{it.label}</span>
            <span className="flex items-center gap-4 text-xl font-medium md:text-3xl">
              <span className="break-all">{it.value}</span>
              <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                ↗
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
