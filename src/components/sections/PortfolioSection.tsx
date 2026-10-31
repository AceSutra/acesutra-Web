import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { projectsData } from '../../data/projects';

export const PortfolioSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Web Development', 'Software', 'Branding'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData.slice(0, 4)
    : projectsData.filter((p) => p.category === activeFilter).slice(0, 4);

  return (
    <section id="work" className="py-24 lg:py-36 bg-transparent relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/3 w-[700px] h-[500px] bg-brand-blue/10 blur-[180px] rounded-full pointer-events-none" />

      <Container>
        {/* Section Header with Category Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-900 border border-white/10 text-cyan-400 text-xs font-mono uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
              SELECTED WORK
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-[-0.03em] leading-[1.02] font-display uppercase">
              Proven Outcomes. <br />
              <span className="gradient-text-blue">Bespoke Craft.</span>
            </h2>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-cyan-500 text-charcoal-950 font-bold shadow-glow-cyan/40'
                    : 'bg-charcoal-900 text-mutedGray hover:text-white border border-white/10 hover:border-white/20'
                }`}
                data-cursor="FILTER"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Large-Format Project Showcase (Imagery-Focused Editorial Grid) */}
        <div className="space-y-12 sm:space-y-16">
          {filteredProjects.map((project, idx) => {
            const formattedIndex = String(idx + 1).padStart(2, '0');
            const isReversed = idx % 2 === 1;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`group rounded-3xl glass-panel hover:glass-panel-elevated border border-white/10 hover:border-brand-cyan/40 transition-all duration-500 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
                data-cursor="VIEW CASE"
              >
                {/* Visual Imagery Canvas (7 Cols) */}
                <div
                  className={`relative min-h-[360px] sm:min-h-[460px] lg:min-h-[520px] overflow-hidden bg-charcoal-900 ${
                    isReversed ? 'lg:col-span-7 lg:order-2' : 'lg:col-span-7'
                  }`}
                >
                  <img
                    src={project.featuredImage}
                    alt={`${project.name} visual showcase`}
                    loading="lazy"
                    className="w-full h-full object-cover object-center filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-6 left-6 flex items-center gap-2">
                    <span className="px-3.5 py-1.5 rounded-full bg-charcoal-900/90 border border-brand-cyan/30 text-cyan-300 text-xs font-mono uppercase tracking-wider backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Minimalist Editorial Details (5 Cols) */}
                <div
                  className={`p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-6 ${
                    isReversed ? 'lg:col-span-5 lg:order-1' : 'lg:col-span-5'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest">
                        // {formattedIndex}
                      </span>
                      <span className="text-xs font-mono text-mutedGray">
                        {project.industry}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors font-display">
                      {project.name}
                    </h3>

                    <p className="text-sm sm:text-base text-warmWhite/90 font-medium leading-relaxed">
                      {project.tagline}
                    </p>

                    {/* Compact Tag Pills */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.servicesDelivered.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-mono px-3 py-1 rounded-lg bg-charcoal-900 border border-white/10 text-mutedGray"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Primary Performance Metric & Case Link */}
                  <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                    {project.stats && project.stats[0] && (
                      <div>
                        <span className="block text-base font-bold font-mono text-cyan-400">
                          {project.stats[0].value}
                        </span>
                        <span className="block text-[10px] font-mono uppercase tracking-wider text-mutedGray">
                          {project.stats[0].label}
                        </span>
                      </div>
                    )}

                    <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white group-hover:text-cyan-300 transition-colors font-semibold">
                      <span>View Case</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Explore All Work Link */}
        <div className="mt-16 flex justify-center">
          <Button
            to="/work"
            variant="outline"
            size="lg"
            rightIcon={<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
            data-cursor="ALL WORK"
          >
            Explore Complete Portfolio Archive
          </Button>
        </div>
      </Container>
    </section>
  );
};
