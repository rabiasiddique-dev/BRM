"use client";

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { createWhatsAppLink } from '@/lib/utils';
import { companyData } from '@/data/company';

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
  variant?: 'floating' | 'button' | 'icon';
  label?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  message = "Hello Blessing Marketing & Real Estate, I am interested in consulting regarding your property listings and services in Karachi.",
  className = "",
  variant = "button",
  label = "WhatsApp Us",
}) => {
  const whatsappUrl = createWhatsAppLink(companyData.primaryWhatsApp, message);

  if (variant === 'floating') {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact on WhatsApp"
        className="fixed bottom-20 right-5 z-40 bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group border-2 border-white/20"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out font-medium text-sm pl-0 group-hover:pl-2">
          Chat on WhatsApp
        </span>
      </a>
    );
  }

  if (variant === 'icon') {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact on WhatsApp"
        className={`bg-emerald-600 hover:bg-emerald-500 text-white p-3 rounded-xl shadow-md transition-all hover:scale-105 flex items-center justify-center ${className}`}
      >
        <MessageCircle className="w-5 h-5 fill-current" />
      </a>
    );
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-5 py-3 rounded-xl shadow-lg transition-all duration-300 hover:shadow-emerald-600/30 hover:-translate-y-0.5 ${className}`}
    >
      <MessageCircle className="w-5 h-5 fill-current" />
      <span>{label}</span>
    </a>
  );
};
