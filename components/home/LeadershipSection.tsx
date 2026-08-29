import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, Linkedin, MessageCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { companyData } from '@/data/company';
import { createWhatsAppLink } from '@/lib/utils';

export const LeadershipSection: React.FC = () => {
  const rep = companyData.representative;
  const whatsappUrl = createWhatsAppLink(rep.whatsapp, "Hello Syed Hassan Shah, I would like to request a real estate consultation.");

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 font-sans">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* CEO Portrait (5 cols) */}
        <div className="lg:col-span-5 relative min-h-[420px] lg:min-h-full bg-slate-950">
          <Image
            src={rep.avatar}
            alt={rep.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-gold-500/40 text-white">
            <div className="font-serif font-bold text-2xl">{rep.name}</div>
            <div className="text-xs text-gold-400 font-semibold uppercase tracking-wider">{rep.title}</div>
          </div>
        </div>

        {/* CEO Bio & Executive Profile (7 cols) */}
        <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-gold-600">
            <ShieldCheck className="w-4 h-4 text-gold-600" />
            <span>EXECUTIVE LEADERSHIP</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Meet Our Leadership
          </h2>

          <p className="text-slate-600 text-base leading-relaxed">
            {rep.fullBio || rep.bio}
          </p>

          {/* Key Achievements */}
          {rep.background && (
            <div className="space-y-2.5 pt-2">
              {rep.background.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href={rep.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all inline-flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4 text-gold-400" />
              <span>LinkedIn</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg transition-all inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Direct WhatsApp</span>
            </a>

            <Link
              href="/contact"
              className="bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-gold-600" />
              <span>Contact CEO Office</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
