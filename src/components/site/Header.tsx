import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { useHideOnScroll } from "@/hooks/useHideOnScroll";

const NAV = [
  "Главная",
  "Богослужения",
  "О монастыре",
  "Путеводитель",
  "Паломникам",
  "Пожертвования",
  "Контакты",
];

export function Header() {
  const [open, setOpen] = useState(false);
  const showIdentity = useHideOnScroll(80);

  return (
    <header className="sticky top-0 z-40">
      {/* Identity row — скрывается при скролле вниз */}
      <div
        className={`overflow-hidden border-b border-border/70 bg-background/90 backdrop-blur-md transition-[max-height,opacity] duration-300 ease-out ${
          showIdentity ? "max-h-[160px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-prose">
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-6 py-5 md:py-7">
            <a href="/" className="flex items-center gap-3" aria-label="На главную">
              <Logo className="h-11 w-11 text-accent md:h-12 md:w-12" />
            </a>

            <div className="text-center">
              <h1 className="font-display text-[22px] leading-tight md:text-[28px] lg:text-[32px]">
                Ольгинский женский монастырь
                <span className="block italic text-foreground/85">у истока Волги</span>
              </h1>
            </div>

            <div className="hidden max-w-[220px] text-right text-[11px] leading-relaxed text-muted-foreground md:block">
              С благословения митрополита
              <br />
              Тверского и Кашинского
              <br />
              <span className="text-foreground/80">Амвросия</span>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden justify-self-end p-2 -mr-2 text-foreground"
              aria-label="Меню"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation row — всегда закреплена сверху */}
      <div className="border-b border-border/70 bg-background/90 backdrop-blur-md">
        <div className="container-prose">
          <nav className="hidden md:block">
            <ul className="flex items-center justify-center gap-2 py-3">
              {NAV.map((item, i) => (
                <li key={item} className="flex items-center">
                  <a
                    href="#"
                    className={`px-4 py-1.5 text-[13px] tracking-wide transition-colors hover:text-accent ${
                      i === 0 ? "text-foreground" : "text-foreground/70"
                    }`}
                  >
                    {item}
                  </a>
                  {i < NAV.length - 1 && (
                    <span className="text-accent/40 select-none">·</span>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile bar with logo + menu button */}
          <div className="flex items-center justify-between py-3 md:hidden">
            <a href="/" className="flex items-center gap-2" aria-label="На главную">
              <Logo className="h-7 w-7 text-accent" />
              <span className="font-display text-sm">Ольгинский монастырь</span>
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="p-2 -mr-2 text-foreground"
              aria-label="Меню"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <nav className="md:hidden border-t border-border/70 py-3">
              <ul className="flex flex-col">
                {NAV.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="block py-2.5 text-sm text-foreground/80 hover:text-accent"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
