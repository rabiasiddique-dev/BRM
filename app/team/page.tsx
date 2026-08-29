"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeading } from '@/components/common/SectionHeading';
import { companyData } from '@/data/company';
import { Users, Phone, MessageCircle, Linkedin, ShieldCheck } from 'lucide-react';
import { createWhatsAppLink } from '@/lib/utils';

export default function TeamPage() {
  const [selectedDept, setSelectedDept] = useState<string>('All');

  const departments = ['All', 'Leadership', 'Sales', 'Marketing', 'Consultants', 'Operations'];

  const filteredTeam = selectedDept === 'All'
    ? companyData.team
    : companyData.team.filter(t => t.department === selectedDept);

  return (
    <div className="pt-24 pb-20 space-y-16 font-sans">
      
      {/* Hero */}
      <section className="bg-slate-950 text-white py-16 border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-widest">
            <Users className="w-4 h-4 text-gold-400" />
            <span>OUR PEOPLE</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight">
            Meet <span className="gold-gradient-text">Our Team</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Experienced real estate consultants, project leads, digital media specialists, and operations managers committed to client success.
          </p>
        </div>
      </section>

      {/* Department Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                selectedDept === dept
                  ? 'bg-gold-gradient text-slate-950 shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTeam.map((member) => {
            const whatsappUrl = member.whatsapp ? createWhatsAppLink(member.whatsapp, `Hello ${member.name}, I would like to consult regarding real estate.`) : null;
            
            return (
              <div
                key={member.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden space-y-4 p-6 hover:shadow-2xl hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="relative h-72 rounded-2xl overflow-hidden bg-slate-900 shadow-md">
                    <Image
                      src={member.avatar || companyData.representative.avatar}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-slate-950/80 text-gold-400 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full border border-gold-500/30">
                      {member.department}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-xl text-slate-900">{member.name}</h3>
                    <div className="text-xs text-gold-600 font-semibold mt-0.5">{member.designation}</div>
                    <p className="text-xs text-slate-600 leading-relaxed mt-2">{member.bio}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  {whatsappUrl && (
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase px-4 py-2 rounded-xl inline-flex items-center gap-1.5 shadow"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      <span>WhatsApp</span>
                    </a>
                  )}

                  {member.phone && (
                    <a
                      href={`tel:${member.phone.replace(/[^0-9]/g, '')}`}
                      className="text-xs font-bold text-slate-700 hover:text-slate-950 inline-flex items-center gap-1"
                    >
                      <Phone className="w-3.5 h-3.5 text-gold-600" />
                      <span>{member.phone}</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
