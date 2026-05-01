#EXP2
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

df=pd.read_csv('California Housing.csv')

df=df.select_dtypes(include=['number'])

correlation_matrix=df.corr()

plt.figure(figsize=(10,8))
sns.heatmap(correlation_matrix,annot=True,linewidths=0.5,cmap='coolwarm', fmt='.2f')
plt.title("Correlation Matrix HeatMap")
plt.show()


sns.pairplot(df)
plt.suptitle("pairWise Relationship with Features")
plt.show()