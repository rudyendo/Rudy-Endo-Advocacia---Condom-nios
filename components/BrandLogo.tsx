import React, { useState } from 'react';
import { SITE_CONFIG } from '../src/content';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  className = '',
}) => {
  const [imgError, setImgError] = useState(false);

  if (imgError || !SITE_CONFIG.BRANDING.logoUrl) {
    return (
      <span
        className={`font-sans text-lg sm:text-xl font-bold tracking-tight whitespace-nowrap shrink-0 ${
          variant === 'dark' ? 'text-slate-900' : 'text-white'
        } ${className}`}
      >
        {SITE_CONFIG.BRANDING.name}
      </span>
    );
  }

  const img = (
    <img
      src={SITE_CONFIG.BRANDING.logoUrl}
      alt={SITE_CONFIG.BRANDING.name}
      width={245}
      height={108}
      referrerPolicy="no-referrer"
      onError={() => setImgError(true)}
      className={`h-10 sm:h-12 w-auto object-contain shrink-0 ${className}`}
    />
  );

  if (variant === 'light') {
    return (
      <div className="inline-flex items-center bg-white px-4 py-2.5 rounded-xl shadow-sm">
        {img}
      </div>
    );
  }

  return img;
};
