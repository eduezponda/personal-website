export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  githubUrl?: string;
  status: "live" | "wip" | "placeholder";
};

export const projects: Project[] = [
  {
    slug: "zrive",
    title: "Zrive DS Course — 6 Modules",
    description:
      "Six end-to-end data science modules: climate API analysis, e-commerce EDA, propensity modelling with Ridge and XGBoost, financial report scoring with LightGBM, and a production FastAPI recommendation service.",
    tags: ["Python", "ML", "FastAPI", "LightGBM", "XGBoost", "pandas"],
    href: "/projects/zrive",
    status: "live",
  },
  {
    slug: "komorebi",
    title: "Komorebi — Churn Prediction",
    description:
      "Binary classification model to predict customer churn. Full DS project with EDA, feature engineering, model selection, and a written report with metrics.",
    tags: ["Python", "ML", "Classification", "EDA"],
    href: "/projects/komorebi",
    status: "live",
  },
  {
    slug: "ezponda-capital",
    title: "Ezponda Capital",
    description:
      "Personal value investing project. Systematic research process for identifying undervalued businesses.",
    tags: ["Value Investing", "Finance", "Research"],
    href: "/projects/ezponda-capital",
    status: "placeholder",
  },
];
