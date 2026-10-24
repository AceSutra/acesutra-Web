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
      <section className="py-16 sm:py-20 bg-charcoal-900 border-b border-subtleBorder relative overflow-hidden">
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-brand-orange/10 blur-[130px] rounded-full pointer-events-none" />

        <Container>
          <Breadcrumbs items={[{ label: 'Work & Capabilities' }]} className="mb-8" />

          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brand-orange/10 text-brand-orange border border-brand-orange/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SELECTED CAPABILITIES & ARCHITECTURE BENCHMARKS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Work That Moves Ideas Forward.
            </h1>

            <p className="text-lg sm:text-xl text-mutedGray leading-relaxed max-w-3xl">
              A curated collection of digital experiences, architectural prototypes, and visual identity systems illustrating how we bridge strategy, creativity, and engineering.
            </p>

            <div className="pt-2">
              <div className="p-4 rounded-xl bg-charcoal-800/60 border border-subtleBorder text-xs text-mutedGray max-w-2xl flex items-start gap-3">
                <Layers className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Note on Transparency:</strong> These flagship case specifications represent AceSutra's verified engineering, design, and growth frameworks. Client-confidential engagements are sanitized to protect proprietary client IP.
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Portfolio Grid with Interactive Filters */}
      <section className="py-20 bg-charcoal-950 border-b border-subtleBorder">
        <Container>
          <ProjectGrid projects={projectsData} showFilters={true} />
        </Container>
      </section>

      <CTASection />
    </div>
  );
};
