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
  ChevronRight,
  Building2,
  Users,
  Briefcase,
  Play,
  Newspaper,
  Sparkles,
  ArrowRight,
  LayoutGrid,
  Compass,
  TrendingUp,
  FolderKanban,
  Layers,
  LucideIcon
} from 'lucide-react';
import { companyData } from '@/data/company';
import { createWhatsAppLink } from '@/lib/utils';

interface SubNavItem {
  name: string;
  href: string;
  description: string;
  icon: LucideIcon;
}

interface NavItem {
  name: string;
  href?: string;
  children?: SubNavItem[];
}

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer & dropdowns on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  }, [pathname]);

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = (name: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileAccordion = (name: string) => {
    setMobileExpanded(mobileExpanded === name ? null : name);
  };

  const navItems: NavItem[] = [
    { name: 'Home', href: '/' },
    {
      name: 'Company',
      children: [
        {
          name: 'About Us',
          href: '/about',
          description: 'Our legacy, vision & core corporate values',
          icon: Building2
        },
        {
          name: 'Executive Team',
          href: '/team',
          description: 'Meet our leadership & senior real estate consultants',
          icon: Users
        }
      ]
    },
    {
      name: 'Services',
      children: [
        {
          name: 'All Services',
          href: '/services',
          description: 'Full suite of real estate & marketing solutions',
          icon: LayoutGrid
        },
        {
          name: 'Project Marketing',
          href: '/services/project-marketing',
          description: 'Developer representation & sales marketing campaigns',
          icon: Briefcase
        },
        {
          name: 'Real Estate Consultancy',
          href: '/services/real-estate-consultancy',
          description: 'Strategic property advisory & market analysis',
          icon: Compass
        },
        {
          name: 'Investment Advisory',
          href: '/services/investment-consultancy',
          description: 'High-yield real estate investment guidance',
          icon: TrendingUp
        },
        {
          name: 'Commercial Real Estate',
          href: '/services/commercial-real-estate-advisory',
          description: 'Corporate office spaces & commercial retail hubs',
          icon: Building2
        }
      ]
    },
    {
      name: 'Projects & Work',
      children: [
        {
          name: 'Featured Projects',
          href: '/projects',
          description: 'Current exclusive residential & commercial developments',
          icon: FolderKanban
        },
        {
          name: 'Delivered Portfolio',
          href: '/portfolio',
          description: 'Proven track record & delivered project campaigns',
          icon: Layers
        }
      ]
    },
    {
      name: 'Media & Insights',
      children: [
        {
          name: 'Media Coverage',
          href: '/media',
          description: 'Press releases, TV coverage & corporate news',
          icon: Newspaper
        },
        {
          name: 'Market Insights',
          href: '/insights',
          description: 'Market trends, expert reports & real estate blogs',
          icon: Sparkles
        },
        {
          name: 'Video Showcase',
          href: '/videos',
          description: 'Project walkthroughs & property video tours',
          icon: Play
        }
      ]
    },
    { name: 'Contact', href: '/contact' }
  ];

  const primaryWhatsAppUrl = createWhatsAppLink(
    companyData.primaryWhatsApp,
    "Hello Blessing Marketing & Real Estate, I am interested in consulting regarding real estate project marketing and services."
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
          {/* Corporate Brand Logo */}
          <Link href="/" className="group flex items-center gap-3 shrink-0">
            <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-gold-500/40 group-hover:ring-gold-400/80 transition-all duration-300 shadow-lg shadow-gold-500/10 shrink-0">
              <Image
                src="/logo/bmr-logo.png"
                alt="Blessing Marketing & Real Estate (Pvt. Ltd)"
                fill
                sizes="44px"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <div>
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white block leading-none">
                BLESSING
              </span>
              <span className="text-[8px] sm:text-[9px] tracking-widest text-gold-400 font-semibold uppercase block mt-0.5">
                Marketing & Real Estate
              </span>
            </div>
          </Link>

          {/* Desktop Corporate Navigation */}
          <nav ref={navRef} className="hidden lg:flex items-center space-x-1 font-sans">
            {navItems.map((item) => {
              const hasChildren = item.children && item.children.length > 0;

              // Check if parent or any child is active
              const isChildActive = hasChildren && item.children?.some(
                (child) => pathname === child.href || (child.href !== '/' && pathname.startsWith(child.href))
              );
              const isDirectActive = item.href && (pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href)));
              const isActive = isDirectActive || isChildActive;
              const isOpen = activeDropdown === item.name;

              if (hasChildren) {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      onClick={() => setActiveDropdown(isOpen ? null : item.name)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                        isActive || isOpen
                          ? 'text-gold-400 bg-gold-500/15 border border-gold-500/30'
                          : 'text-slate-200 hover:text-gold-300 hover:bg-slate-900/80'
                      }`}
                      aria-expanded={isOpen}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-gold-400' : 'text-slate-400'
                        }`}
                      />
                    </button>

                    {/* Dropdown Panel */}
                    {isOpen && (
                      <div className="absolute top-full left-0 pt-2 w-80 sm:w-96 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="bg-slate-950/95 backdrop-blur-2xl border border-gold-500/30 rounded-2xl p-2.5 shadow-2xl shadow-black/90 ring-1 ring-white/10 space-y-1">
                          {item.children?.map((child) => {
                            const Icon = child.icon;
                            const isChildSelected = pathname === child.href || (child.href !== '/' && pathname.startsWith(child.href));

                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setActiveDropdown(null)}
                                className={`group flex items-start gap-3 p-3 rounded-xl transition-all duration-200 border ${
                                  isChildSelected
                                    ? 'bg-gold-500/15 border-gold-500/40 text-gold-300'
                                    : 'border-transparent hover:bg-slate-900/90 hover:border-gold-500/25'
                                }`}
                              >
                                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 ${
                                  isChildSelected
                                    ? 'bg-gold-500 text-slate-950 font-bold'
                                    : 'bg-gold-500/10 text-gold-400 border border-gold-500/20 group-hover:bg-gold-500 group-hover:text-slate-950'
                                }`}>
                                  <Icon className="w-4.5 h-4.5" />
                                </div>
                                <div className="space-y-0.5">
                                  <div className="text-xs font-bold text-slate-100 group-hover:text-gold-300 transition-colors flex items-center gap-1">
                                    <span>{child.name}</span>
                                    <ChevronRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-gold-400" />
                                  </div>
                                  <p className="text-[11px] text-slate-400 font-normal leading-snug group-hover:text-slate-300">
                                    {child.description}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href!}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'text-gold-400 bg-gold-500/15 border border-gold-500/30'
                      : 'text-slate-200 hover:text-gold-300 hover:bg-slate-900/80'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={primaryWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider px-3.5 py-2.5 rounded-xl shadow-lg transition-all hover:shadow-emerald-600/30"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold-gradient hover:opacity-95 text-slate-950 font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl shadow-xl transition-all transform hover:scale-105"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Navigation Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={primaryWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-500"
              title="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900 text-slate-200 hover:text-white border border-slate-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-gold-400" /> : <Menu className="w-6 h-6 text-slate-100" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[68px] bg-slate-950 border-b border-gold-500/30 shadow-2xl p-5 transition-all max-h-[85vh] overflow-y-auto z-50">
          <div className="space-y-2 mb-6">
            {navItems.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isExpanded = mobileExpanded === item.name;
              const isChildActive = hasChildren && item.children?.some(
                (child) => pathname === child.href || (child.href !== '/' && pathname.startsWith(child.href))
              );
              const isDirectActive = item.href && (pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href)));
              const isActive = isDirectActive || isChildActive;

              if (hasChildren) {
                return (
                  <div key={item.name} className="rounded-xl overflow-hidden border border-slate-900">
                    <button
                      onClick={() => toggleMobileAccordion(item.name)}
                      className={`w-full flex items-center justify-between px-4 py-3 text-xs font-bold uppercase tracking-wider transition-colors ${
                        isActive
                          ? 'text-gold-400 bg-gold-500/10'
                          : 'text-slate-200 hover:bg-slate-900'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-gold-400 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="bg-slate-900/60 p-2 space-y-1 border-t border-slate-800">
                        {item.children?.map((child) => {
                          const Icon = child.icon;
                          const isSubActive = pathname === child.href || (child.href !== '/' && pathname.startsWith(child.href));

                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-semibold ${
                                isSubActive
                                  ? 'text-gold-400 bg-gold-500/15 border-l-2 border-gold-400'
                                  : 'text-slate-300 hover:bg-slate-800'
                              }`}
                            >
                              <Icon className="w-4 h-4 text-gold-400 shrink-0" />
                              <div className="flex-1">
                                <div className="text-slate-100 font-bold">{child.name}</div>
                                <div className="text-[10px] text-slate-400 font-normal">{child.description}</div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href!}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider ${
                    isActive
                      ? 'text-gold-400 bg-gold-500/15 border-l-4 border-gold-500'
                      : 'text-slate-200 hover:bg-slate-900'
                  }`}
                >
                  <span>{item.name}</span>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </Link>
              );
            })}
          </div>

          <div className="border-t border-slate-800 pt-4 space-y-2.5">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-gold-gradient text-slate-950 font-bold p-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg w-full"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`tel:${companyData.phoneNumbers[0].replace(/[^0-9]/g, '')}`}
              className="flex items-center justify-center gap-3 bg-slate-900 border border-slate-800 p-3 rounded-xl text-slate-200 text-xs font-semibold"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span>Call Us: {companyData.phoneNumbers[0]}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

