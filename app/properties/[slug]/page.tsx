import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  Bed,
  Bath,
  Maximize2,
  MapPin,
  Calendar,
  CheckCircle2,
  Share2,
  Heart,
  Phone,
  MessageCircle,
  Building,
  Car,
  Layers,
  ArrowRight
} from 'lucide-react';
import { propertiesData } from '@/data/properties';
import { PropertyGallery } from '@/components/properties/PropertyGallery';
import { PropertyCard } from '@/components/properties/PropertyCard';
import { PropertyCTAs } from '@/components/common/PropertyCTAs';
import { PropertyInquiryForm } from '@/components/common/PropertyInquiryForm';
import { PropertyStatusBadge } from '@/components/common/PropertyStatusBadge';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';
import { companyData } from '@/data/company';
import { formatPrice } from '@/lib/utils';

export async function generateStaticParams() {
  return propertiesData.map((p) => ({
    slug: p.slug,
  }));
}

export default function PropertyDetailPage({ params }: { params: { slug: string } }) {
  const property = propertiesData.find((p) => p.slug === params.slug);

  if (!property) {
    notFound();
  }

  const relatedProperties = propertiesData
    .filter((p) => p.id !== property.id && (p.type === property.type || p.location === property.location))
    .slice(0, 3);

  const agent = property.agentInfo || companyData.representative;

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
        <Link href="/" className="hover:text-gold-600 transition-colors">Home</Link>
        <span>/</span>
        <Link href="/properties" className="hover:text-gold-600 transition-colors">Properties</Link>
        <span>/</span>
        <span className="text-slate-900 truncate max-w-xs">{property.title}</span>
      </div>

      {/* Main Header Row */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span
              className={`px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-white ${
                property.purpose === 'sale' ? 'bg-gold-600' : 'bg-emerald-600'
              }`}
            >
              FOR {property.purpose}
            </span>
            <span className="px-3 py-1 rounded-md text-xs font-semibold bg-slate-900 text-gold-400 uppercase tracking-wider">
              {property.type}
            </span>
            {property.status && (
              <PropertyStatusBadge status={property.status} size="md" />
            )}
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            {property.title}
          </h1>

          <div className="flex items-center gap-2 text-slate-600 text-sm mt-3">
            <MapPin className="w-4 h-4 text-gold-500 shrink-0" />
            <span>{property.location}, {property.city}</span>
          </div>
        </div>

        {/* Price & Action Buttons */}
        <div className="lg:text-right space-y-2">
          <div className="text-xs uppercase font-semibold text-slate-400 tracking-wider">Listing Price</div>
          <div className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
            {property.priceDisplay || formatPrice(property.price)}
            {property.purpose === 'rent' && <span className="text-sm text-slate-500 font-sans font-normal"> / month</span>}
          </div>
        </div>
      </div>

      {/* Property Image Gallery */}
      <div className="mb-12">
        <PropertyGallery images={property.images} title={property.title} />
      </div>

      {/* Grid Layout: Details Left + Inquiry Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Details */}
        <div className="lg:col-span-8 space-y-10">
          {/* Key Specs Matrix */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm grid grid-cols-2 sm:grid-cols-4 gap-6">
            {property.bedrooms !== undefined && property.bedrooms > 0 && (
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 text-gold-600 flex items-center justify-center">
                  <Bed className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase">Bedrooms</div>
                  <div className="font-serif font-bold text-lg text-slate-900">{property.bedrooms} Beds</div>
                </div>
              </div>
            )}

            {property.bathrooms !== undefined && property.bathrooms > 0 && (
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 text-gold-600 flex items-center justify-center">
                  <Bath className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase">Bathrooms</div>
                  <div className="font-serif font-bold text-lg text-slate-900">{property.bathrooms} Baths</div>
                </div>
              </div>
            )}

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 text-gold-600 flex items-center justify-center">
                <Maximize2 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-semibold uppercase">Property Area</div>
                <div className="font-serif font-bold text-lg text-slate-900">{property.area} {property.areaUnit}</div>
              </div>
            </div>

            {property.parking !== undefined && (
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 text-gold-600 flex items-center justify-center">
                  <Car className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase">Parking</div>
                  <div className="font-serif font-bold text-lg text-slate-900">{property.parking} Vehicles</div>
                </div>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-4">
            <h2 className="font-serif text-2xl font-bold text-slate-900">Property Overview</h2>
            <p className="text-slate-600 leading-relaxed whitespace-pre-line text-sm sm:text-base">
              {property.description}
            </p>
          </div>

          {/* Features Checklist */}
          {property.features.length > 0 && (
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6">
              <h2 className="font-serif text-2xl font-bold text-slate-900">Features & Amenities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {property.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-sm font-medium text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Location Map Preview */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-4">
            <h2 className="font-serif text-2xl font-bold text-slate-900">Location Map & Nearby</h2>
            <p className="text-xs text-slate-500">
              Situated in <span className="font-semibold text-slate-900">{property.location}, {property.city}</span>. Accessible via main commercial boulevards and cantonment highways.
            </p>
            <div className="aspect-[16/8] bg-slate-900 rounded-xl relative overflow-hidden flex items-center justify-center border border-slate-800">
              <div className="text-center p-6 space-y-3 z-10">
                <MapPin className="w-10 h-10 text-gold-400 mx-auto animate-bounce" />
                <div className="font-serif font-bold text-white text-lg">{property.location}</div>
                <div className="text-xs text-slate-400 max-w-sm mx-auto">
                  Contact representative Syed M. Hassan Shah to arrange an onsite physical inspection tour.
                </div>
              </div>
              <div className="absolute inset-0 bg-hero-gradient opacity-80" />
            </div>
          </div>
        </div>

        {/* Right Column: Agent Card & Inquiry Form */}
        <div className="lg:col-span-4 space-y-6">
          {/* Agent Representative Card */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 border border-gold-500/30 shadow-xl space-y-4">
            <div className="text-xs text-gold-400 font-semibold uppercase tracking-wider">Assigned Property Consultant</div>
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gold-500">
                <Image
                  src={companyData.representative.avatar}
                  alt={agent.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-white">{agent.name}</h3>
                <p className="text-xs text-slate-400">{'role' in agent ? agent.role : agent.title}</p>
              </div>
            </div>
          </div>

          {/* Property CTAs */}
          <PropertyCTAs
            propertyTitle={property.title}
            propertyPrice={property.priceDisplay}
            agentPhone={agent.phone}
            agentWhatsapp={'whatsapp' in agent ? agent.whatsapp : companyData.primaryWhatsApp}
            agentName={agent.name}
            purpose={property.purpose}
          />

          {/* Inquiry Form */}
          <PropertyInquiryForm propertyTitle={property.title} />
        </div>
      </div>

      {/* Related Properties Section */}
      {relatedProperties.length > 0 && (
        <div className="mt-20 pt-12 border-t border-slate-200 space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-3xl font-bold text-slate-900">Related Property Opportunities</h2>
            <Link href="/properties" className="text-xs font-bold uppercase tracking-wider text-gold-600 hover:underline flex items-center gap-1">
              <span>View All Listings</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProperties.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
