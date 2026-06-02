import Link from "next/link";
import { FileText } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Komorebi: Churn Prediction | Eduardo Ezponda",
  description:
    "Binary classification model predicting advertiser churn one month ahead for Sumauto, with business-driven threshold analysis and XGBoost.",
};

const techStack = [
  "Python",
  "pandas",
  "scikit-learn",
  "XGBoost",
  "SHAP",
  "Jupyter",
];

const steps = [
  {
    number: "01",
    title: "Data definition and labelling",
    body: "Churn was extracted from two sources: explicit withdrawals (advertisers filing formal cancellations) and implicit inactivity (contracts ending without renewal and no subsequent activity). Post-first-churn rows were removed to keep the dataset focused on pre-departure behaviour.",
  },
  {
    number: "02",
    title: "Exploratory analysis and cleaning",
    body: "Several columns had up to 40% null values and were dropped entirely. Rows with no active contract and no published ads were removed. The goal was a clean, temporally consistent dataset without introducing bias through imputation.",
  },
  {
    number: "03",
    title: "Feature engineering",
    body: "Three feature families: temporal (tenure, months since last contract, renewal flag), ratio-based (leads per visit, invoice per lead, ad utilisation rate), and 3-month rolling aggregates with delta metrics to capture short-term trend changes.",
  },
  {
    number: "04",
    title: "Model selection",
    body: "Progression from logistic regression to random forest to XGBoost. Logistic regression outperformed the naive baseline but modestly. Random forest improved further but added complexity without proportional gain. XGBoost, tuned with a low learning rate, was the final choice for its stability across validation windows.",
  },
  {
    number: "05",
    title: "Business threshold analysis",
    body: "A retention simulation modelled churn cost (€1,000 per lost advertiser), intervention cost (€100 per action), and 70% effectiveness. Thresholds between 0.14 and 0.16 produced the best balance: positive ROI, low month-to-month dispersion, and manageable false positive rate.",
  },
];

