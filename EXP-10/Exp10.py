import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA
from sklearn.metrics import accuracy_score
from sklearn.metrics import confusion_matrix

data = pd.read_csv('Wisconsin_Breast_Cancer.csv')
X = data.drop(columns=['target'])
y = data['target']

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

kmeans = KMeans(n_clusters=2, random_state=42, n_init=10)
kmeans.fit(X_scaled)

y_kmeans = kmeans.predict(X_scaled)

pca = PCA(n_components=2)
X_pca = pca.fit_transform(X_scaled)

cluster_centers_pca = pca.transform(kmeans.cluster_centers_)

plt.figure(figsize=(10, 6))
plt.scatter(X_pca[:, 0], X_pca[:, 1], c=y_kmeans, cmap='viridis', label='Clustered Data', alpha=0.6)
plt.scatter(cluster_centers_pca[:, 0], cluster_centers_pca[:, 1], s=200, c='red', marker='X', label='Centroids')
plt.title("K-means Clustering of Wisconsin Breast Cancer Data")
plt.xlabel("PCA Component 1")
plt.ylabel("PCA Component 2")
plt.legend()
plt.show()

cm = confusion_matrix(y, y_kmeans)
print("Confusion Matrix:\n", cm)

if cm[0, 0] + cm[1, 1] < cm[0, 1] + cm[1, 0]:
    y_kmeans = 1 - y_kmeans

print(f"Accuracy of K-means clustering: {accuracy_score(y, y_kmeans):.2f}")