export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  githubUrl?: string;
  pdfUrl?: string;
  status: "live" | "wip" | "placeholder";
};

export const projects: Project[] = [
  {
    slug: "zrive",
    title: "Zrive DS Course",
    description:
      "Six end-to-end data science modules: climate API analysis, e-commerce EDA, propensity modelling with Ridge and XGBoost, financial report scoring with LightGBM, and a production FastAPI recommendation service.",
    tags: ["Machine Learning", "APIs", "Deployment"],
    href: "/projects/zrive",
    githubUrl: "https://github.com/eduezponda/zrive-ds",
    status: "live",
  },
  {
    slug: "komorebi",
    title: "Komorebi Churn Prediction",
    description:
      "Advanced customer churn prediction model utilizing ensemble methods to identify at-risk users for a SaaS subscription ecosystem.",
    tags: ["Binary Classification", "ML"],
    href: "/projects/komorebi",
    githubUrl: "https://github.com/eduezponda/zrive-ds-1q25-churn-prediction",
    pdfUrl: "/docs/komorebi-project-report.pdf",
    status: "live",
  },
  {
    slug: "ezponda-capital",
    title: "Ezponda Capital",
    description:
      "Rigorous value investing research and quantitative analysis platform for tracking fundamental business metrics and intrinsic value.",
    tags: ["Value Investing"],
    href: "/projects/ezponda-capital",
    status: "placeholder",
  },
];
