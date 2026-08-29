import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SectionHeading } from '@/components/common/SectionHeading';
import { blogPostsData } from '@/data/blog';
import { Newspaper, ArrowRight } from 'lucide-react';

export default function InsightsPage() {
  return (
    <div className="pt-24 pb-20 space-y-16 font-sans">
      
      {/* Hero */}
      <section className="bg-slate-950 text-white py-16 border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-widest">
            <Newspaper className="w-4 h-4 text-gold-400" />
            <span>CORPORATE THOUGHT LEADERSHIP</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight">
            Market Insights & <span className="gold-gradient-text">Real Estate Guides</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Property trends, cantonment transfer guides, and investment outlooks authored by CEO Syed M. Hassan Shah.
          </p>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPostsData.map((post) => (
            <Link
              key={post.id}
              href={`/insights/${post.slug}`}
              className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden flex flex-col justify-between group hover:shadow-2xl hover:border-gold-500/40 transition-all"
            >
              <div className="relative h-56 overflow-hidden bg-slate-900">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-slate-950/80 text-gold-400 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full border border-gold-500/30">
                  {post.category}
                </div>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] text-slate-400 font-semibold">{post.date} • {post.readTime}</div>
                  <h3 className="font-serif font-bold text-lg text-slate-900 group-hover:text-gold-600 transition-colors mt-1">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-xs mt-2 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-gold-600 uppercase tracking-wider">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
