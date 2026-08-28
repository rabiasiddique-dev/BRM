import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, CheckCircle, Home } from 'lucide-react';
import { propertiesData } from '@/data/properties';
import { PropertyCard } from '@/components/properties/PropertyCard';
import { TalkToExpert } from '@/components/common/TalkToExpert';

export const metadata: Metadata = {
  title: 'Properties in Bahria Town Karachi | Blessing Marketing & Real Estate',
  description: 'Buy property in Bahria Town Karachi. Find verified residential plots, houses, apartments & commercial shops across all precincts. Expert guidance by Blessing Marketing.',
};

export default function BahriaTownKarachiPage() {
  const properties = propertiesData.filter(p =>
    p.location.toLowerCase().includes('bahria') || (p.subLocation || '').toLowerCase().includes('bahria')
  );

  return (
    <div className="pt-28 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
        <Link href="/" className="hover:text-gold-600">Home</Link><span>/</span>
        <Link href="/properties" className="hover:text-gold-600">Properties</Link><span>/</span>
        <span className="text-slate-900">Bahria Town Karachi</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-700 text-xs font-bold uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5" />Super Highway, Karachi
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
            Properties in <span className="gold-gradient-text">Bahria Town Karachi</span>
          </h1>
          <p className="text-slate-600 leading-relaxed">
            Pakistan's largest gated community offers world-class infrastructure, 24/7 security, and high-yield investment opportunities. Blessing Marketing guides you through every precinct.
          </p>
          <ul className="space-y-2">
            {['All precincts covered (1–35+)','Residential plots, houses & apartments','Commercial shops & offices','High-footfall Midway Commercial expertise','Bahria developer liaison support'].map((h,i)=>(
              <li key={i} className="flex items-center gap-2.5 text-sm text-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0"/>{h}
              </li>
            ))}
          </ul>
          <Link href="/contact" className="inline-block bg-gold-gradient text-slate-950 font-bold px-6 py-3 rounded-xl text-sm uppercase tracking-wider shadow-md hover:opacity-95 transition-opacity">
            Inquire About Bahria Town Properties
          </Link>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
          <h2 className="font-serif font-bold text-xl text-slate-900">Bahria Town Karachi Overview</h2>
          <div className="grid grid-cols-2 gap-4">
            {[['Location','Super Highway, Karachi'],['Precincts','1 – 35+'],['Authority','Bahria Town Pvt. Ltd.'],['Property Types','Residential & Commercial'],['Popular For','Plots, Houses, Shops'],['Price Range','PKR 20 Lac – 25 Crore+']].map(([l,v])=>(
              <div key={l} className="bg-white rounded-xl p-3 border border-slate-100">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{l}</div>
                <div className="text-sm font-semibold text-slate-800 mt-0.5">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="font-serif text-3xl font-bold text-slate-900">Bahria Town Listings <span className="text-lg font-normal text-slate-400">({properties.length})</span></h2>
        {properties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map(p=><PropertyCard key={p.id} property={p}/>)}
          </div>
        ):(
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-12 text-center space-y-4">
            <MapPin className="w-10 h-10 text-slate-300 mx-auto"/>
            <p className="text-slate-600 font-medium">Contact us for off-market Bahria Town properties and pre-launch rates.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-slate-900 text-white font-bold px-6 py-3 rounded-xl text-sm uppercase tracking-wider hover:bg-slate-800 transition-colors">
              Contact Us <ArrowRight className="w-4 h-4"/>
            </Link>
          </div>
        )}
      </div>
      <TalkToExpert variant="banner"/>
    </div>
  );
}
