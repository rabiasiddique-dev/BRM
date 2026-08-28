import React from 'react';
import Link from 'next/link';
import { Play, Instagram, Youtube, Facebook, ExternalLink, ArrowRight, TrendingUp } from 'lucide-react';
import { companyData } from '@/data/company';
import { videosData } from '@/data/videos';

const socialCategories = [
  { label: 'Properties', emoji: '🏠', href: companyData.socials.instagram || '#' },
  { label: 'Projects', emoji: '🏗️', href: companyData.socials.youtube || '#' },
  { label: 'Investment', emoji: '📈', href: companyData.socials.facebook || '#' },
  { label: 'Market Updates', emoji: '📊', href: companyData.socials.youtube || '#' },
  { label: 'Property Tours', emoji: '🎥', href: companyData.socials.instagram || '#' },
];

export const SocialContentSection: React.FC = () => {
  const latestVideos = videosData.slice(0, 3);

  return (
    <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-widest mb-4">
              <TrendingUp className="w-3.5 h-3.5" />
              Follow Us Online
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">Latest From Blessing</h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl">
              Property tours, market updates, investment tips — follow us for fresh real estate content every week.
            </p>
          </div>
          <Link href="/social"
            className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 text-xs font-bold uppercase tracking-wider shrink-0">
            View Social Hub <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Latest Video Thumbnails */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Latest Videos & Reels</div>
            <div className="space-y-3">
              {latestVideos.map((video, idx) => (
                <Link key={video.id} href="/videos"
                  className="group flex items-center gap-4 bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-gold-500/30 rounded-2xl p-4 transition-all duration-300">
                  {/* Thumbnail */}
                  <div className="relative w-24 h-16 rounded-xl overflow-hidden shrink-0 bg-slate-700">
                    <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-3.5 h-3.5 text-slate-900 fill-current ml-0.5" />
                      </div>
                    </div>
                    {video.duration && (
                      <span className="absolute bottom-1 right-1 bg-slate-950/90 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                        {video.duration}
                      </span>
                    )}
                  </div>
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-gold-400 mb-1">
                      {video.category.replace('-', ' ')}
                    </div>
                    <p className="font-semibold text-sm text-white group-hover:text-gold-300 transition-colors line-clamp-2 leading-tight">
                      {video.title}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-gold-400 transition-colors shrink-0" />
                </Link>
              ))}
            </div>
            <Link href="/videos"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-400 hover:text-gold-300 transition-colors mt-2">
              Watch All Videos & Reels <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Right: Social Platforms + Content Categories */}
          <div className="lg:col-span-5 space-y-6">
            {/* Content categories */}
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Content Categories</div>
              <div className="flex flex-wrap gap-2">
                {socialCategories.map((cat, i) => (
                  <a key={i} href={cat.href} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-gold-500/30 text-slate-300 hover:text-white px-3 py-2 rounded-xl text-xs font-semibold transition-all">
                    <span>{cat.emoji}</span> {cat.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Social platform links */}
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Follow Us</div>
              <div className="space-y-3">
                {companyData.socials.youtube && (
                  <a href={companyData.socials.youtube} target="_blank" rel="noopener noreferrer"
                    className="group flex items-center gap-4 bg-slate-800/60 hover:bg-red-900/40 border border-slate-700 hover:border-red-500/40 rounded-xl p-4 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center shrink-0">
                      <Youtube className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-sm text-white group-hover:text-red-300 transition-colors">YouTube</div>
                      <div className="text-xs text-slate-400">Property tours & market insights</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-red-400 transition-colors" />
                  </a>
                )}
                {companyData.socials.instagram && (
                  <a href={companyData.socials.instagram} target="_blank" rel="noopener noreferrer"
                    className="group flex items-center gap-4 bg-slate-800/60 hover:bg-pink-900/40 border border-slate-700 hover:border-pink-500/40 rounded-xl p-4 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-600 to-purple-700 flex items-center justify-center shrink-0">
                      <Instagram className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-sm text-white group-hover:text-pink-300 transition-colors">Instagram</div>
                      <div className="text-xs text-slate-400">Reels, photos & property highlights</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-pink-400 transition-colors" />
                  </a>
                )}
                {companyData.socials.facebook && (
                  <a href={companyData.socials.facebook} target="_blank" rel="noopener noreferrer"
                    className="group flex items-center gap-4 bg-slate-800/60 hover:bg-blue-900/40 border border-slate-700 hover:border-blue-500/40 rounded-xl p-4 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                      <Facebook className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-sm text-white group-hover:text-blue-300 transition-colors">Facebook</div>
                      <div className="text-xs text-slate-400">Latest listings & company updates</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
