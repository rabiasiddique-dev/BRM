"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, X, ShieldCheck } from 'lucide-react';
import { videosData } from '@/data/videos';

export const BrandVideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const companyVideo = videosData.find(v => v.category === 'Company Video') || videosData[0];

  return (
    <section className="bg-slate-950 text-white py-20 relative overflow-hidden font-sans border-y border-gold-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-gold-400">
            <span className="w-6 h-[2px] bg-gold-500 rounded-full inline-block" />
            <span>IMMERSIVE BRAND EXPERIENCE</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            The Blessing Story
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Discover our journey, company values, and corporate vision in real estate marketing and consultancy across Karachi.
          </p>
        </div>

        {/* Full-Width Video Frame */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-gold-500/30 shadow-2xl bg-slate-900 group max-w-5xl mx-auto h-[380px] sm:h-[500px]">
          {!isPlaying ? (
            <>
              <Image
                src={companyVideo.thumbnail}
                alt="The Blessing Story — Real Estate Corporate Representation"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 space-y-6">
                {/* Play Button */}
                <button
                  onClick={() => setIsPlaying(true)}
                  className="w-20 h-20 rounded-full bg-gold-gradient p-[2px] shadow-2xl transform group-hover:scale-110 transition-transform duration-300 focus:outline-none"
                  aria-label="Play Brand Video"
                >
                  <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center text-gold-400 hover:text-white transition-colors">
                    <Play className="w-8 h-8 fill-current translate-x-0.5" />
                  </div>
                </button>

                <div className="space-y-1">
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-white">Watch Our Story</div>
                  <div className="text-xs text-gold-400 uppercase tracking-widest font-semibold">{companyVideo.duration} • HD Corporate Overview</div>
                </div>
              </div>
            </>
          ) : (
            <div className="relative w-full h-full">
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-950/80 text-white hover:text-gold-400 focus:outline-none"
              >
                <X className="w-6 h-6" />
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${companyVideo.youtubeId}?autoplay=1`}
                title={companyVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
