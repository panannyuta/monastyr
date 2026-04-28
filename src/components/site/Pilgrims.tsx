import hotel from "@/assets/pilgrim-hotel.jpg";
import meal from "@/assets/pilgrim-meal.jpg";
import tour from "@/assets/pilgrim-tour.jpg";

const cards = [
  { img: hotel, title: "Гостиница", note: "Простые и тихие комнаты для паломников" },
  { img: meal, title: "Трапеза", note: "Монастырская кухня по уставу обители" },
  { img: tour, title: "Экскурсии", note: "Святыни, история, исток Волги" },
  { img: hotel, title: "Посещение монастыря", note: "Правила и время посещения" },
  { img: tour, title: "Как добраться", note: "Из Твери, Москвы и Осташкова" },
];

export function Pilgrims() {
  return (
    <section id="pilgrims" className="bg-secondary/40 py-24 md:py-32">
      <div className="container-prose">
        <div className="mb-16 max-w-2xl">
          <p className="eyebrow">Паломникам</p>
          <h2 className="mt-5 font-display text-4xl text-deep md:text-5xl text-balance">
            Тихая встреча
            <span className="block italic">с обителью</span>
          </h2>
          <p className="mt-6 max-w-lg text-muted-foreground leading-relaxed">
            Монастырь принимает гостей и&nbsp;паломников круглый год. Здесь можно остановиться,
            помолиться, разделить трапезу и&nbsp;узнать историю этого святого места.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <a
              key={c.title}
              href="#"
              className={`group relative block overflow-hidden bg-card shadow-soft transition-all hover:shadow-card ${
                i === 0 ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
            >
              <div className={`relative overflow-hidden ${i === 0 ? "aspect-[16/10]" : "aspect-[4/5]"}`}>
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-deep/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 md:p-8 text-primary-foreground">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-gold-soft">
                    0{i + 1}
                  </p>
                  <h3 className="mt-2 font-display text-2xl md:text-[28px]">{c.title}</h3>
                  <p className="mt-2 text-sm text-primary-foreground/80">{c.note}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-gold-soft transition-all group-hover:gap-3">
                    Узнать <span aria-hidden>→</span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
