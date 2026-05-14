import { projects } from "@/lib/projects";
import { ProjectCard } from "@/features/ProjectCard";

export const metadata = {
  title: "Projects — Eduardo Ezponda",
  description: "ML, data science, and value investing projects by Eduardo Ezponda.",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-28 pb-20">
      <div className="mb-12">
        <p className="text-label text-accent mb-3">Work</p>
        <h1 className="text-section-title text-on-surface mb-4">Projects</h1>
        <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
          End-to-end data science projects, production APIs, and investing
          research.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
