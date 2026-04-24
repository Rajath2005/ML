import numpy as np
import matplotlib.pyplot as plt
from numpy.linalg import inv 


# Step1 Generate a synthetic dataset
np.random.seed(42)

# Generate random dataset

#Reshape
X = np.linspace(0, 1, 100)  
#print(X)

y = 2 * X**2 + 0.3 * np.random.randn(100) 
#print(y)

X = X[:, np.newaxis]

# Step2:Define locally weighted
def locally_weighted_regression(X_train, y_train, tau, X_test):
    m, n = X_train.shape
    y_pred = np.zeros(len(X_test))    
    for i, x in enumerate(X_test):   
        weights = np.exp(-np.sum((X_train - x)**2, axis=1) / (2 * tau**2))
        W = np.diag(weights)     
        X_TW_X = X_train.T @ W @ X_train
        X_TW_y = X_train.T @ W @ y_train
        theta = inv(X_TW_X) @ X_TW_y
        y_pred[i] = x @ theta
    return y_pred

tau_values = [0.1, 0.3, 0.5] 
X_test = np.linspace(0, 1, 200)[:, np.newaxis] 
plt.figure(figsize=(10, 6))
plt.scatter(X, y, color='red', label='Data points')

for tau in tau_values:
    y_pred = locally_weighted_regression(X, y, tau, X_test)
    plt.plot(X_test, y_pred, label=f'Tau = {tau}')
plt.title("Locally Weighted Regression (LWR)")
plt.xlabel("X")
plt.ylabel("y")
plt.legend()
plt.show()












