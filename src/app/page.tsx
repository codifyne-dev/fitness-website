import React from 'react';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Team from '@/components/sections/Team';
import Testimonials from '@/components/sections/Testimonials';
import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';
import ScrollPopup from '@/components/ScrollPopup';
import BackgroundMusic from '@/components/BackgroundMusic';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Team />
      <Testimonials />
      <Blog />
      <Contact />
      <ScrollPopup />
      <BackgroundMusic />
    </main>
  );
}
