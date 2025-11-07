'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { siteConfig } from '@/config/site';
import Card from '@/components/ui/Card';
import { useTheme } from '@/contexts/ThemeContext';

const Testimonials = () => {
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

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 sm:w-5 sm:h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    ));
  };

  const { theme } = useTheme();

  const lightGradient = 'linear-gradient(to bottom, white 0%, #E0F7F5 25%, #FFE5E5 50%, #E0F7F5 75%, white 100%)';
  const darkGradient = 'linear-gradient(to bottom, #1A0F0F 0%, #2A1A1A 50%, #1A0F0F 100%)';

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24" style={{ background: theme === 'light' ? lightGradient : darkGradient }}>
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
            Success Stories
          </h2>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-dark-text-secondary max-w-4xl mx-auto leading-relaxed px-4">
            Hear from our clients about their transformative experiences and the incredible results they've achieved
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-16 sm:mb-20"
        >
          {siteConfig.testimonials.map((testimonial, index) => (
            <motion.div key={testimonial.id} variants={itemVariants}>
              <Card className="h-full p-8 sm:p-10 relative shadow-xl">
                {/* Quote Icon */}
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6 text-aspirae-teal/20 dark:text-luxury-gold/20">
                  <Quote className="w-8 h-8 sm:w-12 sm:h-12" />
                </div>

                <div className="h-full flex flex-col">
                  {/* Rating */}
                  <div className="flex items-center mb-3 sm:mb-4">
                    {renderStars(testimonial.rating)}
                    <span className="ml-2 text-xs sm:text-sm text-gray-500 dark:text-dark-text-muted">
                      {testimonial.rating}/5
                    </span>
                  </div>

                  {/* Testimonial Content */}
                  <div className="flex-grow mb-4 sm:mb-6">
                    <blockquote className="text-gray-700 dark:text-dark-text-secondary leading-relaxed italic text-sm sm:text-base">
                      "{testimonial.content}"
                    </blockquote>
                  </div>

                  {/* Client Info */}
                  <div className="mt-auto pt-3 sm:pt-4 border-t border-gray-100 dark:border-dark-border">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      {/* Client Photo Placeholder */}
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-aspirae-teal to-bright-coral dark:from-wine-red-matte dark:to-gold-dark rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xs sm:text-sm">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-deep-navy dark:text-dark-text text-sm sm:text-base">
                          {testimonial.name}
                        </h4>
                        <p className="text-aspirae-teal dark:text-gold text-xs sm:text-sm font-medium">
                          {testimonial.title}
                        </p>
                        <p className="text-gray-500 dark:text-dark-text-muted text-xs sm:text-sm">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
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
          <div className="bg-gradient-to-r from-deep-navy to-aspirae-teal dark:from-dark-surface dark:to-wine-red-matte rounded-2xl p-8 sm:p-10 text-white shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-display font-bold mb-4 sm:mb-6">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-gray-200 dark:text-dark-text-muted mb-6 sm:mb-8 max-w-3xl mx-auto text-base sm:text-lg px-4 leading-relaxed">
              Join hundreds of satisfied clients who have transformed their lives and careers with our coaching programs
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="inline-flex items-center justify-center bg-bright-coral hover:bg-coral-light text-white font-semibold py-3 px-8 rounded-lg transition-all duration-150 shadow-lg hover:shadow-xl text-base sm:text-lg cursor-pointer outline-none focus:outline-none focus:ring-0 !focus:ring-0 focus:ring-offset-0 active:outline-none"
              style={{ outline: 'none' }}
              onFocus={(e) => e.target.style.outline = 'none'}
              onClick={(e) => e.currentTarget.style.outline = 'none'}
            >
              Start Your Journey
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
