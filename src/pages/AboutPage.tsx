import React from 'react';
import { Target, Compass, Sparkles, Code2, Users, Shield, ArrowRight } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { CTASection } from '../components/sections/CTASection';
import { useDocumentTitle } from '../lib/seo';

export const AboutPage: React.FC = () => {
  useDocumentTitle({
    title: 'About Us — Strategy, Creativity & Technology',
    description:
      'Learn about AceSutra, our foundational values, strategic methodology, and how we help modern organizations build sustainable digital advantage.',
  });

  const coreValues = [
    {
      title: 'Intellectual Honesty',
      desc: 'We tell you what will genuinely move the needle for your business, not just what is easy to sell. If a technology or campaign strategy is unsuited to your needs, we say so upfront.',
      icon: <Compass className="w-5 h-5 text-brand-orange" />,
    },
    {
      title: 'Craft Over Templates',
      desc: 'Every brand identity, web interface, and software application is intentionally tailored. We avoid generic, copy-paste templates that dilute your market differentiation.',
      icon: <Sparkles className="w-5 h-5 text-brand-orange" />,
    },
    {
      title: 'Sustainable Engineering',
      desc: 'We write clean, modular, and type-safe code designed for long-term maintainability. We build systems your internal team or future partners can easily scale.',
      icon: <Code2 className="w-5 h-5 text-brand-orange" />,
    },
    {
      title: 'Direct Accountability',
      desc: 'Transparent milestones, clear acceptance criteria, and weekly progress demos. No vanity metrics or bloated layers of intermediary management.',
      icon: <Shield className="w-5 h-5 text-brand-orange" />,
    },
  ];

  return (
    <div className="pt-28 pb-0">
      {/* 1. Hero & Mission */}
      <section className="py-16 sm:py-24 bg-charcoal-900 border-b border-subtleBorder relative overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[350px] bg-brand-orange/10 blur-[130px] rounded-full pointer-events-none" />

        <Container>
          <Breadcrumbs items={[{ label: 'About Us' }]} className="mb-8" />

          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brand-orange/10 text-brand-orange border border-brand-orange/20">
              <span>OUR PURPOSE & METHODOLOGY</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] text-balance">
              Building Enduring Digital Advantage Through Strategic Alignment.
            </h1>

            <p className="text-lg sm:text-xl text-mutedGray leading-relaxed max-w-3xl">
              AceSutra was established around a simple principle: modern businesses do not need another siloed vendor; they need an integrated partner that connects strategic thinking with creative craft and scalable technical execution.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Mission & Vision */}
      <section className="py-20 bg-charcoal-950 border-b border-subtleBorder">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="p-8 sm:p-10 rounded-3xl bg-charcoal-900 border border-subtleBorder">
              <div className="p-3 rounded-xl bg-charcoal-800 border border-subtleBorder w-fit mb-5 text-brand-orange">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-base text-mutedGray leading-relaxed">
                To equip ambitious businesses with the digital strategy, brand resonance, and modern technology required to scale predictably, connect meaningfully with customers, and outpace market competition.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-charcoal-900 border border-brand-orange/30 shadow-glow-orange">
              <div className="p-3 rounded-xl bg-charcoal-800 border border-subtleBorder w-fit mb-5 text-brand-orange">
                <Sparkles className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-base text-mutedGray leading-relaxed">
                To be recognized as the gold standard in integrated digital partnership—where every project embodies intellectual rigor, visual distinction, and flawless technical reliability.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. The Trifecta: Strategy, Creativity & Technology */}
      <section className="py-20 lg:py-28 bg-charcoal-900 border-b border-subtleBorder">
        <Container>
          <SectionHeading
            eyebrow="THREE DISCIPLINARY PILLARS"
            title="Where Three Core Capabilities Converge"
            description="True digital transformation occurs when strategy, creative design, and technical engineering work in perfect synchronization."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-charcoal-800/40 border border-subtleBorder">
              <span className="text-xs uppercase font-bold tracking-widest text-brand-orange block mb-3">
                01 • Strategy
              </span>
              <h3 className="text-xl font-bold text-white mb-3">
                Direction & Market Clarity
              </h3>
              <p className="text-sm text-mutedGray leading-relaxed">
                Defining the exact customer persona, conversion economics, competitive whitespace, and go-to-market priorities before committing resources.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-charcoal-800/40 border border-brand-orange/40 bg-charcoal-800/70 shadow-sm">
              <span className="text-xs uppercase font-bold tracking-widest text-brand-orange block mb-3">
                02 • Creativity
              </span>
              <h3 className="text-xl font-bold text-white mb-3">
                Resonant Brand Systems
              </h3>
              <p className="text-sm text-mutedGray leading-relaxed">
                Crafting memorable logos, editorial typography, crisp layouts, and compelling campaign copy that builds immediate credibility.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-charcoal-800/40 border border-subtleBorder">
              <span className="text-xs uppercase font-bold tracking-widest text-brand-orange block mb-3">
                03 • Technology
              </span>
              <h3 className="text-xl font-bold text-white mb-3">
                Scalable Engineering
              </h3>
              <p className="text-sm text-mutedGray leading-relaxed">
                Writing performant, accessible code with sub-second speeds, automated cloud deployments, and resilient database architectures.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Core Values */}
      <section className="py-20 lg:py-28 bg-charcoal-950 border-b border-subtleBorder">
        <Container>
          <SectionHeading
            eyebrow="FOUNDATIONAL PRINCIPLES"
            title="Values That Guide Every Engagement"
            description="Our standards of conduct and collaboration ensure transparent relationships and high-quality results."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-charcoal-900 border border-subtleBorder hover:border-brand-orange/40 transition-colors flex items-start gap-5"
              >
                <div className="p-3 rounded-2xl bg-charcoal-800 border border-subtleBorder text-brand-orange flex-shrink-0">
                  {val.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {val.title}
                  </h3>
                  <p className="text-sm text-mutedGray leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. How We Work With Clients */}
      <section className="py-20 bg-charcoal-900 border-b border-subtleBorder">
        <Container>
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-charcoal-800 to-charcoal-800/50 border border-subtleBorder flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs uppercase font-bold tracking-widest text-brand-orange">
                COLLABORATIVE ENGAGEMENT
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Ready to Discuss Your Organization's Next Chapter?
              </h2>
              <p className="text-sm sm:text-base text-mutedGray leading-relaxed">
                Whether you need a complete website redesign, custom software platform, or targeted digital acquisition engine, we are ready to explore your roadmap.
              </p>
            </div>

            <Button
              to="/contact"
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="flex-shrink-0"
            >
              Start the Conversation
            </Button>
          </div>
        </Container>
      </section>

      <CTASection />
    </div>
  );
};
