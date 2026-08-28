"use client";

import React from 'react';
import Link from 'next/link';
import { Home, TrendingUp, Key, PieChart, Building2, Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';
import { ServiceItem } from '@/data/services';

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home': return <Home className="w-6 h-6 text-gold-400" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-gold-400" />;
      case 'Key': return <Key className="w-6 h-6 text-gold-400" />;
      case 'PieChart': return <PieChart className="w-6 h-6 text-gold-400" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-gold-400" />;
      default: return <Briefcase className="w-6 h-6 text-gold-400" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md hover:shadow-luxury-hover transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1">
      <div>
        <div className="w-14 h-14 rounded-2xl bg-slate-950 flex items-center justify-center mb-6 shadow-lg border border-gold-500/30 group-hover:scale-110 transition-transform">
          {getIcon(service.iconName)}
        </div>

        <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-gold-600 transition-colors mb-3">
          {service.title}
        </h3>

        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {service.shortDesc}
        </p>

        <ul className="space-y-2 mb-6">
          {service.features.map((feat, idx) => (
            <li key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <Link
          href={`/contact?service=${encodeURIComponent(service.title)}`}
          className="text-xs font-bold uppercase tracking-wider text-slate-900 group-hover:text-gold-600 flex items-center gap-1.5 transition-colors"
        >
          <span>Consult Real Estate Expert</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
