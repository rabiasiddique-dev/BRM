import { PortfolioItem, CaseStudy } from '@/types/portfolio';

export const portfolioItemsData: PortfolioItem[] = [
  {
    id: "portfolio-1",
    slug: "blessing-heights-launch-campaign",
    title: "Blessing Heights Exclusive Launch & Positioning",
    category: "Project Marketing",
    role: "Exclusive Marketing Partner & Sales Representation",
    client: "Blessing Builders & Developers",
    location: "Block 2, Clifton, Karachi",
    year: "2023–2024",
    thumbnail: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    description: "Full brand positioning, digital media campaign, video walk-through production, and international investor outreach for a 22-story seafront luxury tower in Clifton.",
    highlights: [
      "Achieved 70% inventory reservation within 6 months of pre-launch",
      "Produced cinematic aerial video tours reaching 250,000+ views",
      "Secured 35% overseas Pakistani investor participation"
    ]
  },
  {
    id: "portfolio-2",
    slug: "dha-corporate-plaza-leasing",
    title: "DHA Phase-II Ext Commercial Plaza Positioning",
    category: "Corporate Real Estate",
    role: "Commercial Advisory & Leasing Manager",
    client: "Executive Heights Group",
    location: "DHA Phase-II Extension, Karachi",
    year: "2023",
    thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    description: "Strategic commercial positioning and tenant matchmaking for corporate office suites and ground-floor banking branches.",
    highlights: [
      "100% corporate occupancy secured prior to grey structure completion",
      "Structured long-term 5-year corporate leases",
      "Attracted national bank branch anchor tenant"
    ]
  },
  {
    id: "portfolio-3",
    slug: "gulshan-enclave-digital-campaign",
    title: "Gulshan Premium Enclave Omni-Channel Campaign",
    category: "Digital Marketing",
    role: "Digital Real Estate Marketing Lead",
    client: "Gulshan Developers",
    location: "Main University Road, Gulshan-e-Iqbal, Karachi",
    year: "2024",
    thumbnail: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    description: "Omnichannel performance advertising, targeted video reels, and localized social media lead generation for a gated residential community.",
    highlights: [
      "Generated over 1,200 verified buyer inquiries in 90 days",
      "Achieved a 4.2x ROAS on performance digital media spend",
      "Organized highly attended weekend site showcase events"
    ]
  },
  {
    id: "portfolio-4",
    slug: "dha-city-investment-portfolio",
    title: "High-Yield Commercial Land Acquisition",
    category: "Investment",
    role: "Investment Consultancy",
    client: "Private Family Office Investor Group",
    location: "DHA City & Sector 3, Karachi",
    year: "2023",
    thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    description: "Structured high-ROI land portfolio acquisition across DHA City commercial corridors for high-net-worth investors.",
    highlights: [
      "Identified undervalued commercial parcels with 25%+ projected annual capital appreciation",
      "Complete DHA Cantonment transfer & verification oversight",
      "Zero documentation discrepancies across transactions"
    ]
  }
];

export const caseStudiesData: CaseStudy[] = [
  {
    id: "cs-blessing-heights",
    slug: "cs-blessing-heights",
    clientName: "Blessing Builders & Developers",
    projectName: "Blessing Heights & Executive Suites",
    category: "Project Marketing & Sales Representation",
    heroImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    challenge: "Standing out in a competitive Clifton luxury market required differentiating a newly launched 22-story tower from established coastal developments while building immediate developer credibility.",
    strategy: "Blessing Marketing crafted a dual-tier strategy: positioning the property as a sea-facing luxury lifestyle icon for local buyers and an inflation-hedged high-yield asset for overseas Pakistanis through cinematic video media and transparent payment plan representation.",
    execution: "Deployed 4K video walkthroughs, aerial drone footage, targeted Meta & Google video campaigns, direct investor presentations, and hosted an exclusive launch event at the DHA office.",
    results: [
      { metric: "70%", label: "Inventory Reserved in 6 Months" },
      { metric: "35%", label: "Overseas Buyer Share" },
      { metric: "250K+", label: "Digital Video Views" },
      { metric: "100%", label: "Verified Legal Compliance" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "cs-dha-corporate-plaza",
    slug: "cs-dha-corporate-plaza",
    clientName: "Executive Heights Group",
    projectName: "Blessing Corporate Boulevard",
    category: "Commercial Real Estate & Leasing",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    challenge: "Securing prime corporate tenants and buyers for a multi-story commercial plaza in DHA Phase-II Ext prior to building completion.",
    strategy: "Conducted direct corporate outreach to financial institutions, IT companies, and corporate offices, showcasing the location advantage, floor-to-ceiling glass design, and generator backup infrastructure.",
    execution: "Created a dedicated corporate pitch deck, conducted 3D spatial walkthroughs, and negotiated multi-year lease structures with institutional safeguards.",
    results: [
      { metric: "100%", label: "Pre-Completion Occupancy" },
      { metric: "5-Year", label: "Corporate Leases Secured" },
      { metric: "12%", label: "Projected Annual Rental Yield" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
    ]
  }
];
