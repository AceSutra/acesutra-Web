import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Container } from '../layout/Container';
import { ArticleCard } from '../insights/ArticleCard';
import { Button } from '../ui/Button';
import { articlesData } from '../../data/articles';

export const InsightsSection: React.FC = () => {
  return (
    <section className="py-28 lg:py-36 bg-transparent border-t border-white/10 relative overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-charcoal-800 border border-white/10 text-cyan-400 text-xs font-mono uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
              08 // THOUGHT LEADERSHIP & TELEMETRY
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-display uppercase">
              Perspectives for <br />
              <span className="gradient-text-blue">The Digital Future.</span>
            </h2>

            <p className="text-base sm:text-lg text-mutedGray max-w-2xl leading-relaxed">
              Strategic analysis on customer acquisition economics, high-performance web engineering, and brand longevity in an AI-accelerated era.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Button
              to="/insights"
              variant="outline"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
              data-cursor="ARTICLES"
            >
              Browse All Articles
            </Button>
          </div>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articlesData.slice(0, 3).map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </Container>
    </section>
  );
};
