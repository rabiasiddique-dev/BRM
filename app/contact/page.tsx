"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { SectionHeading } from '@/components/common/SectionHeading';
import { companyData } from '@/data/company';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';
import { createWhatsAppLink } from '@/lib/utils';

function ContactFormContent() {
  const searchParams = useSearchParams();
  const initialType = searchParams?.get('type') || 'General Inquiry';

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    inquiryType: initialType,
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialType) {
      setFormData(prev => ({ ...prev, inquiryType: initialType }));
    }
  }, [initialType]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const primaryWhatsAppUrl = createWhatsAppLink(
    companyData.primaryWhatsApp,
    `Hello Blessing Marketing, I am submitting a contact inquiry regarding: ${formData.inquiryType}.`
  );

  return (
    <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 shadow-xl p-8 sm:p-12 space-y-6">
      <SectionHeading
        subtitle="INQUIRY FORM"
        title="Send Us a Message"
        description="Select your inquiry type to route your message to the appropriate corporate director."
      />

      {isSubmitted ? (
        <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl text-center space-y-4">
          <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
          <h3 className="font-serif text-2xl font-bold text-slate-900">Thank You!</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Your inquiry regarding <strong>{formData.inquiryType}</strong> has been received. Our team will contact you within 24 hours.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-slate-900 text-white font-bold text-xs uppercase px-6 py-2.5 rounded-xl"
          >
            Send Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Full Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Syed Ahmed"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-gold-500/40 text-sm text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Company / Entity</label>
              <input
                type="text"
                placeholder="e.g. Executive Heights Ltd"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-gold-500/40 text-sm text-slate-900"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Address *</label>
              <input
                type="email"
                required
                placeholder="name@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-gold-500/40 text-sm text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone / WhatsApp Number *</label>
              <input
                type="tel"
                required
                placeholder="0300-XXXXXXX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-gold-500/40 text-sm text-slate-900"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Inquiry Type *</label>
            <select
              value={formData.inquiryType}
              onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-gold-500/40 text-sm text-slate-900 bg-white"
            >
              <option value="General Inquiry">General Inquiry</option>
              <option value="Project Marketing">Project Marketing (Developers & Builders)</option>
              <option value="Investment Consultancy">Investment Consultancy (High ROI)</option>
              <option value="Partnership">Strategic Partnership</option>
              <option value="Corporate Real Estate">Corporate Real Estate (Leasing/Offices)</option>
              <option value="Media">Media & Press</option>
              <option value="Career">Career & Recruitment</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Message *</label>
            <textarea
              rows={4}
              required
              placeholder="Describe your project, property requirement, or consultancy needs..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-gold-500/40 text-sm text-slate-900"
            />
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
            <button
              type="submit"
              className="bg-gold-gradient hover:opacity-95 text-slate-950 font-bold px-8 py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg inline-flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Submit Inquiry</span>
            </button>

            <a
              href={primaryWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 text-white font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Instant WhatsApp</span>
            </a>
          </div>
        </form>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20 space-y-16 font-sans">
      
      {/* Hero */}
      <section className="bg-slate-950 text-white py-16 border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-widest">
            <Mail className="w-4 h-4 text-gold-400" />
            <span>LET'S WORK TOGETHER</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight">
            Contact <span className="gold-gradient-text">Blessing Marketing</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Reach out directly to CEO Syed M. Hassan Shah, project directors, or visit our DHA Phase-II Ext & Gulshan-e-Iqbal branch offices.
          </p>
        </div>
      </section>

      {/* Main Grid: Corporate Form & Office Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <Suspense fallback={<div className="lg:col-span-7 p-12 text-slate-500">Loading inquiry form...</div>}>
            <ContactFormContent />
          </Suspense>

          {/* Office Details (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-950 text-white rounded-3xl p-8 border border-gold-500/30 shadow-2xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-500/15 border border-gold-500/30 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <div className="font-serif font-bold text-xl">{companyData.representative.name}</div>
                  <div className="text-xs text-gold-400 font-semibold">{companyData.representative.title}</div>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-300 border-t border-slate-800 pt-4">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>Direct Hotline: {companyData.phoneNumbers.join(' / ')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>{companyData.email}</span>
                </div>
              </div>
            </div>

            {/* Office Locations */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-slate-900">Branch Locations</h3>
              {companyData.offices.map((off, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md space-y-2">
                  <div className="font-bold text-slate-900 text-sm flex items-center justify-between">
                    <span>{off.branchName}</span>
                    {off.isPrimary && <span className="text-[9px] bg-gold-500/10 text-gold-700 px-2 py-0.5 rounded font-extrabold uppercase">Primary</span>}
                  </div>
                  <p className="text-xs text-slate-600">{off.address}, {off.city}</p>
                  <div className="text-xs font-bold text-gold-600 pt-1">{off.phoneNumbers.join(', ')}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
