import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { blogPostsData } from '@/data/blog';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ArrowRight, Calendar, User, Clock, Newspaper, MessageCircle } from 'lucide-react';
import { companyData } from '@/data/company';
import { createWhatsAppLink } from '@/lib/utils';

export async function generateStaticParams() {
  return blogPostsData.map((p) => ({
    slug: p.slug,
  }));
}

export default function InsightDetailPage({ params }: { params: { slug: string } }) {
  const post = blogPostsData.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const primaryWhatsAppUrl = createWhatsAppLink(
    companyData.primaryWhatsApp,
    `Hello Blessing Marketing, I read your article "${post.title}" and would like to consult.`
  );

  return (
    <div className="pt-24 pb-20 space-y-16 font-sans">
      
      {/* Hero */}
      <section className="bg-slate-950 text-white py-16 border-b border-gold-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-widest">
            <Newspaper className="w-4 h-4 text-gold-400" />
            <span>{post.category}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-center gap-6 text-slate-400 text-xs font-semibold pt-2">
            <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-gold-400" /> {post.author}</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-gold-400" /> {post.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-gold-400" /> {post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-80 sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-800 space-y-6 text-base leading-relaxed">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl space-y-6">
          <div className="font-serif text-xl font-bold text-slate-900 border-l-4 border-gold-500 pl-4 py-1 italic bg-slate-50 rounded-r-xl">
            {post.excerpt}
          </div>

          <div className="whitespace-pre-line space-y-4 font-normal text-slate-700">
            {post.content}
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 text-white rounded-3xl p-8 text-center space-y-4 border border-gold-500/30">
          <h3 className="font-serif text-2xl font-bold">Have Questions About This Insight?</h3>
          <p className="text-slate-300 text-xs sm:text-sm">
            Reach out directly to CEO Syed M. Hassan Shah or our consultancy team.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href={primaryWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider shadow-lg inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Consultation</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
