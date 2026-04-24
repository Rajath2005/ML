import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

#step 1 : Load the dataset
df = pd.read_csv('California Housing.csv')

#step 2 : Check for non-numeric column and handle them
df = df.select_dtypes(include = ['number'])

#step 3 : Compute correlation matrix
correlation_matrix = df.corr()

#step 4 : Visualize the correlation matrix using heatmap
plt.figure(figsize = (10,8))
sns.heatmap(correlation_matrix, annot = True ,cmap = 'coolwarm',fmt='.2f',linewidths=0.5)
plt.title('Correlation Matrix Heatmap')
plt.show()

#step 5 : Create pair plot to Visualize pairwise relationship
sns.pairplot(df)
plt.suptitle("pairWise Relationship between Features", y=1.02)
plt.show()