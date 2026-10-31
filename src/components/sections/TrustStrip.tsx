import React from 'react';
import { Compass, Lightbulb, Cpu, Handshake } from 'lucide-react';
import { Container } from '../layout/Container';

export const TrustStrip: React.FC = () => {
  const valuePillars = [
    {
      index: '01',
      icon: <Compass className="w-5 h-5 text-cyan-400" />,
      title: 'Strategy-Led Execution',
      desc: 'Deep discovery and unit economics before recommending a line of code or ad campaign.',
    },
    {
      index: '02',
      icon: <Lightbulb className="w-5 h-5 text-cyan-400" />,
      title: 'Creative Problem-Solving',
      desc: 'Bespoke brand identities and engaging digital experiences that command attention.',
    },
    {
      index: '03',
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      title: 'Technology Built for Scale',
      desc: 'Clean React 19 codebases, Three.js WebGL, and resilient cloud architectures.',
    },
    {
      index: '04',
      icon: <Handshake className="w-5 h-5 text-cyan-400" />,
      title: 'Transparent Partnership',
      desc: 'Honest communication, direct principal access, and 100% intellectual property transfer.',
    },
  ];

  return (
    <section id="trust-strip" className="py-14 border-y border-white/10 bg-charcoal-950/90 relative z-20 backdrop-blur-md">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {valuePillars.map((pillar) => (
            <div
              key={pillar.index}
              className="group p-5 rounded-2xl glass-panel hover:glass-panel-elevated border border-white/5 hover:border-white/20 transition-all duration-300 flex items-start gap-4"
              data-cursor="CORE"
            >
              <div className="p-3 rounded-xl bg-charcoal-900 border border-white/10 group-hover:border-cyan-400/50 group-hover:bg-cyan-500/10 transition-colors flex-shrink-0">
                {pillar.icon}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-cyan-400 font-bold">// {pillar.index}</span>
                  <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-xs text-mutedGray leading-relaxed">
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
