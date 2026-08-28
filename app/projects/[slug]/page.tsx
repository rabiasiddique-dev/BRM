import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  Building2,
  MapPin,
  Calendar,
  CheckCircle2,
  Phone,
  MessageCircle,
  Clock,
  ArrowRight,
  ShieldCheck,
  CreditCard
} from 'lucide-react';
import { projectsData } from '@/data/projects';
import { ProjectInquiryForm } from '@/components/common/ProjectInquiryForm';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';
import { companyData } from '@/data/company';

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

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
        <Link href="/" className="hover:text-gold-600 transition-colors">Home</Link>
        <span>/</span>
        <Link href="/projects" className="hover:text-gold-600 transition-colors">Projects</Link>
        <span>/</span>
        <span className="text-slate-900 truncate max-w-xs">{project.name}</span>
      </div>

      {/* Hero Header */}
      <div className="relative rounded-3xl overflow-hidden bg-slate-950 text-white p-8 sm:p-14 mb-12 shadow-2xl border border-gold-500/30">
        <Image
          src={project.heroImage}
          alt={project.name}
          fill
          priority
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-widest border border-gold-500/30">
            <Building2 className="w-3.5 h-3.5" />
            <span>{project.status} Development</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            {project.name}
          </h1>

          <div className="flex items-center gap-2 text-slate-300 text-sm">
            <MapPin className="w-4 h-4 text-gold-400" />
            <span>{project.location}</span>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-6">
            <div>
              <div className="text-xs uppercase text-slate-400">Starting Price</div>
              <div className="font-serif font-bold text-2xl text-gold-400">{project.startingPrice}</div>
            </div>

            {project.deliveryDate && (
              <div className="border-l border-slate-700 pl-6">
                <div className="text-xs uppercase text-slate-400">Expected Delivery</div>
                <div className="font-serif font-bold text-xl text-white">{project.deliveryDate}</div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Main Left Details */}
        <div className="lg:col-span-8 space-y-10">
          {/* Overview */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-4">
            <h2 className="font-serif text-2xl font-bold text-slate-900">Project Overview</h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {project.overview}
            </p>
          </div>

          {/* Highlights */}
          {project.highlights.length > 0 && (
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-4">
              <h2 className="font-serif text-2xl font-bold text-slate-900">Key Highlights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm font-medium text-slate-800">
                    <ShieldCheck className="w-4 h-4 text-gold-600 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Payment Plan Breakdown Table */}
          {project.paymentPlan && project.paymentPlan.length > 0 && (
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-2 font-serif text-2xl font-bold text-slate-900">
                <CreditCard className="w-6 h-6 text-gold-500" />
                <span>Payment Plan Breakdown</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                      <th className="p-3.5 rounded-l-xl">Installment Milestone</th>
                      <th className="p-3.5">Percentage / Amount</th>
                      <th className="p-3.5 rounded-r-xl">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    {project.paymentPlan.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-50">
                        <td className="p-3.5 font-semibold text-slate-900">{item.installmentPeriod}</td>
                        <td className="p-3.5 font-bold text-gold-600">{item.amountDisplay}</td>
                        <td className="p-3.5 text-xs text-slate-500">{item.note || 'N/A'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Available Units */}
          {project.availableUnits && project.availableUnits.length > 0 && (
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-4">
              <h2 className="font-serif text-2xl font-bold text-slate-900">Available Units & Layouts</h2>
              <div className="flex flex-wrap gap-3">
                {project.availableUnits.map((unit, idx) => (
                  <span key={idx} className="px-4 py-2 rounded-xl bg-gold-500/10 border border-gold-500/30 font-semibold text-xs text-slate-900">
                    {unit}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Amenities */}
          {project.amenities.length > 0 && (
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-4">
              <h2 className="font-serif text-2xl font-bold text-slate-900">Amenities & Facilities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.amenities.map((a, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{a}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Form Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <ProjectInquiryForm projectName={project.name} />

          <div className="bg-slate-900 text-white rounded-2xl p-6 border border-gold-500/30 shadow-xl space-y-4 text-center">
            <h3 className="font-serif font-bold text-xl text-white">Require Official Brochure & Floor Plan?</h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              Connect directly with CEO Syed M. Hassan Shah to receive digital brochures and current availability charts.
            </p>
            <WhatsAppButton
              message={`Hello Blessing Marketing, please share the official brochure & availability for "${project.name}".`}
              label="Request Brochure via WhatsApp"
              className="w-full text-xs uppercase tracking-wider py-3.5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
