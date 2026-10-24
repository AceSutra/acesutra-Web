import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { ArticleCard } from '../insights/ArticleCard';
import { Button } from '../ui/Button';
import { articlesData } from '../../data/articles';

export const InsightsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-charcoal-950 border-t border-subtleBorder relative">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <SectionHeading
            eyebrow="PERSPECTIVES & ANALYSIS"
            title="Perspectives for the Digital Future."
            description="Observations on digital marketing economics, high-performance web engineering, and brand building in an AI-accelerated landscape."
          />

          <div className="flex-shrink-0">
            <Button
              to="/insights"
              variant="outline"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" />}
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
