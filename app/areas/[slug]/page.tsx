import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { MapPin, ArrowRight } from 'lucide-react';
import { companyData } from '@/data/company';
import { propertiesData } from '@/data/properties';
import { PropertyCard } from '@/components/properties/PropertyCard';
import { TalkToExpert } from '@/components/common/TalkToExpert';

export async function generateStaticParams() {
  return (companyData.areasServed || []).map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const area = (companyData.areasServed || []).find(a => a.slug === params.slug);
  if (!area) return {};
  return {
    title: `Properties in ${area.name} | Blessing Marketing & Real Estate`,
    description: `Browse verified properties in ${area.name}, Karachi. Blessing Marketing offers houses, plots, apartments and commercial listings in ${area.name}.`,
  };
}

export default function AreaDetailPage({ params }: { params: { slug: string } }) {
  const area = (companyData.areasServed || []).find(a => a.slug === params.slug);
  if (!area) notFound();

  // Match properties by location name (partial match)
  const areaKeyword = area.name.split(' ')[0].toLowerCase();
  const areaProperties = propertiesData.filter(p =>
    p.location.toLowerCase().includes(areaKeyword) ||
    (p.subLocation || '').toLowerCase().includes(areaKeyword)
  );

  return (
    <div className="pt-28 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
        <Link href="/" className="hover:text-gold-600 transition-colors">Home</Link>
        <span>/</span>
        <Link href="/areas" className="hover:text-gold-600 transition-colors">Areas</Link>
        <span>/</span>
        <span className="text-slate-900">{area.name}</span>
      </div>

      {/* Hero */}
      <div className="relative rounded-3xl overflow-hidden min-h-[340px] flex items-end">
        {area.image && (
          <Image src={area.image} alt={area.name} fill className="object-cover" sizes="100vw" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        <div className="relative z-10 p-8 sm:p-12 text-white space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-gold-400 bg-gold-500/15 border border-gold-500/30 px-3 py-1.5 rounded-full uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            Karachi, Pakistan
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold">{area.name}</h1>
          <p className="text-slate-300 text-base max-w-2xl leading-relaxed">{area.description}</p>
        </div>
      </div>

      {/* Properties in Area */}
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-serif text-3xl font-bold text-slate-900">Properties in {area.name}</h2>
            <p className="text-slate-500 text-sm mt-1">
              {areaProperties.length > 0
                ? `${areaProperties.length} listing${areaProperties.length !== 1 ? 's' : ''} found`
                : 'More listings being added — contact us for off-market properties'}
            </p>
          </div>
          <Link href="/properties" className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-gold-600 hover:text-gold-700 uppercase tracking-wider">
            All Listings <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {areaProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areaProperties.map(p => <PropertyCard key={p.id} property={p} />)}
          </div>
        ) : (
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-12 text-center space-y-4">
            <MapPin className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="font-serif font-bold text-xl text-slate-700">Off-Market Opportunities Available</h3>
            <p className="text-slate-500 text-sm max-w-md mx-auto">
              We have unlisted properties in {area.name}. Contact our team for exclusive listings not yet published online.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-slate-900 text-white font-bold px-6 py-3 rounded-xl text-sm uppercase tracking-wider hover:bg-slate-800 transition-colors mt-4">
              Contact for Off-Market Listings <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>

      <TalkToExpert variant="banner" />
    </div>
  );
}
