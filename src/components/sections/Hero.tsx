'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';
import Button from '@/components/ui/Button';
import Logo from '@/components/Logo';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Theme-adaptable gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-light-bg via-light-surface/30 to-aspirae-teal/10 dark:from-dark-bg dark:via-dark-surface/40 dark:to-wine-red-matte/20"></div>
      
      {/* Additional gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-light-bg/80 via-transparent to-transparent dark:from-dark-bg/80"></div>
      
      {/* Bottom fade to blend with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white dark:to-[#1A0F0F] pointer-events-none z-20"></div>
      
      {/* Abstract geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large circular gradient orbs */}
        <div className="absolute top-0 -right-20 w-96 h-96 bg-aspirae-teal/20 dark:bg-gold/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -left-20 w-96 h-96 bg-bright-coral/20 dark:bg-wine-red-matte/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-aspirae-teal/10 dark:bg-gold/10 rounded-full blur-2xl"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)]"></div>
      </div>
      
      {/* Subtle radial pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(0,0,0,0.1)_1px,transparent_0)] bg-[length:32px_32px] dark:bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.1)_1px,transparent_0)] dark:bg-[length:32px_32px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center -mt-8 sm:-mt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Company logo and name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className=""
          >
            <div className="inline-flex items-center justify-center">
              <Logo size="xl" className="lg:w-52 lg:h-52 mb-4" />
            </div>
          </motion.div>

          {/* Main headline - different style */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-6xl font-display font-black text-light-text dark:text-white mb-4 leading-tight"
          >
            <div className="flex flex-col items-center">
              <span>UNLOCK YOUR</span>
              <span>POTENTIAL</span>
            </div>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-light-text-secondary dark:text-dark-text-secondary my-8 md:my-10 leading-relaxed max-w-2xl mx-auto px-4"
          >
            {siteConfig.cta.hero.subtitle}.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
          >
            <Button
              href="#contact"
              variant="primary"
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto outline-none focus:outline-none focus:ring-0 !focus:ring-0 focus:ring-offset-0 active:outline-none"
            >
              {siteConfig.cta.hero.primaryButton}
            </Button>
            <Button
              href="#about"
              variant="outline"
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 border-light-text-secondary text-light-text-secondary hover:bg-light-text-secondary hover:text-light-bg dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-dark-bg w-full sm:w-auto outline-none focus:outline-none focus:ring-0 !focus:ring-0 focus:ring-offset-0 active:outline-none"
            >
              {siteConfig.cta.hero.secondaryButton}
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.0 }}
            className="flex justify-center mt-6 sm:mt-8 mb-6 sm:mb-8"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-light-text-secondary dark:border-gold rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-2 sm:h-3 bg-light-text-secondary dark:bg-gold rounded-full mt-2"
              />
            </motion.div>
          </motion.div>

          {/* Company description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-light-text-muted dark:text-dark-text-muted text-sm sm:text-base max-w-xl mx-auto px-4 leading-relaxed"
          >
            {siteConfig.company.description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
