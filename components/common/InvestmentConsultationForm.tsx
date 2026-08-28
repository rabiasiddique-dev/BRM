"use client";

import React, { useState } from 'react';
import { TrendingUp, Send, CheckCircle } from 'lucide-react';

export const InvestmentConsultationForm: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    budget: '',
    location: '',
    propertyType: '',
    timeline: '',
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
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 900);
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-3">
        <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
        <h3 className="font-serif font-bold text-lg text-slate-900">Consultation Request Received!</h3>
        <p className="text-sm text-slate-600">Thank you, <strong>{form.name}</strong>. Our investment consultant will contact you within 24 hours to discuss your portfolio goals.</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-8 border border-gold-500/30 shadow-xl space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gold-500/20 flex items-center justify-center">
          <TrendingUp className="w-5 h-5 text-gold-400" />
        </div>
        <div>
          <h3 className="font-serif font-bold text-xl text-white">Investment Consultation</h3>
          <p className="text-xs text-slate-400">Free consultation — no commitment required</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            name="name"
            required
            type="text"
            placeholder="Full Name *"
            value={form.name}
            onChange={handleChange}
            className="bg-slate-800 border border-slate-700 text-white placeholder-slate-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 transition"
          />
          <input
            name="phone"
            required
            type="tel"
            placeholder="Phone / WhatsApp *"
            value={form.phone}
            onChange={handleChange}
            className="bg-slate-800 border border-slate-700 text-white placeholder-slate-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 transition"
          />
        </div>
        <select
          name="budget"
          value={form.budget}
          onChange={handleChange}
          className="w-full bg-slate-800 border border-slate-700 text-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 transition"
        >
          <option value="">Investment Budget Range</option>
          <option>Under PKR 50 Lac</option>
          <option>PKR 50 Lac – 1 Crore</option>
          <option>PKR 1 – 3 Crore</option>
          <option>PKR 3 – 5 Crore</option>
          <option>PKR 5 – 10 Crore</option>
          <option>Above PKR 10 Crore</option>
        </select>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <select
            name="location"
            value={form.location}
            onChange={handleChange}
            className="w-full bg-slate-800 border border-slate-700 text-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 transition"
          >
            <option value="">Preferred Location</option>
            <option>DHA Karachi</option>
            <option>Clifton</option>
            <option>Gulshan-e-Iqbal</option>
            <option>Bahria Town Karachi</option>
            <option>Taiser Town</option>
            <option>PECHS</option>
            <option>Open to Suggestions</option>
          </select>
          <select
            name="propertyType"
            value={form.propertyType}
            onChange={handleChange}
            className="w-full bg-slate-800 border border-slate-700 text-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 transition"
          >
            <option value="">Property Type</option>
            <option>Residential Plot</option>
            <option>Commercial Plot</option>
            <option>House / Villa</option>
            <option>Apartment</option>
            <option>Retail Shop</option>
            <option>Office Space</option>
            <option>Off-Plan Project</option>
          </select>
        </div>
        <select
          name="timeline"
          value={form.timeline}
          onChange={handleChange}
          className="w-full bg-slate-800 border border-slate-700 text-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 transition"
        >
          <option value="">Investment Timeline</option>
          <option>Immediate (within 1 month)</option>
          <option>Short-term (1–3 months)</option>
          <option>Medium-term (3–6 months)</option>
          <option>Long-term (6+ months)</option>
          <option>Just researching / planning</option>
        </select>
        <textarea
          name="message"
          rows={3}
          placeholder="Tell us your investment goals or any specific requirements..."
          value={form.message}
          onChange={handleChange}
          className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 resize-none transition"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gold-gradient text-slate-950 font-bold py-3.5 rounded-xl text-sm uppercase tracking-wider transition-opacity hover:opacity-95 flex items-center justify-center gap-2 disabled:opacity-60"
        >
          {loading ? (
            <span className="w-4 h-4 border-2 border-slate-800 border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Book Free Consultation</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};
