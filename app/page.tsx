import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Eduardo Ezponda | Portfolio",
  description: "AI Engineer and value investor. Building things that work.",
};

const statusCards = [
  {
    label: "Currently Working On",
    icon: "terminal",
    title: "Agent Engineering",
    body: "Daily work with Claude Code, Codex, and multi-agent systems. Testing context architectures, Obsidian knowledge vaults, and autonomous workflows and learning where they break.",
  },
  {
    label: "Currently Reading",
    icon: "auto_stories",
    title: "Value Investing",
    body: "Analyzing fundamental market dynamics and historical investment frameworks to bridge engineering with finance.",
  },
  {
    label: "Based In",
    icon: "location_on",
    title: "Madrid → Open to Relocation",
    body: "Currently in Madrid, but actively looking for international opportunities. Relocating is the main goal.",
  },
];

const focusAreas = [
  { number: "01", title: "Machine Learning" },
  { number: "02", title: "Agent Engineering" },
  { number: "03", title: "Data Architecture" },
  { number: "04", title: "Value Strategy" },
];

export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
      {/* Hero */}
      <section className="py-xl md:py-[120px] flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-outline-variant mb-lg">
          <Image
            src="/images/profile.webp"
            alt="Eduardo Ezponda"
            width={96}
            height={96}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="inline-block px-sm py-base bg-primary-container/10 border border-primary-container/20 text-on-primary-container text-label-sm uppercase mb-md rounded-full">
          AI Engineer · Value Investor
        </div>
        <h1 className="text-hero-lg-mobile md:text-hero-lg text-on-surface max-w-4xl mb-md">
          Building things that work. Thinking about what&apos;s worth building.
        </h1>
        <p className="text-body-lg text-secondary max-w-2xl mb-lg">
          AI Engineer at Management Solutions. Daily work with Claude Code,
          Codex, and multi-agent systems, testing context strategies, agent
          workflows, and Obsidian-based knowledge architectures. I bridge
          technical execution with business thinking.
        </p>
        <div className="flex flex-col sm:flex-row gap-md items-center">
          <Link
            href="/projects"
            className="bg-primary-container text-on-primary-container px-lg py-sm rounded-lg text-title-md hover:opacity-90 transition-all active:scale-95 flex items-center gap-xs"
          >
            View Projects
            <span className="material-symbols-outlined text-[20px]">
              arrow_forward
            </span>
          </Link>
          <Link
            href="/blog"
            className="bg-surface border border-outline-variant text-on-surface px-lg py-sm rounded-lg text-title-md hover:bg-surface-container transition-all active:scale-95"
          >
            Read Blog
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-outline-variant opacity-30 my-xl" />

      {/* Status cards */}
      <section className="pb-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          {statusCards.map(({ label, icon, title, body }) => (
            <div
              key={label}
              className="bg-surface-container-lowest border border-outline-variant p-lg rounded-lg group hover:border-primary-container transition-colors"
            >
              <div className="flex items-center justify-between mb-sm">
                <span className="text-label-sm text-secondary uppercase tracking-widest">
                  {label}
                </span>
                <span className="material-symbols-outlined text-primary-container">
                  {icon}
                </span>
              </div>
              <h3 className="text-title-md text-on-surface mb-xs">{title}</h3>
              <p className="text-body-md text-secondary">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Professional focus */}
      <section className="py-xl">
        <div className="flex flex-col gap-xs mb-lg">
          <h2 className="text-title-lg">Professional Focus</h2>
          <p className="text-body-md text-secondary">
            Methodical approach to problem-solving across the data engineering
            lifecycle.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
          {focusAreas.map(({ number, title }, i) => (
            <div
              key={number}
              className={`border-l-2 ${
                i === 0 ? "border-primary-container" : "border-outline-variant"
              } pl-md py-xs`}
            >
              <div className="text-label-sm text-secondary uppercase mb-xs">
                {number}
              </div>
              <div className="text-title-md">{title}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
