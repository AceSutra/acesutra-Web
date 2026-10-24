import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectCard } from '../portfolio/ProjectCard';
import { Button } from '../ui/Button';
import { projectsData } from '../../data/projects';

export const PortfolioSection: React.FC = () => {
  const featuredProjects = projectsData.filter((p) => p.isFeatured).slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-charcoal-900 relative">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <SectionHeading
              eyebrow="SELECTED CAPABILITIES"
              title="Work That Moves Ideas Forward."
              description="Explore representative architectural concepts, digital flagship prototypes, and technical implementations crafted to enterprise standards."
            />
            <div className="mt-2 flex items-center gap-2 text-xs text-cyan-400/90">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Flagship Capability Demonstrations & Prototypes</span>
            </div>
          </div>

          <div className="flex-shrink-0">
            <Button
              to="/work"
              variant="outline"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              View Full Portfolio
            </Button>
          </div>
        </div>

        {/* 3 Featured Projects Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
};
