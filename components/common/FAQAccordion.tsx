"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ } from '@/data/faqs';

interface FAQAccordionProps {
  faqs: FAQ[];
  showCategories?: boolean;
}

const categoryLabels: Record<FAQ['category'], string> = {
  buying: 'Buying Property',
  selling: 'Selling Property',
  renting: 'Renting',
  investment: 'Investment',
  general: 'General',
  services: 'Our Services',
};

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs, showCategories = true }) => {
  const [openId, setOpenId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<FAQ['category'] | 'all'>('all');

  const categories = Array.from(new Set(faqs.map(f => f.category)));
  const filtered = activeCategory === 'all' ? faqs : faqs.filter(f => f.category === activeCategory);

  return (
    <div className="space-y-6">
      {/* Category Filter Pills */}
      {showCategories && (
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
              activeCategory === 'all'
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Questions
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-gold-gradient text-slate-950'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>
      )}

      {/* FAQ Items */}
      <div className="space-y-3">
        {filtered.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                isOpen ? 'border-gold-400 shadow-md' : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <button
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                className="w-full flex items-center justify-between p-5 text-left group"
              >
                <span className={`font-semibold text-sm pr-4 ${isOpen ? 'text-gold-700' : 'text-slate-900 group-hover:text-gold-700'} transition-colors`}>
                  {faq.question}
                </span>
                <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-gold-100 text-gold-700' : 'bg-slate-100 text-slate-500'}`}>
                  {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </button>
              {isOpen && (
                <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
