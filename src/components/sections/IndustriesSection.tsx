import React from 'react';
import { Rocket, Briefcase, ShoppingBag, GraduationCap, HeartPulse, Building2, Palmtree, Factory, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from '../layout/Container';

export const IndustriesSection: React.FC = () => {
  const industries = [
    {
      name: 'Startups & Emerging Tech',
      focus: 'Rapid MVP engineering, high-converting launchpads, and initial go-to-market acquisition loops.',
      icon: <Rocket className="w-5 h-5 text-cyan-400" />,
    },
    {
      name: 'Professional & B2B Services',
      focus: 'Executive digital flagships, secure client portals, and inbound enterprise lead qualification engines.',
      icon: <Briefcase className="w-5 h-5 text-cyan-400" />,
    },
    {
      name: 'Retail & E-Commerce Brands',
      focus: 'Headless storefronts, frictionless checkout flows, and high-ROI multi-channel performance advertising.',
      icon: <ShoppingBag className="w-5 h-5 text-cyan-400" />,
    },
    {
      name: 'Healthcare & Wellness',
      focus: 'Accessible patient portals, appointment scheduling, and localized semantic search visibility.',
      icon: <HeartPulse className="w-5 h-5 text-cyan-400" />,
    },
    {
      name: 'Education & Knowledge Platforms',
      focus: 'Interactive learning interfaces, course enrollment funnels, and real-time student engagement tools.',
      icon: <GraduationCap className="w-5 h-5 text-cyan-400" />,
    },
    {
      name: 'Real Estate & Interior Studios',
      focus: 'Architectural interactive showcases, virtual tour integrations, and targeted affluent buyer acquisition.',
      icon: <Building2 className="w-5 h-5 text-cyan-400" />,
    },
    {
      name: 'Travel, Leisure & Hospitality',
      focus: 'Direct booking engines, high-resolution spatial storytelling, and localized market dominance.',
      icon: <Palmtree className="w-5 h-5 text-cyan-400" />,
    },
    {
      name: 'Manufacturing & Enterprise Ops',
      focus: 'Digital product catalogs, distributor extranets, and automated business process pipelines.',
      icon: <Factory className="w-5 h-5 text-cyan-400" />,
    },
  ];

  return (
    <section className="py-28 lg:py-36 bg-charcoal-900 border-t border-white/10 relative overflow-hidden">
      <Container>
        <div className="space-y-4 max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-charcoal-800 border border-white/10 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
            06 // INDUSTRY CONVERGENCE
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-display uppercase">
            Specialized Solutions for <br />
            <span className="gradient-text-blue">Ambitious Sectors.</span>
          </h2>

          <p className="text-base sm:text-lg text-mutedGray max-w-2xl leading-relaxed">
            Every vertical requires deliberate architectural patterns. We tailor digital architectures and performance funnels to your specific market dynamics.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-6 rounded-2xl glass-panel hover:glass-panel-elevated border border-white/5 hover:border-brand-cyan/40 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:-translate-y-1"
              data-cursor="SECTOR"
            >
              <div>
                <div className="p-3 rounded-xl bg-charcoal-900 border border-white/10 w-fit mb-5 group-hover:border-brand-cyan/40 group-hover:bg-cyan-500/10 transition-colors">
                  {ind.icon}
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors font-display">
                  {ind.name}
                </h3>
                <p className="mt-2 text-xs text-mutedGray leading-relaxed">
                  {ind.focus}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-cyan-400">
                <span>Domain Architecture</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
