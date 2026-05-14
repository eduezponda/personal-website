import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Ezponda Capital — Eduardo Ezponda",
  description: "Personal value investing project by Eduardo Ezponda.",
};

export default function EzpondaCapitalPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-28 pb-20">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm text-on-surface-variant hover:text-on-surface transition-colors mb-10"
      >
        <ArrowLeft size={14} /> Projects
      </Link>

      <div className="mb-12">
        <p className="text-label text-accent mb-3">Value Investing · Research</p>
        <h1 className="text-section-title text-on-surface mb-4">
          Ezponda Capital
        </h1>
        <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Personal value investing project. Systematic research process for
          identifying undervalued businesses — combining financial analysis,
          business quality assessment, and margin of safety thinking.
        </p>
      </div>

      {/* Placeholder — asset TBD */}
      <div className="border border-dashed border-outline-variant rounded-lg p-16 text-center">
        <p className="text-label text-outline mb-2">Coming soon</p>
        <p className="text-sm text-on-surface-variant max-w-sm mx-auto">
          Visual asset and detailed write-up in progress. Check back soon.
        </p>
      </div>
    </div>
  );
}
