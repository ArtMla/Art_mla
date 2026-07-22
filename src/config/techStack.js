/**
 * Technology stack data
 * Flat list of individual tools/technologies, each with a matching icon and
 * its real brand color, rendered as a sliding marquee. Brand logos + official
 * hex values come from simple-icons where one exists; a generic Lucide icon
 * with a representative brand color is used as a fallback where it doesn't
 * (e.g. AWS, Power BI, Tableau — removed from simple-icons for trademark reasons).
 */
import { Cloud, BarChart3, PieChart, TrendingUp, Sigma, Workflow } from 'lucide-react';
import {
  SiPython,
  SiPostgresql,
  SiDocker,
  SiGithubactions,
  SiGit,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiMlflow,
  SiApachespark,
  SiArduino,
  SiSiemens,
  SiSap,
  SiFastapi,
} from 'react-icons/si';

export const techStack = [
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'SQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'AWS', icon: Cloud, color: '#FF9900' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' },
  { name: 'Git', icon: SiGit, color: '#F03C2E' },
  { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
  { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
  { name: 'Scikit-learn', icon: SiScikitlearn, color: '#F7931E' },
  { name: 'XGBoost', icon: TrendingUp, color: '#5C6BC0' },
  { name: 'Pandas', icon: SiPandas, color: '#150458' },
  { name: 'NumPy', icon: SiNumpy, color: '#013243' },
  { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
  { name: 'MLflow', icon: SiMlflow, color: '#0194E2' },
  { name: 'Apache Spark', icon: SiApachespark, color: '#E25A1C' },
  { name: 'dbt', icon: Workflow, color: '#FF694B' },
  { name: 'Power BI', icon: BarChart3, color: '#F2C811' },
  { name: 'Tableau', icon: PieChart, color: '#E97627' },
  { name: 'Arduino', icon: SiArduino, color: '#00878F' },
  { name: 'MATLAB', icon: Sigma, color: '#E16737' },
  { name: 'Siemens S7 PLC', icon: SiSiemens, color: '#009999' },
  { name: 'SAP / MES', icon: SiSap, color: '#0FAAFF' },
];
