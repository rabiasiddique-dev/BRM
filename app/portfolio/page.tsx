import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Home, Building, TrendingUp, Users, Layers, Briefcase } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { TalkToExpert } from '@/components/common/TalkToExpert';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Our Work & Portfolio | Blessing Marketing & Real Estate Karachi',
  description: 'Explore Blessing Marketing\'s portfolio of successful property sales, project marketing campaigns, residential and commercial transactions across Karachi.',
};

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Residential Sales', value: 'residential' },
  { label: 'Commercial', value: 'commercial' },
  { label: 'Investment', value: 'investment' },
  { label: 'Project Marketing', value: 'project' },
  { label: 'Rental', value: 'rental' },
];

const portfolio = [
  {
    category: 'residential',
    type: 'Property Sale',
    title: '5 Marla Villa — DHA Phase 5',
    result: 'Sold at PKR 4.6 Crore — above asking price',
    detail: 'Professional photography + targeted buyer outreach led to offer within 3 weeks.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    icon: Home,
  },
  {
    category: 'commercial',
    type: 'Commercial Rental',
    title: 'Corporate Office — Main University Road',
    result: 'Leased at PKR 3.5 Lac / month',
    detail: 'Verified corporate tenant secured within 30 days with full legal tenancy agreement.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    icon: Briefcase,
  },
  {
    category: 'investment',
    type: 'Investment Advisory',
    title: '500 Sq Yds Plot — DHA Phase 8',
    result: '38% capital appreciation in 2 years',
    detail: 'Investor guided to purchase at PKR 5.6 Crore, current market value PKR 7.8 Crore.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    icon: TrendingUp,
  },
  {
    category: 'project',
    type: 'Project Marketing',
    title: 'Gulshan Premium Enclave',
    result: '60% units sold at pre-launch stage',
    detail: 'Exclusive sales agency: social campaign, site office management & buyer onboarding.',
    image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=800&q=80',
    icon: Layers,
  },
  {
    category: 'residential',
    type: 'Property Sale',
    title: 'Sea View Apartment — Clifton Block 4',
    result: 'Sold at PKR 3.8 Crore in 45 days',
    detail: 'Professional presentation + our investor network resulted in qualified buyers within two weeks.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    icon: Home,
  },
  {
    category: 'commercial',
    type: 'Commercial Sale',
    title: 'Ground Floor Retail Shop — Bahria Town',
    result: 'Sold at PKR 2.1 Crore — immediate ROI',
    detail: 'Property was tenanted at time of sale, delivering instant 8% annual yield to investor.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    icon: Building,
  },
];

const stats = [
  { value: '500+', label: 'Successful Transactions' },
  { value: '10+', label: 'Years in Market' },
  { value: '1000+', label: 'Clients Served' },
  { value: '2', label: 'Active Offices' },
];

export default function PortfolioPage() {
  return (
    <div className="pt-28 pb-20 space-y-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 text-white rounded-3xl p-10 sm:p-16 border border-gold-500/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-widest">
                <CheckCircle className="w-4 h-4" />
                Proven Track Record
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">
                Our Work & Portfolio
              </h1>
              <p className="text-slate-300 text-base leading-relaxed">
                A decade of successful property transactions, project marketing campaigns, and investment advisory across Karachi's most sought-after areas.
              </p>
              <WhatsAppButton
                label="Discuss Your Property"
                message="Hello Blessing Marketing, I'd like to discuss a property transaction. Please contact me."
                className="text-sm"
              />
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat, i) => (
                <div key={i} className="bg-slate-800/60 border border-gold-500/20 rounded-2xl p-6 text-center">
                  <div className="font-serif font-bold text-4xl text-gold-400">{stat.value}</div>
                  <div className="text-sm text-slate-400 mt-1 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Case Studies"
          title="Selected Transactions & Results"
          description="Real deals, real results. A selection of successful property transactions and marketing campaigns handled by our team."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {portfolio.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-luxury-hover transition-all duration-300 overflow-hidden group">
                {/* Image */}
                <div className="relative h-48 bg-slate-900 overflow-hidden">
                  <Image src={item.image} alt={item.title} fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-gold-gradient text-slate-950 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                      {item.type}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-950/80 border border-gold-500/30 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-gold-400" />
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="font-serif font-bold text-lg text-slate-900 group-hover:text-gold-700 transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-sm font-semibold text-emerald-700">{item.result}</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="font-serif text-3xl font-bold text-slate-900">Ready to Add Your Success Story?</h2>
            <p className="text-slate-500 leading-relaxed">
              Whether you're buying, selling, renting, or investing — Blessing Marketing delivers results. Join 1000+ satisfied clients across Karachi.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/sell-your-property"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-colors">
                Sell Your Property <ArrowRight className="w-4 h-4 text-gold-400" />
              </Link>
              <WhatsAppButton label="Talk to Our Team" message="Hello Blessing Marketing, I saw your portfolio and would like to discuss a property matter." className="text-xs" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {['Property Sales', 'Project Marketing', 'Rental Management', 'Investment Advisory'].map((s, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-gold-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TalkToExpert variant="banner" />
      </section>
    </div>
  );
}
