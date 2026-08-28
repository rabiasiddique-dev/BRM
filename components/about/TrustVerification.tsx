import React from 'react';
import { ShieldCheck, BadgeCheck, Calendar, Users, Building, FileText } from 'lucide-react';
import { companyData } from '@/data/company';
import { SectionHeading } from '@/components/common/SectionHeading';

const iconMap: Record<string, React.ElementType> = {
  shield: ShieldCheck,
  badge: BadgeCheck,
  calendar: Calendar,
  users: Users,
  building: Building,
  file: FileText,
};

export const TrustVerification: React.FC = () => {
  const verifications = companyData.verifications || [];

  return (
    <section id="trust" className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-gold-500/20 space-y-10">
      <SectionHeading
        subtitle="Why Trust Us"
        title="Verified. Trusted. Professional."
        description="Blessing Marketing & Real Estate operates with full transparency and verified credentials."
        light
        centered
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {verifications.map((item, idx) => {
          const Icon = iconMap[item.icon || 'shield'] || ShieldCheck;
          return (
            <div
              key={idx}
              className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 space-y-3 group hover:border-gold-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                <Icon className="w-6 h-6 text-gold-400" />
              </div>
              <h3 className="font-serif font-bold text-lg text-white">{item.label}</h3>
              {item.description && (
                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
