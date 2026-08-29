import React from 'react';
import Link from 'next/link';
import { Building2, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-24 pb-16 px-4 bg-slate-950 text-white font-sans">
      <div className="max-w-xl mx-auto text-center space-y-6">
        
        <div className="w-16 h-16 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-400 flex items-center justify-center mx-auto">
          <Building2 className="w-8 h-8" />
        </div>

        <div className="font-serif text-6xl font-extrabold text-gold-400">404</div>

        <h1 className="font-serif text-3xl font-bold">We couldn't find that page.</h1>

        <p className="text-slate-300 text-sm leading-relaxed">
          The requested corporate page may have been moved or updated as part of our website repositioning.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="bg-gold-gradient text-slate-950 font-bold px-7 py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg"
          >
            Back Home
          </Link>

          <Link
            href="/portfolio"
            className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-7 py-3.5 rounded-xl border border-slate-800 text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2"
          >
            <span>Explore Our Work</span>
            <ArrowRight className="w-4 h-4 text-gold-400" />
          </Link>
        </div>

      </div>
    </div>
  );
}
