import React from 'react';
import { SectionHeading } from '@/components/common/SectionHeading';
import {
  Award,
  TrendingUp,
  ShieldCheck,
  HeartHandshake,
  Eye,
  MapPin
} from 'lucide-react';

export const WhyBlessing: React.FC = () => {
  const cards = [
    {
      title: "Market Expertise",
      desc: "Deep understanding of the real-estate market across Karachi's premier residential and commercial corridors.",
      icon: Award,
    },
    {
      title: "Strategic Marketing",
      desc: "Modern digital and traditional marketing approaches tailored for maximum project visibility.",
      icon: TrendingUp,
    },
    {
      title: "Professional Guidance",
      desc: "Client-focused consultation and support from initial inquiry to final hand-over.",
      icon: ShieldCheck,
    },
    {
      title: "Strong Relationships",
      desc: "Long-term relationships built on trust with clients, builders, and partner institutions.",
      icon: HeartHandshake,
    },
    {
      title: "Transparency",
      desc: "Clear communication, verified documentation, and professional corporate processes.",
      icon: Eye,
    },
    {
      title: "Local Knowledge",
      desc: "Strong understanding of the specific local markets, cantonment rules, and locations served.",
      icon: MapPin,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 font-sans">
      <SectionHeading
        subtitle="CORPORATE CREDIBILITY"
        title="Why Choose Blessing"
        description="Six foundational reasons why developers, investors, and clients partner with Blessing Marketing & Real Estate."
        centered
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 shadow-md p-8 hover:shadow-xl hover:border-gold-500/40 transition-all duration-300 group space-y-4"
            >
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-600 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-slate-950 transition-colors">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-slate-900 group-hover:text-gold-600 transition-colors">
                {card.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
