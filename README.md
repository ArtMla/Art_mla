# Art_mla Portfolio


[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black)](https://artmla-portfolio-beta.vercel.app/)
[![React](https://img.shields.io/badge/React-18.x-blue)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC)](https://tailwindcss.com/)
A modern, responsive portfolio website built with React and Vite, showcasing my work and projects.

## 🚀 Demo

View the live site: [artmla-portfolio-beta.vercel.app](https://artmla-portfolio-beta.vercel.app/)

## ✨ Features

- **Modern Design**: Clean and responsive UI built with React
- **Fast Performance**: Powered by Vite for lightning-fast development and builds
- **Responsive Layout**: Optimized for all screen sizes and devices
- **Styled with Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **ESLint Configuration**: Code quality and consistency

## 🛠️ Tech Stack

- **React** - UI library
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS transformations
- **ESLint** - Code linting and formatting

## 📁 Featured Projects

### Fleet Predictive Maintenance — Industrial Data Pipeline

A cloud-native data engineering pipeline built to reduce unplanned vehicle downtime across a multi-source telematics fleet.

**Pipeline Stages**

| Stage | Description |
|---|---|
| Ingestion | Raw telemetry collected from 6+ vehicle data sources |
| **Data Transformation** | **AWS Glue ETL job performs schema validation, data cleaning, and conversion from CSV to Parquet — reducing storage footprint and Athena query costs** |
| KPI Computation | Predictive maintenance scores and route efficiency metrics derived from curated data |
| Dashboarding | Real-time Tableau dashboards with automated maintenance alerts |

**Engineering Significance**

This project demonstrates the ability to design and deploy **scalable, serverless data pipelines on AWS** — an increasingly critical competency for Data Engineering roles in Germany's Industrie 4.0 landscape. By replacing raw CSV storage with Parquet via AWS Glue, the pipeline achieves columnar compression, predicate pushdown, and significantly lower query costs on S3-backed data lakes — skills directly transferable to enterprise-grade data platform work.

**Stack:** Python · SQL · AWS Glue · S3 · Airflow · Tableau

---

### Solar Output Prediction — Hybrid Physics + ML Forecasting

Stacked ensemble combining physics-informed feature constraints with XGBoost and TensorFlow to improve 48-hour PV output forecasts by 15%.

**Stack:** Python · XGBoost · TensorFlow · AWS

---

### Industrial Defect Detection — Computer Vision QC

Fine-tuned ResNet model on infrared imagery achieving 98% defect detection accuracy, deployed as a containerised FastAPI inference service.

**Stack:** PyTorch · OpenCV · Docker · FastAPI

---

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/ArtMla/Art_mla.git
cd Art_mla
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## 📂 Project Structure

```
Art_mla/
├── public/          # Static assets
├── src/             # Source files
│   ├── components/  # React components
│   └── ...
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## 🤝 Contributing

Contributions are welcome! Please read the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines on how to contribute to this project.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**ArtMla**

- GitHub: [@ArtMla](https://github.com/ArtMla)
- Portfolio: [artmla-portfolio-beta.vercel.app](https://artmla-portfolio-beta.vercel.app/)

## 🙏 Acknowledgments

- Original template forked from [omari91/davis-portfolio](https://github.com/omari91/davis-portfolio)
- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

⭐ Star this repository if you find it helpful!
