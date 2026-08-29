import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, ShieldCheck } from 'lucide-react';
import { projectsData } from '@/data/projects';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';

const project = projectsData[0];

export const FeaturedOpportunity: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
      <div className="relative rounded-3xl overflow-hidden border border-gold-500/30 shadow-2xl min-h-[480px] flex items-end">
        {/* Background Image */}
        <Image
          src={project.heroImage}
          alt={project.name}
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/20" />

        {/* Badge */}
        <div className="absolute top-6 left-6 flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 bg-gold-gradient text-slate-950 font-bold text-xs px-4 py-1.5 rounded-full shadow-lg uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 fill-current" />
            FEATURED PROJECT PORTFOLIO
          </span>
        </div>

        {/* Content */}
        <div className="relative z-10 p-8 sm:p-12 w-full">
          <div className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-gold-400 bg-gold-500/20 border border-gold-500/30">
                {project.status}
              </span>
              <span className="px-3 py-1 rounded-md text-xs font-semibold bg-white/10 text-white uppercase tracking-wider backdrop-blur-sm">
                {project.projectType}
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight tracking-tight">
              {project.name}
            </h2>

            <div className="flex items-center gap-2 text-slate-300 text-sm">
              <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
              <span>{project.location}, {project.city}</span>
            </div>

            <div className="text-gold-400 text-xs font-bold uppercase tracking-wider">
              OUR ROLE: {project.ourRole}
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl line-clamp-2">
              {project.overview}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href={`/projects/${project.slug}`}
                className="bg-gold-gradient text-slate-950 font-bold px-7 py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg hover:opacity-95 transition-all inline-flex items-center gap-2"
              >
                <span>Explore Project Details</span> <ArrowRight className="w-4 h-4" />
              </Link>
              <WhatsAppButton
                message={`Hello Blessing Marketing, I am inquiring regarding the Featured Project: "${project.name}" (${project.ourRole}). Please share more information.`}
                label="Consult Representative"
                className="py-3.5 px-7 text-xs uppercase tracking-wider"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
