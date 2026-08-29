import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  Award,
  Building2,
  Users,
  TrendingUp,
  HeartHandshake,
  Eye,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageCircle,
  Linkedin
} from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { companyData } from '@/data/company';
import { createWhatsAppLink } from '@/lib/utils';

export default function AboutPage() {
  const rep = companyData.representative;
  const primaryWhatsAppUrl = createWhatsAppLink(
    companyData.primaryWhatsApp,
    "Hello Blessing Marketing, I am reading your About page and would like to connect."
  );

  return (
    <div className="pt-24 pb-20 space-y-20 font-sans">
      
      {/* 1. HERO */}
      <section className="bg-slate-950 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-gold-400" />
            <span>DISCOVER BLESSING MARKETING</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight">
            Building Trust. Creating Opportunities. <br className="hidden sm:inline" />
            <span className="gold-gradient-text">Shaping Karachi Real Estate.</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            {companyData.story}
          </p>
        </div>
      </section>

      {/* 2. COMPANY INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 sm:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              subtitle="WHO WE ARE"
              title="A Corporate Approach to Real Estate"
            />
            <p className="text-slate-600 leading-relaxed text-base">
              At Blessing Marketing & Real Estate (Pvt. Ltd), our singular focus is delivering transparent, data-backed real estate marketing, project representation, and consultancy across Karachi. Founded in 2012 by CEO Syed M. Hassan Shah, we connect property developers, corporate occupiers, and individual investors with high-value opportunities.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <ShieldCheck className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-xs uppercase">Verified Title Checks</h4>
                  <p className="text-xs text-slate-500 mt-1">100% legal verification before token commitments.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <Building2 className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-xs uppercase">Corporate Offices</h4>
                  <p className="text-xs text-slate-500 mt-1">DHA Phase-II Ext & Gulshan-e-Iqbal branches.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-96 rounded-2xl overflow-hidden shadow-2xl border-2 border-gold-500/30">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
              alt="Blessing Marketing Corporate Offices"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. VISUAL TIMELINE: OUR JOURNEY */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="OUR JOURNEY"
            title="Company Milestones & Growth"
            description="Founded → Growth → Major Milestones → Project Representation → Corporate Expansion → Today → Future"
            light
            centered
          />

          <div className="relative mt-16 max-w-4xl mx-auto space-y-8">
            {companyData.timeline?.map((item, idx) => (
              <div key={idx} className="flex items-start gap-6 relative">
                <div className="w-24 shrink-0 font-serif text-2xl font-extrabold text-gold-400 text-right">
                  {item.year}
                </div>
                <div className="w-4 h-4 rounded-full bg-gold-400 ring-4 ring-gold-500/30 shrink-0 mt-1.5" />
                <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex-1 space-y-1">
                  <h3 className="font-serif font-bold text-lg text-white">{item.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 & 5. MISSION & VISION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-900 text-white p-8 sm:p-12 rounded-3xl border border-slate-800 space-y-4 shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-400">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold">Our Mission</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {companyData.mission}
            </p>
          </div>

          <div className="bg-slate-950 text-white p-8 sm:p-12 rounded-3xl border border-gold-500/30 space-y-4 shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold">Our Vision</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {companyData.vision}
            </p>
          </div>
        </div>
      </section>

      {/* 6. CORE VALUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="OUR ETHOS"
          title="Core Corporate Values"
          description="Elegantly driving how we represent developers, guide investors, and serve clients."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {companyData.values.map((v, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md space-y-3">
              <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-600 flex items-center justify-center font-serif font-bold text-lg">
                0{idx + 1}
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900">{v.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. LEADERSHIP SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 rounded-3xl border border-gold-500/30 p-8 sm:p-12 text-white grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 relative h-80 rounded-2xl overflow-hidden border border-gold-500/40">
            <Image
              src={rep.avatar}
              alt={rep.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-8 space-y-4">
            <div className="text-xs font-bold text-gold-400 uppercase tracking-widest">LEADERSHIP</div>
            <h2 className="font-serif text-3xl font-bold">{rep.name}</h2>
            <div className="text-xs text-gold-400 font-semibold uppercase">{rep.title}</div>
            <p className="text-slate-300 text-sm leading-relaxed">{rep.fullBio || rep.bio}</p>

            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href={rep.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase px-5 py-3 rounded-xl border border-slate-800 inline-flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4 text-gold-400" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={primaryWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 text-white font-bold text-xs uppercase px-5 py-3 rounded-xl shadow-lg inline-flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp CEO</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TEAM DIRECTORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="OUR TEAM"
          title="Meet the Professionals"
          description="Experienced consultants, sales managers, and digital media leads."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {companyData.team.map((member) => (
            <div key={member.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md space-y-4">
              <div className="relative h-64 rounded-xl overflow-hidden bg-slate-900">
                <Image
                  src={member.avatar || rep.avatar}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-serif font-bold text-lg text-slate-900">{member.name}</div>
                <div className="text-xs text-gold-600 font-medium">{member.designation}</div>
                <p className="text-xs text-slate-500 mt-2">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. WHY CLIENTS TRUST US */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <SectionHeading
            subtitle="VERIFIED CREDIBILITY"
            title="Why Clients Trust Us"
            description="Backed by SECP company registration, DHA authorization, and over 10 years of Karachi real estate leadership."
            light
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {companyData.verifications?.map((v, idx) => (
              <div key={idx} className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
                <ShieldCheck className="w-6 h-6 text-gold-400 mx-auto" />
                <div className="font-bold text-xs text-white">{v.label}</div>
                <div className="text-[10px] text-slate-400">{v.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 text-white rounded-3xl p-10 text-center space-y-6 border border-gold-500/30">
          <h2 className="font-serif text-3xl font-bold">Ready to Work with Blessing Marketing?</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Reach out to our leadership team or visit our DHA Phase-II Ext & Gulshan-e-Iqbal offices today.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="bg-gold-gradient text-slate-950 font-bold px-8 py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
