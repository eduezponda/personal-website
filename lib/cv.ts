export const timeline = [
  {
    period: "2025 – present",
    role: "Data Scientist",
    org: "Management Solutions / BBVA",
    url: "https://www.managementsolutions.com/en/",
    location: "Madrid, Spain",
    description:
      "Building credit scoring and churn prediction models for BBVA. End-to-end ML pipelines: feature engineering, model training, validation, and production handoff.",
    tags: ["Python", "ML", "Scoring", "Churn", "BBVA"],
  },
  {
    period: "Sept 2024 – Dec 2024",
    role: "Junior Software Developer",
    org: "Sploro",
    url: "https://sploro.eu/",
    location: "Pamplona, Spain",
    description:
      "Adapted the Django backend to support migration of the Kronis frontend to Next.js. Implemented unit tests, developed a web interface interacting with the API, and configured a local dev environment with Docker using PostgreSQL and Redis containers.",
    tags: ["Django", "Next.js", "Docker", "PostgreSQL", "Redis"],
  },
  {
    period: "June 2024 – Aug 2024",
    role: "Junior Systems Assistant",
    org: "CYC",
    url: "https://www.cyc.es/",
    location: "Pamplona, Spain",
    description:
      "IT operations: infrastructure management, VPN configuration on iPads, video conferencing setup (Microsoft Teams + Yealink), Microsoft Authenticator, digital signage (Admira), and Excel-based data reporting.",
    tags: ["IT Operations", "VPN", "Microsoft Teams", "Excel"],
  },
] as const;

export const education = [
  {
    period: "Sept 2021 – June 2025",
    degree: "BSc Computer Science — International Programme",
    org: "Universidad Pública de Navarra",
    location: "Pamplona, Spain",
    gpa: "7.43 / 10",
    description:
      "International Programme student in Computer Science, specialising in software development and actively involved in cybersecurity initiatives.",
    highlights: [
      "Bachelor's Thesis based on an internship as Junior Software Developer at Splorotech — adapted the Django backend to support migration of the frontend to Next.js and implemented unit tests to ensure functionality.",
      "After the backend adjustments, developed a web interface interacting with the API. Configured the local development environment with Docker using PostgreSQL and Redis containers.",
    ],
    tags: [
      "Java", "Python", "JavaScript", "C", "R", "MATLAB",
      "SQL", "React.js", "Git", "CI/CD", "OOP", "Algorithms",
      "Docker", "Machine Learning", "Deep Learning",
      "Data Modelling", "Mathematics", "Problem Solving",
    ],
  },
  {
    period: "Jan 2025 – June 2025",
    degree: "Erasmus+ Exchange",
    org: "Laurea University of Applied Sciences",
    location: "Helsinki, Finland",
    gpa: null,
    description:
      "Semester abroad in Helsinki as part of the Erasmus+ programme, attending four courses across cloud, data, and software quality disciplines.",
    highlights: [
      "AWS Cloud — aligned with the AWS Certified Cloud Practitioner certification.",
      "Building an Online Shop — data analysis, financial reports, and decision-making tools for strategic business decisions in various contexts.",
      "Data-Driven Decision Making — planning, analysis, and decision-making tools for strategic planning; analysing financial statements and business reports to make informed decisions.",
      "Fundamentals of Software Testing — basics of QA, testing processes, test techniques, review methods, and test documentation.",
    ],
    tags: ["AWS", "Cloud", "Software Testing", "QA", "Data Analysis", "Business Analysis", "Erasmus+"],
  },
  {
    period: "Jan 2025 – Apr 2025",
    degree: "Applied Data Science Programme",
    org: "Zrive",
    location: "Remote",
    gpa: null,
    description:
      "15-week intensive programme designed for high-performing university students and young professionals who want to launch their careers as Data Scientists.",
    highlights: [
      "50+ hours of live online sessions (Monday and Wednesday evenings), three cohorts per year.",
      "Curriculum: Intro to Applied Data Science → DS Fundamentals (EDA, Statistical Learning, model fitting, model diagnostics, Business Translation, System Design) → Real-company project.",
      "Final project: real-world churn prediction case with Komorebi AI and Sumauto — from data preprocessing to business-oriented modelling.",
      "Two mock interviews guided by mentors from companies such as Vodafone and Revolut, plus 1-to-1 mentoring session.",
    ],
    tags: ["Python", "Scikit-learn", "FastAPI", "Statistics", "LLMs", "LLMOps", "AI", "Business Analysis"],
  },
  {
    period: "June 2024 – July 2024",
    degree: "Stock Market and Value Investing Seminar",
    org: "Universidad Francisco Marroquín",
    location: "Remote",
    gpa: null,
    description:
      "Intensive seminar on financial markets and value investing conducted by experts Gustavo Martínez, José Ruiz de Alda, and Juan Luis Fresneda.",
    highlights: [
      "Macroeconomics & Financial Markets: economic and market indicators, monetary policy, interest rates, economic cycles; introduction to equities, fixed income, derivatives, and currencies.",
      "Stock Market Analysis: Fundamental Analysis I & II, sector and company analysis — holding, cyclical, and growth companies.",
      "Financial Strategies & Competitiveness: competitive advantages, financial derivatives and strategies, corporate operations, short selling, and special situations.",
    ],
    tags: ["Value Investing", "Finance", "Fundamental Analysis", "Macroeconomics", "Equities", "Derivatives"],
  },
] as const;

