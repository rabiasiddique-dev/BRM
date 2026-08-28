"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, Calendar, ArrowRight, User } from 'lucide-react';
import { BlogPost } from '@/types/blog';

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-luxury-hover transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20" />

        <div className="absolute top-3 left-3 z-10">
          <span className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider text-slate-950 bg-gold-gradient shadow-md">
            {post.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-4 text-slate-400 text-xs mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-gold-500" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-gold-500" />
            {post.readTime}
          </span>
        </div>

        <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-gold-600 transition-colors line-clamp-2 mb-3">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h3>

        <p className="text-slate-600 text-xs line-clamp-3 leading-relaxed mb-6">
          {post.excerpt}
        </p>

        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <User className="w-3.5 h-3.5 text-gold-500" />
            <span>{post.author}</span>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="text-xs font-bold text-gold-600 hover:text-gold-700 flex items-center gap-1"
          >
            <span>Read Guide</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
