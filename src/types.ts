export type Category = 'Spices' | 'Lentils & Pulses (Dal)' | 'Rice & Grains' | 'Atta & Flours' | 'Oils & Ghee' | 'Snacks & Namkeen' | 'Frozen / Ready-to-cook' | 'Bulk / Wholesale';

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  alternateNames: string[];
  description: string;
  shortDescription: string;
  images: string[];
  category: Category;
  ingredients: string[];
  howToUse: string;
  storageTips: string;
  origin: string;
  freshnessGuarantee: string;
  usedInDishes: string[];
  pairsWellWith: string[];
  nutritionalInfo: {
    calories: string;
    fat: string;
    carbs: string;
    protein: string;
  };
  reviews: Review[];
  stock: number;
  isBestSeller?: boolean;
  isNew?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  phone: string;
  role: 'user' | 'admin';
  addresses: Address[];
}

export interface Address {
  id: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  status: 'new' | 'called' | 'confirmed' | 'delivered';
  date: string;
  shippingAddress: Address;
  preferredCallTime?: string;
  notes?: string;
  callMeAsap?: boolean;
  whatsappInstead?: boolean;
}
