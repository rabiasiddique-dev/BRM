import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ArrowRight, MapPin, Building2, Tag, ShieldCheck } from 'lucide-react';
import { projectsData } from '@/data/projects';

export const FeaturedProjects: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 font-sans">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
        <SectionHeading
          subtitle="SELECTED PORTFOLIO"
          title="Featured Projects"
          description="High-profile developments represented by Blessing Marketing across Karachi."
        />
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 font-bold text-gold-600 hover:text-gold-700 text-xs uppercase tracking-wider mt-4 md:mt-0"
        >
          <span>Explore All Projects</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.slice(0, 3).map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden flex flex-col justify-between group hover:shadow-2xl hover:border-gold-500/40 transition-all duration-300"
          >
            {/* Card Media Header */}
            <div className="relative h-64 overflow-hidden">
              <Image
                src={project.heroImage}
                alt={project.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              {/* Project Status Badge */}
              <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md border border-gold-500/40 text-gold-400 text-[10px] font-extrabold uppercase px-3 py-1.5 rounded-full">
                {project.status}
              </div>

              {/* Developer Partner Badge */}
              {project.developerPartner && (
                <div className="absolute top-4 right-4 bg-slate-900/80 text-white text-[10px] font-semibold px-2.5 py-1 rounded-lg">
                  {project.developerPartner}
                </div>
              )}

              {/* Location Tag */}
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-semibold flex items-center gap-1.5 truncate">
                <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span className="truncate">{project.location}</span>
              </div>
            </div>

            {/* Card Content Body */}
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                
                {/* OUR ROLE Tag - Prominent Corporate Requirement */}
                <div className="inline-flex items-center gap-1.5 bg-gold-500/10 border border-gold-500/25 text-gold-700 px-3 py-1 rounded-full text-[11px] font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                  <span>OUR ROLE: {project.ourRole}</span>
                </div>

                <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-gold-600 transition-colors">
                  {project.name}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                  {project.overview}
                </p>
              </div>

              {/* Action Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-4">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{project.projectType}</span>
                
                <Link
                  href={`/projects/${project.slug}`}
                  className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-xl transition-all inline-flex items-center gap-1.5"
                >
                  <span>Explore Project</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold-400" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
