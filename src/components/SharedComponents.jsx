import React from 'react';

/**
 * PageWrap Component
 * Provides consistent page layout with title and subtitle
 * Improves accessibility with proper semantic HTML
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Section title
 * @param {string} [props.subtitle] - Optional subtitle text
 * @param {React.ReactNode} props.children - Page content
 */
export const PageWrap = ({ title, subtitle, children }) => (
  <section className="pt-36 pb-24 bg-white min-h-[80vh]">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-xs font-black text-blue-700 uppercase tracking-[0.3em] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-600 mb-10 max-w-2xl">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  </section>
);

/**
 * SectionHeader Component
 * Reusable heading for page sections
 * 
 * @param {Object} props - Component props
 * @param {string} props.label - Uppercase label text
 * @param {string} [props.title] - Optional main title
 */
export const SectionHeader = ({ label, title }) => (
  <div>
    <h3 className="text-xs font-black text-blue-700 uppercase tracking-[0.3em] mb-4">
      {label}
    </h3>
    {title && (
      <h4 className="text-lg font-bold text-slate-900">
        {title}
      </h4>
    )}
  </div>
);

/**
 * ResponsiveImage Component
 * Handles image loading with lazy loading and error states
 * Improves performance and accessibility
 * 
 * @param {Object} props - Component props
 * @param {string} props.src - Image source URL
 * @param {string} props.alt - Alternative text for accessibility
 * @param {string} [props.className='w-full h-full object-cover'] - CSS classes
 * @param {Function} [props.onError] - Error callback
 * @param {('lazy'|'eager')} [props.loading='lazy'] - Loading strategy
 */
export const ResponsiveImage = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  onError = null,
  loading = 'lazy',
}) => (
  <img
    src={src}
    alt={alt}
    loading={loading}
    className={className}
    onError={(e) => {
      e.currentTarget.style.display = 'none';
      if (onError) onError(e);
    }}
  />
);

/**
 * ContactLink Component
 * Reusable contact link with icon
 * 
 * @param {Object} props - Component props
 * @param {string} props.href - Link destination URL
 * @param {React.ComponentType} [props.icon] - Lucide icon component
 * @param {string} props.label - Link label text
 * @param {boolean} [props.external=false] - Open in new tab if external
 */
export const ContactLink = ({ href, icon: Icon, label, external = false }) => (
  <a
    href={href}
    {...(external && { target: '_blank', rel: 'noreferrer' })}
    className="flex items-center p-4 bg-white rounded-2xl border border-slate-100 hover:border-blue-300 transition-colors"
    aria-label={label}
  >
    {Icon && <Icon size={20} className="mr-2" />}
    <span className="text-sm font-semibold text-slate-700">{label}</span>
  </a>
);
