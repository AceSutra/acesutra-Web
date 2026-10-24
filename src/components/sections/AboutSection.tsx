import React from 'react';
import { ArrowRight, CheckCircle2, Target, Sparkles, Terminal } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

export const AboutSection: React.FC = () => {
  const principles = [
    {
      title: 'Think Strategically',
      desc: 'We analyze market dynamics, target audiences, and unit economics before defining technical or marketing roadmaps.',
      icon: <Target className="w-5 h-5 text-cyan-400" />,
    },
    {
      title: 'Create With Purpose',
      desc: 'Design is not superficial decoration; it is functional communication that inspires trust and guides customer action.',
      icon: <Sparkles className="w-5 h-5 text-cyan-400" />,
    },
    {
      title: 'Build for the Future',
      desc: 'We engineer maintainable software and scalable growth funnels that compound value rather than requiring immediate rewrites.',
      icon: <Terminal className="w-5 h-5 text-cyan-400" />,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-charcoal-900 relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story & Principles (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <SectionHeading
              eyebrow="WHO WE ARE"
              title="More Than a Service Provider. Your Digital Growth Partner."
              description="We bring strategy, creativity, and technology together to help businesses solve real challenges, connect with their audiences, and create lasting digital value."
            />

            <div className="space-y-4 pt-2">
              {principles.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-charcoal-800/40 border border-subtleBorder hover:border-subtleBorderHover transition-colors"
                >
                  <div className="p-2.5 rounded-xl bg-charcoal-900 border border-subtleBorder flex-shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-mutedGray leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Button
                to="/about"
                variant="outline"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Discover AceSutra
              </Button>
            </div>
          </div>

          {/* Right Column: Editorial Visual (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-subtleBorder bg-charcoal-800 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="AceSutra collaborative digital strategy session"
                loading="lazy"
                className="w-full h-[440px] object-cover filter brightness-90 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent" />

              {/* Floating Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-charcoal-900/90 border border-subtleBorder backdrop-blur-md">
                <span className="text-[10px] uppercase font-bold tracking-widest text-cyan-400 block mb-1">
                  The AceSutra Promise
                </span>
                <p className="text-sm font-semibold text-white leading-snug">
                  "Where Strategy Meets Creativity and Technology."
                </p>
                <div className="mt-3 flex items-center gap-3 text-xs text-mutedGray">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Bespoke Craft
                  </span>
                  <span>•</span>
                  <span>Direct Principal Access</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
