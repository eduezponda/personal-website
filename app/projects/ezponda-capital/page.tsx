import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Ezponda Capital | Eduardo Ezponda",
  description: "Personal value investing project by Eduardo Ezponda.",
};

export default function EzpondaCapitalPage() {
  return (
    <main className="max-w-7xl mx-auto px-margin-desktop py-xl">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-body-md text-secondary hover:text-on-surface transition-colors mb-lg"
      >
        <ArrowLeft size={14} /> Projects
      </Link>

      <div className="mb-xl">
        <p className="text-label-sm text-primary uppercase mb-sm">
          Value Investing · Research
        </p>
        <h1 className="text-hero-lg text-on-surface mb-md">Ezponda Capital</h1>
        <p className="text-body-lg text-secondary max-w-2xl leading-relaxed">
          Personal value investing project. Systematic research process for
          identifying undervalued businesses, combining financial analysis,
          business quality assessment, and margin of safety thinking.
        </p>
      </div>

      <div className="border border-dashed border-outline-variant rounded-lg p-lg text-center">
        <p className="text-label-sm text-secondary uppercase mb-xs">
          Coming soon
        </p>
        <p className="text-body-md text-secondary max-w-sm mx-auto">
          Visual asset and detailed write-up in progress. Check back soon.
        </p>
      </div>
    </main>
  );
}
