export const timeline = [
  {
    period: "2025 – present",
    role: "Data Scientist",
    org: "Management Solutions / BBVA",
    location: "Madrid, Spain",
    description:
      "Building credit scoring and churn prediction models for BBVA. End-to-end ML pipelines: feature engineering, model training, validation, and production handoff.",
    tags: ["Python", "ML", "Scoring", "Churn", "BBVA"],
  },
  {
    period: "2024",
    role: "Data Science Intern",
    org: "Splorotech",
    location: "Remote",
    description:
      "Early-stage startup. Built data pipelines and ML prototypes in a fast-moving environment.",
    tags: ["Python", "ML", "Startups"],
  },
  {
    period: "2023 – 2024",
    role: "Erasmus+ Exchange",
    org: "Laurea University of Applied Sciences",
    location: "Helsinki, Finland",
    description:
      "Exchange year focused on applied ML, software engineering, and international collaboration.",
    tags: ["Erasmus+", "Finland", "ML"],
  },
  {
    period: "2020 – 2024",
    role: "BSc Computer Science",
    org: "Universidad Pública de Navarra (UPNA)",
    location: "Pamplona, Spain",
    description:
      "Computer Science degree with specialisation in data science and software engineering.",
    tags: ["CS", "UPNA", "Degree"],
  },
] as const;

export const certifications = [
  {
    name: "Anthropic Claude Code",
    issuer: "Anthropic",
    focus: "Agentic workflows, multi-agent orchestration, GitHub integration",
  },
  {
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    focus: "Cloud fundamentals, services, architecture",
  },
  {
    name: "Machine Learning Specialization",
    issuer: "Coursera / DeepLearning.AI",
    focus: "Supervised learning, unsupervised learning, reinforcement learning",
  },
  {
    name: "Data Science Professional Certificate",
    issuer: "Coursera / IBM",
    focus: "Data analysis, visualisation, ML pipelines",
  },
] as const;

export const skills = {
  "Data Science & ML": [
    "Python",
    "pandas",
    "scikit-learn",
    "XGBoost",
    "LightGBM",
    "matplotlib",
  ],
  "APIs & Backend": ["FastAPI", "REST APIs", "Pydantic", "joblib"],
  "Frontend & Full-stack": ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  "Agentic & AI": ["Claude Code", "Agentic workflows", "Multi-agent orchestration"],
  "Infrastructure": ["AWS", "Vercel", "Git", "Docker (basics)"],
} as const;
