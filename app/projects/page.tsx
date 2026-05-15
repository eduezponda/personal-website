import Link from "next/link";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Projects — Eduardo Ezponda",
  description:
    "A collection of technical projects focusing on machine learning pipelines, financial modeling, and software systems.",
};

const coverIcons: Record<string, string> = {
  zrive: "analytics",
  komorebi: "query_stats",
  "ezponda-capital": "trending_up",
};

export default function ProjectsPage() {
  return (
    <main className="max-w-7xl mx-auto px-margin-desktop py-xl">
      {/* Hero */}
      <section className="mb-xl">
        <h1 className="text-hero-lg text-on-surface mb-md">
          Selected Engineering &amp; Data Works
        </h1>
        <p className="text-body-lg text-secondary max-w-2xl">
          A collection of technical projects focusing on machine learning
          pipelines, financial modeling, and software systems. Built with a
          focus on modularity and rigorous analysis.
        </p>
      </section>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="group bg-surface-container-lowest border border-outline-variant rounded p-md flex flex-col h-full hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300"
          >
            {/* Cover placeholder */}
            <div className="aspect-video mb-md bg-surface-container-low overflow-hidden rounded flex items-center justify-center">
              <span className="material-symbols-outlined text-[48px] text-outline">
                {coverIcons[project.slug] ?? "folder"}
              </span>
            </div>

            {/* Tags */}
            <div className="mb-xs">
              <span className="text-label-sm bg-surface-container text-on-secondary-container px-xs py-1 rounded">
                {project.tags.slice(0, 2).join(" · ")}
              </span>
            </div>

            <h3 className="text-title-lg mb-sm">{project.title}</h3>
            <p className="text-body-md text-secondary mb-xl flex-grow">
              {project.description}
            </p>

            <div className="pt-md border-t border-outline-variant flex justify-between items-center">
              <div className="flex gap-sm text-secondary">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors flex items-center gap-base"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      code
                    </span>
                    <span className="text-label-sm">GitHub</span>
                  </a>
                )}
                {project.pdfUrl && (
                  <a
                    href={project.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors flex items-center gap-base"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      description
                    </span>
                    <span className="text-label-sm">PDF</span>
                  </a>
                )}
              </div>
              <Link
                href={project.href}
                className="text-primary text-title-md hover:underline flex items-center gap-xs"
              >
                View Project
                <span className="material-symbols-outlined text-[20px]">
                  arrow_forward
                </span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
