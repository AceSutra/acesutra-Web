import React from 'react';
import { Search, Compass, PenTool, Rocket, LineChart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from '../layout/Container';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Discover',
      tagline: 'Deep Context & Opportunity Audit',
      description: 'We explore your business model, customer touchpoints, competitive landscape, and digital bottlenecks to establish clear baseline objectives.',
      icon: <Search className="w-5 h-5 text-cyan-400" />,
    },
    {
      step: '02',
      title: 'Strategize',
      tagline: 'Roadmap & Architecture Blueprint',
      description: 'We define the technical stack, campaign messaging, exact deliverables, sprint schedules, and verifiable criteria for success.',
      icon: <Compass className="w-5 h-5 text-cyan-400" />,
    },
    {
      step: '03',
      title: 'Design & Build',
      tagline: 'Agile Craft & Engineering',
      description: 'We build the brand assets, interactive prototypes, performant frontend code, or automated pipelines with transparent milestone check-ins.',
      icon: <PenTool className="w-5 h-5 text-cyan-400" />,
    },
    {
      step: '04',
      title: 'Launch',
      tagline: 'Rigorous QA & Production Deployment',
      description: 'Full cross-browser testing, SEO audit, security hardening, latency profiling, and seamless production cutover with zero downtime.',
      icon: <Rocket className="w-5 h-5 text-cyan-400" />,
    },
    {
      step: '05',
      title: 'Improve',
      tagline: 'Telemetry & Continuous Evolution',
      description: 'We analyze live user interactions, conversion cohorts, and operational feedback to identify incremental optimizations that drive ongoing gains.',
      icon: <LineChart className="w-5 h-5 text-cyan-400" />,
    },
  ];

  return (
    <section className="py-28 lg:py-36 bg-charcoal-950 border-t border-white/10 relative overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[400px] bg-brand-cyan/10 blur-[170px] rounded-full pointer-events-none" />

      <Container>
        <div className="space-y-4 max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-charcoal-900 border border-white/10 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
            05 // EXECUTION METHODOLOGY
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-display uppercase">
            From Blueprint to <br />
            <span className="gradient-text-blue">Market Dominance.</span>
          </h2>

          <p className="text-base sm:text-lg text-mutedGray max-w-2xl leading-relaxed">
            A structured, collaborative execution model engineered to eliminate ambiguity and deliver measurable business outcomes on schedule.
          </p>
        </div>

        {/* Connected Horizontal Timeline for Desktops, Vertical on Mobile */}
        <div className="relative">
          {/* Subtle connection line for larger screens */}
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-0.5 bg-gradient-to-r from-cyan-400/20 via-brand-blue to-cyan-400/20 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-6 relative z-10">
            {steps.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex flex-col justify-between rounded-3xl glass-panel hover:glass-panel-elevated border border-white/5 hover:border-brand-cyan/40 p-6 transition-all duration-300 shadow-xl hover:-translate-y-1"
                data-cursor="STEP"
              >
                <div>
                  {/* Step Header with Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-charcoal-900 border border-white/10 group-hover:border-brand-cyan/40 group-hover:bg-cyan-500/10 flex items-center justify-center transition-colors shadow-inner">
                      {item.icon}
                    </div>
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/25 text-cyan-400">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors font-display">
                    {item.title}
                  </h3>

                  <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400/90 mt-1 block">
                    {item.tagline}
                  </span>

                  <p className="mt-3 text-xs text-mutedGray leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-mutedGray">
                  <span>Milestone Verified</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
