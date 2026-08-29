"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

interface PropertyGalleryProps {
  images: string[];
  title: string;
}

export const PropertyGallery: React.FC<PropertyGalleryProps> = ({ images, title }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const displayImages = images.length > 0 ? images : ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'];

  const prevImage = () => {
    setActiveIndex((prev) => (prev === 0 ? displayImages.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setActiveIndex((prev) => (prev === displayImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      {/* Desktop Grid Layout */}
      <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 p-2">
          {/* Main Big Image */}
          <div
            onClick={() => setLightboxOpen(true)}
            className="lg:col-span-2 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-[480px] rounded-xl overflow-hidden cursor-pointer group bg-slate-950"
          >
            <Image
              src={displayImages[activeIndex]}
              alt={`${title} - Photo ${activeIndex + 1}`}
              fill
              priority
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="bg-slate-900/80 text-white font-medium px-4 py-2 rounded-xl text-xs flex items-center gap-2 backdrop-blur-md">
                <Maximize2 className="w-4 h-4 text-gold-400" />
                <span>View Fullscreen Gallery</span>
              </div>
            </div>
            {/* Counter Badge */}
            <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-700/60 flex items-center gap-1.5">
              <ImageIcon className="w-3.5 h-3.5 text-gold-400" />
              <span>{activeIndex + 1} of {displayImages.length}</span>
            </div>
          </div>

          {/* Side Thumbnail List */}
          <div className="hidden lg:grid grid-rows-2 gap-2 h-[480px]">
            {displayImages.slice(0, 2).map((img, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setActiveIndex(idx);
                  setLightboxOpen(true);
                }}
                className={`relative rounded-xl overflow-hidden cursor-pointer group bg-slate-950 ${
                  activeIndex === idx ? 'ring-2 ring-gold-500' : ''
                }`}
              >
                <Image
                  src={img}
                  alt={`${title} - Thumbnail ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {idx === 1 && displayImages.length > 2 && (
                  <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-xs flex flex-col items-center justify-center text-white">
                    <span className="font-bold text-2xl">+{displayImages.length - 2}</span>
                    <span className="text-xs text-gold-400 font-medium">More Photos</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Swipeable Thumbnails Row */}
        <div className="flex items-center gap-2 p-2 overflow-x-auto bg-slate-950 border-t border-slate-800">
          {displayImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`relative w-20 h-14 shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                activeIndex === idx ? 'border-gold-500 opacity-100 scale-105' : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <Image src={img} alt="Thumbnail" fill className="object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
          <button
            onClick={() => setLightboxOpen(false)}
            aria-label="Close fullscreen gallery"
            className="absolute top-6 right-6 z-50 text-slate-300 hover:text-white p-3 rounded-full bg-slate-900/80 border border-slate-700 transition-transform active:scale-95"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          {displayImages.length > 1 && (
            <>
              <button
                onClick={prevImage}
                aria-label="Previous photo"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-slate-300 hover:text-white p-3 rounded-full bg-slate-900/80 border border-slate-700 transition-transform active:scale-95"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextImage}
                aria-label="Next photo"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-slate-300 hover:text-white p-3 rounded-full bg-slate-900/80 border border-slate-700 transition-transform active:scale-95"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Main Modal Image */}
          <div className="relative w-full max-w-5xl aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-gold-500/30">
            <Image
              src={displayImages[activeIndex]}
              alt={title}
              fill
              className="object-contain bg-slate-950"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-900/90 text-gold-400 font-semibold px-4 py-2 rounded-xl text-xs border border-gold-500/30">
              {title} ({activeIndex + 1} / {displayImages.length})
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
