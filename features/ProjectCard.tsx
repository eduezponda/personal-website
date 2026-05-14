import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={project.href}
      className="group block border border-outline-variant rounded-lg bg-surface-low hover:bg-surface-container hover:border-outline transition-colors p-6"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-base font-semibold text-on-surface group-hover:text-accent transition-colors leading-snug">
          {project.title}
        </h3>
        <ArrowUpRight
          size={16}
          className="text-on-surface-variant group-hover:text-accent transition-colors shrink-0 mt-0.5"
        />
      </div>
      <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-label text-on-surface-variant bg-surface-container-high rounded px-2 py-0.5"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
