/**
 * Project case studies data
 * Contains all project information in a structured format
 */
import { Zap, Truck, Cpu, Factory } from 'lucide-react';

export const projectsData = [
  {
    id: 1,
    icon: Zap,
    category: 'Energy',
    title: { en: 'Solar Output Prediction', de: 'Solar Output Prediction' },
    short: { en: 'Hybrid Physics + ML model', de: 'Hybridmodell aus Physik + ML' },
    challenge: {
      en: 'Weather-only models were too weak for local PV planning.',
      de: 'Wettermodelle allein waren für lokale PV-Planung zu schwach.',
    },
    action: {
      en: 'Built a stacked ensemble with physics-informed feature constraints.',
      de: 'Ein Stacked-Ensemble mit physikbasierten Feature-Constraints umgesetzt.',
    },
    result: {
      en: 'Forecast accuracy improved by 15% with lower balancing uncertainty.',
      de: 'Prognosegenauigkeit um 15% verbessert und Bilanzierungsunsicherheit reduziert.',
    },
    metrics: {
      en: [
        { label: 'Accuracy Lift', value: '+15%' },
        { label: 'Forecast Horizon', value: '48h' },
        { label: 'Deployment', value: 'AWS' },
      ],
      de: [
        { label: 'Genauigkeitsplus', value: '+15%' },
        { label: 'Prognosehorizont', value: '48h' },
        { label: 'Deployment', value: 'AWS' },
      ],
    },
    phases: {
      en: ['Data audit and weather reveal', 'Physics-informed feature engineering', 'Stacked ensemble training and validation'],
      de: ['Datenaudit und Wetteranalyse', 'Physikbasiertes Feature Engineering', 'Stacked-Ensemble Training und Validierung'],
    },
    gallery: {
      en: [
        {
          title: 'Solar systems and energy context',
          url: 'https://picsum.photos/seed/solar-context-1/1200/800',
          source: 'https://picsum.photos/',
        },
        {
          title: 'Renewable delivery operations',
          url: 'https://picsum.photos/seed/solar-context-2/1200/800',
          source: 'https://picsum.photos/',
        },
        {
          title: 'Data infrastructure in production',
          url: 'https://picsum.photos/seed/solar-context-3/1200/800',
          source: 'https://picsum.photos/',
        },
      ],
      de: [
        {
          title: 'Solar- und Energiekontext',
          url: 'https://picsum.photos/seed/solar-context-1/1200/800',
          source: 'https://picsum.photos/',
        },
        {
          title: 'Erneuerbare Logistikoperationen',
          url: 'https://picsum.photos/seed/solar-context-2/1200/800',
          source: 'https://picsum.photos/',
        },
        {
          title: 'Dateninfrastruktur in Produktion',
          url: 'https://picsum.photos/seed/solar-context-3/1200/800',
          source: 'https://picsum.photos/',
        },
      ],
    },
    stack: ['Python', 'XGBoost', 'TensorFlow', 'AWS'],
  },
  {
    id: 2,
    icon: Truck,
    category: 'Logistics',
    title: { en: 'Fleet Predictive Maintenance', de: 'Fleet Predictive Maintenance' },
    short: { en: 'Telematics analytics + KPI dashboarding', de: 'Telematik-Analytics + KPI-Dashboards' },
    challenge: {
      en: 'Unplanned truck downtime increased operating cost.',
      de: 'Ungeplante LKW-Ausfallzeiten erhöhten die Betriebskosten.',
    },
    action: {
      en: 'Built a serverless ETL pipeline on AWS Glue — schema validation, data cleaning, and CSV-to-Parquet conversion — feeding predictive KPI flows for maintenance and route efficiency.',
      de: 'Serverlose ETL-Pipeline mit AWS Glue aufgebaut — Schema-Validierung, Datenbereinigung und CSV-zu-Parquet-Konvertierung — zur Versorgung prädiktiver KPI-Flows für Wartung und Routeneffizienz.',
    },
    result: {
      en: 'Enabled real-time visibility, reduced maintenance overhead by 10%, and cut storage and query costs through columnar Parquet format.',
      de: 'Echtzeit-Transparenz ermöglicht, Wartungsaufwand um 10% reduziert und Speicher- sowie Abfragekosten durch das Parquet-Spaltenformat gesenkt.',
    },
    metrics: {
      en: [
        { label: 'Maintenance Cost', value: '-10%' },
        { label: 'Data Sources', value: '6+' },
        { label: 'Pipeline', value: 'Serverless' },
      ],
      de: [
        { label: 'Wartungskosten', value: '-10%' },
        { label: 'Datenquellen', value: '6+' },
        { label: 'Pipeline', value: 'Serverless' },
      ],
    },
    phases: {
      en: [
        'Telemetry ingestion from 6+ vehicle data sources',
        'Data transformation: AWS Glue ETL — schema validation, cleaning, CSV → Parquet',
        'KPI design with ops team',
        'Dashboard rollout and automated maintenance alerts',
      ],
      de: [
        'Telemetrie-Ingestion aus 6+ Fahrzeugdatenquellen',
        'Datentransformation: AWS Glue ETL — Schema-Validierung, Bereinigung, CSV → Parquet',
        'KPI-Design mit dem Operations-Team',
        'Dashboard-Rollout und automatisierte Wartungs-Alerts',
      ],
    },
    gallery: {
      en: [
        {
          title: 'Fleet transport environment',
          url: 'https://picsum.photos/seed/fleet-context-1/1200/800',
          source: 'https://picsum.photos/',
        },
        {
          title: 'Operations traffic context',
          url: 'https://picsum.photos/seed/fleet-context-2/1200/800',
          source: 'https://picsum.photos/',
        },
        {
          title: 'Ground handling and logistics',
          url: 'https://picsum.photos/seed/fleet-context-3/1200/800',
          source: 'https://picsum.photos/',
        },
      ],
      de: [
        {
          title: 'Flotten-Transportumfeld',
          url: 'https://picsum.photos/seed/fleet-context-1/1200/800',
          source: 'https://picsum.photos/',
        },
        {
          title: 'Operations- und Verkehrskontext',
          url: 'https://picsum.photos/seed/fleet-context-2/1200/800',
          source: 'https://picsum.photos/',
        },
        {
          title: 'Ground-Handling und Logistik',
          url: 'https://picsum.photos/seed/fleet-context-3/1200/800',
          source: 'https://picsum.photos/',
        },
      ],
    },
    stack: ['Python', 'SQL', 'AWS Glue', 'S3', 'Tableau', 'Airflow'],
  },
  {
    id: 3,
    icon: Cpu,
    category: 'Computer Vision',
    title: { en: 'Industrial Defect Detection', de: 'Industrial Defect Detection' },
    short: { en: 'ResNet pipeline for quality control', de: 'ResNet-Pipeline für Qualitätskontrolle' },
    challenge: {
      en: 'Manual inspection was slow and inconsistent.',
      de: 'Manuelle Inspektion war langsam und inkonsistent.',
    },
    action: {
      en: 'Fine-tuned a ResNet model on infrared images for defect detection.',
      de: 'ResNet-Modell auf Infrarotbildern für Defekterkennung feinjustiert.',
    },
    result: {
      en: 'Reached 98% detection accuracy and automated the QC process.',
      de: '98% Erkennungsgenauigkeit erreicht und QC-Prozess automatisiert.',
    },
    metrics: {
      en: [
        { label: 'Detection Accuracy', value: '98%' },
        { label: 'Model Family', value: 'ResNet' },
        { label: 'Serving', value: 'FastAPI' },
      ],
      de: [
        { label: 'Erkennungsgenauigkeit', value: '98%' },
        { label: 'Modellfamilie', value: 'ResNet' },
        { label: 'Serving', value: 'FastAPI' },
      ],
    },
    phases: {
      en: ['Image labeling and augmentation', 'Model fine-tuning and thresholding', 'Containerized inference API'],
      de: ['Bildannotation und Augmentation', 'Modell-Finetuning und Schwellwertoptimierung', 'Containerisierte Inferenz-API'],
    },
    gallery: {
      en: [
        {
          title: 'Factory inspection context',
          url: 'https://picsum.photos/seed/cv-context-1/1200/800',
          source: 'https://picsum.photos/',
        },
        {
          title: 'Automated machinery operations',
          url: 'https://picsum.photos/seed/cv-context-2/1200/800',
          source: 'https://picsum.photos/',
        },
        {
          title: 'Industrial production environment',
          url: 'https://picsum.photos/seed/cv-context-3/1200/800',
          source: 'https://picsum.photos/',
        },
      ],
      de: [
        {
          title: 'Inspektionskontext in der Fabrik',
          url: 'https://picsum.photos/seed/cv-context-1/1200/800',
          source: 'https://picsum.photos/',
        },
        {
          title: 'Automatisierte Maschinenprozesse',
          url: 'https://picsum.photos/seed/cv-context-2/1200/800',
          source: 'https://picsum.photos/',
        },
        {
          title: 'Industrielles Produktionsumfeld',
          url: 'https://picsum.photos/seed/cv-context-3/1200/800',
          source: 'https://picsum.photos/',
        },
      ],
    },
    stack: ['PyTorch', 'OpenCV', 'Docker', 'FastAPI'],
  },
  {
    id: 4,
    icon: Factory,
    category: 'Industrie 4.0',
    title: {
      en: 'Industrial Predictive Maintenance Platform',
      de: 'Industrielle Predictive-Maintenance-Plattform',
    },
    short: {
      en: 'End-to-end MLOps — S3 data lake to live failure prediction API',
      de: 'End-to-End MLOps — S3-Data-Lake bis Live-Ausfallprognose-API',
    },
    challenge: {
      en: 'Manufacturing lines lose hours to unplanned equipment stoppages that structured sensor data could have predicted.',
      de: 'Fertigungslinien verlieren Stunden durch ungeplante Maschinenausfälle, die strukturierte Sensordaten hätten vorhersagen können.',
    },
    action: {
      en: 'Built a production-grade serverless ETL pipeline (S3 + AWS Glue CSV→Parquet with schema validation), engineered physics-informed features from sensor readings (temperature delta, mechanical power, wear rate), trained an XGBoost classifier on the AI4I 2020 dataset with MLflow tracking, deployed a FastAPI prediction microservice in Docker with async PostgreSQL audit logging, and built a Next.js monitoring dashboard — all wired through GitHub Actions CI/CD to AWS ECR.',
      de: 'Produktionsreife serverlose ETL-Pipeline aufgebaut (S3 + AWS Glue CSV→Parquet mit Schema-Validierung), physikbasierte Features aus Sensordaten entwickelt (Temperaturdelta, mechanische Leistung, Verschleißrate), XGBoost-Klassifikator auf dem AI4I-2020-Datensatz mit MLflow-Tracking trainiert, FastAPI Prediction Microservice in Docker mit asynchronem PostgreSQL Audit Logging deployed und Next.js Monitoring Dashboard entwickelt — alles über GitHub Actions CI/CD an AWS ECR angebunden.',
    },
    result: {
      en: 'Complete Industrie 4.0 stack: raw sensor CSV → schema-validated Parquet lake → engineered feature store → versioned model registry → <50ms REST API → live operational dashboard. Model AUC 0.96, F1 0.89.',
      de: 'Vollständiger Industrie-4.0-Stack: Rohdaten-CSV → Schema-validiertes Parquet-Lake → Feature-Store → versioniertes Modell-Registry → <50ms REST-API → Live-Monitoring-Dashboard. Modell AUC 0,96, F1 0,89.',
    },
    metrics: {
      en: [
        { label: 'Model AUC', value: '0.96' },
        { label: 'API Latency', value: '<50ms' },
        { label: 'Stack Layers', value: '7' },
      ],
      de: [
        { label: 'Modell-AUC', value: '0,96' },
        { label: 'API-Latenz', value: '<50ms' },
        { label: 'Stack-Ebenen', value: '7' },
      ],
    },
    phases: {
      en: [
        'S3 data lake setup and raw CSV ingestion via boto3',
        'AWS Glue ETL: pandera schema validation, CSV → snappy Parquet',
        'Physics-informed feature engineering + PostgreSQL feature store',
        'XGBoost training + S3-versioned model registry with MLflow tracking',
        'FastAPI prediction microservice — Docker + async PostgreSQL audit log',
        'Next.js monitoring dashboard: live KPIs, prediction table, model metrics',
        'GitHub Actions CI/CD: ruff lint + pytest + Docker build → ECR push',
      ],
      de: [
        'S3 Data Lake Setup und CSV-Rohingestion via boto3',
        'AWS Glue ETL: Pandera Schema-Validierung, CSV → Snappy Parquet',
        'Physikbasiertes Feature Engineering + PostgreSQL Feature Store',
        'XGBoost Training + S3-versioniertes Modell-Registry mit MLflow Tracking',
        'FastAPI Prediction Microservice — Docker + asynchrones PostgreSQL Audit Log',
        'Next.js Monitoring Dashboard: Live-KPIs, Prediction-Tabelle, Modell-Metriken',
        'GitHub Actions CI/CD: Ruff Lint + Pytest + Docker Build → ECR Push',
      ],
    },
    gallery: {
      en: [
        {
          title: 'Live monitoring dashboard — KPI cards and prediction log',
          url: 'https://picsum.photos/seed/predmaint-1/1200/800',
          source: 'https://github.com/artmla/Art_mla',
        },
        {
          title: 'AWS architecture — S3 data lake to FastAPI microservice',
          url: 'https://picsum.photos/seed/predmaint-2/1200/800',
          source: 'https://github.com/artmla/Art_mla',
        },
        {
          title: 'Model evaluation — AUC 0.96, confusion matrix',
          url: 'https://picsum.photos/seed/predmaint-3/1200/800',
          source: 'https://github.com/artmla/Art_mla',
        },
      ],
      de: [
        {
          title: 'Live-Monitoring-Dashboard — KPI-Karten und Prediction-Log',
          url: 'https://picsum.photos/seed/predmaint-1/1200/800',
          source: 'https://github.com/artmla/Art_mla',
        },
        {
          title: 'AWS-Architektur — S3 Data Lake bis FastAPI Microservice',
          url: 'https://picsum.photos/seed/predmaint-2/1200/800',
          source: 'https://github.com/artmla/Art_mla',
        },
        {
          title: 'Modell-Evaluation — AUC 0,96, Konfusionsmatrix',
          url: 'https://picsum.photos/seed/predmaint-3/1200/800',
          source: 'https://github.com/artmla/Art_mla',
        },
      ],
    },
    stack: ['Python', 'XGBoost', 'AWS S3', 'AWS Glue', 'PostgreSQL', 'FastAPI', 'Docker', 'Next.js', 'GitHub Actions', 'MLflow'],
    github: 'https://github.com/ArtMla/industrial-data-pipeline',
  },
];
