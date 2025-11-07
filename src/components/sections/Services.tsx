'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { useTheme } from '@/contexts/ThemeContext';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const { theme } = useTheme();

  const lightGradient = 'linear-gradient(to bottom, white 0%, #E0F7F5 25%, #FFE5E5 50%, #E0F7F5 75%, white 100%)';
  const darkGradient = 'linear-gradient(to bottom, #1A0F0F 0%, #2A1A1A 50%, #1A0F0F 100%)';

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24" style={{ background: theme === 'light' ? lightGradient : darkGradient }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-deep-navy dark:text-dark-text mb-6 sm:mb-8">
            Our Coaching Services
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-dark-text-secondary max-w-4xl mx-auto leading-relaxed px-4">
            Choose the coaching program that aligns with your goals and start your transformation today
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 mb-16 sm:mb-20"
        >
          {siteConfig.services.map((service, index) => (
            <motion.div key={service.id} variants={itemVariants}>
              <Card className="h-full p-8 sm:p-10 shadow-xl">
                <div className="h-full flex flex-col">
                  {/* Service Header */}
                  <div className="mb-6 sm:mb-8">
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-deep-navy dark:text-dark-text mb-3">
                      {service.title}
                    </h3>
                    <p className="text-aspirae-teal dark:text-luxury-gold font-semibold text-lg sm:text-xl mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-gray-600 dark:text-dark-text-secondary leading-relaxed text-base sm:text-lg">
                      {service.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="flex-grow mb-6 sm:mb-8">
                    <ul className="space-y-3 sm:space-y-4">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3 sm:space-x-4">
                          <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-aspirae-teal dark:bg-luxury-gold rounded-full flex items-center justify-center mt-0.5 shadow-md">
                            <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                          </div>
                          <span className="text-gray-700 dark:text-dark-text-secondary text-sm sm:text-base leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Service Details */}
                  <div className="mt-auto space-y-4 mb-6">
                    <div className="flex justify-between items-center text-sm sm:text-base pb-3 border-b border-gray-100 dark:border-dark-border">
                      <span className="text-gray-500 dark:text-dark-text-muted font-medium">Starting at:</span>
                      <span className="font-bold text-deep-navy dark:text-dark-text text-lg">{service.price}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm sm:text-base">
                      <span className="text-gray-500 dark:text-dark-text-muted font-medium">Duration:</span>
                      <span className="font-bold text-deep-navy dark:text-dark-text">{service.duration}</span>
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <Button
                    href="#contact"
                    variant="secondary"
                    size="md"
                    className="w-full group text-sm sm:text-base outline-none focus:outline-none focus:ring-0 !focus:ring-0 focus:ring-offset-0 active:outline-none"
                  >
                    {service.cta}
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-0" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-white dark:bg-dark-card rounded-2xl p-8 sm:p-10 shadow-xl border border-gray-100 dark:border-dark-border">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-deep-navy dark:text-dark-text mb-4 sm:mb-6">
              {siteConfig.cta.services.title}
            </h3>
            <p className="text-gray-600 dark:text-dark-text-secondary mb-6 sm:mb-8 max-w-3xl mx-auto text-base sm:text-lg px-4 leading-relaxed">
              {siteConfig.cta.services.subtitle}
            </p>
            <Button
              href="#contact"
              variant="primary"
              size="lg"
              className="text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 outline-none focus:outline-none focus:ring-0 !focus:ring-0 focus:ring-offset-0 active:outline-none"
            >
              {siteConfig.cta.services.button}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
