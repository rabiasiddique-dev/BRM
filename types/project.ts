export type ProjectStatus = 'New' | 'Featured' | 'Ongoing' | 'Completed';

export interface PaymentPlanItem {
  installmentPeriod: string;
  amountDisplay: string;
  note?: string;
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  location: string;
  city: string;
  propertyTypes: string[];
  startingPrice: string;
  status: ProjectStatus;
  heroImage: string;
  gallery: string[];
  overview: string;
  highlights: string[];
  amenities: string[];
  paymentPlan?: PaymentPlanItem[];
  availableUnits?: string[];
  deliveryDate?: string;
  developer?: string;
}
