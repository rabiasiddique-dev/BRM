"use client";

import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

interface PropertyInquiryFormProps {
  propertyTitle?: string;
  defaultPurpose?: string;
}

export const PropertyInquiryForm: React.FC<PropertyInquiryFormProps> = ({
  propertyTitle = '',
  defaultPurpose = '',
}) => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    whatsapp: '',
    email: '',
    contactMethod: 'whatsapp',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-3">
        <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
        <h3 className="font-serif font-bold text-lg text-slate-900">Inquiry Received!</h3>
        <p className="text-sm text-slate-600">Thank you, <strong>{form.name}</strong>. Our consultant will contact you via {form.contactMethod} within a few hours.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-5">
      <div>
        <h3 className="font-serif font-bold text-lg text-slate-900">Property Inquiry</h3>
        {propertyTitle && (
          <p className="text-xs text-slate-500 mt-1">Re: <span className="font-semibold text-slate-700">{propertyTitle}</span></p>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="name"
          required
          type="text"
          placeholder="Your Full Name *"
          value={form.name}
          onChange={handleChange}
          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 transition"
        />
        <input
          name="phone"
          required
          type="tel"
          placeholder="Phone Number *"
          value={form.phone}
          onChange={handleChange}
          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 transition"
        />
        <input
          name="whatsapp"
          type="tel"
          placeholder="WhatsApp Number (if different)"
          value={form.whatsapp}
          onChange={handleChange}
          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 transition"
        />
        <input
          name="email"
          type="email"
          placeholder="Email Address (optional)"
          value={form.email}
          onChange={handleChange}
          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 transition"
        />
        <select
          name="contactMethod"
          value={form.contactMethod}
          onChange={handleChange}
          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 bg-white transition"
        >
          <option value="whatsapp">Preferred Contact: WhatsApp</option>
          <option value="phone">Preferred Contact: Phone Call</option>
          <option value="email">Preferred Contact: Email</option>
        </select>
        <textarea
          name="message"
          rows={3}
          placeholder="Your message or requirements..."
          value={form.message}
          onChange={handleChange}
          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 resize-none transition"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 rounded-xl text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
        >
          {loading ? (
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Send Inquiry</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};
