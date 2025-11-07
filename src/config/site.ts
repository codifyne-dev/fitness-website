export const siteConfig = {
  // Company Information
  company: {
    name: "Aspirae",
    tagline: "Aspire & Elevate",
    description: "Empowering career and personal growth through transformative coaching experiences.",
    founded: "2024",
    mission: "To unlock human potential and accelerate personal and professional growth through innovative coaching methodologies.",
    vision: "A world where every individual has access to the tools and guidance needed to achieve their highest aspirations.",
  },

  // Contact Information
  contact: {
    email: "hello@aspirae.com",
    phone: "+1 (555) 123-4567",
    address: {
      street: "123 Growth Street",
      city: "Innovation City",
      state: "CA",
      zip: "90210",
      country: "USA"
    },
    hours: "Monday - Friday: 9:00 AM - 6:00 PM PST",
  },

  // Navigation
  navigation: {
    main: [
      { name: "Home", href: "#hero" },
      { name: "About", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Coaches", href: "#team" },
      { name: "Success Stories", href: "#testimonials" },
      { name: "Blog", href: "#blog" },
      { name: "Contact", href: "#contact" },
    ],
    footer: {
      company: [
        { name: "About Us", href: "#about" },
      ],
      services: [
        { name: "Career Coaching", href: "#services" },
        { name: "Life Coaching", href: "#services" },
        { name: "Leadership", href: "#services" },
        { name: "Personal Growth", href: "#services" },
      ],
      resources: [
        { name: "Blog", href: "/blog" },
        { name: "Free Resources", href: "/resources" },
        { name: "Success Stories", href: "/success-stories" },
        { name: "FAQ", href: "/faq" },
      ],
      support: [
        { name: "Contact Us", href: "/contact" },
        { name: "Help Center", href: "/help" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
      ],
    },
  },

  services: [
    {
      id: "career-coaching",
      title: "Career Coaching",
      subtitle: "Navigate Your Professional Journey",
      description: "Transform your career trajectory with personalized guidance from certified career coaches. Discover your strengths, overcome obstacles, and achieve your professional goals.",
      features: [
        "Career path assessment and planning",
        "Resume and interview preparation",
        "Skill development strategies",
        "Networking and personal branding",
        "Salary negotiation guidance",
        "Work-life balance optimization"
      ],
      price: "From $150/session",
      duration: "3-6 month programs",
      image: "/images/services/career-coaching.jpg",
      cta: "Start Your Career Journey"
    },
    {
      id: "life-coaching",
      title: "Life Coaching",
      subtitle: "Design Your Ideal Life",
      description: "Create lasting positive change in all areas of your life. Our life coaches help you identify your values, set meaningful goals, and develop actionable strategies for transformation.",
      features: [
        "Life purpose and values clarification",
        "Goal setting and achievement",
        "Habit formation and breaking",
        "Stress management and wellness",
        "Relationship improvement",
        "Personal development planning"
      ],
      price: "From $120/session",
      duration: "3-12 month programs",
      image: "/images/services/life-coaching.jpg",
      cta: "Transform Your Life"
    },
    {
      id: "leadership-development",
      title: "Leadership Development",
      subtitle: "Lead with Confidence and Impact",
      description: "Develop the essential skills and mindset needed to lead teams effectively, inspire others, and drive organizational success.",
      features: [
        "Leadership style assessment",
        "Communication and influence skills",
        "Team building and management",
        "Strategic thinking and decision making",
        "Emotional intelligence development",
        "Change management leadership"
      ],
      price: "From $200/session",
      duration: "6-12 month programs",
      image: "/images/services/leadership.jpg",
      cta: "Develop Your Leadership"
    },
    {
      id: "personal-growth",
      title: "Personal Growth",
      subtitle: "Unlock Your Full Potential",
      description: "Accelerate your personal development journey with evidence-based coaching techniques designed to help you overcome limiting beliefs and achieve breakthrough results.",
      features: [
        "Mindset transformation",
        "Confidence building",
        "Time management mastery",
        "Productivity optimization",
        "Emotional resilience",
        "Self-awareness development"
      ],
      price: "From $100/session",
      duration: "3-9 month programs",
      image: "/images/services/personal-growth.jpg",
      cta: "Grow Personally"
    }
  ],

  // Team/Coaches
  team: [
    {
      id: "sarah-johnson",
      name: "Sarah Johnson",
      title: "Senior Career Coach",
      bio: "With over 15 years of experience in corporate HR and career development, Sarah specializes in helping mid-career professionals navigate transitions and accelerate their growth.",
      expertise: ["Career Transitions", "Executive Coaching", "Leadership Development"],
      education: "MBA, Stanford Graduate School of Business",
      certifications: ["ICF Professional Certified Coach", "SHRM-SCP"],
      image: "/images/team/sarah-johnson.jpg",
      linkedin: "",
      email: "sarah@aspirae.com"
    },
    {
      id: "michael-chen",
      name: "Michael Chen",
      title: "Life Transformation Coach",
      bio: "Michael combines Eastern wisdom with modern psychology to help clients create meaningful change in their personal and professional lives.",
      expertise: ["Mindfulness", "Personal Development", "Work-Life Balance"],
      education: "MA in Psychology, UCLA",
      certifications: ["ICF Associate Certified Coach", "Mindfulness-Based Stress Reduction"],
      image: "/images/team/michael-chen.jpg",
      linkedin: "",
      email: "michael@aspirae.com"
    },
    {
      id: "emily-rodriguez",
      name: "Emily Rodriguez",
      title: "Leadership Development Specialist",
      bio: "Emily has spent 12 years developing leaders in Fortune 500 companies, focusing on emotional intelligence and strategic thinking skills.",
      expertise: ["Executive Leadership", "Team Dynamics", "Strategic Planning"],
      education: "PhD in Organizational Psychology, Harvard",
      certifications: ["ICF Master Certified Coach", "Hogan Assessment Certified"],
      image: "/images/team/emily-rodriguez.jpg",
      linkedin: "",
      email: "emily@aspirae.com"
    }
  ],

  // Testimonials
  testimonials: [
    {
      id: "testimonial-1",
      name: "Jennifer Martinez",
      title: "Marketing Director",
      company: "TechCorp",
      content: "Working with Aspirae transformed my career trajectory. In just 6 months, I went from feeling stuck to landing my dream role with a 40% salary increase.",
      rating: 5,
      image: "/images/testimonials/jennifer-martinez.jpg"
    },
    {
      id: "testimonial-2",
      name: "David Thompson",
      title: "Software Engineer",
      company: "InnovateTech",
      content: "The life coaching sessions helped me overcome imposter syndrome and develop confidence I never knew I had. I'm now leading projects and mentoring junior developers.",
      rating: 5,
      image: "/images/testimonials/david-thompson.jpg"
    },
    {
      id: "testimonial-3",
      name: "Lisa Park",
      title: "Product Manager",
      company: "GrowthStartup",
      content: "Emily's leadership coaching was exactly what I needed to step into my new management role. Her insights on team dynamics and communication were invaluable.",
      rating: 5,
      image: "/images/testimonials/lisa-park.jpg"
    }
  ],

  blog: {
    featured: [
      {
        id: "blog-1",
        title: "5 Signs You're Ready for a Career Change",
        excerpt: "Discover the key indicators that suggest it's time to take the next step in your professional journey.",
        author: "Sarah Johnson",
        date: "2024-01-15",
        readTime: "5 min read",
        category: "Career Development",
        image: "/images/blog/career-change.jpg"
      },
      {
        id: "blog-2",
        title: "Building Resilience: The Key to Long-term Success",
        excerpt: "Learn how developing emotional resilience can help you overcome challenges and achieve your goals.",
        author: "Michael Chen",
        date: "2024-01-10",
        readTime: "7 min read",
        category: "Personal Growth",
        image: "/images/blog/resilience.jpg"
      },
      {
        id: "blog-3",
        title: "Leadership Lessons from Successful Entrepreneurs",
        excerpt: "Extract valuable insights from the leadership styles of today's most successful business leaders.",
        author: "Emily Rodriguez",
        date: "2024-01-05",
        readTime: "6 min read",
        category: "Leadership",
        image: "/images/blog/leadership-lessons.jpg"
      }
    ]
  },

  // SEO Meta Information
  seo: {
    title: "Aspirae - Career & Life Coaching | Aspire & Elevate",
    description: "Transform your career and life with personalized coaching from certified professionals. Discover your potential, overcome obstacles, and achieve breakthrough results.",
    keywords: "career coaching, life coaching, personal development, leadership development, professional growth, life transformation",
    author: "Aspirae",
    ogImage: "/images/og-image.jpg",
    twitterCard: "summary_large_image" as const,
  },

  // Call-to-Action Sections
  cta: {
    hero: {
      subtitle: "Transform your career and life with personalized coaching from certified professionals",
      primaryButton: "Start Your Journey",
      secondaryButton: "Learn More"
    },
    services: {
      title: "Ready to Transform Your Life?",
      subtitle: "Choose the coaching program that aligns with your goals and start your transformation today",
      button: "Get Started"
    },
    contact: {
      title: "Let's Start Your Transformation",
      subtitle: "Schedule a free consultation to discuss your goals and discover how we can help you achieve them"
    }
  }
}
