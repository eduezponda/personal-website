import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Ezponda Capital | Eduardo Ezponda",
  description:
    "Premium investment research platform covering gold, copper, and macro cycles.",
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
      "Grasberg controls ~10 % of global mined copper supply with ore grades 3× the industry average. Three concurrent megatrends drive structural demand while supply remains constrained by declining ore grades: EV electrification, grid modernisation, and AI data-centre buildout.",
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
      "Market prices Mako on current 2026 production (~60 koz), ignoring funded growth assets that will nearly triple output to 191 koz by 2028. At that level, annual gross margins approach $510 M against a $475 M enterprise value, a 3× re-rating analogous to Aris Mining.",
    tags: ["Junior Miner", "Production Growth", "FCF"],
    date: "Apr 2026",
  },
];

const stack = [
  { label: "Framework", value: "Next.js 15 · App Router" },
  { label: "Runtime", value: "React 19 · TypeScript 5" },
  { label: "Styling", value: "Tailwind CSS v4 · Inter · Gold theme" },
  { label: "Auth & DB", value: "Supabase (PostgreSQL + RLS)" },
  { label: "Payments", value: "Stripe Checkout + Webhooks" },
  { label: "Content", value: "MDX via next-mdx-remote" },
  { label: "i18n", value: "next-intl v4 (EN / ES)" },
  { label: "Prices", value: "GoldAPI.io · api-ninjas.com · Daily cron" },
  { label: "Hosting", value: "Vercel · Fluid Compute" },
];

const assets = [
  { symbol: "XAU", name: "Gold", icon: "diamond" },
  { symbol: "XAG", name: "Silver", icon: "diamond" },
  { symbol: "XCU", name: "Copper", icon: "crisis_alert" },
  { symbol: "BTC", name: "Bitcoin", icon: "currency_bitcoin" },
  { symbol: "XPT", name: "Platinum", icon: "science" },
  { symbol: "XPD", name: "Palladium", icon: "science" },
];

const statusItems = [
  { done: true, label: "Core platform fully built and deployed" },
  { done: true, label: "Auth, payments, content gating, i18n, and price ticker" },
  { done: true, label: "2 equity research theses published (FCX · MKO)" },
  { done: false, wip: true, label: "More thesis content in progress" },
  { done: false, wip: true, label: "Custom domain (currently on Vercel subdomain)" },
  { done: false, wip: false, label: "Phase 2: Stripe live mode, subscriber terminal, more theses" },
];

