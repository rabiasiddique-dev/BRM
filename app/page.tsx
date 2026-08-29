import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Award, MessageCircle, Play, Building2, ExternalLink } from 'lucide-react';
import { Hero } from '@/components/home/Hero';
import { BrandIntro } from '@/components/home/BrandIntro';
import { CompanyStats } from '@/components/home/CompanyStats';
import { WhyBlessing } from '@/components/home/WhyBlessing';
import { CoreCapabilities } from '@/components/home/CoreCapabilities';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { ProcessSection } from '@/components/home/ProcessSection';
import { LeadershipSection } from '@/components/home/LeadershipSection';
import { BrandVideoSection } from '@/components/home/BrandVideoSection';
import { OfficeLocations } from '@/components/home/OfficeLocations';
import { CorporateCTA } from '@/components/home/CorporateCTA';
import { SectionHeading } from '@/components/common/SectionHeading';
import { portfolioItemsData, caseStudiesData } from '@/data/portfolio';
import { blogPostsData } from '@/data/blog';
import { companyData } from '@/data/company';
import { createWhatsAppLink } from '@/lib/utils';

export default function HomePage() {
  const primaryWhatsAppUrl = createWhatsAppLink(
    companyData.primaryWhatsApp,
    "Hello Blessing Marketing, I am visiting your website and would like to inquire about real estate marketing services."
  );

  return (
    <div className="space-y-0 pb-16 font-sans">
      
      {/* 02. CINEMATIC HERO */}
      <Hero />

      {/* 03. BRAND INTRODUCTION */}
      <BrandIntro />

      {/* 04. VERIFIED COMPANY STATS */}
      <CompanyStats />

      {/* 05. WHY BLESSING */}
      <WhyBlessing />

      {/* 06. CORE CAPABILITIES (Bento Grid) */}
      <CoreCapabilities />

      {/* 07. FEATURED PROJECTS (with OUR ROLE tag) */}
      <FeaturedProjects />

      {/* 08. OUR APPROACH / PROCESS */}
      <ProcessSection />

      {/* 09 & 10. PORTFOLIO & CASE STUDIES SHOWCASE */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionHeading
              subtitle="PORTFOLIO & RESULTS"
              title="Our Selected Work & Case Studies"
              description="Real-world case studies demonstrating our project marketing strategy, sales execution, and results."
              light
            />
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 font-bold text-gold-400 hover:text-gold-300 text-xs uppercase tracking-wider mt-4 md:mt-0"
            >
              <span>Explore Full Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudiesData.map((cs) => (
              <div
                key={cs.id}
                className="bg-slate-950/90 border border-slate-800 hover:border-gold-500/40 rounded-3xl p-8 space-y-6 flex flex-col justify-between shadow-2xl transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="bg-gold-500/15 border border-gold-500/30 text-gold-400 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full">
                      {cs.category}
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">{cs.clientName}</span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-gold-400 transition-colors">
                    {cs.projectName}
                  </h3>

                  <div className="space-y-2 text-xs leading-relaxed text-slate-300">
                    <div><strong className="text-gold-400">Challenge:</strong> {cs.challenge}</div>
                    <div><strong className="text-gold-400">Strategy:</strong> {cs.strategy}</div>
                  </div>

                  {/* Results Metrics Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 border-t border-slate-800">
                    {cs.results.map((res, rIdx) => (
                      <div key={rIdx} className="bg-slate-900 p-2.5 rounded-xl text-center border border-slate-800">
                        <div className="font-serif font-extrabold text-gold-400 text-base">{res.metric}</div>
                        <div className="text-[9px] text-slate-400 font-semibold truncate">{res.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href="/portfolio"
                    className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl border border-slate-800 inline-flex items-center gap-2"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gold-400" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. CEO / LEADERSHIP */}
      <LeadershipSection />

      {/* 13. IMMERSIVE BRAND VIDEO */}
      <BrandVideoSection />

      {/* 15. INSIGHTS / THOUGHT LEADERSHIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <SectionHeading
            subtitle="THOUGHT LEADERSHIP"
            title="Real Estate Insights & News"
            description="Market analysis, cantonment transfer guides, and investment perspectives from CEO Syed M. Hassan Shah."
          />
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 font-bold text-gold-600 hover:text-gold-700 text-xs uppercase tracking-wider mt-4 md:mt-0"
          >
            <span>View All Insights</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPostsData.slice(0, 3).map((post) => (
            <Link
              key={post.id}
              href={`/insights/${post.slug}`}
              className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden flex flex-col justify-between group hover:shadow-xl transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-slate-950/80 text-gold-400 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] text-slate-400 font-semibold">{post.date} • {post.readTime}</div>
                  <h3 className="font-serif font-bold text-lg text-slate-900 group-hover:text-gold-600 transition-colors mt-1">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-xs mt-2 line-clamp-2 leading-relaxed">
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

      {/* 17. PARTNERS / DEVELOPERS */}
      <section className="bg-slate-900 text-white py-16 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-gold-400 mb-2">
            <span className="w-6 h-[2px] bg-gold-500 rounded-full inline-block" />
            <span>TRUSTED COLLABORATION</span>
          </div>
          <h2 className="font-serif text-2xl font-bold mb-8">Our Partners & Developers</h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {companyData.partners.map((p, idx) => (
              <div key={idx} className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col items-center justify-center space-y-2">
                <Building2 className="w-8 h-8 text-gold-400 mb-1" />
                <div className="font-serif font-bold text-sm text-white">{p.name}</div>
                <div className="text-[10px] text-slate-400 font-semibold uppercase">{p.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 18. OFFICE LOCATIONS */}
      <OfficeLocations />

      {/* 19. FINAL CORPORATE CTA */}
      <CorporateCTA />

    </div>
  );
}
