import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { PortfolioSection } from '../components/sections/PortfolioSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { WhyChooseSection } from '../components/sections/WhyChooseSection';
import { InsightsSection } from '../components/sections/InsightsSection';
import { CTASection } from '../components/sections/CTASection';
import { useDocumentTitle } from '../lib/seo';

export const HomePage: React.FC = () => {
  useDocumentTitle({
    title: 'AceSutra — Creative Technology & Digital Solutions Studio',
    description:
      'Where Strategy Meets Radical Creativity. AceSutra engineers bespoke digital flagships, brand identities, and high-velocity web platforms for market-defining leaders.',
  });

  return (
    <div className="relative overflow-hidden">
      {/* 1. Immersive 3D WebGL Hero */}
      <HeroSection />

      {/* 2. The Manifesto & Visual Monolith */}
      <AboutSection />

      {/* 3. Primary Visual Centerpiece: Selected Work */}
      <PortfolioSection />

      {/* 4. Core Disciplines & Interactive Visual Deck */}
      <ServicesSection />

      {/* 5. The Standard: 4 Visual Differentiators */}
      <WhyChooseSection />

      {/* 6. Curated Perspectives */}
      <InsightsSection />

      {/* 7. Final Cinematic Call to Action */}
      <CTASection />
    </div>
  );
};
