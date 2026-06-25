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
  { icon: Terminal, title: 'Programming', skills: ['Python', 'SQL', 'Matlab', 'Arduino'] },
  { icon: Cpu, title: 'AI & ML', skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'XGBoost'] },
  { icon: Layers, title: 'Analytics', skills: ['Pandas', 'NumPy', 'Power BI', 'Tableau'] },
  { icon: Database, title: 'Infrastructure', skills: ['AWS', 'Azure', 'Docker', 'Git'] },
  { icon: Zap, title: 'Industrial IT', skills: ['OPC UA', 'MES/SAP', 'PLC Programming', 'AutoCAD'] },
];
