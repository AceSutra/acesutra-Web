import React from 'react';
import { Target, Compass, Sparkles, Code2, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from '../components/layout/Container';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { CTASection } from '../components/sections/CTASection';
import { useDocumentTitle } from '../lib/seo';

export const AboutPage: React.FC = () => {
  useDocumentTitle({
    title: 'About Us — Creative Technology & Digital Solutions Studio',
    description:
      'Where Strategy Meets Radical Creativity. Learn how AceSutra builds bespoke digital flagships, brand identities, and high-velocity web platforms for market leaders.',
  });

  const coreValues = [
    {
      title: 'Intellectual Honesty',
      desc: 'We prioritize measurable client business growth over easy sales. If a tech stack or strategy is sub-optimal, we tell you upfront.',
      icon: <Compass className="w-5 h-5 text-cyan-400" />,
      tag: 'NO FLUFF',
    },
    {
      title: 'Bespoke Craft Over Templates',
      desc: 'Zero generic templates or themes. Every layout, shader, and token is custom-forged for your distinct brand equity.',
      icon: <Sparkles className="w-5 h-5 text-cyan-400" />,
      tag: '100% CUSTOM',
    },
    {
      title: 'Type-Safe Architecture',
      desc: 'Modular, high-performance TypeScript and Three.js engineered for sub-second speeds and long-term scalability.',
      icon: <Code2 className="w-5 h-5 text-cyan-400" />,
      tag: 'SUB-SECOND TTI',
    },
    {
      title: 'Direct Principal Accountability',
      desc: 'Zero junior handoffs or intermediary account layers. Work directly with senior software architects and creative directors.',
      icon: <Shield className="w-5 h-5 text-cyan-400" />,
      tag: '0 JUNIOR HANDOFFS',
    },
  ];

  const trifecta = [
    {
      step: '01',
      title: 'Strategy',
      subtitle: 'Market Clarity & Positioning',
      desc: 'Defining customer economics, whitespace differentiation, and high-conversion funnels before writing a line of code.',
      image: '/assets/art/fluid_core.jpg',
    },
    {
      step: '02',
      title: 'Creativity',
      subtitle: 'Unmistakable Brand Systems',
      desc: 'Crafting editorial typography, bespoke 3D WebGL assets, and visceral visual identities that demand authority.',
      image: '/assets/art/kinetic_monolith.jpg',
    },
    {
      step: '03',
      title: 'Technology',
      subtitle: 'High-Velocity Engineering',
      desc: 'Sub-second page speeds, type-safe architectures, automated cloud pipelines, and 100% turnkey IP transfer.',
      image: '/assets/art/architectural_wave.jpg',
    },
  ];

  return (
    <div className="pt-28 pb-0">
      {/* 1. Hero & Studio Purpose */}
      <section className="py-16 sm:py-24 bg-transparent relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[350px] bg-brand-cyan/15 blur-[140px] rounded-full pointer-events-none" />

        <Container>
          <Breadcrumbs items={[{ label: 'About Us' }]} className="mb-8" />

          <div className="max-w-4xl space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-charcoal-900/90 border border-white/10 text-cyan-400 text-xs font-mono uppercase tracking-widest backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE STUDIO PURPOSE</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-[-0.04em] leading-[0.98] font-display uppercase"
            >
              We engineer <br />
              <span className="gradient-text-blue">digital authority</span> <br />
              for market leaders.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-mutedGray font-medium max-w-2xl leading-relaxed"
            >
              AceSutra connects radical creative direction with type-safe software engineering. We replace slow agency bloat with senior-led digital craftsmanship.
            </motion.p>

            {/* Performance Metric Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 max-w-3xl"
            >
              <div className="p-3.5 rounded-xl glass-panel border border-white/5">
                <span className="text-2xl font-mono font-bold text-cyan-400 block">&lt; 0.8s</span>
                <span className="text-[10px] font-mono text-mutedGray uppercase tracking-wider block">Time to Interactive</span>
              </div>
              <div className="p-3.5 rounded-xl glass-panel border border-white/5">
                <span className="text-2xl font-mono font-bold text-emerald-400 block">99+</span>
                <span className="text-[10px] font-mono text-mutedGray uppercase tracking-wider block">Lighthouse Perf</span>
              </div>
              <div className="p-3.5 rounded-xl glass-panel border border-white/5">
                <span className="text-2xl font-mono font-bold text-blue-400 block">100%</span>
                <span className="text-[10px] font-mono text-mutedGray uppercase tracking-wider block">Turnkey IP Ownership</span>
              </div>
              <div className="p-3.5 rounded-xl glass-panel border border-white/5">
                <span className="text-2xl font-mono font-bold text-purple-400 block">0</span>
                <span className="text-[10px] font-mono text-mutedGray uppercase tracking-wider block">Junior Handoffs</span>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 2. Mission & Vision */}
      <section className="py-20 bg-charcoal-950/40 backdrop-blur-sm border-y border-white/5">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="p-8 sm:p-10 rounded-3xl glass-panel hover:glass-panel-elevated border border-white/10 transition-all">
              <div className="p-3 rounded-xl bg-charcoal-800 border border-white/10 w-fit mb-5 text-cyan-400">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block mb-2">// OUR MISSION</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 font-display uppercase">Equipping Market Leaders</h2>
              <p className="text-base text-mutedGray leading-relaxed">
                To engineer digital experiences and custom software that drive measurable revenue, captivate audiences, and outpace market competition.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl glass-panel hover:glass-panel-elevated border border-cyan-400/30 shadow-[0_0_30px_rgba(0,194,255,0.1)] transition-all">
              <div className="p-3 rounded-xl bg-charcoal-800 border border-white/10 w-fit mb-5 text-cyan-400">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block mb-2">// OUR VISION</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 font-display uppercase">The Benchmark in Craft</h2>
              <p className="text-base text-mutedGray leading-relaxed">
                To be the global reference standard for integrated digital studios—where radical visual aesthetics meet rock-solid engineering reliability.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. The Trifecta: Visual Deck */}
      <section className="py-24 bg-transparent border-b border-white/5">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-900 border border-white/10 text-cyan-400 text-xs font-mono uppercase tracking-widest">
              <span>THREE CORE PILLARS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-[-0.03em] font-display uppercase">
              Where Strategy Meets Execution
            </h2>
            <p className="text-mutedGray text-sm sm:text-base">
              True digital authority happens when strategy, design, and technology work in perfect sync.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trifecta.map((item) => (
              <div
                key={item.step}
                className="group rounded-3xl glass-panel hover:glass-panel-elevated border border-white/10 overflow-hidden transition-all duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-charcoal-900/80 border border-white/10 text-xs font-mono text-cyan-400">
                    // {item.step}
                  </span>
                </div>

                <div className="p-7 space-y-3">
                  <h3 className="text-xl font-bold text-white font-display uppercase group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xs font-mono text-cyan-400/90 block">
                    {item.subtitle}
                  </span>
                  <p className="text-sm text-mutedGray leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Core Values */}
      <section className="py-24 bg-charcoal-950/30 border-b border-white/5">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-900 border border-white/10 text-cyan-400 text-xs font-mono uppercase tracking-widest">
              <span>FOUNDATIONAL STANDARDS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-[-0.03em] font-display uppercase">
              Principles That Guide Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl glass-panel hover:glass-panel-elevated border border-white/10 hover:border-cyan-400/40 transition-all flex items-start gap-5"
              >
                <div className="p-3.5 rounded-2xl bg-charcoal-800 border border-white/10 text-cyan-400 flex-shrink-0">
                  {val.icon}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-white font-display">
                      {val.title}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-cyan-400/10 text-cyan-400 border border-cyan-400/25">
                      {val.tag}
                    </span>
                  </div>
                  <p className="text-sm text-mutedGray leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </div>
  );
};
