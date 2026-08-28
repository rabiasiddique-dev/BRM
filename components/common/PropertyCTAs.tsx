"use client";

import React, { useState } from 'react';
import { Phone, MessageCircle, Calendar, Bell, ArrowRight, X } from 'lucide-react';
import { createWhatsAppLink } from '@/lib/utils';
import { companyData } from '@/data/company';

interface PropertyCTAsProps {
  propertyTitle: string;
  propertyPrice?: string;
  agentPhone?: string;
  agentWhatsapp?: string;
  agentName?: string;
  purpose?: 'sale' | 'rent';
}

export const PropertyCTAs: React.FC<PropertyCTAsProps> = ({
  propertyTitle,
  propertyPrice,
  agentPhone,
  agentWhatsapp,
  agentName,
  purpose = 'sale',
}) => {
  const [showCallbackForm, setShowCallbackForm] = useState(false);
  const [showVisitForm, setShowVisitForm] = useState(false);
  const [callbackForm, setCallbackForm] = useState({ name: '', phone: '', time: '', note: '' });
  const [visitForm, setVisitForm] = useState({ name: '', phone: '', date: '', time: '', message: '' });
  const [submitted, setSubmitted] = useState<'callback' | 'visit' | null>(null);

  const phone = agentPhone || companyData.phoneNumbers[0];
  const whatsapp = agentWhatsapp || companyData.primaryWhatsApp;
  const name = agentName || companyData.representative.name;

  const whatsappMsg = `Hello ${name}, I am interested in: "${propertyTitle}"${propertyPrice ? ` (${propertyPrice})` : ''}. Please share more details.`;
  const whatsappUrl = createWhatsAppLink(whatsapp, whatsappMsg);

  const siteVisitMsg = `Hello ${name}, I would like to schedule a site visit for: "${propertyTitle}". Please advise on the available dates and times.`;
  const siteVisitWhatsappUrl = createWhatsAppLink(whatsapp, siteVisitMsg);

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted('callback');
    setShowCallbackForm(false);
  };

  const handleVisitSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted('visit');
    setShowVisitForm(false);
  };

  return (
    <div className="space-y-3">
      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Contact About This Property</div>

      {/* WhatsApp — Primary CTA */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-xl text-sm uppercase tracking-wider transition-all shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30"
      >
        <MessageCircle className="w-4 h-4 fill-current" />
        <span>WhatsApp Agent</span>
      </a>

      {/* Call */}
      <a
        href={`tel:${phone.replace(/[^0-9]/g, '')}`}
        className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold py-3.5 rounded-xl text-sm uppercase tracking-wider transition-colors border border-slate-700"
      >
        <Phone className="w-4 h-4 text-gold-400" />
        <span>Call Agent — {phone}</span>
      </a>

      {/* Schedule Site Visit */}
      <button
        onClick={() => setShowVisitForm(true)}
        className="w-full flex items-center justify-center gap-2 bg-gold-500/10 hover:bg-gold-500/20 text-gold-700 font-bold py-3.5 rounded-xl text-sm uppercase tracking-wider transition-colors border border-gold-500/30"
      >
        <Calendar className="w-4 h-4" />
        <span>Schedule a Site Visit</span>
      </button>

      {/* Request Callback */}
      <button
        onClick={() => setShowCallbackForm(true)}
        className="w-full flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold py-3 rounded-xl text-xs uppercase tracking-wider transition-colors border border-slate-200"
      >
        <Bell className="w-4 h-4 text-slate-500" />
        <span>Request a Callback</span>
      </button>

      {/* WhatsApp for project inquiry */}
      <a
        href={siteVisitWhatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-center gap-2 text-slate-600 hover:text-emerald-700 py-2 text-xs font-medium transition-colors"
      >
        <ArrowRight className="w-3 h-3" />
        <span>Ask About This {purpose === 'rent' ? 'Rental' : 'Property'} via WhatsApp</span>
      </a>

      {/* Success feedback */}
      {submitted && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl p-3 text-center font-medium">
          ✓ {submitted === 'callback' ? 'Callback request received!' : 'Site visit request received!'} We will contact you shortly.
        </div>
      )}

      {/* Callback Modal */}
      {showCallbackForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-serif font-bold text-lg text-slate-900">Request a Callback</h3>
              <button onClick={() => setShowCallbackForm(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-slate-500">Re: <span className="font-semibold text-slate-700">{propertyTitle}</span></p>
            <form onSubmit={handleCallbackSubmit} className="space-y-3">
              <input
                required
                type="text"
                placeholder="Your Name"
                value={callbackForm.name}
                onChange={e => setCallbackForm({ ...callbackForm, name: e.target.value })}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
              />
              <input
                required
                type="tel"
                placeholder="Phone / WhatsApp Number"
                value={callbackForm.phone}
                onChange={e => setCallbackForm({ ...callbackForm, phone: e.target.value })}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
              />
              <input
                type="text"
                placeholder="Preferred Time (e.g. Afternoon, After 5 PM)"
                value={callbackForm.time}
                onChange={e => setCallbackForm({ ...callbackForm, time: e.target.value })}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
              />
              <textarea
                rows={2}
                placeholder="Any specific requirement? (optional)"
                value={callbackForm.note}
                onChange={e => setCallbackForm({ ...callbackForm, note: e.target.value })}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 resize-none"
              />
              <button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl text-sm uppercase tracking-wider transition-colors">
                Request Callback
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Site Visit Modal */}
      {showVisitForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-serif font-bold text-lg text-slate-900">Schedule a Site Visit</h3>
              <button onClick={() => setShowVisitForm(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-slate-500">Property: <span className="font-semibold text-slate-700">{propertyTitle}</span></p>
            <form onSubmit={handleVisitSubmit} className="space-y-3">
              <input
                required
                type="text"
                placeholder="Your Name"
                value={visitForm.name}
                onChange={e => setVisitForm({ ...visitForm, name: e.target.value })}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
              />
              <input
                required
                type="tel"
                placeholder="Phone / WhatsApp Number"
                value={visitForm.phone}
                onChange={e => setVisitForm({ ...visitForm, phone: e.target.value })}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="date"
                  value={visitForm.date}
                  onChange={e => setVisitForm({ ...visitForm, date: e.target.value })}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
                />
                <select
                  value={visitForm.time}
                  onChange={e => setVisitForm({ ...visitForm, time: e.target.value })}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 bg-white"
                >
                  <option value="">Preferred Time</option>
                  <option>Morning (10–12)</option>
                  <option>Afternoon (12–3)</option>
                  <option>Late Afternoon (3–5)</option>
                  <option>Evening (5–7)</option>
                </select>
              </div>
              <textarea
                rows={2}
                placeholder="Any message or requirements? (optional)"
                value={visitForm.message}
                onChange={e => setVisitForm({ ...visitForm, message: e.target.value })}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 resize-none"
              />
              <button type="submit" className="w-full bg-gold-gradient text-slate-950 font-bold py-3 rounded-xl text-sm uppercase tracking-wider transition-opacity hover:opacity-95">
                Confirm Site Visit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
