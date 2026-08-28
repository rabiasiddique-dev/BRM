"use client";

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { PropertyCard } from '@/components/properties/PropertyCard';
import { PropertyFilters } from '@/components/properties/PropertyFilters';
import { SectionHeading } from '@/components/common/SectionHeading';
import { propertiesData } from '@/data/properties';
import { PropertyFilterState, PropertyType } from '@/types/property';
import { Building2, SearchX } from 'lucide-react';

function PropertyCatalogContent() {
  const searchParams = useSearchParams();

  const initialPurpose = (searchParams.get('purpose') as 'all' | 'sale' | 'rent') || 'all';
  const initialType = (searchParams.get('type') as PropertyType | 'all') || 'all';
  const initialLocation = searchParams.get('location') || '';
  const initialBudget = searchParams.get('budget') ? Number(searchParams.get('budget')) : 0;

  const [filters, setFilters] = useState<PropertyFilterState>({
    searchQuery: '',
    purpose: initialPurpose,
    type: initialType,
    location: initialLocation,
    minPrice: 0,
    maxPrice: initialBudget,
    bedrooms: 'all',
    sortBy: 'newest',
  });

  const handleReset = () => {
    setFilters({
      searchQuery: '',
      purpose: 'all',
      type: 'all',
      location: '',
      minPrice: 0,
      maxPrice: 0,
      bedrooms: 'all',
      sortBy: 'newest',
    });
  };

  const filteredProperties = useMemo(() => {
    return propertiesData.filter((prop) => {
      // Keyword search
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        const matchTitle = prop.title.toLowerCase().includes(query);
        const matchLocation = prop.location.toLowerCase().includes(query);
        const matchDesc = prop.description.toLowerCase().includes(query);
        if (!matchTitle && !matchLocation && !matchDesc) return false;
      }

      // Purpose
      if (filters.purpose !== 'all' && prop.purpose !== filters.purpose) {
        return false;
      }

      // Type
      if (filters.type !== 'all' && prop.type !== filters.type) {
        return false;
      }

      // Location
      if (filters.location && !prop.location.toLowerCase().includes(filters.location.toLowerCase())) {
        return false;
      }

      // Max Budget
      if (filters.maxPrice > 0 && prop.price > filters.maxPrice) {
        return false;
      }

      // Bedrooms
      if (filters.bedrooms !== 'all') {
        if (filters.bedrooms === '4+') {
          if (!prop.bedrooms || prop.bedrooms < 4) return false;
        } else {
          if (prop.bedrooms !== Number(filters.bedrooms)) return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'price-asc') return a.price - b.price;
      if (filters.sortBy === 'price-desc') return b.price - a.price;
      if (filters.sortBy === 'area-desc') return b.area - a.area;
      return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
    });
  }, [filters]);

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-10 text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-500">
          <Building2 className="w-4 h-4" />
          <span>Real Estate Directory</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900">
          Karachi Property Portfolio
        </h1>
        <p className="text-slate-600 text-sm sm:text-base">
          Browse verified residential villas, apartments, plots, and commercial offices across Karachi's prime sectors.
        </p>
      </div>

      {/* Main Grid with Sidebar Filter */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filter Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-28">
            <PropertyFilters
              filters={filters}
              onChange={setFilters}
              onReset={handleReset}
              totalResults={filteredProperties.length}
            />
          </div>
        </div>

        {/* Listings Output */}
        <div className="lg:col-span-3">
          {filteredProperties.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                <SearchX className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900">No Properties Found</h3>
              <p className="text-sm text-slate-500 max-w-md mx-auto">
                We couldn't find any properties matching your current filter criteria. Try adjusting your search keyword or budget limits.
              </p>
              <button
                onClick={handleReset}
                className="bg-slate-900 text-white font-semibold px-6 py-2.5 rounded-xl text-xs uppercase tracking-wider hover:bg-slate-800 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((prop) => (
                <PropertyCard key={prop.id} property={prop} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function PropertiesPage() {
  return (
    <Suspense fallback={<div className="pt-32 text-center text-slate-500">Loading catalog...</div>}>
      <PropertyCatalogContent />
    </Suspense>
  );
}
