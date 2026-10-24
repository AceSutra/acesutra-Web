import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  iconOnly?: boolean;
}

export const AceSutraLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  iconOnly = false,
}) => {
  const sizeMap = {
    sm: { icon: 'w-7 h-7 sm:w-8 sm:h-8', text: 'text-lg', dot: 'w-1.5 h-1.5' },
    md: { icon: 'w-8 h-8 sm:w-9 sm:h-9', text: 'text-xl', dot: 'w-1.5 h-1.5' },
    lg: { icon: 'w-10 h-10 sm:w-12 sm:h-12', text: 'text-2xl sm:text-3xl', dot: 'w-2 h-2' },
  };

  const { icon, text, dot } = sizeMap[size];

  return (
    <Link
      to="/"
      aria-label="AceSutra Home"
      className={`inline-flex items-center gap-2.5 group transition-transform duration-200 active:scale-95 focus-visible:ring-2 focus-visible:ring-brand-blue rounded-md py-1 ${className}`}
    >
      {/* 3D Ascending Circuit Emblem */}
      <div className={`relative flex-shrink-0 ${icon} flex items-center justify-center`}>
        <img
          src="/logo-icon.png"
          alt="AceSutra Emblem"
          className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(0,102,255,0.35)] transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_16px_rgba(0,194,255,0.7)]"
          loading="eager"
        />
      </div>

      {!iconOnly && (
        <div className="flex flex-col tracking-tight select-none">
          <div className="flex items-baseline">
            <span className={`font-extrabold text-white tracking-tight ${text}`}>
              Ace
            </span>
            <span className={`font-bold tracking-tight ml-0.5 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500 ${text}`}>
              Sutra
            </span>
            <span className={`${dot} rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(0,229,255,0.9)] ml-1 self-baseline mb-0.5 transform transition-transform group-hover:scale-125`}></span>
          </div>
        </div>
      )}
    </Link>
  );
};
