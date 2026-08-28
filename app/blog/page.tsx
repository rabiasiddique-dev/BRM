import React from 'react';
import { BlogCard } from '@/components/blog/BlogCard';
import { blogPostsData } from '@/data/blog';
import { BookOpen } from 'lucide-react';

export const metadata = {
  title: 'Real Estate Market Insights & Guides',
  description: 'Read Karachi property buying guides, DHA investment advice, and real estate market analysis by Blessing Marketing.',
};

export default function BlogPage() {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-500">
          <BookOpen className="w-4 h-4" />
          <span>Knowledge Base</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900">
          Market Insights & Property Guides
        </h1>
        <p className="text-slate-600 text-sm sm:text-base">
          In-depth articles, DHA documentation guides, and Karachi real estate market trends written by local industry experts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPostsData.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
