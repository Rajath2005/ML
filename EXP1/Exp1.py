import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.read_excel('California.xlsx')

#Display the first few rows of dataset
print("First few rows of the dataset:")
print(df.head())
#print(df.nunique())
#print(df.describe().T)
print(df.shape)

#Create histogram for all numerical feature
def plot_histogram(dataframe):
    dataframe.hist(bins = 20,figsize = (15,10), color = 'skyblue', edgecolor = 'black')
    plt.suptitle("Histogram for Numerical Features",fontsize =16)
    plt.show()

#Create boxplot for all numerical feature
def plot_boxplots(dataframe):
    num_columns = dataframe.select_dtypes(include=[np.number]).columns
    for column in num_columns:
        plt.figure(figsize=(10,5))
        sns.boxplot(data = dataframe, x=column,color='lightgreen')
        plt.title(f"Box plot of {column}",fontsize=14)
        plt.show()
        
#Analyze outliers for each numerical faetures
def analyze_outliers(dataframe):
    num_columns = dataframe.select_dtypes(include =[np.number]).columns
    for column in num_columns:
        Q1 = dataframe[column].quantile(0.25)
        Q3 = dataframe[column].quantile(0.75)
        IQR = Q3 - Q1
        lower_bound = Q1 - 1.5 * IQR
        upper_bound = Q3 + 1.5 * IQR
        outliers = dataframe[(dataframe[column] < lower_bound) | (dataframe[column] > upper_bound)]
        print(f"Feature: {column}")
        print(f"Number of outliers:{len(outliers)}")
        print(f"Outliers values: \n {outliers[column].values}\n")

#Execute function
print("\n---Plotting Histograms---")
plot_histogram(df)
print("\n---Plotting Boxplot---")
plot_boxplots(df)
print("\n---Analyzing outliers---")
analyze_outliers(df)