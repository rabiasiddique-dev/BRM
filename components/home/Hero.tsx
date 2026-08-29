"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { companyData } from '@/data/company';
import { createWhatsAppLink } from '@/lib/utils';

export const Hero: React.FC = () => {
  const primaryWhatsAppUrl = createWhatsAppLink(
    companyData.primaryWhatsApp,
    "Hello Blessing Marketing, I am browsing your homepage and would like to talk to a real estate expert."
  );

  return (
    <section className="relative min-h-[90vh] lg:min-h-[95vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-slate-950 overflow-hidden font-sans">
      {/* Background Visual with Cinematic Dark Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
          alt="Blessing Marketing Real Estate Corporate Representation Karachi"
          fill
          priority
          className="object-cover opacity-30 scale-105 transform animate-pulse duration-[12000ms]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-500/10 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Hero Central Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        
        {/* Brand Tagline Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gold-500/15 border border-gold-500/35 text-gold-400 text-xs font-bold uppercase tracking-widest backdrop-blur-md shadow-lg shadow-gold-500/10">
          <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping" />
          <span>BLESSING MARKETING & REAL ESTATE</span>
        </div>

        {/* Cinematic Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
          Building Brands. <br className="hidden sm:inline" />
          Marketing Projects. <br className="hidden sm:inline" />
          <span className="gold-gradient-text">Creating Real Estate Opportunities.</span>
        </h1>

        {/* Corporate Subheadline */}
        <p className="text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
          Blessing Marketing & Real Estate delivers strategic marketing, consultancy and project-focused real estate solutions.
        </p>

        {/* Action CTAs */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/portfolio"
            className="bg-gold-gradient hover:opacity-95 text-slate-950 font-extrabold px-8 py-4 rounded-xl shadow-2xl flex items-center gap-2 text-xs uppercase tracking-wider transition-all transform hover:scale-105"
          >
            <span>Explore Our Work</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/contact"
            className="bg-slate-900/90 hover:bg-slate-900 text-white font-bold px-8 py-4 rounded-xl border border-gold-500/40 backdrop-blur-md flex items-center gap-2 text-xs uppercase tracking-wider transition-all hover:border-gold-400"
          >
            <Phone className="w-4 h-4 text-gold-400" />
            <span>Talk to Us</span>
          </Link>

          <a
            href={primaryWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-4 rounded-xl shadow-lg flex items-center gap-2 text-xs uppercase tracking-wider transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Quick Credentials Bar */}
        <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-slate-800/80">
          <div className="text-center p-3">
            <div className="font-serif text-2xl sm:text-3xl font-extrabold text-gold-400">10+</div>
            <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider mt-0.5">Years of Experience</div>
          </div>
          <div className="text-center p-3">
            <div className="font-serif text-2xl sm:text-3xl font-extrabold text-gold-400">50+</div>
            <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider mt-0.5">Selected Projects</div>
          </div>
          <div className="text-center p-3">
            <div className="font-serif text-2xl sm:text-3xl font-extrabold text-gold-400">500+</div>
            <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider mt-0.5">Trusted Clients</div>
          </div>
          <div className="text-center p-3">
            <div className="font-serif text-2xl sm:text-3xl font-extrabold text-gold-400">1000+</div>
            <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider mt-0.5">Successful Deals</div>
          </div>
        </div>

      </div>
    </section>
  );
};
