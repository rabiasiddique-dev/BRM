import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, TrendingUp, Home, ArrowRight, FileText, HelpCircle } from 'lucide-react';
import { TalkToExpert } from '@/components/common/TalkToExpert';

export const metadata: Metadata = {
  title: 'Property Guides | Buying, Selling & Investment in Karachi | Blessing Marketing',
  description: 'Comprehensive property guides for buying, selling, renting and investing in Karachi real estate. Expert advice from Blessing Marketing & Real Estate.',
};

const guides = [
  {
    href: '/guides/buying',
    icon: Home,
    title: 'Property Buying Guide',
    desc: 'Step-by-step guide to buying your first or next property in Karachi — from budget planning to title verification and registration.',
    steps: ['Budget Planning', 'Area Selection', 'Title Verification', 'Documentation', 'Registration'],
    color: 'bg-gold-500/10 border-gold-500/30 text-gold-700',
    cta: 'Read Buying Guide',
  },
  {
    href: '/guides/investment',
    icon: TrendingUp,
    title: 'Real Estate Investment Guide',
    desc: 'How to invest smartly in Karachi property — from identifying high-ROI areas to evaluating off-plan projects and rental yield calculations.',
    steps: ['Market Analysis', 'ROI Calculation', 'Area Selection', 'Risk Assessment', 'Portfolio Building'],
    color: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-700',
    cta: 'Read Investment Guide',
  },
];

const resources = [
  { icon: FileText, title: 'Karachi Property Transfer Process', href: '/faq' },
  { icon: HelpCircle, title: 'Frequently Asked Questions', href: '/faq' },
  { icon: TrendingUp, title: 'Current Market Trends', href: '/blog' },
  { icon: Home, title: 'Sell Your Property', href: '/sell-your-property' },
];

export default function GuidesPage() {
  return (
    <div className="pt-28 pb-20 space-y-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-700 text-xs font-bold uppercase tracking-widest">
          <BookOpen className="w-4 h-4" />Property Knowledge Base
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900">Property Guides</h1>
        <p className="text-slate-500 text-base max-w-2xl mx-auto leading-relaxed">
          Expert guides on buying, selling, renting and investing in Karachi real estate — written by our consultants with over 10 years of local market experience.
        </p>
      </section>

      {/* Guide Cards */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {guides.map(guide => {
          const Icon = guide.icon;
          return (
            <div key={guide.href} className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 group hover:shadow-luxury-hover transition-all duration-300">
              <div className="lg:col-span-4 p-8 bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-100 flex flex-col justify-center items-center text-center space-y-4">
                <div className={`w-16 h-16 rounded-2xl border flex items-center justify-center ${guide.color}`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h2 className="font-serif font-bold text-2xl text-slate-900">{guide.title}</h2>
                <div className="flex flex-wrap justify-center gap-2">
                  {guide.steps.map(step => (
                    <span key={step} className="bg-white border border-slate-200 text-slate-600 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                      {step}
                    </span>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-8 p-8 flex flex-col justify-between gap-6">
                <p className="text-slate-600 text-base leading-relaxed">{guide.desc}</p>
                <Link href={guide.href}
                  className="self-start inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-xl text-sm uppercase tracking-wider transition-colors">
                  {guide.cta} <ArrowRight className="w-4 h-4 text-gold-400" />
                </Link>
              </div>
            </div>
          );
        })}
      </section>

      {/* Quick Resources */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-6">Quick Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {resources.map((r, i) => {
            const Icon = r.icon;
            return (
              <Link key={i} href={r.href}
                className="group flex items-start gap-3 bg-white border border-slate-200 rounded-2xl p-5 hover:border-gold-400/40 hover:shadow-md transition-all duration-300">
                <div className="w-9 h-9 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-gold-600" />
                </div>
                <span className="text-sm font-semibold text-slate-800 group-hover:text-gold-700 transition-colors leading-tight">{r.title}</span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TalkToExpert variant="banner" />
      </section>
    </div>
  );
}
