import React, { useState } from 'react';
import { ArrowRight, Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { siteConfig } from '../../data/navigation';

interface CTASectionProps {
  title?: string;
  description?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = "Have an Ambitious Project? Let's Talk.",
  description = "Whether scaling an enterprise software platform or forging an unmistakable brand identity, we are ready.",
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="py-24 lg:py-36 relative overflow-hidden bg-transparent border-t border-white/10">
      {/* Memorable 3D Background Visual Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 filter brightness-60">
        <img
          src="/assets/art/architectural_wave.jpg"
          alt="AceSutra Visual Architecture Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/80 to-charcoal-950" />
      </div>

      <Container className="relative z-10">
        <div className="relative rounded-3xl glass-panel-elevated p-8 sm:p-14 lg:p-20 text-center max-w-4xl mx-auto shadow-2xl border border-white/15 overflow-hidden">
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-charcoal-900 border border-brand-cyan/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>OPEN FOR PARTNERSHIPS</span>
          </motion.div>

          {/* Giant Impactful Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-[-0.04em] leading-[0.98] max-w-2xl mx-auto font-display uppercase"
          >
            {title}
          </motion.h2>

          {/* Minimal 1-Sentence Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-mutedGray max-w-lg mx-auto leading-relaxed"
          >
            {description}
          </motion.p>

          {/* Interactive CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
              className="w-full sm:w-auto shadow-glow-blue px-8 py-4 text-base font-semibold"
              data-cursor="LET'S TALK"
            >
              Start a Project Discovery
            </Button>

            <button
              onClick={handleCopyEmail}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-charcoal-900/90 border border-white/10 hover:border-brand-cyan/40 text-warmWhite font-medium text-base backdrop-blur-md transition-all hover:bg-charcoal-800"
              data-cursor="COPY"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-mono text-sm">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-mono">{siteConfig.email}</span>
                </>
              )}
            </button>
          </motion.div>

          {/* Minimal Assurance Footer */}
          <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-mutedGray font-mono">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              24h Discovery Turnaround
            </span>
            <span>•</span>
            <span>Direct Technical Principal Review</span>
          </div>
        </div>
      </Container>
    </section>
  );
};
