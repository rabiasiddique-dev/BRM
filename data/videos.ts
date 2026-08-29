export interface VideoItem {
  id: string;
  title: string;
  description?: string;
  thumbnail: string;
  youtubeId?: string;
  category: 'Company Video' | 'Project Tour' | 'Market Insight' | 'Reel' | 'Event';
  projectSlug?: string;
  duration?: string;
  dateAdded: string;
  views?: string;
}

export const videosData: VideoItem[] = [
  {
    id: "vid-1",
    title: "The Blessing Story — Building Trust, Shaping Real Estate",
    description: "An inside look into Blessing Marketing & Real Estate — our corporate vision, team, and commitment to project excellence in Karachi.",
    thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    youtubeId: "dQw4w9WgXcQ",
    category: "Company Video",
    duration: "3:45",
    dateAdded: "2026-08-01",
    views: "45K"
  },
  {
    id: "vid-2",
    title: "Blessing Heights Clifton — Official Cinematic Video Tour",
    description: "Full architectural walkthrough of Blessing Heights 22-story luxury coastal tower in Block 2, Clifton.",
    thumbnail: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    youtubeId: "dQw4w9WgXcQ",
    category: "Project Tour",
    projectSlug: "blessing-heights-clifton",
    duration: "4:20",
    dateAdded: "2026-08-15",
    views: "68K"
  },
  {
    id: "vid-3",
    title: "DHA Karachi Commercial Real Estate Outlook 2026",
    description: "CEO Syed M. Hassan Shah analyzes commercial property trends, rental yields, and high-growth sectors in DHA Phase 2 Ext & Phase 8.",
    thumbnail: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    youtubeId: "dQw4w9WgXcQ",
    category: "Market Insight",
    duration: "8:15",
    dateAdded: "2026-08-10",
    views: "32K"
  },
  {
    id: "vid-4",
    title: "Blessing Corporate Boulevard — Construction & Site Progress",
    description: "Site updates and structural highlights of our commercial office plaza project in DHA Phase-II Ext.",
    thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    youtubeId: "dQw4w9WgXcQ",
    category: "Project Tour",
    projectSlug: "blessing-corporate-boulevard",
    duration: "2:50",
    dateAdded: "2026-07-25",
    views: "21K"
  },
  {
    id: "vid-5",
    title: "Reels Showcase: Gulshan Premium Enclave Masterplan Launch",
    description: "Short cinematic reel introducing Gulshan Premium Enclave master-planned residential community.",
    thumbnail: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    youtubeId: "dQw4w9WgXcQ",
    category: "Reel",
    projectSlug: "gulshan-premium-enclave",
    duration: "0:58",
    dateAdded: "2026-08-18",
    views: "115K"
  }
];
