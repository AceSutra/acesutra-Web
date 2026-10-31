import React from 'react';
import { BookOpen, Clock } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { CTASection } from '../components/sections/CTASection';
import { articlesData } from '../data/articles';
import { useDocumentTitle } from '../lib/seo';

export const InsightsPage: React.FC = () => {
  useDocumentTitle({
    title: 'Insights & Digital Strategy Perspectives',
    description:
      'Read in-depth analysis on web performance optimization, brand differentiation in the age of AI, and pragmatic business process automation from AceSutra.',
  });

  return (
    <div className="pt-28 pb-0">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-transparent border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-brand-cyan/10 blur-[130px] rounded-full pointer-events-none" />

        <Container>
          <Breadcrumbs items={[{ label: 'Insights & Perspectives' }]} className="mb-8" />

          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest bg-charcoal-900/90 text-cyan-400 border border-white/10 backdrop-blur-md">
              <BookOpen className="w-3.5 h-3.5" />
              <span>PERSPECTIVES & ANALYSIS</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-[-0.04em] leading-[0.98] font-display uppercase">
              Perspectives for <br />
              <span className="gradient-text-blue">The Digital Future.</span>
            </h1>

            <p className="text-lg sm:text-xl text-mutedGray max-w-2xl leading-relaxed">
              Pragmatic analysis on high-velocity web engineering, brand longevity, and scalable digital operations in an AI era.
            </p>
          </div>
        </Container>
      </section>

      {/* Articles Feed */}
      <section className="py-20 bg-transparent border-b border-white/5">
        <Container>
          <div className="space-y-16 max-w-4xl mx-auto">
            {articlesData.map((article) => (
              <article
                key={article.id}
                id={article.slug}
                className="scroll-mt-32 p-8 sm:p-10 rounded-3xl glass-panel hover:glass-panel-elevated border border-white/10 hover:border-cyan-400/40 transition-colors shadow-2xl space-y-6"
              >
                {/* Meta details */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-400/10 text-cyan-400 border border-cyan-400/25">
                      {article.category}
                    </span>
                    <span className="text-xs text-mutedGray font-mono">{article.publishedDate}</span>
                  </div>

                  <span className="flex items-center gap-1.5 text-xs text-mutedGray font-mono">
                    <Clock className="w-3.5 h-3.5 text-mutedGray" />
                    {article.readTime}
                  </span>
                </div>

                {/* Article Header */}
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight font-display">
                  {article.title}
                </h2>

                <p className="text-base text-cyan-400/90 font-medium leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Featured Image */}
                <div className="rounded-2xl overflow-hidden aspect-[16/9] border border-white/10 bg-charcoal-800">
                  <img
                    src={article.featuredImage}
                    alt={article.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Article Content */}
                <div className="prose prose-invert max-w-none text-mutedGray text-sm sm:text-base leading-relaxed space-y-4">
                  {article.contentParagraphs.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </div>
  );
};
