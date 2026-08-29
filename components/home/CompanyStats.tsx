"use client";

import React from 'react';
import { companyData } from '@/data/company';

export const CompanyStats: React.FC = () => {
  return (
    <section className="bg-slate-950 text-white py-16 border-y border-gold-500/20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-gold-400 mb-2">
            <span className="w-6 h-[2px] bg-gold-500 rounded-full inline-block" />
            <span>VERIFIED PERFORMANCE</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">
            Our Corporate Track Record
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {companyData.stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-slate-900/90 border border-slate-800 hover:border-gold-500/40 rounded-2xl p-6 transition-all shadow-xl group"
            >
              <div className="font-serif text-4xl sm:text-5xl font-extrabold text-gold-400 group-hover:scale-105 transition-transform duration-300">
                {stat.value}{stat.suffix}
              </div>
              <div className="font-bold text-sm sm:text-base text-white mt-2">
                {stat.label}
              </div>
              {stat.sublabel && (
                <div className="text-xs text-slate-400 font-medium mt-1">
                  {stat.sublabel}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
