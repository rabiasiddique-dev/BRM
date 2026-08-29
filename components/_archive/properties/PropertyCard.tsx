"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Bed, Bath, Maximize2, MapPin, ArrowUpRight, Sparkles } from 'lucide-react';
import { Property } from '@/types/property';
import { formatPrice } from '@/lib/utils';
import { PropertyStatusBadge } from '@/components/common/PropertyStatusBadge';

interface PropertyCardProps {
  property: Property;
  priority?: boolean;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, priority = false }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    try {
      const favs = JSON.parse(localStorage.getItem('bmr_favorites') || '[]');
      if (favs.includes(property.id)) {
        setIsFavorite(true);
      }
    } catch {
      // ignore
    }
  }, [property.id]);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const favs: string[] = JSON.parse(localStorage.getItem('bmr_favorites') || '[]');
      let updated: string[];
      if (favs.includes(property.id)) {
        updated = favs.filter((id) => id !== property.id);
        setIsFavorite(false);
      } else {
        updated = [...favs, property.id];
        setIsFavorite(true);
      }
      localStorage.setItem('bmr_favorites', JSON.stringify(updated));
    } catch {
      setIsFavorite(!isFavorite);
    }
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-luxury-hover transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
        <Image
          src={property.images[0]}
          alt={property.title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Dark subtle overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/30" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-2 z-10 flex-wrap">
          <span
            className={`px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider text-white shadow-md backdrop-blur-md ${
              property.purpose === 'sale'
                ? 'bg-gold-500/90 border border-gold-400/40'
                : 'bg-emerald-600/90 border border-emerald-400/40'
            }`}
          >
            FOR {property.purpose}
          </span>
          {property.status && property.status !== 'available' && (
            <PropertyStatusBadge status={property.status} size="sm" />
          )}
          {property.featured && !property.status && (
            <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-900/90 text-gold-400 border border-gold-500/30 flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              <span>Featured</span>
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <button
          onClick={toggleFavorite}
          aria-label="Add to favorites"
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-slate-900/70 hover:bg-slate-900 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-transform active:scale-90"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isFavorite ? 'fill-rose-500 text-rose-500' : 'text-white hover:text-rose-400'
            }`}
          />
        </button>

        {/* Bottom Property Type Pill */}
        <div className="absolute bottom-3 left-3 z-10">
          <span className="text-[11px] font-medium text-slate-200 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-700/60 uppercase tracking-wider">
            {property.type}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-gold-600 transition-colors line-clamp-1 mb-1">
          <Link href={`/properties/${property.slug}`}>
            {property.title}
          </Link>
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-slate-500 text-xs mb-4">
          <MapPin className="w-3.5 h-3.5 text-gold-500 shrink-0" />
          <span className="truncate">{property.location}, {property.city}</span>
        </div>

        {/* Price Tag */}
        <div className="text-xl font-bold text-slate-900 font-serif mb-4 flex items-baseline gap-1">
          <span>{property.priceDisplay || formatPrice(property.price)}</span>
          {property.purpose === 'rent' && (
            <span className="text-xs font-sans text-slate-500 font-normal">/ month</span>
          )}
        </div>

        {/* Specs Divider Grid */}
        <div className="pt-3 border-t border-slate-100 mt-auto grid grid-cols-3 gap-2 text-xs text-slate-600">
          {property.bedrooms !== undefined && property.bedrooms > 0 && (
            <div className="flex items-center gap-1.5" title="Bedrooms">
              <Bed className="w-4 h-4 text-gold-500 shrink-0" />
              <span className="font-medium">{property.bedrooms} Beds</span>
            </div>
          )}

          {property.bathrooms !== undefined && property.bathrooms > 0 && (
            <div className="flex items-center gap-1.5" title="Bathrooms">
              <Bath className="w-4 h-4 text-gold-500 shrink-0" />
              <span className="font-medium">{property.bathrooms} Baths</span>
            </div>
          )}

          <div className="flex items-center gap-1.5 col-span-1" title="Area">
            <Maximize2 className="w-4 h-4 text-gold-500 shrink-0" />
            <span className="font-medium">
              {property.area} {property.areaUnit}
            </span>
          </div>
        </div>

        {/* Action Link */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs font-semibold text-gold-600 group-hover:underline flex items-center gap-1">
            View Property Details
          </span>
          <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-gold-500 group-hover:text-white flex items-center justify-center transition-colors">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};
