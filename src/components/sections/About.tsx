'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users, TrendingUp, Award, Sparkles } from 'lucide-react';
import { siteConfig } from '@/config/site';
import Card from '@/components/ui/Card';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Empathy First",
      description: "We believe in understanding your unique journey and challenges before providing guidance."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every coaching session is designed to deliver measurable progress and tangible outcomes."
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "We build lasting relationships and support networks that extend beyond individual sessions."
    },
    {
      icon: TrendingUp,
      title: "Continuous Growth",
      description: "We're committed to our own development to better serve your growth journey."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in coaching methodologies and client care."
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "We embrace cutting-edge techniques and creative solutions to solve complex challenges."
    }
  ];

  const stats = [
    { number: "500+", label: "Clients Served" },
    { number: "95%", label: "Success Rate" },
    { number: "50+", label: "Years Combined Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-deep-navy dark:text-dark-text mb-4 sm:mb-6">
            About Aspirae
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto leading-relaxed px-4">
            We're passionate about unlocking human potential and accelerating personal and professional growth through innovative coaching methodologies.
          </p>
        </motion.div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-deep-navy dark:text-dark-text mb-4 sm:mb-6">
              Our Story
            </h3>
            <div className="space-y-3 sm:space-y-4 text-gray-600 dark:text-dark-text-secondary leading-relaxed text-sm sm:text-base">
              <p>
                Founded in {siteConfig.company.founded}, Aspirae was born from a simple yet powerful belief: 
                that every individual possesses unlimited potential waiting to be unlocked.
              </p>
              <p>
                Our founders, experienced coaches and business leaders, recognized that traditional 
                approaches to personal and professional development often fell short of delivering 
                lasting transformation.
              </p>
              <p>
                Today, we've helped hundreds of individuals break through barriers, overcome limiting 
                beliefs, and achieve breakthrough results in their careers and personal lives.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-1 lg:order-2"
          >
            <div className="bg-gradient-to-br from-aspirae-teal to-bright-coral dark:from-wine-red-matte dark:to-gold-dark rounded-2xl p-6 sm:p-8 text-white shadow-xl">
              <h4 className="text-xl sm:text-2xl font-display font-bold mb-4 sm:mb-5">Why Choose Aspirae?</h4>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span>Certified coaches with proven track records</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span>Personalized approach tailored to your unique needs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span>Evidence-based methodologies that deliver results</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span>Ongoing support and accountability throughout your journey</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-sky-mist dark:bg-dark-sky-mist rounded-2xl p-6 sm:p-8 shadow-lg"
          >
            <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-5">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-aspirae-teal dark:bg-gold rounded-xl flex items-center justify-center shadow-md">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-deep-navy dark:text-dark-text">Our Mission</h3>
            </div>
            <p className="text-gray-700 dark:text-dark-text-secondary leading-relaxed text-sm sm:text-base">
              {siteConfig.company.mission}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-pale-sand dark:bg-dark-pale-sand rounded-2xl p-6 sm:p-8 shadow-lg"
          >
            <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-5">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-bright-coral dark:bg-wine-red-matte rounded-xl flex items-center justify-center shadow-md">
                <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-deep-navy dark:text-dark-text">Our Vision</h3>
            </div>
            <p className="text-gray-700 dark:text-dark-text-secondary leading-relaxed text-sm sm:text-base">
              {siteConfig.company.vision}
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-20"
        >
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-deep-navy dark:text-dark-text text-center mb-10 sm:mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full p-6 sm:p-8 text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-aspirae-teal/10 dark:bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5">
                    <value.icon className="w-6 h-6 sm:w-7 sm:h-8 text-aspirae-teal dark:text-gold" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-display font-bold text-deep-navy dark:text-dark-text mb-2 sm:mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 dark:text-dark-text-secondary leading-relaxed text-sm sm:text-base">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-deep-navy to-aspirae-teal dark:from-dark-surface dark:to-wine-red-matte rounded-2xl p-8 sm:p-12 text-white shadow-2xl"
        >
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-center mb-8 sm:mb-12">
            Our Impact in Numbers
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-200 dark:text-dark-text-muted text-xs sm:text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
