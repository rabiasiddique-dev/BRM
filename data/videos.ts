export interface VideoItem {
  id: string;
  title: string;
  description?: string;
  thumbnail: string;
  youtubeId?: string;
  facebookUrl?: string;
  instagramUrl?: string;
  category: 'property-tour' | 'project' | 'company' | 'reel' | 'market-update' | 'investment';
  propertySlug?: string;
  projectSlug?: string;
  duration?: string;
  dateAdded: string;
}

export const videosData: VideoItem[] = [
  {
    id: "vid-1",
    title: "Modern Villa Tour — DHA Phase 5 Karachi",
    description: "Step inside this stunning 5-Marla architectural villa in DHA Phase 5. Full property walkthrough with CEO Syed M. Hassan Shah.",
    thumbnail: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    youtubeId: "", // TODO: Add actual YouTube video ID
    category: "property-tour",
    propertySlug: "modern-5-marla-luxury-house-dha-phase-5-karachi",
    duration: "4:32",
    dateAdded: "2026-08-15",
  },
  {
    id: "vid-2",
    title: "Sea View Apartment Walkthrough — Clifton Block 4",
    description: "Panoramic sea views and premium finishes. Tour this executive 3-bedroom apartment in Clifton, Karachi.",
    thumbnail: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    youtubeId: "", // TODO: Add actual YouTube video ID
    category: "property-tour",
    propertySlug: "executive-3-bed-sea-view-apartment-clifton-karachi",
    duration: "3:45",
    dateAdded: "2026-08-10",
  },
  {
    id: "vid-3",
    title: "Blessing Marketing — Company Introduction",
    description: "Learn about Blessing Marketing & Real Estate — our team, our offices, and our commitment to your property journey.",
    thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    youtubeId: "", // TODO: Add actual YouTube video ID
    category: "company",
    duration: "2:15",
    dateAdded: "2026-07-01",
  },
  {
    id: "vid-4",
    title: "DHA Karachi Investment Guide 2026",
    description: "Expert analysis of DHA property investment opportunities — best phases, price trends, and ROI forecast for 2026.",
    thumbnail: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    youtubeId: "", // TODO: Add actual YouTube video ID
    category: "investment",
    duration: "8:20",
    dateAdded: "2026-08-01",
  },
  {
    id: "vid-5",
    title: "Bahria Town Karachi — Property Tour",
    description: "Exploring the best residential and commercial opportunities in Bahria Town Karachi Precincts.",
    thumbnail: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    youtubeId: "", // TODO: Add actual YouTube video ID
    category: "project",
    duration: "5:10",
    dateAdded: "2026-07-20",
  },
  {
    id: "vid-6",
    title: "Karachi Real Estate Market Update — August 2026",
    description: "Latest property market insights, price trends, and investment hotspots in Karachi for August 2026.",
    thumbnail: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
    youtubeId: "", // TODO: Add actual YouTube video ID
    category: "market-update",
    duration: "6:05",
    dateAdded: "2026-08-20",
  },
  {
    id: "vid-7",
    title: "Luxury Farmhouse Tour — Malir Expressway",
    description: "Resort-style 4-Kanal farmhouse with private pool, gardens, and guest villa. Full walkthrough reel.",
    thumbnail: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=800&q=80",
    youtubeId: "", // TODO: Add actual YouTube video ID
    category: "reel",
    propertySlug: "luxury-farmhouse-malir-cantt-expressway-karachi",
    duration: "1:30",
    dateAdded: "2026-08-18",
  },
  {
    id: "vid-8",
    title: "How to Buy Property in Karachi — Step by Step",
    description: "Complete guide for first-time buyers — documentation, verification, transfer process, and tips from our CEO.",
    thumbnail: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    youtubeId: "", // TODO: Add actual YouTube video ID
    category: "market-update",
    duration: "10:45",
    dateAdded: "2026-06-15",
  },
];
