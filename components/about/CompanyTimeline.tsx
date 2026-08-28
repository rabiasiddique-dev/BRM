import React from 'react';
import { Star, Building, Trophy, Globe, Layers, TrendingUp, Rocket } from 'lucide-react';
import { companyData } from '@/data/company';
import { SectionHeading } from '@/components/common/SectionHeading';

const iconMap: Record<string, React.ElementType> = {
  star: Star,
  building: Building,
  trophy: Trophy,
  globe: Globe,
  layers: Layers,
  trending: TrendingUp,
  rocket: Rocket,
};

export const CompanyTimeline: React.FC = () => {
  const timeline = companyData.timeline || [];

  return (
    <section id="our-story" className="space-y-10">
      <SectionHeading
        subtitle="Our Journey"
        title="Our Story"
        description={companyData.story}
        centered
      />

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-400 via-gold-500/50 to-transparent transform sm:-translate-x-0.5" />

        <div className="space-y-8 sm:space-y-12">
          {timeline.map((event, idx) => {
            const Icon = iconMap[event.icon || 'star'] || Star;
            const isRight = idx % 2 === 0;
            const isFuture = event.year === 'Future';

            return (
              <div
                key={idx}
                className={`relative flex items-start gap-6 sm:gap-0 ${
                  isRight ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* Content Box */}
                <div className={`pl-16 sm:pl-0 sm:w-[calc(50%-2.5rem)] ${isRight ? 'sm:pr-10 sm:text-right' : 'sm:pl-10'}`}>
                  <div
                    className={`bg-white rounded-2xl border shadow-sm p-6 space-y-2 transition-all hover:shadow-md ${
                      isFuture ? 'border-gold-500/40 bg-gold-500/5' : 'border-slate-200'
                    }`}
                  >
                    <div className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                      isFuture ? 'bg-gold-500/20 text-gold-700' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {event.year}
                    </div>
                    <h3 className="font-serif font-bold text-lg text-slate-900">{event.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{event.description}</p>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center shadow-lg shadow-gold-500/30 shrink-0 z-10">
                  <Icon className="w-5 h-5 text-slate-950" />
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden sm:block sm:w-[calc(50%-2.5rem)]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
