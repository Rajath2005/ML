import numpy as np  
import pandas as pd  
import matplotlib.pyplot as plt  
from sklearn.model_selection import train_test_split  
from sklearn.linear_model import LinearRegression  
from sklearn.preprocessing import PolynomialFeatures  
from sklearn.metrics import mean_squared_error, r2_score  


import warnings 
warnings.filterwarnings("ignore")

def perform_linear_regression(csv_file_path):  
    
    data = pd.read_csv(csv_file_path)  
   
    
    X = data.iloc[:, :-1]     
    y = data.iloc[:, -1]    

   
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)  

   
    linear_reg = LinearRegression()  

    
    linear_reg.fit(X_train, y_train)  

 
    y_pred = linear_reg.predict(X_test)  

  
    mse = mean_squared_error(y_test, y_pred)  
    r2 = r2_score(y_test, y_pred)  

   
    print(f"Linear Regression - Mean Squared Error: {mse:.2f}")  
    print(f"Linear Regression - R-squared: {r2:.2f}")  

  
    plt.figure(figsize=(10, 6))  
    plt.scatter(y_test, y_pred, color='blue', label='Predicted vs Actual')  
    plt.plot([min(y_test), max(y_test)], [min(y_test), max(y_test)], color='red', label='Perfect Fit')  
    plt.xlabel('Actual Values')  
    plt.ylabel('Predicted Values')  
    plt.title('Linear Regression - Predicted vs Actual Values (Boston Housing)')  
    plt.legend()  
    plt.show()  

def perform_polynomial_regression(csv_file_path):  
    
    data = pd.read_csv(csv_file_path)  


   
    data = data.dropna(subset=['mpg'])  

   
    X = data[['horsepower']]  
    y = data['mpg']  

     
    X.loc[:, 'horsepower'] = pd.to_numeric(X['horsepower'], errors='coerce')  

      
    X = X.dropna()  
    y = y.loc[X.index]  

     
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)  

    degree = 4  
     
    poly = PolynomialFeatures(degree)  

     
    X_train_poly = poly.fit_transform(X_train)  
    X_test_poly = poly.transform(X_test)  

    
    linear_reg = LinearRegression()  

     
    linear_reg.fit(X_train_poly, y_train)  

   
    y_pred = linear_reg.predict(X_test_poly)  

   
    mse = mean_squared_error(y_test, y_pred)  
    r2 = r2_score(y_test, y_pred)  

   
    print(f"Polynomial Regression - Mean Squared Error: {mse:.2f}")  
    print(f"Polynomial Regression - R-squared: {r2:.2f}")  

  
    plt.scatter(X['horsepower'], y, color='blue', label='Data')
    X_range = np.linspace(X['horsepower'].min(), X['horsepower'].max(), 100).reshape(-1, 1)   
    X_range_poly = poly.transform(X_range)
    y_range_pred = linear_reg.predict(X_range_poly)  
    plt.plot(X_range, y_range_pred, color='red', label='Polynomial Fit')  
    plt.xlabel('Horsepower')  
    plt.ylabel('MPG')   
    plt.legend()  
    plt.title(f'Polynomial Regression (degree {degree})')  
    plt.show()  

perform_linear_regression('BostonHousing.csv')
perform_polynomial_regression('auto-mpg.csv')
