import React from 'react';
import Link from 'next/link';
import { SectionHeading } from '@/components/common/SectionHeading';
import { servicesData } from '@/data/services';
import { Building2, Briefcase, TrendingUp, Users, Landmark, Building, ShieldCheck, Key, Sparkles, ArrowRight } from 'lucide-react';

const iconMap: Record<string, any> = {
  Building2,
  Briefcase,
  TrendingUp,
  Users,
  Landmark,
  Building,
  ShieldCheck,
  Key,
  Sparkles,
};

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-20 space-y-16 font-sans">
      {/* Services Hero */}
      <section className="bg-slate-950 text-white py-16 border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-widest">
            <Briefcase className="w-4 h-4 text-gold-400" />
            <span>CORPORATE CAPABILITIES</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight">
            Our Professional <span className="gold-gradient-text">Real Estate Services</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Strategic real estate marketing, project representation, and investment consultancy tailored for developers, builders, corporate entities, and investors in Karachi.
          </p>
        </div>
      </section>

      {/* Services Capability Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((srv) => {
            const Icon = iconMap[srv.icon] || Briefcase;
            return (
              <div
                key={srv.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-lg p-8 flex flex-col justify-between space-y-6 hover:shadow-2xl hover:border-gold-500/40 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-600 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-slate-950 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-slate-900 group-hover:text-gold-600 transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {srv.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href={`/services/${srv.slug}`}
                    className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-all inline-flex items-center gap-2 w-full justify-between"
                  >
                    <span>View Capability Details</span>
                    <ArrowRight className="w-4 h-4 text-gold-400" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
