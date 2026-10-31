import React from 'react';
import { Sparkles, Layers } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { ProjectGrid } from '../components/portfolio/ProjectGrid';
import { CTASection } from '../components/sections/CTASection';
import { projectsData } from '../data/projects';
import { useDocumentTitle } from '../lib/seo';

export const WorkPage: React.FC = () => {
  useDocumentTitle({
    title: 'Selected Capabilities & Architecture Showcase',
    description:
      'Explore representative digital products, high-converting web storefronts, brand identity systems, and custom software architectures engineered by AceSutra.',
  });

  return (
    <div className="pt-28 pb-0">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-transparent border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-brand-cyan/10 blur-[130px] rounded-full pointer-events-none" />

        <Container>
          <Breadcrumbs items={[{ label: 'Work & Capabilities' }]} className="mb-8" />

          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest bg-charcoal-900/90 text-cyan-400 border border-white/10 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SELECTED BENCHMARKS & ARCHITECTURE</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-[-0.04em] leading-[0.98] font-display uppercase">
              Proven Outcomes. <br />
              <span className="gradient-text-blue">Bespoke Craft.</span>
            </h1>

            <p className="text-lg sm:text-xl text-mutedGray max-w-2xl leading-relaxed">
              Curated digital flagships, high-velocity web platforms, and brand identities engineered for market leaders.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl glass-panel border border-white/10 text-xs text-mutedGray">
                <Layers className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Verified Studio Frameworks • Proprietary Client IP Sanitized</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Portfolio Grid with Interactive Filters */}
      <section className="py-20 bg-transparent border-b border-white/5">
        <Container>
          <ProjectGrid projects={projectsData} showFilters={true} />
        </Container>
      </section>

      <CTASection />
    </div>
  );
};
