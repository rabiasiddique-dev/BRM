"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, MapPin, Building, DollarSign } from 'lucide-react';

export const PropertySearchHero: React.FC = () => {
  const router = useRouter();
  const [purpose, setPurpose] = useState<'sale' | 'rent' | 'projects'>('sale');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [budget, setBudget] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (purpose === 'projects') {
      router.push('/projects');
      return;
    }

    const params = new URLSearchParams();
    if (purpose) params.set('purpose', purpose);
    if (location) params.set('location', location);
    if (type) params.set('type', type);
    if (budget) params.set('budget', budget);

    router.push(`/properties?${params.toString()}`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-slate-900/90 backdrop-blur-xl p-4 sm:p-6 rounded-2xl border border-gold-500/30 shadow-2xl">
      {/* Purpose Selector Tabs */}
      <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-3">
        <button
          type="button"
          onClick={() => setPurpose('sale')}
          className={`px-5 py-2 rounded-xl font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all ${
            purpose === 'sale'
              ? 'bg-gold-gradient text-slate-950 shadow-md font-bold'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          Buy Property
        </button>

        <button
          type="button"
          onClick={() => setPurpose('rent')}
          className={`px-5 py-2 rounded-xl font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all ${
            purpose === 'rent'
              ? 'bg-gold-gradient text-slate-950 shadow-md font-bold'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          Rent Property
        </button>

        <button
          type="button"
          onClick={() => setPurpose('projects')}
          className={`px-5 py-2 rounded-xl font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all ${
            purpose === 'projects'
              ? 'bg-gold-gradient text-slate-950 shadow-md font-bold'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          New Developments
        </button>
      </div>

      {/* Inputs Form */}
      <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Location Dropdown */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-2.5 focus-within:border-gold-500 transition-colors">
          <label className="text-[10px] font-semibold text-gold-400 uppercase tracking-widest block mb-0.5 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-gold-400" />
            Location
          </label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full bg-transparent text-white text-xs sm:text-sm font-medium focus:outline-none cursor-pointer"
          >
            <option value="" className="bg-slate-900 text-slate-300">All Locations (Karachi)</option>
            <option value="DHA Phase 5" className="bg-slate-900 text-white">DHA Phase 5</option>
            <option value="DHA Phase 8" className="bg-slate-900 text-white">DHA Phase 8</option>
            <option value="Gulshan-e-Iqbal" className="bg-slate-900 text-white">Gulshan-e-Iqbal</option>
            <option value="Clifton" className="bg-slate-900 text-white">Clifton</option>
            <option value="Bahria Town" className="bg-slate-900 text-white">Bahria Town Karachi</option>
            <option value="PECHS" className="bg-slate-900 text-white">PECHS Block 6</option>
            <option value="Taiser Town" className="bg-slate-900 text-white">Taiser Town</option>
          </select>
        </div>

        {/* Property Type Dropdown */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-2.5 focus-within:border-gold-500 transition-colors">
          <label className="text-[10px] font-semibold text-gold-400 uppercase tracking-widest block mb-0.5 flex items-center gap-1">
            <Building className="w-3 h-3 text-gold-400" />
            Property Type
          </label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full bg-transparent text-white text-xs sm:text-sm font-medium focus:outline-none cursor-pointer"
          >
            <option value="" className="bg-slate-900 text-slate-300">All Types</option>
            <option value="house" className="bg-slate-900 text-white">House / Bungalow</option>
            <option value="apartment" className="bg-slate-900 text-white">Luxury Apartment</option>
            <option value="plot" className="bg-slate-900 text-white">Plot / Land</option>
            <option value="office" className="bg-slate-900 text-white">Commercial Office</option>
            <option value="shop" className="bg-slate-900 text-white">Retail Shop</option>
            <option value="farmhouse" className="bg-slate-900 text-white">Farm House</option>
          </select>
        </div>

        {/* Budget Selector */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-2.5 focus-within:border-gold-500 transition-colors">
          <label className="text-[10px] font-semibold text-gold-400 uppercase tracking-widest block mb-0.5 flex items-center gap-1">
            <DollarSign className="w-3 h-3 text-gold-400" />
            Max Budget
          </label>
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full bg-transparent text-white text-xs sm:text-sm font-medium focus:outline-none cursor-pointer"
          >
            <option value="" className="bg-slate-900 text-slate-300">Any Budget</option>
            <option value="10000000" className="bg-slate-900 text-white">Under PKR 1 Crore</option>
            <option value="30000000" className="bg-slate-900 text-white">Under PKR 3 Crore</option>
            <option value="50000000" className="bg-slate-900 text-white">Under PKR 5 Crore</option>
            <option value="100000000" className="bg-slate-900 text-white">Under PKR 10 Crore</option>
          </select>
        </div>

        {/* Submit Search Button */}
        <button
          type="submit"
          className="bg-gold-gradient hover:opacity-95 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2 text-sm uppercase tracking-wider transition-all transform hover:scale-[1.02] active:scale-95"
        >
          <Search className="w-4 h-4" />
          <span>Search Now</span>
        </button>
      </form>
    </div>
  );
};
