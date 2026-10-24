import React from 'react';
import { ArrowRight, Sparkles, MessageSquare } from 'lucide-react';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';

interface CTASectionProps {
  title?: string;
  description?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = "Have an Idea? Let's Make It Happen.",
  description = "Whether you're building a brand, launching a website, or improving your digital operations, let's explore the right solution for your business.",
}) => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-charcoal-900 border-t border-subtleBorder">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-radial-glow opacity-80 pointer-events-none" />
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-orange/10 blur-[120px] rounded-full pointer-events-none" />

      <Container>
        <div className="relative rounded-3xl bg-gradient-to-b from-charcoal-800 to-charcoal-800/80 border border-brand-orange/30 p-8 sm:p-12 lg:p-16 text-center max-w-5xl mx-auto shadow-2xl">
          {/* Subtle top indicator */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Strategy • Creativity • Scalable Technology</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
            {title}
          </h2>

          <p className="mt-5 text-base sm:text-lg text-mutedGray max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto"
            >
              Start a Project
            </Button>

            <Button
              to="/contact"
              variant="secondary"
              size="lg"
              leftIcon={<MessageSquare className="w-4 h-4 text-brand-orange" />}
              className="w-full sm:w-auto"
            >
              Talk to Our Team
            </Button>
          </div>

          <div className="mt-8 pt-8 border-t border-subtleBorder/60 flex flex-wrap items-center justify-center gap-6 text-xs text-mutedGray">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Fast 24h Discovery Turnaround
            </span>
            <span>•</span>
            <span>No Obligation Feasibility Scoping</span>
            <span>•</span>
            <span>Transparent Milestones & Deliverables</span>
          </div>
        </div>
      </Container>
    </section>
  );
};
