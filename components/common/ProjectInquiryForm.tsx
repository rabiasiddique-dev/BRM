"use client";

import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

interface ProjectInquiryFormProps {
  projectName?: string;
}

export const ProjectInquiryForm: React.FC<ProjectInquiryFormProps> = ({ projectName = '' }) => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    whatsapp: '',
    budget: '',
    unitType: '',
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
        <h3 className="font-serif font-bold text-lg text-slate-900">Inquiry Received!</h3>
        <p className="text-sm text-slate-600">Thank you, <strong>{form.name}</strong>. Our project consultant will contact you within 24 hours.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
      <div>
        <h3 className="font-serif font-bold text-lg text-slate-900">Get Project Details</h3>
        {projectName && (
          <p className="text-xs text-slate-500 mt-1">Re: <span className="font-semibold text-slate-700">{projectName}</span></p>
        )}
      </div>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input name="name" required type="text" placeholder="Your Full Name *"
            value={form.name} onChange={handleChange}
            className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 transition" />
          <input name="phone" required type="tel" placeholder="Phone / WhatsApp *"
            value={form.phone} onChange={handleChange}
            className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 transition" />
        </div>
        <select name="budget" value={form.budget} onChange={handleChange}
          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 bg-white transition">
          <option value="">Investment Budget</option>
          <option>Under PKR 50 Lac</option>
          <option>PKR 50 Lac – 1 Crore</option>
          <option>PKR 1 – 3 Crore</option>
          <option>PKR 3 – 5 Crore</option>
          <option>PKR 5 – 10 Crore</option>
          <option>Above PKR 10 Crore</option>
        </select>
        <input name="unitType" type="text" placeholder="Preferred Unit / Property Type (e.g. 3-Bed, Ground Shop)"
          value={form.unitType} onChange={handleChange}
          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 transition" />
        <textarea name="message" rows={3} placeholder="Any specific questions or requirements..."
          value={form.message} onChange={handleChange}
          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 resize-none transition" />
        <button type="submit" disabled={loading}
          className="w-full bg-gold-gradient text-slate-950 font-bold py-3.5 rounded-xl text-sm uppercase tracking-wider hover:opacity-95 transition-opacity flex items-center justify-center gap-2 disabled:opacity-60">
          {loading
            ? <span className="w-4 h-4 border-2 border-slate-800 border-t-transparent rounded-full animate-spin" />
            : <><Send className="w-4 h-4" /><span>Request Project Details</span></>
          }
        </button>
      </form>
    </div>
  );
};
