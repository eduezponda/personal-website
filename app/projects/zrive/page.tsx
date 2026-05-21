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
];

export default function ZrivePage() {
  const project = projects.find((p) => p.slug === "zrive")!;

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
          AI Engineering
        </span>
      </nav>

      {/* Hero */}
      <section className="mb-xl">
        <div className="max-w-3xl">
          <h1 className="text-hero-lg text-on-surface mb-sm">Zrive DS Course</h1>
          <p className="text-title-lg text-secondary mb-md">
            6 end-to-end data science modules.
          </p>
          <div className="flex flex-wrap gap-xs mb-lg">
            {["Machine Learning", "APIs", "pandas", "XGBoost", "LightGBM", "FastAPI"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-sm py-xs bg-surface-container text-secondary text-label-sm rounded border border-outline-variant"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-xl">
        {/* Featured card */}
        <div className="md:col-span-8 bg-surface-container border border-outline-variant rounded-lg overflow-hidden relative min-h-[240px] flex items-end">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="material-symbols-outlined text-[80px] text-outline/40">
              account_tree
            </span>
          </div>
          <div className="relative p-lg">
            <h3 className="text-title-lg text-on-surface mb-xs">
              End-to-End Pipeline
            </h3>
            <p className="text-body-md text-secondary max-w-md">
              Comprehensive implementation covering data acquisition, processing,
              modeling, and production deployment.
            </p>
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
        <div className="flex items-center justify-between gap-md p-lg bg-surface-container border border-outline-variant rounded-lg">
          <div className="flex items-center gap-md">
            <span className="material-symbols-outlined text-[40px] text-primary">
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
            href="/zrive-brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-xs bg-primary-container text-on-primary-container px-lg py-sm rounded-lg text-title-md transition-all hover:opacity-90 active:scale-95"
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
              <h3 className="text-title-md text-on-surface mb-xs">
                {module.title}
              </h3>
              <p className="text-body-md text-secondary">{module.summary}</p>
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
