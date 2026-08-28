import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { blogPostsData } from '@/data/blog';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';
import { companyData } from '@/data/company';

export async function generateStaticParams() {
  return blogPostsData.map((p) => ({
    slug: p.slug,
  }));
}

export default function BlogPostDetailPage({ params }: { params: { slug: string } }) {
  const post = blogPostsData.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
        <Link href="/" className="hover:text-gold-600 transition-colors">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-gold-600 transition-colors">Blog</Link>
        <span>/</span>
        <span className="text-slate-900 truncate max-w-xs">{post.title}</span>
      </div>

      <div className="space-y-4">
        <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-gold-gradient text-slate-950 inline-block">
          {post.category}
        </span>

        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-6 text-xs text-slate-500 pt-2 border-b border-slate-200 pb-4">
          <span className="flex items-center gap-1.5">
            <User className="w-4 h-4 text-gold-500" />
            <span className="font-semibold text-slate-900">{post.author}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-gold-500" />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-gold-500" />
            {post.readTime}
          </span>
        </div>
      </div>

      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl bg-slate-900 border border-slate-200">
        <Image src={post.image} alt={post.title} fill className="object-cover" priority />
      </div>

      <div className="prose prose-slate max-w-none prose-headings:font-serif prose-headings:font-bold text-slate-700 leading-relaxed space-y-6 pt-4 text-base">
        <div className="p-6 bg-slate-50 border-l-4 border-gold-500 rounded-r-xl italic font-medium text-slate-800">
          {post.excerpt}
        </div>

        <div className="whitespace-pre-line">
          {post.content}
        </div>
      </div>

      {/* Author CTA Box */}
      <div className="mt-12 p-8 rounded-2xl bg-slate-900 text-white border border-gold-500/30 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <div className="text-xs text-gold-400 font-semibold uppercase">Article Author</div>
          <div className="font-serif font-bold text-xl">{post.author}</div>
          <div className="text-xs text-slate-400">CEO & Senior Advisor, Blessing Marketing & Real Estate</div>
        </div>

        <WhatsAppButton
          label="Inquire via WhatsApp"
          message={`Hello Syed Hassan Shah, I read your article "${post.title}" and would like to inquire about Karachi property options.`}
        />
      </div>
    </div>
  );
}
