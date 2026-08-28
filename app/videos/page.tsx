"use client";

import React, { useState } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Play, X, Youtube, Instagram, Facebook, Clock, ArrowRight } from 'lucide-react';
import { videosData, VideoItem } from '@/data/videos';
import { SectionHeading } from '@/components/common/SectionHeading';
import { TalkToExpert } from '@/components/common/TalkToExpert';
import { companyData } from '@/data/company';

const categoryConfig = {
  'all': { label: 'All Videos' },
  'property-tour': { label: 'Property Tours' },
  'project': { label: 'Project Videos' },
  'reel': { label: 'Latest Reels' },
  'market-update': { label: 'Market Updates' },
  'investment': { label: 'Investment' },
  'company': { label: 'Company' },
} as const;

type Category = keyof typeof categoryConfig;

export default function VideosPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [playingVideo, setPlayingVideo] = useState<VideoItem | null>(null);

  const filtered = activeCategory === 'all'
    ? videosData
    : videosData.filter(v => v.category === activeCategory);

  return (
    <div className="pt-28 pb-20 space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-700 text-xs font-bold uppercase tracking-widest">
          <Play className="w-4 h-4 fill-current" />
          Property Video Gallery
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900">Videos & Property Tours</h1>
        <p className="text-slate-500 text-base max-w-2xl mx-auto leading-relaxed">
          Explore property walkthroughs, project tours, investment guides, and market updates from Blessing Marketing.
        </p>

        {/* Social Channel Links */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {companyData.socials.youtube && (
            <a href={companyData.socials.youtube} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all">
              <Youtube className="w-4 h-4" /> YouTube Channel
            </a>
          )}
          {companyData.socials.instagram && (
            <a href={companyData.socials.instagram} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all">
              <Instagram className="w-4 h-4" /> Instagram Reels
            </a>
          )}
          {companyData.socials.facebook && (
            <a href={companyData.socials.facebook} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all">
              <Facebook className="w-4 h-4" /> Facebook Videos
            </a>
          )}
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2 mb-8">
          {(Object.keys(categoryConfig) as Category[]).map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {categoryConfig[cat].label}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map(video => (
            <button
              key={video.id}
              onClick={() => setPlayingVideo(video)}
              className="group text-left bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-luxury-hover transition-all duration-300 overflow-hidden"
            >
              {/* Thumbnail */}
              <div className="relative h-48 bg-slate-900 overflow-hidden">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors" />
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-300">
                    <Play className="w-6 h-6 text-slate-900 fill-current ml-0.5" />
                  </div>
                </div>
                {/* Duration */}
                {video.duration && (
                  <div className="absolute bottom-2 right-2 bg-slate-950/80 text-white text-xs font-bold px-2 py-0.5 rounded flex items-center gap-1">
                    <Clock className="w-2.5 h-2.5" />
                    {video.duration}
                  </div>
                )}
                {/* Category Badge */}
                <div className="absolute top-2 left-2">
                  <span className="bg-gold-gradient text-slate-950 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                    {categoryConfig[video.category as Category]?.label || video.category}
                  </span>
                </div>
              </div>
              {/* Info */}
              <div className="p-4 space-y-1.5">
                <h3 className="font-semibold text-sm text-slate-900 group-hover:text-gold-700 transition-colors line-clamp-2 leading-tight">
                  {video.title}
                </h3>
                {video.description && (
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{video.description}</p>
                )}
                {video.propertySlug && (
                  <div className="pt-1">
                    <span className="text-xs text-gold-600 font-semibold flex items-center gap-1">
                      View Property <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Video Modal */}
      {playingVideo && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setPlayingVideo(null)}
        >
          <div
            className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <h3 className="font-serif font-bold text-lg text-slate-900 truncate pr-4">{playingVideo.title}</h3>
              <button onClick={() => setPlayingVideo(null)} className="text-slate-400 hover:text-slate-700 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            {/* Video area */}
            <div className="relative aspect-video bg-slate-900">
              {playingVideo.youtubeId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${playingVideo.youtubeId}?autoplay=1`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-white space-y-3">
                  <Image src={playingVideo.thumbnail} alt={playingVideo.title} fill className="object-cover opacity-40" />
                  <div className="relative z-10 text-center space-y-3 p-8">
                    <Play className="w-12 h-12 text-gold-400 mx-auto" />
                    <p className="font-semibold text-lg">Video Coming Soon</p>
                    <p className="text-slate-400 text-sm">Follow our YouTube channel for the latest property tours and market updates.</p>
                    {companyData.socials.youtube && (
                      <a href={companyData.socials.youtube} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all">
                        <Youtube className="w-4 h-4" /> Visit Our YouTube
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
            {/* Footer */}
            {playingVideo.propertySlug && (
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">Property featured in this video</span>
                <Link href={`/properties/${playingVideo.propertySlug}`} onClick={() => setPlayingVideo(null)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-600 hover:text-gold-700">
                  View Property Details <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TalkToExpert variant="banner" />
      </section>
    </div>
  );
}
