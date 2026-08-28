export type PropertyPurpose = 'sale' | 'rent';

export type PropertyType = 
  | 'house' 
  | 'apartment' 
  | 'plot' 
  | 'commercial' 
  | 'office' 
  | 'shop' 
  | 'farmhouse'
  | 'project';

export type PropertyStatus =
  | 'available'
  | 'featured'
  | 'reserved'
  | 'sold'
  | 'rented'
  | 'new'
  | 'ongoing'
  | 'completed';

export interface Property {
  id: string;
  slug: string;
  title: string;
  purpose: PropertyPurpose;
  type: PropertyType;
  status?: PropertyStatus;
  price: number;
  priceDisplay: string;
  location: string;
  subLocation?: string;
  city: string;
  area: number;
  areaUnit: 'marla' | 'sqft' | 'sqyd' | 'kanal';
  bedrooms?: number;
  bathrooms?: number;
  parking?: number;
  floors?: number;
  description: string;
  features: string[];
  images: string[];
  videoUrl?: string;
  virtualTourUrl?: string;
  featured: boolean;
  isNew?: boolean;
  dateAdded: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  agentInfo?: {
    name: string;
    phone: string;
    whatsapp: string;
    role: string;
  };
}

export interface PropertyFilterState {
  searchQuery: string;
  purpose: 'all' | 'sale' | 'rent';
  type: 'all' | PropertyType;
  location: string;
  minPrice: number;
  maxPrice: number;
  bedrooms: string;
  sortBy: 'newest' | 'price-asc' | 'price-desc' | 'area-desc';
}
