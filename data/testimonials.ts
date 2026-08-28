export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  rating: number;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    quote: "Syed Hassan Shah and the Blessing Marketing team provided exceptional guidance when we bought our family home in DHA Phase 5. Every property document was thoroughly verified before token payment.",
    author: "Dr. Tariq Mahmood",
    role: "DHA House Buyer",
    location: "Karachi",
    rating: 5,
  },
  {
    id: "test-2",
    quote: "As an overseas investor in Dubai, securing a commercial office unit in Gulshan-e-Iqbal was completely smooth. They kept me updated via WhatsApp videos and handled all transfer paperwork transparently.",
    author: "M. Kamran Sheikh",
    role: "Commercial Investor",
    location: "Dubai / Karachi",
    rating: 5,
  },
  {
    id: "test-3",
    quote: "Their market estimation of our PECHS plot was spot on. Blessing Marketing marketed the property professionally and finalized a clean deal within three weeks.",
    author: "Mrs. Shahida Parveen",
    role: "Plot Seller",
    location: "PECHS, Karachi",
    rating: 5,
  },
];
