import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock } from 'lucide-react';
import type { ArticleItem } from '../../types';

interface ArticleCardProps {
  article: ArticleItem;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <article className="group flex flex-col justify-between rounded-2xl bg-charcoal-800/40 border border-subtleBorder hover:border-brand-orange/40 hover:bg-charcoal-800/70 transition-all duration-300 overflow-hidden shadow-sm">
      <div>
        {/* Featured Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-charcoal-900">
          <img
            src={article.featuredImage}
            alt={article.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-charcoal-900/90 text-brand-orange border border-brand-orange/30 backdrop-blur-md">
              {article.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-3 text-xs text-mutedGray mb-3">
            <span>{article.publishedDate}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-mutedGray" />
              {article.readTime}
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-brand-orange transition-colors leading-snug">
            {article.title}
          </h3>

          <p className="mt-3 text-sm text-mutedGray leading-relaxed line-clamp-3">
            {article.excerpt}
          </p>
        </div>
      </div>

      {/* Author & Read Link */}
      <div className="p-6 pt-0 border-t border-subtleBorder/50 mt-4 flex items-center justify-between">
        <div className="text-xs">
          <span className="font-semibold text-warmWhite/90 block">{article.author.name}</span>
          <span className="text-mutedGray text-[11px] block">{article.author.role}</span>
        </div>

        <Link
          to={`/insights#${article.slug}`}
          className="inline-flex items-center gap-1 text-xs font-semibold text-brand-orange hover:text-brand-hover transition-colors"
        >
          <span>Read Perspective</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );
};
