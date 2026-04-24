import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler

file_path = "iris_data.csv"
df = pd.read_csv(file_path)

features = ['sepal length (cm)','sepal width (cm)','petal length (cm)','petal width (cm)']
Scaler = StandardScaler()
df_scaled = Scaler.fit_transform(df[features])

cov_matrix = np.cov(df_scaled.T)
print(cov_matrix)
eigenvalues,eigenvectors = np.linalg.eig(cov_matrix)
print("Eigenvalues: ",eigenvalues)
print("Eigenvectors: ",eigenvectors)

pca = PCA(n_components = 2)
principal_components = pca.fit_transform(df_scaled)

df_pca = pd.DataFrame(principal_components,columns=['PC1','PC2'])
df_pca['Species'] = df['Species']

plt.figure(figsize=(8,6))
sns.scatterplot(x='PC1',y='PC2',hue='Species',data=df_pca,palette='Set1',s=100,marker='o')
plt.title('PCA of Iris Dataset (4 features to 2)')
plt.xlabel('Principal Component 1')
plt.ylabel('Principal Component 2')
plt.legend(title='Species')
plt.show()