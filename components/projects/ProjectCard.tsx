"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, ArrowRight, Sparkles, Building2 } from 'lucide-react';
import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const getStatusBadgeClass = (status: Project['status']) => {
    switch (status) {
      case 'New':
        return 'bg-emerald-600/90 border-emerald-400/40 text-white';
      case 'Featured':
        return 'bg-gold-500/90 border-gold-400/40 text-slate-950 font-bold';
      case 'Ongoing':
        return 'bg-amber-600/90 border-amber-400/40 text-white';
      case 'Completed':
        return 'bg-blue-600/90 border-blue-400/40 text-white';
      default:
        return 'bg-slate-800 text-white';
    }
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-luxury-hover transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
        <Image
          src={project.heroImage}
          alt={project.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30" />

        {/* Status Badge */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
          <span className={`px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider shadow-md border backdrop-blur-md ${getStatusBadgeClass(project.status)}`}>
            {project.status} Project
          </span>
        </div>

        {/* Developer Badge */}
        {project.developer && (
          <div className="absolute bottom-3 left-3 z-10">
            <span className="text-[11px] font-medium text-slate-200 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-700/60 flex items-center gap-1">
              <Building2 className="w-3 h-3 text-gold-400" />
              <span>{project.developer}</span>
            </span>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-gold-600 transition-colors line-clamp-1 mb-2">
          <Link href={`/projects/${project.slug}`}>
            {project.name}
          </Link>
        </h3>

        <div className="flex items-center gap-1.5 text-slate-500 text-xs mb-3">
          <MapPin className="w-3.5 h-3.5 text-gold-500 shrink-0" />
          <span>{project.location}</span>
        </div>

        <p className="text-slate-600 text-xs line-clamp-2 leading-relaxed mb-4">
          {project.overview}
        </p>

        {/* Property Types Pill Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.propertyTypes.map((type, idx) => (
            <span key={idx} className="bg-slate-100 text-slate-700 text-[10px] font-semibold px-2.5 py-1 rounded-md">
              {type}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 block">Starting From</span>
            <span className="font-serif font-bold text-lg text-slate-900">{project.startingPrice}</span>
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-600 group-hover:text-gold-700 hover:underline"
          >
            <span>View Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
