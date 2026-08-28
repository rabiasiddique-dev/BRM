"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, MessageCircle, ArrowRight, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { companyData } from '@/data/company';
import { createWhatsAppLink } from '@/lib/utils';

export const Footer: React.FC = () => {
  const whatsappUrl = createWhatsAppLink(
    companyData.primaryWhatsApp,
    "Hello Blessing Marketing, I am inquiring through your website footer."
  );

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 md:pb-12 border-t border-slate-800 relative overflow-hidden">
      {/* Accent Top Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold-gradient" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand & Representative */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-gold-500/40 group-hover:ring-gold-400/70 transition-all duration-300 shadow-lg shadow-gold-500/10 flex-shrink-0">
                <Image
                  src="/logo/bmr-logo.png"
                  alt="Blessing Marketing & Real Estate - BMR Logo"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white block leading-none">
                  BLESSING
                </span>
                <span className="text-[10px] tracking-widest text-gold-400 font-medium uppercase block mt-0.5">
                  Marketing & Real Estate (Pvt. Ltd)
                </span>
                <span className="text-[9px] italic text-slate-500 block">We Build Your Blessed Home</span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Karachi’s premier real estate discovery, luxury property showcase, and investment advisory platform led by Syed M. Hassan Shah.
            </p>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-gold-500/20 max-w-sm space-y-2">
              <div className="text-xs text-gold-400 uppercase font-semibold tracking-wider">
                Official Representative
              </div>
              <div className="text-white font-medium text-base">Syed M. Hassan Shah</div>
              <div className="text-xs text-slate-400">CEO & Senior Real Estate Advisor</div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={companyData.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-gold-500/20 text-slate-300 hover:text-gold-400 border border-slate-800 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={companyData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-gold-500/20 text-slate-300 hover:text-gold-400 border border-slate-800 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={companyData.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-gold-500/20 text-slate-300 hover:text-gold-400 border border-slate-800 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={companyData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-gold-500/20 text-slate-300 hover:text-gold-400 border border-slate-800 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="font-serif text-white font-semibold text-lg mb-4 text-gold-400">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Browse Properties', href: '/properties' },
                { label: 'Featured Projects', href: '/projects' },
                { label: 'Sell Your Property', href: '/sell-your-property' },
                { label: 'Rent Your Property', href: '/rent-your-property' },
                { label: 'About Blessing', href: '/about' },
                { label: 'Investment Advisory', href: '/investment' },
                { label: 'Guides & Resources', href: '/guides' },
                { label: 'Our Portfolio', href: '/portfolio' },
                { label: 'Social Hub', href: '/social' },
                { label: 'Videos & Tours', href: '/videos' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Office Locations', href: '/offices' },
                { label: 'Contact Us', href: '/contact' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                    <ArrowRight className="w-3.5 h-3.5 text-gold-500" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Property Search + Location SEO */}
          <div>
            <h3 className="font-serif text-white font-semibold text-lg mb-4 text-gold-400">Property Search</h3>
            <ul className="space-y-2 text-sm mb-5">
              {[
                { label: 'Properties for Sale', href: '/properties?purpose=sale' },
                { label: 'Properties for Rent', href: '/properties?purpose=rent' },
                { label: 'Houses & Villas', href: '/properties?type=house' },
                { label: 'Luxury Apartments', href: '/properties?type=apartment' },
                { label: 'Commercial Plots', href: '/properties?type=plot' },
                { label: 'Retail Shops', href: '/properties?type=shop' },
              ].map(l => (
                <li key={l.href}><Link href={l.href} className="hover:text-gold-400 transition-colors">{l.label}</Link></li>
              ))}
            </ul>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-400/70 mb-3">Popular Areas</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'DHA Karachi', href: '/properties/dha-karachi' },
                { label: 'Gulshan-e-Iqbal', href: '/properties/gulshan-karachi' },
                { label: 'Clifton Karachi', href: '/properties/clifton-karachi' },
                { label: 'Bahria Town Karachi', href: '/properties/bahria-town-karachi' },
                { label: 'Taiser Town', href: '/properties/taiser-town' },
              ].map(l => (
                <li key={l.href}><Link href={l.href} className="hover:text-gold-400 transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Col 4: Verified Karachi Offices */}
          <div>
            <h3 className="font-serif text-white font-semibold text-lg mb-4 text-gold-400">
              Karachi Offices
            </h3>
            <div className="space-y-4 text-xs">
              {companyData.offices.map((office, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                  <div className="font-semibold text-white text-xs flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                    <span>{office.branchName}</span>
                  </div>
                  <p className="text-slate-400 leading-normal">{office.address}, {office.city}</p>
                </div>
              ))}

              <div className="pt-2 space-y-2 text-xs">
                <a
                  href={`tel:${companyData.phoneNumbers[0].replace(/[^0-9]/g, '')}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-gold-400 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-400" />
                  <span>{companyData.phoneNumbers.join(' | ')}</span>
                </a>
                <a
                  href={`mailto:${companyData.email}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-gold-400 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-gold-400" />
                  <span>{companyData.email}</span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-400 hover:underline pt-1 font-medium"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>Direct WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Blessing Marketing & Real Estate (Pvt. Ltd). All Rights Reserved. Karachi, Pakistan.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-200 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
