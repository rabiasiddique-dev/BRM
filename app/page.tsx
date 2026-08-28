import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Users,
  TrendingUp,
  HeartHandshake,
  Building,
  Home,
  Layers,
  Briefcase,
  Store,
  Trees,
  Phone,
  MapPin,
  CheckCircle
} from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { PropertySearchHero } from '@/components/properties/PropertySearchHero';
import { PropertyCard } from '@/components/properties/PropertyCard';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { ServiceCard } from '@/components/services/ServiceCard';
import { BlogCard } from '@/components/blog/BlogCard';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';
import { FeaturedOpportunity } from '@/components/home/FeaturedOpportunity';
import { LatestUpdates } from '@/components/home/LatestUpdates';
import { SocialContentSection } from '@/components/home/SocialContentSection';
import { TalkToExpert } from '@/components/common/TalkToExpert';
import { propertiesData } from '@/data/properties';
import { projectsData } from '@/data/projects';
import { servicesData } from '@/data/services';
import { blogPostsData } from '@/data/blog';
import { testimonialsData } from '@/data/testimonials';
import { companyData } from '@/data/company';

export default function HomePage() {
  const featuredProperties = propertiesData.filter((p) => p.featured).slice(0, 6);
  const featuredProjects = projectsData.slice(0, 3);
  const featuredServices = servicesData.slice(0, 6);
  const recentPosts = blogPostsData.slice(0, 3);

  const categories = [
    { title: "Houses & Villas", type: "house", count: "14 Available", icon: Home, image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80" },
    { title: "Luxury Apartments", type: "apartment", count: "18 Available", icon: Building, image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80" },
    { title: "Residential & Commercial Plots", type: "plot", count: "25 Available", icon: Layers, image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80" },
    { title: "Commercial Offices", type: "office", count: "8 Available", icon: Briefcase, image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80" },
    { title: "Retail Shops", type: "shop", count: "6 Available", icon: Store, image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80" },
    { title: "Farmhouses & Retreats", type: "farmhouse", count: "4 Available", icon: Trees, image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80" },
  ];

  return (
    <div className="space-y-20 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] lg:min-h-[95vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-slate-950 overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
            alt="Blessing Marketing Luxury Real Estate Karachi"
            fill
            priority
            className="object-cover opacity-35 scale-105 transform animate-pulse duration-[10000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping"></span>
            <span>Premium Karachi Property Discovery Platform</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
            Find a Place You'll Be <br className="hidden sm:inline" />
            <span className="gold-gradient-text">Proud to Call Home</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
            Discover carefully selected luxury villas, prime residential plots, and high-yield commercial investments with <span className="text-white font-medium">Blessing Marketing & Real Estate</span>.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/properties"
              className="bg-gold-gradient hover:opacity-95 text-slate-950 font-bold px-8 py-4 rounded-xl shadow-xl flex items-center gap-2 text-sm uppercase tracking-wider transition-all transform hover:scale-105"
            >
              <span>Explore Properties</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`tel:${companyData.phoneNumbers[0].replace(/[^0-9]/g, '')}`}
              className="bg-slate-900/80 hover:bg-slate-900 text-white font-semibold px-8 py-4 rounded-xl border border-gold-500/40 backdrop-blur-md flex items-center gap-2 text-sm uppercase tracking-wider transition-all"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span>Talk to Real Estate Expert</span>
            </a>
          </div>

          {/* Integrated Search Interface */}
          <div className="pt-6">
            <PropertySearchHero />
          </div>
        </div>
      </section>

      {/* 1.5. FEATURED OPPORTUNITY */}
      <FeaturedOpportunity />

      {/* 1.6. LATEST UPDATES */}
      <LatestUpdates />

      {/* 2. FEATURED PROPERTIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <SectionHeading
            subtitle="Handpicked Opportunities"
            title="Featured Properties"
            description="Explore selected villas, apartments, and plot opportunities in DHA Phase 5, Phase 8, Clifton, and Gulshan-e-Iqbal."
          />
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 font-bold text-gold-600 hover:text-gold-700 text-sm uppercase tracking-wider mt-4 md:mt-0"
          >
            <span>View All Listings</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((prop, idx) => (
            <PropertyCard key={prop.id} property={prop} priority={idx < 3} />
          ))}
        </div>
      </section>

      {/* 3. PROPERTY CATEGORIES */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            subtitle="Browse By Category"
            title="Explore Properties by Type"
            description="Whether looking for luxury living or strategic commercial investments, browse tailored listings across Karachi."
            light
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={idx}
                  href={`/properties?type=${cat.type}`}
                  className="group relative h-64 rounded-2xl overflow-hidden border border-slate-800 shadow-xl flex flex-col justify-end p-6 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-gold-gradient p-[1px] mb-3">
                      <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-gold-400" />
                      </div>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-gold-400 transition-colors">
                      {cat.title}
                    </h3>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-slate-300 font-medium">{cat.count}</span>
                      <span className="text-xs font-bold text-gold-400 flex items-center gap-1">
                        Explore <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. ABOUT / EXECUTIVE PROFILE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full bg-slate-900">
            <Image
              src={companyData.representative.avatar}
              alt={companyData.representative.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-gold-500/30 text-white">
              <div className="font-serif font-bold text-xl">{companyData.representative.name}</div>
              <div className="text-xs text-gold-400">{companyData.representative.title}</div>
            </div>
          </div>

          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center space-y-6">
            <SectionHeading
              subtitle="Building Trust Through Property"
              title="Welcome to Blessing Marketing & Real Estate"
            />

            <p className="text-slate-600 leading-relaxed text-base">
              At Blessing Marketing & Real Estate, our single goal is helping individuals, families, and commercial entities make confident, high-yield property decisions. Backed by extensive local market experience in Karachi's prime residential and commercial corridors, we emphasize thorough documentation check, transparent pricing, and direct client care.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <ShieldCheck className="w-6 h-6 text-gold-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Verified Title Deals</h4>
                  <p className="text-xs text-slate-500 mt-1">100% legal verification before token commitments.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <MapPin className="w-6 h-6 text-gold-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Karachi Branches</h4>
                  <p className="text-xs text-slate-500 mt-1">DHA Phase-II Ext & Gulshan-e-Iqbal offices.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2"
              >
                <span>Read Full Company Profile</span>
                <ArrowRight className="w-4 h-4 text-gold-400" />
              </Link>

              <WhatsAppButton
                label="WhatsApp Executive Direct"
                message="Hello Syed Hassan Shah, I would like to schedule a real estate consultation."
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE BLESSING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Core Brand Pillars"
          title="Why Choose Blessing Marketing?"
          description="Five foundational reasons why homeowners and commercial investors trust our real estate guidance."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
          {[
            {
              icon: ShieldCheck,
              title: "Trusted Guidance",
              desc: "Complete professional support throughout legal documentation and Cantonment transfer processes."
            },
            {
              icon: Award,
              title: "Market Knowledge",
              desc: "Deep local understanding of DHA, Clifton, Gulshan, and emerging development corridors."
            },
            {
              icon: Users,
              title: "Personalized Service",
              desc: "Customized property recommendations based on your individual budget and lifestyle goals."
            },
            {
              icon: TrendingUp,
              title: "Investment Focus",
              desc: "Strategic advice matching high rental yield and capital appreciation requirements."
            },
            {
              icon: HeartHandshake,
              title: "Long-Term Trust",
              desc: "Building enduring relationships beyond single transactions to support your family's future."
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-md hover:shadow-luxury-hover transition-all duration-300 space-y-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-600 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-lg text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. FEATURED PROJECTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <SectionHeading
            subtitle="Prime Developments"
            title="Featured Projects"
            description="Explore ongoing and newly launched residential and commercial project developments."
          />
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-bold text-gold-600 hover:text-gold-700 text-sm uppercase tracking-wider mt-4 md:mt-0"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((proj) => (
            <ProjectCard key={proj.id} project={proj} />
          ))}
        </div>
      </section>

      {/* 7. SERVICES OVERVIEW */}
      <section className="bg-slate-900 text-white py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Full Spectrum Solutions"
            title="Our Professional Real Estate Services"
            description="Tailored real estate services for buyers, sellers, landlords, and commercial developers in Karachi."
            light
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {featuredServices.map((srv) => (
              <ServiceCard key={srv.id} service={srv} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. INVESTMENT OPPORTUNITIES SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden border border-gold-500/30 shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-wider border border-gold-500/30">
              <TrendingUp className="w-4 h-4" />
              <span>Investment Opportunities</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
              Discover High-Yield Property Investments in Karachi
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Looking for long-term capital growth or high monthly rental income? Our team evaluates market trends to present prime commercial plots, off-plan apartments, and high-footfall retail units.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                <CheckCircle className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Commercial Yield Advisory</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                <CheckCircle className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Roshan Digital Account Support</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                <CheckCircle className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Developer Pre-Launch Rates</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/investment"
                className="bg-gold-gradient text-slate-950 font-bold px-8 py-4 rounded-xl text-xs uppercase tracking-wider shadow-lg hover:opacity-95 transition-all"
              >
                Explore Investment Options
              </Link>
              <WhatsAppButton
                label="Talk to Investment Consultant"
                message="Hello Blessing Marketing, I am interested in consulting regarding high ROI real estate investment opportunities in Karachi."
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Client Feedback"
          title="What Our Valued Clients Say"
          description="Read experiences from homeowners and property investors who partnered with Blessing Marketing."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex text-gold-500 space-x-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>
                <p className="text-slate-600 text-sm italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6">
                <div className="font-serif font-bold text-slate-900 text-base">{t.author}</div>
                <div className="text-xs text-gold-600 font-medium">{t.role} ({t.location})</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. MARKET INSIGHTS / BLOG */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <SectionHeading
            subtitle="Market Insights"
            title="Real Estate Guides & Insights"
            description="Expert property buying tips, DHA guides, and investment outlooks for Karachi."
          />
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-bold text-gold-600 hover:text-gold-700 text-sm uppercase tracking-wider mt-4 md:mt-0"
          >
            <span>Read All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* 10b. SOCIAL CONTENT SECTION */}
      <SocialContentSection />

      {/* 11. FINAL CONTACT CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-center text-white space-y-6 border border-gold-500/30 shadow-2xl relative overflow-hidden">
          <div className="relative w-20 h-20 rounded-full overflow-hidden ring-4 ring-gold-500/40 mx-auto shadow-lg shadow-gold-500/20">
            <Image
              src="/logo/bmr-logo.png"
              alt="Blessing Marketing & Real Estate"
              fill
              className="object-cover"
            />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold max-w-2xl mx-auto">
            Ready to Take Your Next Step in Karachi Real Estate?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Reach out directly to CEO Syed M. Hassan Shah or visit our DHA Phase-II Ext and Gulshan-e-Iqbal offices today.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <WhatsAppButton
              label="Chat on WhatsApp Now"
              className="px-8 py-4 text-sm uppercase tracking-wider"
            />
            <Link
              href="/contact"
              className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-8 py-4 rounded-xl border border-slate-700 text-sm uppercase tracking-wider transition-all"
            >
              Get Office Locations & Contacts
            </Link>
          </div>
        </div>
      </section>

      {/* 12. TALK TO EXPERT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TalkToExpert variant="banner" />
      </section>
    </div>
  );
}
