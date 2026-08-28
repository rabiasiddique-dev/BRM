import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, CheckCircle } from 'lucide-react';
import { propertiesData } from '@/data/properties';
import { PropertyCard } from '@/components/properties/PropertyCard';
import { TalkToExpert } from '@/components/common/TalkToExpert';

export const metadata: Metadata = {
  title: 'Properties in Clifton Karachi | Luxury Real Estate | Blessing Marketing',
  description: 'Find luxury apartments, sea view villas and premium properties in Clifton Karachi. Blessing Marketing specialises in high-value Clifton Block transactions.',
};

export default function CliftonKarachiPage() {
  const properties = propertiesData.filter(p =>
    p.location.toLowerCase().includes('clifton') || (p.subLocation || '').toLowerCase().includes('clifton')
  );

  return (
    <div className="pt-28 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
        <Link href="/" className="hover:text-gold-600">Home</Link><span>/</span>
        <Link href="/properties" className="hover:text-gold-600">Properties</Link><span>/</span>
        <span className="text-slate-900">Clifton Karachi</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-700 text-xs font-bold uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5" />Karachi's Prestige Address
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
            Luxury Properties in <span className="gold-gradient-text">Clifton</span>
          </h1>
          <p className="text-slate-600 leading-relaxed">
            Clifton is Karachi's most prestigious residential address — home to sea-view apartments, executive penthouses, and exclusive diplomats' enclave villas. Blessing Marketing brings you verified access to the finest listings.
          </p>
          <ul className="space-y-2">
            {['Sea view & Marina frontage properties','Clifton Block 1–9 covered','Luxury apartment specialists','High-value title verification','Diplomatic enclave experience'].map((h,i)=>(
              <li key={i} className="flex items-center gap-2.5 text-sm text-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0"/>{h}
              </li>
            ))}
          </ul>
          <Link href="/contact" className="inline-block bg-gold-gradient text-slate-950 font-bold px-6 py-3 rounded-xl text-sm uppercase tracking-wider shadow-md hover:opacity-95 transition-opacity">
            Request Clifton Listings
          </Link>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
          <h2 className="font-serif font-bold text-xl text-slate-900">Clifton Karachi at a Glance</h2>
          <div className="grid grid-cols-2 gap-4">
            {[['Location','South Karachi Seafront'],['Blocks','Block 1 – 9'],['Authority','MDA / Private Title'],['Property Types','Luxury Residential'],['Popular For','Sea View Apartments, Villas'],['Price Range','PKR 1.5 Crore – 75 Crore+']].map(([l,v])=>(
              <div key={l} className="bg-white rounded-xl p-3 border border-slate-100">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{l}</div>
                <div className="text-sm font-semibold text-slate-800 mt-0.5">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="font-serif text-3xl font-bold text-slate-900">Clifton Listings <span className="text-lg font-normal text-slate-400">({properties.length})</span></h2>
        {properties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map(p=><PropertyCard key={p.id} property={p}/>)}
          </div>
        ):(
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-12 text-center space-y-4">
            <MapPin className="w-10 h-10 text-slate-300 mx-auto"/>
            <p className="text-slate-600 font-medium">We manage exclusive unlisted Clifton properties — contact us for a private showing.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-slate-900 text-white font-bold px-6 py-3 rounded-xl text-sm uppercase tracking-wider hover:bg-slate-800 transition-colors">
              Request Private Listings <ArrowRight className="w-4 h-4"/>
            </Link>
          </div>
        )}
      </div>
      <TalkToExpert variant="banner"/>
    </div>
  );
}
