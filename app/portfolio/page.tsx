"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SectionHeading } from '@/components/common/SectionHeading';
import { portfolioItemsData, caseStudiesData } from '@/data/portfolio';
import { Award, ShieldCheck, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { companyData } from '@/data/company';
import { createWhatsAppLink } from '@/lib/utils';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Project Marketing',
    'Corporate Real Estate',
    'Digital Marketing',
    'Investment',
  ];

  const filteredPortfolio = selectedCategory === 'All'
    ? portfolioItemsData
    : portfolioItemsData.filter(item => item.category === selectedCategory);

  const primaryWhatsAppUrl = createWhatsAppLink(
    companyData.primaryWhatsApp,
    "Hello Blessing Marketing, I am inquiring regarding your portfolio of work and case studies."
  );

  return (
    <div className="pt-24 pb-20 space-y-16 font-sans">
      
      {/* Hero */}
      <section className="bg-slate-950 text-white py-16 border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-widest">
            <Award className="w-4 h-4 text-gold-400" />
            <span>OUR WORK & CASE STUDIES</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight">
            Company <span className="gold-gradient-text">Portfolio Showcase</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Representing premier real estate developments, corporate commercial assets, and digital media campaigns across Karachi.
          </p>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-gold-gradient text-slate-950 shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPortfolio.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden flex flex-col justify-between group hover:shadow-2xl hover:border-gold-500/40 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden bg-slate-900">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-gold-400 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full border border-gold-500/30">
                  {item.category}
                </div>
              </div>

              <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-1.5 bg-gold-500/10 border border-gold-500/20 text-gold-700 px-3 py-1 rounded-full text-[11px] font-bold">
                    <ShieldCheck className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                    <span>OUR ROLE: {item.role}</span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-slate-900 group-hover:text-gold-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    {item.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span>Location: {item.location}</span>
                  <a
                    href={primaryWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-900 text-white font-bold uppercase px-4 py-2 rounded-xl hover:bg-slate-800 transition-all inline-flex items-center gap-1.5"
                  >
                    <span>Inquire Work</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gold-400" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies Deep Dive Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="VERIFIED RESULTS"
            title="Corporate Case Studies"
            description="Deep dives into client challenges, project marketing strategies, execution, and outcomes."
            light
            centered
          />

          <div className="space-y-8 mt-12">
            {caseStudiesData.map((cs) => (
              <div key={cs.id} className="bg-slate-950 p-8 sm:p-12 rounded-3xl border border-slate-800 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
                  <div>
                    <span className="bg-gold-500/20 text-gold-400 text-xs font-bold uppercase px-3 py-1 rounded-full border border-gold-500/30">
                      {cs.category}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-2">{cs.projectName}</h3>
                  </div>
                  <div className="text-xs text-slate-400 font-semibold">Client: {cs.clientName}</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-300">
                  <div>
                    <strong className="text-gold-400 block mb-1 uppercase text-xs">The Challenge</strong>
                    <p className="text-xs leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <strong className="text-gold-400 block mb-1 uppercase text-xs">Our Strategy</strong>
                    <p className="text-xs leading-relaxed">{cs.strategy}</p>
                  </div>
                  <div>
                    <strong className="text-gold-400 block mb-1 uppercase text-xs">Execution</strong>
                    <p className="text-xs leading-relaxed">{cs.execution}</p>
                  </div>
                </div>

                {/* Results Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800">
                  {cs.results.map((r, rIdx) => (
                    <div key={rIdx} className="bg-slate-900 p-4 rounded-xl text-center border border-slate-800">
                      <div className="font-serif font-extrabold text-gold-400 text-2xl">{r.metric}</div>
                      <div className="text-xs text-slate-400 font-medium mt-0.5">{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
