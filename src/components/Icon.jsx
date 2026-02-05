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

export default function Icon({
  icon: LucideIcon,
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
