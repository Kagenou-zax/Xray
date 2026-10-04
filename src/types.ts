export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  priceNgn: number;
  priceDisplay: string;
  pricingNote: string;
  image: string;
  gradient: string;
  primaryTone: string;
  accentDetail: string;
  silhouetteType: 'slide' | 'slipper';
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  category: string;
  size: string;
  leatherTone: string;
  quantity: number;
  pricingNote: string;
  gradient: string;
  image: string;
  customNote?: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface AboutPoint {
  title: string;
  detail: string;
}
