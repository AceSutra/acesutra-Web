import React from 'react';
import { ArrowRight, Layers } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { ServiceCard } from '../services/ServiceCard';
import { Button } from '../ui/Button';
import { servicesData } from '../../data/services';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-charcoal-950 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-orange/5 blur-3xl rounded-full pointer-events-none" />

      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            eyebrow="OUR CAPABILITIES"
            title="Everything You Need to Grow Digitally."
            description="We bridge the gap between marketing strategy and technical engineering, providing specialized execution under one cohesive partnership."
          />

          <div className="flex-shrink-0">
            <Button
              to="/contact"
              variant="outline"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Discuss Your Project
            </Button>
          </div>
        </div>

        {/* 7 Services Grid with Editorial Variety */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Top 3 Primary Disciplines */}
          {servicesData.slice(0, 3).map((service, idx) => (
            <ServiceCard key={service.id} service={service} featured={idx === 1} />
          ))}

          {/* Next 4 Technical & Automation Disciplines */}
          {servicesData.slice(3).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Integrated Solution Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-charcoal-900 border border-subtleBorder flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-brand-orange/10 border border-brand-orange/20 text-brand-orange">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                Need an end-to-end combination of Strategy, Branding & Software?
              </h4>
              <p className="text-xs sm:text-sm text-mutedGray mt-0.5">
                We structure integrated cross-functional engagements tailored to your roadmap.
              </p>
            </div>
          </div>

          <Button
            to="/contact"
            variant="primary"
            size="sm"
            className="flex-shrink-0"
          >
            Request Custom Scope
          </Button>
        </div>
      </Container>
    </section>
  );
};
