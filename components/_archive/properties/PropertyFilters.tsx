"use client";

import React from 'react';
import { PropertyFilterState, PropertyType } from '@/types/property';
import { Filter, RotateCcw, Search } from 'lucide-react';

interface PropertyFiltersProps {
  filters: PropertyFilterState;
  onChange: (filters: PropertyFilterState) => void;
  onReset: () => void;
  totalResults: number;
}

export const PropertyFilters: React.FC<PropertyFiltersProps> = ({
  filters,
  onChange,
  onReset,
  totalResults,
}) => {
  const updateFilter = (key: keyof PropertyFilterState, value: unknown) => {
    onChange({
      ...filters,
      [key]: value,
    });
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2 font-serif font-bold text-lg text-slate-900">
          <Filter className="w-5 h-5 text-gold-500" />
          <span>Property Filters</span>
        </div>
        <button
          onClick={onReset}
          className="text-xs text-slate-500 hover:text-gold-600 flex items-center gap-1 font-medium transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset All</span>
        </button>
      </div>

      {/* Search Input */}
      <div>
        <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block mb-2">
          Keyword Search
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="Search by area, DHA, title..."
            value={filters.searchQuery}
            onChange={(e) => updateFilter('searchQuery', e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-gold-500 transition-colors"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
        </div>
      </div>

      {/* Purpose */}
      <div>
        <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block mb-2">
          Purpose
        </label>
        <div className="grid grid-cols-3 gap-2">
          {(['all', 'sale', 'rent'] as const).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => updateFilter('purpose', p)}
              className={`py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                filters.purpose === p
                  ? 'bg-slate-900 text-gold-400 font-bold border border-gold-500/30'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Property Type */}
      <div>
        <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block mb-2">
          Property Type
        </label>
        <select
          value={filters.type}
          onChange={(e) => updateFilter('type', e.target.value as PropertyType | 'all')}
          className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-gold-500 cursor-pointer"
        >
          <option value="all">All Types</option>
          <option value="house">House / Villa</option>
          <option value="apartment">Luxury Apartment</option>
          <option value="plot">Plot / Land</option>
          <option value="office">Commercial Office</option>
          <option value="shop">Retail Shop</option>
          <option value="farmhouse">Farmhouse</option>
        </select>
      </div>

      {/* Location */}
      <div>
        <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block mb-2">
          Location
        </label>
        <select
          value={filters.location}
          onChange={(e) => updateFilter('location', e.target.value)}
          className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-gold-500 cursor-pointer"
        >
          <option value="">All Karachi Locations</option>
          <option value="DHA Phase 5">DHA Phase 5</option>
          <option value="DHA Phase 8">DHA Phase 8</option>
          <option value="Gulshan-e-Iqbal">Gulshan-e-Iqbal</option>
          <option value="Clifton">Clifton</option>
          <option value="Bahria Town">Bahria Town Karachi</option>
          <option value="PECHS">PECHS Block 6</option>
          <option value="Taiser Town">Taiser Town</option>
        </select>
      </div>

      {/* Bedrooms */}
      <div>
        <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block mb-2">
          Bedrooms
        </label>
        <div className="grid grid-cols-5 gap-1.5">
          {['all', '1', '2', '3', '4+'].map((bed) => (
            <button
              key={bed}
              type="button"
              onClick={() => updateFilter('bedrooms', bed)}
              className={`py-2 rounded-lg text-xs font-semibold transition-all ${
                filters.bedrooms === bed
                  ? 'bg-gold-500 text-white font-bold'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {bed === 'all' ? 'Any' : bed}
            </button>
          ))}
        </div>
      </div>

      {/* Sorting */}
      <div>
        <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block mb-2">
          Sort By
        </label>
        <select
          value={filters.sortBy}
          onChange={(e) => updateFilter('sortBy', e.target.value as PropertyFilterState['sortBy'])}
          className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-gold-500 cursor-pointer"
        >
          <option value="newest">Newest First</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="area-desc">Largest Area</option>
        </select>
      </div>

      {/* Results Count Footer */}
      <div className="pt-4 border-t border-slate-100 text-center text-xs text-slate-500 font-medium">
        Found <span className="text-slate-900 font-bold">{totalResults}</span> matching properties
      </div>
    </div>
  );
};
