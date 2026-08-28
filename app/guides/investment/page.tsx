import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ArrowRight, TrendingUp, PieChart, Landmark, Building, MessageCircle } from 'lucide-react';
import { TalkToExpert } from '@/components/common/TalkToExpert';
import { InvestmentConsultationForm } from '@/components/common/InvestmentConsultationForm';
import { companyData } from '@/data/company';
import { createWhatsAppLink } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Real Estate Investment Guide Karachi | ROI & Strategy | Blessing Marketing',
  description: 'Learn how to invest in Karachi real estate. ROI calculation, area analysis, off-plan project evaluation, and portfolio building strategies from Blessing Marketing experts.',
};

const investmentTypes = [
  {
    icon: Landmark,
    title: 'Residential Plots',
    roi: '20–45% in 3–5 years',
    areas: 'DHA Phase 8, Taiser Town, Bahria Town',
    min: 'PKR 8 Lac+',
    color: 'bg-gold-500/10 border-gold-500/30',
    pros: ['High capital appreciation', 'Lowest entry point', 'MDA/DHA backed'],
  },
  {
    icon: Building,
    title: 'Commercial Rentals',
    roi: '7–10% annual yield',
    areas: 'Gulshan Uni Road, DHA Commercial, Clifton',
    min: 'PKR 50 Lac+',
    color: 'bg-blue-500/10 border-blue-500/30',
    pros: ['Recurring rental income', 'Tenant demand always high', 'Easy to liquify'],
  },
  {
    icon: TrendingUp,
    title: 'Off-Plan Projects',
    roi: '25–50% on completion',
    areas: 'DHA City, Clifton, Gulshan',
    min: 'PKR 30 Lac+',
    color: 'bg-emerald-500/10 border-emerald-500/30',
    pros: ['Pre-launch pricing', 'Easy installment plan', 'High return on completion'],
  },
  {
    icon: PieChart,
    title: 'Residential Rental',
    roi: '4–7% annual yield',
    areas: 'PECHS, Gulshan, DHA',
    min: 'PKR 80 Lac+',
    color: 'bg-purple-500/10 border-purple-500/30',
    pros: ['Stable monthly income', 'Inflation hedge', 'Appreciation + income'],
  },
];

const principles = [
  'Always verify legal title before any financial commitment',
  'Diversify across at least 2 different areas or property types',
  'Calculate total cost: purchase + taxes + renovation + agent fee',
  'Evaluate rental yield AND capital appreciation together',
  'Set a clear 3, 5, or 10-year exit strategy before buying',
  'Keep 15–20% liquidity reserve outside your property portfolio',
];

export default function InvestmentGuidePage() {
  const whatsappUrl = createWhatsAppLink(
    companyData.primaryWhatsApp,
    "Hello Blessing Marketing, I read your Investment Guide and would like a free consultation on my portfolio."
  );

  return (
    <div className="pt-28 pb-20 space-y-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-gold-600">Home</Link><span>/</span>
          <Link href="/guides" className="hover:text-gold-600">Guides</Link><span>/</span>
          <span className="text-slate-900">Investment Guide</span>
        </nav>

        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 text-xs font-bold uppercase tracking-widest">
            <TrendingUp className="w-3.5 h-3.5" />Investment Advisory
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900">Real Estate Investment Guide — Karachi</h1>
          <p className="text-slate-500 text-lg leading-relaxed">
            How to build a high-yield property portfolio in Karachi — from identifying the right market to calculating returns and managing risk.
          </p>
        </div>

        {/* Why Real Estate */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 border border-gold-500/30 space-y-4">
          <h2 className="font-serif font-bold text-2xl">Why Karachi Real Estate?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            {[['PKR 8T+', 'Market Size (Est.)'], ['8–12%', 'Avg. Annual Appreciation'], ['6M+', 'Housing Demand Backlog']].map(([val, label]) => (
              <div key={label} className="bg-slate-800/60 border border-slate-700 rounded-xl p-4">
                <div className="font-serif font-bold text-3xl text-gold-400">{val}</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">{label}</div>
              </div>
            ))}
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">
            With massive housing demand, growing middle class, and limited quality supply in premium areas — Karachi property remains one of Pakistan's most resilient and rewarding investment asset classes.
          </p>
        </div>

        {/* Investment Types */}
        <div className="space-y-6">
          <h2 className="font-serif text-3xl font-bold text-slate-900">Investment Types & Returns</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {investmentTypes.map((type, i) => {
              const Icon = type.icon;
              return (
                <div key={i} className={`bg-white border rounded-2xl p-6 space-y-4 shadow-sm hover:shadow-md transition-all ${type.color}`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${type.color}`}>
                      <Icon className="w-5 h-5 text-slate-700" />
                    </div>
                    <h3 className="font-serif font-bold text-lg text-slate-900">{type.title}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-white/80 rounded-xl p-3 border border-white">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Typical ROI</div>
                      <div className="font-bold text-emerald-700 mt-0.5">{type.roi}</div>
                    </div>
                    <div className="bg-white/80 rounded-xl p-3 border border-white">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Min. Investment</div>
                      <div className="font-bold text-slate-800 mt-0.5">{type.min}</div>
                    </div>
                  </div>
                  <ul className="space-y-1.5">
                    {type.pros.map((pro, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-slate-600">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />{pro}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Principles */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 space-y-5">
          <h2 className="font-serif font-bold text-2xl text-slate-900">6 Principles of Safe Property Investment</h2>
          <ul className="space-y-3">
            {principles.map((p, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                <div className="w-6 h-6 rounded-full bg-gold-gradient flex items-center justify-center text-[10px] font-bold text-slate-950 shrink-0">{i+1}</div>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Consultation Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-6">
          <h2 className="font-serif text-3xl font-bold text-slate-900">Get a Free Investment Consultation</h2>
          <p className="text-slate-500">Tell us your goals and budget — our consultant will map out the best Karachi investment strategy for you.</p>
        </div>
        <InvestmentConsultationForm />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TalkToExpert variant="banner" />
      </section>
    </div>
  );
}
