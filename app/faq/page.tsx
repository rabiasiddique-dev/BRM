import React from 'react';
import type { Metadata } from 'next';
import { HelpCircle } from 'lucide-react';
import { FAQAccordion } from '@/components/common/FAQAccordion';
import { TalkToExpert } from '@/components/common/TalkToExpert';
import { faqsData } from '@/data/faqs';

export const metadata: Metadata = {
  title: 'FAQ | Frequently Asked Questions | Blessing Marketing & Real Estate',
  description: 'Find answers to common questions about buying, selling, renting, and investing in property through Blessing Marketing & Real Estate in Karachi.',
};

export default function FAQPage() {
  return (
    <div className="pt-28 pb-20 space-y-16">
      {/* Header */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-700 text-xs font-bold uppercase tracking-widest">
          <HelpCircle className="w-4 h-4" />
          Got Questions?
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900">
          Frequently Asked Questions
        </h1>
        <p className="text-slate-500 text-base leading-relaxed">
          Everything you need to know about buying, selling, renting, and investing in Karachi real estate with Blessing Marketing.
        </p>
      </section>

      {/* FAQ Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQAccordion faqs={faqsData} showCategories={true} />
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TalkToExpert variant="banner" />
      </section>
    </div>
  );
}
