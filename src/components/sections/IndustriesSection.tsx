import React from 'react';
import { Rocket, Briefcase, ShoppingBag, GraduationCap, HeartPulse, Building2, Palmtree, Factory } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';

export const IndustriesSection: React.FC = () => {
  const industries = [
    {
      name: 'Startups & Emerging Tech',
      focus: 'Rapid MVP engineering, product landing pages, and initial go-to-market acquisition loops.',
      icon: <Rocket className="w-5 h-5 text-cyan-400" />,
    },
    {
      name: 'Professional & B2B Services',
      focus: 'High-trust corporate flagships, client portals, and inbound lead qualification engines.',
      icon: <Briefcase className="w-5 h-5 text-cyan-400" />,
    },
    {
      name: 'Retail & E-Commerce Brands',
      focus: 'Headless storefronts, optimized checkout flows, and multi-channel performance advertising.',
      icon: <ShoppingBag className="w-5 h-5 text-cyan-400" />,
    },
    {
      name: 'Healthcare & Wellness Providers',
      focus: 'Accessible patient portals, appointment scheduling, and localized search visibility.',
      icon: <HeartPulse className="w-5 h-5 text-cyan-400" />,
    },
    {
      name: 'Education & Training Platforms',
      focus: 'Interactive learning interfaces, course enrollment funnels, and student engagement tools.',
      icon: <GraduationCap className="w-5 h-5 text-cyan-400" />,
    },
    {
      name: 'Real Estate & Property Groups',
      focus: 'Interactive property showcases, virtual tour integrations, and targeted buyer acquisition.',
      icon: <Building2 className="w-5 h-5 text-cyan-400" />,
    },
    {
      name: 'Travel, Leisure & Hospitality',
      focus: 'Direct booking engines, high-resolution visual storytelling, and local SEO dominance.',
      icon: <Palmtree className="w-5 h-5 text-cyan-400" />,
    },
    {
      name: 'Manufacturing & Industrial',
      focus: 'Digital product catalogs, distributor extranets, and business process automation.',
      icon: <Factory className="w-5 h-5 text-cyan-400" />,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-charcoal-950 border-t border-subtleBorder relative">
      <Container>
        <SectionHeading
          eyebrow="ADAPTABLE SOLUTIONS"
          title="Empowering Diverse Industries to Thrive Digitally."
          description="Every sector has unique customer expectations and operational realities. We tailor digital architectures and marketing funnels to your specific market dynamics."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-charcoal-900 border border-subtleBorder hover:border-brand-cyan/40 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="p-3 rounded-xl bg-charcoal-800 border border-subtleBorder w-fit mb-4 group-hover:border-brand-cyan/40 transition-colors">
                  {ind.icon}
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {ind.name}
                </h3>
                <p className="mt-2 text-xs text-mutedGray leading-relaxed">
                  {ind.focus}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-subtleBorder/50 flex items-center justify-between text-[11px] text-cyan-400 font-medium">
                <span>Custom Architecture</span>
                <span>&rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
