import React from 'react';

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  subtitle,
  title,
  description,
  centered = false,
  light = false,
}) => {
  return (
    <div className={`mb-10 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
      {subtitle && (
        <div className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest ${centered ? 'justify-center' : ''} text-gold-500 mb-2`}>
          <span className="w-6 h-[2px] bg-gold-500 rounded-full inline-block"></span>
          <span>{subtitle}</span>
        </div>
      )}
      <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${light ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base md:text-lg leading-relaxed ${light ? 'text-slate-300' : 'text-slate-600'}`}>
          {description}
        </p>
      )}
    </div>
  );
};
