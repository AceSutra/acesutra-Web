import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock } from 'lucide-react';
import type { ArticleItem } from '../../types';

interface ArticleCardProps {
  article: ArticleItem;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <article
      className="group flex flex-col justify-between rounded-3xl glass-panel hover:glass-panel-elevated border border-white/5 hover:border-brand-cyan/40 transition-all duration-500 overflow-hidden shadow-xl hover:-translate-y-1.5"
      data-cursor="READ"
    >
      <div>
        {/* Featured Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-charcoal-900">
          <img
            src={article.featuredImage}
            alt={article.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-charcoal-900/90 text-cyan-400 border border-brand-cyan/30 backdrop-blur-md">
              {article.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-7">
          <div className="flex items-center gap-3 text-xs font-mono text-mutedGray mb-3">
            <span>{article.publishedDate}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-mutedGray" />
              {article.readTime}
            </span>
          </div>

          <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug font-display">
            {article.title}
          </h3>

          <p className="mt-3 text-sm text-mutedGray leading-relaxed line-clamp-3">
            {article.excerpt}
          </p>
        </div>
      </div>

      {/* Author & Read Link */}
      <div className="p-7 pt-0 border-t border-white/5 mt-4 flex items-center justify-between">
        <div className="text-xs">
          <span className="font-semibold text-white block">{article.author.name}</span>
          <span className="text-mutedGray text-[11px] font-mono block">{article.author.role}</span>
        </div>

        <Link
          to={`/insights#${article.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
        >
          <span>Read Perspective</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );
};
