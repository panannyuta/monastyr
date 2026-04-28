import volga from "@/assets/volga-source.jpg";

export function VolgaSource() {
  return (
    <section className="relative bg-deep text-primary-foreground py-24 md:py-32 overflow-hidden">
      {/* Subtle background ornament */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div className="absolute -left-20 top-20 h-80 w-80 rounded-full border border-accent" />
        <div className="absolute -right-32 bottom-10 h-[500px] w-[500px] rounded-full border border-accent" />
      </div>

      <div className="container-prose relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <div>
            <p className="eyebrow text-gold-soft">Исток Волги</p>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] text-balance md:text-5xl lg:text-[56px]">
              Земля, где начинается
              <span className="block italic text-gold-soft">великая русская река</span>
            </h2>

            <div className="mt-10 h-px w-24 bg-accent/60" />

            <div className="mt-10 space-y-5 text-base leading-relaxed text-primary-foreground/80 md:text-[17px] md:leading-[1.75]">
              <p>
                Здесь, в тверских лесах у деревни Волговерховье, из&nbsp;тихого ключа
                рождается Волга — великая русская река. Над святым источником поставлена
                деревянная часовня, а&nbsp;рядом стоит белокаменный соборный храм.
              </p>
              <p className="text-primary-foreground/65">
                Веками люди приходили сюда поклониться истоку и&nbsp;набрать святой воды.
                Сегодня обитель хранит это место молитвой и&nbsp;трудом сестёр —
                продолжая древнюю традицию русского монашества.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-6">
              <a
                href="#"
                className="inline-flex items-center justify-center border border-accent px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.22em] text-accent transition-all hover:bg-accent hover:text-accent-foreground"
              >
                Узнать больше
              </a>
              <div className="flex items-baseline gap-2 text-gold-soft/80">
                <span className="font-display text-3xl">3 530</span>
                <span className="text-xs uppercase tracking-[0.2em]">км до устья</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 -top-4 hidden h-24 w-24 border-l border-t border-accent/60 lg:block" />
            <div className="absolute -bottom-4 -right-4 hidden h-24 w-24 border-b border-r border-accent/60 lg:block" />
            <img
              src={volga}
              alt="Деревянная часовня над истоком Волги"
              loading="lazy"
              width={1080}
              height={1600}
              className="relative h-[520px] w-full object-cover md:h-[640px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
