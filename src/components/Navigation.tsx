'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/config/site';
import Button from '@/components/ui/Button';
import ThemeToggle from '@/components/ui/ThemeToggle';
import LogoText from '@/components/LogoText';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href) as HTMLElement;
      if (element) {
        setIsMobileMenuOpen(false);
        
        setTimeout(() => {
          const navHeight = 80;
          const elementTop = element.offsetTop;
          
          window.scrollTo({
            top: elementTop - navHeight,
            behavior: 'smooth'
          });
        }, 100);
      }
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-light-surface/95 dark:bg-dark-surface/95 backdrop-blur-md border-b border-light-border/50 dark:border-dark-border/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2 cursor-pointer">
              <LogoText variant="full" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {siteConfig.navigation.main.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2 text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text dark:hover:text-gold transition-colors duration-0 relative group cursor-pointer rounded-lg hover:bg-light-border/50 dark:hover:bg-dark-border/50"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-light-text dark:bg-gold transition-all duration-300 group-hover:w-3/4"></span>
              </button>
            ))}
          </div>

          {/* Right Side - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <Button href="#contact" variant="primary" size="sm" className="cursor-pointer outline-none focus:outline-none focus:ring-0 !focus:ring-0 focus:ring-offset-0 active:outline-none">
              Get Started
            </Button>
          </div>

          {/* Mobile: Theme Toggle & Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={toggleMobileMenu}
              className="text-light-text dark:text-dark-text hover:text-light-text-secondary dark:hover:text-gold p-2 rounded-lg hover:bg-light-border/50 dark:hover:bg-dark-border/50 transition-colors duration-0 cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-light-surface/98 dark:bg-dark-surface/98 backdrop-blur-md border-t border-light-border/50 dark:border-dark-border/50"
          >
            <div className="px-4 py-4 space-y-1">
              {/* Navigation Links */}
              {siteConfig.navigation.main.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-light-text dark:text-dark-text hover:text-light-text-secondary dark:hover:text-gold block w-full text-left px-4 py-3 text-base font-medium transition-colors duration-0 cursor-pointer rounded-lg hover:bg-light-border/50 dark:hover:bg-dark-border/50"
                >
                  {item.name}
                </button>
              ))}
              
              {/* CTA Button */}
              <div className="pt-2">
                <Button 
                  href="#contact" 
                  variant="primary" 
                  size="sm" 
                  className="w-full justify-center cursor-pointer outline-none focus:outline-none focus:ring-0 !focus:ring-0 focus:ring-offset-0 active:outline-none"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
