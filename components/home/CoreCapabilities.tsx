import React from 'react';
import Link from 'next/link';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Building2, Sparkles, Briefcase, Users, Landmark, ArrowRight } from 'lucide-react';

export const CoreCapabilities: React.FC = () => {
  return (
    <section className="bg-slate-900 text-white py-20 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          subtitle="OUR CAPABILITIES"
          title="What We Bring to Real Estate"
          description="Integrated corporate capabilities designed to elevate real estate developments and empower property decisions."
          light
          centered
        />

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-12">
          
          {/* Card 1: Project Marketing (7 cols) */}
          <Link
            href="/services/project-marketing"
            className="md:col-span-7 bg-slate-950/90 border border-slate-800 hover:border-gold-500/50 rounded-3xl p-8 sm:p-10 flex flex-col justify-between group transition-all shadow-2xl relative overflow-hidden min-h-[300px]"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-2xl group-hover:bg-gold-500/10 transition-all pointer-events-none" />
            
            <div>
              <div className="w-12 h-12 rounded-xl bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-6">
                <Building2 className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-gold-400">Flagship Capability</span>
              <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white mt-1 group-hover:text-gold-400 transition-colors">
                Project Marketing & Representation
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed max-w-xl">
                End-to-end launch strategy, brand architecture, developer representation, and full sales campaign execution for residential towers and commercial boulevards.
              </p>
            </div>

            <div className="pt-6 flex items-center gap-2 text-xs font-bold text-gold-400 group-hover:text-gold-300 uppercase tracking-wider">
              <span>Explore Capability</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 2: Digital Media Hub (5 cols) */}
          <Link
            href="/services/digital-real-estate-marketing"
            className="md:col-span-5 bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800 hover:border-gold-500/50 rounded-3xl p-8 flex flex-col justify-between group transition-all shadow-2xl relative overflow-hidden min-h-[300px]"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-gold-400">Digital Innovation</span>
              <h3 className="font-serif text-2xl font-bold text-white mt-1 group-hover:text-gold-400 transition-colors">
                Digital Media & Video Marketing
              </h3>
              <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                High-definition video walkthroughs, aerial drone showcases, and social media reels targeting local and overseas investors.
              </p>
            </div>

            <div className="pt-6 flex items-center gap-2 text-xs font-bold text-gold-400 uppercase tracking-wider">
              <span>Watch Digital Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 3: Sales & Business Development (5 cols) */}
          <Link
            href="/services/sales-business-development"
            className="md:col-span-5 bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800 hover:border-gold-500/50 rounded-3xl p-8 flex flex-col justify-between group transition-all shadow-2xl min-h-[260px]"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-6">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-gold-400">Sales Force</span>
              <h3 className="font-serif text-2xl font-bold text-white mt-1 group-hover:text-gold-400 transition-colors">
                Sales & Business Development
              </h3>
              <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                Dedicated on-site sales team management, corporate channel partnerships, and deal conversions.
              </p>
            </div>

            <div className="pt-6 flex items-center gap-2 text-xs font-bold text-gold-400 uppercase tracking-wider">
              <span>View Sales Engine</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 4: Real Estate Consultancy & Investment (7 cols) */}
          <Link
            href="/services/real-estate-consultancy"
            className="md:col-span-7 bg-slate-950/90 border border-slate-800 hover:border-gold-500/50 rounded-3xl p-8 sm:p-10 flex flex-col justify-between group transition-all shadow-2xl relative overflow-hidden min-h-[260px]"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-6">
                <Landmark className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-gold-400">Advisory</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1 group-hover:text-gold-400 transition-colors">
                Real Estate Consultancy & Investment Advisory
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed max-w-xl">
                Strategic financial modeling, yield calculations, Cantonment legal verification, and portfolio diversification for high-net-worth clients.
              </p>
            </div>

            <div className="pt-6 flex items-center gap-2 text-xs font-bold text-gold-400 uppercase tracking-wider">
              <span>Consult an Advisory Expert</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
};
