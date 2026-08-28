import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MobileStickyCTA } from '@/components/layout/MobileStickyCTA';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';
import { companyData } from '@/data/company';

export const metadata: Metadata = {
  title: {
    default: `${companyData.name} | Premium Real Estate Discovery & Property Showcase Karachi`,
    template: `%s | ${companyData.name}`,
  },
  description: `${companyData.tagline}. Discover luxury houses, apartments, residential plots, and commercial properties in DHA Phase 5, DHA Phase 8, Gulshan-e-Iqbal, Clifton, and Bahria Town Karachi. Led by Syed M. Hassan Shah.`,
  keywords: [
    'Blessing Marketing',
    'Real Estate Karachi',
    'DHA Karachi house for sale',
    'Plots in DHA Karachi',
    'Gulshan-e-Iqbal property',
    'Clifton apartments Karachi',
    'Syed M. Hassan Shah',
    'Real Estate Agent Karachi',
    'Pakistan real estate investment',
  ],
  authors: [{ name: companyData.representative.name }],
  openGraph: {
    title: `${companyData.name} - Luxury Real Estate Discovery & Investments`,
    description: companyData.tagline,
    type: 'website',
    locale: 'en_PK',
    siteName: companyData.name,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#F8F7F4] text-slate-900 min-h-screen flex flex-col selection:bg-gold-500 selection:text-slate-950">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton variant="floating" />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
