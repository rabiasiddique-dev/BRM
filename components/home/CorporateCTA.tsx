import React from 'react';
import Link from 'next/link';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Building2, TrendingUp, Briefcase, HeartHandshake, ArrowRight } from 'lucide-react';

export const CorporateCTA: React.FC = () => {
  const ctas = [
    {
      icon: Building2,
      tagline: "DEVELOPERS & BUILDERS",
      title: "Are You Launching a Project?",
      description: "Partner with Blessing Marketing for strategic project positioning, omnichannel branding, digital lead generation, and dedicated sales representation.",
      buttonText: "Discuss Your Project",
      inquiryType: "Project Marketing",
    },
    {
      icon: TrendingUp,
      tagline: "INVESTORS & FAMILY OFFICES",
      title: "Looking for Strategic Opportunities?",
      description: "Access high-yield commercial assets, pre-launch developer rates, and inflation-hedged capital growth opportunities in Karachi.",
      buttonText: "Talk to an Investment Consultant",
      inquiryType: "Investment Consultancy",
    },
    {
      icon: Briefcase,
      tagline: "CORPORATE CLIENTS",
      title: "Need Real Estate Advisory for Your Business?",
      description: "Tailored office space selection, commercial plaza leasing, site rationalization, and institutional lease agreements.",
      buttonText: "Talk to Our Corporate Team",
      inquiryType: "Corporate Real Estate",
    },
    {
      icon: HeartHandshake,
      tagline: "STRATEGIC PARTNERS",
      title: "Looking to Partner With Us?",
      description: "Explore joint marketing representation, financial institution partnerships, and corporate channel collaborations.",
      buttonText: "Start a Partnership Conversation",
      inquiryType: "Partnership",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 font-sans">
      <SectionHeading
        subtitle="CORPORATE ENGAGEMENT"
        title="Partner & Work With Blessing"
        description="Tailored real estate solutions for developers, investors, corporate occupiers, and institutional partners."
        centered
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {ctas.map((cta, idx) => {
          const Icon = cta.icon;
          return (
            <div
              key={idx}
              className="bg-slate-900 text-white rounded-3xl border border-slate-800 p-8 sm:p-10 flex flex-col justify-between space-y-6 hover:border-gold-500/50 shadow-xl transition-all group relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-400">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-gold-400">
                  {cta.tagline}
                </span>
                <h3 className="font-serif text-2xl font-bold text-white group-hover:text-gold-400 transition-colors">
                  {cta.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {cta.description}
                </p>
              </div>

              <div>
                <Link
                  href={`/contact?type=${encodeURIComponent(cta.inquiryType)}`}
                  className="bg-gold-gradient hover:opacity-95 text-slate-950 font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg transition-all inline-flex items-center gap-2"
                >
                  <span>{cta.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
