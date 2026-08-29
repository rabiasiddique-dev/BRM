import React from 'react';
import Link from 'next/link';
import { SectionHeading } from '@/components/common/SectionHeading';
import { faqsData } from '@/data/faqs';
import { HelpCircle, ArrowRight, MessageCircle } from 'lucide-react';
import { companyData } from '@/data/company';
import { createWhatsAppLink } from '@/lib/utils';

export default function FAQPage() {
  const primaryWhatsAppUrl = createWhatsAppLink(
    companyData.primaryWhatsApp,
    "Hello Blessing Marketing, I have a question regarding your company services."
  );

  return (
    <div className="pt-24 pb-20 space-y-16 font-sans">
      <section className="bg-slate-950 text-white py-16 border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-widest">
            <HelpCircle className="w-4 h-4 text-gold-400" />
            <span>COMPANY FAQ</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight">
            Frequently Asked <span className="gold-gradient-text">Questions</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Direct answers regarding Blessing Marketing & Real Estate, developer representation, project marketing, and consultancy services.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {faqsData.map((faq) => (
            <div key={faq.id} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md space-y-3">
              <span className="text-[10px] font-extrabold uppercase tracking-widest bg-gold-500/10 text-gold-700 px-3 py-1 rounded-full">
                {faq.category}
              </span>
              <h3 className="font-serif font-bold text-xl text-slate-900 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-gold-600 shrink-0" />
                <span>{faq.question}</span>
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed pl-7">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-12 text-center">
          <a
            href={primaryWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-xl text-xs uppercase tracking-wider shadow-lg inline-flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Ask a Specific Question on WhatsApp</span>
          </a>
        </div>
      </section>
    </div>
  );
}
