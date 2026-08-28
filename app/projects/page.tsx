import React from 'react';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { SectionHeading } from '@/components/common/SectionHeading';
import { projectsData } from '@/data/projects';
import { Building2 } from 'lucide-react';

export const metadata = {
  title: 'Development Projects',
  description: 'Explore upcoming and ongoing residential and commercial developments by Blessing Marketing in Karachi.',
};

export default function ProjectsPage() {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-12 text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-500">
          <Building2 className="w-4 h-4" />
          <span>Exclusive Developments</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900">
          Karachi Project Showcase
        </h1>
        <p className="text-slate-600 text-sm sm:text-base">
          Explore luxury high-rise towers, commercial plazas, and master-planned residential communities with flexible payment plans.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
