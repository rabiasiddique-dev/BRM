import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, CheckCircle, Home } from 'lucide-react';
import { propertiesData } from '@/data/properties';
import { PropertyCard } from '@/components/properties/PropertyCard';
import { TalkToExpert } from '@/components/common/TalkToExpert';
import { FAQAccordion } from '@/components/common/FAQAccordion';
import { faqsData } from '@/data/faqs';

export const metadata: Metadata = {
  title: 'Properties in Gulshan-e-Iqbal Karachi | Blessing Marketing & Real Estate',
  description: 'Find verified houses, apartments, offices and plots in Gulshan-e-Iqbal Karachi. Blessing Marketing\'s Gulshan branch serves all blocks including Block 13/B and University Road.',
};

export default function GulshanKarachiPage() {
  const properties = propertiesData.filter(p =>
    p.location.toLowerCase().includes('gulshan') || (p.subLocation || '').toLowerCase().includes('university')
  );
  const localFaqs = faqsData.filter(f => f.category === 'buying' || f.category === 'general').slice(0, 5);

  return (
    <div className="pt-28 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
        <Link href="/" className="hover:text-gold-600">Home</Link><span>/</span>
        <Link href="/properties" className="hover:text-gold-600">Properties</Link><span>/</span>
        <span className="text-slate-900">Gulshan-e-Iqbal Karachi</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-700 text-xs font-bold uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5" />Central Karachi
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
            Properties in <span className="gold-gradient-text">Gulshan-e-Iqbal</span>
          </h1>
          <p className="text-slate-600 leading-relaxed">
            Blessing Marketing's Gulshan-e-Iqbal branch on Main University Road serves all blocks of Gulshan — from residential apartments and family houses to prime commercial offices and retail shops.
          </p>
          <ul className="space-y-2">
            {['Branch office on Main University Road','All Gulshan blocks covered','Residential & commercial expertise','Verified tenant placement','Quick site visit arrangements'].map((h,i) => (
              <li key={i} className="flex items-center gap-2.5 text-sm text-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />{h}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/contact" className="bg-gold-gradient text-slate-950 font-bold px-6 py-3 rounded-xl text-sm uppercase tracking-wider shadow-md hover:opacity-95 transition-opacity">
              Contact Gulshan Office
            </Link>
            <Link href="/sell-your-property" className="bg-white border border-slate-200 hover:border-gold-400 text-slate-800 font-semibold px-6 py-3 rounded-xl text-sm transition-all inline-flex items-center gap-2">
              <Home className="w-4 h-4 text-gold-600" />Sell Your Property
            </Link>
          </div>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
          <h2 className="font-serif font-bold text-xl text-slate-900">Gulshan-e-Iqbal at a Glance</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            {[['Location','Central Karachi'],['Blocks','All Blocks (1–21)'],['Authority','KDA / MDA'],['Property Types','Residential & Commercial'],['Popular For','Apartments, Offices, Shops'],['Price Range','PKR 25 Lac – 15 Crore+']].map(([label,value])=>(
              <div key={label} className="bg-white rounded-xl p-3 border border-slate-100">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{label}</div>
                <div className="text-sm font-semibold text-slate-800 mt-0.5">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="font-serif text-3xl font-bold text-slate-900">Properties in Gulshan-e-Iqbal <span className="text-lg font-normal text-slate-400">({properties.length} listings)</span></h2>
        {properties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map(p=><PropertyCard key={p.id} property={p}/>)}
          </div>
        ):(
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-12 text-center space-y-4">
            <MapPin className="w-10 h-10 text-slate-300 mx-auto"/>
            <p className="text-slate-600 font-medium">Contact our Gulshan branch for exclusive off-market listings.</p>
            <Link href="/offices" className="inline-flex items-center gap-2 bg-slate-900 text-white font-bold px-6 py-3 rounded-xl text-sm uppercase tracking-wider hover:bg-slate-800 transition-colors">
              Visit Gulshan Office <ArrowRight className="w-4 h-4"/>
            </Link>
          </div>
        )}
      </div>

      <div className="space-y-6">
        <h2 className="font-serif text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
        <FAQAccordion faqs={localFaqs} showCategories={false}/>
      </div>
      <TalkToExpert variant="banner"/>
    </div>
  );
}
