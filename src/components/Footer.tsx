'use client';

import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '@/config/site';
import Logo from '@/components/Logo';
import { useTheme } from '@/contexts/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const sections = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Coaches", href: "#team" },
    { name: "Success Stories", href: "#testimonials" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative mt-24">
      {/* Clean divider between main content and footer */}
      <div className="absolute -top-16 left-0 right-0 h-16 bg-gradient-to-b from-transparent via-light-surface/40 dark:via-dark-surface/40 to-light-surface dark:to-dark-surface">
        {/* Main divider line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aspirae-teal dark:via-gold to-transparent z-10"></div>
        {/* Shadow layer - positioned above the line to cast upward */}
        <div 
          className="absolute bottom-[2px] left-0 right-0 h-[16px]"
          style={theme === 'light' 
            ? { background: 'linear-gradient(to right, transparent 0%, rgba(23, 139, 137, 1) 50%, transparent 100%)', filter: 'blur(14px)', opacity: 0.3 }
            : { background: 'linear-gradient(to right, transparent 0%, rgba(212, 175, 55, 1) 50%, transparent 100%)', filter: 'blur(14px)', opacity: 0.3 }
          }
        ></div>
      </div>
      
      {/* Main Footer Content */}
      <div className="relative bg-gradient-to-b from-light-bg via-light-surface/95 to-transparent backdrop-blur-sm dark:from-dark-bg dark:via-dark-bg/95">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-3">
              <div className="flex items-center space-x-3">
                <Logo size="lg" className="sm:w-12 sm:h-12 lg:w-16 lg:h-16" />
                <div>
                  <h3 className="text-xl font-bold text-light-text dark:text-dark-text">
                    {siteConfig.company.name}
                  </h3>
                  <p className="text-light-text-secondary dark:text-gold text-sm">
                    INNOVATION & EXCELLENCE
                  </p>
                </div>
              </div>
              <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm leading-relaxed max-w-sm">
                {siteConfig.company.description}
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-3">
              <h4 className="text-light-text dark:text-dark-text font-semibold text-base">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {sections.slice(0, 3).map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text dark:hover:text-gold transition-all duration-300 hover:translate-x-1 inline-block cursor-pointer"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div className="space-y-3">
              <h4 className="text-light-text dark:text-dark-text font-semibold text-base">
                Resources
              </h4>
              <ul className="space-y-2">
                {sections.slice(3).map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text dark:hover:text-gold transition-all duration-300 hover:translate-x-1 inline-block cursor-pointer"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright below Resources */}
          <div className="mt-10 md:mt-6 text-sm text-aspirae-teal dark:text-gold text-start">
            © {new Date().getFullYear()} {siteConfig.company.name}. All rights reserved.
          </div>

          {/* Contact Info Section */}
          <div className="mt-10 pt-10 relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aspirae-teal dark:via-gold to-transparent"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-light-text-muted dark:text-dark-text-muted">
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-aspirae-teal dark:text-gold" />
                <span>{siteConfig.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-aspirae-teal dark:text-gold" />
                <span>{siteConfig.contact.email}</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="text-aspirae-teal dark:text-gold mt-0.5" />
                <span>
                  {siteConfig.contact.address.street}<br />
                  {siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.zip}<br />
                  {siteConfig.contact.address.country}
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock size={16} className="text-aspirae-teal dark:text-gold mt-0.5" />
                <span>{siteConfig.contact.hours}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
