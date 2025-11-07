import React from 'react';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration' | 'onDragStart' | 'onDrag' | 'onDragEnd' | 'onDragEnter' | 'onDragLeave' | 'onDragOver' | 'onDrop'> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', children, className, href, ...props }, ref) => {
    const baseClasses = cn(
      'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-150 outline-none focus:outline-none focus:ring-0 focus:ring-offset-0 active:outline-none',
      'hover:scale-102 active:scale-95',
      {
        'px-4 py-2 text-sm': size === 'sm',
        'px-6 py-3 text-base': size === 'md',
        'px-8 py-4 text-lg': size === 'lg',
        
        'bg-bright-coral text-white hover:bg-coral-light focus:ring-bright-coral shadow-lg hover:shadow-xl dark:shadow-gray-900/50': variant === 'primary',
        'bg-aspirae-teal text-white hover:bg-teal-light focus:ring-aspirae-teal shadow-lg hover:shadow-xl dark:shadow-gray-900/50': variant === 'secondary',
        'border border-aspirae-teal text-aspirae-teal hover:bg-aspirae-teal hover:text-white focus:ring-aspirae-teal dark:border-aspirae-teal dark:text-aspirae-teal dark:hover:bg-aspirae-teal dark:hover:text-white': variant === 'outline',
        
        'dark:bg-wine-red dark:text-white dark:hover:bg-wine-red-light dark:focus:ring-wine-red dark:shadow-wine-red/50': variant === 'primary',
        'dark:bg-gold dark:text-wine-red-dark dark:hover:bg-gold-light dark:focus:ring-gold dark:shadow-gold/50': variant === 'secondary',
        'dark:border dark:border-gold dark:text-gold dark:hover:bg-gold dark:hover:text-wine-red-dark dark:focus:ring-gold': variant === 'outline',
      },
      className
    );

    if (href) {
      const handleClick = (e: React.MouseEvent) => {
        if (href.startsWith('#')) {
          e.preventDefault();
          const element = document.querySelector(href) as HTMLElement;
          if (element) {
            const navHeight = 80;
            const elementTop = element.offsetTop;
            
            window.scrollTo({
              top: elementTop - navHeight,
              behavior: 'smooth'
            });
          }
        }
      };

      return (
        <motion.a
          href={href}
          onClick={handleClick}
          className={baseClasses}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.15 }}
        >
          {children}
        </motion.a>
      );
    }

    const { onAnimationStart, onAnimationEnd, onAnimationIteration, onDragStart, onDrag, onDragEnd, onDragEnter, onDragLeave, onDragOver, onDrop, ...buttonProps } = props as any;

    return (
      <motion.button
        ref={ref}
        className={baseClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.15 }}
        {...buttonProps}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
