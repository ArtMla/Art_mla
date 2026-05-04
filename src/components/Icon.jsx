import React from 'react';

const sizeMap = {
  sm: 16,
  md: 20,
  lg: 28,
  xl: 40,
};

const toneMap = {
  accent: 'text-blue-700',
  dark: 'text-slate-900',
  muted: 'text-slate-600',
  light: 'text-white',
};

/**
 * Icon Component
 * Wrapper for Lucide icons with size, color, and glass morphism effects
 * @param {Object} props - Component props
 * @param {React.ComponentType} props.icon - Lucide icon component
 * @param {string} props.size - Icon size: 'sm', 'md', 'lg', 'xl' (default: 'md')
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.tone - Icon color: 'accent', 'dark', 'muted', 'light' (default: 'accent')
 * @param {boolean} props.glass - Apply glass morphism effect (default: true)
 * @returns {JSX.Element} Rendered icon with styling
 */
export default function Icon({
  icon: LucideIcon, // eslint-disable-line no-unused-vars
  size = 'md',
  className = '',
  tone = 'accent',
  glass = true,
  ...props
}) {
  const px = sizeMap[size] ?? sizeMap.md;
  return (
    <span className={`${glass ? 'icon-liquid' : ''} ${toneMap[tone] ?? toneMap.accent} ${className}`.trim()}>
      <LucideIcon size={px} {...props} />
    </span>
  );
}
