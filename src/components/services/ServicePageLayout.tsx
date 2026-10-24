import React from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, HelpCircle } from 'lucide-react';
import { Container } from '../layout/Container';
import { Breadcrumbs } from '../ui/Breadcrumbs';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { Accordion } from '../ui/Accordion';
import { ProjectCard } from '../portfolio/ProjectCard';
import { CTASection } from '../sections/CTASection';
import { ServiceItem } from '../../types';
import { projectsData } from '../../data/projects';
import { useDocumentTitle } from '../../lib/seo';

interface ServicePageLayoutProps {
  service: ServiceItem;
}

export const ServicePageLayout: React.FC<ServicePageLayoutProps> = ({ service }) => {
  useDocumentTitle({
    title: `${service.title} | AceSutra`,
    description: service.shortDescription,
  });

  // Find related capability demonstrations
  const relatedProjects = projectsData.filter((p) => {
    if (service.id === 'digital-marketing') return p.category === 'Marketing';
    if (service.id === 'web-development') return p.category === 'Web Development';
    if (service.id === 'branding-design') return p.category === 'Branding';
    if (service.id === 'software-development') return p.category === 'Software';
    if (service.id === 'mobile-app-development') return p.name.includes('Mobile');
    if (service.id === 'ai-automation') return p.category === 'AI & Automation';
    return true;
  }).slice(0, 2);

  const accordionFaqs = service.faqs.map((f, idx) => ({
    id: `faq-${idx}`,
    question: f.question,
    answer: f.answer,
  }));

  return (
    <div className="pt-28 pb-0">
      {/* 1. Service Hero & Breadcrumbs */}
      <section className="py-14 sm:py-20 bg-charcoal-900 border-b border-subtleBorder relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-orange/10 blur-[130px] rounded-full pointer-events-none" />

        <Container>
          <Breadcrumbs
            items={[
              { label: 'Services', to: '/#services' },
              { label: service.title },
            ]}
            className="mb-8"
          />

          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-orange/10 text-brand-orange border border-brand-orange/20">
              <span>{service.eyebrow}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              {service.title}
            </h1>

            <p className="text-lg sm:text-xl text-mutedGray leading-relaxed max-w-3xl">
              {service.fullDescription}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Discuss This Capability
              </Button>
              <Button
                href="#problem-solution"
                variant="secondary"
                size="lg"
              >
                See Solution Framework
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Problem & Solution Overview */}
      <section id="problem-solution" className="py-20 bg-charcoal-950 border-b border-subtleBorder">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* The Challenge */}
            <div className="p-8 rounded-3xl bg-charcoal-900 border border-subtleBorder flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <h3 className="text-xs uppercase font-bold tracking-wider text-rose-400">
                    The Business Challenge
                  </h3>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">
                  Why Standard Approaches Fall Short
                </h4>
                <p className="text-sm sm:text-base text-mutedGray leading-relaxed">
                  {service.problemStatement}
                </p>
              </div>
            </div>

            {/* The AceSutra Solution */}
            <div className="p-8 rounded-3xl bg-charcoal-900 border border-brand-orange/30 flex flex-col justify-between shadow-glow-orange">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-brand-orange/10 border border-brand-orange/20 text-brand-orange">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-xs uppercase font-bold tracking-wider text-brand-orange">
                    The AceSutra Solution
                  </h3>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">
                  Our Engineering & Strategic Approach
                </h4>
                <p className="text-sm sm:text-base text-mutedGray leading-relaxed">
                  {service.solutionOverview}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Detailed Capabilities */}
      <section className="py-20 lg:py-28 bg-charcoal-900 border-b border-subtleBorder">
        <Container>
          <SectionHeading
            eyebrow="SPECIFICATIONS"
            title="Core Service Capabilities"
            description="A breakdown of specific technical and strategic competencies included in our engagements."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {service.capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-charcoal-800/50 border border-subtleBorder hover:border-brand-orange/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
                  <h3 className="text-lg font-bold text-white">
                    {cap.title}
                  </h3>
                </div>
                <p className="text-sm text-mutedGray leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Benefits & Tangible Returns */}
      <section className="py-20 bg-charcoal-950 border-b border-subtleBorder">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="VALUE CREATION"
                title="Measurable Business Outcomes"
                description="We prioritize deliverables that directly support your enterprise valuation, revenue retention, and operational efficiency."
              />
            </div>

            <div className="lg:col-span-7 space-y-4">
              {service.benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-charcoal-900 border border-subtleBorder"
                >
                  <div className="p-1 rounded-full bg-emerald-500/10 text-emerald-400 mt-0.5 flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <p className="text-sm sm:text-base text-warmWhite font-medium leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Delivery Process */}
      <section className="py-20 lg:py-28 bg-charcoal-900 border-b border-subtleBorder">
        <Container>
          <SectionHeading
            eyebrow="DELIVERY CADENCE"
            title="How We Execute This Service"
            description="From initial architectural scoping to production rollout and optimization."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-charcoal-800/40 border border-subtleBorder flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-sm font-bold px-2 py-0.5 rounded bg-brand-orange/10 border border-brand-orange/20 text-brand-orange mb-4 inline-block">
                    {step.step}
                  </span>
                  <h3 className="text-base font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-mutedGray leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Related Capability Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20 bg-charcoal-950 border-b border-subtleBorder">
          <Container>
            <div className="flex items-center justify-between mb-12">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-brand-orange block mb-1">
                  CASE SPECIFICATIONS
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Related Architecture Prototypes
                </h2>
              </div>
              <Button to="/work" variant="outline" size="sm">
                View All Work &rarr;
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map((proj) => (
                <ProjectCard key={proj.id} project={proj} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 7. FAQs */}
      {service.faqs.length > 0 && (
        <section className="py-20 lg:py-24 bg-charcoal-900 border-b border-subtleBorder">
          <Container size="narrow">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-orange/10 text-brand-orange border border-brand-orange/20 mb-3">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>FREQUENTLY ASKED QUESTIONS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Common Questions About {service.title}
              </h2>
            </div>

            <Accordion items={accordionFaqs} />
          </Container>
        </section>
      )}

      {/* 8. Conversion CTA */}
      <CTASection
        title={`Ready to Advance Your ${service.badge}?`}
        description="Let's review your current challenges, discuss architectural possibilities, and map out a practical timeline for your organization."
      />
    </div>
  );
};
