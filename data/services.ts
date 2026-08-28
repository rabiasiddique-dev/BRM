export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "buying",
    title: "Property Buying Advisory",
    shortDesc: "Find carefully verified luxury villas, residential plots, and commercial assets tailored to your budget and lifestyle.",
    fullDesc: "Our dedicated consultants match your specific location, layout, and investment requirements with vetted property opportunities across DHA, Clifton, Gulshan-e-Iqbal, and Bahria Town Karachi. We handle documentation verification, market valuation analysis, and seamless title transfer support.",
    iconName: "Home",
    features: [
      "Physical Site Inspection Escort",
      "Document & Title Verification",
      "Market Comparative Price Valuation",
      "Cantonment & MDA Transfer Assistance"
    ]
  },
  {
    id: "selling",
    title: "Property Selling & Marketing",
    shortDesc: "Maximize your property's value with targeted digital marketing, verified investor reach, and professional negotiations.",
    fullDesc: "We present your property with professional photography, virtual walkthroughs, targeted buyer outreach, and direct negotiation to close deals at optimum market prices with complete safety.",
    iconName: "TrendingUp",
    features: [
      "High-Resolution Property Photography",
      "Targeted Investor Network Outreach",
      "Competitive Market Price Optimization",
      "Legal Documentation & Deed Preparation"
    ]
  },
  {
    id: "rental",
    title: "Commercial & Residential Rental Management",
    shortDesc: "Comprehensive tenant vetting, lease drafting, and high-yield corporate and residential rental placements.",
    fullDesc: "Whether leasing high-rise corporate office floors on University Road or executive DHA bungalows, we connect reliable landlords with verified corporate and residential tenants.",
    iconName: "Key",
    features: [
      "Background Check & Tenant Vetting",
      "Legally Binding Tenancy Agreements",
      "Rent Collection Oversight",
      "Commercial Lease Renewal Negotiations"
    ]
  },
  {
    id: "investment",
    title: "Real Estate Investment Consultancy",
    shortDesc: "Strategic portfolio management, pre-launch developer bookings, and high ROI commercial assets.",
    fullDesc: "We analyze capital growth trajectories, rental yields, and upcoming civic infrastructure projects in Karachi to recommend high-return residential plots, off-plan projects, and commercial shops.",
    iconName: "PieChart",
    features: [
      "High-Yield ROI Property Matching",
      "Off-Plan Developer Project Bookings",
      "Overseas Pakistani Portfolio Management",
      "Capital Appreciation Risk Assessment"
    ]
  },
  {
    id: "project-marketing",
    title: "Project Marketing & Exclusive Sales Agency",
    shortDesc: "End-to-end sales representation, branding, and marketing for real estate developers and builders.",
    fullDesc: "Blessing Marketing partners with reputable builders to lead nationwide launch campaigns, sales office management, lead generation, and customer onboarding for mega developments.",
    iconName: "Building2",
    features: [
      "360-Degree Digital & Ground Campaigns",
      "Dedicated Sales Team Management",
      "Payment Plan Structuring",
      "Lead Conversion & Buyer Onboarding"
    ]
  },
  {
    id: "commercial",
    title: "Commercial & Corporate Real Estate",
    shortDesc: "Specialized advisory for retail shops, office towers, warehouses, and industrial land acquisitions.",
    fullDesc: "Dedicated solutions for businesses seeking high-visibility retail locations, corporate office spaces, or logistics hubs in Karachi's prime commercial districts.",
    iconName: "Briefcase",
    features: [
      "High-Footfall Retail Site Selection",
      "Corporate Floor Layout Consultation",
      "Long-Term Lease Structuring",
      "Zoning & Commercial Clearance Verification"
    ]
  }
];
