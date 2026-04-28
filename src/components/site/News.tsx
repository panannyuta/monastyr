import n1 from "@/assets/news-1.jpg";
import n2 from "@/assets/news-2.jpg";
import n3 from "@/assets/news-3.jpg";

const posts = [
  {
    img: n1,
    date: "18 апреля 2026",
    cat: "Богослужения",
    title: "Пасхальная служба собрала более тысячи паломников",
  },
  {
    img: n2,
    date: "5 марта 2026",
    cat: "Жизнь обители",
    title: "Зимний крестный ход к истоку Волги",
  },
  {
    img: n3,
    date: "20 февраля 2026",
    cat: "Святыни",
    title: "В монастырь принесена частица мощей св. равноап. Ольги",
  },
];

export function News() {
  return (
    <section className="bg-secondary/40 py-24 md:py-32">
      <div className="container-prose">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Хроника обители</p>
            <h2 className="mt-4 font-display text-3xl text-deep md:text-4xl">
              Последние новости
            </h2>
          </div>
          <a
            href="#"
            className="text-[11px] uppercase tracking-[0.24em] text-deep transition-colors hover:text-accent"
          >
            Все новости →
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((p) => (
            <a key={p.title} href="#" className="group block">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                <span>{p.date}</span>
                <span className="h-px w-6 bg-accent/60" />
                <span className="text-accent">{p.cat}</span>
              </div>
              <h3 className="mt-3 font-display text-[22px] leading-snug text-foreground transition-colors group-hover:text-deep md:text-2xl">
                {p.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
