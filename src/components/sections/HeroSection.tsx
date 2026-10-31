import React from 'react';
import { ArrowRight, Zap, Cpu, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { AceSutraScene3D } from '../3d/AceSutraScene3D';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[96vh] flex flex-col justify-between pt-32 sm:pt-36 pb-10 overflow-hidden bg-transparent">
      {/* Background Ambience & Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[550px] bg-brand-blue/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-brand-cyan/20 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-subtle-grid opacity-25 pointer-events-none" />

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,102,255,0.18),rgba(255,255,255,0))] pointer-events-none" />

      <Container className="relative z-10 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          {/* Left Column: Bold Typographic Statement (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
            {/* Minimal High-tech Eyebrow Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-charcoal-900/90 border border-white/10 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(0,194,255,0.9)]"></span>
              <span className="text-[11px] font-mono tracking-widest uppercase text-cyan-400">
                CREATIVE TECHNOLOGY & STRATEGY STUDIO
              </span>
            </motion.div>

            {/* Oversized Cinematic Headline */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[80px] font-extrabold text-white tracking-[-0.04em] leading-[0.98] uppercase font-display">
                Where Strategy <br />
                <span className="gradient-text-blue">
                  Meets Radical
                </span> <br />
                Creativity.
              </h1>
            </motion.div>

            {/* Single Punchy Impact Sentence */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-mutedGray/90 max-w-lg leading-relaxed font-sans"
            >
              We engineer bespoke digital flagships, brand identities, and high-velocity web platforms for market-defining leaders.
            </motion.p>

            {/* Action Buttons & Magnetic Triggers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
                className="justify-center shadow-glow-blue px-8 py-4 text-base font-semibold"
                data-cursor="LET'S TALK"
              >
                Initiate a Project
              </Button>

              <Button
                href="#work"
                variant="secondary"
                size="lg"
                className="justify-center border-white/10 hover:border-brand-cyan/50 backdrop-blur-md px-7 py-4 text-base"
                data-cursor="PROJECTS"
              >
                Explore Selected Work
              </Button>
            </motion.div>

            {/* High-Impact Performance Metrics Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="pt-6 grid grid-cols-3 gap-6 border-t border-white/10 max-w-md"
            >
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 text-cyan-400">
                  <Zap className="w-3.5 h-3.5" />
                  <span className="text-sm font-mono font-bold">0.8s</span>
                </div>
                <span className="text-[10px] font-mono text-mutedGray uppercase tracking-wider block">Time to Interactive</span>
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <Cpu className="w-3.5 h-3.5" />
                  <span className="text-sm font-mono font-bold">99+</span>
                </div>
                <span className="text-[10px] font-mono text-mutedGray uppercase tracking-wider block">Lighthouse Perf</span>
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 text-blue-400">
                  <Layers className="w-3.5 h-3.5" />
                  <span className="text-sm font-mono font-bold">100%</span>
                </div>
                <span className="text-[10px] font-mono text-mutedGray uppercase tracking-wider block">Bespoke Code</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Full-Scale Interactive 3D WebGL Centerpiece (5 Cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[440px] sm:min-h-[540px] lg:min-h-[620px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-[460px] sm:h-[540px] lg:h-[620px]"
            >
              {/* Interactive Three.js WebGL Scene */}
              <AceSutraScene3D />
            </motion.div>
          </div>
        </div>
      </Container>

      {/* Minimal Scroll Down Indicator */}
      <div className="relative z-10 pt-2 flex justify-center">
        <a
          href="#about"
          className="group flex flex-col items-center gap-2 text-mutedGray hover:text-white transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-mutedGray/70 group-hover:text-cyan-400 transition-colors">
            SCROLL TO EXPLORE
          </span>
          <div className="w-4 h-7 rounded-full border border-white/20 group-hover:border-cyan-400 flex items-start justify-center p-1 transition-colors">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-1 rounded-full bg-cyan-400"
            />
          </div>
        </a>
      </div>
    </section>
  );
};
