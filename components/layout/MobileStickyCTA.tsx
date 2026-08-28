"use client";

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { companyData } from '@/data/company';
import { createWhatsAppLink } from '@/lib/utils';

interface MobileStickyCTAProps {
  propertyTitle?: string;
}

export const MobileStickyCTA: React.FC<MobileStickyCTAProps> = ({ propertyTitle }) => {
  const primaryPhone = companyData.phoneNumbers[0] || '0300-3413372';
  const cleanPhone = primaryPhone.replace(/[^0-9]/g, '');

  const defaultMsg = propertyTitle
    ? `Hello Blessing Marketing, I am interested in property: "${propertyTitle}". Please share price & site visit details.`
    : "Hello Blessing Marketing & Real Estate, I am looking for property assistance in Karachi.";

  const whatsappUrl = createWhatsAppLink(companyData.primaryWhatsApp, defaultMsg);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-slate-900/95 backdrop-blur-md border-t border-gold-500/30 p-2.5 px-4 shadow-2xl">
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        <a
          href={`tel:${cleanPhone}`}
          className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-gold-400 font-semibold py-3 px-4 rounded-xl border border-gold-500/30 text-sm transition-all active:scale-95"
        >
          <Phone className="w-4 h-4 text-gold-500 animate-pulse" />
          <span>Call Now</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-4 rounded-xl text-sm transition-all shadow-lg active:scale-95"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
