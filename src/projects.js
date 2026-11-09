export const projects = [
  {
    id: "santaid",

    eyebrow:
      "GENERATIVE AI · MACHINE LEARNING · FRAUD DETECTION",

    title:
      "SANTAID — GenAI, RAG & Fraud Detection",

    video:
      "/videos/demo_santaid.mp4",

    summary:
      "Intelligent healthcare platform combining generative AI, RAG and Machine Learning to support insured users and help insurers identify high-risk claims.",

    keyPoints: [
      "RAG assistant using FAISS and Mistral for reimbursement questions",
      "Healthcare reimbursement assistance, simulation and OCR/document processing",
      "Fraud detection using supervised Machine Learning, anomaly detection and graph analysis"
    ],

    overview:
      "SANTAID is an intelligent healthcare solution developed during Talan SummerCamp 2026. It addresses both insured-user assistance and insurer-side fraud detection through document retrieval, generative AI, Machine Learning, anomaly detection, business rules and graph analysis.",

    solution:
      "For insured users, SANTAID provides a RAG-based assistant using a FAISS knowledge base of approximately 50,900 document chunks and a Mistral language model. For insurers, it combines supervised learning, anomaly detection, 14 business fraud rules and graph-based analysis to identify suspicious healthcare claims and prioritize investigations.",

    businessValue:
      "The solution improves access to reimbursement information for insured users while helping insurers prioritize suspicious claims and optimize fraud investigation efforts.",

    highlights: [
      "RAG assistant using FAISS and Mistral",
      "Approximately 50,900 indexed document chunks",
      "Healthcare reimbursement assistance and simulation",
      "OCR/document processing support",
      "Fraud detection using supervised Machine Learning and anomaly detection",
      "14 business fraud rules",
      "Graph analysis with approximately 26,000 entities and 826,000 relationships",
      "FastAPI backend services"
    ],

    tech: [
      "Python",
      "FastAPI",
      "FAISS",
      "Mistral",
      "RAG",
      "XGBoost"
    ],

    metrics: [
      ["0.995", "ROC-AUC"],
      ["0.898", "Average Precision"],
      ["98.6%", "Recall"],
      ["8%", "Investigation Budget"]
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
      "Angular",
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
    id: "churn",

    eyebrow:
      "BUSINESS INTELLIGENCE · DATA ANALYTICS · MACHINE LEARNING",

    title:
      "Customer Churn Analytics & Prediction Platform",

    video:
      "/videos/churn-demo.mp4",

    summary:
      "Customer retention intelligence platform combining Machine Learning, customer-level churn prediction and analytical data processing to identify risk patterns.",

    keyPoints: [
      "Customer-level churn probability, risk level and contextual risk factors",
      "Gradient Boosting model for customer retention prediction",
      "Segmentation and analytical exploration of customer behavior"
    ],

    overview:
      "The objective was to transform telecom customer data into a predictive analytics solution for customer retention. The platform combines descriptive analysis, business segmentation and Machine Learning to identify customers at risk of churn.",

    solution:
      "I structured the analytical data layer using PostgreSQL, prepared customer features and integrated a Gradient Boosting model into a web application with role-based access. The model generates individual churn probabilities and risk levels for further analysis.",

    businessValue:
      "The solution helps teams identify vulnerable customer segments, understand service-related churn factors and prioritize retention actions using customer-level predictions.",

    highlights: [
      "Analyzed 7,043 telecom customers",
      "Integrated Gradient Boosting for customer-level churn prediction",
      "Evaluated the model using ROC-AUC, recall, confusion matrix and feature importance",
      "Implemented interactive segmentation by contract, payment method, internet service and customer characteristics",
      "Built analytical dashboards for monitoring customer retention and model performance",
      "Added role-based access control in the web application"
    ],

    tech: [
      "Power BI",
      "Data Analytics",
      "PostgreSQL",
      "SQL",
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
  }
];