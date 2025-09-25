import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from './Header';
import HeroSection from './HeroSection';
import ValueHighlights from './ValueHighlights';
import AboutSection from './AboutSection';
import ServicesGrid from './ServicesGrid';
import WhyChooseUs from "./WhyChooseUs";
import CaseStudies from "./CaseStudies";
import TestimonialsSection from "./TestimonialsSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import BusinessMarketingSection from "./BusinessMarketingSection";
import FAQSection from "./FAQSection";
import EnhancedChatbotWidget from "./chatbot/EnhancedChatbotWidget";
const AppLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Header />
      


      <main>
        <HeroSection />
        <ValueHighlights />
        <section id="about">
          <AboutSection />
        </section>
        <section id="services">
          <ServicesGrid />
        </section>
        <BusinessMarketingSection />
        <WhyChooseUs />
        <section id="cases">
          <CaseStudies />
        </section>
        <TestimonialsSection />
        <section id="faq">
          <FAQSection />
        </section>
        <ContactSection />
      </main>
      <Footer />
      <EnhancedChatbotWidget />
    </div>
  );
};

export default AppLayout;