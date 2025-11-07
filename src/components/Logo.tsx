'use client';

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface LogoProps {
  size?: 'sm' | 'base' | 'md' | 'lg' | 'xl' | 'xxl';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
  const { theme } = useTheme();
  const sizeClasses = {
    sm: 'w-12 h-12',
    base: 'w-14 h-14',
    md: 'w-20 h-20',
    lg: 'w-32 h-32',
    xl: 'w-44 h-44',
    xxl: 'w-56 h-56',
  };

  const logoSrc = theme === 'light' ? '/logo/light.svg' : '/logo/dark.svg';

  const baseLevelSizeMatch = className.match(/\b(w-\d+|h-\d+)\b/);
  const hasResponsivePrefix = baseLevelSizeMatch && (className.includes('lg:') || className.includes('md:') || className.includes('sm:') || className.includes('xl:'));
  const hasBaseLevelSize = baseLevelSizeMatch && !hasResponsivePrefix;
  const sizeClassToUse = hasBaseLevelSize ? '' : sizeClasses[size];
  
  const responsiveSizeClasses = className.match(/\b(lg|md|sm|xl):(w-\d+|h-\d+)/g)?.join(' ') || '';
  const otherClasses = className.replace(/\b(lg|md|sm|xl):(w-\d+|h-\d+)/g, '').trim();

  return (
    <div className={`relative ${sizeClassToUse} ${responsiveSizeClasses} bg-transparent ${otherClasses}`}>
      <img
        src={logoSrc}
        alt="Aspirae Logo"
        className={`${sizeClassToUse} ${responsiveSizeClasses} object-contain bg-transparent`}
        style={{ background: 'transparent', display: 'block', filter: 'none' }}
      />
    </div>
  );
};

export default Logo;
