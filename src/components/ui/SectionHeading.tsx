import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  badge?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
  badge,
}) => {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
  };

  return (
    <div className={`flex flex-col max-w-3xl ${alignClasses[align]} ${className}`}>
      {badge && (
        <span className="inline-flex items-center px-3 py-1 mb-3 rounded-full text-xs font-semibold bg-brand-cyan/10 text-cyan-400 border border-brand-cyan/25">
          {badge}
        </span>
      )}

      {eyebrow && (
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,194,255,0.8)]"></span>
          <span className="text-xs uppercase font-bold tracking-widest text-cyan-400">
            {eyebrow}
          </span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg text-mutedGray leading-relaxed text-balance">
          {description}
        </p>
      )}
    </div>
  );
};
