import React from 'react';
import { ContactForm } from '@/components/common/ContactForm';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';
import { companyData } from '@/data/company';
import { MapPin, Phone, Mail, MessageCircle, Clock, Building } from 'lucide-react';

export const metadata = {
  title: 'Contact Us',
  description: 'Reach out to Blessing Marketing & Real Estate in DHA Phase-II Extension or Gulshan-e-Iqbal Karachi.',
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-500">
          <Phone className="w-4 h-4" />
          <span>Get in Touch</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900">
          Let's Talk About Your Next Property
        </h1>
        <p className="text-slate-600 text-sm sm:text-base">
          Visit our Karachi branches or connect directly with CEO Syed M. Hassan Shah for instant assistance.
        </p>
      </div>

      {/* Direct Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <a
          href={`tel:${companyData.phoneNumbers[0].replace(/[^0-9]/g, '')}`}
          className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md hover:shadow-luxury-hover transition-all flex items-center gap-4 group"
        >
          <div className="w-12 h-12 rounded-xl bg-gold-500/10 text-gold-600 group-hover:bg-gold-500 group-hover:text-white flex items-center justify-center transition-colors">
            <Phone className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-slate-400 font-semibold uppercase">Phone Numbers</div>
            <div className="font-serif font-bold text-slate-900 text-sm sm:text-base">{companyData.phoneNumbers.join(' | ')}</div>
          </div>
        </a>

        <a
          href={`mailto:${companyData.email}`}
          className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md hover:shadow-luxury-hover transition-all flex items-center gap-4 group"
        >
          <div className="w-12 h-12 rounded-xl bg-gold-500/10 text-gold-600 group-hover:bg-gold-500 group-hover:text-white flex items-center justify-center transition-colors">
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-slate-400 font-semibold uppercase">Email Address</div>
            <div className="font-serif font-bold text-slate-900 text-sm truncate">{companyData.email}</div>
          </div>
        </a>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md hover:shadow-luxury-hover transition-all flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <MessageCircle className="w-6 h-6 fill-current" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-semibold uppercase">Instant Chat</div>
              <div className="font-serif font-bold text-slate-900 text-sm">WhatsApp Support</div>
            </div>
          </div>
          <WhatsAppButton variant="icon" />
        </div>
      </div>

      {/* Grid: Office Locations Left + Inquiry Form Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-6 space-y-8">
          <h2 className="font-serif text-3xl font-bold text-slate-900">Karachi Office Locations</h2>

          <div className="space-y-6">
            {companyData.offices.map((office, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md space-y-3">
                <div className="flex items-center gap-2 font-serif font-bold text-lg text-slate-900">
                  <Building className="w-5 h-5 text-gold-500" />
                  <span>{office.branchName}</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{office.address}, {office.city}</p>
                <div className="pt-2 flex items-center justify-between text-xs font-semibold text-gold-600 border-t border-slate-100">
                  <span>Phone: {office.phoneNumbers.join(' | ')}</span>
                  <a href={`tel:${office.phoneNumbers[0].replace(/[^0-9]/g, '')}`} className="hover:underline">
                    Call Branch
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 text-white border border-gold-500/30 space-y-3">
            <div className="flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase">
              <Clock className="w-4 h-4" />
              <span>Office Working Hours</span>
            </div>
            <div className="text-sm font-medium">Monday – Saturday: 10:00 AM – 8:00 PM</div>
            <div className="text-xs text-slate-400">Sunday: By Appointment Only</div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
