import pandas as pd
def find_s_algorithm(file_path):
    #Step 1:Load the Dataset
    df = pd.read_csv(file_path)
    
    print("Columns in dataset:",df.columns)
    
    #Step 2: Extract positive examples(where the ClassLabel is 'Yes')
    positive_examples = df[df.iloc[:,-1].str.lower()=='yes']
    
    #If no positive examples, return a message
    if positive_examples.empty:
        print("<No positive examples found in dataset.>")
        return
    #Step 3: Initialize the Hypothesis with the first positive examples
    hypothesis = positive_examples.iloc[0, :-1].copy()
    
    #Step 4: Generalize the hypothesis based on the positive examples
    for index, row in positive_examples.iterrows():
        for i in range(len(hypothesis)):
            #Use .iloc to acess the value by position for both hypothesis and row
            if hypothesis.iloc[i] != row.iloc[i]: #Acess both by position
                hypothesis.iloc[i] = '?' #Set value by position
                
    #Step 5:Output the resulting hypothesis is a single line inside <> brackets            
    print("<"+",".join([f"{col}:{val}" for col,val in zip(df.columns[:-1],hypothesis)])+">")
 
#Example usage:
find_s_algorithm('tennis.csv')