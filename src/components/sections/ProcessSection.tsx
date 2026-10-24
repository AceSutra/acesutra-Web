import React from 'react';
import { Search, Compass, PenTool, Rocket, LineChart } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Discover',
      tagline: 'Deep Context & Opportunity Audit',
      description: 'We explore your business model, customer touchpoints, competitive landscape, and digital bottlenecks to establish clear baseline objectives.',
      icon: <Search className="w-5 h-5 text-brand-orange" />,
    },
    {
      step: '02',
      title: 'Strategize',
      tagline: 'Roadmap & Architecture Blueprint',
      description: 'We define the technical stack, campaign messaging, exact deliverables, sprint schedules, and verifiable criteria for success.',
      icon: <Compass className="w-5 h-5 text-brand-orange" />,
    },
    {
      step: '03',
      title: 'Design & Build',
      tagline: 'Agile Craft & Engineering',
      description: 'We build the brand assets, interactive prototypes, performant frontend code, or automated pipelines with transparent milestone check-ins.',
      icon: <PenTool className="w-5 h-5 text-brand-orange" />,
    },
    {
      step: '04',
      title: 'Launch',
      tagline: 'Rigorous QA & Production Deployment',
      description: 'Full cross-browser testing, SEO audit, security hardening, latency profiling, and seamless production cutover with zero downtime.',
      icon: <Rocket className="w-5 h-5 text-brand-orange" />,
    },
    {
      step: '05',
      title: 'Improve',
      tagline: 'Telemetry & Continuous Evolution',
      description: 'We analyze live user interactions, conversion cohorts, and operational feedback to identify incremental optimizations that drive ongoing gains.',
      icon: <LineChart className="w-5 h-5 text-brand-orange" />,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-charcoal-950 border-t border-subtleBorder relative overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="OUR METHODOLOGY"
          title="From First Conversation to Real-World Impact."
          description="A structured, collaborative execution model engineered to eliminate ambiguity and deliver measurable business outcomes on schedule."
          align="center"
          className="mb-16"
        />

        {/* Connected Horizontal Timeline for Desktops, Vertical on Mobile */}
        <div className="relative">
          {/* Subtle connection line for larger screens */}
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-0.5 bg-gradient-to-r from-brand-orange/20 via-brand-orange to-brand-orange/20 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 relative z-10">
            {steps.map((item) => (
              <div
                key={item.step}
                className="group flex flex-col rounded-2xl bg-charcoal-900/90 border border-subtleBorder hover:border-brand-orange/50 p-6 transition-all duration-300 shadow-card-dark"
              >
                {/* Step Header with Number & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-charcoal-800 border border-subtleBorder group-hover:border-brand-orange/40 flex items-center justify-center transition-colors shadow-inner">
                    {item.icon}
                  </div>
                  <span className="font-mono text-sm font-bold px-2 py-0.5 rounded bg-brand-orange/10 border border-brand-orange/20 text-brand-orange">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-brand-orange transition-colors">
                  {item.title}
                </h3>

                <span className="text-[11px] font-semibold text-brand-orange/80 mt-1">
                  {item.tagline}
                </span>

                <p className="mt-3 text-xs text-mutedGray leading-relaxed flex-1">
                  {item.description}
                </p>

                <div className="mt-4 pt-3 border-t border-subtleBorder/40 flex items-center justify-between text-[10px] text-mutedGray">
                  <span>Milestone Verified</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
