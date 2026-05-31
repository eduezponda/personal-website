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
  image?: string;
};

export const zriveModules: ZriveModule[] = [
  {
    number: 1,
    title: "API Engineering Fundamentals",
    summary:
      "Integrated the Open-Meteo API to retrieve historical weather data for multiple cities. Designed a resilient API consumption layer with structured logging, exception handling, retry mechanisms, and exponential backoff to improve reliability when working with external services. Processed and aggregated time-series data with pandas and generated comparative visualisations with matplotlib following production-oriented development practices.",
    skills: ["Python", "APIs", "pandas", "matplotlib", "HTTP clients"],
    highlights: [
      "Exponential backoff for resilient API calls",
      "Multi-city comparative climate analysis",
      "Multi-panel matplotlib visualisations",
    ],
    pdfs: [
      { label: "API Engineering Fundamentals", url: "/projects/zrive/docs/module-1-api" },
    ],
  },
  {
    number: 2,
    title: "Exploratory Data Analysis",
    summary:
      "Performed exploratory data analysis on a UK grocery e-commerce dataset stored in AWS S3 using Parquet files, with credentials managed through environment variables. Worked across multiple datasets including orders, users, inventory, recurring customers, and abandoned carts. The analysis focused on customer behaviour, regional trends, product performance, pricing patterns, and retention. Using pandas and data visualisation libraries, I explored user cohorts, average order value evolution, cart abandonment patterns, and long-term retention dynamics. Key findings included a 70% one-time purchase rate and a 69% lifetime cart abandonment rate. AOV plateaued at roughly 56 EUR from April 2021 onward. Cohort retention stabilized around 10-15%, but newer cohorts showed weaker curves, compressing LTV (cumsum of retention x avg orders x AOV) and eroding the margin against CAC. A business where each new cohort retains worse than the last is one where acquisition costs become progressively harder to justify.",
    skills: ["Python", "pandas", "EDA", "Parquet", "S3", "visualisation"],
    highlights: [
      "5-dataset join and exploration",
      "UK NUTS1 regional breakdown",
      "Abandoned cart and user segmentation analysis",
    ],
    pdfs: [
      { label: "Exploratory Data Analysis", url: "/projects/zrive/docs/module-2-eda" },
    ],
  },
  {
    number: 3,
    title: "Statistical Learning Fundamentals",
    summary:
      "Binary classification model to predict push notification engagement on a heavily imbalanced dataset. Given the observed growth in daily orders over time, a temporal split was used to reflect production conditions and preserve seasonality patterns. Split points were defined by cumulative order volume (70/20/10) rather than fixed dates, so each set covers a balanced share of business activity regardless of date density. Baseline built on global item popularity. Logistic Regression with L1 and L2 regularisation, wrapped in sklearn Pipelines with StandardScaler. Optimised for PR AUC given class imbalance, with ROC AUC as secondary metric. Feature importance extracted from Lasso coefficients. Final model trained on a 4-feature subset that matched full-feature performance, resulting in a strong MVP. Categorical encodings were iterated across multiple variants. Model was serialised with joblib. Key finding: both Ridge and Lasso clearly outperform the baseline. Heavy regularisation improves ROC AUC slightly but has limited impact on PR AUC. The shift in the PR curve above precision 0.4 under strong regularisation suggests further validation is needed before selecting an operating threshold.",
    skills: ["Python", "scikit-learn", "Logistic Regression", "PR AUC", "joblib"],
    highlights: [
      "Time-aware train/val split (no data leakage)",
      "Grid search over regularisation strength",
      "PR AUC as evaluation metric",
    ],
    pdfs: [
      {
        label: "Statistical Learning Fundamentals, Part 1",
        url: "/projects/zrive/docs/module-3-statistical-learning-1",
      },
      {
        label: "Statistical Learning Fundamentals, Part 2",
        url: "/projects/zrive/docs/module-3-statistical-learning-2",
      },
    ],
  },
  {
    number: 4,
    title: "Optimal Model Fitting",
    summary:
      "Extension of the previous module, upgrading to non-linear models on the same imbalanced binary classification problem (98% negative class). Accuracy is misleading here by design, so evaluation focused on PR AUC and ROC AUC, with PR as the primary metric given the importance of the positive class. Random Forest with few trees underperformed Logistic Regression (val AP 0.16), likely due to high variance and noisy features. Gradient Boosting, which iteratively corrects residuals of prior trees, proved better suited to the problem. Hyperparameters tuned via Random Search. KNN discarded early due to inference cost at dataset scale. Logistic Regression and Gradient Boosting were the top two models. A key business consideration throughout: does the added complexity of a non-linear model justify the operational cost over a simpler baseline? Final operating point chosen on the PR curve, prioritising models that retain precision as recall increases. Calibration covered as a closing exercise: aligning predicted probabilities to true event frequencies, relevant when scores are used as probability estimates downstream rather than just rankings.",
    skills: ["Python", "XGBoost", "OOP", "Pipeline design", "Jupyter"],
    highlights: [
      "Event-driven handler pattern",
      "PushModel class with fit/predict interface",
      "Clean separation of utils, models, and handlers",
    ],
    pdfs: [
      { label: "Optimal Model Fitting", url: "/projects/zrive/docs/module-4-model-fitting" },
    ],
  },
  {
    number: 5,
    title: "Model Analysis, Diagnosis and Improvement",
    summary:
      "LightGBM model trained on quarterly financial reports to predict whether a stock will outperform the S&P 500 over the following year. Binary target: positive when stock_change_365 - sp500_change_365 > 0. At each quarterly execution date, the model scores all tickers and selects a top_n = 10 portfolio, evaluated against an equal-weight S&P 500 baseline. Initial models showed roughly 11% outperformance over the benchmark, which was immediately flagged as overfitting. Diagnosis started with learning curves plotting binary logloss across boosted trees for train and validation: the median loss decreased then increased, confirming overfitting typical of low-data financial problems. From there, the approach was to simplify first then add complexity incrementally, using low learning rates to control variance and avoiding manual parameter search, which would risk overfitting the validation set by hand. Feature importance analysis via permutation importance and SHAP revealed close_0 (stock price at prediction time) as suspiciously dominant in several periods. Investigation traced this to data leakage: historical prices in the dataset are adjusted retroactively for reverse splits, so a high close_0 signals a future reverse split rather than fundamental strength. The model had learned accounting mechanics, not business signal. Solution: remove all technical features and retrain. Post-leakage fix, the most important features shifted to business fundamentals. The model outperforms the benchmark in 46% of periods and delivers roughly 5% higher mean return than the S&P 500, but median excess return is negative, meaning consistent outperformance requires a long investment horizon to let the high-return outlier periods dominate.",
    skills: ["Python", "LightGBM", "Finance", "Time-series CV", "Portfolio metrics"],
    highlights: [
      "Rolling time-series cross-validation",
      "Weighted portfolio return metric",
      "Model diagnosis loop for overfitting detection",
    ],
    pdfs: [
      {
        label: "Model Analysis, Diagnosis and Improvement",
        url: "/projects/zrive/docs/module-5-analyse-diagnose-improve",
      },
    ],
  },
  {
    number: 6,
    title: "System Design",
    summary:
      "Basket recommendation model served as a production-grade FastAPI REST API, designed following system design principles documented in Excalidraw. Model loaded from a joblib artifact via a feature store, with a handlers directory mapping one file per endpoint. Endpoints: GET /status, POST /predict, and GET /metrics, the latter exposing Prometheus-compatible metrics in plain text format. Postman collection with JSON tests for endpoint validation. Full routers/services/utils/models/exceptions architecture with Pydantic schemas. Load tested with attack.sh.",
    skills: ["Python", "FastAPI", "Pydantic", "REST API", "Load testing"],
    highlights: [
      "Production-grade FastAPI architecture",
      "GET /status, POST /predict, GET /metrics",
      "Load testing with attack.sh / report.sh",
    ],
    pdfs: [
      { label: "System Design", url: "/projects/zrive/docs/module-6-system-design" },
    ],
    image: "/images/projects/zrive/system_design.webp",
  },
  {
    number: 7,
    title: "Business Translation",
    summary:
      "The model is just a tool; the business problem is what matters. Defining it concretely and measurably is what turns a vague idea into something actionable, though measurement always carries risk: you end up optimising what you measure. Data is the raw material, but it never fully captures the real-world phenomenon it comes from. The discussion covers three questions: what is the business problem and how do we measure it; what data is available and is it trustworthy, accessible, and a single source of truth; and can we model the objective directly or do we need a proxy, and does that proxy actually have predictive power over the goal. Practised through cases like increasing AOV via recommendations and airline overbooking, where the exercise is not the modelling itself but learning to ask the right questions before writing a single line of code.",
    skills: ["Communication", "Storytelling", "Stakeholder management", "Impact framing"],
    highlights: [
      "Structuring data insights for business decisions",
      "Translating model metrics into business value",
      "Presentation frameworks for non-technical audiences",
    ],
    pdfs: [
      {
        label: "Business Translation",
        url: "/projects/zrive/docs/module-7-business-translation",
      },
    ],
  },
];
