import React from 'react';
import Logo from './Logo';

interface LogoTextProps {
  variant?: 'full' | 'short';
  className?: string;
}

const LogoText: React.FC<LogoTextProps> = ({ variant = 'full', className = '' }) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo icon */}
      <Logo size="base" />
      
      {/* Text logo */}
      <div className="flex flex-col">
        <span className="font-display font-bold text-1xl leading-tight">
          <span className="text-bright-coral dark:text-gold">A</span>
          <span className="text-light-text dark:text-dark-text">SPIRAE</span>
        </span>
        {variant === 'full' && (
          <span className="text-xs text-light-text dark:text-dark-text-secondary font-medium tracking-wider">
            INNOVATION & EXCELLENCE
          </span>
        )}
      </div>
    </div>
  );
};

export default LogoText;
