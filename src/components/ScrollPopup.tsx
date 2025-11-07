'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Dumbbell, Clock, Target, Zap, Trophy } from 'lucide-react';
import { useSoundEffects } from '@/hooks/useSoundEffects';
import { useTheme } from '@/contexts/ThemeContext';

const ScrollPopup = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const { clickSound, hoverSound } = useSoundEffects();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;
      
      if (scrollPercentage >= 30 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasShown]);

  const closePopup = () => {
    clickSound();
    setIsVisible(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      closePopup();
      setTimeout(() => {
        const navHeight = 80;
        const elementTop = (element as HTMLElement).offsetTop;
        
        window.scrollTo({
          top: elementTop - navHeight,
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 dark:bg-black/50 backdrop-blur-sm"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 dark:bg-black/60"
            onClick={closePopup}
          />
          
          {/* Popup Content */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-black rounded-2xl shadow-2xl max-w-md w-full overflow-hidden border-2 border-aspirae-teal/30 dark:border-gold/30"
          >
            {/* Header with gradient */}
            <div className="relative bg-gradient-to-r from-aspirae-teal via-bright-coral to-bright-coral dark:from-wine-red-matte dark:via-wine-red dark:to-gold p-6">
              <div className="absolute inset-0 bg-black/20 dark:bg-black/20"></div>
              <div className="relative flex items-center gap-4">
                {/* Left Column - Dumbbell */}
                <div className="flex-shrink-0 flex items-center">
                  <Dumbbell className="w-8 h-8 text-white" />
                </div>
                
                {/* Middle Column - Text Content */}
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                  <h2 className="text-2xl font-bold text-white mb-2">ABSOLUTE SHRED</h2>
                  <p className="text-white/90 text-lg font-semibold">
                    FREE 6-Week Transformation
                  </p>
                </div>
                
                {/* Right Column - X Button */}
                <div className="flex-shrink-0 flex items-center">
                  <motion.button
                    onClick={closePopup}
                    className="p-2 text-white hover:text-gray-300 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Program Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-aspirae-teal/20 dark:bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Clock className="w-6 h-6 text-aspirae-teal dark:text-gold" />
                  </div>
                  <p className="text-gray-900 dark:text-white font-bold text-lg">6 Weeks</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Program</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-bright-coral/20 dark:bg-wine-red/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Target className="w-6 h-6 text-bright-coral dark:text-wine-red" />
                  </div>
                  <p className="text-gray-900 dark:text-white font-bold text-lg">5x/Week</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Training</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-aspirae-teal/20 dark:bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Zap className="w-6 h-6 text-aspirae-teal dark:text-gold" />
                  </div>
                  <p className="text-gray-900 dark:text-white font-bold text-lg">30min</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Sessions</p>
                </div>
              </div>

              {/* Program Features */}
              <div className="space-y-3">
                <h3 className="text-gray-900 dark:text-white font-bold text-lg flex items-center">
                  <Trophy className="w-5 h-5 text-aspirae-teal dark:text-gold mr-2" />
                  What You Get:
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-aspirae-teal dark:bg-gold rounded-full mr-3"></div>
                    Progressive core strengthening
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-bright-coral dark:bg-wine-red rounded-full mr-3"></div>
                    Fat-burning HIIT workouts
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-aspirae-teal dark:bg-gold rounded-full mr-3"></div>
                    Nutrition guidance
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-bright-coral dark:bg-gold rounded-full mr-3"></div>
                    Community support
                  </li>
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <motion.button
                  onClick={() => {
                    clickSound();
                    scrollToSection('#contact');
                  }}
                  onMouseEnter={hoverSound}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  className="w-full bg-gradient-to-r from-aspirae-teal to-bright-coral dark:from-wine-red dark:to-gold text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-150 cursor-pointer"
                >
                  GET STARTED FREE
                </motion.button>
              </div>

              {/* Social Proof */}
              <div className="text-center">
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Join <span className="text-aspirae-teal dark:text-gold font-bold">2,847</span> people already transforming their core
                </p>
              </div>
            </div>

            {/* Bottom accent */}
            <div className="h-1 bg-gradient-to-r from-aspirae-teal via-bright-coral to-bright-coral dark:from-wine-red-matte dark:via-wine-red dark:to-gold"></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollPopup;