const tiers = [
  {
    name: "Guest",
    icon: "visibility",
    description: "Public browsing with access to platform overview and thesis previews.",
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
        <div className="md:col-span-8 bg-surface-container border border-outline-variant rounded-lg p-lg grid grid-cols-[1fr_148px] gap-xl min-h-[240px]">
          {/* Left column: eyebrow + heading + description */}
          <div className="flex flex-col justify-between gap-md min-w-0">
            <div className="flex items-center gap-xs">
              <span className="material-symbols-outlined text-[20px] text-primary">
                candlestick_chart
              </span>
              <span className="text-label-sm uppercase tracking-widest text-primary">
                Research Platform
              </span>
            </div>
            <div className="flex flex-col gap-sm">
              <h3 className="text-title-lg text-on-surface">
                Value Investing for the Commodity Cycle
              </h3>
              <p className="text-body-md text-secondary leading-relaxed">
                Ezponda Capital is a specialized value investing platform
                dedicated to commodity equities, built and curated by analyst{" "}
                <a
                  href="https://x.com/inigoezponda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Íñigo Ezponda
                </a>
                . It hosts rigorous investment theses and deep fundamental
                analysis covering gold, copper, silver, and real assets across
                the full commodity universe. Every thesis is anchored in
                explicit margin-of-safety valuation scenarios, structured for
                sophisticated investors who demand institutional-grade reasoning
                over consensus noise.
              </p>
            </div>
          </div>

          {/* Right column: key metrics */}
          <div className="flex flex-col justify-center gap-md border-l border-outline-variant/40 pl-xl">
            {(
              [
                ["6", "Assets tracked"],
                ["Daily", "Price feed"],
                ["2", "Theses live"],
              ] as const
            ).map(([value, label]) => (
              <div key={label}>
                <p className="text-title-lg text-primary font-bold leading-none mb-[2px]">
                  {value}
                </p>
                <p className="text-label-sm text-secondary uppercase tracking-widest">
                  {label}
                </p>
              </div>
            ))}
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

      {/* Coverage Universe */}
      <section className="mb-xl">
        <h2 className="text-title-lg mb-lg flex items-center gap-xs">
          <span className="material-symbols-outlined text-primary">
            monitoring
          </span>
          Coverage Universe
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-gutter">
          {assets.map(({ symbol, name, icon }) => (
            <div
              key={symbol}
              className="bg-surface-container border border-outline-variant rounded-lg p-md flex flex-col items-center gap-xs text-center"
            >
              <span className="material-symbols-outlined text-[28px] text-primary">
                {icon}
              </span>
              <p className="text-title-md text-on-surface font-semibold">
                {symbol}
              </p>
              <p className="text-label-sm text-secondary uppercase tracking-widest">
                {name}
              </p>
            </div>
          ))}
        </div>
        <p className="text-body-sm text-secondary mt-sm">
          Prices refreshed daily at 08:00 UTC via Vercel Cron. GoldAPI.io serves metals data; api-ninjas.com covers Bitcoin and Copper.
        </p>
      </section>

      {/* Screenshots */}
      <section className="mb-xl">
        <h2 className="text-title-lg mb-lg flex items-center gap-xs">
          <span className="material-symbols-outlined text-primary">
            screenshot_monitor
          </span>
          Platform Screenshots
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">

          {/* 1 — Landing hero — full width */}
          <figure className="md:col-span-12 relative aspect-[16/7] rounded-lg overflow-hidden border border-outline-variant m-0">
            <Image
              src="/images/projects/ezponda-capital/hero.webp"
              alt="Ezponda Capital landing page. Real Assets, Real Value."
              fill
              priority
              className="object-cover object-top"
              sizes="100vw"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 to-transparent px-md pt-xl pb-sm">
              <p className="text-label-sm text-white/60 uppercase tracking-widest mb-[2px]">
                Landing Page
              </p>
              <p className="text-body-md text-white font-medium">
                High-conviction commodity research on gold, copper, and macro
                cycles, for investors who think in decades.
              </p>
            </figcaption>
          </figure>

          {/* 2 — Featured theses (landscape 8/12) */}
          <figure className="md:col-span-8 relative aspect-video rounded-lg overflow-hidden border border-outline-variant m-0">
            <Image
              src="/images/projects/ezponda-capital/theses-gallery.webp"
              alt="Featured Theses: Mako Mining and Freeport-McMoRan research cards"
              fill
              className="object-cover object-top"
              sizes="(min-width: 768px) 66vw, 100vw"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 to-transparent px-md pt-xl pb-sm">
              <p className="text-label-sm text-white/60 uppercase tracking-widest mb-[2px]">
                Research Theses
              </p>
              <p className="text-body-md text-white font-medium">
                Thesis cards showing ticker, exchange, category tag, and
                publication date, browsable by asset class.
              </p>
            </figcaption>
          </figure>

          {/* 3 — Login / auth (4/12, stretches to match row height) */}
          <figure className="md:col-span-4 relative aspect-video md:aspect-auto rounded-lg overflow-hidden border border-outline-variant m-0">
            <Image
              src="/images/projects/ezponda-capital/auth-login.webp"
              alt="Login to Terminal: Google OAuth and email/password login for the investment research dashboard"
              fill
              className="object-cover object-center"
              sizes="(min-width: 768px) 33vw, 100vw"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 to-transparent px-md pt-xl pb-sm">
              <p className="text-label-sm text-white/60 uppercase tracking-widest mb-[2px]">
                Authentication
              </p>
              <p className="text-body-md text-white font-medium">
                Google OAuth or email/password login, granting access to the
                investment research terminal.
              </p>
            </figcaption>
          </figure>

          {/* 4 — Coverage universe + analyst profile (landscape 8/12) */}
          <figure className="md:col-span-8 relative aspect-video rounded-lg overflow-hidden border border-outline-variant m-0">
            <Image
              src="/images/projects/ezponda-capital/strategic-anchors.webp"
              alt="Coverage Universe: Gold, Copper, Macro Cycles, and Real Assets category cards, plus analyst profile"
              fill
              className="object-cover object-top"
              sizes="(min-width: 768px) 66vw, 100vw"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 to-transparent px-md pt-xl pb-sm">
              <p className="text-label-sm text-white/60 uppercase tracking-widest mb-[2px]">
                Coverage Universe
              </p>
              <p className="text-body-md text-white font-medium">
                Gold, Copper, Macro Cycles, and Real Assets as strategic
                anchors, paired with the analyst profile and credential badges.
              </p>
            </figcaption>
          </figure>

          {/* 5 — User profile / RBAC (4/12, stretches to match row height) */}
          <figure className="md:col-span-4 relative aspect-video md:aspect-auto rounded-lg overflow-hidden border border-outline-variant bg-[#131313] m-0">
            <Image
              src="/images/projects/ezponda-capital/profile-card.webp"
              alt="User profile card showing name, email, Superadmin plan badge, and full admin access status"
              fill
              className="object-contain object-center"
              sizes="(min-width: 768px) 33vw, 100vw"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 to-transparent px-md pt-xl pb-sm">
              <p className="text-label-sm text-white/60 uppercase tracking-widest mb-[2px]">
                User Profile
              </p>
              <p className="text-body-md text-white font-medium">
                Role-based access control with Guest, Free, and Subscriber tiers
                enforced via Supabase RLS on every research asset.
              </p>
            </figcaption>
          </figure>

          {/* 6 — Investment methodology + footer — full width */}
          <figure className="md:col-span-12 relative aspect-[16/7] rounded-lg overflow-hidden border border-outline-variant m-0">
            <Image
              src="/images/projects/ezponda-capital/methodology.webp"
              alt="Investment Methodology: Macro Framework, Conviction Filtering, and Institutional Lens steps"
              fill
              className="object-cover object-top"
              sizes="100vw"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 to-transparent px-md pt-xl pb-sm">
              <p className="text-label-sm text-white/60 uppercase tracking-widest mb-[2px]">
                Investment Methodology
              </p>
              <p className="text-body-md text-white font-medium">
                Three-step framework: top-down macro analysis → asymmetric
                conviction filtering → institutional-grade presentation.
              </p>
            </figcaption>
          </figure>

        </div>
      </section>

      {/* Platform Status */}
      <section className="mb-xl">
        <h2 className="text-title-lg mb-lg flex items-center gap-xs">
          <span className="material-symbols-outlined text-primary">
            rocket_launch
          </span>
          Platform Status
        </h2>
        <div className="bg-surface-container border border-outline-variant rounded-lg divide-y divide-outline-variant/30">
          {statusItems.map(({ done, wip, label }) => (
            <div key={label} className="flex items-center gap-md px-lg py-sm">
              <span
                className={`material-symbols-outlined text-[20px] shrink-0 ${
                  done
                    ? "text-primary"
                    : wip
                    ? "text-[var(--color-warning,#f59e0b)]"
                    : "text-secondary"
                }`}
              >
                {done ? "check_circle" : wip ? "pending" : "schedule"}
              </span>
              <span
                className={`text-body-md ${
                  done ? "text-on-surface" : "text-secondary"
                }`}
              >
                {label}
              </span>
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
