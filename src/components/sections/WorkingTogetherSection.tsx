import React from 'react';
import { Calendar, ShieldCheck, FileCheck, Users } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';

export const WorkingTogetherSection: React.FC = () => {
  const standards = [
    {
      title: 'Direct Strategic Communication',
      desc: 'No communication layers or junior account managers playing telephone. You collaborate directly with experienced strategists and engineers who build your solution.',
      icon: <Users className="w-5 h-5 text-brand-orange" />,
    },
    {
      title: 'Weekly Sprint Cadence',
      desc: 'Structured bi-weekly reviews with live demo links, actionable roadmaps, and clear milestone acceptance criteria so there are never surprises.',
      icon: <Calendar className="w-5 h-5 text-brand-orange" />,
    },
    {
      title: 'Total Code & Asset Ownership',
      desc: 'You maintain 100% intellectual property ownership of all source code, Figma design systems, domain configurations, and marketing creatives.',
      icon: <ShieldCheck className="w-5 h-5 text-brand-orange" />,
    },
    {
      title: 'Transparent Deliverable Contracts',
      desc: 'Clear scope boundaries, transparent pricing schedules, and measurable acceptance tests defined before project kickoff.',
      icon: <FileCheck className="w-5 h-5 text-brand-orange" />,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-charcoal-900 border-t border-subtleBorder relative">
      <Container>
        <SectionHeading
          eyebrow="CLIENT PARTNERSHIP"
          title="What Working With AceSutra Looks Like."
          description="We believe lasting digital partnerships are founded on radical clarity, direct accountability, and measurable technical execution."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {standards.map((std, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-charcoal-800/60 border border-subtleBorder hover:border-brand-orange/40 transition-colors flex items-start gap-5"
            >
              <div className="p-3.5 rounded-2xl bg-charcoal-900 border border-subtleBorder flex-shrink-0 text-brand-orange">
                {std.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {std.title}
                </h3>
                <p className="text-sm text-mutedGray leading-relaxed">
                  {std.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership quote highlight */}
        <div className="mt-12 max-w-3xl mx-auto p-6 rounded-2xl bg-charcoal-800/30 border border-brand-orange/20 text-center">
          <p className="text-sm text-warmWhite/90 italic leading-relaxed">
            "Our benchmark for success is not merely deploying a website or launching an ad campaign; it is building a dependable, scalable digital engine that actively compounds your business value."
          </p>
          <span className="block mt-2 text-xs font-semibold uppercase tracking-wider text-brand-orange">
            — The AceSutra Engagement Standard
          </span>
        </div>
      </Container>
    </section>
  );
};
