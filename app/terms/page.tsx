import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service',
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <h1 className="font-serif text-4xl font-bold text-slate-900">Terms of Service</h1>
      <p className="text-slate-600 text-sm leading-relaxed">
        Welcome to Blessing Marketing & Real Estate. By accessing or browsing our property showcase website, you agree to comply with these terms.
      </p>

      <h2 className="font-serif text-2xl font-bold text-slate-900 pt-4">1. Property Listings & Accuracy</h2>
      <p className="text-slate-600 text-sm leading-relaxed">
        Property prices, dimensions, and availability displayed on this website are indicative representations. Final prices, token receipts, and transfer conditions are subject to direct verification and legal execution at our DHA Phase-II Ext or Gulshan-e-Iqbal offices.
      </p>

      <h2 className="font-serif text-2xl font-bold text-slate-900 pt-4">2. Intellectual Property</h2>
      <p className="text-slate-600 text-sm leading-relaxed">
        All original branding, layout designs, and imagery are owned by Blessing Marketing & Real Estate. Unauthorized copying or redistribution is strictly prohibited.
      </p>

      <div className="pt-6 border-t border-slate-200">
        <Link href="/" className="text-xs font-bold text-gold-600 hover:underline uppercase tracking-wider">
          ← Return to Home
        </Link>
      </div>
    </div>
  );
}
