import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projectsData } from '@/data/projects';
import { SectionHeading } from '@/components/common/SectionHeading';
import {
  MapPin,
  Building2,
  ShieldCheck,
  CheckCircle2,
  Download,
  Play,
  ArrowRight,
  MessageCircle,
  FileText,
  Calendar,
  Layers
} from 'lucide-react';
import { companyData } from '@/data/company';
import { createWhatsAppLink } from '@/lib/utils';

export async function generateStaticParams() {
  return projectsData.map((p) => ({
    slug: p.slug,
  }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const primaryWhatsAppUrl = createWhatsAppLink(
    companyData.primaryWhatsApp,
    `Hello Blessing Marketing, I am inquiring regarding ${project.name} (${project.ourRole}).`
  );

  return (
    <div className="pt-24 pb-20 space-y-16 font-sans">
      
      {/* 1. PROJECT HERO */}
      <section className="relative h-[65vh] min-h-[450px] flex items-end pb-12 px-4 sm:px-6 lg:px-8 bg-slate-950 overflow-hidden">
        <Image
          src={project.heroImage}
          alt={project.name}
          fill
          priority
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto w-full space-y-4 text-white">
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-gold-500/20 border border-gold-500/40 text-gold-400 text-xs font-extrabold uppercase px-3.5 py-1.5 rounded-full">
              {project.status}
            </span>
            {project.developerPartner && (
              <span className="bg-slate-900/90 text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-800">
                Developer: {project.developerPartner}
              </span>
            )}
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            {project.name}
          </h1>

          <div className="flex items-center gap-2 text-slate-300 text-sm font-medium">
            <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
            <span>{project.location}, {project.city}</span>
          </div>
        </div>
      </section>

      {/* 2 & 3. OUR ROLE & PROJECT OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 sm:p-12 space-y-8">
          
          {/* Prominent OUR ROLE Callout */}
          <div className="bg-slate-950 text-white rounded-2xl p-6 sm:p-8 border border-gold-500/40 shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1">
              <div className="text-[10px] font-extrabold uppercase tracking-widest text-gold-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-gold-400" />
                OFFICIAL COMPANY REPRESENTATION
              </div>
              <div className="font-serif text-xl sm:text-2xl font-bold text-white">
                OUR ROLE: {project.ourRole}
              </div>
            </div>
            <a
              href={primaryWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-gradient text-slate-950 font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider shadow-md shrink-0 inline-flex items-center gap-2"
            >
              <span>Consult Representative</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Overview Text */}
          <div className="space-y-4">
            <SectionHeading
              subtitle="PROJECT OVERVIEW"
              title={`About ${project.name}`}
            />
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              {project.overview}
            </p>
          </div>

        </div>
      </section>

      {/* 4. HIGHLIGHTS & AMENITIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Highlights */}
          <div className="bg-slate-900 text-white p-8 rounded-3xl border border-slate-800 space-y-6 shadow-xl">
            <SectionHeading
              subtitle="FEATURES"
              title="Project Highlights"
              light
            />
            <div className="space-y-3">
              {project.highlights.map((h, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-slate-200 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Amenities */}
          <div className="bg-slate-950 text-white p-8 rounded-3xl border border-gold-500/30 space-y-6 shadow-xl">
            <SectionHeading
              subtitle="FACILITIES"
              title="Amenities & Specifications"
              light
            />
            <div className="space-y-3">
              {project.amenities.map((a, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-slate-200 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>{a}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 5. PROJECT GALLERY */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="VISUAL SHOWCASE"
            title="Project Gallery"
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {project.gallery.map((img, idx) => (
              <div key={idx} className="relative h-64 rounded-2xl overflow-hidden shadow-md group bg-slate-900">
                <Image
                  src={img}
                  alt={`${project.name} photo ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 6. PROJECT PROGRESS */}
      {project.progressSteps && (
        <section className="bg-slate-900 text-white py-16 border-y border-slate-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <SectionHeading
              subtitle="DEVELOPMENT STATUS"
              title="Project Progress"
              light
              centered
            />

            {project.progressPercentage !== undefined && (
              <div className="max-w-md mx-auto space-y-2 text-center">
                <div className="flex items-center justify-between text-xs font-bold uppercase text-gold-400">
                  <span>Overall Construction Progress</span>
                  <span>{project.progressPercentage}%</span>
                </div>
                <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden border border-slate-700">
                  <div
                    className="h-full bg-gold-gradient transition-all duration-1000"
                    style={{ width: `${project.progressPercentage}%` }}
                  />
                </div>
              </div>
            )}

            <div className="space-y-4">
              {project.progressSteps.map((step, idx) => (
                <div key={idx} className="bg-slate-950 p-5 rounded-2xl border border-slate-800 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="font-serif font-bold text-white text-base">{step.stage}</div>
                    {step.date && <div className="text-xs text-slate-400">{step.date}</div>}
                  </div>
                  <span className={`text-xs font-extrabold uppercase px-3 py-1 rounded-full ${
                    step.status === 'Completed' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                    step.status === 'In Progress' ? 'bg-gold-500/20 text-gold-400 border border-gold-500/30' :
                    'bg-slate-800 text-slate-400'
                  }`}>
                    {step.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. MASTERPLAN */}
      {project.masterplanImage && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="ARCHITECTURAL LAYOUT"
            title="Masterplan & Elevation"
            centered
          />
          <div className="relative h-96 sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-200 mt-6">
            <Image
              src={project.masterplanImage}
              alt={`${project.name} Masterplan`}
              fill
              className="object-cover"
            />
          </div>
        </section>
      )}

      {/* 8. PAYMENT PLAN */}
      {project.paymentPlan && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="SCHEDULE"
            title="Payment Schedule Structure"
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {project.paymentPlan.map((plan, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md space-y-2">
                <div className="text-xs font-bold text-gold-600 uppercase">{plan.installmentPeriod}</div>
                <div className="font-serif text-2xl font-bold text-slate-900">{plan.amountDisplay}</div>
                {plan.note && <div className="text-xs text-slate-500">{plan.note}</div>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 9. DOCUMENTS */}
      {project.documents && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="VERIFIED ASSETS"
            title="Project Documents"
            centered
          />
          <div className="space-y-3 mt-6">
            {project.documents.map((doc, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-gold-600 shrink-0" />
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{doc.name}</div>
                    <div className="text-xs text-slate-400">{doc.type} • {doc.size}</div>
                  </div>
                </div>
                <a
                  href={primaryWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase px-4 py-2 rounded-lg inline-flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 text-gold-400" />
                  <span>Request PDF</span>
                </a>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 10. CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 text-white rounded-3xl p-10 text-center space-y-6 border border-gold-500/30 shadow-2xl">
          <h2 className="font-serif text-3xl font-bold">Inquire Regarding {project.name}</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Contact Blessing Marketing for project representation details, developer partner briefings, or direct consultations.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href={primaryWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 text-white font-bold px-8 py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Discuss Project on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
