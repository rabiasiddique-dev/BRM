import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <h1 className="font-serif text-4xl font-bold text-slate-900">Privacy Policy</h1>
      <p className="text-slate-600 text-sm leading-relaxed">
        Blessing Marketing & Real Estate values your privacy. This policy explains how we collect, use, and safeguard personal information submitted through our website contact forms and WhatsApp interactions.
      </p>

      <h2 className="font-serif text-2xl font-bold text-slate-900 pt-4">1. Information Collection</h2>
      <p className="text-slate-600 text-sm leading-relaxed">
        We collect personal details such as full name, phone number, email address, and property preferences submitted voluntarily when requesting property details or site visits.
      </p>

      <h2 className="font-serif text-2xl font-bold text-slate-900 pt-4">2. Use of Information</h2>
      <p className="text-slate-600 text-sm leading-relaxed">
        Your information is exclusively used to communicate property listings, arrange physical site inspections, and provide direct real estate advisory. We do not sell or share client data with third-party telemarketers.
      </p>

      <div className="pt-6 border-t border-slate-200">
        <Link href="/" className="text-xs font-bold text-gold-600 hover:underline uppercase tracking-wider">
          ← Return to Home
        </Link>
      </div>
    </div>
  );
}
