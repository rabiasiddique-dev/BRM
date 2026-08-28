import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Home, FileText, ShieldCheck, BadgeCheck, Landmark, MessageCircle } from 'lucide-react';
import { TalkToExpert } from '@/components/common/TalkToExpert';
import { companyData } from '@/data/company';
import { createWhatsAppLink } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Property Buying Guide Karachi | Step-by-Step | Blessing Marketing',
  description: 'Complete guide to buying property in Karachi. Learn about budgeting, area selection, due diligence, title verification, documentation, and property registration in Pakistan.',
};

const steps = [
  {
    no: '01',
    icon: Home,
    title: 'Define Your Budget & Requirements',
    content: [
      'Determine your total available budget including hidden costs (registration, agent fee, transfer)',
      'Clarify: residential or commercial? Sale or rent?',
      'Set your ideal size (sq yards / sq ft / number of bedrooms)',
      'Identify a primary area and 1–2 backup areas',
      'Budget for renovation costs if buying older properties',
    ],
    tip: 'Always add 8–12% on top of the asking price to cover stamp duty, transfer fees, and legal costs.',
  },
  {
    no: '02',
    icon: ShieldCheck,
    title: 'Area Selection & Research',
    content: [
      'Research growth trends: DHA, Clifton, Gulshan, Bahria Town, Taiser Town',
      'Visit multiple areas at different times of day',
      'Check accessibility to schools, hospitals, and workplace',
      'Investigate infrastructure quality (water, KESC, sewerage)',
      'Talk to local residents and established agents',
    ],
    tip: 'Our team provides free area comparison reports — ask your consultant.',
  },
  {
    no: '03',
    icon: BadgeCheck,
    title: 'Due Diligence & Title Verification',
    content: [
      'Request original ownership documents from seller',
      'Verify authenticity with the relevant authority (DHA, KDA, MDA, BOR)',
      'Check for encumbrances, mortgages, or legal disputes',
      'Confirm property tax clearance certificate',
      'Verify plot/unit numbers match the physical property',
    ],
    tip: 'Never pay any amount before verifying the title. Blessing Marketing conducts full title checks for all our clients.',
  },
  {
    no: '04',
    icon: FileText,
    title: 'Negotiation & Agreement',
    content: [
      'Negotiate price based on comparable recent sales in the area',
      'Draft and sign a Sale Agreement (Bayana / MOU)',
      'Specify exact payment schedule and possession date',
      'Include penalty clauses for non-compliance',
      'Keep all original payment receipts safely',
    ],
    tip: 'Our agents handle all negotiation on your behalf to ensure you pay market price or below.',
  },
  {
    no: '05',
    icon: Landmark,
    title: 'Registration & Transfer',
    content: [
      'Complete registration at Sub-Registrar Office or authority transfer office',
      'Pay stamp duty, CVT, and other applicable taxes',
      'Obtain transfer letter from DHA / KDA / MDA as applicable',
      'Register with the local union council (for open plots)',
      'Receive certified ownership documents in your name',
    ],
    tip: 'Transfer timelines: DHA (2–4 weeks), KDA/MDA (4–8 weeks), Bahria (2–3 weeks).',
  },
];

export default function BuyingGuidePage() {
  const whatsappUrl = createWhatsAppLink(
    companyData.primaryWhatsApp,
    "Hello Blessing Marketing, I read your Buying Guide and would like expert help with my property purchase."
  );

  return (
    <div className="pt-28 pb-20 space-y-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
        <Link href="/" className="hover:text-gold-600">Home</Link><span>/</span>
        <Link href="/guides" className="hover:text-gold-600">Guides</Link><span>/</span>
        <span className="text-slate-900">Buying Guide</span>
      </nav>

      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-700 text-xs font-bold uppercase tracking-widest">
          <Home className="w-3.5 h-3.5" />Complete Buying Guide
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900">How to Buy Property in Karachi</h1>
        <p className="text-slate-500 text-lg leading-relaxed">
          A step-by-step guide from our expert consultants to help you navigate Karachi's real estate market safely and confidently.
        </p>
      </div>

      {/* Steps */}
      <div className="space-y-8">
        {steps.map(step => {
          const Icon = step.icon;
          return (
            <div key={step.no} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 border-b border-slate-100 bg-slate-50">
                <span className="text-4xl font-serif font-bold text-slate-200">{step.no}</span>
                <div className="w-10 h-10 rounded-xl bg-gold-gradient flex items-center justify-center shadow-md shrink-0">
                  <Icon className="w-5 h-5 text-slate-950" />
                </div>
                <h2 className="font-serif font-bold text-xl text-slate-900">{step.title}</h2>
              </div>
              <div className="p-6 space-y-4">
                <ul className="space-y-2">
                  {step.content.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="bg-gold-500/5 border border-gold-500/20 rounded-xl p-4">
                  <p className="text-xs text-slate-700 leading-relaxed">
                    <strong className="text-gold-700">💡 Expert Tip:</strong> {step.tip}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="bg-slate-900 text-white rounded-2xl p-8 space-y-4 border border-gold-500/30">
        <h2 className="font-serif font-bold text-2xl">Ready to Start Your Property Journey?</h2>
        <p className="text-slate-300 text-sm leading-relaxed">
          Our consultants will guide you through every step — from area selection to final registration — at no additional consultation fee.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl text-sm uppercase tracking-wider transition-all">
            <MessageCircle className="w-4 h-4 fill-current" />WhatsApp a Consultant
          </a>
          <Link href="/properties" className="inline-flex items-center gap-2 bg-gold-gradient text-slate-950 font-bold px-6 py-3 rounded-xl text-sm uppercase tracking-wider">
            Browse Properties <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <TalkToExpert variant="inline" />
    </div>
  );
}
