export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  introduction: string;
  whatWeDo: string[];
  ourProcess: { step: string; title: string; description: string }[];
  benefits: string[];
  ourApproach: string;
  faqs: { question: string; answer: string }[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "project-marketing",
    slug: "project-marketing",
    title: "Project Marketing",
    shortDescription: "Strategic branding, market positioning, and sales execution for residential and commercial real estate developments.",
    icon: "Building2",
    introduction: "Blessing Marketing provides end-to-end project representation for real estate builders and developers. We craft high-impact launch campaigns, establish premium brand identity, and drive high-converting sales pipelines for off-plan and ongoing developments.",
    whatWeDo: [
      "Project Brand Positioning & Narrative Development",
      "Omnichannel Digital & Performance Marketing Campaigns",
      "High-Definition Video Tours, 3D Renderings & Aerial Showcases",
      "On-Site Sales Center Setup & Representation",
      "Investor Network Presentations & Launch Events",
      "Lead Management & Conversion Analytics"
    ],
    ourProcess: [
      { step: "01", title: "Project Audit & Market Analysis", description: "Evaluating market positioning, competitor benchmark pricing, and target demographic." },
      { step: "02", title: "Brand & Campaign Architecture", description: "Designing visual identity, promotional collateral, masterplan presentations, and media launch plans." },
      { step: "03", title: "Multi-Channel Media Execution", description: "Deploying targeted digital ads, video walk-throughs, print coverage, and investor outreach." },
      { step: "04", title: "Sales Force Alignment & Conversion", description: "Managing customer inquiries, conducting site visits, and securing buyer commitments." }
    ],
    benefits: [
      "Accelerated sales velocity and faster inventory absorption",
      "Higher brand equity and premium market perception for developers",
      "Transparent lead tracking and campaign ROI reporting",
      "Complete coverage across local and overseas Pakistani buyer networks"
    ],
    ourApproach: "We combine data-driven digital media with direct institutional and retail buyer networks to position your development as a premier real estate destination.",
    faqs: [
      { question: "Do you partner with developers for exclusive project marketing?", answer: "Yes. We act as exclusive or preferred marketing partners for developers across Karachi, handling branding, media, and sales representation." },
      { question: "How do you market projects to overseas investors?", answer: "We leverage targeted digital video campaigns, virtual tours, and overseas Pakistan investor networks to secure international interest." }
    ]
  },
  {
    id: "real-estate-consultancy",
    slug: "real-estate-consultancy",
    title: "Real Estate Consultancy",
    shortDescription: "Comprehensive advisory on property acquisitions, legal verification, market valuation, and transaction structure.",
    icon: "Briefcase",
    introduction: "Our advisory team provides unbiased, expert guidance to individuals, corporations, and family offices looking to buy, sell, or structure real estate assets in Karachi.",
    whatWeDo: [
      "Title Deed & Legal Ownership Verification",
      "Cantonment (DHA) Transfer Guidance & Legal Documentation",
      "Property Valuation & Market Price Comparison",
      "Acquisition Strategy & Price Negotiation Support",
      "Portfolio Diversification Consultation"
    ],
    ourProcess: [
      { step: "01", title: "Needs Assessment", description: "Understanding budget, timeline, location preference, and risk tolerance." },
      { step: "02", title: "Market & Legal Due Diligence", description: "Verifying document authenticity, layout approvals, and title history." },
      { step: "03", title: "Transaction Structuring", description: "Negotiating terms and overseeing secure token and transfer protocols." }
    ],
    benefits: [
      "100% legal protection against unverified properties",
      "Objective market valuation preventing overpayment",
      "Seamless transfer support with Cantonment & KDA authorities"
    ],
    ourApproach: "Consultancy built on verified facts, complete legal clarity, and client peace-of-mind.",
    faqs: [
      { question: "What areas do your consultants specialize in?", answer: "We specialize in DHA Karachi (Phases 1-8), Clifton, Gulshan-e-Iqbal, Bahria Town, and major commercial corridors." }
    ]
  },
  {
    id: "property-marketing",
    slug: "property-marketing",
    title: "Property Marketing",
    shortDescription: "Tailored corporate marketing packages for commercial properties, luxury residences, and individual landlord portfolios.",
    icon: "TrendingUp",
    introduction: "Whether representing a commercial plaza owner or a luxury homeowner, our property marketing services maximize visibility to high-intent buyers and corporate tenants.",
    whatWeDo: [
      "Professional Property Photography & Video Showcases",
      "Social Media Spotlight Campaigns (Facebook, YouTube, Reels)",
      "Targeted Direct Buyer & Corporate Tenant Outreach",
      "Custom Digital Brochure Creation"
    ],
    ourProcess: [
      { step: "01", title: "Media Capture", description: "Capturing high-resolution visuals and highlight reels of the asset." },
      { step: "02", title: "Targeted Syndication", description: "Publishing across official Blessing channels and targeted ad networks." },
      { step: "03", title: "Prospect Vetting", description: "Filtering inquiries to connect owners with genuine, qualified parties." }
    ],
    benefits: [
      "Standout visual presentation",
      "Faster transaction turnaround",
      "Qualified buyer/tenant filtering"
    ],
    ourApproach: "Highlighting unique architectural features and strategic location value through cinematic presentation.",
    faqs: [
      { question: "How quickly do marketing campaigns launch?", answer: "Properties are staged, filmed, and live on digital channels within 48 to 72 hours." }
    ]
  },
  {
    id: "sales-business-development",
    slug: "sales-business-development",
    title: "Sales & Business Development",
    shortDescription: "Dedicated sales force execution and corporate channel partnerships for real estate developments.",
    icon: "Users",
    introduction: "Blessing Marketing acts as your external sales engine, organizing dedicated consultant teams to represent real estate projects and drive B2B partnerships.",
    whatWeDo: [
      "Dedicated On-Site Sales Representation",
      "B2B Corporate Channel Partnerships",
      "Investor Roadshows & Direct Presentations",
      "Customer Relationship Management & Deal Closures"
    ],
    ourProcess: [
      { step: "01", title: "Sales Strategy Formulation", description: "Setting targets, pricing structures, and sales incentive frameworks." },
      { step: "02", title: "Active Pipeline Management", description: "Engaging warm prospects, scheduling site visits, and closing sales." }
    ],
    benefits: [
      "Professional corporate sales team without overhead costs",
      "Access to established buyer database and institutional relationships"
    ],
    ourApproach: "High-touch, persistent, and professional negotiation focused on mutual value creation.",
    faqs: [
      { question: "Can Blessing manage sales for off-plan commercial developments?", answer: "Yes, commercial project sales representation is one of our core specialties." }
    ]
  },
  {
    id: "investment-consultancy",
    slug: "investment-consultancy",
    title: "Investment Consultancy",
    shortDescription: "Strategic portfolio management focused on high rental yield and high capital appreciation real estate assets.",
    icon: "Landmark",
    introduction: "We guide investors, overseas Pakistanis, and family offices toward high-performing real estate opportunities with strong rental returns and long-term capital appreciation.",
    whatWeDo: [
      "High-ROI Commercial & Residential Asset Selection",
      "Rental Yield Calculations & Financial Projections",
      "Roshan Digital Account (RDA) Investment Facilitation",
      "Market Cycle & Exit Strategy Consultation"
    ],
    ourProcess: [
      { step: "01", title: "Portfolio Evaluation", description: "Identifying client risk profile, ROI expectations, and holding periods." },
      { step: "02", title: "Asset Selection", description: "Curating high-performing off-plan projects and commercial assets." },
      { step: "03", title: "Execution & Monitoring", description: "Managing acquisition, documentation, and long-term asset performance." }
    ],
    benefits: [
      "Data-backed yield forecasts",
      "Access to pre-launch developer rates",
      "Overseas transaction support"
    ],
    ourApproach: "Disciplined financial analysis ensuring real estate decisions deliver tangible returns.",
    faqs: [
      { question: "Do you assist overseas Pakistanis with property investment?", answer: "Yes, we provide end-to-end assistance including RDA transfers, power of attorney guidance, and remote site video updates." }
    ]
  },
  {
    id: "commercial-real-estate-advisory",
    slug: "commercial-real-estate-advisory",
    title: "Commercial Real Estate Advisory",
    shortDescription: "Expert representation for corporate offices, retail spaces, commercial plazas, and mixed-use towers.",
    icon: "Building",
    introduction: "Our commercial division assists businesses, retailers, and developers in acquiring, leasing, and marketing prime commercial space in Karachi's top business districts.",
    whatWeDo: [
      "Commercial Plaza & Office Tower Marketing",
      "Corporate Tenant Placement & Lease Agreements",
      "Retail Location Strategy & Footfall Evaluation",
      "High-Yield Commercial Plot Acquisition"
    ],
    ourProcess: [
      { step: "01", title: "Commercial Site Analysis", description: "Evaluating zoning, access roads, parking, and surrounding commercial density." },
      { step: "02", title: "Tenant/Buyer Matchmaking", description: "Connecting space with banks, corporate headquarters, and retail brands." }
    ],
    benefits: [
      "Maximizing rental income from commercial assets",
      "Securing long-term corporate leases"
    ],
    ourApproach: "Connecting prime commercial space with reputable corporate occupiers.",
    faqs: [
      { question: "Do you represent commercial developments in DHA and Clifton?", answer: "Yes, we actively represent commercial office towers and retail avenues in DHA Phases 2 Ext, 5, 8, and Clifton." }
    ]
  },
  {
    id: "corporate-real-estate",
    slug: "corporate-real-estate",
    title: "Corporate Real Estate Services",
    shortDescription: "Tailored real estate solutions for multinational companies, corporate offices, and institutional entities.",
    icon: "ShieldCheck",
    introduction: "Blessing Marketing provides corporate real estate management, site selection, and lease negotiation services for corporate entities expanding operations in Karachi.",
    whatWeDo: [
      "Corporate Headquarter Site Selection",
      "Lease Renewal & Rent Negotiation",
      "Corporate Space Rationalization & Advisory",
      "Complete Compliance & Legal Documentation"
    ],
    ourProcess: [
      { step: "01", title: "Corporate Briefing", description: "Understanding space requirements, headcount projections, and operational specs." },
      { step: "02", title: "Shortlisting & Negotiation", description: "Presenting verified corporate spaces and negotiating favorable lease terms." }
    ],
    benefits: [
      "Streamlined corporate acquisition process",
      "Institutional-grade documentation and legal compliance"
    ],
    ourApproach: "Professional corporate representation aligned with your company's operational standards.",
    faqs: [
      { question: "Can you assist with long-term commercial lease agreements?", answer: "Yes, we structure multi-year corporate leases with complete legal safeguards." }
    ]
  },
  {
    id: "rental-asset-management",
    slug: "rental-asset-management",
    title: "Rental & Asset Management",
    shortDescription: "End-to-end property supervision, tenant screening, rent collection, and maintenance support.",
    icon: "Key",
    introduction: "For property owners and overseas landlords, our asset management service ensures your investments generate steady rental income while remaining impeccably maintained.",
    whatWeDo: [
      "Verified Tenant Screening & Background Verification",
      "Lease Drafting & Registration",
      "Timely Rent Collection & Remittance",
      "Routine Property Inspection & Maintenance Supervision"
    ],
    ourProcess: [
      { step: "01", title: "Tenant Vetting", description: "Verifying background, employment credentials, and references." },
      { step: "02", title: "Lease Execution", description: "Signing legally sound lease agreements and collecting security deposits." },
      { step: "03", title: "Ongoing Oversight", description: "Managing monthly rent collection, maintenance calls, and lease renewals." }
    ],
    benefits: [
      "Hands-off landlord experience",
      "Verified, reliable corporate and family tenants",
      "Timely monthly payout"
    ],
    ourApproach: "Protecting your asset value while securing consistent rental returns.",
    faqs: [
      { question: "Is this service suitable for overseas Pakistanis?", answer: "Absolutely. Overseas owners rely on us to manage their Karachi rental properties with full transparency." }
    ]
  },
  {
    id: "digital-real-estate-marketing",
    slug: "digital-real-estate-marketing",
    title: "Digital Real Estate Marketing",
    shortDescription: "Modern digital video campaigns, social media marketing, and targeted lead generation for projects.",
    icon: "Sparkles",
    introduction: "In today's digital-first market, Blessing Marketing utilizes cutting-edge video production, social media advertising, and search positioning to place your project in front of qualified buyers.",
    whatWeDo: [
      "HD Video Property Walkthroughs & Aerial Drone Shoots",
      "Social Media Campaigns across Facebook, Instagram, YouTube & TikTok",
      "Targeted Meta & Google Lead Generation Ads",
      "Digital Content Cards & Property Reels Production"
    ],
    ourProcess: [
      { step: "01", title: "Content Creation", description: "Filming high-impact property video walkthroughs and highlights." },
      { step: "02", title: "Ad Campaign Deployment", description: "Targeting high-net-worth audiences locally and internationally." },
      { step: "03", title: "Lead Delivery", description: "Delivering real-time qualified sales inquiries directly to sales teams." }
    ],
    benefits: [
      "Massive digital reach across thousands of potential investors",
      "Professional media presentation elevating developer image"
    ],
    ourApproach: "High-visual impact campaigns designed to capture attention and convert interest into sales conversations.",
    faqs: [
      { question: "Do you produce property video tours for social media?", answer: "Yes! Video tours and Reels are a cornerstone of our digital marketing strategy." }
    ]
  }
];
