import { ScrollText, Clock4, ShoppingBag, HandHeart } from "lucide-react";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";
import volga from "@/assets/volga-source.jpg";

/**
 * Карточки блока «Актуальное · Что можно сделать сейчас».
 * Чтобы заменить изображение на реальную фотографию монастыря:
 * 1. Положите файл в `src/assets/` (например, `action-pominovenie.jpg`)
 * 2. Замените соответствующий импорт и поле `image` ниже.
 * Рекомендуемое соотношение сторон 3:2, разрешение от 900×600.
 */
const actions = [
  {
    icon: ScrollText,
    image: news3,
    imageAlt: "Подача записок о здравии и о упокоении",
    title: "Заказать поминовение",
    note: "О здравии, о упокоении, на Литургии и молебнах",
    cta: "Подать записку",
  },
  {
    icon: Clock4,
    image: news1,
    imageAlt: "Расписание богослужений в монастыре",
    title: "Расписание богослужений",
    note: "Литургия, всенощное бдение, молебны и панихиды",
    cta: "Смотреть",
  },
  {
    icon: ShoppingBag,
    image: news2,
    imageAlt: "Иконы и книги в монастырской лавке",
    title: "Монастырская лавка",
    note: "Иконы, книги, освящённое масло, свечи и просфоры",
    cta: "Перейти в лавку",
  },
  {
    icon: HandHeart,
    image: volga,
    imageAlt: "Поддержка обители и реставрационных работ",
    title: "Пожертвование",
    note: "Поддержать обитель и реставрационные работы",
    cta: "Помочь монастырю",
  },
];

export function Actions() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container-prose">
        <div className="mb-14 text-center">
          <p className="eyebrow">Актуальное</p>
          <h2 className="mt-4 font-display text-3xl text-deep md:text-4xl">
            Что можно сделать сейчас
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {actions.map(({ icon: Icon, image, imageAlt, title, note, cta }) => (
            <article
              key={title}
              className="group flex flex-col border border-border bg-card transition-all hover:border-accent/60 hover:shadow-card"
            >
              <div className="relative aspect-[3/2] w-full overflow-hidden bg-secondary/40">
                <img
                  src={image}
                  alt={imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center border border-accent/50 bg-background/90 text-accent backdrop-blur-sm">
                  <Icon className="h-4 w-4" strokeWidth={1.4} />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-xl leading-tight text-foreground">
                  {title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {note}
                </p>
                <a
                  href="#"
                  className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-deep transition-all group-hover:text-accent group-hover:gap-3"
                >
                  {cta} <span aria-hidden>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
