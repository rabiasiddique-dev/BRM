import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Home, Building, Layers, MapPin, Phone, MessageCircle, Upload, CheckCircle, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { TalkToExpert } from '@/components/common/TalkToExpert';
import { companyData } from '@/data/company';
import { createWhatsAppLink } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Sell Your Property | Blessing Marketing & Real Estate Karachi',
  description: 'List your property for sale with Blessing Marketing & Real Estate. Professional marketing, verified buyers, and expert negotiations to maximise your property value in Karachi.',
};

const steps = [
  { title: 'Submit Your Details', desc: 'Fill out the form below with your property information.' },
  { title: 'Free Valuation', desc: 'Our consultant assesses your property and provides a market price opinion.' },
  { title: 'Marketing Launch', desc: 'We list and market your property to our verified investor network.' },
  { title: 'Negotiation & Close', desc: 'We negotiate on your behalf and handle all documentation until transfer.' },
];

export default function SellPropertyPage() {
  const whatsappUrl = createWhatsAppLink(
    companyData.primaryWhatsApp,
    "Hello Blessing Marketing, I would like to list my property for sale. Please contact me."
  );

  return (
    <div className="pt-28 pb-20 space-y-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-3xl p-10 sm:p-16 text-white text-center border border-gold-500/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-widest">
              <Home className="w-4 h-4" />
              Property Listing Service
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight">
              Sell Your Property <span className="gold-gradient-text">At The Best Price</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Get maximum value for your property with our professional marketing, verified buyer network, and expert negotiation team.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <a href="#sell-form" className="bg-gold-gradient text-slate-950 font-bold px-8 py-4 rounded-xl text-sm uppercase tracking-wider shadow-lg hover:opacity-95 transition-all">
                List My Property
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-xl text-sm uppercase tracking-wider transition-all">
                <MessageCircle className="w-4 h-4 fill-current" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Simple Process"
          title="How We Sell Your Property"
          description="A streamlined, transparent process from listing to handover."
          centered
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {steps.map((step, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3 relative">
              <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center font-bold text-slate-950 text-lg shadow-md">
                {i + 1}
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 right-0 translate-x-1/2 text-slate-300">
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
              <h3 className="font-serif font-bold text-lg text-slate-900">{step.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Submission Form */}
      <section id="sell-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="bg-slate-900 px-8 py-6 text-white">
            <h2 className="font-serif font-bold text-2xl">Submit Your Property</h2>
            <p className="text-slate-400 text-sm mt-1">Fill in your property details. Our team will contact you within 24 hours.</p>
          </div>
          <form className="p-8 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Owner Name *</label>
                <input required type="text" placeholder="Your full name"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 transition" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Phone / WhatsApp *</label>
                <input required type="tel" placeholder="e.g. 0300-0000000"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 transition" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Property Type *</label>
                <select required className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 bg-white transition">
                  <option value="">Select property type</option>
                  <option>House / Bungalow</option>
                  <option>Apartment</option>
                  <option>Residential Plot</option>
                  <option>Commercial Plot</option>
                  <option>Office</option>
                  <option>Retail Shop</option>
                  <option>Farmhouse</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Location *</label>
                <input required type="text" placeholder="e.g. DHA Phase 5, Karachi"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 transition" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Expected Price</label>
              <input type="text" placeholder="e.g. PKR 2.5 Crore"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 transition" />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Property Details</label>
              <textarea rows={4} placeholder="Describe your property — size, bedrooms, features, current condition, etc."
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 resize-none transition" />
            </div>

            {/* Image Upload Placeholder */}
            <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 text-center space-y-2 bg-slate-50">
              <Upload className="w-8 h-8 text-slate-400 mx-auto" />
              <p className="text-sm font-semibold text-slate-600">Upload Property Images</p>
              <p className="text-xs text-slate-400">Image upload coming soon — for now, you can send photos via WhatsApp after submission.</p>
            </div>

            {/* Valuation Note */}
            <div className="flex items-start gap-3 bg-gold-500/5 border border-gold-500/20 rounded-xl p-4">
              <CheckCircle className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong className="text-slate-800">Free Property Valuation Included</strong> — our consultant will conduct a market valuation for your property at no charge.
              </p>
            </div>

            <button type="submit"
              className="w-full bg-gold-gradient text-slate-950 font-bold py-4 rounded-xl text-sm uppercase tracking-wider hover:opacity-95 transition-opacity shadow-lg">
              Submit Property Listing
            </button>
          </form>
        </div>
      </section>

      {/* Talk to Expert CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TalkToExpert variant="banner" />
      </section>
    </div>
  );
}
