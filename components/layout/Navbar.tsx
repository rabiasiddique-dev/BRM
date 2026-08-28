"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  ChevronDown,
  Home,
  Building2,
  Key,
  MapPin,
  TrendingUp,
  Briefcase,
  BookOpen,
  Play,
  Share2,
  Newspaper,
  HelpCircle,
  Users,
  Award,
  Contact,
  Landmark,
  Building,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { companyData } from '@/data/company';
import { createWhatsAppLink } from '@/lib/utils';

interface NavDropdownGroup {
  title: string;
  key: string;
  widthClass?: string;
  items: {
    name: string;
    href: string;
    description?: string;
    icon?: React.ElementType;
    badge?: string;
  }[];
  featuredProjects?: {
    name: string;
    href: string;
    tagline: string;
    badge?: string;
  }[];
  subGroups?: {
    heading: string;
    items: { name: string; href: string }[];
  }[];
}

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedGroup, setMobileExpandedGroup] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Click outside listener to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = (key: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const toggleDropdown = (key: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(prev => (prev === key ? null : key));
  };

  const dropdowns: NavDropdownGroup[] = [
    {
      title: 'Properties & Projects',
      key: 'properties',
      widthClass: 'w-[520px]',
      items: [
        { name: 'Browse All Properties', href: '/properties', description: 'Explore houses, plots, apartments & shops', icon: Home, badge: 'All Listings' },
        { name: 'Featured Projects', href: '/projects', description: 'Off-plan developments with flexible plans', icon: Building2, badge: 'New Launch' },
        { name: 'Sell Your Property', href: '/sell-your-property', description: 'List property with BMR market experts', icon: TrendingUp },
        { name: 'Rent Your Property', href: '/rent-your-property', description: 'Find verified corporate & residential tenants', icon: Key },
        { name: 'Areas We Serve', href: '/areas', description: 'Comprehensive Karachi locality guides', icon: MapPin },
      ],
      featuredProjects: [
        { name: 'Blessing Heights Clifton', href: '/projects/blessing-heights-clifton', tagline: '22-Story Coastal Luxury Tower', badge: 'Clifton' },
        { name: 'Blessing Corporate Plaza', href: '/projects/dha-city-commercial-plaza', tagline: 'Prime Commercial Headquarters', badge: 'DHA City' },
        { name: 'Gulshan Enclave', href: '/projects/gulshan-avenue-residences', tagline: 'Main University Road Residences', badge: 'Gulshan' },
      ],
      subGroups: [
        {
          heading: 'Popular Karachi Locations',
          items: [
            { name: 'DHA Karachi', href: '/properties/dha-karachi' },
            { name: 'Gulshan-e-Iqbal', href: '/properties/gulshan-karachi' },
            { name: 'Clifton', href: '/properties/clifton-karachi' },
            { name: 'Bahria Town', href: '/properties/bahria-town-karachi' },
            { name: 'Taiser Town', href: '/properties/taiser-town' },
          ],
        },
      ],
    },
    {
      title: 'Services & Investment',
      key: 'services',
      widthClass: 'w-[420px]',
      items: [
        { name: 'Our Advisory Services', href: '/services', description: 'Full marketing, sales & consultancy', icon: Briefcase },
        { name: 'Investment Advisory', href: '/investment', description: 'High ROI & rental yield portfolios', icon: TrendingUp, badge: 'High ROI' },
        { name: 'Property Knowledge Guides', href: '/guides', description: 'Complete buying, selling & legal guides', icon: BookOpen },
        { name: '5-Step Buying Guide', href: '/guides/buying', description: 'Step-by-step verified property acquisition', icon: Sparkles },
        { name: 'Investment Strategy Guide', href: '/guides/investment', description: 'Maximizing ROI in Karachi real estate', icon: Landmark },
      ],
    },
    {
      title: 'Media & Hub',
      key: 'media',
      widthClass: 'w-[380px]',
      items: [
        { name: 'Video Tours & Reels', href: '/videos', description: 'HD property walkthroughs & site reviews', icon: Play, badge: 'Watch HD' },
        { name: 'Social Media Hub', href: '/social', description: 'YouTube, Instagram & Facebook feeds', icon: Share2 },
        { name: 'Market Insights & News', href: '/blog', description: 'Karachi real estate trends & market updates', icon: Newspaper },
        { name: 'Frequently Asked Questions', href: '/faq', description: 'Instant answers to buying & transfer queries', icon: HelpCircle },
      ],
    },
    {
      title: 'About Us',
      key: 'about',
      widthClass: 'w-[380px]',
      items: [
        { name: 'About Blessing Marketing', href: '/about', description: 'Leadership by Syed M. Hassan Shah', icon: Users },
        { name: 'Our Proven Portfolio', href: '/portfolio', description: 'Decades of successful property deals', icon: Award },
        { name: 'Our Branch Offices', href: '/offices', description: 'Visit DHA Phase 5 & Gulshan offices', icon: MapPin },
        { name: 'Contact Our Experts', href: '/contact', description: 'Direct hotline & office consultation', icon: Contact },
      ],
    },
  ];

  const primaryWhatsAppUrl = createWhatsAppLink(
    companyData.primaryWhatsApp,
    "Hello Blessing Marketing, I am browsing your website and would like to inquire about properties & investment opportunities in Karachi."
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/95 backdrop-blur-md py-3 shadow-2xl border-b border-gold-500/25'
          : 'bg-gradient-to-b from-slate-950/95 via-slate-950/80 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="group flex items-center gap-2.5 shrink-0">
            <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-gold-500/40 group-hover:ring-gold-400/80 transition-all duration-300 shadow-lg shadow-gold-500/10 shrink-0">
              <Image
                src="/logo/bmr-logo.png"
                alt="Blessing Marketing & Real Estate (Pvt. Ltd)"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <div>
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white block leading-none">
                BLESSING
              </span>
              <span className="text-[8px] sm:text-[9px] tracking-widest text-gold-400 font-medium uppercase block mt-0.5">
                Marketing & Real Estate
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav ref={navRef} className="hidden lg:flex items-center space-x-1 font-sans">
            <Link
              href="/"
              className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                pathname === '/'
                  ? 'text-gold-400 bg-gold-500/15 border border-gold-500/30'
                  : 'text-slate-200 hover:text-gold-300 hover:bg-slate-900/80'
              }`}
            >
              Home
            </Link>

            {dropdowns.map((group) => {
              const isOpen = activeDropdown === group.key;
              const isChildActive = group.items.some(i => pathname === i.href) ||
                (group.subGroups && group.subGroups.some(sg => sg.items.some(si => pathname === si.href)));

              return (
                <div
                  key={group.key}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(group.key)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={() => toggleDropdown(group.key)}
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                      isOpen || isChildActive
                        ? 'text-gold-400 bg-gold-500/15 border border-gold-500/30'
                        : 'text-slate-200 hover:text-gold-300 hover:bg-slate-900/80'
                    }`}
                  >
                    <span>{group.title}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180 text-gold-400' : 'text-slate-400'}`} />
                  </button>

                  {/* Dropdown Container with hover bridge */}
                  {isOpen && (
                    <div className={`absolute top-full left-0 pt-2 ${group.widthClass || 'w-96'} z-50 animate-in fade-in slide-in-from-top-1 duration-150`}>
                      <div className="bg-slate-950 border border-gold-500/40 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] p-4 text-white">
                        <div className="grid grid-cols-1 gap-1">
                          {group.items.map((item) => {
                            const Icon = item.icon || Home;
                            const isActive = pathname === item.href;
                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setActiveDropdown(null)}
                                className={`flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                                  isActive
                                    ? 'bg-gold-500/20 border border-gold-500/40 text-gold-300'
                                    : 'hover:bg-slate-900 text-slate-200 hover:text-white border border-transparent hover:border-slate-800'
                                }`}
                              >
                                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-gold-500/20 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                                  <Icon className="w-4 h-4 text-gold-400" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2">
                                    <span className="font-semibold text-xs text-white group-hover:text-gold-300">{item.name}</span>
                                    {item.badge && (
                                      <span className="bg-gradient-to-r from-gold-500 to-amber-600 text-slate-950 text-[9px] font-extrabold uppercase tracking-wider px-1.5 py-0.5 rounded shadow-sm">
                                        {item.badge}
                                      </span>
                                    )}
                                  </div>
                                  {item.description && (
                                    <p className="text-[11px] text-slate-400 mt-0.5 truncate">{item.description}</p>
                                  )}
                                </div>
                              </Link>
                            );
                          })}
                        </div>

                        {/* Featured Off-Plan Projects Section if present */}
                        {group.featuredProjects && (
                          <div className="pt-3 border-t border-slate-800/90 mt-2">
                            <div className="flex items-center justify-between px-1 mb-2">
                              <span className="text-[10px] font-extrabold uppercase tracking-widest text-gold-400 flex items-center gap-1">
                                <Sparkles className="w-3 h-3 text-gold-400" />
                                Featured Off-Plan Developments
                              </span>
                              <Link
                                href="/projects"
                                onClick={() => setActiveDropdown(null)}
                                className="text-[10px] text-slate-400 hover:text-gold-300 flex items-center gap-0.5 font-semibold"
                              >
                                View All <ArrowRight className="w-3 h-3" />
                              </Link>
                            </div>
                            <div className="grid grid-cols-3 gap-1.5">
                              {group.featuredProjects.map(proj => (
                                <Link
                                  key={proj.href}
                                  href={proj.href}
                                  onClick={() => setActiveDropdown(null)}
                                  className="bg-slate-900/90 hover:bg-gold-500/20 text-slate-200 hover:text-gold-300 border border-slate-800 hover:border-gold-500/40 rounded-xl p-2 transition-all block text-left"
                                >
                                  <div className="text-[11px] font-bold text-white truncate">{proj.name}</div>
                                  <div className="text-[9px] text-slate-400 truncate mt-0.5">{proj.tagline}</div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Sub-groups (e.g. Popular Areas) */}
                        {group.subGroups && group.subGroups.map((sg, idx) => (
                          <div key={idx} className="pt-3 border-t border-slate-800/90 mt-2">
                            <div className="text-[10px] font-extrabold uppercase tracking-widest text-gold-400 mb-2 px-1 flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-gold-400" />
                              {sg.heading}
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {sg.items.map(subItem => (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  onClick={() => setActiveDropdown(null)}
                                  className="bg-slate-900 hover:bg-gold-500/20 text-slate-300 hover:text-gold-300 border border-slate-800 hover:border-gold-500/40 rounded-lg px-2.5 py-1 text-[11px] font-medium transition-colors"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right CTAs */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${companyData.phoneNumbers[0].replace(/[^0-9]/g, '')}`}
              className="text-slate-300 hover:text-white px-3.5 py-2 rounded-xl hover:bg-slate-900/80 transition-colors flex items-center gap-2 text-xs font-semibold border border-transparent hover:border-slate-800"
              title="Call Sales Representative"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>{companyData.phoneNumbers[0]}</span>
            </a>

            <a
              href={primaryWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl shadow-lg transition-all hover:shadow-emerald-600/30"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-200 hover:text-white hover:bg-slate-800/60 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-gold-400" /> : <Menu className="w-6 h-6 text-slate-100" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-slate-950 border-b border-gold-500/30 shadow-2xl p-5 transition-all max-h-[85vh] overflow-y-auto z-50">
          <div className="space-y-2 mb-6">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider ${
                pathname === '/' ? 'text-gold-400 bg-gold-500/15 border-l-4 border-gold-500' : 'text-slate-200'
              }`}
            >
              Home
            </Link>

            {dropdowns.map((group) => {
              const isExpanded = mobileExpandedGroup === group.key;

              return (
                <div key={group.key} className="border-b border-slate-800/80 pb-2">
                  <button
                    onClick={() => setMobileExpandedGroup(isExpanded ? null : group.key)}
                    className="w-full flex items-center justify-between px-4 py-3 text-slate-200 text-sm font-bold uppercase tracking-wider"
                  >
                    <span>{group.title}</span>
                    <ChevronDown className={`w-4 h-4 text-gold-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>

                  {isExpanded && (
                    <div className="pl-4 pr-2 space-y-1.5 pt-1 pb-3">
                      {group.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between p-2.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-900"
                        >
                          <span>{item.name}</span>
                          {item.badge && (
                            <span className="bg-gradient-to-r from-gold-500 to-amber-600 text-slate-950 text-[9px] font-bold px-1.5 py-0.5 rounded">
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      ))}

                      {group.featuredProjects && (
                        <div className="pt-2">
                          <div className="text-[10px] font-bold uppercase text-gold-400 px-2.5 mb-1">Featured Projects</div>
                          {group.featuredProjects.map(proj => (
                            <Link
                              key={proj.href}
                              href={proj.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block p-2 rounded-lg text-xs text-slate-300 hover:text-gold-300"
                            >
                              {proj.name}
                            </Link>
                          ))}
                        </div>
                      )}

                      {group.subGroups && group.subGroups.map((sg, idx) => (
                        <div key={idx} className="pt-2">
                          <div className="text-[10px] font-bold uppercase text-gold-400 px-2.5 mb-1">{sg.heading}</div>
                          {sg.items.map(subItem => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block p-2 rounded-lg text-xs text-slate-400 hover:text-gold-300"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="border-t border-slate-800 pt-4 space-y-2">
            <a
              href={`tel:${companyData.phoneNumbers[0].replace(/[^0-9]/g, '')}`}
              className="flex items-center gap-3 bg-slate-900 border border-slate-800 p-3 rounded-xl text-slate-200"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <div className="text-xs font-semibold">{companyData.phoneNumbers[0]}</div>
            </a>
            <a
              href={primaryWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold p-3 rounded-xl text-xs uppercase tracking-wider shadow-lg w-full"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
