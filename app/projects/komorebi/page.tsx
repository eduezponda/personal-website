import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import { GithubIcon } from "@/components/icons";

export const metadata = {
  title: "Komorebi — Churn Prediction — Eduardo Ezponda",
  description: "Binary classification model to predict customer churn.",
};

const metrics = [
  { label: "Task", value: "Binary Classification" },
  { label: "Target", value: "Customer Churn" },
  { label: "Report", value: "PDF available" },
  { label: "GitHub", value: "Public repo" },
];

const stack = ["Python", "scikit-learn", "pandas", "EDA", "Classification", "Feature Engineering"];

export default function KomorebiPage() {
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
        <p className="text-label text-accent mb-3">Data Science · Churn Prediction</p>
        <h1 className="text-section-title text-on-surface mb-4">
          Komorebi
        </h1>
        <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed mb-6">
          Collaborative DS project with Komorebi. Binary classification model to
          predict which customers are likely to churn. Full pipeline from EDA
          through feature engineering to model evaluation and reporting.
        </p>
        <div className="flex gap-3">
          <a
            href="/docs/komorebi-project-report.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-on-surface-variant border border-outline-variant rounded-md px-4 py-2 hover:border-outline hover:text-on-surface transition-colors"
          >
            <FileText size={15} /> PDF Report
          </a>
          <a
            href="https://github.com/eduezponda/zrive-ds-1q25-churn-prediction"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-on-surface-variant border border-outline-variant rounded-md px-4 py-2 hover:border-outline hover:text-on-surface transition-colors"
          >
            <GithubIcon size={15} /> GitHub
          </a>
        </div>
      </div>

      {/* Key metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {metrics.map(({ label, value }) => (
          <div
            key={label}
            className="border border-outline-variant rounded-lg bg-surface-low px-5 py-4"
          >
            <p className="text-label text-outline mb-1">{label}</p>
            <p className="text-sm font-semibold text-on-surface">{value}</p>
          </div>
        ))}
      </div>

      {/* Stack */}
      <section className="mb-12">
        <h2 className="text-label text-accent mb-4">Stack</h2>
        <div className="flex flex-wrap gap-2">
          {stack.map((s) => (
            <span
              key={s}
              className="text-label text-on-surface-variant bg-surface-container rounded px-2 py-1"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Asset placeholder */}
      <section>
        <h2 className="text-label text-accent mb-4">Screenshots &amp; Report</h2>
        <div className="border border-dashed border-outline-variant rounded-lg p-10 text-center">
          <p className="text-sm text-on-surface-variant">
            Notebook screenshots and PDF report link coming soon.
          </p>
        </div>
      </section>
    </div>
  );
}
