import Link from "next/link";

export const metadata = {
  title: "Ezponda Capital | Eduardo Ezponda",
  description:
    "Premium investment research platform focused on commodities — gold, copper, and macro cycles.",
};

const theses = [
  {
    ticker: "FCX",
    exchange: "NYSE",
    category: "Copper",
    categoryIcon: "crisis_alert",
    tier: "Free",
    title: "Freeport-McMoRan: The Central Bank of Copper",
    summary:
      "Grasberg controls ~10 % of global mined copper supply with ore grades 3× the industry average. Three concurrent megatrends — EV electrification, grid modernisation, and AI data-centre buildout — drive structural demand while supply remains constrained by declining ore grades.",
    tags: ["Supercycle", "Electrification", "Indonesia"],
    date: "Apr 2026",
  },
  {
    ticker: "MKO",
    exchange: "TSX-V",
    category: "Gold",
    categoryIcon: "diamond",
    tier: "Premium",
    title: "Mako Mining: Four Mines, One Window, Triple the Upside",
    summary:
      "Market prices Mako on current 2026 production (~60 koz), ignoring funded growth assets that will nearly triple output to 191 koz by 2028. At that level, annual gross margins approach $510 M against a $475 M enterprise value — a 3× re-rating analogous to Aris Mining.",
    tags: ["Junior Miner", "Production Growth", "FCF"],
    date: "Apr 2026",
  },
];

const stack = [
  { label: "Framework", value: "Next.js 15 · App Router" },
  { label: "Runtime", value: "React 19 · TypeScript 5" },
  { label: "Auth & DB", value: "Supabase (PostgreSQL + RLS)" },
  { label: "Payments", value: "Stripe Checkout + Webhooks" },
  { label: "Content", value: "MDX via next-mdx-remote" },
  { label: "i18n", value: "next-intl v4 (EN / ES)" },
  { label: "Prices", value: "GoldAPI.io · api-ninjas.com" },
  { label: "Hosting", value: "Vercel (Cron + Edge)" },
];

const tiers = [
  {
    name: "Guest",
    icon: "visibility",
    description: "Public browsing — platform overview and thesis previews.",
  },
  {
    name: "Free",
    icon: "lock_open",
    description: "Full access to free-tier research theses after sign-up.",
  },
  {
    name: "Subscriber",
    icon: "workspace_premium",
    description: "Unlimited premium theses and live commodity price feed.",
  },
];

