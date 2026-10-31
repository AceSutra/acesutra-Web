import React, { useState } from 'react';
import { ArrowRight, Sparkles, Shield, Cpu, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { AboutScene3D } from '../3d/AboutScene3D';

export const AboutSection: React.FC = () => {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      num: '01',
      title: 'Senior Principals Only',
      subtitle: 'Zero Junior Handoffs',
      desc: 'Direct collaboration with veteran software architects and creative directors. No intermediary noise.',
      stat: '0',
      statLabel: 'Junior Handoffs',
      icon: <Cpu className="w-4 h-4 text-cyan-400" />,
    },
    {
      num: '02',
      title: '100% Custom Craft',
      subtitle: 'Zero Generic Templates',
      desc: 'Every shader, micro-interaction, and layout is custom-forged for your specific market authority.',
      stat: '100%',
      statLabel: 'Bespoke Code',
      icon: <Sparkles className="w-4 h-4 text-cyan-400" />,
    },
    {
      num: '03',
      title: 'Full Turnkey IP Transfer',
      subtitle: 'Zero Vendor Lock-In',
      desc: 'Complete ownership of all Git repositories, Figma design systems, and cloud primitives upon delivery.',
      stat: '100%',
      statLabel: 'IP Ownership',
      icon: <Shield className="w-4 h-4 text-cyan-400" />,
    },
  ];

  return (
    <section id="about" className="py-24 lg:py-36 bg-transparent relative overflow-hidden">
      {/* Background radial ambient lights */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-brand-blue/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-brand-cyan/15 blur-[140px] rounded-full pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Kinetic Manifesto & Interactive Philosophy (7 Cols) */}
          <div className="lg:col-span-7 space-y-7">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-charcoal-900/90 border border-white/10 text-cyan-400 text-xs font-mono uppercase tracking-widest backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE MANIFESTO</span>
            </motion.div>

            {/* Giant Typographic Statement */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-[-0.04em] leading-[0.98] font-display uppercase"
            >
              We do not build <br />
              websites. <br />
              <span className="gradient-text-blue">
                We engineer digital authority.
              </span>
            </motion.h2>

            {/* Ultra-Concise 1-Line Impact Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-mutedGray font-medium max-w-lg leading-relaxed"
            >
              Bespoke digital flagships, high-conversion branding, and resilient software for market leaders.
            </motion.p>

            {/* Interactive 3 Differentiator Cards with Hover/Click Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3.5"
            >
              {pillars.map((pillar, idx) => {
                const isActive = activePillar === idx;
                return (
                  <button
                    key={pillar.num}
                    onClick={() => setActivePillar(idx)}
                    onMouseEnter={() => setActivePillar(idx)}
                    className={`p-4 rounded-2xl text-left transition-all duration-300 relative overflow-hidden group ${
                      isActive
                        ? 'bg-charcoal-900/90 border border-cyan-400/50 shadow-[0_0_25px_rgba(0,194,255,0.15)] ring-1 ring-cyan-400/20'
                        : 'glass-panel hover:glass-panel-elevated border border-white/5 hover:border-white/20'
                    }`}
                  >
                    {/* Active Corner Accent */}
                    {isActive && (
                      <span className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-cyan-400/25 to-transparent pointer-events-none" />
                    )}

                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[11px] font-mono font-bold ${isActive ? 'text-cyan-400' : 'text-mutedGray'}`}>
                        // {pillar.num}
                      </span>
                      <div className={`p-1.5 rounded-lg ${isActive ? 'bg-cyan-400/10 text-cyan-400' : 'text-mutedGray/50'}`}>
                        {pillar.icon}
                      </div>
                    </div>

                    <span className="text-sm font-bold text-white block mb-0.5 group-hover:text-cyan-300 transition-colors">
                      {pillar.title}
                    </span>

                    <span className="text-[10px] font-mono text-mutedGray uppercase tracking-wider block">
                      {pillar.subtitle}
                    </span>
                  </button>
                );
              })}
            </motion.div>

            {/* Active Pillar Dynamic Detail Pill */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="p-4 rounded-2xl bg-charcoal-900/70 border border-white/10 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1 max-w-md">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 flex items-center gap-1.5 font-semibold">
                    <Zap className="w-3 h-3" />
                    {pillars[activePillar].title}
                  </span>
                  <p className="text-xs sm:text-sm text-mutedGray leading-relaxed">
                    {pillars[activePillar].desc}
                  </p>
                </div>

                <div className="flex-shrink-0 text-right sm:border-l sm:border-white/10 sm:pl-4">
                  <span className="text-xl sm:text-2xl font-mono font-bold text-cyan-400 block">
                    {pillars[activePillar].stat}
                  </span>
                  <span className="text-[10px] font-mono text-mutedGray uppercase tracking-wider block">
                    {pillars[activePillar].statLabel}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2 flex items-center gap-4"
            >
              <Button
                to="/about"
                variant="outline"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
                data-cursor="ABOUT"
              >
                Explore Studio Philosophy
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Interactive 3D Monolith WebGL Centerpiece (5 Cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[440px] sm:min-h-[520px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-[460px] sm:h-[520px] rounded-3xl glass-panel border border-white/10 overflow-hidden shadow-2xl"
            >
              {/* Interactive 3D Scene */}
              <AboutScene3D activePillarIndex={activePillar} />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};
