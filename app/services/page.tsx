import React from 'react';
import { ServiceCard } from '@/components/services/ServiceCard';
import { SectionHeading } from '@/components/common/SectionHeading';
import { servicesData } from '@/data/services';
import { ContactForm } from '@/components/common/ContactForm';
import { Briefcase } from 'lucide-react';

export const metadata = {
  title: 'Real Estate Services',
  description: 'Comprehensive property buying, selling, rental, and commercial consultancy services by Blessing Marketing in Karachi.',
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-500">
          <Briefcase className="w-4 h-4" />
          <span>Professional Offerings</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900">
          Our Real Estate Services
        </h1>
        <p className="text-slate-600 text-sm sm:text-base">
          From verified property buying and selling representation to high-yield commercial lease management in Karachi.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      <div className="pt-8">
        <SectionHeading
          subtitle="Request Service"
          title="Schedule Service Consultation"
          description="Fill out the form below to connect with CEO Syed M. Hassan Shah regarding your real estate requirements."
          centered
        />
        <div className="max-w-2xl mx-auto mt-8">
          <ContactForm defaultPurpose="Real Estate Service Request" />
        </div>
      </div>
    </div>
  );
}
