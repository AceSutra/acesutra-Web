import React from 'react';
import { BookOpen, Clock, Tag } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SectionHeading } from '../components/ui/SectionHeading';
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
      <section className="py-16 sm:py-20 bg-charcoal-900 border-b border-subtleBorder relative overflow-hidden">
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-brand-orange/10 blur-[130px] rounded-full pointer-events-none" />

        <Container>
          <Breadcrumbs items={[{ label: 'Insights & Perspectives' }]} className="mb-8" />

          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brand-orange/10 text-brand-orange border border-brand-orange/20">
              <BookOpen className="w-3.5 h-3.5" />
              <span>PERSPECTIVES & ANALYSIS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Perspectives for the Digital Future.
            </h1>

            <p className="text-lg sm:text-xl text-mutedGray leading-relaxed max-w-3xl">
              Honest technical and strategic viewpoints on building software, crafting distinct brand identities, and scaling modern digital operations.
            </p>
          </div>
        </Container>
      </section>

      {/* Articles Feed */}
      <section className="py-20 bg-charcoal-950 border-b border-subtleBorder">
        <Container>
          <div className="space-y-16 max-w-4xl mx-auto">
            {articlesData.map((article) => (
              <article
                key={article.id}
                id={article.slug}
                className="scroll-mt-32 p-8 sm:p-10 rounded-3xl bg-charcoal-900 border border-subtleBorder hover:border-brand-orange/40 transition-colors shadow-2xl space-y-6"
              >
                {/* Meta details */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-subtleBorder/60 pb-5">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-orange/10 text-brand-orange border border-brand-orange/20">
                      {article.category}
                    </span>
                    <span className="text-xs text-mutedGray">{article.publishedDate}</span>
                  </div>

                  <span className="flex items-center gap-1.5 text-xs text-mutedGray">
                    <Clock className="w-3.5 h-3.5 text-mutedGray" />
                    {article.readTime}
                  </span>
                </div>

                {/* Article Header */}
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                  {article.title}
                </h2>

                <p className="text-base text-brand-orange/90 font-medium leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Featured Image */}
                <div className="rounded-2xl overflow-hidden aspect-[16/9] border border-subtleBorder bg-charcoal-800">
                  <img
                    src={article.featuredImage}
                    alt={article.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Article Body */}
                <div className="space-y-4 pt-2 text-sm sm:text-base text-mutedGray leading-relaxed">
                  {article.contentParagraphs.map((para, pIdx) => (
                    <p key={pIdx}>{para}</p>
                  ))}
                </div>

                {/* Tags & Author Footer */}
                <div className="pt-6 border-t border-subtleBorder/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Tag className="w-3.5 h-3.5 text-mutedGray" />
                    {article.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs px-2.5 py-1 rounded bg-charcoal-800 border border-subtleBorder text-warmWhite/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="text-xs text-right">
                    <span className="font-semibold text-white block">{article.author.name}</span>
                    <span className="text-mutedGray text-[11px] block">{article.author.role}</span>
                  </div>
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