export default function KomorebiPage() {
  const project = projects.find((p) => p.slug === "komorebi")!;

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
          Churn Prediction
        </span>
      </nav>

      {/* Hero */}
      <section className="mb-xl">
        <div className="max-w-3xl">
          <h1 className="text-hero-lg text-on-surface mb-sm">Komorebi</h1>
          <p className="text-title-lg text-secondary mb-md">
            Advertiser churn prediction for Sumauto vehicle classifieds.
          </p>
          <div className="flex flex-wrap gap-xs mb-lg">
            {["Binary Classification", "XGBoost", "Feature Engineering", "Business ROI", "Python"].map(
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
        <div className="flex flex-wrap gap-sm">
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
      </section>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-xl">
        {/* Featured card */}
        <div className="md:col-span-8 bg-surface-container border border-outline-variant rounded-lg p-lg flex flex-col gap-lg md:grid md:grid-cols-[1fr_148px] md:gap-xl min-h-[240px]">
          <div className="flex flex-col gap-md min-w-0 md:justify-between">
            <div className="flex items-center gap-xs">
              <span className="material-symbols-outlined text-[20px] text-primary">
                person_remove
              </span>
              <span className="text-label-sm uppercase tracking-widest text-primary">
                Binary Classification
              </span>
            </div>
            <div className="flex flex-col gap-sm">
              <h3 className="text-title-lg text-on-surface">
                Predict churn one month ahead
              </h3>
              <p className="text-body-md text-secondary leading-relaxed">
                Sumauto loses advertisers without warning. Each lost dealership
                costs the business roughly €1,000 in foregone revenue. The goal
                was a model that identifies at-risk advertisers one month before
                they leave, giving the sales team time to intervene.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-row justify-around md:flex-col md:justify-center gap-md border-t border-outline-variant/40 pt-lg md:border-t-0 md:border-l md:pt-0 md:pl-xl">
            {(
              [
                ["0.72", "ROC-AUC"],
                ["0.18", "PR-AUC"],
                ["0.05", "Std dev"],
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

        {/* Project details card */}
        <div className="md:col-span-4 bg-surface-container border border-outline-variant rounded-lg p-lg flex flex-col">
          <h4 className="text-label-sm uppercase tracking-widest text-primary mb-md">
            Project Details
          </h4>
          <ul className="space-y-sm flex-1">
            {[
              { label: "Client", value: "Sumauto via Komorebi" },
              { label: "Team", value: "4 Zrive students" },
              { label: "Model", value: "XGBoost" },
              { label: "Lead time", value: "1 month ahead" },
              { label: "Threshold", value: "0.14 to 0.16" },
            ].map(({ label, value }) => (
              <li
                key={label}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-xs border-b border-outline-variant/30 gap-xs sm:gap-0"
              >
                <span className="text-secondary text-body-md">{label}</span>
                <span className="text-on-surface text-title-md">{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Problem */}
      <section className="mb-xl">
        <h2 className="text-title-lg mb-md flex items-center gap-xs">
          <span className="material-symbols-outlined text-primary">
            crisis_alert
          </span>
          Problem
        </h2>
        <div className="bg-surface-container border border-outline-variant rounded-lg p-lg flex flex-col gap-md">
          <p className="text-body-md text-secondary leading-relaxed max-w-3xl">
            Sumauto operates vehicle classified portals that connect car
            dealerships with buyers. Advertisers leave the platform both
            explicitly through cancellation requests and implicitly by letting
            contracts expire without renewal. The existing churn model, built by
            Komorebi for an earlier engagement, was limited in scope and lacked
            the depth needed for reliable early warning.
          </p>
          <p className="text-body-md text-secondary leading-relaxed max-w-3xl">
            Komorebi proposed the case to Zrive&apos;s 2025 cohort as a real
            business problem. The team received anonymised, scaled data and full
            freedom in modelling approach, with the constraint that every
            technical decision had to be justified and validated against
            appropriate evaluation metrics.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="mb-xl">
        <h2 className="text-title-lg mb-md flex items-center gap-xs">
          <span className="material-symbols-outlined text-primary">
            query_stats
          </span>
          Approach
        </h2>
        <div className="bg-surface-container border border-outline-variant rounded-lg p-lg flex flex-col gap-md">
          <p className="text-body-md text-secondary leading-relaxed max-w-3xl">
            The problem was framed as binary classification: predict whether an
            advertiser will churn in the following month. Two churn signals were
            defined. Explicit churn came from the withdrawal dataset, filtering
            for total cancellations that were not administrative contract
            changes. Implicit churn came from contract end dates where the
            advertiser had been active the prior month but did not renew.
          </p>
          <p className="text-body-md text-secondary leading-relaxed max-w-3xl">
            Evaluation used a sliding window scheme where training and
            validation windows advance month by month. This mirrors real
            deployment conditions and surfaces concept drift early. Business
            performance was measured alongside technical metrics using a
            retention cost simulation. The operating threshold was chosen based
            on expected ROI rather than classification accuracy alone.
          </p>
        </div>
      </section>

      {/* Steps Taken */}
      <section className="mb-xl">
        <h2 className="text-title-lg mb-lg flex items-center gap-xs">
          <span className="material-symbols-outlined text-primary">
            account_tree
          </span>
          Steps Taken
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {steps.map(({ number, title, body }) => (
            <div
              key={number}
              className="bg-surface-container border border-outline-variant rounded-lg p-md flex flex-col gap-md"
            >
              <div className="flex items-center gap-sm">
                <span className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center text-label-sm font-bold shrink-0">
                  {number}
                </span>
                <h3 className="text-title-md text-on-surface leading-snug">
                  {title}
                </h3>
              </div>
              <p className="text-body-md text-secondary leading-relaxed">
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies */}
      <section className="mb-xl">
        <h2 className="text-title-lg mb-md flex items-center gap-xs">
          <span className="material-symbols-outlined text-primary">
            developer_mode
          </span>
          Technologies and Tools
        </h2>
        <div className="bg-surface-container border border-outline-variant rounded-lg p-lg">
          <div className="flex flex-wrap gap-sm">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-body-md text-on-surface bg-surface-container-high border border-outline-variant rounded-lg px-md py-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Results and Conclusions */}
      <section className="mb-xl">
        <h2 className="text-title-lg mb-md flex items-center gap-xs">
          <span className="material-symbols-outlined text-primary">
            bar_chart_4_bars
          </span>
          Results and Conclusions
        </h2>
        <div className="bg-surface-container border border-outline-variant rounded-lg p-lg flex flex-col gap-md">
          <p className="text-body-md text-secondary leading-relaxed max-w-3xl">
            XGBoost reached a mean ROC-AUC of 0.72 and PR-AUC of 0.18 across
            validation months, stable across five random seeds (std dev 0.05).
            The model consistently outperformed both the naive baseline and
            earlier linear approaches. Performance degraded predictably as the
            validation window moved further from the training period, confirming
            concept drift as expected in time-dependent data.
          </p>
          <p className="text-body-md text-secondary leading-relaxed max-w-3xl">
            Feature importance pointed to tenure and months since the last
            contract as the strongest predictors. Both were removed from the
            final model as a precaution against leakage, though they may reflect
            real contractual patterns (such as discount expiry windows) worth
            reintroducing after stakeholder validation.
          </p>
          <p className="text-body-md text-secondary leading-relaxed max-w-3xl">
            Business threshold analysis identified 0.14 to 0.16 as the optimal
            operating range: positive ROI, low month-to-month dispersion, and
            an acceptable false positive rate. Retraining monthly is recommended
            to combat drift and maintain prediction quality over time.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="flex flex-col md:flex-row gap-md justify-center items-center py-lg bg-surface-container border border-outline-variant rounded-lg">
        {project.pdfUrl && (
          <a
            href={project.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-xs bg-primary-container text-on-primary-container px-xl py-md rounded-lg text-title-md transition-all hover:opacity-90 active:scale-95 shadow-sm"
          >
            <span className="material-symbols-outlined">picture_as_pdf</span>
            Full Report
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-xs bg-surface-container-lowest border border-outline text-on-surface px-xl py-md rounded-lg text-title-md transition-all hover:bg-surface-variant active:scale-95"
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
