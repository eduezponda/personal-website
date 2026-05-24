export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  githubUrl?: string;
  pdfUrl?: string;
  coverImage?: string;
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
    coverImage: "/images/projects/zrive/cover.webp",
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
      "Premium investment research platform covering gold, copper, and macro cycles. Subscription-gated MDX theses, live commodity prices, Stripe payments, and bilingual EN/ES support.",
    tags: ["Value Investing", "Gold", "Copper", "Next.js 15"],
    href: "/projects/ezponda-capital",
    githubUrl: "https://github.com/eduezponda/ezponda-capital",
    coverImage: "/images/projects/ezponda-capital/hero.webp",
    status: "live",
  },
];
