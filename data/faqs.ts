export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export type FAQ = FAQItem;

export const faqsData: FAQItem[] = [
  {
    id: "faq-1",
    category: "Company Overview",
    question: "Who is Blessing Marketing & Real Estate?",
    answer: "Blessing Marketing & Real Estate (Pvt. Ltd) is a premier real estate marketing, consultancy, and project representation company based in Karachi. Led by CEO Syed M. Hassan Shah, we specialize in corporate marketing for residential and commercial developments, investment advisory, and transaction representation."
  },
  {
    id: "faq-2",
    category: "Services",
    question: "What services do you provide?",
    answer: "We offer end-to-end real estate capabilities: Project Marketing, Real Estate Consultancy, Commercial Advisory, Investment Consultancy, Corporate Real Estate Services, Property Marketing, Sales & Business Development, Rental/Asset Management, and Digital Real Estate Marketing."
  },
  {
    id: "faq-3",
    category: "Developer Partnerships",
    question: "Do you work with real estate developers and builders?",
    answer: "Yes. We act as exclusive or preferred marketing and sales representation partners for real estate builders and developers across Karachi. We handle full project positioning, omnichannel branding, video walkthrough production, launch events, and sales pipeline conversion."
  },
  {
    id: "faq-4",
    category: "Project Representation",
    question: "Do you provide project marketing for off-plan developments?",
    answer: "Yes, Project Marketing is one of our primary core strengths. We represent high-profile developments such as Blessing Heights Clifton, Blessing Corporate Boulevard, and Gulshan Premium Enclave."
  },
  {
    id: "faq-5",
    category: "Investment Advisory",
    question: "Do you provide investment consultancy for overseas Pakistanis and institutional investors?",
    answer: "Yes. We advise clients, family offices, and overseas Pakistanis on high-ROI commercial opportunities, inflation-hedged capital growth, and rental yield portfolios with complete legal documentation and remote transaction support."
  },
  {
    id: "faq-6",
    category: "Market Coverage",
    question: "Which real estate markets do you serve?",
    answer: "We primarily serve Karachi's prime residential and commercial corridors, including DHA Karachi (Phases 1 through 8 & DHA City), Clifton, Gulshan-e-Iqbal, Main University Road, and Bahria Town."
  },
  {
    id: "faq-7",
    category: "Developer Outreach",
    question: "How can real estate developers partner with Blessing Marketing?",
    answer: "Developers can contact our corporate office directly or submit a project proposal via our website contact form under 'Project Marketing' or 'Partnership'. CEO Syed M. Hassan Shah and our senior project team will schedule a private presentation."
  },
  {
    id: "faq-8",
    category: "Contact & Consultations",
    question: "How can clients contact your team or visit your offices?",
    answer: "You can reach us directly on our hotline 0300-3413372 or via WhatsApp. You are also welcome to visit our permanently staffed offices in DHA Phase-II Extension and Gulshan-e-Iqbal, Karachi."
  }
];
