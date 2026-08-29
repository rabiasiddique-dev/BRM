import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { servicesData } from '@/data/services';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ShieldCheck, CheckCircle2, ArrowRight, Phone, MessageCircle, HelpCircle } from 'lucide-react';
import { companyData } from '@/data/company';
import { createWhatsAppLink } from '@/lib/utils';

export async function generateStaticParams() {
  return servicesData.map((s) => ({
    slug: s.slug,
  }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const primaryWhatsAppUrl = createWhatsAppLink(
    companyData.primaryWhatsApp,
    `Hello Blessing Marketing, I would like to inquire about your ${service.title} services.`
  );

  return (
    <div className="pt-24 pb-20 space-y-16 font-sans">
      
      {/* 1. HERO */}
      <section className="bg-slate-950 text-white py-16 border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-gold-400" />
            <span>CORPORATE SERVICE DETAIL</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight">
            {service.title}
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            {service.shortDescription}
          </p>
        </div>
      </section>

      {/* 2. SERVICE INTRODUCTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 sm:p-12 space-y-6">
          <SectionHeading
            subtitle="OVERVIEW"
            title="Service Introduction"
          />
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
            {service.introduction}
          </p>
        </div>
      </section>

      {/* 3. WHAT WE DO */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-xl p-8 sm:p-12 space-y-6">
          <SectionHeading
            subtitle="SCOPE OF WORK"
            title="What We Do"
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.whatWeDo.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-slate-950 border border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR PROCESS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="METHODOLOGY"
          title="Our Process"
          centered
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {service.ourProcess.map((proc, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md space-y-2">
              <div className="font-serif text-2xl font-extrabold text-gold-600">{proc.step}</div>
              <h4 className="font-serif font-bold text-lg text-slate-900">{proc.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{proc.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. BENEFITS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 text-white rounded-3xl border border-gold-500/30 p-8 sm:p-12 space-y-6">
          <SectionHeading
            subtitle="VALUE DELIVERED"
            title="Key Benefits"
            light
          />
          <div className="space-y-3">
            {service.benefits.map((b, idx) => (
              <div key={idx} className="flex items-center gap-3 text-sm font-semibold text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OUR APPROACH */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 space-y-4 shadow-lg">
          <SectionHeading
            subtitle="STRATEGY"
            title="Our Approach"
          />
          <p className="text-slate-600 text-base leading-relaxed">
            {service.ourApproach}
          </p>
        </div>
      </section>

      {/* 7. FAQ */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="QUESTIONS & ANSWERS"
            title="Frequently Asked Questions"
            centered
          />
          <div className="space-y-4 mt-8">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>{faq.question}</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 pl-6 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 8. CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-10 text-center space-y-6 border border-gold-500/30">
          <h2 className="font-serif text-3xl font-bold">Interested in {service.title}?</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Connect with CEO Syed M. Hassan Shah or our project team to discuss your requirements.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href={primaryWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 text-white font-bold px-7 py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Discuss Service on WhatsApp</span>
            </a>
            <Link
              href="/contact"
              className="bg-gold-gradient text-slate-950 font-bold px-7 py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg"
            >
              Contact Corporate Office
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
