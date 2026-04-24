export type Experiment = {
  id: string;
  title: string;
  summary: string;
  category: string;
  level: string;
  dataset: string;
  algorithms: string[];
  highlights: string[];
  metrics: string[];
  outputs: Array<{ src: string; alt: string; caption: string }>;
  codeSnippet: string;
  codeUrl: string;
  datasetUrl: string;
  reportUrl?: string;
};

const repoBase = "https://github.com/Rajath2005/ML";

export const experiments: Experiment[] = [
  {
    id: "exp1",
    title: "Data Exploration + Outlier Scan",
    summary: "Histograms, box plots, and IQR-based outlier detection for California Housing features.",
    category: "Exploratory Analysis",
    level: "Beginner",
    dataset: "California Housing",
    algorithms: ["IQR Outlier Detection", "Descriptive Statistics"],
    highlights: [
      "Scans numerical features for extreme values",
      "Combines histograms and box plots for distribution insight",
      "Outputs outlier counts per feature"
    ],
    metrics: ["Outlier counts", "Distribution shape"],
    outputs: [
      {
        src: "/outputs/exp1/figure-1.png",
        alt: "Histogram for numerical features",
        caption: "Histogram overview of numerical features"
      },
      {
        src: "/outputs/exp1/figure-4.png",
        alt: "Box plot example",
        caption: "Box plot sample for feature spread"
      }
    ],
    codeSnippet: "df = pd.read_excel('California.xlsx')\nplot_histogram(df)\nplot_boxplots(df)\nanalyze_outliers(df)",
    codeUrl: `${repoBase}/blob/main/EXP1/Exp1.py`,
    datasetUrl: "/datasets/California%20Housing.csv",
    reportUrl: "/downloads/exp1-report.pdf"
  },
  {
    id: "exp2",
    title: "Correlation Mapping",
    summary: "Correlation heatmap and pair plot to reveal feature relationships.",
    category: "Exploratory Analysis",
    level: "Beginner",
    dataset: "California Housing",
    algorithms: ["Correlation Matrix", "Pairwise Visualization"],
    highlights: [
      "Heatmap shows strength of linear relationships",
      "Pair plot surfaces feature clusters",
      "Quick check for multicollinearity"
    ],
    metrics: ["Correlation coefficients"],
    outputs: [
      {
        src: "/outputs/exp2/figure-1.png",
        alt: "Correlation heatmap",
        caption: "Correlation matrix heatmap"
      },
      {
        src: "/outputs/exp2/figure-2.png",
        alt: "Pair plot",
        caption: "Pairwise scatter plots across features"
      }
    ],
    codeSnippet: "correlation_matrix = df.corr()\nsns.heatmap(correlation_matrix, annot=True)\nsns.pairplot(df)",
    codeUrl: `${repoBase}/blob/main/EXP2/Exp2.py`,
    datasetUrl: "/datasets/California%20Housing.csv"
  },
  {
    id: "exp3",
    title: "PCA Dimensionality Reduction",
    summary: "Reduce Iris dataset from 4D to 2D and visualize class separation.",
    category: "Dimensionality Reduction",
    level: "Intermediate",
    dataset: "Iris",
    algorithms: ["StandardScaler", "PCA"],
    highlights: [
      "Standardizes features before PCA",
      "Projects to 2 components for visualization",
      "Color-coded by species"
    ],
    metrics: ["Eigenvalues", "Explained variance"] ,
    outputs: [
      {
        src: "/outputs/exp3/figure-1.png",
        alt: "PCA scatter plot",
        caption: "Iris PCA projection in 2D"
      }
    ],
    codeSnippet: "df_scaled = scaler.fit_transform(df[features])\npca = PCA(n_components=2)\nprincipal_components = pca.fit_transform(df_scaled)",
    codeUrl: `${repoBase}/blob/main/EXP3/Exp3.py`,
    datasetUrl: "/datasets/iris_data.csv",
    reportUrl: "/downloads/exp3-report.pdf"
  },
  {
    id: "exp4",
    title: "Find-S Concept Learning",
    summary: "Learns the most specific hypothesis consistent with positive examples.",
    category: "Concept Learning",
    level: "Beginner",
    dataset: "Tennis",
    algorithms: ["Find-S Algorithm"],
    highlights: [
      "Filters positive examples only",
      "Generalizes using '?' wildcards",
      "Outputs a single hypothesis"
    ],
    metrics: ["Final hypothesis"],
    outputs: [
      {
        src: "/outputs/exp4/find-s.svg",
        alt: "Find-S output placeholder",
        caption: "Representative hypothesis output"
      }
    ],
    codeSnippet: "positive_examples = df[df.iloc[:,-1].str.lower()=='yes']\nhypothesis = positive_examples.iloc[0, :-1].copy()\n...",
    codeUrl: `${repoBase}/blob/main/EXP4/Exp4.py`,
    datasetUrl: "/datasets/tennis.csv",
    reportUrl: "/downloads/exp4-report.pdf"
  },
  {
    id: "exp5",
    title: "Semi-Supervised KNN Labeling",
    summary: "Labels unlabeled data using KNN and compares accuracy across k values.",
    category: "Semi-Supervised Learning",
    level: "Intermediate",
    dataset: "Synthetic",
    algorithms: ["KNN", "Label Propagation"],
    highlights: [
      "Generates synthetic labeled/unlabeled split",
      "Evaluates multiple k values",
      "Captures accuracy trends"
    ],
    metrics: ["Accuracy per k"],
    outputs: [
      {
        src: "/outputs/exp5/figure-1.png",
        alt: "Histogram output",
        caption: "Distribution of synthetic values"
      }
    ],
    codeSnippet: "knn = KNeighborsClassifier(n_neighbors=k)\nknn.fit(X_train, y_train)\naccuracy = accuracy_score(true_labels, predictions)",
    codeUrl: `${repoBase}/blob/main/EXP5/EXP5.py`,
    datasetUrl: "",
    reportUrl: "/downloads/exp5-report.pdf"
  },
  {
    id: "exp6",
    title: "Locally Weighted Regression",
    summary: "Fits non-parametric curves with varying bandwidth values.",
    category: "Regression",
    level: "Intermediate",
    dataset: "Synthetic",
    algorithms: ["Locally Weighted Regression"],
    highlights: [
      "Uses Gaussian kernel weighting",
      "Compares multiple tau values",
      "Smooth non-linear fits"
    ],
    metrics: ["Bandwidth sensitivity"],
    outputs: [
      {
        src: "/outputs/exp6/figure-1.png",
        alt: "Locally weighted regression plot",
        caption: "Curves for different tau values"
      }
    ],
    codeSnippet: "weights = np.exp(-np.sum((X_train - x)**2, axis=1) / (2 * tau**2))\nW = np.diag(weights)",
    codeUrl: `${repoBase}/blob/main/EXP6/EXP6.py`,
    datasetUrl: ""
  },
  {
    id: "exp7",
    title: "Linear vs Polynomial Regression",
    summary: "Compares linear and polynomial regression on housing and auto MPG data.",
    category: "Regression",
    level: "Intermediate",
    dataset: "Boston Housing + Auto MPG",
    algorithms: ["Linear Regression", "Polynomial Regression"],
    highlights: [
      "Evaluates MSE and R2",
      "Visualizes predicted vs actual",
      "Fits polynomial curve on horsepower"
    ],
    metrics: ["MSE", "R2"],
    outputs: [
      {
        src: "/outputs/exp7/figure-1.png",
        alt: "Linear regression scatter",
        caption: "Predicted vs actual for Boston Housing"
      },
      {
        src: "/outputs/exp7/figure-2.png",
        alt: "Polynomial regression curve",
        caption: "Degree-4 polynomial fit for MPG"
      }
    ],
    codeSnippet: "linear_reg.fit(X_train, y_train)\ny_pred = linear_reg.predict(X_test)\nprint(f\"Linear Regression - MSE: {mse}\")",
    codeUrl: `${repoBase}/blob/main/EXP7/EXP7.py`,
    datasetUrl: "/datasets/BostonHousing.csv"
  },
  {
    id: "exp8",
    title: "Decision Tree Classification",
    summary: "Builds a decision tree to classify breast cancer samples.",
    category: "Classification",
    level: "Intermediate",
    dataset: "Breast Cancer",
    algorithms: ["Decision Tree"],
    highlights: [
      "Trains/test split with accuracy",
      "Exports human-readable tree rules",
      "Predicts a new sample"
    ],
    metrics: ["Accuracy", "Tree rules"],
    outputs: [
      {
        src: "/outputs/exp8/decision-tree.svg",
        alt: "Decision tree summary",
        caption: "Rules snapshot for classification"
      }
    ],
    codeSnippet: "dt_classifier = DecisionTreeClassifier(random_state=42)\ndt_classifier.fit(X_train, y_train)\nprint(export_text(dt_classifier))",
    codeUrl: `${repoBase}/blob/main/EXP-8/Exp8.py`,
    datasetUrl: "/datasets/breast_cancer.csv",
    reportUrl: "/downloads/exp8-report.pdf"
  },
  {
    id: "exp9",
    title: "PCA + Naive Bayes Faces",
    summary: "Classifies Olivetti faces using PCA + Gaussian Naive Bayes.",
    category: "Classification",
    level: "Advanced",
    dataset: "Olivetti Faces",
    algorithms: ["PCA", "Gaussian Naive Bayes"],
    highlights: [
      "Reduces 4096 features to 50",
      "Evaluates accuracy on holdout set",
      "Shows sample predictions"
    ],
    metrics: ["Accuracy"],
    outputs: [
      {
        src: "/outputs/exp9/figure-1.png",
        alt: "Face prediction sample",
        caption: "Sample prediction visual"
      },
      {
        src: "/outputs/exp9/figure-2.png",
        alt: "Face prediction sample",
        caption: "Additional sample prediction"
      }
    ],
    codeSnippet: "pca = PCA(n_components=50)\nX_pca = pca.fit_transform(X)\nnb_classifier.fit(X_train, y_train)",
    codeUrl: `${repoBase}/blob/main/EXP-9/EXP9.py`,
    datasetUrl: "/datasets/olivetti_faces.csv"
  },
  {
    id: "exp10",
    title: "K-means Clustering + PCA",
    summary: "Clusters Wisconsin breast cancer data and visualizes in PCA space.",
    category: "Clustering",
    level: "Advanced",
    dataset: "Wisconsin Breast Cancer",
    algorithms: ["K-means", "PCA", "StandardScaler"],
    highlights: [
      "Standardizes features",
      "Clusters into 2 groups",
      "Reports accuracy after label alignment"
    ],
    metrics: ["Confusion matrix", "Accuracy"],
    outputs: [
      {
        src: "/outputs/exp10/figure-1.png",
        alt: "K-means clustering plot",
        caption: "Clusters visualized in PCA space"
      }
    ],
    codeSnippet: "kmeans = KMeans(n_clusters=2, random_state=42, n_init=10)\ny_kmeans = kmeans.predict(X_scaled)\nprint(confusion_matrix(y, y_kmeans))",
    codeUrl: `${repoBase}/blob/main/EXP-10/Exp10.py`,
    datasetUrl: "/datasets/Wisconsin_Breast_Cancer.csv"
  }
];

export const categories = [
  "Exploratory Analysis",
  "Dimensionality Reduction",
  "Concept Learning",
  "Semi-Supervised Learning",
  "Regression",
  "Classification",
  "Clustering"
];
