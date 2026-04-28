import emblem from "@/assets/emblem.png";

export function Donate() {
  return (
    <section id="donate" className="relative overflow-hidden bg-deep text-primary-foreground py-24 md:py-32">
      {/* Watermark */}
      <img
        src={emblem}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 h-[520px] w-[520px] opacity-[0.04]"
      />

      <div className="container-prose relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="eyebrow text-gold-soft">Поддержать обитель</p>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] md:text-5xl lg:text-[56px] text-balance">
              Ваша помощь —
              <span className="block italic text-gold-soft">часть монастырской жизни</span>
            </h2>
            <div className="mt-8 h-px w-24 bg-accent/60" />
            <p className="mt-8 max-w-xl text-base leading-relaxed text-primary-foreground/80 md:text-[17px] md:leading-[1.75]">
              На добровольные пожертвования совершаются богослужения, кормятся
              паломники, восстанавливаются храмы, поддерживается жизнь сестёр.
              Каждое приношение — будь то великое или малое — становится частью
              общей молитвы и&nbsp;общего труда.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#"
                className="inline-flex items-center justify-center bg-accent px-8 py-4 text-[12px] font-medium uppercase tracking-[0.22em] text-accent-foreground transition-all hover:bg-gold-soft"
              >
                Сделать пожертвование
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center border border-primary-foreground/30 px-8 py-4 text-[12px] font-medium uppercase tracking-[0.22em] text-primary-foreground transition-all hover:border-accent hover:text-accent"
              >
                Реквизиты монастыря
              </a>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <div className="border border-accent/30 bg-deep/60 p-8 text-center backdrop-blur md:p-10">
              <p className="text-[10px] uppercase tracking-[0.28em] text-gold-soft">
                QR‑код для пожертвования
              </p>
              <div className="mx-auto mt-6 flex h-52 w-52 items-center justify-center bg-ivory text-deep">
                {/* Stylized QR placeholder */}
                <svg viewBox="0 0 100 100" className="h-44 w-44" aria-hidden>
                  <rect width="100" height="100" fill="transparent" />
                  {Array.from({ length: 13 }).map((_, r) =>
                    Array.from({ length: 13 }).map((_, c) => {
                      const seed = (r * 7 + c * 3) % 5;
                      if (seed < 2) return null;
                      return (
                        <rect
                          key={`${r}-${c}`}
                          x={5 + c * 7}
                          y={5 + r * 7}
                          width={6}
                          height={6}
                          fill="currentColor"
                        />
                      );
                    })
                  )}
                  {/* corners */}
                  {[
                    [5, 5],
                    [68, 5],
                    [5, 68],
                  ].map(([x, y]) => (
                    <g key={`${x}-${y}`}>
                      <rect x={x} y={y} width="27" height="27" fill="currentColor" />
                      <rect x={x + 4} y={y + 4} width="19" height="19" fill="var(--ivory)" />
                      <rect x={x + 9} y={y + 9} width="9" height="9" fill="currentColor" />
                    </g>
                  ))}
                </svg>
              </div>
              <p className="mt-6 text-xs text-primary-foreground/70 leading-relaxed">
                Наведите камеру телефона
                <br />
                для перевода через СБП
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
