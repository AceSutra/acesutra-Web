import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Container } from '../layout/Container';
import { servicesData } from '../../data/services';

const serviceVisuals: Record<string, string> = {
  'digital-marketing': '/assets/art/fluid_core.jpg',
  'web-development': '/assets/art/architectural_wave.jpg',
  'branding-design': '/assets/art/kinetic_monolith.jpg',
  'software-development': '/assets/art/fluid_core.jpg',
  'mobile-app-development': '/assets/art/architectural_wave.jpg',
  'ai-automation': '/assets/art/kinetic_monolith.jpg',
  'cloud-solutions': '/assets/art/fluid_core.jpg',
};

export const ServicesSection: React.FC = () => {
  const [activeServiceId, setActiveServiceId] = useState<string>(servicesData[1]?.id || servicesData[0].id);

  const activeService = servicesData.find((s) => s.id === activeServiceId) || servicesData[0];
  const activeImage = serviceVisuals[activeService.id] || '/assets/art/fluid_core.jpg';

  return (
    <section id="services" className="py-24 lg:py-36 bg-transparent relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-32 w-[600px] h-[600px] bg-brand-blue/15 blur-[160px] rounded-full pointer-events-none" />

      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-800 border border-white/10 text-cyan-400 text-xs font-mono uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
              CORE DISCIPLINES
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-[-0.03em] leading-[1.02] font-display uppercase">
              Full-Spectrum Execution. <br />
              <span className="gradient-text-blue">Zero Compromises.</span>
            </h2>
          </div>

          <span className="text-xs font-mono text-mutedGray uppercase tracking-widest hidden lg:block">
            HOVER DISCIPLINE TO REVEAL SPECIFICATION
          </span>
        </div>

        {/* Interactive Discipline Deck (Basement Studio / Locomotive Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Bold Typographic Service List (7 Cols) */}
          <div className="lg:col-span-7 divide-y divide-white/5">
            {servicesData.map((service, index) => {
              const isActive = service.id === activeServiceId;
              const formattedIndex = String(index + 1).padStart(2, '0');

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveServiceId(service.id)}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`py-5 transition-all duration-300 cursor-pointer group flex items-center justify-between ${
                    isActive ? 'opacity-100 pl-4' : 'opacity-60 hover:opacity-100 hover:pl-2'
                  }`}
                  data-cursor="DISCIPLINE"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className={`font-mono text-xs ${isActive ? 'text-cyan-400 font-bold' : 'text-mutedGray'}`}>
                      // {formattedIndex}
                    </span>
                    <h3
                      className={`text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight transition-colors font-display ${
                        isActive ? 'text-white' : 'text-warmWhite/75 group-hover:text-white'
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  <Link
                    to={`/services/${service.slug}`}
                    className={`p-2.5 rounded-xl border transition-all ${
                      isActive
                        ? 'bg-cyan-500 text-charcoal-950 border-cyan-400 shadow-glow-cyan/40'
                        : 'bg-charcoal-900 border-white/10 text-mutedGray group-hover:text-white'
                    }`}
                    aria-label={`Explore ${service.title}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Preview Canvas (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl glass-panel-elevated p-8 sm:p-10 min-h-[460px] flex flex-col justify-between">
              {/* Dynamic 3D Imagery Backdrop */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImage}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 z-0"
                >
                  <img
                    src={activeImage}
                    alt={activeService.title}
                    className="w-full h-full object-cover filter brightness-50 contrast-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/70 to-charcoal-950/40" />
                </motion.div>
              </AnimatePresence>

              {/* Foreground Service Content */}
              <div className="relative z-10 space-y-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-bold block">
                  {activeService.badge}
                </span>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                  {activeService.title}
                </h3>

                <p className="text-sm text-warmWhite/90 leading-relaxed font-sans">
                  {activeService.shortDescription}
                </p>

                {/* Capabilities pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {activeService.capabilities.slice(0, 3).map((cap) => (
                    <span
                      key={cap.title}
                      className="text-[11px] font-mono px-3 py-1 rounded-full bg-charcoal-900/80 border border-white/10 text-mutedGray backdrop-blur-md"
                    >
                      {cap.title}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="relative z-10 pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-mutedGray">
                  Turnkey Specification
                </span>

                <Link
                  to={`/services/${activeService.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Explore Details</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
