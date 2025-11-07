/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Foreground Palette
        'deep-navy': '#1C2541',
        'aspirae-teal': '#1FA2A0',
        'aspirae-teal-dark': '#178B89',
        'bright-coral': '#FF6B6B',
        'soft-white': '#F8F9FA',
        'light-coral': '#FFE5E5',
        'light-teal': '#E0F7F5',
        
        // Enhanced Light Mode Colors (complementing wine red & gold dark theme)
        'light-bg': '#FFFFFF', // Pure white background
        'light-surface': '#F8F9FA', // Very light gray surface
        'light-card': '#FFFFFF', // White card background
        'light-text': '#1A1A1A', // Near black text for maximum readability
        'light-text-secondary': '#4A5568', // Dark gray secondary text
        'light-text-muted': '#718096', // Medium gray muted text
        'light-border': '#E2E8F0', // Light gray borders
        'light-accent': '#D4AF37', // Gold accent (same as dark mode)
        'light-accent-secondary': '#F4E4BC', // Light gold secondary
        
        // Header and Navigation Colors
        'header-bg': '#2D3748', // Dark gray header (darker for better contrast)
        'header-text': '#FFFFFF', // White text on header
        'header-border': '#4A5568', // Darker border for header
        
        // Background Palette
        'sky-mist': '#E5F6F6',
        'pale-sand': '#FAF5EF',
        
        // Additional colors
        'navy-dark': '#0F172A',
        'teal-light': '#4FD1C7',
        'coral-light': '#FF8E8E',
        
        // Enhanced Dark mode colors with wine red and gold theme
        'dark-bg': '#1A0F0F', // Deep matte wine red background
        'dark-surface': '#2A1A1A', // Lighter matte wine red surface
        'dark-card': '#3A2525', // Card background in matte wine red
        'dark-text': '#F8FAFC', // White text
        'dark-text-secondary': '#E2E8F0', // Light gray text
        'dark-text-muted': '#CBD5E1', // Muted text
        'dark-border': '#4A2A2A', // Border in matte wine red
        'dark-accent': '#D4AF37', // Gold accent
        'dark-accent-secondary': '#F4E4BC', // Light gold for secondary accents
        
        // Dark mode background variants with wine red theme
        'dark-sky-mist': '#1A0F0F', // Deep matte wine red
        'dark-pale-sand': '#2A1A1A', // Lighter matte wine red
        
        // Wine Red and Gold Theme Colors
        'wine-red': '#722F37', // Main wine red
        'wine-red-light': '#8B3A43', // Lighter wine red
        'wine-red-dark': '#5A1F26', // Darker wine red
        'wine-red-matte': '#6B2A32', // Matte wine red
        'wine-red-fade': '#8B4A52', // Fading wine red for gradients
        
        'gold': '#D4AF37', // Main gold
        'gold-light': '#F4E4BC', // Light gold
        'gold-dark': '#B8860B', // Dark gold
        'gold-accent': '#FFD700', // Bright gold for highlights
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
