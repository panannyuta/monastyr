import { CalendarDays, Newspaper, HandHeart } from "lucide-react";

const items = [
  {
    icon: CalendarDays,
    eyebrow: "Сегодняшнее богослужение",
    title: "Божественная Литургия",
    meta: "08:00 · Никольский храм",
    note: "Исповедь — с 07:30. Возглавляет иеромонах Амвросий.",
  },
  {
    icon: Newspaper,
    eyebrow: "Последняя новость",
    title: "Освящение нового колокола",
    meta: "12 апреля 2026",
    note: "Состоялся чин освящения благовестника весом 320 пудов.",
  },
  {
    icon: HandHeart,
    eyebrow: "Текущий сбор",
    title: "Восстановление росписей",
    meta: "Собрано 64% из 1 800 000 ₽",
    note: "Реставрация фресок в трапезной части храма.",
  },
];

export function Today() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container-prose">
        <div className="mb-14 text-center">
          <p className="eyebrow">Сегодня в монастыре</p>
          <h2 className="mt-4 font-display text-3xl text-deep md:text-4xl">
            Жизнь обители
          </h2>
        </div>

        <div className="grid gap-px bg-border md:grid-cols-3">
          {items.map(({ icon: Icon, eyebrow, title, meta, note }) => (
            <article
              key={title}
              className="flex flex-col bg-card p-8 transition-colors md:p-10"
            >
              <div className="flex items-center justify-between">
                <Icon className="h-5 w-5 text-accent" strokeWidth={1.4} />
                <span className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                  {eyebrow}
                </span>
              </div>
              <h3 className="mt-8 font-display text-2xl leading-tight text-foreground">
                {title}
              </h3>
              <p className="mt-3 text-sm text-accent">{meta}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {note}
              </p>
              <a
                href="#"
                className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-deep transition-colors hover:text-accent"
              >
                Подробнее
                <span aria-hidden>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
