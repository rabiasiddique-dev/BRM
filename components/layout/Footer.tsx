import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Building2,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { companyData } from '@/data/company';
import { createWhatsAppLink } from '@/lib/utils';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const primaryWhatsAppUrl = createWhatsAppLink(
    companyData.primaryWhatsApp,
    "Hello Blessing Marketing, I am visiting your website and would like to inquire about real estate marketing and consultancy services."
  );

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-gold-500/20 pt-16 pb-12 relative overflow-hidden font-sans">
      {/* Subtle Ambient Background Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand & Executive Statement (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-gold-500/40 group-hover:ring-gold-400 transition-all">
                <Image
                  src="/logo/bmr-logo.png"
                  alt="Blessing Marketing & Real Estate"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-tight text-white block">
                  BLESSING
                </span>
                <span className="text-[9px] tracking-widest text-gold-400 font-semibold uppercase block">
                  Marketing & Real Estate (Pvt. Ltd)
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Strategic real estate marketing, consultancy, and project representation for residential and commercial developments across Karachi's most sought-after corridors.
            </p>

            {/* Leadership Contact Badge */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold-500/15 border border-gold-500/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Syed M. Hassan Shah</div>
                <div className="text-[11px] text-gold-400 font-medium">CEO & Senior Consultant</div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div>
              <a
                href={primaryWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Connect on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-gold-400">
              Corporate
            </h3>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><Link href="/" className="hover:text-gold-300 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-gold-300 transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-gold-300 transition-colors">Our Services</Link></li>
              <li><Link href="/projects" className="hover:text-gold-300 transition-colors">Featured Projects</Link></li>
              <li><Link href="/portfolio" className="hover:text-gold-300 transition-colors">Our Work / Portfolio</Link></li>
              <li><Link href="/media" className="hover:text-gold-300 transition-colors">Media & Videos</Link></li>
              <li><Link href="/insights" className="hover:text-gold-300 transition-colors">Insights & News</Link></li>
              <li><Link href="/team" className="hover:text-gold-300 transition-colors">Our Team</Link></li>
              <li><Link href="/contact" className="hover:text-gold-300 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 3: Services Capabilities (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-gold-400">
              Capabilities
            </h3>
            <ul className="space-y-2.5 text-xs font-medium text-slate-300">
              <li><Link href="/services/project-marketing" className="hover:text-gold-300 transition-colors">Project Marketing</Link></li>
              <li><Link href="/services/real-estate-consultancy" className="hover:text-gold-300 transition-colors">Real Estate Consultancy</Link></li>
              <li><Link href="/services/property-marketing" className="hover:text-gold-300 transition-colors">Property Marketing</Link></li>
              <li><Link href="/services/investment-consultancy" className="hover:text-gold-300 transition-colors">Investment Consultancy</Link></li>
              <li><Link href="/services/commercial-real-estate-advisory" className="hover:text-gold-300 transition-colors">Commercial Real Estate</Link></li>
              <li><Link href="/services/corporate-real-estate" className="hover:text-gold-300 transition-colors">Corporate Real Estate</Link></li>
              <li><Link href="/services/rental-asset-management" className="hover:text-gold-300 transition-colors">Rental & Asset Management</Link></li>
              <li><Link href="/services/digital-real-estate-marketing" className="hover:text-gold-300 transition-colors">Digital Real Estate Marketing</Link></li>
            </ul>
          </div>

          {/* Col 4: Corporate Offices (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-gold-400">
              Branch Offices
            </h3>
            <div className="space-y-4 text-xs">
              {companyData.offices.map((office, idx) => (
                <div key={idx} className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800 space-y-1">
                  <div className="font-bold text-white flex items-center justify-between">
                    <span>{office.branchName}</span>
                    {office.isPrimary && (
                      <span className="bg-gold-500/20 text-gold-400 text-[9px] px-1.5 py-0.5 rounded font-extrabold uppercase">Primary</span>
                    )}
                  </div>
                  <p className="text-slate-400">{office.address}, {office.city}</p>
                  <div className="text-gold-400 font-semibold pt-0.5 flex items-center gap-1">
                    <Phone className="w-3 h-3" />
                    <span>{office.phoneNumbers.join(', ')}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Investment Disclaimer Section */}
        <div className="py-6 border-b border-slate-800/80 text-[11px] text-slate-400 leading-relaxed space-y-2">
          <div className="font-bold uppercase tracking-wider text-slate-300">Investment Disclaimer & Compliance Notice</div>
          <p>
            Blessing Marketing & Real Estate (Pvt. Ltd) operates as a real estate marketing, consultancy, and project representation firm. Real estate investments are subject to market conditions, government regulations, and associated risks. Information presented on this website is for informational and corporate representation purposes only and should not be interpreted as a legal financial guarantee of returns. Clients and investors are encouraged to perform independent due diligence.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} Blessing Marketing & Real Estate (Pvt. Ltd). All Rights Reserved.
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-gold-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold-400 transition-colors">Terms & Conditions</Link>
            <Link href="/contact" className="hover:text-gold-400 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
