/**
 * Technology stack data
 * Skills organized by category with corresponding icons
 */
import {
  Terminal,
  Cpu,
  Layers,
  Database,
  Zap,
} from 'lucide-react';

export const techStack = [
  {
    icon: Terminal,
    title: 'Programming',
    skills: [
      { name: 'Python', level: 92 },
      { name: 'SQL', level: 82 },
      { name: 'Matlab', level: 65 },
      { name: 'Arduino', level: 60 },
    ],
  },
  {
    icon: Cpu,
    title: 'AI & ML',
    skills: [
      { name: 'PyTorch', level: 82 },
      { name: 'Scikit-learn', level: 85 },
      { name: 'TensorFlow', level: 78 },
      { name: 'XGBoost', level: 75 },
    ],
  },
  {
    icon: Layers,
    title: 'Analytics',
    skills: [
      { name: 'Pandas / NumPy', level: 88 },
      { name: 'Power BI', level: 74 },
      { name: 'Tableau', level: 72 },
    ],
  },
  {
    icon: Database,
    title: 'Cloud & Infrastructure',
    skills: [
      { name: 'AWS (S3, EC2, Glue)', level: 80 },
      { name: 'Docker & GitHub Actions', level: 78 },
      { name: 'MLflow / dbt / Spark', level: 68 },
      { name: 'Git', level: 85 },
    ],
  },
  {
    icon: Zap,
    title: 'Industrial IT',
    skills: [
      { name: 'PLC Programming', level: 75 },
      { name: 'OPC UA', level: 70 },
      { name: 'MES / SAP', level: 65 },
    ],
  },
];
