import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ChevronDown, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-32 pb-20 overflow-hidden bg-charcoal-900 bg-subtle-grid">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-blue/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-brand-cyan/15 blur-[130px] rounded-full pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Messaging & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left z-10">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-charcoal-800/90 border border-brand-cyan/30 text-warmWhite shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(0,194,255,0.8)]"></span>
              <span className="text-xs font-bold tracking-widest uppercase text-cyan-400">
                STRATEGY • CREATIVITY • TECHNOLOGY
              </span>
            </motion.div>

            {/* Primary Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-extrabold text-white tracking-tight leading-[1.1] text-balance"
            >
              Where Strategy Meets{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500">
                Creativity
              </span>{' '}
              and Technology.
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-lg sm:text-xl text-mutedGray max-w-2xl leading-relaxed text-balance"
            >
              AceSutra helps ambitious businesses build stronger brands, create powerful digital experiences, and accelerate growth through smart marketing and modern technology.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="justify-center shadow-glow-blue"
              >
                Let's Build Something Great
              </Button>

              <Button
                href="#services"
                variant="secondary"
                size="lg"
                className="justify-center"
              >
                Explore Our Services
              </Button>
            </motion.div>

            {/* Micro Credibility Checklist */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-mutedGray"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Strategy-Led Execution</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Modern React & Cloud Tech</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Zero Generic Templates</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Directional Motion Art & Abstract Composition (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-[460px] aspect-square flex items-center justify-center"
            >
              {/* Outer Glowing Concentric Rings */}
              <div className="absolute inset-0 rounded-full border border-subtleBorder/60 animate-pulse-slow" />
              <div className="absolute inset-6 rounded-full border border-brand-cyan/20" />
              <div className="absolute inset-14 rounded-full border border-subtleBorder/40" />

              {/* Main 3D-Inspired Dynamic Card with Official Logo Emblem */}
              <div className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 p-7 rounded-3xl bg-charcoal-800/80 border border-brand-cyan/30 backdrop-blur-xl shadow-2xl flex flex-col justify-between overflow-hidden">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-400/20 blur-2xl rounded-full" />

                {/* Header of Card */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,194,255,0.8)]"></span>
                    <span className="text-xs font-mono uppercase tracking-wider text-white">AceSutra Engine</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-charcoal-900 border border-subtleBorder text-cyan-400">
                    Live System
                  </span>
                </div>

                {/* Central Dynamic Official 3D Emblem */}
                <div className="my-auto py-2 flex items-center justify-center">
                  <div className="relative w-28 h-28 flex items-center justify-center group">
                    <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-full animate-pulse-slow" />
                    <img
                      src="/logo-icon.png"
                      alt="AceSutra 3D Growth Emblem"
                      className="w-full h-full object-contain filter drop-shadow-[0_0_24px_rgba(0,194,255,0.65)] transform hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Card Bottom Metrics */}
                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-subtleBorder/80 text-center">
                  <div>
                    <span className="block text-[10px] text-mutedGray">Strategy</span>
                    <span className="block text-xs font-bold text-white">Precise</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-mutedGray">Creative</span>
                    <span className="block text-xs font-bold text-cyan-400">Bespoke</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-mutedGray">Tech</span>
                    <span className="block text-xs font-bold text-white">Scalable</span>
                  </div>
                </div>
              </div>

              {/* Floating Interface Badge: Growth & Performance */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 sm:-left-8 bg-charcoal-900/90 border border-subtleBorder p-3.5 rounded-2xl shadow-xl backdrop-blur-md flex items-center gap-3"
              >
                <div className="p-2 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 text-cyan-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] text-mutedGray">Growth Model</span>
                  <span className="block text-xs font-bold text-white">Attribution & ROI</span>
                </div>
              </motion.div>

              {/* Floating Interface Badge: Clean Architecture */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -right-4 sm:-right-6 bg-charcoal-900/90 border border-subtleBorder p-3.5 rounded-2xl shadow-xl backdrop-blur-md flex items-center gap-3"
              >
                <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] text-mutedGray">Engineering</span>
                  <span className="block text-xs font-bold text-white">Sub-Second Speed</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 sm:mt-24 flex justify-center">
          <a
            href="#trust-strip"
            className="flex flex-col items-center gap-1.5 text-xs text-mutedGray hover:text-white transition-colors group"
            aria-label="Scroll to trust overview"
          >
            <span className="text-[11px] uppercase tracking-widest">Explore AceSutra</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400" />
          </a>
        </div>
      </Container>
    </section>
  );
};
