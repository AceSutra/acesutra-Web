import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { ProjectItem } from '../../types';

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group rounded-2xl bg-charcoal-800/60 border border-subtleBorder hover:border-brand-orange/50 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-card-dark">
      <div>
        {/* Project Thumbnail Image with Subtle Zoom */}
        <div className="relative aspect-[16/10] overflow-hidden bg-charcoal-900">
          <img
            src={project.featuredImage}
            alt={`${project.name} capability overview`}
            loading="lazy"
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent opacity-80" />

          {/* Badges Overlay */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-charcoal-900/90 text-brand-orange border border-brand-orange/30 backdrop-blur-md">
              {project.category}
            </span>
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-black/60 text-warmWhite/80 backdrop-blur-md">
              {project.industry}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white group-hover:text-brand-orange transition-colors">
            {project.name}
          </h3>

          <p className="mt-2 text-xs font-medium text-brand-orange/90">
            {project.tagline}
          </p>

          <p className="mt-3 text-sm text-mutedGray leading-relaxed">
            {project.overview}
          </p>

          {/* Delivered Services Tags */}
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.servicesDelivered.map((tag, idx) => (
              <span
                key={idx}
                className="text-[11px] px-2.5 py-1 rounded-md bg-charcoal-900/80 border border-subtleBorder text-warmWhite/70"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Key Metric Highlights */}
          {project.stats && project.stats.length > 0 && (
            <div className="mt-5 pt-4 border-t border-subtleBorder/60 grid grid-cols-3 gap-2 text-center">
              {project.stats.map((stat, idx) => (
                <div key={idx} className="bg-charcoal-900/50 p-2 rounded-lg border border-subtleBorder/40">
                  <span className="block text-xs font-bold text-white truncate">{stat.value}</span>
                  <span className="block text-[10px] text-mutedGray truncate">{stat.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* External Link or Capability Notice */}
      <div className="px-6 pb-6 pt-2">
        {project.externalUrl ? (
          <a
            href={project.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-orange hover:text-brand-hover transition-colors"
          >
            <span>Visit Live Project</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        ) : (
          <span className="text-[11px] text-mutedGray/70 italic">
            AceSutra Architecture Blueprint & Case Specification
          </span>
        )}
      </div>
    </div>
  );
};