export const certifications = [
  {
    name: "C1 Advanced (CAE)",
    issuer: "Cambridge International Education",
    date: "Nov 2024",
    logo: "/logos/cambridge.svg",
    focus: "C1 Advanced English proficiency",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Jan 2026",
    logo: "/logos/aws.svg",
    focus: "Cloud fundamentals, services, architecture",
  },
  {
    name: "Machine Learning with Python",
    issuer: "IBM",
    date: "Mar 2026",
    logo: "/logos/ibm.svg",
    focus: "Supervised and unsupervised learning, model evaluation",
  },
  {
    name: "Claude Code in Action",
    issuer: "Anthropic",
    date: "Mar 2026",
    logo: "/logos/anthropic.svg",
    focus: "Agentic workflows, multi-agent orchestration, GitHub integration",
  },
  {
    name: "Introduction to Subagents",
    issuer: "Anthropic",
    date: "Mar 2026",
    logo: "/logos/anthropic.svg",
    focus: "Subagent orchestration and agent pipelines",
  },
  {
    name: "Introduction to Agent Skills",
    issuer: "Anthropic",
    date: "Mar 2026",
    logo: "/logos/anthropic.svg",
    focus: "Claude Code skill development and automation",
  },
  {
    name: "Young Talent Navarre 2024",
    issuer: "ESIC Business & Marketing School",
    date: "June 2024",
    logo: "/logos/esic.svg",
    focus: "Leadership, emotional intelligence, public speaking",
  },
  {
    name: "Data Visualization with Python",
    issuer: "IBM",
    date: "Mar 2026",
    logo: "/logos/ibm.svg",
    focus: "Matplotlib, Seaborn, Plotly, dashboards",
  },
  {
    name: "Data Analysis with Python",
    issuer: "IBM",
    date: "Feb 2026",
    logo: "/logos/ibm.svg",
    focus: "NumPy, pandas, exploratory data analysis",
  },
  {
    name: "Databases and SQL for Data Science with Python",
    issuer: "IBM",
    date: "Feb 2026",
    logo: "/logos/ibm.svg",
    focus: "SQL, relational databases, Python integration",
  },
  {
    name: "Python Project for Data Science",
    issuer: "IBM",
    date: "Feb 2026",
    logo: "/logos/ibm.svg",
    focus: "Hands-on data science project with Python",
  },
  {
    name: "Python for Data Science, AI & Development",
    issuer: "IBM",
    date: "Feb 2026",
    logo: "/logos/ibm.svg",
    focus: "Python programming, APIs, web scraping",
  },
  {
    name: "Data Science Methodology",
    issuer: "IBM",
    date: "Feb 2026",
    logo: "/logos/ibm.svg",
    focus: "CRISP-DM methodology, problem framing",
  },
  {
    name: "Tools for Data Science",
    issuer: "IBM",
    date: "Jan 2026",
    logo: "/logos/ibm.svg",
    focus: "Jupyter, RStudio, Git, Watson Studio",
  },
  {
    name: "Data Science Orientation",
    issuer: "IBM",
    date: "Jan 2026",
    logo: "/logos/ibm.svg",
    focus: "Data science career path and tools overview",
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
