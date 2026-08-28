import React from 'react';
import type { Metadata } from 'next';
import { MapPin, Phone, MessageCircle, Clock, Navigation, Star } from 'lucide-react';
import { companyData } from '@/data/company';
import { createWhatsAppLink } from '@/lib/utils';
import { SectionHeading } from '@/components/common/SectionHeading';
import { TalkToExpert } from '@/components/common/TalkToExpert';

export const metadata: Metadata = {
  title: 'Our Offices | Blessing Marketing & Real Estate Karachi',
  description: 'Visit Blessing Marketing & Real Estate at our DHA Phase-II Extension or Gulshan-e-Iqbal offices in Karachi. Open Monday–Saturday 10AM–7PM.',
};

export default function OfficesPage() {
  return (
    <div className="pt-28 pb-20 space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-700 text-xs font-bold uppercase tracking-widest">
          <MapPin className="w-4 h-4" />
          Karachi Office Locations
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900">Our Offices</h1>
        <p className="text-slate-500 text-base max-w-2xl mx-auto leading-relaxed">
          Visit us at either of our fully-staffed Karachi offices. Walk-ins are welcome Monday through Saturday.
        </p>
      </section>

      {/* Office Cards */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {companyData.offices.map((office, idx) => {
          const waUrl = office.whatsapp
            ? createWhatsAppLink(office.whatsapp, `Hello, I'd like to visit the ${office.branchName}. Please confirm your availability.`)
            : createWhatsAppLink(companyData.primaryWhatsApp, `Hello, I'd like to visit your office.`);

          return (
            <div
              key={idx}
              className={`bg-white rounded-3xl border shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 ${
                office.isPrimary ? 'border-gold-500/40' : 'border-slate-200'
              }`}
            >
              {/* Map Placeholder */}
              <div className="relative min-h-[280px] bg-slate-900 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-700 via-slate-900 to-slate-950" />
                <div className="relative z-10 text-center space-y-3 p-8">
                  <div className="w-16 h-16 rounded-full bg-gold-gradient flex items-center justify-center mx-auto shadow-lg shadow-gold-500/30 animate-bounce">
                    <MapPin className="w-7 h-7 text-slate-950" />
                  </div>
                  <p className="text-white font-serif font-bold text-lg">{office.branchName}</p>
                  <p className="text-slate-400 text-xs max-w-xs mx-auto leading-relaxed">{office.address}, {office.city}</p>
                  {office.mapUrl && (
                    <a
                      href={office.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gold-gradient text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider mt-2"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      Get Directions
                    </a>
                  )}
                </div>
              </div>

              {/* Office Info */}
              <div className="p-8 space-y-6 flex flex-col justify-center">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {office.isPrimary && (
                      <span className="inline-flex items-center gap-1 bg-gold-500/15 text-gold-700 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                        <Star className="w-2.5 h-2.5 fill-current" /> Primary Office
                      </span>
                    )}
                  </div>
                  <h2 className="font-serif font-bold text-2xl text-slate-900">{office.branchName}</h2>
                </div>

                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Address</div>
                      <p className="text-sm text-slate-700 leading-relaxed">{office.address}, {office.city}</p>
                    </div>
                  </div>

                  {/* Hours */}
                  {office.workingHours && (
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Working Hours</div>
                        <p className="text-sm text-slate-700">{office.workingHours}</p>
                      </div>
                    </div>
                  )}

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Phone</div>
                      <div className="space-y-1">
                        {office.phoneNumbers.map((p, i) => (
                          <a key={i} href={`tel:${p.replace(/[^0-9]/g, '')}`} className="block text-sm text-slate-900 font-semibold hover:text-gold-600 transition-colors">
                            {p}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col gap-2 pt-2">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    WhatsApp This Office
                  </a>
                  <a
                    href={`tel:${office.phoneNumbers[0].replace(/[^0-9]/g, '')}`}
                    className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-3 rounded-xl text-xs uppercase tracking-wider transition-colors"
                  >
                    <Phone className="w-4 h-4 text-gold-600" />
                    Call {office.phoneNumbers[0]}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TalkToExpert variant="banner" />
      </section>
    </div>
  );
}
