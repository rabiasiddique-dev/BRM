import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Award, MapPin, Phone, ArrowRight, Building2 } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';
import { LeadershipSection } from '@/components/about/LeadershipSection';
import { TeamSection } from '@/components/about/TeamSection';
import { CompanyTimeline } from '@/components/about/CompanyTimeline';
import { TrustVerification } from '@/components/about/TrustVerification';
import { TalkToExpert } from '@/components/common/TalkToExpert';
import { companyData } from '@/data/company';

export const metadata = {
  title: 'About Blessing Marketing & Real Estate (Pvt. Ltd) | BMR Karachi',
  description: 'Learn about Blessing Marketing & Real Estate (Pvt. Ltd), led by CEO Syed M. Hassan Shah, providing premium property guidance and investment advisory in DHA, Clifton, Gulshan-e-Iqbal Karachi.',
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 space-y-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-14 border border-gold-500/30 shadow-2xl relative overflow-hidden text-center space-y-6">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative w-24 h-24 rounded-full overflow-hidden ring-4 ring-gold-500/40 mx-auto shadow-xl shadow-gold-500/20">
            <Image
              src="/logo/bmr-logo.png"
              alt="Blessing Marketing & Real Estate (Pvt. Ltd) - BMR"
              fill
              className="object-cover"
            />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-widest border border-gold-500/30">
            <Building2 className="w-3.5 h-3.5" />
            <span>Corporate Identity & Values</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight max-w-4xl mx-auto">
            Building Trust Through <span className="gold-gradient-text">Property Excellence</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            At Blessing Marketing & Real Estate (Pvt. Ltd), our primary commitment is helping clients navigate property decisions with complete confidence, professional integrity, and verified documentation.
          </p>
          <p className="text-gold-400/80 text-sm italic font-medium">"{companyData.tagline}"</p>

          {/* Quick Nav */}
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            {[
              { href: '#leadership', label: 'Leadership' },
              { href: '#our-story', label: 'Our Story' },
              { href: '#team', label: 'Our Team' },
              { href: '#trust', label: 'Why Trust Us' },
            ].map(link => (
              <a key={link.href} href={link.href}
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider transition-all border border-white/20">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 text-gold-600 flex items-center justify-center font-bold font-serif text-xl">01</div>
            <h3 className="font-serif font-bold text-2xl text-slate-900">Our Mission</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              To provide accessible, transparent, and legally verified real estate advisory services for home buyers, commercial investors, and overseas Pakistanis looking to build wealth through Karachi property assets.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 text-gold-600 flex items-center justify-center font-bold font-serif text-xl">02</div>
            <h3 className="font-serif font-bold text-2xl text-slate-900">Our Vision</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              To be Karachi's most trusted luxury real estate discovery and investment showcase platform, setting the gold standard for property presentation, client care, and transaction safety.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LeadershipSection />
      </section>

      {/* Company Timeline / Our Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CompanyTimeline />
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TeamSection />
      </section>

      {/* Trust & Verification */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TrustVerification />
      </section>

      {/* Offices Quick Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Physical Location Presence"
          title="Our Offices in Karachi"
          description="Visit our office branches for personal face-to-face real estate consultation."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {companyData.offices.map((office, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md space-y-4">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-gold-400 flex items-center justify-center font-bold">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-xl text-slate-900">{office.branchName}</h3>
              <p className="text-slate-600 text-sm">{office.address}, {office.city}</p>
              {office.workingHours && (
                <p className="text-xs text-slate-500 font-medium">{office.workingHours}</p>
              )}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-gold-600">
                <span>Branch Contact: {office.phoneNumbers.join(' | ')}</span>
                <a href={`tel:${office.phoneNumbers[0].replace(/[^0-9]/g, '')}`} className="hover:underline flex items-center gap-1">
                  Call Office <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link href="/offices" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-colors">
            View Full Office Details & Directions <ArrowRight className="w-4 h-4 text-gold-400" />
          </Link>
        </div>
      </section>

      {/* Talk to Expert */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TalkToExpert variant="banner" />
      </section>
    </div>
  );
}
