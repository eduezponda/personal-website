import Link from "next/link";
import { zriveModules } from "@/lib/zrive";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Zrive DS Course | Eduardo Ezponda",
  description:
    "Six end-to-end data science modules built during the Zrive program.",
};

const moduleIcons = [
  "api",
  "analytics",
  "query_stats",
  "memory",
  "work_history",
  "rocket_launch",
  "business_center",
];

const techStack = [
  { label: "Machine Learning", src: "/images/projects/zrive/machine_learning.webp" },
  { label: "APIs",             src: "/images/projects/zrive/api.webp" },
  { label: "pandas",           src: "/images/projects/zrive/pandas.webp" },
  { label: "XGBoost",         src: "/logos/xgboost.png" },
  { label: "LightGBM",        src: "/logos/lightgbm.svg" },
  { label: "FastAPI",         src: "/logos/fastapi.png" },
];

export default function ZrivePage() {
  const project = projects.find((p) => p.slug === "zrive")!;

  return (
    <main className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl">
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
          AI Engineering
        </span>
      </nav>

      {/* Hero */}
      <section className="mb-xl">
        <div className="max-w-3xl">
          <h1 className="text-hero-lg text-on-surface mb-sm">Zrive DS Course</h1>
          <p className="text-title-lg text-secondary mb-lg">
            6 end-to-end data science modules.
          </p>
        </div>

        {/* Logos card */}
        <div className="bg-surface-container border border-outline-variant rounded-xl p-lg">
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-md">
            {techStack.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-sm">
                <div className="h-11 flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={item.label}
                    className="object-contain max-h-11 w-auto max-w-[80px]"
                  />
                </div>
                <span className="text-label-sm text-secondary text-center leading-tight">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-xl">
        {/* Featured card */}
        <div className="md:col-span-8 bg-surface-container border border-outline-variant rounded-lg p-lg flex flex-col gap-lg md:grid md:grid-cols-[1fr_148px] md:gap-xl min-h-[240px]">
          {/* Left column: eyebrow + heading + description */}
          <div className="flex flex-col gap-md min-w-0">
            <div className="flex items-center gap-xs">
              <span className="material-symbols-outlined text-[20px] text-primary">
                account_tree
              </span>
              <span className="text-label-sm uppercase tracking-widest text-primary">
                ML Pipeline
              </span>
            </div>
            <div className="flex flex-col gap-sm">
              <h3 className="text-title-lg text-on-surface">
                End-to-End Pipeline
              </h3>
              <p className="text-body-md text-secondary leading-relaxed">
                Comprehensive implementation covering data acquisition,
                processing, modeling, and production deployment.
              </p>
            </div>
          </div>

          {/* Right column: key stats */}
          <div className="flex flex-row justify-around md:flex-col md:justify-center gap-md border-t border-outline-variant/40 pt-lg md:border-t-0 md:border-l md:pt-0 md:pl-xl">
            {(
              [
                ["6", "Modules"],
                ["3+", "Libraries"],
                ["Prod", "Deployed"],
              ] as const
            ).map(([value, label]) => (
              <div key={label} className="text-center md:text-left">
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

        {/* Stats card */}
        <div className="md:col-span-4 bg-surface-container border border-outline-variant rounded-lg p-lg flex flex-col justify-between">
          <div>
            <h4 className="text-label-sm uppercase tracking-widest text-primary mb-md">
              Stack Insights
            </h4>
            <ul className="space-y-sm">
              {[
                { label: "Primary Language", value: "Python 3.10" },
                { label: "Libraries", value: "Scikit-learn, Pandas" },
                { label: "Deployment", value: "Docker, FastAPI" },
              ].map(({ label, value }) => (
                <li
                  key={label}
                  className="flex items-center justify-between py-xs border-b border-outline-variant/30"
                >
                  <span className="text-secondary text-body-md">{label}</span>
                  <span className="text-on-surface text-title-md">{value}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-body-md text-secondary italic pt-md">
            &ldquo;Built with a focus on production-ready code and rigorous
            statistical evaluation.&rdquo;
          </p>
        </div>
      </div>

      {/* Brochure */}
      <section className="mb-xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-md p-lg bg-surface-container border border-outline-variant rounded-lg">
          <div className="flex items-start gap-md">
            <span className="material-symbols-outlined text-[40px] text-primary shrink-0">
              description
            </span>
            <div>
              <h3 className="text-title-md text-on-surface">
                Program Brochure
              </h3>
              <p className="text-body-md text-secondary">
                Official Zrive Applied Data Science (Z-DS) program guide, a 15-week
                curriculum, modules, instructors and real-company project.
              </p>
            </div>
          </div>
          <a
            href="/docs/zrive/zrive-brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-xs bg-primary-container text-on-primary-container px-lg py-sm rounded-lg text-title-md transition-all hover:opacity-90 active:scale-95 self-center sm:self-auto"
          >
            <span className="material-symbols-outlined">open_in_new</span>
            View PDF
          </a>
        </div>
      </section>

      {/* Modules grid */}
      <section className="mb-xl">
        <h2 className="text-title-lg mb-lg flex items-center gap-xs">
          <span className="material-symbols-outlined text-primary">
            account_tree
          </span>
          Curriculum Modules
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {zriveModules.map((module, i) => (
            <div
              key={module.number}
              className="bg-surface-container-lowest border border-outline-variant p-md rounded-lg hover:border-primary-container transition-colors group"
            >
              <div className="flex justify-between items-start mb-md">
                <span className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center text-label-sm font-bold">
                  {String(module.number).padStart(2, "0")}
                </span>
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">
                  {moduleIcons[i] ?? "terminal"}
                </span>
              </div>
              <div className="flex flex-col gap-xs mb-md">
                <h3 className="text-title-md text-on-surface">
                  {module.title}
                </h3>
                <p className="text-body-md text-secondary line-clamp-3">{module.summary}</p>
              </div>
              <div className="mb-md">
                <Link
                  href={`/projects/zrive/modules/${module.number}`}
                  className="inline-flex items-center gap-xs text-label-sm text-primary hover:text-accent transition-colors"
                >
                  View Details
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </Link>
              </div>
              {module.pdfs && module.pdfs.length > 0 && (
                <div className="flex flex-wrap gap-xs pt-xs border-t border-outline-variant/30">
                  {module.pdfs.map((pdf) => (
                    <a
                      key={pdf.url}
                      href={pdf.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-xs text-label-sm text-primary hover:text-accent transition-colors"
                    >
                      <span className="material-symbols-outlined text-[14px]">
                        picture_as_pdf
                      </span>
                      {pdf.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>


      {/* CTA */}
      <section className="flex flex-col md:flex-row gap-md justify-center items-center py-lg bg-surface-container border border-outline-variant rounded-lg">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-xs bg-primary-container text-on-primary-container px-xl py-md rounded-lg text-title-md transition-all hover:opacity-90 active:scale-95 shadow-sm"
          >
            <span className="material-symbols-outlined">code</span>
            GitHub Repository
          </a>
        )}
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
