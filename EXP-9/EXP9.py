import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import GaussianNB
from sklearn.metrics import accuracy_score
from sklearn.decomposition import PCA
import matplotlib.pyplot as plt

data = pd.read_csv('olivetti_faces.csv')

X = data.iloc[:, :-1].values 
y = data.iloc[:, -1].values
pca = PCA(n_components=50) 
X_pca = pca.fit_transform(X)

X_train, X_test, y_train, y_test = train_test_split(X_pca, y, test_size=0.3, random_state=42)

nb_classifier = GaussianNB()
nb_classifier.fit(X_train, y_train)

y_pred = nb_classifier.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy of Naive Bayes Classifier: {accuracy:.2f}")

sample_indices = [0, 5, 10]
for idx in sample_indices:
    print(f"\nPredicted Label for Sample {idx}: {nb_classifier.predict([X_test[idx]])[0]} and its true label is - {y_test[idx]}")
    original_image = X[idx].reshape(64, 64) 
    plt.imshow(original_image, cmap='gray') 
    plt.title(f"True Label: {y_test[idx]}, Predicted Label: {nb_classifier.predict([X_test[idx]])[0]}")
    plt.show()