export interface CaseStudy {
  id: string;
  slug: string;
  clientName: string;
  projectName: string;
  category: string;
  heroImage: string;
  challenge: string;
  strategy: string;
  execution: string;
  results: {
    metric: string;
    label: string;
  }[];
  gallery?: string[];
  videoUrl?: string;
}

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  category: 'Project Marketing' | 'Corporate Real Estate' | 'Residential' | 'Commercial' | 'Investment' | 'Brand Campaigns' | 'Digital Marketing' | 'Sales & Business Development';
  role: string;
  client?: string;
  location: string;
  year: string;
  thumbnail: string;
  description: string;
  highlights: string[];
}
