import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  LayoutDashboard,
  Newspaper,
  CalendarDays,
  Image as ImageIcon,
  HandCoins,
  Settings,
  Users,
  LogOut,
  Plus,
  Pencil,
  Trash2,
  Search,
} from "lucide-react";
import { Logo } from "@/components/site/Logo";

export const Route = createFileRoute("/admin")({
  component: AdminPage,
  head: () => ({
    meta: [{ title: "Админ-панель — Ольгинский монастырь" }],
  }),
});

type SectionKey =
  | "dashboard"
  | "news"
  | "schedule"
  | "gallery"
  | "donations"
  | "users"
  | "settings";

const SECTIONS: { key: SectionKey; label: string; icon: typeof LayoutDashboard }[] = [
  { key: "dashboard", label: "Обзор", icon: LayoutDashboard },
  { key: "news", label: "Новости", icon: Newspaper },
  { key: "schedule", label: "Расписание", icon: CalendarDays },
  { key: "gallery", label: "Галерея", icon: ImageIcon },
  { key: "donations", label: "Сборы", icon: HandCoins },
  { key: "users", label: "Пользователи", icon: Users },
  { key: "settings", label: "Настройки", icon: Settings },
];

function AdminPage() {
  const [active, setActive] = useState<SectionKey>("dashboard");

  return (
    <div className="min-h-screen bg-[oklch(0.97_0.008_85)] text-foreground">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="hidden w-64 shrink-0 flex-col border-r border-border/70 bg-background md:flex">
          <Link to="/" className="flex items-center gap-3 border-b border-border/70 px-5 py-5">
            <Logo className="h-8 w-8 text-accent" />
            <div className="leading-tight">
              <div className="font-display text-[15px]">Ольгинский</div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Админ-панель
              </div>
            </div>
          </Link>

          <nav className="flex-1 px-3 py-4">
            <ul className="space-y-0.5">
              {SECTIONS.map(({ key, label, icon: Icon }) => {
                const isActive = active === key;
                return (
                  <li key={key}>
                    <button
                      onClick={() => setActive(key)}
                      className={`flex w-full items-center gap-3 rounded-sm px-3 py-2 text-left text-[13px] transition-colors ${
                        isActive
                          ? "bg-accent/10 text-accent"
                          : "text-foreground/70 hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      <Icon className="h-4 w-4" strokeWidth={1.5} />
                      {label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="border-t border-border/70 px-3 py-3">
            <button className="flex w-full items-center gap-3 rounded-sm px-3 py-2 text-[13px] text-foreground/70 transition-colors hover:bg-muted hover:text-foreground">
              <LogOut className="h-4 w-4" strokeWidth={1.5} />
              Выйти
            </button>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1">
          {/* Top bar */}
          <header className="sticky top-0 z-10 border-b border-border/70 bg-background/90 backdrop-blur">
            <div className="flex h-14 items-center justify-between gap-4 px-6">
              <div className="flex items-center gap-3">
                <h1 className="font-display text-lg">
                  {SECTIONS.find((s) => s.key === active)?.label}
                </h1>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative hidden md:block">
                  <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Поиск…"
                    className="w-64 rounded-sm border border-border bg-background py-1.5 pl-8 pr-3 text-[13px] outline-none focus:border-accent"
                  />
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 text-[12px] font-medium text-accent">
                  АИ
                </div>
              </div>
            </div>
          </header>

          <div className="px-6 py-6">
            {active === "dashboard" && <DashboardSection />}
            {active === "news" && <NewsSection />}
            {active === "schedule" && <ScheduleSection />}
            {active === "gallery" && <GallerySection />}
            {active === "donations" && <DonationsSection />}
            {active === "users" && <UsersSection />}
            {active === "settings" && <SettingsSection />}
          </div>
        </main>
      </div>
    </div>
  );
}

/* ---------- Sections ---------- */

function StatCard({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="rounded-sm border border-border bg-background p-5">
      <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
      <div className="mt-2 font-display text-3xl">{value}</div>
      {hint && <div className="mt-1 text-[12px] text-muted-foreground">{hint}</div>}
    </div>
  );
}

function DashboardSection() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Новости" value="24" hint="за последний месяц" />
        <StatCard label="Богослужения" value="58" hint="запланировано" />
        <StatCard label="Фотографий" value="312" hint="в галерее" />
        <StatCard label="Пожертвования" value="—" hint="подключите backend" />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="rounded-sm border border-border bg-background p-5 lg:col-span-2">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-display text-base">Последние действия</h2>
            <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              демо-данные
            </span>
          </div>
          <ul className="divide-y divide-border/70 text-[13px]">
            {[
              { t: "Опубликована новость «Престольный праздник»", d: "сегодня, 10:24" },
              { t: "Обновлено расписание на следующую неделю", d: "вчера, 18:02" },
              { t: "Добавлено 12 фотографий в галерею", d: "3 дня назад" },
              { t: "Изменён текст в разделе «О монастыре»", d: "5 дней назад" },
            ].map((item) => (
              <li key={item.t} className="flex items-center justify-between py-2.5">
                <span className="text-foreground/85">{item.t}</span>
                <span className="text-muted-foreground">{item.d}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-sm border border-border bg-background p-5">
          <h2 className="mb-3 font-display text-base">Подсказка</h2>
          <p className="text-[13px] leading-relaxed text-muted-foreground">
            Это визуальная заглушка админ-панели. Сохранение, загрузка изображений и
            аутентификация ещё не подключены — интеграцию с собственным backend
            добавите позже.
          </p>
        </div>
      </div>
    </div>
  );
}

function SectionToolbar({ onNew }: { onNew?: () => void }) {
  return (
    <div className="mb-4 flex items-center justify-between gap-3">
      <div className="relative">
        <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Поиск…"
          className="w-72 rounded-sm border border-border bg-background py-1.5 pl-8 pr-3 text-[13px] outline-none focus:border-accent"
        />
      </div>
      <button
        onClick={onNew}
        className="inline-flex items-center gap-2 rounded-sm border border-accent bg-accent px-3 py-1.5 text-[12px] uppercase tracking-[0.18em] text-accent-foreground transition-colors hover:bg-accent/90"
      >
        <Plus className="h-3.5 w-3.5" /> Добавить
      </button>
    </div>
  );
}

function DataTable<T extends { id: string }>({
  columns,
  rows,
}: {
  columns: { key: keyof T | "actions"; label: string; className?: string }[];
  rows: T[];
}) {
  return (
    <div className="overflow-hidden rounded-sm border border-border bg-background">
      <table className="w-full text-[13px]">
        <thead className="bg-muted/50 text-left text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
          <tr>
            {columns.map((c) => (
              <th key={String(c.key)} className={`px-4 py-2.5 font-medium ${c.className ?? ""}`}>
                {c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border/70">
          {rows.map((row) => (
            <tr key={row.id} className="hover:bg-muted/30">
              {columns.map((c) => (
                <td key={String(c.key)} className={`px-4 py-3 align-middle ${c.className ?? ""}`}>
                  {c.key === "actions" ? (
                    <div className="flex items-center justify-end gap-1">
                      <button className="rounded p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground">
                        <Pencil className="h-3.5 w-3.5" />
                      </button>
                      <button className="rounded p-1.5 text-muted-foreground hover:bg-muted hover:text-destructive">
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ) : (
                    String(row[c.key as keyof T] ?? "")
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function NewsSection() {
  const rows = [
    { id: "1", title: "Престольный праздник равноапостольной Ольги", date: "11 июля 2026", status: "Опубликовано" },
    { id: "2", title: "Начало строительства колокольни", date: "28 апреля 2026", status: "Опубликовано" },
    { id: "3", title: "Паломническая программа на лето", date: "15 апреля 2026", status: "Черновик" },
  ];
  return (
    <div>
      <SectionToolbar />
      <DataTable
        rows={rows}
        columns={[
          { key: "title", label: "Заголовок" },
          { key: "date", label: "Дата" },
          { key: "status", label: "Статус" },
          { key: "actions", label: "", className: "text-right w-24" },
        ]}
      />
    </div>
  );
}

function ScheduleSection() {
  const rows = [
    { id: "1", date: "28 апр", time: "07:30", service: "Часы. Божественная литургия" },
    { id: "2", date: "28 апр", time: "17:00", service: "Вечернее богослужение" },
    { id: "3", date: "29 апр", time: "07:30", service: "Часы. Божественная литургия" },
    { id: "4", date: "29 апр", time: "17:00", service: "Вечернее богослужение с акафистом" },
  ];
  return (
    <div>
      <SectionToolbar />
      <DataTable
        rows={rows}
        columns={[
          { key: "date", label: "Дата", className: "w-28" },
          { key: "time", label: "Время", className: "w-24" },
          { key: "service", label: "Богослужение" },
          { key: "actions", label: "", className: "text-right w-24" },
        ]}
      />
    </div>
  );
}

function GallerySection() {
  const items = Array.from({ length: 12 }, (_, i) => i + 1);
  return (
    <div>
      <SectionToolbar />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((i) => (
          <div
            key={i}
            className="group relative aspect-[4/3] overflow-hidden rounded-sm border border-border bg-muted"
          >
            <div className="flex h-full items-center justify-center text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Фото {i}
            </div>
            <div className="absolute inset-0 flex items-center justify-center gap-2 bg-foreground/40 opacity-0 transition-opacity group-hover:opacity-100">
              <button className="rounded p-1.5 text-background hover:bg-background/20">
                <Pencil className="h-4 w-4" />
              </button>
              <button className="rounded p-1.5 text-background hover:bg-background/20">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DonationsSection() {
  const rows = [
    { id: "1", title: "Реставрация росписи храма", goal: "1 200 000 ₽", collected: "—", status: "Активен" },
    { id: "2", title: "Колокольня", goal: "3 500 000 ₽", collected: "—", status: "Активен" },
    { id: "3", title: "Паломническая трапезная", goal: "650 000 ₽", collected: "—", status: "Завершён" },
  ];
  return (
    <div>
      <SectionToolbar />
      <DataTable
        rows={rows}
        columns={[
          { key: "title", label: "Сбор" },
          { key: "goal", label: "Цель" },
          { key: "collected", label: "Собрано" },
          { key: "status", label: "Статус" },
          { key: "actions", label: "", className: "text-right w-24" },
        ]}
      />
      <p className="mt-3 text-[12px] text-muted-foreground">
        Подключите собственный backend, чтобы отображать суммы пожертвований и
        обрабатывать платежи.
      </p>
    </div>
  );
}

function UsersSection() {
  const rows = [
    { id: "1", name: "Администратор", email: "admin@example.ru", role: "Администратор" },
    { id: "2", name: "Редактор новостей", email: "editor@example.ru", role: "Редактор" },
  ];
  return (
    <div>
      <SectionToolbar />
      <DataTable
        rows={rows}
        columns={[
          { key: "name", label: "Имя" },
          { key: "email", label: "E-mail" },
          { key: "role", label: "Роль" },
          { key: "actions", label: "", className: "text-right w-24" },
        ]}
      />
    </div>
  );
}

function SettingsSection() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <div className="rounded-sm border border-border bg-background p-5">
        <h2 className="mb-4 font-display text-base">Контактная информация</h2>
        <div className="space-y-3 text-[13px]">
          <Field label="Телефон" defaultValue="+7 (482) 200-00-00" />
          <Field label="E-mail" defaultValue="info@olginsky-monastyr.ru" />
          <Field
            label="Адрес"
            defaultValue="Тверская область, Осташковский район, д. Волговерховье"
          />
        </div>
      </div>

      <div className="rounded-sm border border-border bg-background p-5">
        <h2 className="mb-4 font-display text-base">Социальные сети</h2>
        <div className="space-y-3 text-[13px]">
          <Field label="ВКонтакте" defaultValue="https://vk.com/" />
          <Field label="Telegram" defaultValue="https://t.me/" />
          <Field label="MAX" defaultValue="https://max.ru/" />
        </div>
      </div>

      <div className="rounded-sm border border-border bg-background p-5 lg:col-span-2">
        <div className="flex justify-end">
          <button className="rounded-sm border border-accent bg-accent px-4 py-2 text-[12px] uppercase tracking-[0.18em] text-accent-foreground transition-colors hover:bg-accent/90">
            Сохранить
          </button>
        </div>
      </div>
    </div>
  );
}

function Field({ label, defaultValue }: { label: string; defaultValue?: string }) {
  return (
    <label className="block">
      <span className="mb-1 block text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </span>
      <input
        type="text"
        defaultValue={defaultValue}
        className="w-full rounded-sm border border-border bg-background px-3 py-2 outline-none focus:border-accent"
      />
    </label>
  );
}
