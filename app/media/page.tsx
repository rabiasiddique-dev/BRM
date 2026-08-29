"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { SectionHeading } from '@/components/common/SectionHeading';
import { videosData } from '@/data/videos';
import { companyData } from '@/data/company';
import { Play, X, Share2, Facebook, Instagram, Youtube, Linkedin, Video } from 'lucide-react';

export default function MediaPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Company Video', 'Project Tour', 'Market Insight', 'Reel'];

  const filteredVideos = selectedCategory === 'All'
    ? videosData
    : videosData.filter(v => v.category === selectedCategory);

  const selectedVideoObj = videosData.find(v => v.id === activeVideo);

  return (
    <div className="pt-24 pb-20 space-y-16 font-sans">
      
      {/* Hero */}
      <section className="bg-slate-950 text-white py-16 border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-widest">
            <Video className="w-4 h-4 text-gold-400" />
            <span>MEDIA & REELS HUB</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight">
            Video & <span className="gold-gradient-text">Social Media Hub</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Watch HD project tours, market insight interviews with CEO Syed M. Hassan Shah, and social media reels.
          </p>
        </div>
      </section>

      {/* Video Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-gold-gradient text-slate-950 shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden flex flex-col justify-between group hover:shadow-2xl hover:border-gold-500/40 transition-all duration-300"
            >
              <div className="relative h-60 overflow-hidden bg-slate-900">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <div className="absolute top-4 left-4 bg-slate-950/80 text-gold-400 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full border border-gold-500/30">
                  {video.category}
                </div>

                {video.duration && (
                  <div className="absolute top-4 right-4 bg-slate-900/90 text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                    {video.duration}
                  </div>
                )}

                {/* Play Overlay */}
                <button
                  onClick={() => setActiveVideo(video.id)}
                  className="absolute inset-0 flex items-center justify-center focus:outline-none"
                >
                  <div className="w-14 h-14 rounded-full bg-gold-gradient p-[2px] shadow-2xl transform group-hover:scale-110 transition-transform">
                    <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center text-gold-400">
                      <Play className="w-6 h-6 fill-current translate-x-0.5" />
                    </div>
                  </div>
                </button>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-lg text-slate-900 group-hover:text-gold-600 transition-colors">
                    {video.title}
                  </h3>
                  {video.description && (
                    <p className="text-xs text-slate-600 line-clamp-2 mt-1 leading-relaxed">
                      {video.description}
                    </p>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-medium">
                  <span>{video.dateAdded}</span>
                  <button
                    onClick={() => setActiveVideo(video.id)}
                    className="text-gold-600 font-bold uppercase tracking-wider hover:underline"
                  >
                    Watch Video →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Modal Lightbox */}
      {activeVideo && selectedVideoObj && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-gold-500/40">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-950 text-white hover:text-gold-400"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="relative h-[450px]">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideoObj.youtubeId}?autoplay=1`}
                title={selectedVideoObj.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* Social Media Hub */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <SectionHeading
            subtitle="OFFICIAL SOCIAL MEDIA"
            title="Follow Blessing Marketing"
            description="Stay connected for live project updates, market insights, and video reels across our verified official channels."
            light
            centered
          />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <a
              href={companyData.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-gold-500/40 text-white flex flex-col items-center justify-center space-y-2 group transition-all"
            >
              <Facebook className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform" />
              <div className="font-bold text-sm">Facebook</div>
              <div className="text-[10px] text-slate-400">@blessingmarketing</div>
            </a>

            <a
              href={companyData.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-gold-500/40 text-white flex flex-col items-center justify-center space-y-2 group transition-all"
            >
              <Instagram className="w-8 h-8 text-pink-500 group-hover:scale-110 transition-transform" />
              <div className="font-bold text-sm">Instagram</div>
              <div className="text-[10px] text-slate-400">@blessingmarketing</div>
            </a>

            <a
              href={companyData.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-gold-500/40 text-white flex flex-col items-center justify-center space-y-2 group transition-all"
            >
              <Youtube className="w-8 h-8 text-red-500 group-hover:scale-110 transition-transform" />
              <div className="font-bold text-sm">YouTube</div>
              <div className="text-[10px] text-slate-400">Blessing Marketing Official</div>
            </a>

            <a
              href={companyData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-gold-500/40 text-white flex flex-col items-center justify-center space-y-2 group transition-all"
            >
              <Linkedin className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />
              <div className="font-bold text-sm">LinkedIn</div>
              <div className="text-[10px] text-slate-400">Blessing Marketing</div>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
