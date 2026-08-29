import React from 'react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ShieldCheck } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="pt-24 pb-20 space-y-12 font-sans">
      <section className="bg-slate-950 text-white py-16 border-b border-gold-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-gold-400" />
            <span>TERMS & CONDITIONS</span>
          </div>

          <h1 className="font-serif text-4xl font-bold tracking-tight">Terms of Service & Investment Disclaimer</h1>
          <p className="text-slate-400 text-xs sm:text-sm">Blessing Marketing & Real Estate (Pvt. Ltd)</p>
        </div>
      </section>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-700 space-y-6 text-sm leading-relaxed">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl space-y-4">
          <h2 className="font-serif text-xl font-bold text-slate-900">1. Corporate Scope</h2>
          <p>
            Blessing Marketing & Real Estate (Pvt. Ltd) acts as a real estate marketing, project representation, and consultancy service provider.
          </p>

          <h2 className="font-serif text-xl font-bold text-slate-900 pt-4">2. Investment Disclaimer</h2>
          <div className="p-4 bg-slate-900 text-white rounded-2xl border border-gold-500/40 text-xs leading-relaxed space-y-2">
            <div className="font-bold text-gold-400 uppercase">Professional Disclaimer</div>
            <p>
              Investment opportunities are subject to market conditions and associated risks. Information presented on this website should not be interpreted as a guarantee of returns. The exact legal wording should be reviewed appropriately before production.
            </p>
          </div>

          <h2 className="font-serif text-xl font-bold text-slate-900 pt-4">3. Project Representation</h2>
          <p>
            Project graphics, floor plans, masterplans, and delivery schedules presented on this website reflect information authorized by partner developers and builders.
          </p>
        </div>
      </main>
    </div>
  );
}
