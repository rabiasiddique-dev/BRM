import React from 'react';
import Link from 'next/link';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="pt-32 pb-20 min-h-[70vh] flex items-center justify-center max-w-7xl mx-auto px-4 text-center">
      <div className="space-y-6 max-w-md">
        <div className="w-20 h-20 rounded-3xl bg-slate-900 text-gold-400 font-serif font-bold text-3xl flex items-center justify-center mx-auto shadow-2xl border border-gold-500/30">
          404
        </div>
        <h1 className="font-serif text-3xl font-bold text-slate-900">Page Not Found</h1>
        <p className="text-slate-600 text-sm leading-relaxed">
          The property listing or page you are looking for may have been moved or updated.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto bg-slate-900 text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-slate-800"
          >
            <Home className="w-4 h-4 text-gold-400" />
            <span>Go to Homepage</span>
          </Link>
          <Link
            href="/properties"
            className="w-full sm:w-auto bg-gold-gradient text-slate-950 font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-95"
          >
            <Search className="w-4 h-4" />
            <span>Browse Properties</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
