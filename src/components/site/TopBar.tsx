import { Phone } from "lucide-react";
import { useHideOnScroll } from "@/hooks/useHideOnScroll";
import { VkIcon, TelegramIcon, MaxIcon } from "./icons/SocialIcons";
import { ORTHODOX_LINKS } from "./siteLinks";

export function TopBar() {
  const visible = useHideOnScroll();

  return (
    <div
      className={`sticky top-0 z-50 hidden border-b border-border/70 bg-background/90 text-[12px] text-muted-foreground backdrop-blur-sm transition-transform duration-300 ease-out md:block ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container-prose flex h-9 items-center justify-between">
        <div className="flex items-center gap-4">
          <span>Тверская митрополия</span>
          <span className="h-3 w-px bg-border" />
          <span>Тверская и Кашинская епархия</span>
          <span className="h-3 w-px bg-border" />
          {ORTHODOX_LINKS.map((link, i) => (
            <span key={link.href} className="flex items-center gap-4">
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                {link.name}
              </a>
              {i < ORTHODOX_LINKS.length - 1 && <span className="h-3 w-px bg-border" />}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href="tel:+74822000000" className="flex items-center gap-1.5 transition-colors hover:text-foreground">
            <Phone className="h-3 w-3" strokeWidth={1.5} />
            +7 (482) 200‑00‑00
          </a>

          <span className="h-3 w-px bg-border" />

          <div className="flex items-center gap-1.5">
            <a
              href="#vk"
              aria-label="ВКонтакте"
              className="flex h-6 w-6 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-accent hover:text-accent"
            >
              <VkIcon className="h-3 w-3" />
            </a>
            <a
              href="#tg"
              aria-label="Telegram"
              className="flex h-6 w-6 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-accent hover:text-accent"
            >
              <TelegramIcon className="h-3 w-3" />
            </a>
            <a
              href="#max"
              aria-label="MAX"
              className="flex h-6 w-6 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-accent hover:text-accent"
            >
              <MaxIcon className="h-3 w-3" />
            </a>
          </div>

          <a
            href="#donate"
            className="rounded-sm border border-accent/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Пожертвовать
          </a>
        </div>
      </div>
    </div>
  );
}
