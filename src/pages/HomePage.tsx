import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { TrustStrip } from '../components/sections/TrustStrip';
import { AboutSection } from '../components/sections/AboutSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { WhyChooseSection } from '../components/sections/WhyChooseSection';
import { ProcessSection } from '../components/sections/ProcessSection';
import { PortfolioSection } from '../components/sections/PortfolioSection';
import { IndustriesSection } from '../components/sections/IndustriesSection';
import { WorkingTogetherSection } from '../components/sections/WorkingTogetherSection';
import { InsightsSection } from '../components/sections/InsightsSection';
import { CTASection } from '../components/sections/CTASection';
import { useDocumentTitle } from '../lib/seo';

export const HomePage: React.FC = () => {
  useDocumentTitle({
    title: 'AceSutra — Where Strategy Meets Creativity and Technology',
    description:
      'AceSutra helps ambitious businesses build stronger brands, create powerful digital experiences, and accelerate growth through smart marketing and modern technology.',
  });

  return (
    <div className="relative overflow-hidden">
      <HeroSection />
      <TrustStrip />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <ProcessSection />
      <PortfolioSection />
      <IndustriesSection />
      <WorkingTogetherSection />
      <InsightsSection />
      <CTASection />
    </div>
  );
};