export default function EzpondaCapitalPage() {
  return (
    <main className="max-w-7xl mx-auto px-margin-desktop py-xl">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-xs mb-md text-secondary">
        <Link
          href="/projects"
          className="text-label-sm uppercase tracking-widest hover:text-primary transition-colors"
        >
          Projects
        </Link>
        <span className="material-symbols-outlined text-[16px]">
          chevron_right
        </span>
        <span className="text-label-sm uppercase tracking-widest text-primary">
          Value Investing
        </span>
      </nav>

      {/* Hero */}
      <section className="mb-xl">
        <div className="max-w-3xl">
          <h1 className="text-hero-lg text-on-surface mb-sm">
            Ezponda Capital
          </h1>
          <p className="text-title-lg text-secondary mb-md">
            Premium investment research. Commodities & macro cycles.
          </p>
          <div className="flex flex-wrap gap-xs mb-lg">
            {[
              "Value Investing",
              "Gold",
              "Copper",
              "Next.js 15",
              "Supabase",
              "Stripe",
            ].map((tag) => (
              <span
                key={tag}
                className="px-sm py-xs bg-surface-container text-secondary text-label-sm rounded border border-outline-variant"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-xl">
        {/* Featured card */}
        <div className="md:col-span-8 bg-surface-container border border-outline-variant rounded-lg overflow-hidden relative min-h-[240px] flex flex-col justify-end">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="material-symbols-outlined text-[80px] text-outline/40">
              candlestick_chart
            </span>
          </div>
          <div className="relative p-lg">
            <h3 className="text-title-lg text-on-surface mb-xs">
              Independent High-Conviction Research
            </h3>
            <p className="text-body-md text-secondary max-w-md">
              Deep-dive commodity theses for sophisticated investors — beyond
              mainstream financial media. Rigorous fundamental analysis with
              explicit valuation scenarios and margin-of-safety thinking.
            </p>
          </div>
        </div>

        {/* Access tiers card */}
        <div className="md:col-span-4 bg-surface-container border border-outline-variant rounded-lg p-lg flex flex-col justify-between">
          <h4 className="text-label-sm uppercase tracking-widest text-primary mb-md">
            Access Model
          </h4>
          <ul className="space-y-sm flex-1">
            {tiers.map(({ name, icon, description }) => (
              <li key={name} className="flex items-start gap-sm">
                <span className="material-symbols-outlined text-[20px] text-primary mt-[2px] shrink-0">
                  {icon}
                </span>
                <div>
                  <p className="text-title-md text-on-surface leading-snug">
                    {name}
                  </p>
                  <p className="text-body-md text-secondary">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Research Theses */}
      <section className="mb-xl">
        <h2 className="text-title-lg mb-lg flex items-center gap-xs">
          <span className="material-symbols-outlined text-primary">
            bar_chart_4_bars
          </span>
          Research Theses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {theses.map((t) => (
            <div
              key={t.ticker}
              className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md hover:border-primary-container transition-colors group flex flex-col gap-md"
            >
              {/* Header row */}
              <div className="flex items-start justify-between gap-sm">
                <div className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-[24px] text-primary">
                    {t.categoryIcon}
                  </span>
                  <div>
                    <p className="text-label-sm uppercase tracking-widest text-secondary">
                      {t.category} · {t.date}
                    </p>
                    <p className="text-title-md text-on-surface font-semibold">
                      {t.ticker}
                      <span className="text-secondary text-body-md font-normal ml-xs">
                        {t.exchange}
                      </span>
                    </p>
                  </div>
                </div>
                <span
                  className={`text-label-sm px-sm py-xs rounded border shrink-0 ${
                    t.tier === "Premium"
                      ? "bg-primary-container text-on-primary-container border-transparent"
                      : "bg-surface-container text-secondary border-outline-variant"
                  }`}
                >
                  {t.tier}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-title-md text-on-surface leading-snug">
                {t.title}
              </h3>

              {/* Summary */}
              <p className="text-body-md text-secondary leading-relaxed flex-1">
                {t.summary}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-xs">
                {t.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-label-sm px-sm py-xs bg-surface-container border border-outline-variant rounded text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mb-xl">
        <h2 className="text-title-lg mb-lg flex items-center gap-xs">
          <span className="material-symbols-outlined text-primary">
            developer_mode
          </span>
          Platform Architecture
        </h2>
        <div className="bg-surface-container border border-outline-variant rounded-lg divide-y divide-outline-variant/30">
          {stack.map(({ label, value }) => (
            <div
              key={label}
              className="flex items-center justify-between px-lg py-sm"
            >
              <span className="text-secondary text-body-md">{label}</span>
              <span className="text-on-surface text-title-md">{value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="flex flex-col md:flex-row gap-md justify-center items-center py-lg bg-surface-container border border-outline-variant rounded-lg">
        <a
          href="https://ezponda-capital.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-xs bg-primary-container text-on-primary-container px-xl py-md rounded-lg text-title-md transition-all hover:opacity-90 active:scale-95 shadow-sm"
        >
          <span className="material-symbols-outlined">open_in_new</span>
          Live Platform
        </a>
        <a
          href="https://github.com/eduezponda/ezponda-capital"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-xs bg-surface-container-lowest border border-outline text-on-surface px-xl py-md rounded-lg text-title-md transition-all hover:bg-surface-variant active:scale-95"
        >
          <span className="material-symbols-outlined">code</span>
          GitHub Repository
        </a>
        <Link
          href="/projects"
          className="flex items-center gap-xs bg-surface-container-lowest border border-outline text-on-surface px-xl py-md rounded-lg text-title-md transition-all hover:bg-surface-variant active:scale-95"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          All Projects
        </Link>
      </section>
    </main>
  );
}
