import React from 'react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { MapPin, Phone, Mail, Clock, MessageCircle, ExternalLink } from 'lucide-react';
import { companyData } from '@/data/company';
import { createWhatsAppLink } from '@/lib/utils';

export const OfficeLocations: React.FC = () => {
  return (
    <section className="bg-slate-950 text-white py-20 border-t border-gold-500/20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="OUR OFFICES"
          title="Visit Our Locations in Karachi"
          description="Permanently staffed corporate branch offices in DHA Phase-II Extension and Gulshan-e-Iqbal."
          light
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {companyData.offices.map((office, idx) => {
            const whatsappUrl = createWhatsAppLink(office.whatsapp || companyData.primaryWhatsApp, `Hello Blessing Marketing, I am planning to visit your ${office.branchName}.`);
            
            return (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 hover:border-gold-500/40 rounded-3xl p-8 space-y-6 shadow-2xl flex flex-col justify-between group transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    {office.isPrimary && (
                      <span className="bg-gold-500/20 text-gold-400 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border border-gold-500/30">
                        Primary Office
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-gold-400 transition-colors">
                    {office.branchName}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {office.address}, {office.city}
                  </p>

                  <div className="space-y-2 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                      <span>{office.phoneNumbers.join(', ')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                      <span>{office.email || companyData.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                      <span>{office.workingHours}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-3">
                  <a
                    href={office.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl border border-slate-700 transition-all inline-flex items-center gap-2"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="w-3.5 h-3.5 text-gold-400" />
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-lg transition-all inline-flex items-center gap-2"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>WhatsApp Office</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
