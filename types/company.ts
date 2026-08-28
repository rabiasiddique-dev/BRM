export interface OfficeAddress {
  branchName: string;
  address: string;
  city: string;
  phoneNumbers: string[];
  whatsapp?: string;
  email?: string;
  workingHours?: string;
  mapUrl?: string;
  isPrimary?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  department: 'management' | 'sales' | 'consultants' | 'marketing';
  phone?: string;
  whatsapp?: string;
  email?: string;
  bio?: string;
  avatar?: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon?: string;
}

export interface AreaServed {
  name: string;
  slug: string;
  description: string;
  propertyCount?: number;
  image?: string;
}

export interface CompanyInfo {
  name: string;
  shortName?: string;
  abbreviation?: string;
  tagline: string;
  subTagline?: string;
  foundedYear?: string;
  story?: string;
  representative: {
    name: string;
    title: string;
    role?: string;
    email: string;
    phone: string;
    whatsapp: string;
    bio: string;
    fullBio?: string;
    background?: string[];
    avatar: string;
    linkedin?: string;
  };
  team?: TeamMember[];
  email: string;
  phoneNumbers: string[];
  primaryWhatsApp: string;
  offices: OfficeAddress[];
  areasServed?: AreaServed[];
  timeline?: TimelineEvent[];
  verifications?: {
    label: string;
    description?: string;
    icon?: string;
  }[];
  socials: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
    linkedin?: string;
    tiktok?: string;
  };
}
