export type ZriveModulePdf = {
  label: string;
  url: string;
};

export type ZriveModule = {
  number: number;
  title: string;
  summary: string;
  skills: string[];
  highlights: string[];
  pdfs?: ZriveModulePdf[];
};

export const zriveModules: ZriveModule[] = [
  {
    number: 1,
    title: "Climate Data Analysis",
    summary:
      "Open-Meteo API integration to pull hourly weather data for Madrid, London, and Rio de Janeiro (2010 to 2020). Built a resilient HTTP client with exponential backoff, then used pandas for aggregation and matplotlib for multi-panel visualisations.",
    skills: ["Python", "APIs", "pandas", "matplotlib", "HTTP clients"],
    highlights: [
      "Exponential backoff for resilient API calls",
      "Multi-city comparative climate analysis",
      "Multi-panel matplotlib visualisations",
    ],
    pdfs: [
      { label: "Module 1: APIs", url: "/docs/zrive/module-1-api.pdf" },
    ],
  },
  {
    number: 2,
    title: "E-commerce EDA",
    summary:
      "Exploratory data analysis on a grocery e-commerce dataset (S3/Parquet). Five datasets: orders, regulars, abandoned carts, inventory, and users. UK NUTS1 regional analysis, user segmentation, product prevalence, and price distributions.",
    skills: ["Python", "pandas", "EDA", "Parquet", "S3", "visualisation"],
    highlights: [
      "5-dataset join and exploration",
      "UK NUTS1 regional breakdown",
      "Abandoned cart and user segmentation analysis",
    ],
    pdfs: [
      { label: "Module 2: EDA", url: "/docs/zrive/module-2-eda.pdf" },
    ],
  },
  {
    number: 3,
    title: "Push Notification Propensity (Ridge)",
    summary:
      "Binary classification model to predict push notification engagement. Ridge Logistic Regression with time-aware train/validation split by order date, grid search over C, optimised for PR AUC. Model serialised with joblib.",
    skills: ["Python", "scikit-learn", "Logistic Regression", "PR AUC", "joblib"],
    highlights: [
      "Time-aware train/val split (no data leakage)",
      "Grid search over regularisation strength",
      "PR AUC as evaluation metric",
    ],
    pdfs: [
      {
        label: "Statistical Learning, Part 1",
        url: "/docs/zrive/module-3-statistical-learning-1.pdf",
      },
      {
        label: "Statistical Learning, Part 2",
        url: "/docs/zrive/module-3-statistical-learning-2.pdf",
      },
    ],
  },
  {
    number: 4,
    title: "Push Notification Propensity (XGBoost)",
    summary:
      "Same propensity problem upgraded to XGBoost with a production-grade event-driven pipeline. PushModel class, handler_fit and handler_predict handlers, shared utils.py, and a Jupyter notebook for exploration.",
    skills: ["Python", "XGBoost", "OOP", "Pipeline design", "Jupyter"],
    highlights: [
      "Event-driven handler pattern",
      "PushModel class with fit/predict interface",
      "Clean separation of utils, models, and handlers",
    ],
    pdfs: [
      { label: "Module 4: Model Fitting", url: "/docs/zrive/module-4-model-fitting.pdf" },
    ],
  },
  {
    number: 5,
    title: "Financial Report Scoring (LightGBM)",
    summary:
      "LightGBM model trained on quarterly financial reports. Binary target: does this stock outperform the S&P 500 over the next year? Rolling time-series splits, model diagnosis loop, and weighted portfolio return as the evaluation metric.",
    skills: ["Python", "LightGBM", "Finance", "Time-series CV", "Portfolio metrics"],
    highlights: [
      "Rolling time-series cross-validation",
      "Weighted portfolio return metric",
      "Model diagnosis loop for overfitting detection",
    ],
    pdfs: [
      {
        label: "Module 5: Analyse, Diagnose and Improve",
        url: "/docs/zrive/module-5-analyse-diagnose-improve.pdf",
      },
    ],
  },
  {
    number: 6,
    title: "Basket Recommendation API (FastAPI)",
    summary:
      "Basket recommendation model served as a FastAPI REST API. GET /status, POST /predict, GET /metrics endpoints. Full routers/services/utils/models/exceptions architecture, Pydantic schemas, and load testing with attack.sh and report.sh.",
    skills: ["Python", "FastAPI", "Pydantic", "REST API", "Load testing"],
    highlights: [
      "Production-grade FastAPI architecture",
      "GET /status, POST /predict, GET /metrics",
      "Load testing with attack.sh / report.sh",
    ],
    pdfs: [
      { label: "Module 6: System Design", url: "/docs/zrive/module-6-system-design.pdf" },
    ],
  },
  {
    number: 7,
    title: "Business Translation",
    summary:
      "Frameworks for translating data science outputs into clear business communication. Covers structuring recommendations, quantifying impact, and presenting model results to non-technical stakeholders.",
    skills: ["Communication", "Storytelling", "Stakeholder management", "Impact framing"],
    highlights: [
      "Structuring data insights for business decisions",
      "Translating model metrics into business value",
      "Presentation frameworks for non-technical audiences",
    ],
    pdfs: [
      {
        label: "Module 7: Business Translation",
        url: "/docs/zrive/module-7-business-translation.pdf",
      },
    ],
  },
];
