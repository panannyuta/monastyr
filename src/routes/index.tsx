import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/site/TopBar";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Today } from "@/components/site/Today";
import { VolgaSource } from "@/components/site/VolgaSource";
import { Pilgrims } from "@/components/site/Pilgrims";
import { Actions } from "@/components/site/Actions";
import { News } from "@/components/site/News";
import { Donate } from "@/components/site/Donate";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Ольгинский женский монастырь у истока Волги — официальный сайт",
      },
      {
        name: "description",
        content:
          "Официальный сайт Ольгинского женского монастыря у истока Волги. Богослужения, паломничество, история обители, пожертвования.",
      },
      { property: "og:title", content: "Ольгинский женский монастырь у истока Волги" },
      {
        property: "og:description",
        content: "Место молитвы, паломничества и начала великой русской реки.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <Today />
        <VolgaSource />
        <Pilgrims />
        <Actions />
        <News />
        <Donate />
      </main>
      <Footer />
    </div>
  );
}
