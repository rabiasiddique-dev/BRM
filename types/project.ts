export type ProjectStatus = 'New Launch' | 'Featured' | 'Under Construction' | 'Completed' | 'Sold Out';

export interface PaymentPlanItem {
  installmentPeriod: string;
  amountDisplay: string;
  note?: string;
}

export interface ProgressStep {
  stage: string;
  status: 'Completed' | 'In Progress' | 'Upcoming';
  date?: string;
}

export interface ProjectDocument {
  name: string;
  type: string;
  size: string;
  downloadUrl: string;
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  location: string;
  city: string;
  projectType: string; // e.g. "Residential & Commercial", "Luxury Tower", "Corporate Boulevard"
  ourRole: string; // e.g. "Exclusive Marketing Partner", "Project Marketing & Sales Representation"
  developerPartner?: string;
  status: ProjectStatus;
  heroImage: string;
  gallery: string[];
  overview: string;
  highlights: string[];
  amenities: string[];
  masterplanImage?: string;
  videoUrl?: string;
  progressPercentage?: number;
  progressSteps?: ProgressStep[];
  paymentPlan?: PaymentPlanItem[];
  documents?: ProjectDocument[];
}

