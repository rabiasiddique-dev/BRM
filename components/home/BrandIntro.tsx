import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Award } from 'lucide-react';
import { companyData } from '@/data/company';

export const BrandIntro: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-sans">
      <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative overflow-hidden">
        
        {/* Background Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="lg:col-span-7 space-y-6 text-white">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-gold-400">
            <span className="w-6 h-[2px] bg-gold-500 rounded-full inline-block" />
            <span>WHO WE ARE</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Connecting People, Projects & Opportunities
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
            Blessing Marketing & Real Estate is a premier real estate marketing and consultancy company focused on connecting people, projects and opportunities across Karachi's residential and commercial corridors.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              href="/about"
              className="bg-gold-gradient hover:opacity-95 text-slate-950 font-bold px-7 py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg transition-all inline-flex items-center gap-2"
            >
              <span>Discover Our Story</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/services"
              className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-7 py-3.5 rounded-xl border border-slate-700 text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2"
            >
              <span>Our Capabilities</span>
            </Link>
          </div>
        </div>

        {/* Corporate CEO Highlight Frame */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden border-2 border-gold-500/30 shadow-2xl h-80 sm:h-96">
            <Image
              src={companyData.representative.avatar}
              alt={companyData.representative.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/90 backdrop-blur-md border border-gold-500/30 text-white">
              <div className="font-serif font-bold text-lg">{companyData.representative.name}</div>
              <div className="text-xs text-gold-400 font-semibold">{companyData.representative.title}</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
