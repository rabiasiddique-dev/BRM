import React from 'react';
import type { Metadata } from 'next';
import { MessageCircle, Key, CheckCircle, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { TalkToExpert } from '@/components/common/TalkToExpert';
import { companyData } from '@/data/company';
import { createWhatsAppLink } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Rent Your Property | Blessing Marketing & Real Estate Karachi',
  description: 'List your property for rent with Blessing Marketing. We find verified tenants, draft agreements, and manage your rental placement across Karachi.',
};

const benefits = [
  'Verified tenant background checks',
  'Legally binding tenancy agreements',
  'Corporate & residential tenant network',
  'Zero vacancy placement assistance',
  'Rent collection and renewal support',
  'Market-rate rent advisory',
];

export default function RentPropertyPage() {
  const whatsappUrl = createWhatsAppLink(
    companyData.primaryWhatsApp,
    "Hello Blessing Marketing, I would like to rent out my property. Please contact me."
  );

  return (
    <div className="pt-28 pb-20 space-y-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950 rounded-3xl p-10 sm:p-16 text-white text-center border border-emerald-500/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest">
              <Key className="w-4 h-4" />
              Rental Management Service
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight">
              Rent Out Your Property <span className="text-emerald-400">Hassle-Free</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              We connect verified tenants to your property — residential or commercial — with full legal agreement support.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <a href="#rent-form" className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-xl text-sm uppercase tracking-wider shadow-lg transition-all">
                List for Rent
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl text-sm uppercase tracking-wider transition-all border border-white/20">
                <MessageCircle className="w-4 h-4 fill-current" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              subtitle="Why Choose BMR"
              title="Rental Management That Works For You"
              description="From tenant sourcing to agreement drafting, we handle everything so you don't have to."
            />
            <ul className="mt-8 space-y-3">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden" id="rent-form">
            <div className="bg-emerald-900 px-8 py-6 text-white">
              <h2 className="font-serif font-bold text-2xl">List Your Rental Property</h2>
              <p className="text-emerald-200 text-sm mt-1">We'll contact you within 24 hours to proceed.</p>
            </div>
            <form className="p-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input required type="text" placeholder="Owner Name *"
                  className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 transition" />
                <input required type="tel" placeholder="Phone / WhatsApp *"
                  className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 transition" />
              </div>
              <select required className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-white transition">
                <option value="">Property Type *</option>
                <option>House / Bungalow</option>
                <option>Apartment / Flat</option>
                <option>Office Space</option>
                <option>Retail Shop</option>
                <option>Warehouse</option>
                <option>Plot (lease)</option>
                <option>Other</option>
              </select>
              <input required type="text" placeholder="Location / Area *"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 transition" />
              <input type="text" placeholder="Expected Monthly Rent (e.g. PKR 50,000)"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 transition" />
              <textarea rows={3} placeholder="Property details — size, bedrooms, furnishing, other notes..."
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 resize-none transition" />
              <button type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-xl text-sm uppercase tracking-wider transition-all shadow-lg">
                Submit Rental Listing
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Talk to Expert */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TalkToExpert variant="banner" />
      </section>
    </div>
  );
}
