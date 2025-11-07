'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, ChevronDown } from 'lucide-react';
import { siteConfig } from '@/config/site';
import Button from '@/components/ui/Button';
import { useTheme } from '@/contexts/ThemeContext';

const AnimatedDots = ({ isVisible }: { isVisible: boolean }) => {
  if (!isVisible) return null;

  return (
    <div className="flex space-x-1 justify-center items-center">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className="w-2 h-2 bg-aspirae-teal dark:bg-gold rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            delay: index * 0.2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const serviceOptions = [
    { value: '', label: 'Select a service' },
    { value: 'coaching', label: 'Life Coaching' },
    { value: 'consulting', label: 'Business Consulting' },
    { value: 'training', label: 'Professional Training' },
    { value: 'other', label: 'Other' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServiceOpen(false);
      }
    };

    if (isServiceOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isServiceOpen]);

  const handleServiceSelect = (value: string) => {
    setFormData(prev => ({
      ...prev,
      service: value
    }));
    setIsServiceOpen(false);
  };

  const selectedServiceLabel = serviceOptions.find(opt => opt.value === formData.service)?.label || 'Select a service';

  const validateForm = () => {
    const newErrors: Record<string, boolean> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = true;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = true;
    }
    if (!formData.message.trim()) {
      newErrors.message = true;
    }
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length > 0) {
      setTimeout(() => {
        setErrors({});
      }, 1250);
    }
    
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form submitted (demo):', formData);
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
    
    setIsSubmitting(false);
  };

  const { theme } = useTheme();

  const lightGradient = 'linear-gradient(to bottom, white 0%, #E0F7F5 25%, #FFE5E5 50%, #E0F7F5 75%, white 100%)';
  const darkGradient = 'linear-gradient(to bottom, #1A0F0F 0%, #2A1A1A 50%, #1A0F0F 100%)';

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24" style={{ background: theme === 'light' ? lightGradient : darkGradient }}>
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
            {siteConfig.cta.contact.title}
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-dark-text-secondary max-w-4xl mx-auto leading-relaxed px-4">
            {siteConfig.cta.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-stretch">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 flex"
          >
            <div className="bg-white dark:bg-dark-card rounded-2xl p-8 sm:p-10 shadow-xl border border-gray-100 dark:border-dark-border w-full flex flex-col justify-center">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-deep-navy dark:text-dark-text mb-8">
                Send Us a Message
              </h3>
              
              <form onSubmit={handleSubmit} noValidate className="flex flex-col space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-3">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 sm:px-5 py-3 sm:py-4 border rounded-lg outline-none focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-aspirae-teal dark:focus:ring-gold/50 focus:!border-transparent transition-[ring] duration-200 bg-white dark:bg-dark-surface text-gray-900 dark:text-dark-text placeholder-gray-500 dark:placeholder-dark-text-muted text-base ${
                        errors.name ? 'border-red-500 bg-red-100 dark:bg-red-900/20' : 'border-gray-300 dark:border-gray-500'
                      }`}
                      style={{ outline: 'none' }}
                      onFocus={(e) => e.currentTarget.style.outline = 'none'}
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-3">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 sm:px-5 py-3 sm:py-4 border rounded-lg outline-none focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-aspirae-teal dark:focus:ring-gold/50 focus:!border-transparent transition-[ring] duration-200 bg-white dark:bg-dark-surface text-gray-900 dark:text-dark-text placeholder-gray-500 dark:placeholder-dark-text-muted text-base ${
                        errors.email ? 'border-red-500 bg-red-100 dark:bg-red-900/20' : 'border-gray-300 dark:border-gray-500'
                      }`}
                      style={{ outline: 'none' }}
                      onFocus={(e) => e.currentTarget.style.outline = 'none'}
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-300 dark:border-gray-500 rounded-lg outline-none focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-aspirae-teal dark:focus:ring-gold/50 focus:!border-transparent transition-[ring] duration-200 bg-white dark:bg-dark-surface text-gray-900 dark:text-dark-text placeholder-gray-500 dark:placeholder-dark-text-muted text-base"
                      style={{ outline: 'none' }}
                      onFocus={(e) => e.currentTarget.style.outline = 'none'}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-3">
                      Service Interest
                    </label>
                    <div className="relative" ref={dropdownRef}>
                      <button
                        type="button"
                        onClick={() => setIsServiceOpen(!isServiceOpen)}
                        onMouseDown={(e) => e.preventDefault()}
                        className={`w-full px-4 sm:px-5 py-3 sm:py-4 pr-10 border rounded-lg outline-none focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-aspirae-teal dark:focus:ring-gold/50 focus:!border-transparent active:outline-none transition-[ring,shadow] duration-200 bg-white dark:bg-dark-surface text-left text-base shadow-sm hover:shadow-md cursor-pointer border-gray-300 dark:border-gray-500 hover:ring-2 hover:ring-offset-0 hover:ring-aspirae-teal dark:hover:ring-gold/50 hover:!border-transparent active:hover:ring-2 active:hover:ring-offset-0 active:hover:ring-aspirae-teal dark:active:hover:ring-gold/50 active:hover:!border-transparent ${
                          formData.service ? 'text-gray-900 dark:text-dark-text' : 'text-gray-500 dark:text-dark-text-muted'
                        }`}
                        style={{ outline: 'none' }}
                        onFocus={(e) => e.currentTarget.style.outline = 'none'}
                      >
                        {selectedServiceLabel}
                      </button>
                      <ChevronDown 
                        className={`absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-dark-text-muted pointer-events-none transition-transform duration-200 ${
                          isServiceOpen ? 'rotate-180' : ''
                        }`}
                      />
                      {isServiceOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute z-50 w-full mt-2 bg-white dark:bg-dark-surface border border-gray-300 dark:border-gray-500 rounded-lg shadow-xl overflow-hidden"
                        >
                          {serviceOptions.map((option) => (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => handleServiceSelect(option.value)}
                              className={`w-full px-4 sm:px-5 py-3 sm:py-4 text-left text-base transition-colors duration-150 cursor-pointer ${
                                formData.service === option.value
                                  ? 'bg-aspirae-teal/10 dark:bg-gold/20 text-aspirae-teal dark:text-gold font-medium'
                                  : 'text-gray-900 dark:text-dark-text hover:bg-aspirae-teal/15 dark:hover:bg-gold/10 hover:text-aspirae-teal dark:hover:text-gold'
                              } ${
                                option.value === '' ? 'text-gray-500 dark:text-dark-text-muted hover:text-gray-700 dark:hover:text-dark-text' : ''
                              }`}
                            >
                              {option.label}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-3">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className={`w-full px-4 sm:px-5 py-3 sm:py-4 border rounded-lg outline-none focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-aspirae-teal dark:focus:ring-gold/50 focus:!border-transparent transition-[ring] duration-200 bg-white dark:bg-dark-surface text-gray-900 dark:text-dark-text placeholder-gray-500 dark:placeholder-dark-text-muted text-base resize-vertical ${
                      errors.message ? 'border-red-500 bg-red-100 dark:bg-red-900/20' : 'border-gray-300 dark:border-gray-500'
                    }`}
                    style={{ outline: 'none' }}
                    onFocus={(e) => e.currentTarget.style.outline = 'none'}
                    placeholder="Tell us about your goals and how we can help you..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                      className="flex items-center justify-center space-x-2 bg-aspirae-teal dark:bg-gold hover:bg-aspirae-teal-dark dark:hover:bg-gold-dark text-white font-semibold py-3 px-6 rounded-lg transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed w-full cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <AnimatedDots isVisible={true} />
                        <span className="ml-2">Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                  
                  {isSubmitting && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-sm text-gray-500 dark:text-gray-400"
                    >
                      Please wait while we process your message...
                    </motion.div>
                  )}
                </div>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 flex"
          >
            <div className="space-y-6 sm:space-y-8 w-full flex flex-col">
              {/* Contact Details */}
              <div className="bg-gradient-to-br from-aspirae-teal to-bright-coral dark:from-wine-red-matte dark:to-gold-dark rounded-2xl p-8 sm:p-10 text-white shadow-xl flex-1 flex flex-col">
                <h3 className="text-2xl sm:text-3xl font-display font-bold mb-6 sm:mb-8">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm opacity-90">{siteConfig.contact.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm opacity-90">{siteConfig.contact.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-sm opacity-90">
                        {siteConfig.contact.address.street}<br />
                        {siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.zip}<br />
                        {siteConfig.contact.address.country}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-sm opacity-90">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-sky-mist dark:bg-dark-sky-mist rounded-2xl p-8 sm:p-10 shadow-lg flex-1 flex flex-col">
                <h4 className="text-xl sm:text-2xl font-display font-bold text-deep-navy dark:text-dark-text mb-6">
                  Why Contact Us?
                </h4>
                <ul className="space-y-3 text-gray-700 dark:text-dark-text-secondary text-base sm:text-lg">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-aspirae-teal dark:bg-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>Free initial consultation to understand your needs</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-aspirae-teal dark:bg-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>Personalized coaching plans tailored to your goals</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-aspirae-teal dark:bg-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>Ongoing support and accountability throughout your journey</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-aspirae-teal dark:bg-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>Flexible scheduling to fit your busy lifestyle</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
