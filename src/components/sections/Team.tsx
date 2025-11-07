'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Award, GraduationCap } from 'lucide-react';
import { siteConfig } from '@/config/site';
import Card from '@/components/ui/Card';

const Team = () => {
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

  return (
    <section id="team" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-dark-bg">
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
            Meet Our Expert Coaches
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-dark-text-secondary max-w-4xl mx-auto leading-relaxed px-4">
            Our certified coaches bring years of experience and proven methodologies to help you achieve breakthrough results
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 items-stretch"
        >
          {siteConfig.team.map((member, index) => (
            <motion.div key={member.id} variants={itemVariants}>
              <Card className="h-full p-6 sm:p-8 shadow-xl">
                <div className="h-full flex flex-col">
                  {/* Member Photo Placeholder */}
                  <div className="w-full h-40 sm:h-52 bg-gradient-to-br from-aspirae-teal to-bright-coral dark:from-wine-red-matte dark:to-gold-dark rounded-xl mb-6 sm:mb-8 flex items-center justify-center shadow-lg">
                    <span className="text-white text-3xl sm:text-5xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>

                  {/* Member Info */}
                  <div className="flex-grow">
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-deep-navy dark:text-dark-text mb-3">
                      {member.name}
                    </h3>
                    <p className="text-aspirae-teal dark:text-luxury-gold font-semibold text-lg sm:text-xl mb-4 sm:mb-5">
                      {member.title}
                    </p>
                    <p className="text-gray-600 dark:text-dark-text-secondary text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                      {member.bio}
                    </p>

                    {/* Expertise */}
                    <div className="mb-4 sm:mb-6">
                      <h4 className="text-xs sm:text-sm font-semibold text-deep-navy dark:text-dark-text mb-2 sm:mb-3 flex items-center">
                        <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-aspirae-teal dark:text-luxury-gold" />
                        Expertise
                      </h4>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {member.expertise.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-2 sm:px-3 py-1 bg-aspirae-teal/10 dark:bg-luxury-gold/20 text-aspirae-teal dark:text-luxury-gold text-xs rounded-full font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Education */}
                    <div className="mb-4 sm:mb-6">
                      <h4 className="text-xs sm:text-sm font-semibold text-deep-navy dark:text-dark-text mb-2 sm:mb-3 flex items-center">
                        <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-aspirae-teal dark:text-luxury-gold" />
                        Education
                      </h4>
                      <p className="text-gray-600 dark:text-dark-text-secondary text-xs sm:text-sm">
                        {member.education}
                      </p>
                    </div>
                  </div>

                  {/* Contact Links */}
                  <div className="mt-auto pt-4 border-t border-gray-100 dark:border-dark-border">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="w-full inline-flex items-center justify-center space-x-2 bg-aspirae-teal dark:bg-gold hover:bg-aspirae-teal-dark dark:hover:bg-gold-dark text-white px-4 py-2.5 rounded-lg transition-colors duration-150 font-medium text-sm cursor-pointer"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="w-4 h-4" />
                        <span>Contact</span>
                      </a>
                    )}
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
          className="text-center mt-12 sm:mt-16"
        >
          <div className="bg-white dark:bg-dark-card rounded-2xl p-8 sm:p-10 shadow-xl border border-gray-100 dark:border-dark-border">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-deep-navy dark:text-dark-text mb-4 sm:mb-6">
              Ready to Work with Our Team?
            </h3>
            <p className="text-gray-600 dark:text-dark-text-secondary mb-6 sm:mb-8 max-w-3xl mx-auto text-base sm:text-lg px-4 leading-relaxed">
              Schedule a free consultation with one of our expert coaches and discover how we can help you achieve your goals.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="inline-flex items-center justify-center bg-aspirae-teal dark:bg-gold hover:bg-aspirae-teal-dark dark:hover:bg-gold-dark text-white font-semibold py-3 px-8 rounded-lg transition-all duration-150 text-base sm:text-lg cursor-pointer shadow-lg hover:shadow-xl outline-none focus:outline-none focus:ring-0 !focus:ring-0 focus:ring-offset-0 active:outline-none"
              style={{ outline: 'none' }}
              onFocus={(e) => e.target.style.outline = 'none'}
              onClick={(e) => e.currentTarget.style.outline = 'none'}
            >
              Schedule Consultation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
