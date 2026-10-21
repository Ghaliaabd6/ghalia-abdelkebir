export const projects = [
  {
    id: "churn",

    eyebrow:
      "BUSINESS INTELLIGENCE · CUSTOMER ANALYTICS · ML",

    title:
      "Customer Churn Analytics & Prediction Platform",

    video:
      "/videos/churn-demo.mp4",

    summary:
      "End-to-end customer retention intelligence platform combining Power BI, PostgreSQL, interactive analytics and Machine Learning to identify churn patterns and support better retention decisions.",

    keyPoints: [
      "Role-based dashboards for Management, Marketing, Technical Support and Data teams",
      "Churn KPIs, segmentation, revenue-at-risk analysis and service-related insights",
      "Customer-level churn probability, risk level and contextual risk factors"
    ],

    overview:
      "The objective of this project was to transform telecom customer data into a complete decision-support solution for customer retention. Instead of focusing only on prediction, the platform combines descriptive analytics, business segmentation and Machine Learning.",

    solution:
      "I structured the analytical data layer using PostgreSQL, created dedicated Power BI dashboards for different business roles and developed a web application with role-based access. A Gradient Boosting model was integrated to generate individual churn probabilities and risk levels.",

    businessValue:
      "Managers can monitor customer retention globally, Marketing teams can identify vulnerable segments, Technical Support can analyze service-related churn factors, and Data users can evaluate the model and generate customer-level predictions.",

    highlights: [
      "Analyzed 7,043 telecom customers",
      "Created dedicated dashboards for Manager, Marketing, Technical Support and Model Performance",
      "Built KPIs for churn rate, retained customers, monthly charges and revenue at risk",
      "Implemented interactive segmentation by contract, payment method, internet service and customer characteristics",
      "Added role-based access control in the web application",
      "Integrated Gradient Boosting for customer-level churn prediction",
      "Evaluated the model using ROC-AUC, recall, confusion matrix and feature importance"
    ],

    tech: [
      "Power BI",
      "DAX",
      "PostgreSQL",
      "SQL",
      "Python",
      "Pandas",
      "Scikit-learn",
      "Streamlit",
      "Plotly"
    ],

    metrics: [
      ["7,043", "Customers"],
      ["26.5%", "Churn Rate"],
      ["84.3%", "ROC-AUC"],
      ["69.8%", "Recall"]
    ]
  },

  {
    id: "restaurant",

    eyebrow:
      "POWER BI · DASHBOARDING · ANALYTICS",

    title:
      "Restaurant Rating Analytics Dashboard",

    video:
      "/videos/restaurant-bi.mp4",

    summary:
      "Business Intelligence solution designed to analyze restaurant performance, customer satisfaction, service quality, customer profiles and rating patterns through interactive Power BI dashboards.",

    keyPoints: [
      "5 dashboards covering Management, Quality, Marketing, Customer and ML analysis",
      "DAX KPIs for satisfaction, service quality and positive or negative feedback",
      "Customer segmentation and Python-based analytical exploration"
    ],

    overview:
      "The project transforms restaurant and customer data into decision-oriented dashboards adapted to different business needs.",

    solution:
      "I created several Power BI dashboards with interactive filters, DAX measures and customer segmentation. Python analytics were used as an additional layer for deeper analysis of rating-related variables.",

    businessValue:
      "The dashboards help identify satisfaction drivers, compare restaurant performance and understand customer preferences for better marketing and quality decisions.",

    highlights: [
      "Built five business-oriented dashboards",
      "Created DAX measures for satisfaction and service-quality indicators",
      "Analyzed customer behavior according to demographics, budget and preferences",
      "Used interactive filtering and segmentation",
      "Integrated Python visuals using Pandas and Scikit-learn"
    ],

    tech: [
      "Power BI",
      "DAX",
      "Power Query",
      "Python",
      "Pandas",
      "Scikit-learn",
      "Excel"
    ],

    metrics: [
      ["5", "Dashboards"],
      ["DAX", "KPI Layer"],
      ["Python", "Analytics"],
      ["BI", "Decision Support"]
    ]
  },

  {
    id: "firmaa",

    eyebrow:
      "DATA · AI · IOT · DECISION SUPPORT",

    title:
      "FIRMAA — Intelligent Agriculture Platform",

    video:
      "/videos/firmaa-demo.mp4",

    summary:
      "Smart agriculture platform combining web, mobile, IoT, analytics and Artificial Intelligence to support irrigation, crop monitoring, animal health and farm decision-making.",

    keyPoints: [
      "Autonomous irrigation decision agent using soil, weather and crop data",
      "Crop, poultry and livestock health analysis using AI",
      "IoT monitoring, mobile application and web dashboard in one ecosystem"
    ],

    overview:
      "FIRMAA was designed as a multi-module agricultural decision-support platform that converts heterogeneous farm data into practical recommendations.",

    solution:
      "The solution combines an irrigation agent, crop and poultry disease detection, livestock health prediction, insect classification from audio and IoT monitoring. These capabilities are integrated into web and mobile interfaces.",

    businessValue:
      "Farmers can monitor farm conditions, detect potential problems earlier and obtain more structured recommendations for irrigation and health-related decisions.",

    highlights: [
      "Autonomous irrigation agent using soil moisture, weather and crop requirements",
      "Crop disease detection from images",
      "Poultry disease detection using Computer Vision",
      "Livestock health prediction from symptoms",
      "Insect classification from audio",
      "Real-time IoT monitoring",
      "Web, mobile and 3D farm visualization"
    ],

    tech: [
      "Python",
      "FastAPI",
      "Next.js",
      "Flutter",
      "MongoDB Atlas",
      "TensorFlow",
      "LangGraph",
      "IoT"
    ],

    metrics: [
      ["AI", "Decision Support"],
      ["IoT", "Monitoring"],
      ["Web + Mobile", "Interfaces"],
      ["Multi-modal", "Data"]
    ]
  },

  {
    id: "cancer",

    eyebrow:
      "PREDICTIVE ANALYTICS · EXPLAINABLE AI",

    title:
      "Breast Cancer Prediction Platform",

    video:
      "/videos/breast-cancer-demo.mp4",

    summary:
      "Explainable predictive analytics platform combining Machine Learning, model comparison, SHAP explainability and an interactive web interface.",

    keyPoints: [
      "Comparison of multiple Machine Learning classification models",
      "SHAP explanations for transparent prediction interpretation",
      "FastAPI backend connected to an interactive Next.js frontend"
    ],

    overview:
      "The objective was to create a complete predictive analytics application where the model result is accompanied by understandable explanations.",

    solution:
      "Several Machine Learning models were compared and evaluated. Explainability was added with SHAP, while FastAPI exposes the prediction service to an interactive Next.js frontend.",

    businessValue:
      "The project demonstrates how Machine Learning can support decision-making while remaining interpretable and accessible to users.",

    highlights: [
      "Compared Logistic Regression, SVM, Random Forest, MLP and XGBoost",
      "Integrated SHAP for global and individual explanations",
      "Created a FastAPI inference API",
      "Developed an interactive Next.js interface",
      "Structured the project using an end-to-end analytical workflow"
    ],

    tech: [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "SHAP",
      "FastAPI",
      "Next.js"
    ],

    metrics: [
      ["5", "Models"],
      ["SHAP", "Explainability"],
      ["FastAPI", "Backend"],
      ["XAI", "Interpretation"]
    ]
  }
];