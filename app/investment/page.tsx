import React from 'react';
import Link from 'next/link';
import { SectionHeading } from '@/components/common/SectionHeading';
import { InvestmentConsultationForm } from '@/components/common/InvestmentConsultationForm';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';
import { TrendingUp, ShieldCheck, PieChart, Building, Landmark, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Real Estate Investment Advisory Karachi',
  description: 'High-yield commercial plots, luxury off-plan apartments, and residential land investment opportunities in DHA & Karachi.',
};

export default function InvestmentPage() {
  const options = [
    {
      icon: HomeIcon,
      title: "Residential Capital Appreciation",
      desc: "Invest in high-demand residential sectors such as DHA Phase 8 Zone B and PECHS Block 6 for strong long-term capital gains."
    },
    {
      icon: Building,
      title: "Commercial Rental Yields",
      desc: "Acquire ground floor retail shops or corporate office floors on Main University Road, Gulshan-e-Iqbal for 7-9% annual returns."
    },
    {
      icon: Landmark,
      title: "Plots & Land Holdings",
      desc: "Secure 120 sqyd to 500 sqyd plots in growing corridors including MDA Scheme 45 Taiser Town and DHA City Karachi."
    },
    {
      icon: PieChart,
      title: "Off-Plan Developer Bookings",
      desc: "Lock in pre-launch rates for upcoming high-rise apartment towers with easy 3-year quarterly payment installment plans."
    }
  ];

  function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
    return <Building {...props} />;
  }

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-14 border border-gold-500/30 shadow-2xl relative overflow-hidden text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-widest border border-gold-500/30">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>Strategic Property Growth</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight max-w-4xl mx-auto">
          Discover Your Next <span className="gold-gradient-text">Investment Opportunity</span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Expert property portfolio management, high rental yield commercial assets, and pre-launch developer bookings tailored for resident and overseas Pakistani investors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {options.map((opt, idx) => {
          const Icon = opt.icon;
          return (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 text-gold-600 flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-2xl text-slate-900">{opt.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{opt.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-gold-500/30 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="font-serif text-3xl font-bold">Talk to an Investment Consultant</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Have specific capital growth target amounts or interested in overseas Pakistani investment procedures through Roshan Digital Accounts? Connect directly with CEO Syed M. Hassan Shah.
            </p>
            <div className="pt-2">
              <WhatsAppButton
                label="Connect via WhatsApp"
                message="Hello Syed Hassan Shah, I would like to consult regarding real estate investment options in Karachi."
              />
            </div>
          </div>

          <div className="lg:col-span-6">
            <InvestmentConsultationForm />
          </div>
        </div>
      </div>
    </div>
  );
}
