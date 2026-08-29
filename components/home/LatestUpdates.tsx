import React from 'react';
import Link from 'next/link';
import { ArrowRight, Layers, Newspaper, Bell } from 'lucide-react';
import { projectsData } from '@/data/projects';
import { blogPostsData } from '@/data/blog';

const updates = [
  ...projectsData
    .slice(0, 2)
    .map(p => ({
      type: 'project' as const,
      icon: Layers,
      label: 'Project Portfolio',
      title: p.name,
      meta: `${p.location} · ${p.ourRole}`,
      href: `/projects/${p.slug}`,
      color: 'text-gold-600 bg-gold-500/10',
    })),
  ...blogPostsData
    .slice(0, 3)
    .map(b => ({
      type: 'insight' as const,
      icon: Newspaper,
      label: 'Market Insight',
      title: b.title,
      meta: b.category,
      href: `/insights/${b.slug}`,
      color: 'text-purple-600 bg-purple-500/10',
    })),
];

export const LatestUpdates: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
              <Bell className="w-5 h-5 text-gold-600" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-xl text-slate-900">Corporate Updates</h2>
              <p className="text-xs text-slate-500">Project announcements & market insights</p>
            </div>
          </div>
          <Link
            href="/projects"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-gold-600 hover:text-gold-700 uppercase tracking-wider"
          >
            View Projects <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Update Items */}
        <div className="divide-y divide-slate-100">
          {updates.map((update, idx) => {
            const Icon = update.icon;
            return (
              <Link
                key={idx}
                href={update.href}
                className="flex items-start gap-4 px-6 sm:px-8 py-4 hover:bg-slate-50 transition-colors group"
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${update.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">{update.label}</div>
                  <div className="font-semibold text-sm text-slate-900 group-hover:text-gold-700 transition-colors truncate">
                    {update.title}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5 truncate">{update.meta}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-gold-500 transition-colors shrink-0 mt-1" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
