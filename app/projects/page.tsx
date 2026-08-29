import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SectionHeading } from '@/components/common/SectionHeading';
import { projectsData } from '@/data/projects';
import { MapPin, Building2, ShieldCheck, ArrowRight } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-20 space-y-16 font-sans">
      
      {/* Projects Hero */}
      <section className="bg-slate-950 text-white py-16 border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-widest">
            <Building2 className="w-4 h-4 text-gold-400" />
            <span>COMPANY PORTFOLIO PROJECTS</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight">
            Featured <span className="gold-gradient-text">Project Portfolio</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Selected residential and commercial project developments represented by Blessing Marketing across Karachi's premier corridors.
          </p>
        </div>
      </section>

      {/* Projects Grid (No price sliders, no bedroom tabs) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden flex flex-col justify-between group hover:shadow-2xl hover:border-gold-500/40 transition-all duration-300"
            >
              {/* Media Header */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.heroImage}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md border border-gold-500/40 text-gold-400 text-[10px] font-extrabold uppercase px-3 py-1.5 rounded-full">
                  {project.status}
                </div>

                {project.developerPartner && (
                  <div className="absolute top-4 right-4 bg-slate-900/80 text-white text-[10px] font-semibold px-2.5 py-1 rounded-lg">
                    {project.developerPartner}
                  </div>
                )}

                <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-semibold flex items-center gap-1.5 truncate">
                  <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <span className="truncate">{project.location}</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  
                  {/* OUR ROLE Tag - Crucial Corporate Portfolio Requirement */}
                  <div className="inline-flex items-center gap-1.5 bg-gold-500/10 border border-gold-500/25 text-gold-700 px-3 py-1 rounded-full text-[11px] font-bold">
                    <ShieldCheck className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                    <span>OUR ROLE: {project.ourRole}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-gold-600 transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {project.overview}
                  </p>
                </div>

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
    </div>
  );
}
