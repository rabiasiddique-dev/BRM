import { Project } from '@/types/project';

export const projectsData: Project[] = [
  {
    id: "proj-1",
    slug: "blessing-heights-clifton",
    name: "Blessing Heights & Executive Suites",
    location: "Clifton Block 2, Karachi",
    city: "Karachi",
    propertyTypes: ["Luxury Apartments", "Penthouses", "Executive Retail"],
    startingPrice: "PKR 2.8 Crore",
    status: "New",
    heroImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "Blessing Heights is an iconic 22-story luxury residential and executive tower situated in Clifton Block 2. Offering 2, 3, and 4-bedroom ocean-facing residences with smart home automation, private elevator access, and multi-tier security.",
    highlights: [
      "22 Stories of Coastal Architectural Elegance",
      "Smart Home Automation Pre-Installed",
      "Dedicated 4-Level Underground Parking",
      "Infinity Sky Pool & Health Club",
      "3-Year Flexible Quarterly Payment Plan"
    ],
    amenities: [
      "Rooftop Swimming Pool",
      "Modern Gymnasium",
      "24/7 Power Backup Generators",
      "High-Speed Elevators",
      "Biometric Security Entrance",
      "Children Play Area",
      "Valet Parking"
    ],
    paymentPlan: [
      { installmentPeriod: "Booking & Down Payment", amountDisplay: "20%", note: "Immediate Allotment" },
      { installmentPeriod: "Confirmation Fee (Month 3)", amountDisplay: "10%", note: "Building Footing Complete" },
      { installmentPeriod: "36 Monthly Installments", amountDisplay: "1.5% monthly", note: "Flexible Direct Bank Transfer" },
      { installmentPeriod: "6 Half-Yearly Installments", amountDisplay: "3% bi-annually", note: "Milestone Linked" },
      { installmentPeriod: "On Physical Handover", amountDisplay: "12%", note: "Possession December 2028" }
    ],
    availableUnits: ["2-Bed Executive (1,350 sqft)", "3-Bed Luxury (1,950 sqft)", "4-Bed Royal Penthouse (3,400 sqft)"],
    deliveryDate: "December 2028",
    developer: "Blessing Development Alliance"
  },
  {
    id: "proj-2",
    slug: "dha-city-commercial-plaza",
    name: "Blessing Corporate Boulevard",
    location: "DHA City Sector 3 Commercial",
    city: "Karachi",
    propertyTypes: ["Corporate Offices", "Retail Outlets", "Food Court Units"],
    startingPrice: "PKR 1.2 Crore",
    status: "Featured",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "A flagship commercial plaza situated in the fastest-growing sector of DHA City Karachi. Designed for maximum retail exposure, corporate headquarters, and high-footfall brand outlets.",
    highlights: [
      "Prime Main Boulevard Corner Lot",
      "Double Height Retail Showrooms",
      "Solar Integrated Power Grid",
      "Guaranteed Rental Assistance Option"
    ],
    amenities: [
      "Central Air Conditioning",
      "Escalators & Panoramic Elevators",
      "Food Court Level",
      "Ample Visitor Parking"
    ],
    paymentPlan: [
      { installmentPeriod: "Down Payment", amountDisplay: "25%", note: "Immediate Unit Selection" },
      { installmentPeriod: "24 Monthly Installments", amountDisplay: "2.5% monthly", note: "Zero Interest" },
      { installmentPeriod: "On Possession", amountDisplay: "15%", note: "Target Handover Q4 2027" }
    ],
    availableUnits: ["Ground Retail (450 sqft)", "Mezzanine Shop (550 sqft)", "Corporate Office Floor (2,200 sqft)"],
    deliveryDate: "October 2027",
    developer: "Blessing Marketing Commercial Wing"
  },
  {
    id: "proj-3",
    slug: "gulshan-avenue-residences",
    name: "Gulshan Premium Enclave",
    location: "Main University Road, Gulshan-e-Iqbal Block 13/B",
    city: "Karachi",
    propertyTypes: ["Residential Apartments", "Supermarket Outlets"],
    startingPrice: "PKR 1.8 Crore",
    status: "Ongoing",
    heroImage: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "A family-focused residential community located steps away from Karachi's major educational institutions and health networks.",
    highlights: [
      "Central Location on Main Arterial Road",
      "Family Park & Kids Play Area",
      "Dedicated RO Water Filtration Plant"
    ],
    amenities: [
      "24/7 Security & CCTV",
      "Dedicated Parking",
      "Mosque & Community Center"
    ],
    paymentPlan: [
      { installmentPeriod: "Booking", amountDisplay: "30%", note: "Direct Allotment" },
      { installmentPeriod: "Balance Easy Installments", amountDisplay: "70%", note: "Over 24 Months" }
    ],
    availableUnits: ["3-Bed Standard (1,400 sqft)", "4-Bed Corner Executive (1,850 sqft)"],
    deliveryDate: "June 2027",
    developer: "Saleem Avenue Developers"
  }
];
