import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../layout/Container';

export const WhyChooseSection: React.FC = () => {
  const differentiators = [
    {
      num: '01',
      title: 'Zero Templates. 100% Bespoke.',
      stat: '100%',
      statLabel: 'Custom Architecture',
      desc: 'We never reuse generic SaaS themes. Every layout, shader, and token is custom-forged for your brand equity.',
    },
    {
      num: '02',
      title: 'Sub-Second Speed & 99+ Perf.',
      stat: '< 0.8s',
      statLabel: 'Time to Interactive',
      desc: 'Engineered with React 19, Three.js, and edge networks for instant load times and perfect Core Web Vitals.',
    },
    {
      num: '03',
      title: 'Senior Principals Only.',
      stat: '0',
      statLabel: 'Junior Handoffs',
      desc: 'You work directly with senior software architects and creative directors who design and ship your platform.',
    },
    {
      num: '04',
      title: 'Total Code & IP Ownership.',
      stat: '100%',
      statLabel: 'Turnkey IP Transfer',
      desc: 'Full intellectual property rights to all Git repositories, Figma files, and cloud primitives upon delivery.',
    },
  ];

  return (
    <section className="py-24 lg:py-36 bg-transparent relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-blue/10 blur-[180px] rounded-full pointer-events-none" />

      <Container>
        <div className="space-y-4 max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-900 border border-white/10 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
            THE STANDARD
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-[-0.03em] leading-[1.02] font-display uppercase">
            The Engine of Difference. <br />
            <span className="gradient-text-blue">Engineered for Scale.</span>
          </h2>
        </div>

        {/* 4 Strong Visual Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((diff, idx) => (
            <motion.div
              key={diff.num}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl glass-panel hover:glass-panel-elevated border border-white/5 hover:border-brand-cyan/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
              data-cursor="STANDARD"
            >
              <div>
                <span className="text-xs font-mono text-cyan-400 font-bold block mb-6">
                  // {diff.num}
                </span>

                <div className="mb-4">
                  <span className="block text-3xl sm:text-4xl font-extrabold font-mono text-white group-hover:text-cyan-300 transition-colors">
                    {diff.stat}
                  </span>
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-mutedGray mt-0.5">
                    {diff.statLabel}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 font-display">
                  {diff.title}
                </h3>

                <p className="text-xs text-mutedGray leading-relaxed">
                  {diff.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono uppercase text-mutedGray">
                <span>Verified Metric</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
