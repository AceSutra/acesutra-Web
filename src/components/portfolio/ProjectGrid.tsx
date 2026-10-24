import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import type { ProjectItem } from '../../types';

interface ProjectGridProps {
  projects: ProjectItem[];
  showFilters?: boolean;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({
  projects,
  showFilters = true,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Web Development',
    'Software',
    'Branding',
    'Marketing',
    'AI & Automation',
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Category Filter Pills */}
      {showFilters && (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 select-none ${
                  isActive
                    ? 'bg-brand-orange text-white shadow-glow-orange font-semibold'
                    : 'bg-charcoal-800 text-mutedGray hover:text-white hover:bg-charcoal-700 border border-subtleBorder'
                }`}
                aria-pressed={isActive}
              >
                {category}
              </button>
            );
          })}
        </div>
      )}

      {/* Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-4 bg-charcoal-800/40 border border-subtleBorder rounded-2xl">
          <p className="text-base text-mutedGray mb-2">
            No projects found in category "{activeCategory}".
          </p>
          <button
            type="button"
            onClick={() => setActiveCategory('All')}
            className="text-sm font-semibold text-brand-orange hover:underline"
          >
            Show All Projects
          </button>
        </div>
      )}
    </div>
  );
};
