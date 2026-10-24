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
    sm: { icon: 'w-7 h-7', text: 'text-lg', badge: 'text-[9px]' },
    md: { icon: 'w-8 h-8', text: 'text-xl', badge: 'text-[10px]' },
    lg: { icon: 'w-10 h-10', text: 'text-2xl', badge: 'text-xs' },
  };

  const { icon, text } = sizeMap[size];

  return (
    <Link
      to="/"
      aria-label="AceSutra Home"
      className={`inline-flex items-center gap-2.5 group transition-transform duration-200 active:scale-95 focus-visible:ring-2 focus-visible:ring-brand-orange rounded-md py-1 ${className}`}
    >
      {/* Dynamic Arrow / Motion Geometric Vector Icon */}
      <div className={`relative flex-shrink-0 ${icon} flex items-center justify-center`}>
        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_12px_rgba(255,107,53,0.6)]"
        >
          <defs>
            <linearGradient id="ace-logo-grad-1" x1="4" y1="40" x2="40" y2="4" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FF4500" />
              <stop offset="60%" stopColor="#FF6B35" />
              <stop offset="100%" stopColor="#FFA070" />
            </linearGradient>
            <linearGradient id="ace-logo-grad-2" x1="22" y1="36" x2="38" y2="10" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#E5531E" />
              <stop offset="100%" stopColor="#FF8552" />
            </linearGradient>
          </defs>
          {/* Main outer dynamic angular arrow/apex */}
          <path
            d="M6 36L22 6L38 36L30.5 36L22 18L13.5 36H6Z"
            fill="url(#ace-logo-grad-1)"
          />
          {/* Internal white speed chevron representing precision execution */}
          <path
            d="M17.5 33L22 23L26.5 33H30L22 14L14 33H17.5Z"
            fill="#FFFFFF"
            className="transition-opacity group-hover:fill-opacity-100"
          />
          {/* Right speed blade */}
          <path
            d="M22 6L26 13L34 32L38 36L30.5 36L22 18V6Z"
            fill="url(#ace-logo-grad-2)"
            opacity="0.8"
          />
        </svg>
      </div>

      {!iconOnly && (
        <div className="flex flex-col tracking-tight">
          <div className="flex items-baseline">
            <span className={`font-extrabold text-white tracking-tight ${text}`}>
              Ace
            </span>
            <span className={`font-medium text-warmWhite/90 tracking-tight ml-0.5 ${text}`}>
              Sutra
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange ml-1 self-baseline mb-0.5 transform transition-transform group-hover:scale-125 group-hover:bg-brand-hover"></span>
          </div>
        </div>
      )}
    </Link>
  );
};
