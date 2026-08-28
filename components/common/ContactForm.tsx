"use client";

import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle, PhoneCall } from 'lucide-react';
import { companyData } from '@/data/company';
import { createWhatsAppLink } from '@/lib/utils';

interface ContactFormProps {
  propertyTitle?: string;
  defaultPurpose?: string;
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  propertyTitle,
  defaultPurpose = "General Property Inquiry",
  className = "",
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    purpose: defaultPurpose,
    propertyType: 'House',
    message: propertyTitle
      ? `Hello Blessing Marketing, I am interested in inquiring about "${propertyTitle}". Please provide full details & schedule a site visit.`
      : '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleDirectWhatsApp = () => {
    const customMessage = `Name: ${formData.name || 'Visitor'}\nPhone: ${formData.phone || 'N/A'}\nPurpose: ${formData.purpose}\nMessage: ${formData.message || 'I am interested in your property offerings in Karachi.'}`;
    const url = createWhatsAppLink(companyData.primaryWhatsApp, customMessage);
    window.open(url, '_blank');
  };

  return (
    <div className={`bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xl relative overflow-hidden ${className}`}>
      {/* Top Gold Bar Accent */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gold-gradient" />

      <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2">
        {propertyTitle ? 'Inquire About Property' : 'Send an Inquiry'}
      </h3>
      <p className="text-slate-500 text-sm mb-6">
        Fill out your details below to request property specifications, layout plans, or book a physical site visit with CEO Syed M. Hassan Shah.
      </p>

      {submitted ? (
        <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="font-serif font-bold text-xl text-slate-900">Inquiry Submitted Successfully!</h4>
          <p className="text-sm text-slate-600 max-w-sm mx-auto">
            Thank you for reaching out to Blessing Marketing & Real Estate. Our team will contact you shortly on {formData.phone || 'your phone'}.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleDirectWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 text-white text-xs uppercase font-bold tracking-wider px-5 py-3 rounded-xl shadow-md hover:bg-emerald-500"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Connect Instant on WhatsApp</span>
            </button>
            <button
              onClick={() => setSubmitted(false)}
              className="w-full sm:w-auto text-slate-500 hover:text-slate-900 text-xs font-semibold px-4 py-2"
            >
              Send Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block mb-1.5">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Syed Ahmed"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-gold-500 transition-colors"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block mb-1.5">
                Phone / WhatsApp *
              </label>
              <input
                type="tel"
                required
                placeholder="0300-1234567"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-gold-500 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-gold-500 transition-colors"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block mb-1.5">
                Inquiry Type
              </label>
              <select
                value={formData.purpose}
                onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-gold-500 cursor-pointer"
              >
                <option value="Buy Property">Buy Property</option>
                <option value="Rent Property">Rent Property</option>
                <option value="Sell Property">Sell Property / Listing Request</option>
                <option value="Investment Consultancy">Investment Consultancy</option>
                <option value="Schedule Site Visit">Book Physical Site Visit</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block mb-1.5">
              Message / Requirements
            </label>
            <textarea
              rows={4}
              placeholder="Tell us your location preference, budget, or specific property questions..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-gold-500 transition-colors resize-none"
            />
          </div>

          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              type="submit"
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg flex items-center justify-center gap-2 text-sm uppercase tracking-wider transition-all"
            >
              <Send className="w-4 h-4 text-gold-400" />
              <span>Submit Request</span>
            </button>

            <button
              type="button"
              onClick={handleDirectWhatsApp}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg flex items-center justify-center gap-2 text-sm uppercase tracking-wider transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Request via WhatsApp</span>
            </button>
          </div>
        </form>
      )}

      {/* Direct Call Quick Bar */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <span>Need urgent property assistance?</span>
        <a
          href={`tel:${companyData.phoneNumbers[0].replace(/[^0-9]/g, '')}`}
          className="text-gold-600 font-bold hover:underline flex items-center gap-1"
        >
          <PhoneCall className="w-3.5 h-3.5" />
          <span>Call {companyData.phoneNumbers[0]}</span>
        </a>
      </div>
    </div>
  );
};
