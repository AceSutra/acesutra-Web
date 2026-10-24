import React from 'react';
import { Compass, Lightbulb, Cpu, BarChart3 } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';

export const WhyChooseSection: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Strategy First',
      headline: 'Diagnosis before prescription.',
      desc: 'We investigate your market realities, audience objections, and financial unit economics before writing a line of code or deploying ad spend. No wasted motion.',
      icon: <Compass className="w-6 h-6 text-cyan-400" />,
    },
    {
      num: '02',
      title: 'Creative Thinking',
      headline: 'Distinctive, memorable craft.',
      desc: 'Generic agency templates dilute customer trust. We create customized visual systems and engaging copy that establish authority and resonate with high-value clients.',
      icon: <Lightbulb className="w-6 h-6 text-cyan-400" />,
    },
    {
      num: '03',
      title: 'Technology That Scales',
      headline: 'Maintainable, clean engineering.',
      desc: 'We reject bloated page builders in favor of modern, type-safe React, clean CSS, and dependable cloud primitives built to survive traffic surges and long-term evolution.',
      icon: <Cpu className="w-6 h-6 text-cyan-400" />,
    },
    {
      num: '04',
      title: 'Measurable Progress',
      headline: 'Evidence-guided iteration.',
      desc: 'We monitor concrete business outcomes—speed metrics, conversion paths, and cost per acquisition—using verifiable telemetry to inform continuous improvements.',
      icon: <BarChart3 className="w-6 h-6 text-cyan-400" />,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-charcoal-900 relative">
      <Container>
        <SectionHeading
          eyebrow="THE ACESUTRA ADVANTAGE"
          title="Built Around Your Business Goals."
          description="The difference between simply checking off a task list and engineering an enduring competitive advantage lies in disciplined execution."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="group rounded-2xl bg-charcoal-800/50 border border-subtleBorder hover:border-brand-cyan/40 hover:bg-charcoal-800/80 p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-charcoal-900 border border-subtleBorder group-hover:border-brand-cyan/40 transition-colors">
                    {pillar.icon}
                  </div>
                  <span className="font-mono text-2xl font-bold text-mutedGray/30 group-hover:text-cyan-400/40 transition-colors">
                    {pillar.num}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {pillar.title}
                </h3>

                <p className="mt-1 text-xs font-semibold text-cyan-400/80">
                  {pillar.headline}
                </p>

                <p className="mt-4 text-sm text-mutedGray leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-subtleBorder/40">
                <span className="text-[11px] font-mono uppercase tracking-wider text-mutedGray/70">
                  Principal Focus
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
