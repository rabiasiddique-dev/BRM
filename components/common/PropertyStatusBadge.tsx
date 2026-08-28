"use client";

import React from 'react';
import { PropertyStatus } from '@/types/property';

interface PropertyStatusBadgeProps {
  status: PropertyStatus;
  size?: 'sm' | 'md';
}

const statusConfig: Record<PropertyStatus, { label: string; className: string }> = {
  available:  { label: 'Available',  className: 'bg-emerald-600 text-white' },
  featured:   { label: 'Featured',   className: 'bg-gold-600 text-white' },
  reserved:   { label: 'Reserved',   className: 'bg-amber-500 text-white' },
  sold:       { label: 'Sold',       className: 'bg-red-600 text-white' },
  rented:     { label: 'Rented',     className: 'bg-purple-600 text-white' },
  new:        { label: 'New',        className: 'bg-sky-600 text-white' },
  ongoing:    { label: 'Ongoing',    className: 'bg-blue-600 text-white' },
  completed:  { label: 'Completed',  className: 'bg-slate-600 text-white' },
};

export const PropertyStatusBadge: React.FC<PropertyStatusBadgeProps> = ({ status, size = 'sm' }) => {
  const config = statusConfig[status];
  if (!config) return null;
  return (
    <span
      className={`inline-flex items-center font-bold uppercase tracking-wider rounded-md ${config.className} ${
        size === 'sm' ? 'text-[10px] px-2 py-0.5' : 'text-xs px-3 py-1'
      }`}
    >
      {config.label}
    </span>
  );
};
