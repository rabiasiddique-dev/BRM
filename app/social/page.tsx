import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Youtube, Instagram, Facebook, Linkedin, Play, ExternalLink, ArrowRight, TrendingUp } from 'lucide-react';
import { companyData } from '@/data/company';
import { videosData } from '@/data/videos';
import { TalkToExpert } from '@/components/common/TalkToExpert';

export const metadata: Metadata = {
  title: 'Social Media Hub | Blessing Marketing & Real Estate',
  description: 'Follow Blessing Marketing & Real Estate on YouTube, Instagram, Facebook, TikTok and LinkedIn for property tours, investment tips, market updates and latest listings.',
};

const platforms = [
  {
    name: 'YouTube',
    handle: '@BlessingMarketing',
    description: 'Property walkthroughs, market analysis, investment guides & company updates.',
    icon: Youtube,
    href: companyData.socials.youtube || '#',
    color: 'bg-red-600',
    hoverBorder: 'hover:border-red-500/40',
    textColor: 'text-red-400',
    categories: ['Property Tours', 'Investment Guides', 'Market Updates', 'Company Videos'],
  },
  {
    name: 'Instagram',
    handle: '@BlessingMarketing',
    description: 'Daily property reels, listing photos, client handovers & behind-the-scenes.',
    icon: Instagram,
    href: companyData.socials.instagram || '#',
    color: 'bg-gradient-to-br from-pink-600 to-purple-700',
    hoverBorder: 'hover:border-pink-500/40',
    textColor: 'text-pink-400',
    categories: ['Reels', 'Property Photos', 'Client Stories', 'Announcements'],
  },
  {
    name: 'Facebook',
    handle: 'Blessing Marketing & Real Estate',
    description: 'Listings, project launches, client reviews & live property events.',
    icon: Facebook,
    href: companyData.socials.facebook || '#',
    color: 'bg-blue-600',
    hoverBorder: 'hover:border-blue-500/40',
    textColor: 'text-blue-400',
    categories: ['New Listings', 'Project Launches', 'Market News', 'Client Reviews'],
  },
  {
    name: 'LinkedIn',
    handle: 'Blessing Marketing & Real Estate',
    description: 'Professional updates, investment insights, team news & market reports.',
    icon: Linkedin,
    href: companyData.socials.linkedin || '#',
    color: 'bg-sky-700',
    hoverBorder: 'hover:border-sky-500/40',
    textColor: 'text-sky-400',
    categories: ['Professional Updates', 'Investment Reports', 'Team News', 'Industry Insights'],
  },
];

const contentCategories = [
  { emoji: '🏠', label: 'Property Tours', desc: 'Full walkthroughs of residential and commercial listings' },
  { emoji: '🏗️', label: 'Project Tours', desc: 'Site visits and development updates on active projects' },
  { emoji: '📈', label: 'Investment Opportunities', desc: 'ROI analysis and high-yield property picks' },
  { emoji: '📊', label: 'Market Updates', desc: 'Karachi property price trends and area insights' },
  { emoji: '🏢', label: 'Company Updates', desc: 'Team news, milestones and office announcements' },
  { emoji: '🤝', label: 'Client Stories', desc: 'Handover moments and client success journeys' },
];

export default function SocialPage() {
  const featuredVideos = videosData.slice(0, 4);

  return (
    <div className="pt-28 pb-20 space-y-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-3xl p-10 sm:p-16 text-white text-center border border-gold-500/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-widest">
              <TrendingUp className="w-4 h-4" />
              Social Media Hub
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">
              Follow Blessing Marketing Online
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">
              Stay connected with our latest property listings, market updates, investment guides, and client stories across all platforms.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              {platforms.map(p => {
                const Icon = p.icon;
                return (
                  <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 ${p.color} hover:opacity-90 text-white font-bold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg`}>
                    <Icon className="w-4 h-4" /> {p.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 className="font-serif text-3xl font-bold text-slate-900">Our Official Channels</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {platforms.map(platform => {
            const Icon = platform.icon;
            return (
              <a key={platform.name} href={platform.href} target="_blank" rel="noopener noreferrer"
                className={`group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-luxury-hover ${platform.hoverBorder} transition-all duration-300 p-6 space-y-4`}>
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 rounded-xl ${platform.color} flex items-center justify-center shadow-md`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <ExternalLink className={`w-4 h-4 text-slate-300 group-hover:${platform.textColor} transition-colors`} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-slate-900 group-hover:text-gold-700 transition-colors">{platform.name}</h3>
                  <p className={`text-xs font-semibold mt-0.5 ${platform.textColor}`}>{platform.handle}</p>
                  <p className="text-sm text-slate-500 leading-relaxed mt-2">{platform.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {platform.categories.map(cat => (
                    <span key={cat} className="bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                      {cat}
                    </span>
                  ))}
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* Content Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="font-serif text-3xl font-bold text-slate-900">Content Categories</h2>
          <p className="text-slate-500 text-sm mt-2">What you'll find across our social channels</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {contentCategories.map((cat, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-2 hover:shadow-md hover:border-gold-400/40 transition-all duration-300">
              <div className="text-3xl">{cat.emoji}</div>
              <h3 className="font-serif font-bold text-lg text-slate-900">{cat.label}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{cat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Videos Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-serif text-3xl font-bold text-slate-900">Featured Videos</h2>
            <p className="text-slate-500 text-sm mt-1">Property tours, market insights & more</p>
          </div>
          <Link href="/videos" className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-600 hover:text-gold-700 uppercase tracking-wider">
            All Videos <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredVideos.map(video => (
            <Link key={video.id} href="/videos"
              className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-luxury-hover transition-all duration-300 overflow-hidden">
              <div className="relative h-40 bg-slate-900 overflow-hidden">
                <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center group-hover:bg-slate-950/20 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-current text-slate-900 ml-0.5" />
                  </div>
                </div>
                {video.duration && (
                  <span className="absolute bottom-2 right-2 bg-slate-950/80 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                    {video.duration}
                  </span>
                )}
              </div>
              <div className="p-4">
                <p className="font-semibold text-sm text-slate-900 group-hover:text-gold-700 transition-colors line-clamp-2 leading-tight">
                  {video.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TalkToExpert variant="banner" />
      </section>
    </div>
  );
}
