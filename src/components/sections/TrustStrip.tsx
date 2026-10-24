import React from 'react';
import { Compass, Lightbulb, Cpu, Handshake } from 'lucide-react';
import { Container } from '../layout/Container';

export const TrustStrip: React.FC = () => {
  const valuePillars = [
    {
      icon: <Compass className="w-5 h-5 text-cyan-400" />,
      title: 'Strategy-Led Execution',
      desc: 'Understanding business context before recommending a line of code or ad campaign.',
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-cyan-400" />,
      title: 'Creative Problem-Solving',
      desc: 'Distinctive brand identities and engaging digital experiences that stand out.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      title: 'Technology Built for Scale',
      desc: 'Clean React codebases, robust APIs, and resilient cloud architectures.',
    },
    {
      icon: <Handshake className="w-5 h-5 text-cyan-400" />,
      title: 'Transparent Partnership',
      desc: 'Honest communication, shared accountability, and long-term business alignment.',
    },
  ];

  return (
    <section id="trust-strip" className="py-12 border-y border-subtleBorder bg-charcoal-950/80">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {valuePillars.map((pillar, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-charcoal-800 border border-subtleBorder flex-shrink-0">
                {pillar.icon}
              </div>
              <div>
                <h4 className="text-sm font-bold text-white tracking-tight">
                  {pillar.title}
                </h4>
                <p className="mt-1 text-xs text-mutedGray leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
