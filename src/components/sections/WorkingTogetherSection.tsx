import React from 'react';
import { Calendar, ShieldCheck, FileCheck, Users, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from '../layout/Container';

export const WorkingTogetherSection: React.FC = () => {
  const standards = [
    {
      index: '01',
      title: 'Direct Strategic Communication',
      desc: 'No account managers playing telephone. You collaborate directly with experienced software engineers, designers, and growth architects.',
      icon: <Users className="w-5 h-5 text-cyan-400" />,
    },
    {
      index: '02',
      title: 'Bi-Weekly Sprint Cadence',
      desc: 'Structured sprint demos with live staging links, asynchronous Loom walk-throughs, and clear milestone sign-offs.',
      icon: <Calendar className="w-5 h-5 text-cyan-400" />,
    },
    {
      index: '03',
      title: 'Total Code & Asset Ownership',
      desc: 'You maintain 100% intellectual property ownership of all source repositories, Figma component libraries, and cloud configurations.',
      icon: <ShieldCheck className="w-5 h-5 text-cyan-400" />,
    },
    {
      index: '04',
      title: 'Transparent Deliverable Contracts',
      desc: 'Clear scope boundaries, predictable billing schedules, and verifiable performance criteria defined upfront.',
      icon: <FileCheck className="w-5 h-5 text-cyan-400" />,
    },
  ];

  return (
    <section className="py-28 lg:py-36 bg-charcoal-950 border-t border-white/10 relative overflow-hidden">
      <Container>
        <div className="space-y-4 max-w-3xl mb-16 text-center mx-auto">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-charcoal-900 border border-white/10 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
            07 // ENGAGEMENT RIGOR
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-display uppercase">
            What Working With <br />
            <span className="gradient-text-blue">AceSutra Feels Like.</span>
          </h2>

          <p className="text-base sm:text-lg text-mutedGray max-w-2xl mx-auto leading-relaxed">
            We believe lasting digital partnerships are founded on radical clarity, senior accountability, and measurable technical execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {standards.map((std, idx) => (
            <motion.div
              key={std.index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl glass-panel hover:glass-panel-elevated border border-white/5 hover:border-brand-cyan/40 transition-all duration-300 flex items-start gap-5 group shadow-xl"
              data-cursor="PARTNER"
            >
              <div className="p-3.5 rounded-2xl bg-charcoal-900 border border-white/10 group-hover:border-cyan-400/50 group-hover:bg-cyan-500/10 transition-colors flex-shrink-0 text-cyan-400">
                {std.icon}
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-cyan-400 font-bold block">// {std.index}</span>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors font-display">
                  {std.title}
                </h3>
                <p className="text-sm text-mutedGray leading-relaxed">
                  {std.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partnership quote highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-14 max-w-3xl mx-auto p-8 rounded-3xl glass-panel-elevated border border-brand-cyan/30 text-center relative overflow-hidden shadow-2xl"
        >
          <Quote className="w-8 h-8 text-cyan-400/30 mx-auto mb-3" />
          <p className="text-base sm:text-lg text-white font-medium italic leading-relaxed">
            "Our benchmark for success is not merely deploying a website or launching an ad campaign; it is building a dependable, scalable digital engine that actively compounds your business value."
          </p>
          <span className="block mt-4 text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
            // THE ACESUTRA ENGAGEMENT STANDARD
          </span>
        </motion.div>
      </Container>
    </section>
  );
};
