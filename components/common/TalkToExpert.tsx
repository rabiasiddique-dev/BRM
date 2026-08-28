import React from 'react';
import Link from 'next/link';
import { MessageCircle, PhoneCall } from 'lucide-react';
import { companyData } from '@/data/company';
import { createWhatsAppLink } from '@/lib/utils';

interface TalkToExpertProps {
  variant?: 'banner' | 'card' | 'inline';
  className?: string;
}

export const TalkToExpert: React.FC<TalkToExpertProps> = ({ variant = 'banner', className = '' }) => {
  const whatsappUrl = createWhatsAppLink(
    companyData.primaryWhatsApp,
    "Hello Blessing Marketing, I need help finding the right property. Can I speak to an expert?"
  );

  if (variant === 'inline') {
    return (
      <div className={`flex flex-wrap items-center gap-3 ${className}`}>
        <span className="text-sm text-slate-600 font-medium">Need help finding the right property?</span>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          Talk to an Expert
        </a>
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div className={`bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4 ${className}`}>
        <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
          <PhoneCall className="w-6 h-6 text-gold-600" />
        </div>
        <div>
          <h3 className="font-serif font-bold text-lg text-slate-900">Need Expert Guidance?</h3>
          <p className="text-sm text-slate-500 mt-1">Our consultants are available 6 days a week to help you find the perfect property.</p>
        </div>
        <div className="space-y-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl text-sm uppercase tracking-wider transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            Talk to an Expert
          </a>
          <a
            href={`tel:${companyData.phoneNumbers[0].replace(/[^0-9]/g, '')}`}
            className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-3 rounded-xl text-sm transition-all"
          >
            <PhoneCall className="w-4 h-4 text-gold-600" />
            {companyData.phoneNumbers[0]}
          </a>
        </div>
      </div>
    );
  }

  // Banner variant (default)
  return (
    <div className={`bg-gradient-to-r from-slate-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-gold-500/30 shadow-2xl relative overflow-hidden ${className}`}>
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-widest text-gold-400">Expert Property Guidance</div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold">Need Help Finding the Right Property?</h2>
          <p className="text-slate-300 text-sm max-w-lg">
            Our experienced consultants are ready to guide you — from shortlisting to site visits to final documentation. Talk to us today.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-7 py-4 rounded-xl text-sm uppercase tracking-wider transition-all shadow-lg whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            Talk to an Expert
          </a>
          <a
            href={`tel:${companyData.phoneNumbers[0].replace(/[^0-9]/g, '')}`}
            className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold px-7 py-4 rounded-xl text-sm border border-slate-700 transition-all whitespace-nowrap"
          >
            <PhoneCall className="w-4 h-4 text-gold-400" />
            {companyData.phoneNumbers[0]}
          </a>
        </div>
      </div>
    </div>
  );
};
