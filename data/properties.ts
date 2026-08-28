import { Property } from '@/types/property';

export const propertiesData: Property[] = [
  {
    id: "prop-1",
    slug: "modern-5-marla-luxury-house-dha-phase-5-karachi",
    title: "Modern 5 Marla Architectural Villa",
    purpose: "sale",
    type: "house",
    status: "new",
    price: 45000000,
    priceDisplay: "PKR 4.5 Crore",
    location: "DHA Phase 5",
    subLocation: "21st Commercial Street Area",
    city: "Karachi",
    area: 5,
    areaUnit: "marla",
    bedrooms: 4,
    bathrooms: 5,
    parking: 2,
    floors: 2,
    description: "An architect-designed double-story luxury home located in the heart of DHA Phase 5. Features imported porcelain floor tiles, designer Italian kitchen fittings, spacious drawing & dining rooms, servant quarter, rooftop garden view, and dual car garage with electric gates.",
    features: [
      "24/7 Gated Security",
      "Gas & Water Connection",
      "Solar Net Metering Ready",
      "Servant Quarter",
      "Designer Kitchen",
      "Drawing & Dining Room",
      "Roof Top Terrace",
      "Dual Car Parking"
    ],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
    ],
    featured: true,
    isNew: true,
    dateAdded: "2026-08-15",
    coordinates: { lat: 24.8214, lng: 67.0678 },
    agentInfo: {
      name: "Syed M. Hassan Shah",
      phone: "0300-3413372",
      whatsapp: "923003413372",
      role: "CEO & Chief Real Estate Consultant"
    }
  },
  {
    id: "prop-2",
    slug: "executive-3-bed-sea-view-apartment-clifton-karachi",
    title: "Executive 3-Bed Panoramic Sea View Residence",
    purpose: "sale",
    type: "apartment",
    status: "featured",
    price: 38000000,
    priceDisplay: "PKR 3.8 Crore",
    location: "Clifton Block 4",
    subLocation: "Near Sea View Promenade",
    city: "Karachi",
    area: 2200,
    areaUnit: "sqft",
    bedrooms: 3,
    bathrooms: 4,
    parking: 2,
    floors: 1,
    description: "Premium high-rise apartment offering unobstructed views of the Arabian Sea. Open floor layout with floor-to-ceiling windows, high-speed elevator access, 24/7 backup power standby generators, indoor pool access, and dedicated basement parking.",
    features: [
      "Sea View Terrace",
      "100% Standby Generator",
      "High-Speed Elevators",
      "Gym & Swimming Pool",
      "Intercom Security System",
      "Basement Parking",
      "Maintenance Staff"
    ],
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80"
    ],
    featured: true,
    isNew: false,
    dateAdded: "2026-08-10",
    coordinates: { lat: 24.8138, lng: 67.0302 },
    agentInfo: {
      name: "Syed M. Hassan Shah",
      phone: "0300-3413372",
      whatsapp: "923003413372",
      role: "CEO & Chief Real Estate Consultant"
    }
  },
  {
    id: "prop-3",
    slug: "prime-commercial-office-floor-gulshan-e-iqbal",
    title: "Prime Main Boulevard Commercial Office",
    purpose: "rent",
    type: "office",
    status: "available",
    price: 350000,
    priceDisplay: "PKR 3.5 Lac / month",
    location: "Gulshan-e-Iqbal Block 13/B",
    subLocation: "Main University Road",
    city: "Karachi",
    area: 2500,
    areaUnit: "sqft",
    bedrooms: 0,
    bathrooms: 2,
    parking: 4,
    floors: 1,
    description: "Fully partitioned corporate office space situated on Main University Road, Gulshan-e-Iqbal. Ideal for software houses, corporate headquarters, law firms, or marketing agencies. Includes executive suite, meeting hall, server room, and high visibility glass facade.",
    features: [
      "Main Road Frontage",
      "Executive Meeting Room",
      "Central HVAC Ducting",
      "CCTV Surveillance",
      "Reserved Reserved Parking",
      "High Visibility Signage"
    ],
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80"
    ],
    featured: true,
    isNew: true,
    dateAdded: "2026-08-20",
    coordinates: { lat: 24.9180, lng: 67.0971 },
    agentInfo: {
      name: "Syed M. Hassan Shah",
      phone: "0336-3258747",
      whatsapp: "923003413372",
      role: "CEO & Chief Real Estate Consultant"
    }
  },
  {
    id: "prop-4",
    slug: "500-sqyd-residential-plot-dha-phase-8-karachi",
    title: "500 Sq Yds Prime Residential Plot",
    purpose: "sale",
    type: "plot",
    status: "available",
    price: 78000000,
    priceDisplay: "PKR 7.8 Crore",
    location: "DHA Phase 8",
    subLocation: "Zone B Near Golf Club",
    city: "Karachi",
    area: 500,
    areaUnit: "sqyd",
    bedrooms: 0,
    bathrooms: 0,
    parking: 0,
    description: "Direct owner listing for a 500 sq yds west-open residential plot in DHA Phase 8 Zone B. Clear title with all cantonment dues paid. Located on a wide 60ft boulevard near Creek Club and major commercial hubs.",
    features: [
      "West-Open Position",
      "60 Feet Wide Road",
      "Clear Title & Dues Paid",
      "Near DHA Country & Golf Club",
      "Immediate Demarcation Ready"
    ],
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?auto=format&fit=crop&w=1200&q=80"
    ],
    featured: true,
    isNew: false,
    dateAdded: "2026-08-01",
    coordinates: { lat: 24.7891, lng: 67.0850 },
    agentInfo: {
      name: "Syed M. Hassan Shah",
      phone: "0300-3413372",
      whatsapp: "923003413372",
      role: "CEO & Chief Real Estate Consultant"
    }
  },
  {
    id: "prop-5",
    slug: "luxury-farmhouse-malir-cantt-expressway-karachi",
    title: "Resort-Style Luxury Farmhouse",
    purpose: "sale",
    type: "farmhouse",
    status: "new",
    price: 95000000,
    priceDisplay: "PKR 9.5 Crore",
    location: "Malir Cantonment / Expressway",
    subLocation: "Gadap Road Corridor",
    city: "Karachi",
    area: 4,
    areaUnit: "kanal",
    bedrooms: 5,
    bathrooms: 6,
    parking: 8,
    floors: 1,
    description: "A 4-Kanal private weekend retreat complete with Olympic-sized swimming pool, manicured lawns, fruit orchards, guest house cottage, and full security wall enclosure. High-yield rental potential for corporate retreats and family events.",
    features: [
      "Private Swimming Pool",
      "4 Kanal Organic Gardens",
      "Deep Water Well & RO Plant",
      "Solar Power Backup",
      "Guest House Villa",
      "Barbecue Pavilion"
    ],
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80"
    ],
    featured: false,
    isNew: true,
    dateAdded: "2026-08-18",
    coordinates: { lat: 24.9600, lng: 67.1900 },
    agentInfo: {
      name: "Syed M. Hassan Shah",
      phone: "0300-3413372",
      whatsapp: "923003413372",
      role: "CEO & Chief Real Estate Consultant"
    }
  },
  {
    id: "prop-6",
    slug: "commercial-retail-shop-bahria-town-karachi",
    title: "Ground Floor Retail Shop Precinct 1",
    purpose: "sale",
    type: "shop",
    status: "available",
    price: 21000000,
    priceDisplay: "PKR 2.1 Crore",
    location: "Bahria Town",
    subLocation: "Precinct 1 Midway Commercial",
    city: "Karachi",
    area: 650,
    areaUnit: "sqft",
    bedrooms: 0,
    bathrooms: 1,
    parking: 2,
    description: "High-footfall ground floor commercial shop facing Midway Commercial Avenue in Bahria Town Karachi. Currently tenanted by a national retail brand generating immediate high monthly rental yield.",
    features: [
      "Ground Floor Frontage",
      "Immediate High Rental Yield",
      "High Footfall Avenue",
      "24/7 Bahria Security",
      "Corner Commercial Block"
    ],
    images: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80"
    ],
    featured: false,
    isNew: false,
    dateAdded: "2026-07-28",
    coordinates: { lat: 25.0120, lng: 67.3100 },
    agentInfo: {
      name: "Syed M. Hassan Shah",
      phone: "0336-3258747",
      whatsapp: "923003413372",
      role: "CEO & Chief Real Estate Consultant"
    }
  },
  {
    id: "prop-7",
    slug: "120-sqyd-residential-plot-taiser-town-karachi",
    title: "120 Sq Yds Sector 45 Plot Opportunity",
    purpose: "sale",
    type: "plot",
    status: "new",
    price: 4500000,
    priceDisplay: "PKR 45 Lac",
    location: "Taiser Town",
    subLocation: "MDA Scheme 45",
    city: "Karachi",
    area: 120,
    areaUnit: "sqyd",
    bedrooms: 0,
    bathrooms: 0,
    parking: 0,
    description: "An ideal low-capital entry plot for future construction or high appreciation investment in MDA Scheme 45 Taiser Town. Nearby rapidly expanding infrastructure and northern bypass link roads.",
    features: [
      "High Growth Potential",
      "MDA Allotment Letter",
      "Corner Location Available",
      "Utility Lines Underway"
    ],
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
    ],
    featured: false,
    isNew: true,
    dateAdded: "2026-08-22",
    coordinates: { lat: 25.0400, lng: 67.1200 },
    agentInfo: {
      name: "Syed M. Hassan Shah",
      phone: "0300-3413372",
      whatsapp: "923003413372",
      role: "CEO & Chief Real Estate Consultant"
    }
  },
  {
    id: "prop-8",
    slug: "designer-duplex-house-pechs-block-6-karachi",
    title: "Designer 400 Sq Yds Duplex Bungalow",
    purpose: "sale",
    type: "house",
    status: "featured",
    price: 135000000,
    priceDisplay: "PKR 13.5 Crore",
    location: "PECHS Block 6",
    subLocation: "Near Shahrah-e-Faisal",
    city: "Karachi",
    area: 400,
    areaUnit: "sqyd",
    bedrooms: 6,
    bathrooms: 7,
    parking: 3,
    floors: 2,
    description: "A newly built modern architectural masterpiece featuring dual unit duplex design. Perfect for multi-generational families or dual rental income. Premium teak wood doors, Spanish tile finishes, basement storage lounge, and landscaped front patio.",
    features: [
      "Dual Separate Entrances",
      "Basement Recreation Lounge",
      "Spanish & Italian Tile Finishes",
      "3 Car Covered Garage",
      "Servant Room with Bathroom",
      "Teak Wood Cabinetry"
    ],
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-3d881072d8a9?auto=format&fit=crop&w=1200&q=80"
    ],
    featured: true,
    isNew: false,
    dateAdded: "2026-08-05",
    coordinates: { lat: 24.8600, lng: 67.0700 },
    agentInfo: {
      name: "Syed M. Hassan Shah",
      phone: "0300-3413372",
      whatsapp: "923003413372",
      role: "CEO & Chief Real Estate Consultant"
    }
  }
];
