import { Logo } from "./Logo";
import { VkIcon, TelegramIcon, MaxIcon } from "./icons/SocialIcons";
import { ORTHODOX_LINKS } from "./siteLinks";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background pt-20">
      <div className="container-prose">
        <div className="grid gap-12 pb-16 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <Logo className="h-11 w-11 text-accent" />
              <div>
                <p className="font-display text-lg leading-tight text-deep">
                  Ольгинский монастырь
                </p>
                <p className="text-xs text-muted-foreground">у истока Волги</p>
              </div>
            </div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Женская обитель Тверской и&nbsp;Кашинской епархии Русской Православной Церкви.
            </p>

            <div className="mt-6 flex items-center gap-2">
              <a
                href="#vk"
                aria-label="ВКонтакте"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-accent hover:text-accent"
              >
                <VkIcon className="h-4 w-4" />
              </a>
              <a
                href="#tg"
                aria-label="Telegram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-accent hover:text-accent"
              >
                <TelegramIcon className="h-4 w-4" />
              </a>
              <a
                href="#max"
                aria-label="MAX"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-accent hover:text-accent"
              >
                <MaxIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.28em] text-accent">Разделы</h4>
            <ul className="mt-5 space-y-3 text-sm text-foreground/80">
              {["Богослужения", "О монастыре", "Путеводитель", "Паломникам", "Новости"].map((i) => (
                <li key={i}>
                  <a href="#" className="hover:text-accent transition-colors">{i}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.28em] text-accent">Контакты</h4>
            <ul className="mt-5 space-y-3 text-sm text-foreground/80 leading-relaxed">
              <li>
                Тверская область,
                <br />
                Осташковский городской округ,
                <br />
                деревня Волговерховье
              </li>
              <li>
                <a href="tel:+74822000000" className="hover:text-accent transition-colors">
                  +7 (482) 200‑00‑00
                </a>
              </li>
              <li>
                <a href="mailto:info@olginskiy-monastyr.ru" className="hover:text-accent transition-colors">
                  info@olginskiy-monastyr.ru
                </a>
              </li>
            </ul>

            <h4 className="mt-8 text-[10px] uppercase tracking-[0.28em] text-accent">
              Православные ресурсы
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-foreground/80">
              {ORTHODOX_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.28em] text-accent">Реквизиты</h4>
            <ul className="mt-5 space-y-2 text-xs leading-relaxed text-muted-foreground">
              <li>Религиозная организация «Ольгинский женский монастырь»</li>
              <li>ИНН 6913000000 / КПП 691301001</li>
              <li>Р/с 40703 810 0 0000 0000000</li>
              <li>ПАО Сбербанк, г. Тверь</li>
              <li>БИК 042809679</li>
            </ul>

            <div className="mt-6 aspect-[5/3] w-full overflow-hidden border border-border bg-secondary/40">
              <div className="relative h-full w-full bg-[radial-gradient(circle_at_30%_40%,oklch(0.93_0.04_140)_0%,transparent_50%),radial-gradient(circle_at_70%_60%,oklch(0.88_0.03_85)_0%,transparent_55%)]">
                <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,oklch(0.5_0.04_155/.2)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.5_0.04_155/.2)_1px,transparent_1px)] [background-size:32px_32px]" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="mx-auto h-3 w-3 rounded-full bg-accent shadow-[0_0_0_6px_oklch(0.62_0.11_80/.2)]" />
                  <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-deep">
                    Волговерховье
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rule-gold opacity-50" />
        <div className="flex flex-col items-center justify-between gap-3 py-6 text-[11px] text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Ольгинский женский монастырь у истока Волги</p>
          <p className="opacity-80">Все права защищены · Сайт обители</p>
        </div>
      </div>
    </footer>
  );
}
