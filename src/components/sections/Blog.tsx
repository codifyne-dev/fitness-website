'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import Card from '@/components/ui/Card';

const Blog = () => {
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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-dark-bg">
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
            Latest Insights & Tips
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-dark-text-secondary max-w-4xl mx-auto leading-relaxed px-4">
            Discover valuable insights, practical tips, and inspiring stories to accelerate your personal and professional growth
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-16 sm:mb-20 items-stretch"
        >
          {siteConfig.blog.featured.map((post, index) => (
            <motion.div key={post.id} variants={itemVariants} className="h-full">
              <Card className="h-full overflow-hidden shadow-xl flex flex-col">
                {/* Blog Post Image Placeholder */}
                <div className="w-full h-32 sm:h-40 bg-gradient-to-br from-aspirae-teal to-bright-coral dark:from-wine-red-matte dark:to-gold-dark flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg sm:text-2xl font-bold">
                    {post.title.split(' ').slice(0, 2).map(word => word[0]).join('')}
                  </span>
                </div>

                <div className="p-4 sm:p-5 flex flex-col flex-grow">
                  {/* Category */}
                  <div className="mb-2 sm:mb-3">
                    <span className="inline-block px-2 sm:px-3 py-1 bg-light-text-secondary/10 dark:bg-gold/20 text-light-text-secondary dark:text-gold text-xs rounded-full font-medium">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-display font-bold text-deep-navy dark:text-dark-text mb-2 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 dark:text-dark-text-secondary text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="mb-3 space-y-1">
                    <div className="flex items-center text-xs text-gray-500 dark:text-dark-text-muted">
                      <Calendar className="w-3 h-3 mr-2" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500 dark:text-dark-text-muted">
                      <Clock className="w-3 h-3 mr-2" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-dark-text-muted">
                      By <span className="text-light-text-secondary dark:text-gold font-medium">{post.author}</span>
                    </div>
                  </div>

                  {/* Read More Link */}
                  <div className="pt-3 border-t border-gray-100 dark:border-dark-border mt-auto">
                    <button
                      onClick={(e) => e.preventDefault()}
                      className="inline-flex items-center text-light-text-secondary dark:text-gold hover:text-light-text dark:hover:text-gold-light font-medium text-xs sm:text-sm transition-colors duration-0 group cursor-pointer"
                    >
                      Read More
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-0" />
                    </button>
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
          <div className="bg-white dark:bg-dark-card rounded-2xl p-8 sm:p-10 shadow-xl border border-gray-100 dark:border-dark-border">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-deep-navy dark:text-dark-text mb-4 sm:mb-6">
              Stay Updated with Our Latest Content
            </h3>
            <p className="text-gray-600 dark:text-dark-text-secondary mb-6 sm:mb-8 max-w-3xl mx-auto text-base sm:text-lg px-4 leading-relaxed">
              Get weekly insights, tips, and strategies delivered directly to your inbox to support your growth journey
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full sm:flex-1 px-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-light-text dark:focus:ring-gold focus:border-transparent bg-white dark:bg-dark-surface text-gray-900 dark:text-dark-text placeholder-gray-500 dark:placeholder-dark-text-muted text-sm sm:text-base"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="w-full sm:w-auto px-6 py-3 bg-header-bg dark:bg-gold text-white font-semibold rounded-lg hover:bg-light-text dark:hover:bg-gold-light transition-all duration-150 shadow-lg hover:shadow-xl text-base sm:text-lg cursor-pointer"
              >
                Subscribe
              </motion.button>
            </div>
            <p className="text-xs text-gray-500 dark:text-dark-text-muted mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
