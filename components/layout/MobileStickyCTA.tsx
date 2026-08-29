"use client";

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { companyData } from '@/data/company';
import { createWhatsAppLink } from '@/lib/utils';

export const MobileStickyCTA: React.FC = () => {
  const primaryWhatsAppUrl = createWhatsAppLink(
    companyData.primaryWhatsApp,
    "Hello Blessing Marketing, I am interested in consulting regarding real estate project marketing and services."
  );

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-slate-950/95 backdrop-blur-md border-t border-gold-500/30 p-2.5 shadow-[0_-10px_25px_rgba(0,0,0,0.5)]">
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        <a
          href={`tel:${companyData.phoneNumbers[0].replace(/[^0-9]/g, '')}`}
          className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider py-3 rounded-xl border border-slate-800 transition-colors"
        >
          <Phone className="w-4 h-4 text-gold-400" />
          <span>Call Us</span>
        </a>

        <a
          href={primaryWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider py-3 rounded-xl shadow-lg transition-colors"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
