# ML Lab Experiments Portfolio

A curated machine learning lab repository with 10 experiments, datasets, outputs, and a full portfolio website built with Next.js.

## Highlights

- 10 experiments covering regression, classification, clustering, dimensionality reduction, and concept learning
- Datasets included for each experiment
- Website with experiment cards, code snapshots, outputs, and download links

## Website

The website lives in the [website](website) folder and is ready to run locally.

### Run locally

```bash
cd website
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Repository structure

- Experiments
  - [EXP1](EXP1) - Data exploration and outlier detection
  - [EXP2](EXP2) - Correlation analysis
  - [EXP3](EXP3) - PCA on Iris dataset
  - [EXP4](EXP4) - Find-S concept learning
  - [EXP5](EXP5) - Semi-supervised KNN labeling
  - [EXP6](EXP6) - Locally weighted regression
  - [EXP7](EXP7) - Linear vs polynomial regression
  - [EXP-8](EXP-8) - Decision tree classification
  - [EXP-9](EXP-9) - PCA + Naive Bayes on faces
  - [EXP-10](EXP-10) - K-means clustering

- Datasets
  - [DATA](DATA) contains the shared datasets

- Website assets
  - [website/public/outputs](website/public/outputs) stores the experiment visuals
  - [website/public/datasets](website/public/datasets) stores downloadable datasets
  - [website/public/downloads](website/public/downloads) stores PDF reports

## Experiment map

| Experiment | Purpose | Dataset | Script |
| --- | --- | --- | --- |
| EXP1 | Data exploration and outlier detection | California Housing | [EXP1/Exp1.py](EXP1/Exp1.py) |
| EXP2 | Correlation heatmap + pairplot | California Housing | [EXP2/Exp2.py](EXP2/Exp2.py) |
| EXP3 | PCA to 2D visualization | Iris | [EXP3/Exp3.py](EXP3/Exp3.py) |
| EXP4 | Find-S concept learning | Tennis | [EXP4/Exp4.py](EXP4/Exp4.py) |
| EXP5 | Semi-supervised KNN | Synthetic | [EXP5/EXP5.py](EXP5/EXP5.py) |
| EXP6 | Locally weighted regression | Synthetic | [EXP6/EXP6.py](EXP6/EXP6.py) |
| EXP7 | Linear + polynomial regression | Boston Housing + Auto MPG | [EXP7/EXP7.py](EXP7/EXP7.py) |
| EXP-8 | Decision tree classification | Breast Cancer | [EXP-8/Exp8.py](EXP-8/Exp8.py) |
| EXP-9 | PCA + Naive Bayes | Olivetti Faces | [EXP-9/EXP9.py](EXP-9/EXP9.py) |
| EXP-10 | K-means clustering | Wisconsin Breast Cancer | [EXP-10/Exp10.py](EXP-10/Exp10.py) |

## Notes

- Outputs and reports are already staged for the website under [website/public](website/public).
- This repo is designed for easy browsing and showcasing results.
