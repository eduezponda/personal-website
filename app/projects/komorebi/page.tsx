import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Komorebi — Churn Prediction — Eduardo Ezponda",
  description: "Binary classification model to predict customer churn.",
};

const project = projects.find((p) => p.slug === "komorebi")!;

const metrics = [
  { label: "Task", value: "Binary Classification" },
  { label: "Target", value: "Customer Churn" },
  { label: "Report", value: "PDF available" },
  { label: "GitHub", value: "Public repo" },
];

const stack = [
  "Python",
  "scikit-learn",
  "pandas",
  "EDA",
  "Classification",
  "Feature Engineering",
];

export default function KomorebiPage() {
  return (
    <main className="max-w-7xl mx-auto px-margin-desktop py-xl">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-body-md text-secondary hover:text-on-surface transition-colors mb-lg"
      >
        <ArrowLeft size={14} /> Projects
      </Link>

      {/* Header */}
      <div className="mb-xl">
        <p className="text-label-sm text-primary uppercase mb-sm">
          Data Science · Churn Prediction
        </p>
        <h1 className="text-hero-lg text-on-surface mb-md">Komorebi</h1>
        <p className="text-body-lg text-secondary max-w-2xl leading-relaxed mb-lg">
          Collaborative DS project with Komorebi. Binary classification model to
          predict which customers are likely to churn. Full pipeline from EDA
          through feature engineering to model evaluation and reporting.
        </p>
        <div className="flex gap-sm">
          {project.pdfUrl && (
            <a
              href={project.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-xs text-body-md text-secondary border border-outline-variant rounded-lg px-md py-xs hover:border-outline hover:text-on-surface transition-colors"
            >
              <FileText size={15} /> PDF Report
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-xs text-body-md text-secondary border border-outline-variant rounded-lg px-md py-xs hover:border-outline hover:text-on-surface transition-colors"
            >
              <GithubIcon size={15} /> GitHub
            </a>
          )}
        </div>
      </div>

      {/* Key metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-md mb-xl">
        {metrics.map(({ label, value }) => (
          <div
            key={label}
            className="border border-outline-variant rounded-lg bg-surface-container-low px-md py-md"
          >
            <p className="text-label-sm text-secondary mb-xs">{label}</p>
            <p className="text-title-md text-on-surface">{value}</p>
          </div>
        ))}
      </div>

      {/* Stack */}
      <section className="mb-xl">
        <h2 className="text-label-sm text-primary uppercase mb-md">Stack</h2>
        <div className="flex flex-wrap gap-xs">
          {stack.map((s) => (
            <span
              key={s}
              className="text-label-sm text-secondary bg-surface-container rounded px-sm py-xs"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Asset placeholder */}
      <section>
        <h2 className="text-label-sm text-primary uppercase mb-md">
          Screenshots &amp; Report
        </h2>
        <div className="border border-dashed border-outline-variant rounded-lg p-lg text-center">
          <p className="text-body-md text-secondary">
            Notebook screenshots coming soon.
          </p>
        </div>
      </section>
    </main>
  );
}
