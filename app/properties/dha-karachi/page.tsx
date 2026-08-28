import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Home, ArrowRight, CheckCircle } from 'lucide-react';
import { propertiesData } from '@/data/properties';
import { PropertyCard } from '@/components/properties/PropertyCard';
import { TalkToExpert } from '@/components/common/TalkToExpert';
import { FAQAccordion } from '@/components/common/FAQAccordion';
import { faqsData } from '@/data/faqs';

export const metadata: Metadata = {
  title: 'Properties in DHA Karachi | Houses, Plots & Commercial | Blessing Marketing',
  description: 'Buy or rent property in DHA Karachi. Find verified houses, residential plots, apartments and commercial properties in DHA Phase 1–8. Expert guidance by Blessing Marketing.',
};

const highlights = [
  'Specialist in DHA Phase 1 through Phase 8',
  'Cantonment transfer & documentation experts',
  'Verified title check on every listing',
  'Site visit arranged within 24 hours',
  'Competitive market valuation advisory',
];

export default function DHAKarachiPage() {
  const properties = propertiesData.filter(p =>
    p.location.toLowerCase().includes('dha') || (p.subLocation || '').toLowerCase().includes('dha')
  );
  const localFaqs = faqsData.filter(f => f.category === 'buying' || f.category === 'general').slice(0, 5);

  return (
    <div className="pt-28 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
        <Link href="/" className="hover:text-gold-600 transition-colors">Home</Link>
        <span>/</span>
        <Link href="/properties" className="hover:text-gold-600 transition-colors">Properties</Link>
        <span>/</span>
        <span className="text-slate-900">DHA Karachi</span>
      </nav>

      {/* Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-700 text-xs font-bold uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5" />
            DHA Karachi, Pakistan
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
            Properties in <span className="gold-gradient-text">DHA Karachi</span>
          </h1>
          <p className="text-slate-600 text-base leading-relaxed">
            Discover verified houses, residential plots, luxury apartments, and commercial properties across all DHA phases in Karachi. Blessing Marketing is your trusted real estate partner for DHA property transactions.
          </p>
          <ul className="space-y-2">
            {highlights.map((h, i) => (
              <li key={i} className="flex items-center gap-2.5 text-sm text-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                {h}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/contact" className="bg-gold-gradient text-slate-950 font-bold px-6 py-3 rounded-xl text-sm uppercase tracking-wider shadow-md hover:opacity-95 transition-opacity">
              Contact a DHA Specialist
            </Link>
            <Link href="/sell-your-property" className="bg-white border border-slate-200 hover:border-gold-400 text-slate-800 font-semibold px-6 py-3 rounded-xl text-sm transition-all inline-flex items-center gap-2">
              <Home className="w-4 h-4 text-gold-600" /> Sell Your DHA Property
            </Link>
          </div>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
          <h2 className="font-serif font-bold text-xl text-slate-900">DHA Karachi at a Glance</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            {[
              ['Location', 'South & Central Karachi'],
              ['Phases', 'Phase 1 to Phase 8'],
              ['Authority', 'Defence Housing Authority'],
              ['Property Types', 'Residential & Commercial'],
              ['Popular For', 'Luxury Villas, Plots, Offices'],
              ['Price Range', 'PKR 45 Lac – 50 Crore+'],
            ].map(([label, value]) => (
              <div key={label} className="bg-white rounded-xl p-3 border border-slate-100">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{label}</div>
                <div className="text-sm font-semibold text-slate-800 mt-0.5">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Listings */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-3xl font-bold text-slate-900">
            Available Properties in DHA
            <span className="text-lg font-normal text-slate-400 ml-3">({properties.length} listings)</span>
          </h2>
          <Link href="/properties?location=dha" className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-gold-600 uppercase tracking-wider hover:text-gold-700">
            All Listings <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        {properties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map(p => <PropertyCard key={p.id} property={p} />)}
          </div>
        ) : (
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-12 text-center space-y-4">
            <MapPin className="w-10 h-10 text-slate-300 mx-auto" />
            <p className="text-slate-600 font-medium">Contact us for exclusive off-market DHA listings not yet published online.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-slate-900 text-white font-bold px-6 py-3 rounded-xl text-sm uppercase tracking-wider hover:bg-slate-800 transition-colors">
              Request Off-Market Listings <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>

      {/* FAQ */}
      <div className="space-y-6">
        <h2 className="font-serif text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
        <FAQAccordion faqs={localFaqs} showCategories={false} />
      </div>

      <TalkToExpert variant="banner" />
    </div>
  );
}
