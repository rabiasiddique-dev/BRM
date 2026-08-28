import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';
import { propertiesData } from '@/data/properties';
import { PropertyCard } from '@/components/properties/PropertyCard';
import { TalkToExpert } from '@/components/common/TalkToExpert';

export const metadata: Metadata = {
  title: 'Properties in Taiser Town Karachi | Investment Plots | Blessing Marketing',
  description: 'Buy investment plots and residential properties in Taiser Town (MDA Scheme 45) Karachi. Affordable price range with high appreciation potential.',
};

export default function TaiserTownPage() {
  const properties = propertiesData.filter(p =>
    p.location.toLowerCase().includes('taiser') || (p.subLocation || '').toLowerCase().includes('taiser')
  );

  return (
    <div className="pt-28 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
        <Link href="/" className="hover:text-gold-600">Home</Link><span>/</span>
        <Link href="/properties" className="hover:text-gold-600">Properties</Link><span>/</span>
        <span className="text-slate-900">Taiser Town Karachi</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 text-xs font-bold uppercase tracking-widest">
            <TrendingUp className="w-3.5 h-3.5" />High-Growth Investment Zone
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
            Investment Plots in <span className="gold-gradient-text">Taiser Town</span>
          </h1>
          <p className="text-slate-600 leading-relaxed">
            MDA Scheme 45 — Taiser Town is Karachi's fastest-growing affordable investment corridor. Accessible price points with strong capital appreciation make it ideal for first-time investors and long-term portfolio builders.
          </p>
          <ul className="space-y-2">
            {['Sectors A to M — all covered','80, 100 & 120 sq yd plots','MDA allotment & transfer expertise','Rapid infrastructure development zone','Strong 5–7 year appreciation outlook'].map((h,i)=>(
              <li key={i} className="flex items-center gap-2.5 text-sm text-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0"/>{h}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="bg-gold-gradient text-slate-950 font-bold px-6 py-3 rounded-xl text-sm uppercase tracking-wider shadow-md hover:opacity-95 transition-opacity">
              Inquire About Taiser Town
            </Link>
            <Link href="/investment" className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl text-sm uppercase tracking-wider transition-colors inline-flex items-center gap-2">
              <TrendingUp className="w-4 h-4"/> Investment Guide
            </Link>
          </div>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
          <h2 className="font-serif font-bold text-xl text-slate-900">Taiser Town at a Glance</h2>
          <div className="grid grid-cols-2 gap-4">
            {[['Location','West Karachi, M-9 Motorway'],['Sectors','A – M (Multiple)'],['Authority','MDA Scheme 45'],['Property Types','Residential Plots'],['Popular For','Investment Plots, Low Budget'],['Price Range','PKR 8 Lac – 45 Lac']].map(([l,v])=>(
              <div key={l} className="bg-white rounded-xl p-3 border border-slate-100">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{l}</div>
                <div className="text-sm font-semibold text-slate-800 mt-0.5">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="font-serif text-3xl font-bold text-slate-900">Taiser Town Listings <span className="text-lg font-normal text-slate-400">({properties.length})</span></h2>
        {properties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map(p=><PropertyCard key={p.id} property={p}/>)}
          </div>
        ):(
          <div className="bg-gold-500/5 border border-gold-500/20 rounded-2xl p-12 text-center space-y-4">
            <TrendingUp className="w-10 h-10 text-gold-500 mx-auto"/>
            <h3 className="font-serif font-bold text-xl text-slate-800">Pre-Market Plots Available</h3>
            <p className="text-slate-600 text-sm max-w-sm mx-auto">Contact us for pre-market and off-market Taiser Town plot listings across all sectors.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gold-gradient text-slate-950 font-bold px-6 py-3 rounded-xl text-sm uppercase tracking-wider">
              Get Plot Listings <ArrowRight className="w-4 h-4"/>
            </Link>
          </div>
        )}
      </div>
      <TalkToExpert variant="banner"/>
    </div>
  );
}
