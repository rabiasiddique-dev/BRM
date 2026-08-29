import React from 'react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { companyData } from '@/data/company';

export const ProcessSection: React.FC = () => {
  return (
    <section className="bg-slate-950 text-white py-20 border-y border-gold-500/20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="METHODOLOGY"
          title="How We Work"
          description="Our 7-step corporate process ensures professional representation, legal security, and optimal project performance."
          light
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 mt-12">
          {companyData.processSteps.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/90 border border-slate-800 hover:border-gold-500/40 rounded-2xl p-5 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="font-serif text-3xl font-extrabold text-gold-400 mb-3 group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <h3 className="font-serif text-base font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
