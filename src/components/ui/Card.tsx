import React from 'react';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, hover = true, onClick, ...props }, ref) => {
    const baseClasses = cn(
      'bg-white dark:bg-dark-card rounded-xl shadow-xl overflow-hidden',
      'transition-all duration-0',
      {
        'hover:shadow-2xl hover:-translate-y-1 cursor-pointer': hover,
      },
      className
    );

    const MotionCard = motion.div;

    return (
      <MotionCard
        ref={ref}
        className={baseClasses}
        whileHover={hover ? { y: -8, scale: 1.02 } : {}}
        transition={{ duration: 0.3 }}
        onClick={onClick}
        {...props}
      >
        {children}
      </MotionCard>
    );
  }
);

Card.displayName = 'Card';

export default Card;
