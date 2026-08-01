export interface MedicineItem {
  id: string;
  name: string;
  brand: string;
  category: string;
  mrp: number;
  quantity: number;
  expiry: string;
  status: 'Available' | 'Limited Stock' | 'Out of Stock';
  dosage?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  items: string[];
  popularProducts: string[];
  badge?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface ReviewItem {
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface HealthTip {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  content: string;
  image: string;
  date: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: string;
  url: string;
  caption: string;
}
