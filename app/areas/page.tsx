import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { TalkToExpert } from '@/components/common/TalkToExpert';
import { companyData } from '@/data/company';

export const metadata: Metadata = {
  title: 'Areas We Serve | Blessing Marketing & Real Estate Karachi',
  description: 'Blessing Marketing serves DHA, Clifton, Gulshan-e-Iqbal, Bahria Town, Taiser Town and all major real estate markets in Karachi. Find your property in your preferred area.',
};

export default function AreasPage() {
  const areas = companyData.areasServed || [];

  return (
    <div className="pt-28 pb-20 space-y-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-700 text-xs font-bold uppercase tracking-widest">
          <MapPin className="w-4 h-4" />
          Serving All of Karachi
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">Areas We Serve</h1>
        <p className="text-slate-500 text-base max-w-2xl mx-auto leading-relaxed">
          From premium DHA phases to emerging investment corridors, we have expert knowledge of Karachi's most sought-after property markets.
        </p>
      </section>

      {/* Areas Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area) => (
            <Link
              key={area.slug}
              href={`/areas/${area.slug}`}
              className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-luxury-hover transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-52 bg-slate-900 overflow-hidden">
                {area.image && (
                  <Image
                    src={area.image}
                    alt={area.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="bg-gold-gradient text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Prime Area
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold-600 shrink-0" />
                  <h2 className="font-serif font-bold text-xl text-slate-900 group-hover:text-gold-700 transition-colors">
                    {area.name}
                  </h2>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">{area.description}</p>
                <div className="flex items-center gap-1.5 text-xs font-bold text-gold-600 group-hover:text-gold-700 pt-1">
                  View Properties <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Talk to Expert */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TalkToExpert variant="banner" />
      </section>
    </div>
  );
}
