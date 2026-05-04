/**
 * Project case studies data
 * Contains all project information in a structured format
 */
import { Zap, Truck, Cpu } from 'lucide-react';

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
      en: 'Built ETL and predictive KPI flows for maintenance and route efficiency.',
      de: 'ETL- und KPI-Flows für Wartung und Routeneffizienz aufgebaut.',
    },
    result: {
      en: 'Enabled real-time visibility and reduced maintenance overhead by 10%.',
      de: 'Echtzeit-Transparenz ermöglicht und Wartungsaufwand um 10% reduziert.',
    },
    metrics: {
      en: [
        { label: 'Maintenance Cost', value: '-10%' },
        { label: 'Data Sources', value: '6+' },
        { label: 'Reporting', value: 'Realtime' },
      ],
      de: [
        { label: 'Wartungskosten', value: '-10%' },
        { label: 'Datenquellen', value: '6+' },
        { label: 'Reporting', value: 'Echtzeit' },
      ],
    },
    phases: {
      en: ['Telemetry ingestion and ETL', 'KPI design with ops team', 'Dashboard rollout and maintenance alerts'],
      de: ['Telemetrie-Ingestion und ETL', 'KPI-Design mit Operations-Team', 'Dashboard-Rollout und Wartungs-Alerts'],
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
    stack: ['SQL', 'Python', 'Tableau', 'Airflow'],
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
];
