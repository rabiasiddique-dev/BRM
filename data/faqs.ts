export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'buying' | 'selling' | 'renting' | 'investment' | 'general' | 'services';
}

export const faqsData: FAQ[] = [
  // Buying
  {
    id: "faq-1",
    question: "How can I buy a property through Blessing Marketing?",
    answer: "Simply browse our property listings online and contact our team via WhatsApp, phone, or our inquiry form. Our consultant will arrange a site visit, guide you through documentation and title verification, and support you until the transfer is complete.",
    category: "buying",
  },
  {
    id: "faq-2",
    question: "What documents are required to buy a property in Karachi?",
    answer: "Generally you'll need your CNIC (original + copies), two passport-size photographs, and the purchase price funds. The seller provides the original title documents, which our team verifies before any token money is paid.",
    category: "buying",
  },
  {
    id: "faq-3",
    question: "How do you verify a property's legal status?",
    answer: "We conduct a full title check at the relevant authority (Cantonment Board, KDA, MDA, or DHA), confirm all outstanding dues are cleared, verify the seller's ownership chain, and only proceed after every document checks out clean.",
    category: "buying",
  },
  {
    id: "faq-4",
    question: "How long does the property transfer process take?",
    answer: "Transfer timelines vary by authority. DHA Cantonment transfers typically take 30–60 days. KDA/MDA transfers may take 45–90 days. Our team handles the entire process and keeps you informed at every step.",
    category: "buying",
  },
  // Selling
  {
    id: "faq-5",
    question: "How can I sell my property through Blessing Marketing?",
    answer: "Fill out our 'Sell Your Property' form or contact us directly. Our team will assess your property, prepare a market valuation, list it across our digital channels and investor network, and find you a qualified buyer at the best possible price.",
    category: "selling",
  },
  {
    id: "faq-6",
    question: "What marketing do you provide for my property?",
    answer: "We offer professional photography, featured listings on our website, targeted social media promotion, video tours, and direct outreach to our verified investor and buyer network — maximizing exposure for your property.",
    category: "selling",
  },
  {
    id: "faq-7",
    question: "How do you determine the right price for my property?",
    answer: "We conduct a Comparative Market Analysis (CMA) using recent comparable sales in your area, current demand, property condition, and location advantages to recommend the most competitive and realistic asking price.",
    category: "selling",
  },
  // Renting
  {
    id: "faq-8",
    question: "Do you offer rental services for landlords?",
    answer: "Yes. We handle complete tenant sourcing, background verification, tenancy agreement drafting, and ongoing lease management. We connect your property with corporate and individual tenants to minimize vacancy.",
    category: "renting",
  },
  {
    id: "faq-9",
    question: "How do you vet tenants?",
    answer: "We conduct CNIC verification, employment confirmation, reference checks, and assess rental history before presenting any tenant to a landlord. All tenancy agreements are properly drafted and legally binding.",
    category: "renting",
  },
  {
    id: "faq-10",
    question: "How can I list my property for rent?",
    answer: "Visit our 'Rent Your Property' page and fill out the listing form with your property details, location, and expected rent. Our team will contact you within 24 hours to proceed.",
    category: "renting",
  },
  // Investment
  {
    id: "faq-11",
    question: "Do you provide investment consultation?",
    answer: "Absolutely. Our investment advisory service covers high-yield commercial properties, off-plan project bookings, pre-launch developer rates, and residential plots with strong capital appreciation potential across Karachi.",
    category: "investment",
  },
  {
    id: "faq-12",
    question: "Which areas of Karachi offer the best investment potential?",
    answer: "DHA phases (especially Phase 6, 7, 8), Clifton, Bahria Town, and rapidly developing corridors like Taiser Town offer strong returns. The right choice depends on your budget, timeline, and risk appetite — our consultants can guide you.",
    category: "investment",
  },
  {
    id: "faq-13",
    question: "Can overseas Pakistanis invest through Blessing Marketing?",
    answer: "Yes. We assist overseas Pakistanis with remote property selection, documentation, power of attorney arrangements, and Roshan Digital Account-eligible investments. Your investment is managed with full transparency.",
    category: "investment",
  },
  // General
  {
    id: "faq-14",
    question: "Which areas of Karachi do you cover?",
    answer: "We actively serve DHA (all phases), Clifton, Gulshan-e-Iqbal, PECHS, Bahria Town Karachi, Taiser Town, Malir, and surrounding neighbourhoods. Our two offices in DHA and Gulshan give us city-wide coverage.",
    category: "general",
  },
  {
    id: "faq-15",
    question: "How can I schedule a site visit?",
    answer: "Use our 'Schedule a Site Visit' form, WhatsApp us directly, or call our office. We'll arrange a convenient time for a guided physical inspection of any property you're interested in.",
    category: "general",
  },
  {
    id: "faq-16",
    question: "What are your office hours?",
    answer: "Both our DHA Phase-II Extension and Gulshan-e-Iqbal offices are open Monday to Saturday, 10:00 AM to 7:00 PM. You can also reach us via WhatsApp outside office hours.",
    category: "general",
  },
  {
    id: "faq-17",
    question: "Is there any fee for property consultation?",
    answer: "Initial consultation is free. Our agency commission applies only on successful transactions — for buying/selling, the standard brokerage commission applies as per market norms. There are no hidden charges.",
    category: "general",
  },
];
