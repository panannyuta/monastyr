import hero from "@/assets/hero-monastery.jpg";

export function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[78vh] min-h-[560px] w-full overflow-hidden">
        <img
          src={hero}
          alt="Ольгинский монастырь у истока Волги на рассвете"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />

        {/* Decorative top frame */}
        <div className="absolute left-0 right-0 top-6 mx-auto hidden max-w-[200px] md:block">
          <div className="rule-gold" />
        </div>

        {/* Content card */}
        <div className="absolute inset-x-0 bottom-0 px-4 pb-10 md:bottom-12 md:px-0">
          <div className="container-prose">
            <div className="glass-card mx-auto max-w-3xl px-8 py-10 md:px-14 md:py-14 text-center shadow-card">
              <p className="eyebrow">Место молитвы и пилигримства</p>
              <h2 className="mt-5 font-display text-[34px] leading-[1.05] text-foreground md:text-[52px] lg:text-[60px] text-balance">
                Ольгинский женский монастырь
                <span className="block italic text-deep">у истока Волги</span>
              </h2>
              <div className="mx-auto mt-6 h-px w-16 bg-accent/70" />
              <p className="mx-auto mt-6 max-w-xl font-display text-lg italic text-muted-foreground md:text-xl text-pretty">
                Место молитвы, паломничества и&nbsp;начала великой русской реки
              </p>

              <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
                <a
                  href="#schedule"
                  className="inline-flex items-center justify-center bg-deep px-6 py-3 text-[12px] font-medium uppercase tracking-[0.22em] text-primary-foreground transition-all hover:bg-deep/90"
                >
                  Расписание богослужений
                </a>
                <a
                  href="#pilgrims"
                  className="inline-flex items-center justify-center border border-deep/40 px-6 py-3 text-[12px] font-medium uppercase tracking-[0.22em] text-deep transition-all hover:border-deep hover:bg-deep/5"
                >
                  Паломникам
                </a>
                <a
                  href="#donate"
                  className="inline-flex items-center justify-center border border-accent px-6 py-3 text-[12px] font-medium uppercase tracking-[0.22em] text-accent transition-all hover:bg-accent hover:text-accent-foreground"
                >
                  Сделать пожертвование
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
