import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle, Linkedin, Phone, ArrowRight, Award, Briefcase } from 'lucide-react';
import { companyData } from '@/data/company';
import { createWhatsAppLink } from '@/lib/utils';
import { SectionHeading } from '@/components/common/SectionHeading';

export const LeadershipSection: React.FC = () => {
  const rep = companyData.representative;
  const whatsappUrl = createWhatsAppLink(
    rep.whatsapp,
    `Hello ${rep.name}, I would like to connect with you regarding a real estate matter.`
  );

  return (
    <section id="leadership" className="space-y-10">
      <SectionHeading
        subtitle="Leadership"
        title="Meet Our Leadership"
        description="Driven by experience, guided by integrity."
      />

      <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        {/* Photo Column */}
        <div className="lg:col-span-4 relative min-h-[400px] lg:min-h-full bg-slate-900">
          <Image
            src={rep.avatar}
            alt={rep.name}
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="bg-slate-950/80 backdrop-blur-md border border-gold-500/30 rounded-2xl p-4 text-white">
              <div className="flex items-center gap-2 mb-1">
                <Award className="w-4 h-4 text-gold-400" />
                <span className="text-xs text-gold-400 font-bold uppercase tracking-wider">Founder & CEO</span>
              </div>
              <div className="font-serif font-bold text-xl">{rep.name}</div>
              <div className="text-xs text-slate-300 mt-0.5">{rep.title}</div>
            </div>
          </div>
        </div>

        {/* Content Column */}
        <div className="lg:col-span-8 p-8 sm:p-12 space-y-6 flex flex-col justify-center">
          <div className="space-y-4">
            <p className="text-slate-600 leading-relaxed text-base">
              {rep.fullBio || rep.bio}
            </p>

            {rep.background && rep.background.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-bold text-sm text-slate-800 uppercase tracking-wider">Professional Background</h4>
                <ul className="space-y-2">
                  {rep.background.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <div className="w-5 h-5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Briefcase className="w-2.5 h-2.5" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Contact Actions */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              WhatsApp Direct
            </a>
            <a
              href={`tel:${rep.phone.replace(/[^0-9]/g, '')}`}
              className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-all"
            >
              <Phone className="w-4 h-4 text-gold-600" />
              {rep.phone}
            </a>
            {rep.linkedin && (
              <a
                href={rep.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-all"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
