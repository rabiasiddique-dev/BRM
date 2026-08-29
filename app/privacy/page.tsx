import React from 'react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ShieldCheck } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-20 space-y-12 font-sans">
      <section className="bg-slate-950 text-white py-16 border-b border-gold-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-gold-400" />
            <span>LEGAL DOCUMENTATION</span>
          </div>

          <h1 className="font-serif text-4xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="text-slate-400 text-xs sm:text-sm">Blessing Marketing & Real Estate (Pvt. Ltd)</p>
        </div>
      </section>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-700 space-y-6 text-sm leading-relaxed">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl space-y-4">
          <h2 className="font-serif text-xl font-bold text-slate-900">1. Information Collection</h2>
          <p>
            Blessing Marketing & Real Estate collects information provided directly by clients through our contact forms, corporate inquiry channels, and WhatsApp communications for the sole purpose of real estate marketing, project consultancy, and transaction representation.
          </p>

          <h2 className="font-serif text-xl font-bold text-slate-900 pt-4">2. Data Utilization & Safeguards</h2>
          <p>
            Client contact information is kept strictly confidential and used exclusively for direct corporate communications. We do not sell or trade personal data to unauthorized third parties.
          </p>

          <h2 className="font-serif text-xl font-bold text-slate-900 pt-4">3. Contact & Opt-Out</h2>
          <p>
            To update or request deletion of your information from our corporate database, please email <a href="mailto:blessingmarketing@gmail.com" className="text-gold-600 font-bold hover:underline">blessingmarketing@gmail.com</a>.
          </p>
        </div>
      </main>
    </div>
  );
}
