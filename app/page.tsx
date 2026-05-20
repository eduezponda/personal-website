import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Eduardo Ezponda | Portfolio",
  description: "Data Scientist and value investor. Building things that work.",
};

const statusCards = [
  {
    label: "Currently Working On",
    icon: "terminal",
    title: "Personal Ecosystem",
    body: "Developing a high-performance personal portfolio and quantitative DS tools using Python and modern web stacks.",
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
    title: "Madrid, Spain",
    body: "Working at Management Solutions on ML models and data pipelines for BBVA, one of Spain's largest banks.",
  },
];

const focusAreas = [
  { number: "01", title: "Machine Learning" },
  { number: "02", title: "API Design" },
  { number: "03", title: "Data Architecture" },
  { number: "04", title: "Value Strategy" },
];

export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto px-margin-desktop">
      {/* Hero */}
      <section className="py-xl md:py-[120px] flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-outline-variant mb-lg">
          <Image
            src="/profile.jpg"
            alt="Eduardo Ezponda"
            width={96}
            height={96}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="inline-block px-sm py-base bg-primary-container/10 border border-primary-container/20 text-on-primary-container text-label-sm uppercase mb-md rounded-full">
          Data Scientist · Value Investor
        </div>
        <h1 className="text-hero-lg-mobile md:text-hero-lg text-on-surface max-w-4xl mb-md">
          Building things that work. Thinking about what&apos;s worth building.
        </h1>
        <p className="text-body-lg text-secondary max-w-2xl mb-lg">
          DS engineer at Management Solutions. Working on ML models, APIs, and
          tools that I&apos;d actually use.
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
        <div className="flex flex-col md:flex-row justify-between items-start gap-lg mb-lg">
          <div className="max-w-xl">
            <h2 className="text-title-lg mb-xs">Professional Focus</h2>
            <p className="text-body-md text-secondary">
              Methodical approach to problem-solving across the data engineering
              lifecycle.
            </p>
          </div>
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
