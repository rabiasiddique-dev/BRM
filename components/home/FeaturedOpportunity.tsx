import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, Star } from 'lucide-react';
import { propertiesData } from '@/data/properties';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';

// Use the first featured property for the spotlight
const opportunity = propertiesData.find(p => p.featured && p.status === 'featured') || propertiesData[0];

export const FeaturedOpportunity: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-3xl overflow-hidden border border-gold-500/30 shadow-2xl min-h-[520px] flex items-end">
        {/* Background Image */}
        <Image
          src={opportunity.images[0]}
          alt={opportunity.title}
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/20" />

        {/* Badge */}
        <div className="absolute top-6 left-6 flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 bg-gold-gradient text-slate-950 font-bold text-xs px-4 py-1.5 rounded-full shadow-lg uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-current" />
            Featured Opportunity
          </span>
        </div>

        {/* Content */}
        <div className="relative z-10 p-8 sm:p-12 w-full">
          <div className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-white ${opportunity.purpose === 'sale' ? 'bg-gold-600' : 'bg-emerald-600'}`}>
                For {opportunity.purpose}
              </span>
              <span className="px-3 py-1 rounded-md text-xs font-semibold bg-white/10 text-white uppercase tracking-wider backdrop-blur-sm">
                {opportunity.type}
              </span>
              {opportunity.status === 'new' && (
                <span className="px-3 py-1 rounded-md text-xs font-bold bg-sky-600 text-white uppercase tracking-wider">New</span>
              )}
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight tracking-tight">
              {opportunity.title}
            </h2>

            <div className="flex items-center gap-2 text-slate-300 text-sm">
              <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
              <span>{opportunity.location}, {opportunity.city}</span>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl line-clamp-2">
              {opportunity.description}
            </p>

            <div className="pt-2">
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Asking Price</div>
              <div className="font-serif text-3xl sm:text-4xl font-bold text-white mt-1">
                {opportunity.priceDisplay}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href={`/properties/${opportunity.slug}`}
                className="bg-gold-gradient text-slate-950 font-bold px-7 py-3.5 rounded-xl text-sm uppercase tracking-wider shadow-lg hover:opacity-95 transition-all inline-flex items-center gap-2"
              >
                View Full Details <ArrowRight className="w-4 h-4" />
              </Link>
              <WhatsAppButton
                message={`Hello Blessing Marketing, I am interested in the Featured Opportunity: "${opportunity.title}" (${opportunity.priceDisplay}). Please share more details.`}
                label="Inquire on WhatsApp"
                className="py-3.5 px-7 text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
