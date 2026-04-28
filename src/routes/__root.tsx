import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-deep">404</h1>
        <h2 className="mt-4 font-display text-2xl text-foreground">Страница не найдена</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Запрашиваемая страница не существует или была перемещена.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center border border-accent px-6 py-3 text-[12px] uppercase tracking-[0.22em] text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            На главную
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ольгинский женский монастырь у истока Волги" },
      { name: "description", content: "Официальный сайт Ольгинского женского монастыря у истока Волги." },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
