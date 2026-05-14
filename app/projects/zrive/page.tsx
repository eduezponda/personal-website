import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { zriveModules } from "@/lib/zrive";
import { ModuleCard } from "@/features/ModuleCard";

export const metadata = {
  title: "Zrive DS Course — Eduardo Ezponda",
  description:
    "Six end-to-end data science modules built during the Zrive program.",
};

export default function ZrivePage() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-28 pb-20">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm text-on-surface-variant hover:text-on-surface transition-colors mb-10"
      >
        <ArrowLeft size={14} /> Projects
      </Link>

      {/* Header */}
      <div className="mb-12">
        <p className="text-label text-accent mb-3">Data Science · 6 Modules</p>
        <h1 className="text-section-title text-on-surface mb-4">
          Zrive DS Course
        </h1>
        <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed mb-6">
          Six end-to-end data science modules completed during the Zrive
          program. Covers the full DS stack: data ingestion, EDA, classical ML,
          gradient boosting, financial modelling, and production API design.
        </p>
        <div className="flex gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-on-surface-variant border border-outline-variant rounded-md px-4 py-2 hover:border-outline hover:text-on-surface transition-colors opacity-50 cursor-not-allowed"
            aria-disabled
            title="GitHub repo coming soon"
          >
            <GithubIcon size={15} /> GitHub repo
          </a>
        </div>
      </div>

      {/* Module grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {zriveModules.map((module) => (
          <ModuleCard key={module.number} module={module} />
        ))}
      </div>
    </div>
  );
}
